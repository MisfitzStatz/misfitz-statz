"use client";

import Image from "next/image";
import { Check, Copy, Flag } from "lucide-react";
import AchievementDisplay from "./AchievementsDisplay";
import type { OverviewViewData } from "./Overview";

interface DesktopOverviewProps {
  data: OverviewViewData;
  copied: boolean;
  onCopyProfileLink: () => void;
  onReport: () => void;
}

function OverviewStat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 whitespace-nowrap">
      <span className="text-lg font-bold text-white/90">
        {label}
      </span>

      <span className="text-right text-lg font-normal text-white/75">
        {value}
      </span>
    </div>
  );
}

export default function DesktopOverview({
  data,
  copied,
  onCopyProfileLink,
  onReport,
}: DesktopOverviewProps) {
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-10 py-9">
        <div className="grid grid-cols-[430px_minmax(0,1fr)] gap-12">
          {/* PLAYER IDENTITY + ACHIEVEMENTS */}
          <div className="min-w-0 border-r border-cyan-300/25 pr-10">
            {/* PLAYER */}
            <div className="flex items-start gap-5">
            {/* PROFILE PICTURE */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                {data.profilePicture && (
                <Image
                    src={data.profilePicture}
                    alt="Profile picture"
                    fill
                    sizes="96px"
                    className="object-cover"
                />
                )}
            </div>

            {/* PLAYER NAME + ID */}
            <div className="min-w-0 flex-1 pt-1 text-center">
                <p className="whitespace-nowrap text-2xl font-bold text-white">
                {data.playerName}
                </p>

                <div className="mt-3 flex items-center justify-center gap-1.5">
                <button
                    type="button"
                    onClick={onReport}
                    className="flex h-5 w-5 shrink-0 items-center justify-center text-white/30 transition hover:text-red-400"
                    title="Report player"
                    aria-label="Report player"
                >
                    <Flag size={12} />
                </button>

                <span className="whitespace-nowrap font-mono text-sm text-white/45">
                    {data.playerId}
                </span>

                <button
                    type="button"
                    onClick={onCopyProfileLink}
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-white/45 transition hover:text-white"
                    title="Copy profile link"
                    aria-label="Copy profile link"
                >
                    {copied ? (
                    <Check size={15} />
                    ) : (
                    <Copy size={15} />
                    )}
                </button>
                </div>
            </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-white/90">
                Badges
              </h3>

              <AchievementDisplay
                achievements={data.achievements}
                type="statz"
              />

              {/* GAME ACHIEVEMENTS */}
                <p className="mt-7 text-lg font-bold text-white/90">
                Achievements
                </p>

              <AchievementDisplay
                achievements={data.gameAchievements}
                type="game"
              />
            </div>
          </div>

          {/* OVERVIEW STATS */}
          <div className="min-w-0">
            <h2 className="border-b border-cyan-300/30 pb-3 text-2xl font-bold text-white">
              Overview Stats
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-x-20">
              {/* LEFT COLUMN */}
              <div className="space-y-5">
                <OverviewStat
                  label="Account created"
                  value={data.accountCreated ?? "Unknown"}
                />

                <OverviewStat
                  label="Level"
                  value={data.level}
                />

                <OverviewStat
                  label="Playtime"
                  value={data.playtime}
                />

                <OverviewStat
                  label="Matches"
                  value={data.matches}
                />

                <OverviewStat
                  label="Heroes unlocked"
                  value={`${data.heroesUnlocked}/7`}
                />
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-5">
                <OverviewStat
                  label="Highest Streak"
                  value={data.highestStreak}
                />

                <OverviewStat
                  label="Longest Run"
                  value={data.longestRun}
                />

                <OverviewStat
                  label="Relics extracted"
                  value={data.relicsExtracted}
                />

                <OverviewStat
                  label="World Boss zeroed"
                  value={data.worldBossDefeated}
                />

                <OverviewStat
                  label="Gears"
                  value={data.gears}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}