import Link from "next/link";

type MisfitAbility = {
  name: string;
  shots: string;
  main: string;
  ultimate: string;
  thirdAbility: string;
  video: string;
};

const misfitz: MisfitAbility[] = [
  {
    name: "Ray",
    video: "/sneak-peeks/ray.webm",
    shots: "Downable bar instead of 4 shots",
    main: "Fire lazer shots. Hold to shoot constantly.",
    ultimate: "Shoot a giant lazer.",
    thirdAbility:
      "Get infinite ammo, speed up, and damage buff for a few seconds. No cooldown.",
  },
  {
    name: "Beat",
    video: "/sneak-peeks/beat.webm",
    shots: "6 instead of 3",
    main: "Soundwave with pushback.",
    ultimate:
      "Throw a sound bomb that pulls enemies in and explodes.",
    thirdAbility:
      "Spawns a shield in a direction that also knocks back targets in that direction.",
  },
  {
    name: "Gloss",
    video: "/sneak-peeks/gloss.webm",
    shots: "8 instead of 4",
    main: "Shot that damages and splits on hit in 3 parts.",
    ultimate: "AOE Heal zone for friends, damage for enemies.",
    thirdAbility:
      "Dash that heals a teammate and gives them a shield if they are downed.",
  },
  {
    name: "Shade",
    video: "/sneak-peeks/shade.webm",
    shots: "3 instead of 2",
    main: "Long range sniper shot.",
    ultimate:
      "Throwable ink Cloud. Enemies inside can't see you or your teammate and can't autoaim.",
    thirdAbility: "Root targets for 2s. 12s cooldown.",
  },
  {
    name: "Rush",
    video: "/sneak-peeks/rush.webm",
    shots: "3 shots",
    main: "Throws 3 fidget spinners in a fan.",
    ultimate:
      "Dash to a target. Hitting them moves you through nearby targets. Marked targets take more damage.",
    thirdAbility:
      "Dash, marking targets hit and increasing speed.",
  },
  {
    name: "Drip",
    video: "/sneak-peeks/drip.webm",
    shots: "Downable bar",
    main:
      "Graffiti Spray that paints enemies. Shoot to spray constantly and deal more damage.",
    ultimate:
      "Charge dealing damage, leaving behind a paint trail that slows enemies down.",
    thirdAbility:
      "Painted enemies explode in AOE damage. No cooldown.",
  },
];

function VideoPlayer({
  name,
  video,
}: {
  name: string;
  video: string;
}) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50">
      <video
        className="h-full w-full object-cover"
        src={video}
        title={`${name} Ability Preview`}
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function AbilityCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-lime-400/80">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/65">
        {children}
      </p>
    </div>
  );
}

export default function ThirdAbilitiesPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* BACK */}
        <Link
          href="/game/sneak-peeks"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition hover:text-lime-400"
        >
          <span>←</span>
          Back to Sneak Peeks
        </Link>

        {/* HEADER */}
        <header className="mt-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Sneak Peek
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[0.08em] sm:text-5xl">
            3RD ABILITIES
          </h1>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            Each Misfitz will now have a Main Attack, an Ultimate
            and a 3rd Ability.
          </p>
        </header>

        {/* INTRO */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <p className="max-w-4xl text-sm leading-7 text-white/65 sm:text-base">
            Each Misfitz now has a Main Attack, an Ultimate
            (Orange Button, charges with damage done), and a
            3rd Ability (Blue Button, usable off cooldown).
          </p>
        </div>

        {/* MISFIT */}
        <div className="mt-14 space-y-16">
          {misfitz.map((misfit, index) => (
            <article key={misfit.name}>
              {/* TITLE */}
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="mt-1 text-3xl font-black tracking-wide sm:text-4xl">
                    {misfit.name}
                  </h2>
                </div>
              </div>

              {/* VIDEO + SHOTS + ABILITIES */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
                {/* VIDEO + SHOTS */}
                <div className="lg:col-span-2">
                  <VideoPlayer
                    name={misfit.name}
                    video={misfit.video}
                  />

                  {/* SHOTS */}
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                        Shots:{" "} 
                          <span className="mt-2 text-white/55">
                            {misfit.shots}
                          </span>
                      </span>


                    </div>
                  </div>
                </div>

                {/* ABILITIES */}
                <div className="flex flex-col gap-4 lg:col-span-3">
                  <AbilityCard title="Main Attack">
                    {misfit.main}
                  </AbilityCard>

                  <AbilityCard title="Ultimate">
                    {misfit.ultimate}
                  </AbilityCard>

                  <AbilityCard title="3rd Ability">
                    {misfit.thirdAbility}
                  </AbilityCard>
                </div>
              </div>

              {/* DIVIDER */}
              {index < misfitz.length - 1 && (
                <div className="mt-16 h-px bg-white/10" />
              )}
            </article>
          ))}
        </div>

        {/* IMPORTANT TERMS */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <h2 className="mt-2 text-2xl font-bold text-lime-400">
            Important Terms
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-bold text-white">
                AOE
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Area of Effect. An ability that affects an area
                rather than a single target.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-bold text-white">
                Cooldown
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                The time before an ability can be used again.
              </p>
            </div>
          </div>
        </section>

        {/* MEDIA DOWNLOADS */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
            Media
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Download Media
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
            Download the individual ability previews as WebM video files.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {misfitz.map((misfit) => (
              <a
                key={misfit.name}
                href={misfit.video}
                download={`${misfit.name.toLowerCase()}-3rd-ability.webm`}
                className="flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white/60 transition hover:border-lime-400/30 hover:text-lime-400"
              >
                {misfit.name}
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
