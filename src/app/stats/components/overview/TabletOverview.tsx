"use client";

import Image from "next/image";
import { Check, Copy, Flag } from "lucide-react";
import { useState } from "react";
import AchievementDisplay from "./AchievementsDisplay";
import type { OverviewViewData } from "./Overview";

interface TabletOverviewProps {
  data: OverviewViewData;
  copied: boolean;
  onCopyProfileLink: () => void;
  onCopyPlayerId: () => void;
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
    <div className="flex items-baseline justify-between gap-4 whitespace-nowrap">
      <span className="text-base font-bold text-white/90">
        {label}
      </span>

      <span className="text-right text-base font-normal text-white/75">
        {value}
      </span>
    </div>
  );
}

export default function TabletOverview({
  data,
  copied,
  onCopyProfileLink,
  onCopyPlayerId,
  onReport,
}: TabletOverviewProps) {
  const [showCopyMenu, setShowCopyMenu] = useState(false);
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-7 py-7">
        <div className="grid grid-cols-[300px_minmax(0,1fr)] gap-8">
          {/* PLAYER IDENTITY + ACHIEVEMENTS */}
          <div className="min-w-0 border-r border-cyan-300/25 pr-7">
            {/* PLAYER */}
            <div className="flex items-start gap-4">
              {/* PROFILE PICTURE */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                {data.profilePicture && (
                  <Image
                    src={data.profilePicture}
                    alt="Profile picture"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                )}
              </div>

              {/* PLAYER NAME + ID */}
              <div className="min-w-0 flex-1 pt-1 text-center">
                <p className="whitespace-nowrap text-xl font-bold text-white">
                  {data.playerName}
                </p>

                <div className="mt-2 flex items-center justify-center gap-1">
                  <button
                    type="button"
                    onClick={onReport}
                    className="flex h-4 w-4 shrink-0 items-center justify-center text-white/30 transition hover:text-red-400"
                    title="Report player"
                    aria-label="Report player"
                  >
                    <Flag size={10} />
                  </button>

                  <span className="whitespace-nowrap font-mono text-xs text-white/45">
                    {data.playerId}
                  </span>

                  <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCopyMenu((open) => !open)}
                    className="flex h-5 w-5 shrink-0 items-center justify-center text-white/45 transition hover:text-white"
                    title="Copy options"
                    aria-label="Copy options"
                    aria-expanded={showCopyMenu}
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                  {showCopyMenu && (
                    <div className="absolute right-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-lg border border-cyan-300/25 bg-[#111b2b] p-1 shadow-xl">
                      <button
                        type="button"
                        onClick={() => {
                          onCopyPlayerId();
                          setShowCopyMenu(false);
                        }}
                        className="block w-full rounded-md px-3 py-2 text-left text-xs text-white/85 transition hover:bg-cyan-300/10 hover:text-white"
                      >
                        Copy Player ID
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onCopyProfileLink();
                          setShowCopyMenu(false);
                        }}
                        className="block w-full rounded-md px-3 py-2 text-left text-xs text-white/85 transition hover:bg-cyan-300/10 hover:text-white"
                      >
                        Copy Stats Link
                      </button>
                    </div>
                  )}
                </div>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="mt-7">
              <h3 className="text-lg font-bold text-white/90">
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
            <h2 className="border-b border-cyan-300/30 pb-2 text-xl font-bold text-white">
              Overview Stats
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-x-10">
              {/* LEFT COLUMN */}
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                <span className="text-base font-bold text-white/90">
                  Account created
                </span>
                <span className="text-base font-normal text-white/75">
                  {data.accountCreated ?? "Unknown"}
                </span>
              </div>

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
              <div className="space-y-4">
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