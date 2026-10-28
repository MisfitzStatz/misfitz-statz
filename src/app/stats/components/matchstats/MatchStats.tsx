"use client";

import { useMemo, useState } from "react";
import type {
  StatsResponse,
  PlayerStats,
  DataCard,
} from "@/app/stats/types/stats";
import { useAuth } from "@/lib/AuthContext";
import DesktopMatchStats from "./DesktopMatchStats";
import TabletMatchStats from "./TabletMatchStats";
import MobileMatchStats from "./MobileMatchStats";

interface MatchStatsProps {
  data: StatsResponse;
}

export default function MatchStats({ data }: MatchStatsProps) {
  const { loggedIn } = useAuth();
  const [selectedSeason, setSelectedSeason] = useState("total");

  const seasons = useMemo(
    () => Object.keys(data.statsHistory.bySeason),
    [data.statsHistory.bySeason]
  );

  const isHistorySeason = selectedSeason !== "total";

  const stats: PlayerStats =
    selectedSeason === "total"
      ? data.stats
      : data.statsHistory.bySeason[selectedSeason];

  const cards: DataCard[] = data.dataCards.cards;

  const currentExtractionStreak =
    data.currentExtractionStreak ??
    data.statsHistory.currentExtractionStreak;

  return (
    <section className="mt-10 w-full">
      <div className="hidden lg:block">
        <DesktopMatchStats
          stats={stats}
          cards={cards}
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSeasonChange={setSelectedSeason}
          currentExtractionStreak={currentExtractionStreak}
          loggedIn={loggedIn}
          isHistorySeason={isHistorySeason}
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <TabletMatchStats
          stats={stats}
          cards={cards}
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSeasonChange={setSelectedSeason}
          currentExtractionStreak={currentExtractionStreak}
          loggedIn={loggedIn}
          isHistorySeason={isHistorySeason}
        />
      </div>

      <div className="block md:hidden">
        <MobileMatchStats
          stats={stats}
          cards={cards}
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSeasonChange={setSelectedSeason}
          currentExtractionStreak={currentExtractionStreak}
          loggedIn={loggedIn}
          isHistorySeason={isHistorySeason}
        />
      </div>
    </section>
  );
}