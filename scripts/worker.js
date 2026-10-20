const BACKEND_URL = "https://api.misfitzstatz.com";

const PROXY_PREFIXES = [
  "/api/auth/",
  "/api/report",
];

function shouldProxy(pathname) {
  return PROXY_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix)
  );
}

function rewriteSetCookies(headers) {
  const output = new Headers(headers);
  const cookies = output.getSetCookie?.() ?? [];

  if (cookies.length === 0) {
    return output;
  }

  output.delete("set-cookie");

  for (const cookie of cookies) {
    const rewritten = cookie
      // The backend is behind the proxy. Never let it scope the
      // browser cookie to dashboard-antihero.duckdns.org.
      .replace(/;\s*Domain=[^;]+/gi, "")
      // The browser is now using a first-party session on pages.dev.
      .replace(/;\s*SameSite=None/gi, "; SameSite=Lax");

    output.append("set-cookie", rewritten);
  }

  return output;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!shouldProxy(url.pathname)) {
      return env.ASSETS.fetch(request);
    }

    let backendPath;

    if (url.pathname === "/api/report") {
      backendPath = "/api/report";
    } else {
      backendPath = url.pathname.replace(/^\/api/, "") || "/";
    }

    const backendUrl = new URL(backendPath, BACKEND_URL);
    backendUrl.search = url.search;

    const headers = new Headers(request.headers);

    // The browser's first-party cookie belongs to pages.dev.
    // Forward it to the real backend server-side.
    headers.delete("host");

    const backendRequest = new Request(backendUrl.toString(), {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : request.body,
      redirect: "manual",
    });

    const backendResponse = await fetch(backendRequest);

    return new Response(backendResponse.body, {
      status: backendResponse.status,
      statusText: backendResponse.statusText,
      headers: rewriteSetCookies(backendResponse.headers),
    });
  },
};
