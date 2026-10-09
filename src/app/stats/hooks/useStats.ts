"use client";

import { useCallback, useState } from "react";
import { API_URL } from "@/lib/api";
import type { StatsResponse } from "../types/stats.ts";
import { saveRecentSearch } from "@/app/stats/components/RecentSearches";


const CACHE_DURATION = 15_000;
const CACHE_PREFIX = "misfitz_stats_response:";
const PLAYER_ID_REGEX = /^[A-Za-z0-9]{9,12}$/;

interface CachedStatsResponse {
  playerId: string;
  timestamp: number;
  data: StatsResponse;
}

interface ApiResponse {
  success: boolean;
  data?: StatsResponse;
  error?: string;
}

interface UseStatsResult {
  data: StatsResponse | null;
  loading: boolean;
  error: string;
  searchPlayer: (playerId: string) => Promise<void>;
  clearStats: () => void;
}

function getStorageKey(playerId: string): string {
  return `${CACHE_PREFIX}${playerId}`;
}

function getCachedResponse(
  playerId: string
): StatsResponse | null {
  try {
    const key = getStorageKey(playerId);
    const stored = localStorage.getItem(key);

    if (!stored) {
      return null;
    }

    const cached: CachedStatsResponse = JSON.parse(stored);

    if (
      !cached ||
      typeof cached.timestamp !== "number" ||
      !cached.data
    ) {
      localStorage.removeItem(key);
      return null;
    }

    const age = Date.now() - cached.timestamp;

    if (age >= CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }

    return cached.data;
  } catch {
    localStorage.removeItem(getStorageKey(playerId));
    return null;
  }
}

function saveCachedResponse(
  playerId: string,
  data: StatsResponse
): void {
  const key = getStorageKey(playerId);
  const timestamp = Date.now();

  const cached: CachedStatsResponse = {
    playerId,
    timestamp,
    data,
  };

  try {
    localStorage.setItem(
      key,
      JSON.stringify(cached)
    );
  } catch {
    return;
  }

  window.setTimeout(() => {
    try {
      const currentStored = localStorage.getItem(key);

      if (!currentStored) {
        return;
      }

      const current: CachedStatsResponse =
        JSON.parse(currentStored);

      if (current.timestamp === timestamp) {
        localStorage.removeItem(key);
      }
    } catch {
    }
  }, CACHE_DURATION);
}

function deleteCachedResponse(
  playerId: string
): void {
  try {
    localStorage.removeItem(
      getStorageKey(playerId)
    );
  } catch {
    // Ignore localStorage errors.
  }
}

function isStatsResponse(
  value: unknown
): value is StatsResponse {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const data = value as Record<string, unknown>;

  return (
    typeof data.playerId === "string" &&
    typeof data.playerName === "string" &&
    typeof data.playerLevel === "number" &&
    typeof data.stats === "object" &&
    data.stats !== null
  );
}

export function useStats(): UseStatsResult {
  const [data, setData] =
    useState<StatsResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const searchPlayer = useCallback(
    async (playerId: string) => {
      const normalizedId = playerId.trim();

  const displayId = normalizedId.replace(/^Player:/, "");

      if (!PLAYER_ID_REGEX.test(displayId)) {
        setError("Invalid Player ID.");
        setData(null);
        return;
      }

      if (!normalizedId) {
        setError("Please enter a Player ID.");
        return;
      }

      setLoading(true);
      setError("");

      try {
        const cached =
          getCachedResponse(normalizedId);

          if (cached !== null) {
            saveRecentSearch(cached.playerId);

            setData(cached);

            window.history.replaceState(
              null,
              "",
              `/stats/#${displayId}`
            );

            return;
          }

        const cleanedId =
          normalizedId.startsWith("Player:")
            ? normalizedId
            : `Player:${normalizedId}`;

        const response = await fetch(
          `${API_URL}/api/player/${cleanedId}`
        );

        let json: ApiResponse;

        try {
          json =
            (await response.json()) as ApiResponse;
        } catch {
          throw new Error(
            "Invalid response from the stats server."
          );
        }

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error(
              json.error ||
                "Please wait 5 seconds before searching again."
            );
          }

          if (response.status === 404) {
            throw new Error(
              "Player ID not found."
            );
          }

          if (response.status === 417) {
            throw new Error(
              "Not enough stats to display account."
            );
          }

          if (response.status === 403) {
            throw new Error(
              "Player ID is unavailable."
            );
          }

          if (response.status === 411) {
            throw new Error(
              "Player ID banned from MisfitzStatz or Misfitz."
            );
          }
          if (response.status === 529) {
            throw new Error(
              "Server is overloaded. Try again later."
            );
          }

          if (response.status === 503) {
            throw new Error(
              "Ongoing maintenance. Try again later."
            );
          }

          if (response.status >= 500) {
            throw new Error(
              "The stats server is currently unavailable."
            );
          }

          throw new Error(
            json.error ||
              "Failed to fetch stats."
          );
        }

        if (
          json.success !== true ||
          !json.data
        ) {
          throw new Error(
            json.error ||
              "The stats response contains no player data."
          );
        }

        if (!isStatsResponse(json.data)) {
          throw new Error(
            "The stats response has an invalid structure."
          );
        }

        const responseData = json.data;

        saveRecentSearch(responseData.playerId);


        saveCachedResponse(
          normalizedId,
          responseData
        );

        setData(responseData);

        window.history.replaceState(
          null,
          "",
          `/stats/#${displayId}`
        );      
        } catch (err) {
        if (
          err instanceof TypeError &&
          err.message.includes("fetch")
        ) {
          setError(
            "Unable to connect to the stats server."
          );
        } else if (err instanceof Error) {
          setError(
            err.message ||
              "Something went wrong."
          );
        } else {
          setError(
            "Something went wrong."
          );
        }

        setData(null);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearStats = useCallback(() => {
    setData(null);
    setError("");
  }, []);

  return {
    data,
    loading,
    error,
    searchPlayer,
    clearStats,
  };
}