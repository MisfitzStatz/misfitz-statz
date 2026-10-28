import LeaderboardsClient from "../LeaderboardClient";

const categories = [
  "relics_extracted",
  "playtime",
  "deaths",
  "bots_killed",
  "biggest_extraction",
];

const seasons = ["all-time", "genesis"];

// Required for Next.js static export: pre-render every supported URL.
export function generateStaticParams() {
  const params: { slug: string[] }[] = [
    { slug: [] },
    ...categories.map((category) => ({ slug: [category] })),
  ];

  for (const category of categories) {
    if (category === "biggest_extraction") {
      params.push({ slug: [category, "all-time"] });
    } else {
      for (const season of seasons) {
        params.push({ slug: [category, season] });
      }
    }
  }

  return params;
}

export default function LeaderboardsPage() {
  return <LeaderboardsClient />;
}
