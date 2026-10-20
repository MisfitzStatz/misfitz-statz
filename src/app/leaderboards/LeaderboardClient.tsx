"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ReportModal from "@/components/ReportModal";

interface LeaderboardEntry {
  rank: number;
  player_name: string;
  player_id: string;
  value: number;
  updated_at: number;
}

interface LeaderboardResponse {
  success: boolean;
  seasonId?: string;
  season?: string;
  category: string;
  count: number;
  data: LeaderboardEntry[];
}

const CATEGORIES = [
  { id: "relics_extracted", label: "Top Relic Extractors" },
  { id: "deaths", label: "Most Deaths" },
  { id: "playtime", label: "Highest Playtime" },
  { id: "bots_killed", label: "Bots Killed" },
  { id: "biggest_extraction", label: "Biggest Extraction" },
] as const;

const SEASONS = [
  { id: "all-time", label: "All-Time" },
  { id: "genesis", label: "Genesis" },
  { id: "arrival", label: "Arrival" },

] as const;

const CATEGORY_ALIASES: Record<string, string> = {
  relics: "relics_extracted",
  kills: "bots_killed",
};

function normalizeCategory(value?: string) {
  if (!value) return "relics_extracted";
  const normalized = CATEGORY_ALIASES[value.toLowerCase()] ?? value.toLowerCase();
  return CATEGORIES.some((category) => category.id === normalized)
    ? normalized
    : null;
}

function normalizeSeason(value?: string) {
  if (!value) return "all-time";
  const normalized = value.toLowerCase();
  return SEASONS.some((season) => season.id === normalized) ? normalized : null;
}

function formatValue(category: string, value: number) {
  if (category === "playtime") {
    const totalSeconds = Math.max(0, Math.floor(value));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${seconds}s`;
    return `${seconds}s`;
  }

  return Number(value).toLocaleString();
}

export default function LeaderboardsClient() {
  const params = useParams<{ slug?: string[] }>();
  const router = useRouter();
  const slug = params?.slug ?? [];

  // Supports:
  // /leaderboards
  // /leaderboards/{category}
  // /leaderboards/{category}/{season}
  // URL fragments such as #4-8 are intentionally not read by the website.
  const category = normalizeCategory(slug[0]);
  const seasonId = normalizeSeason(slug[1]);
  const selectedCategory = category ?? "relics_extracted";
  const selectedSeason = seasonId ?? "all-time";

  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<LeaderboardEntry | null>(null);

  const categoryInfo = CATEGORIES.find((item) => item.id === selectedCategory)!;
  const seasonInfo = SEASONS.find((item) => item.id === selectedSeason)!;
  const categoryUnavailableForSeason =
    selectedCategory === "biggest_extraction" && selectedSeason !== "all-time";

  useEffect(() => {
    if (!category || !seasonId) {
      if (slug.length > 0) {
        setError("Invalid leaderboard category or season.");
        setLoading(false);
      }
      return;
    }

    if (categoryUnavailableForSeason) {
      setLeaderboard(null);
      setError("Biggest Extraction is currently available for All-Time only.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function loadLeaderboard() {
      setLoading(true);
      setError("");
      setLeaderboard(null);

      try {
        const apiBase = process.env.NEXT_PUBLIC_API_URL;
        if (!apiBase) throw new Error("The API URL is not configured.");

        // The backend route is /:seasonId/:category. Normalize IDs to lowercase.
        const endpoint =
          selectedSeason === "all-time"
            ? `${apiBase}/api/leaderboard/${selectedCategory}`
            : `${apiBase}/api/leaderboard/${selectedSeason}/${selectedCategory}`;

        const response = await fetch(endpoint, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(
            response.status === 400
              ? "This leaderboard is not available for the selected season."
              : "Failed to fetch leaderboard."
          );
        }

        const data: LeaderboardResponse = await response.json();
        if (!data.success) throw new Error("Could not load leaderboard.");
        setLeaderboard(data);
      } catch (caught) {
        if (caught instanceof Error && caught.name === "AbortError") return;
        console.error(caught);
        setError(caught instanceof Error ? caught.message : "Could not load leaderboard.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadLeaderboard();
    return () => controller.abort();
  }, [category, seasonId, selectedCategory, selectedSeason, categoryUnavailableForSeason, slug.length]);

  const lastUpdated = useMemo(() => {
    if (!leaderboard?.data.length) return null;
    return leaderboard.data.reduce(
      (latest, entry) => Math.max(latest, entry.updated_at || 0),
      0
    );
  }, [leaderboard]);

  function navigateTo(categoryId: string, season: string) {
    router.push(`/leaderboards/${categoryId}/${season}`);
  }

  function openReport(player: LeaderboardEntry) {
    setSelectedPlayer(player);
    setShowReportModal(true);
  }

  function closeReport() {
    setSelectedPlayer(null);
    setShowReportModal(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#08111f] flex items-center justify-center text-white">
        Loading leaderboard...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#08111f] text-white flex flex-col items-center justify-center px-6 text-center">
        <p className="text-red-400">{error}</p>
        <Link href="/leaderboards" className="mt-5 text-lime-400 hover:text-lime-300">
          Back to leaderboards
        </Link>
      </main>
    );
  }

  if (!leaderboard) return null;

  return (
    <>
      <main className="min-h-screen bg-[#08111f] text-white px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col items-center gap-5">
            <h1 className="text-center text-4xl font-bold">{categoryInfo.label}</h1>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
              <label className="flex flex-col gap-2 text-sm text-slate-400">
                Category
                <select
                  value={selectedCategory}
                  onChange={(event) => navigateTo(event.target.value, selectedSeason)}
                  className="min-w-64 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                >
                  {CATEGORIES.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm text-slate-400">
                Season
                <select
                  value={selectedSeason}
                  onChange={(event) => {
                    const nextSeason = event.target.value;
                    const nextCategory =
                      selectedCategory === "biggest_extraction" && nextSeason !== "all-time"
                        ? "relics_extracted"
                        : selectedCategory;
                    navigateTo(nextCategory, nextSeason);
                  }}
                  className="min-w-48 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                >
                  {SEASONS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <div className="min-w-[760px] space-y-4">
              {leaderboard.data.map((player) => {
                const id = player.player_id.replace("Player:", "");
                let border = "border border-slate-700 bg-slate-900";

                if (player.rank === 1) {
                  border = "border-2 border-yellow-400 bg-yellow-500/10";
                } else if (player.rank === 2) {
                  border = "border-2 border-gray-300 bg-gray-300/10";
                } else if (player.rank === 3) {
                  border = "border-2 border-orange-400 bg-orange-500/10";
                }

                return (
                  <div key={player.player_id} className={`rounded-xl p-5 ${border}`}>
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex gap-5">
                        <div className="w-14 text-center">
                          <div className="text-3xl font-bold">
                            {player.rank <= 3 ? player.rank : `#${player.rank}`}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                          <Link
                            href={`/stats/#${id}`}
                            className="text-xl font-semibold transition hover:text-lime-400"
                          >
                            {player.player_name}
                          </Link>
                          <span className="text-sm text-slate-500">{id}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="min-w-[70px] text-right text-2xl font-bold">
                          {formatValue(leaderboard.category, player.value)}
                        </div>
                        <button
                          onClick={() => openReport(player)}
                          aria-label={`Report ${player.player_name}`}
                          className="rounded-xl border border-white/15 bg-[#a63126] px-4 py-2 text-sm font-semibold backdrop-blur-xl transition hover:border-[#c93224] hover:bg-[#e31907]"
                        >
                          !
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {lastUpdated !== null && lastUpdated > 0 && (
            <div className="mt-10 text-center text-sm text-slate-400">
              Last updated {new Date(lastUpdated).toLocaleString()}
            </div>
          )}
        </div>
      </main>

      {showReportModal && selectedPlayer && (
        <ReportModal
          open={showReportModal}
          playerId={selectedPlayer.player_id.replace("Player:", "")}
          playerName={selectedPlayer.player_name}
          onClose={closeReport}
        />
      )}
    </>
  );
}
