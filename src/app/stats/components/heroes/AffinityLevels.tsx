import { RELIC_AFFINITY_LEVELS } from "./heroTypes";

interface AffinityLevelsProps {
  level: number;
}

export default function AffinityLevels({ level }: AffinityLevelsProps) {
  return (
    <div className="mt-4 grid grid-cols-6 items-center gap-2" aria-label="Relic affinity unlocks">
      {RELIC_AFFINITY_LEVELS.map((requiredLevel, index) => {
        const unlocked = level >= requiredLevel;

        return (
          <div key={requiredLevel} className="flex min-w-0 flex-col items-center gap-1">
            <img
              src={unlocked ? "/stats/aff_t.png" : "/stats/aff_f.png"}
              alt={`Affinity ${index + 1}: ${unlocked ? "unlocked" : "locked"}`}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </div>
        );
      })}
    </div>
  );
}
