import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://misfitzstatz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/legal/` },
    { url: `${BASE_URL}/privacy/` },
    { url: `${BASE_URL}/terms/` },
  ];
}
