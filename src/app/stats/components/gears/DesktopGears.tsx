import type { StatsResponse } from "@/app/stats/types/stats";
import { Footprints, HardHat, Shirt } from "lucide-react";

interface DesktopGearsProps {
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
  icon,
}: {
  label: string;
  value: string | number;
  rarity?: boolean;
  icon?: React.ReactNode;
}) {
  const rarityStyle = rarity ? getRarityStyle(label) : undefined;

  return (
    <div className="flex items-center justify-between gap-6 whitespace-nowrap">
      <div className="flex items-center gap-3">
        {icon && <span className="text-white/45">{icon}</span>}

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
      </div>

      <span
        className="text-right text-lg font-normal text-white/75"
        style={rarityStyle ? { textShadow: rarityStyle.textShadow } : undefined}
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

export default function DesktopGears({ data }: DesktopGearsProps) {
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
    <div className="w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-10 py-9">
      <div className="mb-8">
        <h2 className="text-left text-2xl font-bold text-white">
          Gears
        </h2>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12">
        {/* GENERAL */}
        <section className="min-w-0">
          <h3 className="border-b border-cyan-300/30 pb-3 text-2xl font-bold text-white">
            General
          </h3>

          <div className="mt-7 space-y-5">
            <StatRow
              label="Blueprints found"
              value={blueprintValue ?? 0}
            />

            <StatRow
              label="Gears collected"
              value={gearTotal ?? 0}
            />
          </div>

          <div className="mt-8">
            <h4 className="border-b border-cyan-300/20 pb-3 text-lg font-bold text-white">
              Gear Parts
            </h4>

            <div className="mt-5 space-y-5">
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
        <section className="min-w-0 border-l border-cyan-400/60 pl-10">
          <h3 className="border-b border-cyan-300/30 pb-3 text-2xl font-bold text-white">
            Current Gear Collection
          </h3>

          <div className="mt-7 space-y-5">
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
            <span className="text-lg font-bold text-white/90">
              Total collection
            </span>

            <span className="text-xl font-black text-white">
              {formatNumber(gearTotal ?? 0)}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}