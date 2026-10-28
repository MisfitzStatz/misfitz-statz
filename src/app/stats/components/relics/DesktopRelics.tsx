"use client";

import type { StatsResponse } from "@/app/stats/types/stats";

interface DesktopRelicsProps {
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
    <div className="flex items-baseline justify-between gap-6 whitespace-nowrap">
      <span
        className="text-lg font-bold"
        style={
          rarityStyle ?? {
            color: "rgba(255,255,255,0.9)",
          }
        }
      >
        {label}
      </span>

      <span className="text-right text-lg font-normal text-white/75">
        {typeof value === "number" ? formatNumber(value) : value}
      </span>
    </div>
  );
}

export default function DesktopRelics({ data }: DesktopRelicsProps) {
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

  const mythicsFound = mythicIds.size;

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
    <div className="w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-10 py-9">
      <div className="mb-8">
        <h2 className="text-left text-2xl font-bold text-white">
          Relics
        </h2>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12">
        <section className="min-w-0">
          <h3 className="border-b border-cyan-300/30 pb-3 text-2xl font-bold text-white">
            All-Time
          </h3>

          <div className="mt-7 space-y-5">
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
              value={mythicsFound}
            />
          </div>
        </section>

        <section className="min-w-0 border-l border-cyan-400/60 pl-10">
          <h3 className="border-b border-cyan-300/30 pb-3 text-2xl font-bold text-white">
            Current Season: {formatSeasonName(currentSeason.seasonId)}
          </h3>

          {currentSeason ? (
            <div className="mt-7">
              <div className="space-y-5">
                <StatRow
                  label="Relics opened"
                  value={currentSeason.totalCollected}
                />

                <StatRow
                  label="Unique relics found"
                  value={`${formatNumber(
                    currentSeason.uniqueCollected,
                  )} / ${RELICS_PER_SEASON}`}
                />
              </div>

              <div className="mt-8">
                <h4 className="border-b border-cyan-300/20">
                </h4>

                <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4">
                  <StatRow
                    label="Common"
                    value={rarityCounts.Common}
                    rarity
                  />

                  <StatRow
                    label="Legendary"
                    value={rarityCounts.Legendary}
                    rarity
                  />
                  
                  <StatRow
                    label="Rare"
                    value={rarityCounts.Rare}
                    rarity
                  />
                  
                  <StatRow
                    label="Mythic"
                    value={rarityCounts.Mythic}
                    rarity
                  />

                  <StatRow
                    label="Epic"
                    value={rarityCounts.Epic}
                    rarity
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[250px] items-center justify-center text-lg text-white/50">
              No relic season data available.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}