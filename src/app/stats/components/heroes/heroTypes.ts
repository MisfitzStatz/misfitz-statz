import type {
  HeroRunStats,
  HeroState,
} from "@/app/stats/types/stats";

export type HeroStatsMode = "total" | "season";

export interface HeroPanelProps {
  heroes: HeroState[];
  selectedHero: HeroState;
  mode: HeroStatsMode;
  onHeroChange: (heroId: string) => void;
  onModeChange: (mode: HeroStatsMode) => void;
  seasonName: string | null;
  heroStats: HeroRunStats | null;
  profilePicture: string;
}

const HERO_NAME_OVERRIDES: Record<string, string> = {
  flamey: "Drip",
};

const HERO_PROFILE_PICTURES: Record<string, string> = {
  beat: "/stats/pfp/beat.png",
  ray: "/stats/pfp/ray.png",
  rush: "/stats/pfp/rush.png",
  shade: "/stats/pfp/shade.png",
  flamey: "/stats/pfp/drip.png",
  drip: "/stats/pfp/drip.png",
  gloss: "/stats/pfp/gloss.png",
};

export function getHeroDisplayName(heroName: string): string {
  const normalized = heroName.trim().toLowerCase();
  return HERO_NAME_OVERRIDES[normalized] ?? heroName;
}

export function getHeroProfilePicture(heroName: string): string {
  const normalized = heroName.trim().toLowerCase();
  return HERO_PROFILE_PICTURES[normalized] ?? "/stats/pfp/beat.png";
}

export function formatHeroDuration(seconds: number | null | undefined): string {
  if (typeof seconds !== "number" || !Number.isFinite(seconds) || seconds < 0) {
    return "Unknown";
  }

  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m`;
  return `${Math.floor(seconds)}s`;
}

export function getHeroExtractionRate(stats: HeroRunStats | null): number | null {
  if (!stats || stats.gamesPlayed <= 0) return null;

  return Math.round((stats.extractions / stats.gamesPlayed) * 100);
}

export function formatSeasonLabel(seasonId: string | null): string {
  if (!seasonId) return "Season data unavailable";

  return seasonId.replace(/^Season_/, "").replace(/_/g, " ");
}

export const RELIC_AFFINITY_LEVELS = [1, 10, 20, 30, 40, 50] as const;

export function getRelicAffinity(level: number): number {
  if (!Number.isFinite(level) || level < 1) return 0;
  return RELIC_AFFINITY_LEVELS.filter((requiredLevel) => level >= requiredLevel).length;
}

export function getGuaranteedEvery(level: number): number {
  const affinity = getRelicAffinity(level);
  const values = [55, 50, 45, 40, 35, 30];
  return values[Math.max(0, Math.min(values.length - 1, affinity - 1))] ?? 55;
}
