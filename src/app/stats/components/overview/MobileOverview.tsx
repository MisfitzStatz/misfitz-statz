"use client";

import Image from "next/image";
import { Check, Copy, ChevronDown, ChevronUp, Flag } from "lucide-react";
import { useState } from "react";
import AchievementDisplay from "./AchievementsDisplay";
import type { OverviewViewData } from "./Overview";

interface MobileOverviewProps {
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
    <div className="flex items-baseline justify-between gap-4 border-b border-cyan-300/10 pb-4">
      <p className="min-w-0 text-sm font-bold text-white/85">
        {label}
      </p>

      <p className="shrink-0 text-right text-sm font-normal text-white/65">
        {value}
      </p>
    </div>
  );
}

export default function MobileOverview({
  data,
  copied,
  onCopyProfileLink,
  onCopyPlayerId,
  onReport,
}: MobileOverviewProps) {
  const [showOverviewStats, setShowOverviewStats] = useState(true);
  const [showCopyMenu, setShowCopyMenu] = useState(false);

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-5 py-6">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
            {data.profilePicture && (
              <Image
                src={data.profilePicture}
                alt="Profile picture"
                fill
                sizes="64px"
                className="object-cover"
              />
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-xl font-bold text-white">
              {data.playerName}
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <button
                type="button"
                onClick={onReport}
                className="flex h-4 w-4 shrink-0 items-center justify-center text-white/30 transition hover:text-red-400"
                title="Report player"
                aria-label="Report player"
              >
                <Flag size={10} />
              </button>

              <span className="truncate font-mono text-xs text-white/45">
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

        {/* MisfitzStatz Achievements */}
        <div className="mt-7">
          <h3 className="text-lg font-bold text-white/90">
            Badges
          </h3>

          <div className="mt-3">
            <AchievementDisplay
              achievements={data.achievements}
              type="statz"
            />
          </div>
        </div>

        {/* Misfitz Game Achievements */}
        <div className="mt-6">
          <p className="text-lg font-bold text-white/90">
            Achievements
          </p>

          <div className="mt-3">
            <AchievementDisplay
              achievements={data.gameAchievements}
              type="game"
            />
          </div>
        </div>

        {/* Overview Stats */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() =>
              setShowOverviewStats((current) => !current)
            }
            className="flex w-full items-center justify-between border-b border-cyan-300/30 pb-3 text-left"
          >
            <h2 className="text-xl font-bold text-white">
              Overview Stats
            </h2>

            {showOverviewStats ? (
              <ChevronUp size={20} className="text-white/55" />
            ) : (
              <ChevronDown size={20} className="text-white/55" />
            )}
          </button>

          {showOverviewStats && (
            <div className="mt-5 space-y-4">
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
                label="World Boss defeated"
                value={data.worldBossDefeated}
              />

              <OverviewStat
                label="Gears"
                value={data.gears}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}