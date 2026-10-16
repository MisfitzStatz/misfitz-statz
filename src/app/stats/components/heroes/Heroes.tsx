"use client";

import { useEffect, useMemo, useState } from "react";
import type { StatsResponse } from "@/app/stats/types/stats";
import DesktopHeroes from "./DesktopHeroes";
import TabletHeroes from "./TabletHeroes";
import MobileHeroes from "./MobileHeroes";
import { getHeroProfilePicture } from "./heroTypes";
import type { HeroStatsMode } from "./heroTypes";

interface HeroesProps {
  data: StatsResponse;
}

export default function Heroes({ data }: HeroesProps) {
  const availableHeroes = (data.heroes ?? []).filter((hero) => hero.unlocked);
  const seasonIds = useMemo(
    () => Object.keys(data.statsHistory?.bySeason ?? {}),
    [data.statsHistory?.bySeason],
  );

  // Relic seasons are the most direct source for the current season identifier.
  const currentSeasonId =
    data.relics?.seasons?.[data.relics.seasons.length - 1]?.seasonId ??
    seasonIds[seasonIds.length - 1] ??
    null;

  const selectedSeasonStats = currentSeasonId
    ? data.statsHistory?.bySeason?.[currentSeasonId] ?? null
    : null;

  const [selectedHeroId, setSelectedHeroId] = useState("");
  const [mode, setMode] = useState<HeroStatsMode>("total");

  useEffect(() => {
    const defaultHero = availableHeroes[0];
    setSelectedHeroId(defaultHero?.heroId ?? "");
    setMode("total");
    // Reset the selection when the searched player changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.playerId]);

  const selectedHero =
    availableHeroes.find((hero) => hero.heroId === selectedHeroId) ??
    availableHeroes.find((hero) => hero.unlocked) ??
    availableHeroes[0];

  if (!selectedHero) {
    return (
      <section className="mt-10 w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-6 py-8 text-left">
        <h2 className="text-2xl font-bold text-white">Heroes</h2>
        <p className="mt-4 text-white/60">No unlocked heroes available for this player.</p>
      </section>
    );
  }

  const heroStats =
    mode === "total"
      ? data.stats?.heroes?.[selectedHero.heroId] ?? null
      : selectedSeasonStats?.heroes?.[selectedHero.heroId] ?? null;

  const props = {
    heroes: availableHeroes,
    profilePicture: getHeroProfilePicture(selectedHero.heroName),
    selectedHero,
    mode,
    onHeroChange: setSelectedHeroId,
    onModeChange: setMode,
    seasonName: currentSeasonId
      ? currentSeasonId.replace(/^Season_/, "").replace(/_/g, " ")
      : null,
    heroStats,
  };

  return (
    <section className="mt-10 w-full">
      <div className="hidden lg:block">
        <DesktopHeroes {...props} />
      </div>

      <div className="hidden md:block lg:hidden">
        <TabletHeroes {...props} />
      </div>

      <div className="block md:hidden">
        <MobileHeroes {...props} />
      </div>
    </section>
  );
}
