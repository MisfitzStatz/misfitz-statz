export interface StatsResponse {
  $type: "Game.Server.Api.Public.PlayerContentResponse";

  playerId: string;
  playerName: string;
  playerLevel: number;

  stats: PlayerStats;
  statsHistory: StatsHistory;

  currentExtractionStreak: number;

  heroes: HeroState[];
  relics: Relics;
  dataCards: DataCards;
  achievements: Achievement[];

  [key: string]: unknown;
}

/* =========================================================
   PLAYER STATS
   ========================================================= */

export interface PlayerStats {
  $type: "Game.Server.Api.Public.PlayerStatsDto";

  deaths: number;
  gamesPlayed: number;
  gamesStarted: number;
  extractions: number;
  playtime: number;

  totalRelicsExtracted: number;

  gearByRarity: GearByRarity;
  gearByPart: GearByPart;

  bestStreak: number;
  longestRunSeconds: number;
  runsAbandoned: number;

  currentRank: number | null;

  runStats: RunStats;

  /*
   * Important:
   * This is NOT the same as the top-level heroes array.
   *
   * stats.heroes contains run statistics per hero.
   */
  heroes: Record<string, HeroRunStats>;

  [key: string]: unknown;
}

/* =========================================================
   GEAR
   ========================================================= */

export interface GearByRarity {
  Common: number;
  Rare: number;
  Epic: number;
  Legendary: number;
  Mythic: number;

  [rarity: string]: number;
}

export interface GearByPart {
  Boots: number;
  Head: number;
  Chest: number;

  [part: string]: number;
}

/* =========================================================
   RUN STATS
   ========================================================= */

export interface RunStats {
  BotsKilled: number;
  TeamUps: number;
  RelicsCollected: number;
  MiniBossesKilled: number;
  MostWantedSurvived: number;
  TeammatesRevived: number;
  WorldBossesKilled: number;

  [stat: string]: number;
}

/* =========================================================
   HERO RUN STATS
   ========================================================= */

export interface HeroRunStats {
  $type: "Game.Server.Api.Public.HeroRunStatsDto";

  gamesStarted: number;
  gamesPlayed: number;
  extractions: number;
  playtimeSeconds: number;
}

/* =========================================================
   STATS HISTORY
   ========================================================= */

export interface StatsHistory {
  $type: "Game.Server.Api.Public.StatsHistoryDto";

  bySeason: Record<string, SeasonStats>;

  currentExtractionStreak: number;
}

export interface SeasonStats extends PlayerStats {
  $type: "Game.Server.Api.Public.PlayerStatsDto";
}

/* =========================================================
   HERO STATES
   ========================================================= */

export interface HeroState {
  $type: "Game.Server.Api.Public.HeroStateDto";

  heroId: string;
  heroName: string;
  unlocked: boolean;
  level: number;
  unlockedAt: string;
}

/* =========================================================
   RELICS
   ========================================================= */

export interface Relics {
  $type: "Game.Server.Api.Public.RelicsDto";

  totalCollected: number;

  seasons: RelicSeason[];
}

export interface RelicSeason {
  $type: "Game.Server.Api.Public.RelicSeasonDto";

  seasonId: string;
  uniqueCollected: number;
  totalCollected: number;

  relics: Relic[];
}

export interface Relic {
  $type: "Game.Server.Api.Public.RelicDto";

  id: string;
  amount: number;
  claimed: boolean;
  collectedTs: string;
}

/* =========================================================
   DATA CARDS
   ========================================================= */

export interface DataCards {
  $type: "Game.Server.Api.Public.DataCardsDto";

  pinned: string[];

  cards: DataCard[];
}

export interface DataCard {
  $type: "Game.Server.Api.Public.DataCardDto";

  id: string;
  name: string;
  description: string;
  stat: string;
  format: DataCardFormat;
  rarity: DataCardRarity;

  sortOrder: number;

  owned: boolean;

  pinnedSlot: number | null;

  value: number;
}

export type DataCardFormat =
  | "Number"
  | "Duration"
  | "Percent"
  | string;

export type DataCardRarity =
  | "Common"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Mythic"
  | string;

/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

export interface Achievement {
  achievementID: string;
  achievementname: string;
  unlockedAt: number;
  unlockedBy: string;
}