"use client";

import { useState } from "react";
import type { Achievement } from "../../types/stats";
import {
  getMisfitzStatzAchievement,
  type GameAchievementDisplayItem,
} from "./achievements";

interface AchievementDisplayProps {
  achievements: Achievement[] | GameAchievementDisplayItem[];
  type: "statz" | "game";
}

function isGameAchievement(
  achievement: Achievement | GameAchievementDisplayItem
): achievement is GameAchievementDisplayItem {
  return "level" in achievement;
}

function formatValue(value: number, unit?: "hours"): string {
  if (unit === "hours") {
    return `${value.toLocaleString()} hours`;
  }

  return value.toLocaleString();
}

export default function AchievementDisplay({
  achievements,
  type,
}: AchievementDisplayProps) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | GameAchievementDisplayItem | null>(null);
    const [showAll, setShowAll] = useState(false);
    
  if (achievements.length === 0) {
    return (
      <p className="text-sm text-white/35">
        No badges earned yet.
      </p>
    );
  }

  const selectedIsGame =
    selectedAchievement !== null && isGameAchievement(selectedAchievement);

  return (
    <>
<div className="flex flex-wrap gap-2">
  {(type === "game" && !showAll
    ? achievements.slice(0, 7)
    : achievements
  ).map((achievement) => {
          if (type === "game" && !isGameAchievement(achievement)) {
            return null;
          }

          if (type === "statz" && isGameAchievement(achievement)) {
            return null;
          }

          const gameAchievement = isGameAchievement(achievement);

          if (gameAchievement) {
            return (
              <button
                key={achievement.id}
                type="button"
                onClick={() => setSelectedAchievement(achievement)}
                className="rounded-full px-3 py-1 text-xs font-medium transition-transform"
                style={{
                  backgroundColor: `${achievement.color.background}B3`,
                  border: `1px solid ${achievement.color.border}B3`,
                  color: achievement.color.text,
                }}
              >
                {achievement.name}
              </button>
            );
          }

          const definition = getMisfitzStatzAchievement(
            achievement.achievementID
          );

          return (
            <button
            key={achievement.achievementID}
            type="button"
            onClick={() => setSelectedAchievement(achievement)}
            className="rounded-full px-3 py-1 text-xs font-medium transition-transform"
            style={{
                backgroundColor: definition
                ? `${definition.color.background}B3`
                : "rgba(255, 255, 255, 0.1)",
                border: `1px solid ${
                definition?.color.border ?? "rgba(255, 255, 255, 0.15)"
                }`,
                color: definition?.color.text ?? "#FFFFFF",
            }}
            >
            {definition?.name ?? achievement.achievementname}
            </button>
          );
        })}
{type === "game" && achievements.length > 7 && !showAll && (
  <button
    type="button"
    onClick={() => setShowAll(true)}
    className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 px-2 text-xs font-bold text-white/60 transition hover:bg-white/10 hover:text-white"
    title="Show all achievements"
    aria-label="Show all achievements"
  >
    +
  </button>
)}

{type === "game" && achievements.length > 7 && showAll && (
  <button
    type="button"
    onClick={() => setShowAll(false)}
    className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 px-2 text-xs font-bold text-white/60 transition hover:bg-white/10 hover:text-white"
    title="Show fewer achievements"
    aria-label="Show fewer achievements"
  >
    −
  </button>
)}
      </div>

      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedIsGame ? (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedAchievement.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Level {selectedAchievement.level}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAchievement(null)}
                    className="text-xl text-white/40 transition-colors hover:text-white"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div
                  className="mt-5 rounded-xl px-4 py-3"
                  style={{
                    backgroundColor: selectedAchievement.color.background,
                    color: selectedAchievement.color.text,
                  }}
                >
                  <span className="font-semibold">
                    {selectedAchievement.name}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/70">
                  {selectedAchievement.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-white/50">Required</span>
                    <span className="text-sm font-semibold text-white">
                      {formatValue(
                        selectedAchievement.requiredValue,
                        selectedAchievement.unit
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-white/50">Current</span>
                    <span className="text-sm font-semibold text-white">
                      {formatValue(
                        selectedAchievement.currentValue,
                        selectedAchievement.unit
                      )}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {getMisfitzStatzAchievement(
                        selectedAchievement.achievementID
                      )?.name ?? selectedAchievement.achievementname}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      MisfitzStatz Achievement
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAchievement(null)}
                    className="text-xl text-white/40 transition-colors hover:text-white"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {getMisfitzStatzAchievement(
                  selectedAchievement.achievementID
                )?.description && (
                  <p className="mt-5 text-sm leading-6 text-white/70">
                    {
                      getMisfitzStatzAchievement(
                        selectedAchievement.achievementID
                      )?.description
                    }
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
