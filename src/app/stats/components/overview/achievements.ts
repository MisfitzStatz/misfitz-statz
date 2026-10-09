import type { StatsResponse } from "../../types/stats";

export type AchievementColor = {
  background: string;
  border: string;
  text: string;
};

export type ResponseAchievementRequirement = {
  type: "response";
  achievementID: string;
};

export type GameAchievementRequirement = {
  name: string;
  description: string;
  path:
    | "stats.gearByRarity.Common"
    | "stats.gearByRarity.Rare"
    | "stats.gearByRarity.Epic"
    | "stats.gearByRarity.Legendary"
    | "stats.gearByRarity.Mythic"
    | "heroes.unlockedCount"
    | "stats.totalRelicsExtracted"
    | "stats.uniqueCollected"
    | "stats.playtime"
    | "stats.extractions"
    | "stats.deaths"
    | "stats.runStats.BotsKilled"
    | "stats.runStats.TeamUps"
    | "currentExtractionStreak"
    | "stats.longestRunSeconds";
  value: number;
  unit?: "hours";
};

export interface MisfitzStatzAchievementDefinition {
  id: string;
  name: string;
  description?: string;
  badgeID?: string;
  color: AchievementColor;
  requirement: ResponseAchievementRequirement;
}

export interface MisfitzGameAchievementDefinition {
  id: string;
  level: number;
  color: AchievementColor;
  requirements: GameAchievementRequirement[];
}

/*
 * Farben aus der Badge LevelUp-Alpha Tabelle.
 */
export const LEVEL_COLORS: Record<number, AchievementColor> = {
  1: {
    background: "#377DBA",
    border: "#377DBA",
    text: "#FFFFFF",
  },
  2: {
    background: "#49A0EF",
    border: "#49A0EF",
    text: "#FFFFFF",
  },
  3: {
    background: "#51AF32",
    border: "#51AF32",
    text: "#FFFFFF",
  },
  4: {
    background: "#7DD34D",
    border: "#7DD34D",
    text: "#FFFFFF",
  },
  5: {
    background: "#FFF36A",
    border: "#FFF36A",
    text: "#111111",
  },
  6: {
    background: "#F8DB55",
    border: "#F8DB55",
    text: "#111111",
  },
  7: {
    background: "#F5B33D",
    border: "#F5B33D",
    text: "#111111",
  },
  8: {
    background: "#E9792C",
    border: "#E9792C",
    text: "#FFFFFF",
  },
  9: {
    background: "#ED6B58",
    border: "#ED6B58",
    text: "#FFFFFF",
  },
  10: {
    background: "#E98CC0",
    border: "#E98CC0",
    text: "#FFFFFF",
  },
};

/*
 * MisfitzStatz eigene Achievements.
 */
export const MISFITZ_STATZ_ACHIEVEMENTS: MisfitzStatzAchievementDefinition[] = [
  {
    id: "15MS07",
    name: "Admin",
    description: "Admin of Misfitz Statz",
    badgeID: "15MS07",
    color: {
      background: "#D64545",
      border: "#D64545",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "15MS07",
    },
  },

  {
    id: "19MoMS",
    name: "Mod",
    description: "Moderator of Misfitz Statz",
    badgeID: "19MoMS",
    color: {
      background: "#8B5CF6",
      border: "#8B5CF6",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "19MoMS",
    },
  },

  {
    id: "No24De",
    name: "Official Dev",
    description: "Official Developer of Antihero Studios",
    badgeID: "No24De",
    color: {
      background: "#3B82F6",
      border: "#3B82F6",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "No24De",
    },
  },

  {
    id: "201stH",
    name: "1st hour",
    description: "One of first users joining MisfitzStatz",
    badgeID: "201stH",
    color: {
      background: "#F59E0B",
      border: "#F59E0B",
      text: "#111111",
    },
    requirement: {
      type: "response",
      achievementID: "201stH",
    },
  },

  {
    id: "27Only",
    name: "Onlyfitz",
    description: "Checked out Onlyfitz - hidden page",
    badgeID: "27Only",
    color: {
      background: "#EC4899",
      border: "#EC4899",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "27Only",
    },
  },

  {
    id: "Oc09CC",
    name: "CC",
    description:
      "Official content creator of Antihero Studios doing actively content",
    badgeID: "Oc09CC",
    color: {
      background: "#06B6D4",
      border: "#06B6D4",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "Oc09CC",
    },
  },

  {
    id: "AHPA05",
    name: "PA5",
    description: "Played pre-Alpha 5 - You played too? Ask on the support server for the badge",
    badgeID: "AHPA05",
    color: {
      background: "#22C55E",
      border: "#22C55E",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "AHPA05",
    },
  },

  {
    id: "AHPA06",
    name: "PA6",
    description: "Played pre-Alpha 6 - verify your account to be eligible",
    color: {
      background: "#14B8A6",
      border: "#14B8A6",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "AHPA06",
    },
  },

  {
    id: "LPlay1",
    name: "Touch grass",
    description: "Player with most playtime on Misfitz Statz",
    badgeID: "LPlay1",
    color: {
      background: "#84CC16",
      border: "#84CC16",
      text: "#111111",
    },
    requirement: {
      type: "response",
      achievementID: "LPlay1",
    },
  },

  {
    id: "LRel1",
    name: "Museum",
    description: "Extracted the highest amount of relics then anyone else",
    badgeID: "LRel1",
    color: {
      background: "#A855F7",
      border: "#A855F7",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "LRel1",
    },
  },

  {
    id: "LDeat1",
    name: "Failure",
    description: "Got killed most times in Misfitz",
    badgeID: "LDeat1",
    color: {
      background: "#EF4444",
      border: "#EF4444",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "LDeat1",
    },
  },

  {
    id: "LKill1",
    name: "Be aware",
    description: "Killed most players then anyone else",
    badgeID: "LKill1",
    color: {
      background: "#F97316",
      border: "#F97316",
      text: "#FFFFFF",
    },
    requirement: {
      type: "response",
      achievementID: "LKill1",
    },
  },
];


export const MISFITZ_GAME_ACHIEVEMENTS: MisfitzGameAchievementDefinition[] = [
  {
    id: "LevelUp-1",
    level: 1,
    color: LEVEL_COLORS[1],
    requirements: [
      {
        name: "Common",
        description: "Collect 50 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 50,
      },
      {
        name: "Rare",
        description: "Collect 50 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 50,
      },
      {
        name: "Epic",
        description: "Collect 50 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 50,
      },
      {
        name: "Legendary",
        description: "Collect 50 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 50,
      },
      {
        name: "Mythic",
        description: "Collect 10 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 10,
      },
      {
        name: "Misfit",
        description: "Unlock 1 Misfit.",
        path: "heroes.unlockedCount",
        value: 1,
      },
      {
        name: "Relics Extracted",
        description: "Extract 50 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 50,
      },
      {
        name: "Unique Relics",
        description: "Collect 5 unique Relics.",
        path: "stats.uniqueCollected",
        value: 5,
      },
      {
        name: "Playtime",
        description: "Play for 1 hour.",
        path: "stats.playtime",
        value: 1,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 10 Extractions.",
        path: "stats.extractions",
        value: 10,
      },
      {
        name: "Deaths",
        description: "Die 10 times.",
        path: "stats.deaths",
        value: 10,
      },
      {
        name: "Bots Killed",
        description: "Kill 500 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 500,
      },
      {
        name: "Team Ups",
        description: "Complete 10 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 10,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 5.",
        path: "currentExtractionStreak",
        value: 5,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 5 minutes.",
        path: "stats.longestRunSeconds",
        value: 300,
      },
    ],
  },

  {
    id: "LevelUp-2",
    level: 2,
    color: LEVEL_COLORS[2],
    requirements: [
      {
        name: "Common",
        description: "Collect 100 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 100,
      },
      {
        name: "Rare",
        description: "Collect 100 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 100,
      },
      {
        name: "Epic",
        description: "Collect 100 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 100,
      },
      {
        name: "Legendary",
        description: "Collect 100 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 100,
      },
      {
        name: "Mythic",
        description: "Collect 25 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 25,
      },
      {
        name: "Relics Extracted",
        description: "Extract 100 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 100,
      },
      {
        name: "Unique Relics",
        description: "Collect 10 unique Relics.",
        path: "stats.uniqueCollected",
        value: 10,
      },
      {
        name: "Playtime",
        description: "Play for 24 hours.",
        path: "stats.playtime",
        value: 24,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 25 Extractions.",
        path: "stats.extractions",
        value: 25,
      },
      {
        name: "Deaths",
        description: "Die 25 times.",
        path: "stats.deaths",
        value: 25,
      },
      {
        name: "Bots Killed",
        description: "Kill 1,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 1000,
      },
      {
        name: "Team Ups",
        description: "Complete 25 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 25,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 10.",
        path: "currentExtractionStreak",
        value: 10,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 10 minutes.",
        path: "stats.longestRunSeconds",
        value: 600,
      },
    ],
  },

  {
    id: "LevelUp-3",
    level: 3,
    color: LEVEL_COLORS[3],
    requirements: [
      {
        name: "Common",
        description: "Collect 200 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 200,
      },
      {
        name: "Rare",
        description: "Collect 250 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 250,
      },
      {
        name: "Epic",
        description: "Collect 150 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 150,
      },
      {
        name: "Legendary",
        description: "Collect 150 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 150,
      },
      {
        name: "Mythic",
        description: "Collect 50 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 50,
      },
      {
        name: "Misfit",
        description: "Unlock 2 Misfits.",
        path: "heroes.unlockedCount",
        value: 2,
      },
      {
        name: "Relics Extracted",
        description: "Extract 250 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 250,
      },
      {
        name: "Unique Relics",
        description: "Collect 15 unique Relics.",
        path: "stats.uniqueCollected",
        value: 15,
      },
      {
        name: "Playtime",
        description: "Play for 48 hours.",
        path: "stats.playtime",
        value: 48,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 50 Extractions.",
        path: "stats.extractions",
        value: 50,
      },
      {
        name: "Deaths",
        description: "Die 50 times.",
        path: "stats.deaths",
        value: 50,
      },
      {
        name: "Bots Killed",
        description: "Kill 2,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 2000,
      },
      {
        name: "Team Ups",
        description: "Complete 50 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 50,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 15.",
        path: "currentExtractionStreak",
        value: 15,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 15 minutes.",
        path: "stats.longestRunSeconds",
        value: 900,
      },
    ],
  },

  {
    id: "LevelUp-4",
    level: 4,
    color: LEVEL_COLORS[4],
    requirements: [
      {
        name: "Common",
        description: "Collect 300 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 300,
      },
      {
        name: "Rare",
        description: "Collect 400 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 400,
      },
      {
        name: "Epic",
        description: "Collect 200 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 200,
      },
      {
        name: "Legendary",
        description: "Collect 200 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 200,
      },
      {
        name: "Mythic",
        description: "Collect 75 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 75,
      },
      {
        name: "Relics Extracted",
        description: "Extract 500 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 500,
      },
      {
        name: "Unique Relics",
        description: "Collect 20 unique Relics.",
        path: "stats.uniqueCollected",
        value: 20,
      },
      {
        name: "Playtime",
        description: "Play for 72 hours.",
        path: "stats.playtime",
        value: 72,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 75 Extractions.",
        path: "stats.extractions",
        value: 75,
      },
      {
        name: "Deaths",
        description: "Die 75 times.",
        path: "stats.deaths",
        value: 75,
      },
      {
        name: "Bots Killed",
        description: "Kill 3,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 3000,
      },
      {
        name: "Team Ups",
        description: "Complete 75 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 75,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 20.",
        path: "currentExtractionStreak",
        value: 20,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 20 minutes.",
        path: "stats.longestRunSeconds",
        value: 1200,
      },
    ],
  },

  {
    id: "LevelUp-5",
    level: 5,
    color: LEVEL_COLORS[5],
    requirements: [
      {
        name: "Common",
        description: "Collect 400 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 400,
      },
      {
        name: "Rare",
        description: "Collect 550 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 550,
      },
      {
        name: "Epic",
        description: "Collect 300 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 300,
      },
      {
        name: "Legendary",
        description: "Collect 250 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 250,
      },
      {
        name: "Mythic",
        description: "Collect 100 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 100,
      },
      {
        name: "Misfit",
        description: "Unlock 3 Misfits.",
        path: "heroes.unlockedCount",
        value: 3,
      },
      {
        name: "Relics Extracted",
        description: "Extract 750 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 750,
      },
      {
        name: "Unique Relics",
        description: "Collect 25 unique Relics.",
        path: "stats.uniqueCollected",
        value: 25,
      },
      {
        name: "Playtime",
        description: "Play for 100 hours.",
        path: "stats.playtime",
        value: 100,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 100 Extractions.",
        path: "stats.extractions",
        value: 100,
      },
      {
        name: "Deaths",
        description: "Die 100 times.",
        path: "stats.deaths",
        value: 100,
      },
      {
        name: "Bots Killed",
        description: "Kill 4,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 4000,
      },
      {
        name: "Team Ups",
        description: "Complete 100 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 100,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 25.",
        path: "currentExtractionStreak",
        value: 25,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run 15 minutes.",
        path: "stats.longestRunSeconds",
        value: 1500,
      },
    ],
  },

  {
    id: "LevelUp-6",
    level: 6,
    color: LEVEL_COLORS[6],
    requirements: [
      {
        name: "Common",
        description: "Collect 500 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 500,
      },
      {
        name: "Rare",
        description: "Collect 700 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 700,
      },
      {
        name: "Epic",
        description: "Collect 400 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 400,
      },
      {
        name: "Legendary",
        description: "Collect 300 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 300,
      },
      {
        name: "Mythic",
        description: "Collect 150 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 150,
      },
      {
        name: "Relics Extracted",
        description: "Extract 1,000 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 1000,
      },
      {
        name: "Unique Relics",
        description: "Collect 30 unique Relics.",
        path: "stats.uniqueCollected",
        value: 30,
      },
      {
        name: "Playtime",
        description: "Play for 125 hours.",
        path: "stats.playtime",
        value: 125,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 150 Extractions.",
        path: "stats.extractions",
        value: 150,
      },
      {
        name: "Deaths",
        description: "Die 125 times.",
        path: "stats.deaths",
        value: 125,
      },
      {
        name: "Bots Killed",
        description: "Kill 5,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 5000,
      },
      {
        name: "Team Ups",
        description: "Complete 125 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 125,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 30.",
        path: "currentExtractionStreak",
        value: 30,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 30 minutes.",
        path: "stats.longestRunSeconds",
        value: 1800,
      },
    ],
  },

  {
    id: "LevelUp-7",
    level: 7,
    color: LEVEL_COLORS[7],
    requirements: [
      {
        name: "Common",
        description: "Collect 750 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 750,
      },
      {
        name: "Rare",
        description: "Collect 850 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 850,
      },
      {
        name: "Epic",
        description: "Collect 500 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 500,
      },
      {
        name: "Legendary",
        description: "Collect 400 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 400,
      },
      {
        name: "Mythic",
        description: "Collect 200 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 200,
      },
      {
        name: "Misfit",
        description: "Unlock 4 Misfits.",
        path: "heroes.unlockedCount",
        value: 4,
      },
      {
        name: "Relics Extracted",
        description: "Extract 2,000 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 2000,
      },
      {
        name: "Unique Relics",
        description: "Collect 40 unique Relics.",
        path: "stats.uniqueCollected",
        value: 40,
      },
      {
        name: "Playtime",
        description: "Play for 150 hours.",
        path: "stats.playtime",
        value: 150,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 200 Extractions.",
        path: "stats.extractions",
        value: 200,
      },
      {
        name: "Deaths",
        description: "Hunted - Die 150 times.",
        path: "stats.deaths",
        value: 150,
      },
      {
        name: "Bots Killed",
        description: "Kill 6,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 6000,
      },
      {
        name: "Team Ups",
        description: "Complete 150 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 150,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 35.",
        path: "currentExtractionStreak",
        value: 35,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 35 minutes.",
        path: "stats.longestRunSeconds",
        value: 2100,
      },
    ],
  },

  {
    id: "LevelUp-8",
    level: 8,
    color: LEVEL_COLORS[8],
    requirements: [
      {
        name: "Common",
        description: "Collect 1,000 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 1000,
      },
      {
        name: "Rare",
        description: "Collect 1,000 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 1000,
      },
      {
        name: "Epic",
        description: "Collect 600 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 600,
      },
      {
        name: "Legendary",
        description: "Collect 500 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 500,
      },
      {
        name: "Mythic",
        description: "Collect 250 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 250,
      },
      {
        name: "Misfit",
        description: "Unlock 5 Misfits.",
        path: "heroes.unlockedCount",
        value: 5,
      },
      {
        name: "Relics Extracted",
        description: "Extract 3,000 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 3000,
      },
      {
        name: "Unique Relics",
        description: "Collect 50 unique Relics.",
        path: "stats.uniqueCollected",
        value: 50,
      },
      {
        name: "Playtime",
        description: "Play for 175 hours.",
        path: "stats.playtime",
        value: 175,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 250 Extractions.",
        path: "stats.extractions",
        value: 250,
      },
      {
        name: "Deaths",
        description: "Die 175 times.",
        path: "stats.deaths",
        value: 175,
      },
      {
        name: "Bots Killed",
        description: "Kill 7,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 7000,
      },
      {
        name: "Team Ups",
        description: "Complete 175 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 175,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 40.",
        path: "currentExtractionStreak",
        value: 40,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 40 minutes.",
        path: "stats.longestRunSeconds",
        value: 2500,
      },
    ],
  },

  {
    id: "LevelUp-9",
    level: 9,
    color: LEVEL_COLORS[9],
    requirements: [
      {
        name: "Common",
        description: "Collect 1,250 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 1250,
      },
      {
        name: "Rare",
        description: "Collect 1,250 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 1250,
      },
      {
        name: "Epic",
        description: "Collect 750 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 750,
      },
      {
        name: "Legendary",
        description: "Collect 600 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 600,
      },
      {
        name: "Mythic",
        description: "Collect 400 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 400,
      },
      {
        name: "Misfit",
        description: "Unlock 6 Misfits.",
        path: "heroes.unlockedCount",
        value: 6,
      },
      {
        name: "Relics Extracted",
        description: "Extract 4,000 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 4000,
      },
      {
        name: "Unique Relics",
        description: "Collect 60 unique Relics.",
        path: "stats.uniqueCollected",
        value: 60,
      },
      {
        name: "Playtime",
        description: "Play for 200 hours.",
        path: "stats.playtime",
        value: 200,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 400 Extractions.",
        path: "stats.extractions",
        value: 400,
      },
      {
        name: "Deaths",
        description: "Die 200 times.",
        path: "stats.deaths",
        value: 200,
      },
      {
        name: "Bots Killed",
        description: "Kill 8,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 8000,
      },
      {
        name: "Team Ups",
        description: "Complete 200 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 200,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 45.",
        path: "currentExtractionStreak",
        value: 45,
      },
      {
        name: "Longest Run",
        description: "Reach a Longest Run of 50 minutes.",
        path: "stats.longestRunSeconds",
        value: 3000,
      },
    ],
  },

  {
    id: "LevelUp-10",
    level: 10,
    color: LEVEL_COLORS[10],
    requirements: [
      {
        name: "Common",
        description: "Collect 1,500 Common Gears.",
        path: "stats.gearByRarity.Common",
        value: 1500,
      },
      {
        name: "Rare",
        description: "Collect 1,500 Rare Gears.",
        path: "stats.gearByRarity.Rare",
        value: 1500,
      },
      {
        name: "Epic",
        description: "Collect 1,000 Epic Gears.",
        path: "stats.gearByRarity.Epic",
        value: 1000,
      },
      {
        name: "Legendary",
        description: "Collect 750 Legendary Gears.",
        path: "stats.gearByRarity.Legendary",
        value: 750,
      },
      {
        name: "Mythic",
        description: "Collect 500 Mythic Gears.",
        path: "stats.gearByRarity.Mythic",
        value: 500,
      },
      {
        name: "Misfit",
        description: "Unlock all 7 Misfits.",
        path: "heroes.unlockedCount",
        value: 7,
      },
      {
        name: "Relics Extracted",
        description: "Extract 5,000 Relics.",
        path: "stats.totalRelicsExtracted",
        value: 5000,
      },
      {
        name: "Unique Relics",
        description: "Collect 75 unique Relics.",
        path: "stats.uniqueCollected",
        value: 75,
      },
      {
        name: "Unemployed",
        description: "Professionally UnemployedPlay for 240 hours.",
        path: "stats.playtime",
        value: 240,
        unit: "hours",
      },
      {
        name: "Extractions",
        description: "Complete 500 Extractions.",
        path: "stats.extractions",
        value: 500,
      },
      {
        name: "Deaths",
        description: "Die 250 times.",
        path: "stats.deaths",
        value: 250,
      },
      {
        name: "Bots Killed",
        description: "Kill 10,000 Bots.",
        path: "stats.runStats.BotsKilled",
        value: 10000,
      },
      {
        name: "Team Ups",
        description: "Complete 250 Team Ups.",
        path: "stats.runStats.TeamUps",
        value: 250,
      },
      {
        name: "Extraction Streak",
        description: "Reach an Extraction Streak of 50.",
        path: "currentExtractionStreak",
        value: 50,
      },
      {
        name: "Longest Run",
        description: "One with the bushes - Reach a Longest Run of an hour.",
        path: "stats.longestRunSeconds",
        value: 3600,
      },
    ],
  },
];

export function getMisfitzStatzAchievement(
  achievementID: string
): MisfitzStatzAchievementDefinition | undefined {
  return MISFITZ_STATZ_ACHIEVEMENTS.find(
    (achievement) => achievement.id === achievementID
  );
}

export function getMisfitzGameAchievement(
  level: number
): MisfitzGameAchievementDefinition | undefined {
  return MISFITZ_GAME_ACHIEVEMENTS.find(
    (achievement) => achievement.level === level
  );
}

export interface GameAchievementDisplayItem {
  id: string;
  name: string;
  level: number;
  color: AchievementColor;
  description: string;
  requiredValue: number;
  currentValue: number;
  unit?: "hours";
}

function getCurrentValue(
  data: StatsResponse,
  requirement: GameAchievementRequirement
): number {
  switch (requirement.path) {
    case "stats.gearByRarity.Common":
      return data.stats.gearByRarity.Common;

    case "stats.gearByRarity.Rare":
      return data.stats.gearByRarity.Rare;

    case "stats.gearByRarity.Epic":
      return data.stats.gearByRarity.Epic;

    case "stats.gearByRarity.Legendary":
      return data.stats.gearByRarity.Legendary;

    case "stats.gearByRarity.Mythic":
      return data.stats.gearByRarity.Mythic;

    case "heroes.unlockedCount":
      return data.heroes.filter((hero) => hero.unlocked).length;

    case "stats.totalRelicsExtracted":
      return data.stats.totalRelicsExtracted;

    case "stats.uniqueCollected":
      /*
       * The current Game API exposes uniqueCollected per season,
       * but no all-time uniqueCollected field. The achievement table
       * defines this as the collection across seasons, so aggregate
       * the seasonal values here.
       */
      return data.relics.seasons.reduce(
        (total, season) => total + season.uniqueCollected,
        0
      );

    case "stats.playtime":
      return data.stats.playtime / 3600;

    case "stats.extractions":
      return data.stats.extractions;

    case "stats.deaths":
      return data.stats.deaths;

    case "stats.runStats.BotsKilled":
      return data.stats.runStats.BotsKilled;

    case "stats.runStats.TeamUps":
      return data.stats.runStats.TeamUps;

    case "currentExtractionStreak":
      return data.currentExtractionStreak;

    case "stats.longestRunSeconds":
      return data.stats.longestRunSeconds;

    default:
      return 0;
  }
}

export function calculateGameAchievements(
  data: StatsResponse
): GameAchievementDisplayItem[] {
  const achievements: GameAchievementDisplayItem[] = [];
  const highestByAchievement = new Map<
    string,
    GameAchievementDisplayItem
  >();

  for (const definition of MISFITZ_GAME_ACHIEVEMENTS) {
    for (const requirement of definition.requirements) {
      const currentValue = getCurrentValue(data, requirement);

      if (!Number.isFinite(currentValue)) {
        continue;
      }

      if (currentValue < requirement.value) {
        continue;
      }

      const existing = highestByAchievement.get(requirement.name);

      if (!existing || definition.level > existing.level) {
        highestByAchievement.set(requirement.name, {
          id: `${definition.id}-${requirement.name}`,
          name: requirement.name,
          level: definition.level,
          color: definition.color,
          description: requirement.description,
          requiredValue: requirement.value,
          currentValue,
          unit: requirement.unit,
        });
      }
    }
  }

  achievements.push(...highestByAchievement.values());

  /*
   * Höchstes Level zuerst.
   * Bei gleichem Level alphabetisch nach Achievement-Name.
   */
  achievements.sort((a, b) => {
    if (b.level !== a.level) {
      return b.level - a.level;
    }

    return a.name.localeCompare(b.name);
  });

  return achievements;
}