import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/hidden/",
        "/settings/",
        "/verification/",
        "/redeem/",
      ],
    },
    sitemap: "https://misfitzstatz.com/sitemap.xml",
  };
}
