import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://misfitzstatz.com";

const leaderboardCategories = [
  "relics_extracted",
  "playtime",
  "deaths",
  "bots_killed",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/stats/` },
    { url: `${BASE_URL}/leaderboards/` },

    // Game
    { url: `${BASE_URL}/game/misfits/` },
    { url: `${BASE_URL}/game/sneak-peeks/` },


    // Public information
    { url: `${BASE_URL}/status/` },
    { url: `${BASE_URL}/privacy/` },
    { url: `${BASE_URL}/terms/` },
    { url: `${BASE_URL}/legal/` },

    // Version information
    { url: `${BASE_URL}/version/game/` },
    { url: `${BASE_URL}/version/website/` },
  ];

  const leaderboardPages: MetadataRoute.Sitemap = [
    ...leaderboardCategories.flatMap((category) => [
      { url: `${BASE_URL}/leaderboards/${category}/all-time/` },
      { url: `${BASE_URL}/leaderboards/${category}/genesis/` },
    ]),
    // Biggest Extraction is only available for All-Time.
    { url: `${BASE_URL}/leaderboards/biggest_extraction/all-time/` },
  ];

  return [...staticPages, ...leaderboardPages];
}
