"use client";

import type { StatsResponse } from "@/app/stats/types/stats";

interface TabletGearsProps {
  data: StatsResponse;
}

const RARITIES = ["Common", "Rare", "Epic", "Legendary", "Mythic"] as const;

function formatNumber(value: number) {
  return value.toLocaleString("de-DE");
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

      <span
        className="shrink-0 text-right text-base text-white/75"
        style={
          rarityStyle
            ? {
                textShadow: rarityStyle.textShadow,
              }
            : undefined
        }
      >
        {typeof value === "number" ? formatNumber(value) : value}
      </span>
    </div>
  );
}

function getDataCardValue(
  data: StatsResponse,
  stat: string,
): number | null {
  const card = data.dataCards.cards.find(
    (item) => item.stat === stat,
  );

  return card?.value ?? null;
}

export default function TabletGears({ data }: TabletGearsProps) {
  const gearByRarity = data.stats.gearByRarity;
  const gearByPart = data.stats.gearByPart;

  const blueprintValue = getDataCardValue(
    data,
    "BlueprintsUnlocked",
  );

  const gearTotal = getDataCardValue(
    data,
    "GearFound",
  );

  const rarityTotal = RARITIES.reduce(
    (total, rarity) => total + (gearByRarity[rarity] ?? 0),
    0,
  );

  return (
    <div className="w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-7 py-8">
      <h2 className="mb-7 text-2xl font-bold text-white">
        Gears
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {/* GENERAL */}
        <section>
          <h3 className="border-b border-cyan-300/30 pb-3 text-xl font-bold text-white">
            General
          </h3>

          <div className="mt-6 space-y-5">
            <StatRow
              label="Blueprints found"
              value={blueprintValue ?? 0}
            />

            <StatRow
              label="Gears collected"
              value={gearTotal ?? 0}
            />
          </div>

          {/* GEAR PARTS */}
          <div className="mt-7">
            <h4 className="border-b border-cyan-300/20 pb-3 text-lg font-bold text-white">
              Gear Parts
            </h4>

            <div className="mt-5 space-y-4">
              <StatRow
                label="Hat"
                value={gearByPart.Head ?? 0}
              />

              <StatRow
                label="Body"
                value={gearByPart.Chest ?? 0}
              />

              <StatRow
                label="Shoe"
                value={gearByPart.Boots ?? 0}
              />
            </div>
          </div>
        </section>

        {/* CURRENT GEAR COLLECTION */}
        <section className="border-l border-cyan-400/60 pl-7">
          <h3 className="border-b border-cyan-300/30 pb-3 text-xl font-bold text-white">
            Current Gear Collection
          </h3>

          <div className="mt-6 space-y-4">
            {RARITIES.map((rarity) => {
              const value = gearByRarity[rarity] ?? 0;

              const percentage =
                rarityTotal > 0
                  ? (value / rarityTotal) * 100
                  : 0;

              const rarityStyle = getRarityStyle(rarity);

              return (
                <div key={rarity}>
                  <StatRow
                    label={rarity}
                    value={value}
                    rarity
                  />

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: rarityStyle?.color,
                        boxShadow: rarityStyle
                          ? `0 0 10px ${rarityStyle.color}55`
                          : undefined,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-base font-bold text-white/90">
              Total collection
            </span>

            <span className="text-lg font-black text-white">
              {formatNumber(gearTotal ?? 0)}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}