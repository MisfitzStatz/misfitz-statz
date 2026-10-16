import {
  formatHeroDuration,
  getHeroExtractionRate,
  getHeroDisplayName,
  getGuaranteedEvery,
  type HeroPanelProps,
} from "./heroTypes";
import AffinityLevels from "./AffinityLevels";

export default function TabletHeroes(props: HeroPanelProps) {
  const rate = getHeroExtractionRate(props.heroStats);

  return (
    <div className="w-full rounded-2xl border border-cyan-300/25 bg-[#111b2b]/95 px-7 py-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-left text-2xl font-bold text-white">Heroes</h2>
        <div className="flex border border-cyan-300/25 bg-[#0b1220] p-1">
          {(["total", "season"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => props.onModeChange(mode)}
              aria-pressed={props.mode === mode}
              className={`px-3 py-2 text-sm font-bold ${props.mode === mode ? "bg-cyan-300/15 text-cyan-200" : "text-white/55"}`}
            >
              {mode === "total" ? "Total" : "Current Season"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="tablet-hero-select" className="mb-2 block text-left text-sm font-bold uppercase tracking-wide text-cyan-200/80">
          Select Misfit
        </label>
        <select
          id="tablet-hero-select"
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
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <section className="min-w-0">
          <div className="flex min-h-40 items-center justify-center overflow-hidden">
            <img
              key={props.profilePicture}
              src={props.profilePicture}
              alt="Hero profile picture"
              className="h-full max-h-48 max-w-full object-contain"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex justify-between gap-3 border-b border-white/5 py-2">
              <span className="text-sm text-white/65">Level</span>
              <strong className="text-white">{props.selectedHero.level}</strong>
            </div>
            <div className="flex justify-between gap-3 py-2">
              <span className="text-sm text-white/65">Playtime</span>
              <strong className="text-right text-white">{formatHeroDuration(props.heroStats?.playtimeSeconds)}</strong>
            </div>
          </div>
        </section>

        <section className="min-w-0">
          <h3 className="border-b border-cyan-300/25 pb-3 text-lg font-bold text-white">Performance</h3>
          <div className="mt-5 flex items-center gap-4">
            <div
              className="relative h-24 w-24 shrink-0 rounded-full"
              style={{ background: rate === null ? "rgba(255,255,255,0.1)" : `conic-gradient(#7CFF00 0deg ${rate * 3.6}deg, #ef4444 ${rate * 3.6}deg 360deg)` }}
            >
              <div className="absolute inset-[5px] rounded-full bg-[#111b2b]" />
              <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-white">
                {rate === null ? "—" : `${rate}%`}
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex justify-between gap-2 text-sm"><span className="text-white/65">Games Played</span><strong className="text-white">{props.heroStats?.gamesPlayed ?? "—"}</strong></div>
              <div className="flex justify-between gap-2 text-sm"><span className="text-white/65">Extractions</span><strong className="text-white">{props.heroStats?.extractions ?? "—"}</strong></div>
                          </div>
          </div>
          <h3 className="mt-7 border-b border-cyan-300/25 pb-3 text-lg font-bold text-white">Relic Affinity</h3>
          <p className="mt-3 text-sm font-semibold text-white/75">
          Guaranteed every: <span className="text-lg font-black text-white">{getGuaranteedEvery(props.selectedHero.level)}</span>
        </p>
          <AffinityLevels level={props.selectedHero.level} />
          {props.mode === "season" && <p className="mt-3 text-xs text-white/40">Season: {props.seasonName ?? "Unavailable"}</p>}
        </section>
      </div>
    </div>
  );
}
