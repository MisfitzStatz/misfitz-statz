import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  formatHeroDuration,
  getHeroExtractionRate,
  getHeroDisplayName,
  getGuaranteedEvery,
  type HeroPanelProps,
} from "./heroTypes";
import AffinityLevels from "./AffinityLevels";

export default function MobileHeroes(props: HeroPanelProps) {
  const rate = getHeroExtractionRate(props.heroStats);
  const [showHeroes, setShowHeroes] = useState(true);

  return (
    <div className="w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 p-4 text-left sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowHeroes((current) => !current)}
          className="flex min-w-0 flex-1 items-center justify-between text-left"
          aria-expanded={showHeroes}
        >
          <h2 className="text-xl font-bold text-white">Heroes</h2>
          {showHeroes ? (
            <ChevronUp size={20} className="ml-3 shrink-0 text-white/55" />
          ) : (
            <ChevronDown size={20} className="ml-3 shrink-0 text-white/55" />
          )}
        </button>
        <div className="flex border border-cyan-300/25 bg-[#0b1220] p-1">
          {(["total", "season"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => props.onModeChange(mode)}
              aria-pressed={props.mode === mode}
              className={`px-2.5 py-2 text-xs font-bold ${props.mode === mode ? "bg-cyan-300/15 text-cyan-200" : "text-white/55"}`}
            >
              {mode === "total" ? "Total" : "Season"}
            </button>
          ))}
        </div>
      </div>

      {showHeroes && (
        <div>
      <label htmlFor="mobile-hero-select" className="mb-2 mt-5 block text-xs font-bold uppercase tracking-wide text-cyan-200/80">
        Select Misfit
      </label>
      <select
        id="mobile-hero-select"
        value={props.selectedHero.heroId}
        onChange={(event) => props.onHeroChange(event.target.value)}
        className="h-10 w-full border border-white/10 bg-[#0d1725] px-3 text-sm text-white/90 outline-none hover:border-white/20 focus:border-cyan-300/40"
      >
        {props.heroes.map((hero) => (
          <option key={hero.heroId} value={hero.heroId}>
            {getHeroDisplayName(hero.heroName)}
          </option>
        ))}
      </select>

      <div className="mt-5 flex items-center gap-4">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden">
          <img
            key={props.profilePicture}
            src={props.profilePicture}
            alt="Hero profile picture"
            className="h-full w-full object-contain"
            onError={(event) => { event.currentTarget.style.display = "none"; }}
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-white/70">Level <strong className="text-white">{props.selectedHero.level}</strong></p>
          <p className="mt-1 text-sm text-white/70">Playtime <strong className="text-white">{formatHeroDuration(props.heroStats?.playtimeSeconds)}</strong></p>
        </div>
      </div>

      <section className="mt-6">
        <h3 className="border-b border-cyan-300/25 pb-2 text-base font-bold text-white">Performance</h3>
        <div className="mt-4 grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4">
          <div
            className="relative h-[88px] w-[88px] rounded-full"
            style={{ background: rate === null ? "rgba(255,255,255,0.1)" : `conic-gradient(#7CFF00 0deg ${rate * 3.6}deg, #ef4444 ${rate * 3.6}deg 360deg)` }}
          >
            <div className="absolute inset-[5px] rounded-full bg-[#111b2b]" />
            <div className="absolute inset-0 flex items-center justify-center text-base font-black text-white">
              {rate === null ? "—" : `${rate}%`}
            </div>
          </div>
          <div className="min-w-0 space-y-3">
            <div className="flex justify-between gap-2 text-sm"><span className="text-white/60">Games Played</span><strong className="text-white">{props.heroStats?.gamesPlayed ?? "—"}</strong></div>
            <div className="flex justify-between gap-2 text-sm"><span className="text-white/60">Extractions</span><strong className="text-white">{props.heroStats?.extractions ?? "—"}</strong></div>
                      </div>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="border-b border-cyan-300/25 pb-2 text-base font-bold text-white">Relic Affinity</h3>
        <p className="mt-3 text-sm font-semibold text-white/75">
          Guaranteed every: <span className="text-lg font-black text-white">{getGuaranteedEvery(props.selectedHero.level)}</span>
        </p>
        <AffinityLevels level={props.selectedHero.level} />
        <h3 className="mt-5 text-sm font-bold text-white">Relics Collected This Season</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/45">Coming Soon</p>
        {props.mode === "season" && <p className="mt-3 text-xs text-white/40">Season: {props.seasonName ?? "Unavailable"}</p>}
      </section>
        </div>
      )}
    </div>
  );
}
