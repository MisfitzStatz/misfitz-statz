"use client";

import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import type { PlayerStats, DataCard } from "@/app/stats/types/stats";

interface MobileMatchStatsProps {
  stats: PlayerStats;
  cards: DataCard[];
  seasons: string[];
  selectedSeason: string;
  onSeasonChange: (season: string) => void;
  currentExtractionStreak: number;
  loggedIn: boolean;
  isHistorySeason: boolean;
}

interface MatchStatProps {
  label: string;
  value: string | number;
}

function MatchStat({ label, value }: MatchStatProps) {
  return (
    <div className="flex min-w-0 items-baseline justify-between gap-4 border-b border-cyan-300/10 pb-4">
      <span className="min-w-0 text-sm font-bold text-white/85">
        {label}
      </span>

      <span className="shrink-0 text-right text-sm font-normal text-white/65">
        {typeof value === "number"
          ? value.toLocaleString("de-DE")
          : value}
      </span>
    </div>
  );
}

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0m";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

function formatSeasonName(season: string) {
  if (season === "total") {
    return "Total";
  }

  return season.replace(/^Season_/, "").replace(/_/g, " ");
}

function getCardValue(
  cards: DataCard[],
  stat: string,
  fallback: number
) {
  return (
    cards.find((card) => card.stat === stat)?.value ?? fallback
  );
}

function getExtractionRate(stats: PlayerStats) {
  if (stats.gamesPlayed <= 0) {
    return 0;
  }

  return Math.round(
    (stats.extractions / stats.gamesPlayed) * 100
  );
}

function ExtractionRate({ value }: { value: number }) {
  const percentage = Math.max(0, Math.min(100, value));
  const angle = percentage * 3.6;

  return (
    <div className="flex items-center justify-between gap-4 border-b border-cyan-300/10 pb-4">
      <span className="text-sm font-bold text-white/85">
        Extraction Rate
      </span>

      <div
        className="relative h-20 w-20 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(
            #7CFF00 0deg ${angle}deg,
            #ef4444 ${angle}deg 360deg
          )`,
        }}
      >
        <div className="absolute inset-[5px] rounded-full bg-[#111b2b]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MobileMatchStats({
  stats,
  cards,
  seasons,
  selectedSeason,
  onSeasonChange,
  currentExtractionStreak,
  loggedIn,
  isHistorySeason,
}: MobileMatchStatsProps) {
  const [showGeneralStats, setShowGeneralStats] = useState(true);
  const [showSpecialStats, setShowSpecialStats] = useState(true);

  const playtime = getCardValue(
    cards,
    "Playtime",
    stats.playtime
  );

  const played = getCardValue(
    cards,
    "Runs",
    stats.gamesPlayed
  );

  const extractions = getCardValue(
    cards,
    "Extractions",
    stats.extractions
  );

  const deaths = getCardValue(
    cards,
    "Deaths",
    stats.deaths
  );

  const relicsCollected = getCardValue(
    cards,
    "RelicsCollected",
    stats.runStats.RelicsCollected
  );

  const relicsExtracted = getCardValue(
    cards,
    "RelicsExtracted",
    stats.totalRelicsExtracted
  );

  const teamUps = getCardValue(
    cards,
    "TeamUps",
    stats.runStats.TeamUps
  );

  const teammatesRevived = getCardValue(
    cards,
    "TeammatesRevived",
    stats.runStats.TeammatesRevived
  );

  const botsKilled = getCardValue(
    cards,
    "BotsKilled",
    stats.runStats.BotsKilled
  );

  const miniBossesKilled = getCardValue(
    cards,
    "MiniBossesKilled",
    stats.runStats.MiniBossesKilled
  );

  const worldBossesKilled = getCardValue(
    cards,
    "WorldBossesKilled",
    stats.runStats.WorldBossesKilled
  );

  const mostWantedSurvived = getCardValue(
    cards,
    "MostWantedSurvived",
    stats.runStats.MostWantedSurvived
  );

  const bountiesClaimed =
    cards.find(
      (card) => card.stat === "BountiesClaimed"
    )?.value ?? 0;

  const biggestExtraction =
    cards.find(
      (card) => card.stat === "BiggestExtraction"
    )?.value ?? 0;

  const extractionRate =
    cards.find(
      (card) => card.stat === "OutAlive"
    )?.value ?? getExtractionRate(stats);

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-5 py-6">
        {/* HEADER */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-white">
            Match Stats
          </h2>

          <select
            value={selectedSeason}
            onChange={(event) =>
              onSeasonChange(event.target.value)
            }
            className="h-10 min-w-0 max-w-[130px] border border-cyan-300/40 bg-[#111b2b] px-3 text-sm font-bold text-white outline-none transition hover:border-cyan-300/60 focus:border-cyan-300/80"
          >
            <option value="total">Total</option>

            {seasons.map((season) => (
              <option key={season} value={season}>
                {formatSeasonName(season)}
              </option>
            ))}
          </select>
        </div>

        {/* LOGIN GATE */}
        {isHistorySeason && !loggedIn ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
            <Image
              src="/goldengoose.png"
              alt="Golden Goose"
              width={120}
              height={120}
              className="mb-4 object-contain"
            />

            <h3 className="text-xl font-bold text-white">
              Login required
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Log in to view season statistics.
            </p>
          </div>
        ) : (
          <div className="mt-7">
            {/* GENERAL STATS */}
            <section>
              <button
                type="button"
                onClick={() =>
                  setShowGeneralStats((current) => !current)
                }
                className="flex w-full items-center justify-between border-b border-cyan-300/30 pb-3 text-left"
              >
                <h3 className="text-xl font-bold text-white">
                  General Stats
                </h3>

                {showGeneralStats ? (
                  <ChevronUp
                    size={20}
                    className="text-white/55"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-white/55"
                  />
                )}
              </button>

              {showGeneralStats && (
                <div className="mt-5 space-y-4">
                  <MatchStat
                    label="Playtime"
                    value={formatDuration(playtime)}
                  />

                  <MatchStat
                    label="Played"
                    value={played}
                  />

                  <MatchStat
                    label="Extractions"
                    value={extractions}
                  />

                  <MatchStat
                    label="Deaths"
                    value={deaths}
                  />

                  <ExtractionRate value={extractionRate} />

                  <MatchStat
                    label="Relics collected"
                    value={relicsCollected}
                  />

                  <MatchStat
                    label="Relics extracted"
                    value={relicsExtracted}
                  />

                  <MatchStat
                    label="Team Ups"
                    value={teamUps}
                  />

                  <MatchStat
                    label="Teammates revived"
                    value={teammatesRevived}
                  />

                  <MatchStat
                    label="Current Extraction streak"
                    value={currentExtractionStreak}
                  />

                  <MatchStat
                    label="Highest Extraction streak"
                    value={stats.bestStreak}
                  />
                </div>
              )}
            </section>

            {/* SPECIAL STATS */}
            <section className="mt-8">
              <button
                type="button"
                onClick={() =>
                  setShowSpecialStats((current) => !current)
                }
                className="flex w-full items-center justify-between border-b border-cyan-300/30 pb-3 text-left"
              >
                <h3 className="text-xl font-bold text-white">
                  Special Stats
                </h3>

                {showSpecialStats ? (
                  <ChevronUp
                    size={20}
                    className="text-white/55"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-white/55"
                  />
                )}
              </button>

              {showSpecialStats && (
                <div className="mt-5 space-y-4">
                  <MatchStat
                    label="Bots killed"
                    value={botsKilled}
                  />

                  <MatchStat
                    label="Mini bosses killed"
                    value={miniBossesKilled}
                  />

                  <MatchStat
                    label="World boss killed"
                    value={worldBossesKilled}
                  />

                  <MatchStat
                    label="Bounty survived"
                    value={mostWantedSurvived}
                  />

                  <MatchStat
                    label="Killed bounty"
                    value={bountiesClaimed}
                  />

                  <MatchStat
                    label="Biggest extraction"
                    value={(biggestExtraction)}
                  />
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}