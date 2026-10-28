import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/legal/", "/privacy/", "/terms/"],
        disallow: "/",
      },
    ],
    sitemap: "https://misfitzstatz.com/sitemap.xml",
  };
}
