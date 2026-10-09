"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "misfitz_recent_searches";
const MAX_RECENT_SEARCHES = 5;

interface RecentSearchesProps {
  onSelect: (playerId: string) => void;
}

function normalizePlayerId(playerId: string): string {
  return playerId.trim().replace(/^Player:/i, "");
}

function isValidPlayerId(playerId: string): boolean {
  return /^[A-Za-z0-9]{9,12}$/.test(playerId);
}

function loadRecentSearches(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter(
        (id): id is string =>
          typeof id === "string" && isValidPlayerId(id)
      )
      .slice(0, MAX_RECENT_SEARCHES);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

export function saveRecentSearch(playerId: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const normalizedId = normalizePlayerId(playerId);

  if (!isValidPlayerId(normalizedId)) {
    console.warn(
      "[RecentSearches] Invalid Player ID:",
      playerId
    );
    return;
  }

  try {
    const recent = loadRecentSearches();

    const updated = [
      normalizedId,
      ...recent.filter((id) => id !== normalizedId),
    ].slice(0, MAX_RECENT_SEARCHES);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("misfitz:recent-search-updated")
    );
  } catch (error) {
    console.error(
      "[RecentSearches] Failed to save recent search:",
      error
    );
  }
}

export default function RecentSearches({
  onSelect,
}: RecentSearchesProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>(
    []
  );

  useEffect(() => {
    setRecentSearches(loadRecentSearches());

    const handleUpdate = () => {
      setRecentSearches(loadRecentSearches());
    };

    window.addEventListener(
      "misfitz:recent-search-updated",
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        "misfitz:recent-search-updated",
        handleUpdate
      );
    };
  }, []);

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 w-full max-w-xl+40">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
        Recently Searched
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {recentSearches.map((id, index) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-lime-400/40 hover:bg-white/10 hover:text-white ${index >= 2 ? "hidden md:block" : ""}`}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
}