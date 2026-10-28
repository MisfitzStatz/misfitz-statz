import { initializeWebMCPPolyfill } from "@mcp-b/webmcp-polyfill";
import type { JsonSchemaForInference } from "@mcp-b/webmcp-types";

type LeaderboardCategory =
  | "relics_extracted"
  | "playtime"
  | "deaths";

interface LeaderboardEntry {
  rank: number;
  player_name: string;
  player_id: string;
  value: number;
  updated_at: number;
}

interface LeaderboardResponse {
  success: boolean;
  category: LeaderboardCategory;
  count: number;
  data: LeaderboardEntry[];
}

const playerInputSchema = {
  type: "object",
  properties: {
    player_id: {
      type: "string",
      description:
        "The Misfitz player ID. Use the player_id returned by get_leaderboard when searching by player name or use the ID that a user has sent.",
    },
  },
  required: ["player_id"],
  additionalProperties: false,
} as const satisfies JsonSchemaForInference;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const inputSchema = {
  type: "object",
  properties: {
    category: {
      type: "string",
      enum: ["relics_extracted", "playtime", "deaths"],
      description: "The leaderboard category to retrieve.",
    },
  },
  required: ["category"],
  additionalProperties: false,
} as const satisfies JsonSchemaForInference;

export function initializeMisfitzWebMCP() {
  if (typeof window === "undefined" || !API_URL) {
    return;
  }

  initializeWebMCPPolyfill();

  const modelContext = document.modelContext;

  if (!modelContext) {
    console.warn("WebMCP model context is not available.");
    return;
  }

  modelContext.registerTool({
    name: "get_leaderboard",

    description: "Retrieve a public Misfitz Statz leaderboard. Use this tool when the user asks about rankings, leaderboard positions, top players, the best or worst players in a supported category, or when a player name must be resolved to a Misfitz player ID. Supported categories are relics_extracted, playtime, and deaths. The result contains the public leaderboard entries, including each player's rank, player_name, player_id, value, and updated_at. When the user provides a player name and asks for that player's stats, use this tool first to find the matching player_name and obtain the corresponding player_id, then pass that player_id to get_player. Do not use website navigation or page searching to resolve a player name when the required player_name and player_id can be obtained from this tool. The leaderboard is limited to the public top 25. Privacy filtering is handled by the Misfitz Statz API. Never attempt to access, infer, or search for Discord IDs through this tool.",
 
    inputSchema,

    execute: async ({ category }) => {
      const response = await fetch(
        `${API_URL}/api/leaderboard/${category}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch leaderboard: ${response.status}`
        );
      }

      const data = (await response.json()) as LeaderboardResponse;

      return data;
    },
  });

modelContext.registerTool({
  name: "get_player",

  description:
  "Retrieve the public statistics for a Misfitz player using their Misfitz player ID. Use this tool when the user requests statistics, profile data, gear totals, progression, or other player-specific information. If the user provides a Misfitz player ID directly, call this tool immediately without first using get_leaderboard. If the user provides only a player name, first call get_leaderboard, find the matching player_name, take the player_id from that exact leaderboard entry, and then call get_player with that player_id. Do not pass a player name to this tool. Do not use website navigation, page searching, or other website content to resolve player names when get_leaderboard can provide the player_id. Do not use Discord IDs, Discord usernames, or linked-account information as input. Discord IDs and linked account information are not searchable or accessible through WebMCP. Privacy and visibility restrictions are enforced by the Misfitz Statz API, so do not attempt to apply, bypass, or infer privacy rules in the WebMCP layer. Return and analyze the statistics provided by the API.",
  inputSchema: playerInputSchema,

  execute: async ({ player_id }) => {
    const response = await fetch(
      `${API_URL}/api/player/Player:${encodeURIComponent(player_id)}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch player stats: ${response.status}`
      );
    }

    return await response.json();
  },
});
}