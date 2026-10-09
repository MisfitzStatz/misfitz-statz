"use client";

import { useEffect, useState } from "react";
import ReportModal from "@/components/ReportModal";
import DesktopOverview from "./DesktopOverview";
import TabletOverview from "./TabletOverview";
import MobileOverview from "./MobileOverview";
import type { Achievement, StatsResponse } from "../../types/stats";
import {
  calculateGameAchievements,
  type GameAchievementDisplayItem,
} from "./achievements";

const PROFILE_PICTURES = [
  "/stats/pfp/beat.png",
  "/stats/pfp/fang.png",
  "/stats/pfp/ray.png",
  "/stats/pfp/rush.png",
  "/stats/pfp/shade.png",
  "/stats/pfp/drip.png",
  "/stats/pfp/gloss.png",
];

export interface OverviewViewData {
  playerName: string;
  playerId: string;
  profilePicture: string | null;

  accountCreated: string | null;

  level: number;
  playtime: string;
  matches: number;
  heroesUnlocked: number;
  heroesTotal: number;

  highestStreak: number;
  longestRun: string;
  relicsExtracted: number;
  worldBossDefeated: number;
  gears: number;

  achievements: Achievement[];
  gameAchievements: GameAchievementDisplayItem[];
}

interface OverviewProps {
  data: StatsResponse;
}

function getRandomProfilePicture(): string {
  const index = Math.floor(Math.random() * PROFILE_PICTURES.length);
  return PROFILE_PICTURES[index];
}

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "Unknown";
  }

  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (minutes > 0) {
    return `${minutes}m`;
  }

  return `${Math.floor(seconds)}s`;
}

function formatDate(timestamp: string): string | null {
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function getAccountCreated(data: StatsResponse): string | null {
  const unlockedHeroes = data.heroes
    .filter((hero) => hero.unlocked)
    .filter((hero) => !Number.isNaN(new Date(hero.unlockedAt).getTime()));

  if (unlockedHeroes.length === 0) {
    return null;
  }

  const firstUnlockedHero = unlockedHeroes.reduce((oldest, hero) => {
    const oldestTime = new Date(oldest.unlockedAt).getTime();
    const heroTime = new Date(hero.unlockedAt).getTime();

    return heroTime < oldestTime ? hero : oldest;
  });

  return formatDate(firstUnlockedHero.unlockedAt);
}

function getGearCount(data: StatsResponse): number {
  const gearCard = data.dataCards.cards.find(
    (card) => card.id === "GearFound"
  );

  if (gearCard && Number.isFinite(gearCard.value)) {
    return gearCard.value;
  }

  return Object.values(data.stats.gearByRarity).reduce(
    (total, amount) => total + amount,
    0
  );
}

function getDisplayPlayerId(playerId: string): string {
  return playerId.replace(/^Player:/, "");
}

function createOverviewData(
  data: StatsResponse,
  profilePicture: string | null
): OverviewViewData {
  const heroesUnlocked = data.heroes.filter(
    (hero) => hero.unlocked
  ).length;

  return {
    playerName: data.playerName,
    playerId: getDisplayPlayerId(data.playerId),
    profilePicture,

    accountCreated: getAccountCreated(data),

    level: data.playerLevel,
    playtime: formatDuration(data.stats.playtime),
    matches: data.stats.gamesPlayed,
    heroesUnlocked,
    heroesTotal: data.heroes.length,

    highestStreak: data.stats.bestStreak,
    longestRun: formatDuration(data.stats.longestRunSeconds),
    relicsExtracted: data.stats.totalRelicsExtracted,
    worldBossDefeated: data.stats.runStats.WorldBossesKilled ?? 0,
    gears: getGearCount(data),

    achievements: data.achievements,
    gameAchievements: calculateGameAchievements(data),
  };
}

export default function Overview({ data }: OverviewProps) {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    setProfilePicture(getRandomProfilePicture());
    setCopied(false);
  }, [data.playerId]);

  const overviewData = createOverviewData(data, profilePicture);

  const handleCopyProfileLink = () => {
  const url = `https://misfitzstatz.com/stats/#${overviewData.playerId}`;
    // Modern Clipboard API
    if (navigator.clipboard?.writeText) {
        navigator.clipboard
        .writeText(url)
        .then(() => {
            setCopied(true);

            window.setTimeout(() => {
            setCopied(false);
            }, 2000);
        })
        .catch(() => {
            setCopied(false);
        });

        return;
    }

    // iOS / Safari fallback
    const textarea = document.createElement("textarea");

    textarea.value = url;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    let copiedSuccessfully = false;

    try {
        copiedSuccessfully = document.execCommand("copy");
    } catch {
        copiedSuccessfully = false;
    }

    textarea.remove();

    if (!copiedSuccessfully) {
        setCopied(false);
        return;
    }

    setCopied(true);

    window.setTimeout(() => {
        setCopied(false);
    }, 2000);
  };

    const handleOpenReport = () => {
    setShowReportModal(true);
    };

    const handleCloseReport = () => {
      setShowReportModal(false);
    };
    
  return (
    <section className="mt-10 w-full">
      <div className="hidden lg:block">
        <DesktopOverview
          data={overviewData}
          copied={copied}
          onCopyProfileLink={handleCopyProfileLink}
          onReport={handleOpenReport}
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <TabletOverview
          data={overviewData}
          copied={copied}
          onCopyProfileLink={handleCopyProfileLink}
          onReport={handleOpenReport}
        />
      </div>

      <div className="block md:hidden">
        <MobileOverview
          data={overviewData}
          copied={copied}
          onCopyProfileLink={handleCopyProfileLink}
          onReport={handleOpenReport}
        />
      </div>

      {showReportModal && (
        <ReportModal
          open={showReportModal}
          playerId={overviewData.playerId}
          playerName={overviewData.playerName}
          onClose={handleCloseReport}
        />
      )}
    </section>
  );
}