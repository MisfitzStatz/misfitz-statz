import type { CSSProperties } from "react";
import {
  formatHeroDuration,
  getHeroExtractionRate,
  getHeroDisplayName,
  getGuaranteedEvery,
  type HeroPanelProps,
} from "./heroTypes";
import AffinityLevels from "./AffinityLevels";

function HeroPicker({ props }: { props: HeroPanelProps }) {
  return (
    <div>
      <label
        htmlFor="desktop-hero-select"
        className="mb-2 block text-left text-sm font-bold uppercase tracking-wider text-cyan-200/80"
      >
        Select Misfit
      </label>
      <select
        id="desktop-hero-select"
        value={props.selectedHero.heroId}
        onChange={(event) => props.onHeroChange(event.target.value)}
        className="h-10 w-full border border-white/10 bg-[#0d1725] px-3 text-sm font-medium text-white/90 outline-none transition hover:border-white/20 focus:border-cyan-300/40"
      >
        {props.heroes.map((hero) => (
          <option key={hero.heroId} value={hero.heroId}>
            {getHeroDisplayName(hero.heroName)}
          </option>
        ))}
      </select>
    </div>
  );
}

function HeroPortrait({ profilePicture }: { profilePicture: string }) {
  return (
    <div className="mt-4 flex h-44 items-center justify-center overflow-hidden">
      <img
        key={profilePicture}
        src={profilePicture}
        alt="Hero profile picture"
        className="h-full w-full object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function ExtractionChart({ rate }: { rate: number | null }) {
  const percentage = rate === null ? 0 : Math.max(0, Math.min(100, rate));
  const style: CSSProperties = {
    background:
      rate === null
        ? "conic-gradient(rgba(255,255,255,0.12) 0deg 360deg)"
        : `conic-gradient(#7CFF00 0deg ${percentage * 3.6}deg, #ef4444 ${percentage * 3.6}deg 360deg)`,
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-36 w-36 rounded-full" style={style}>
        <div className="absolute inset-[7px] rounded-full bg-[#111b2b]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-white">
            {rate === null ? "—" : `${percentage}%`}
          </span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/50">
            Extracted
          </span>
        </div>
      </div>
      <div className="mt-3 flex gap-4 text-xs text-white/55">
        <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#7CFF00]" />Extracted</span>
        <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-red-500" />Not extracted</span>
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/5 py-3 last:border-0">
      <span className="text-sm font-semibold text-white/75">{label}</span>
      <span className="text-right text-lg font-bold tabular-nums text-white">
        {typeof value === "number" ? value.toLocaleString("de-DE") : value}
      </span>
    </div>
  );
}

export default function DesktopHeroes(props: HeroPanelProps) {
  const rate = getHeroExtractionRate(props.heroStats);

  return (
    <div className="w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-10 py-9">
      <div className="mb-8 flex items-center justify-between gap-6">
        <h2 className="text-left text-2xl font-bold text-white">Heroes</h2>
        <div className="flex items-center gap-1 border border-cyan-300/25 bg-[#0b1220] p-1">
          <button
            type="button"
            onClick={() => props.onModeChange("total")}
            aria-pressed={props.mode === "total"}
            className={`px-4 py-2 text-sm font-bold transition ${props.mode === "total" ? "bg-cyan-300/15 text-cyan-200" : "text-white/55 hover:text-white"}`}
          >
            Total
          </button>
          <button
            type="button"
            onClick={() => props.onModeChange("season")}
            aria-pressed={props.mode === "season"}
            className={`px-4 py-2 text-sm font-bold transition ${props.mode === "season" ? "bg-cyan-300/15 text-cyan-200" : "text-white/55 hover:text-white"}`}
          >
            Current Season
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[minmax(220px,0.8fr)_minmax(0,1.1fr)_minmax(230px,0.9fr)] gap-10">
        <section className="min-w-0">
          <HeroPicker props={props} />
          <HeroPortrait profilePicture={props.profilePicture} />
          <StatRow label="Level" value={props.selectedHero.level} />
          <StatRow label="Playtime" value={formatHeroDuration(props.heroStats?.playtimeSeconds)} />
        </section>

        <section className="min-w-0 border-l border-cyan-400/40 pl-10">
          <h3 className="border-b border-cyan-300/25 pb-3 text-lg font-bold text-white">Performance</h3>
          <div className="mt-6">
            <ExtractionChart rate={rate} />
          </div>
          <div className="mt-6">
            <StatRow label="Games Played" value={props.heroStats?.gamesPlayed ?? "—"} />
            <StatRow label="Extractions" value={props.heroStats?.extractions ?? "—"} />
          </div>
          {props.mode === "season" && (
            <p className="mt-4 text-xs text-white/40">
              Season: {props.seasonName ?? "Unavailable"}
            </p>
          )}
        </section>

        <section className="min-w-0 border-l border-cyan-400/40 pl-10">
          <h3 className="border-b border-cyan-300/25 pb-3 text-lg font-bold text-white">Relic Affinity</h3>
          <p className="mt-4 text-sm font-semibold text-white/75">
            Guaranteed relic every: <span className="text-lg font-black text-white">{getGuaranteedEvery(props.selectedHero.level)}</span>
          </p>
          <AffinityLevels level={props.selectedHero.level} />
          <h3 className="mt-7 border-b border-cyan-300/25 pb-3 text-lg font-bold text-white">
            Relics Collected This Season
          </h3>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/45">Coming Soon</p>
        </section>
      </div>
    </div>
  );
}
