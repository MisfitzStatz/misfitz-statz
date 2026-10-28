"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { StatsResponse } from "@/app/stats/types/stats";

interface MobileRelicsProps {
  data: StatsResponse;
}

const RELICS_PER_SEASON = 80;

function formatNumber(value: number) {
  return value.toLocaleString("de-DE");
}

function formatSeasonName(seasonId: string) {
  return seasonId
    .replace(/^Season_/, "")
    .replace(/_/g, " ");
}

function getRelicRarity(id: string) {
  const rarity = id.split("_")[0].toLowerCase();

  switch (rarity) {
    case "common":
      return "Common";
    case "rare":
      return "Rare";
    case "epic":
      return "Epic";
    case "legendary":
      return "Legendary";
    case "mythic":
      return "Mythic";
    default:
      return null;
  }
}

function getRarityStyle(label: string) {
  switch (label) {
    case "Common":
      return {
        color: "#7CFF00",
        textShadow:
          "0 0 5px rgba(124,255,0,0.55), 0 0 12px rgba(124,255,0,0.25)",
      };

    case "Rare":
      return {
        color: "#00D9FF",
        textShadow:
          "0 0 5px rgba(0,217,255,0.55), 0 0 12px rgba(0,217,255,0.25)",
      };

    case "Epic":
      return {
        color: "#B66DFF",
        textShadow:
          "0 0 5px rgba(182,109,255,0.55), 0 0 12px rgba(182,109,255,0.25)",
      };

    case "Legendary":
      return {
        color: "#FFD43B",
        textShadow:
          "0 0 5px rgba(255,212,59,0.55), 0 0 12px rgba(255,212,59,0.25)",
      };

    case "Mythic":
      return {
        color: "#FF3B3B",
        textShadow:
          "0 0 5px rgba(255,59,59,0.55), 0 0 12px rgba(255,59,59,0.25)",
      };

    default:
      return undefined;
  }
}

function StatRow({
  label,
  value,
  rarity,
}: {
  label: string;
  value: string | number;
  rarity?: boolean;
}) {
  const rarityStyle = rarity ? getRarityStyle(label) : undefined;

  return (
    <div className="flex items-baseline justify-between gap-4">
      <span
        className="text-base font-bold"
        style={
          rarityStyle ?? {
            color: "rgba(255,255,255,0.9)",
          }
        }
      >
        {label}
      </span>

      <span className="shrink-0 text-right text-base text-white/75">
        {typeof value === "number" ? formatNumber(value) : value}
      </span>
    </div>
  );
}

export default function MobileRelics({ data }: MobileRelicsProps) {
  const [showRelics, setShowRelics] = useState(true);

  const seasons = data.relics.seasons;
  const seasonsCompleted = seasons.length;
  const maxUniqueRelics = seasonsCompleted * RELICS_PER_SEASON;

  const uniqueRelicsFound = seasons.reduce(
    (total, season) => total + season.uniqueCollected,
    0,
  );

  const mythicIds = new Set<string>();

  for (const season of seasons) {
    for (const relic of season.relics) {
      if (getRelicRarity(relic.id) === "Mythic") {
        mythicIds.add(relic.id);
      }
    }
  }

  const currentSeason = seasons[seasons.length - 1] ?? null;

  const rarityCounts = {
    Common: 0,
    Rare: 0,
    Epic: 0,
    Legendary: 0,
    Mythic: 0,
  };

  if (currentSeason) {
    const uniqueIds = new Set<string>();

    for (const relic of currentSeason.relics) {
      if (relic.claimed) {
        uniqueIds.add(relic.id);
      }
    }

    for (const id of uniqueIds) {
      const rarity = getRelicRarity(id);

      if (rarity && rarity in rarityCounts) {
        rarityCounts[rarity as keyof typeof rarityCounts]++;
      }
    }
  }

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-5 py-6">
        {/* HEADER */}
        <button
          type="button"
          onClick={() => setShowRelics((current) => !current)}
          className="flex w-full items-center justify-between text-left"
          aria-expanded={showRelics}
        >
          <h2 className="text-xl font-bold text-white">
            Relics
          </h2>

          {showRelics ? (
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

        {showRelics && (
          <div className="mt-7">
            {/* ALL-TIME */}
            <section>
              <h3 className="border-b border-cyan-300/30 pb-3 text-xl font-bold text-white">
                All-Time
              </h3>

              <div className="mt-5 space-y-4">
                <StatRow
                  label="Relics extracted"
                  value={data.stats.totalRelicsExtracted}
                />

                <StatRow
                  label="Unique relics found"
                  value={`${formatNumber(uniqueRelicsFound)} / ${formatNumber(
                    maxUniqueRelics,
                  )}`}
                />

                <StatRow
                  label="Seasons completed"
                  value={seasonsCompleted}
                />

                <StatRow
                  label="Mythics found"
                  value={mythicIds.size}
                />
              </div>
            </section>

            {/* CURRENT SEASON */}
            <section className="mt-8">
              <h3 className="border-b border-cyan-300/30 pb-3 text-xl font-bold text-white">
                Season: {formatSeasonName(currentSeason.seasonId)}
              </h3>

              {currentSeason ? (
                <div className="mt-5">
                  <div className="mt-5 space-y-4">
                    <StatRow
                      label="Relics extracted"
                      value={currentSeason.totalCollected}
                    />

                    <StatRow
                      label="Unique relics found"
                      value={`${formatNumber(
                        currentSeason.uniqueCollected,
                      )} / ${RELICS_PER_SEASON}`}
                    />
                  </div>

                  {/* RARITY */}
                  <div className="mt-7">
                    <h4 className="border-b border-cyan-300/20 pb-3 text-lg font-bold text-white">
                      Rarity
                    </h4>

                    <div className="mt-5 space-y-4">
                      <StatRow
                        label="Common"
                        value={rarityCounts.Common}
                        rarity
                      />

                      <StatRow
                        label="Rare"
                        value={rarityCounts.Rare}
                        rarity
                      />

                      <StatRow
                        label="Epic"
                        value={rarityCounts.Epic}
                        rarity
                      />

                      <StatRow
                        label="Legendary"
                        value={rarityCounts.Legendary}
                        rarity
                      />

                      <StatRow
                        label="Mythic"
                        value={rarityCounts.Mythic}
                        rarity
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-6 text-white/50">
                  No relic season data available.
                </p>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}