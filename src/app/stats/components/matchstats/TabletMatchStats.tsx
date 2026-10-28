"use client";

import Image from "next/image";
import type { PlayerStats, DataCard } from "@/app/stats/types/stats";

interface TabletMatchStatsProps {
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
    <div className="flex min-w-0 items-baseline justify-between gap-4 whitespace-nowrap">
      <span className="min-w-0 text-base font-bold text-white/90">
        {label}
      </span>

      <span className="shrink-0 text-right text-base font-normal text-white/75">
        {typeof value === "number" ? value.toLocaleString("de-DE") : value}
      </span>
    </div>
  );
}

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0m";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

function formatSeasonName(season: string) {
  if (season === "total") return "Total";

  return season.replace(/^Season_/, "").replace(/_/g, " ");
}

function getCardValue(
  cards: DataCard[],
  stat: string,
  fallback: number
) {
  return cards.find((card) => card.stat === stat)?.value ?? fallback;
}

function getExtractionRate(stats: PlayerStats) {
  if (stats.gamesPlayed <= 0) return 0;

  return Math.round((stats.extractions / stats.gamesPlayed) * 100);
}

function ExtractionRate({ value }: { value: number }) {
  const percentage = Math.max(0, Math.min(100, value));
  const angle = percentage * 3.6;

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-base font-bold text-white/90">
        Extraction Rate
      </span>

      <div
        className="relative h-24 w-24 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(
            #7CFF00 0deg ${angle}deg,
            #ef4444 ${angle}deg 360deg
          )`,
        }}
      >
        <div className="absolute inset-[5px] rounded-full bg-[#111b2b]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base font-bold text-white">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TabletMatchStats({
  stats,
  cards,
  seasons,
  selectedSeason,
  onSeasonChange,
  currentExtractionStreak,
  loggedIn,
  isHistorySeason,
}: TabletMatchStatsProps) {
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
    cards.find((card) => card.stat === "BountiesClaimed")?.value ?? 0;

  const biggestExtraction =
    cards.find((card) => card.stat === "BiggestExtraction")?.value ?? 0;

  const extractionRate =
    cards.find((card) => card.stat === "OutAlive")?.value ??
    getExtractionRate(stats);

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-7 py-7">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between gap-6">
          <h2 className="text-xl font-bold text-white">
            Match Stats
          </h2>

          <select
            value={selectedSeason}
            onChange={(event) => onSeasonChange(event.target.value)}
            className="h-10 min-w-[170px] border border-cyan-300/40 bg-[#111b2b] px-4 text-sm font-bold text-white outline-none transition hover:border-cyan-300/60 focus:border-cyan-300/80"
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
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <Image
              src="/goldengoose.png"
              alt="Golden Goose"
              width={140}
              height={140}
              className="mb-5 object-contain"
            />

            <h3 className="text-xl font-bold text-white">
              Login required
            </h3>

            <p className="mt-2 text-base text-white/60">
              Log in to view season statistics.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-8">
            {/* GENERAL STATS */}
            <section className="min-w-0">
              <h3 className="border-b border-cyan-300/30 pb-3 text-xl font-bold text-white">
                General Stats
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-x-8">
                {/* LEFT GENERAL COLUMN */}
                <div className="min-w-0 space-y-4">
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
                </div>

                {/* RIGHT GENERAL COLUMN */}
                <div className="min-w-0 space-y-4">
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
              </div>
            </section>

            {/* SPECIAL STATS */}
            <section className="min-w-0 border-l border-cyan-300/25 pl-7">
              <h3 className="border-b border-cyan-300/30 pb-3 text-xl font-bold text-white">
                Special Stats
              </h3>

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
            </section>
          </div>
        )}
      </div>
    </div>
  );
}