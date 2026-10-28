import Link from "next/link";

type Animation = {
  name: string;
  video: string;
  devNote: string;
  downloadName: string;
};

const animations: Animation[] = [
  {
    name: "Beat",
    video: "/sneak-peeks/beatA.webm",
    devNote: "We would love to know the song he's listening to",
    downloadName: "beat-animation.webm",
  },
  {
    name: "Ray",
    video: "/sneak-peeks/rayA.webm",
    devNote: "Ray can't avoid beeing cool, so it's just him.",
    downloadName: "ray-animation.webm",
  },
  {
    name: "Rush",
    video: "/sneak-peeks/rushA.webm",
    devNote: "Rush has been doing some Skating",
    downloadName: "rush-animation.webm",
  },
  {
    name: "Shade",
    video: "/sneak-peeks/shadeA.webm",
    devNote: "Shade Peeking from the corner",
    downloadName: "shade-animation.webm",
  },
];

function AnimationVideo({
  name,
  video,
}: {
  name: string;
  video: string;
}) {
  if (!video) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-3xl border border-white/10 bg-black/50">
        <p className="px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
          {name} Animation
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50">
      <video
        className="h-full w-full object-cover"
        src={video}
        title={`${name} Animation Preview`}
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function DownloadButton({
  animation,
}: {
  animation: Animation;
}) {
  if (!animation.video) {
    return (
      <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white/25">
        Add asset path
      </span>
    );
  }

  return (
    <a
      href={animation.video}
      download={animation.downloadName}
      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white/60 transition hover:border-lime-400/30 hover:bg-lime-400/5 hover:text-lime-400"
    >
      Download
    </a>
  );
}

export default function AnimationsSneakPeekPage() {
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
        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Sneak Peek
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[0.08em] sm:text-5xl">
            ANIMATIONS
          </h1>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            New sick animations, may used for unlocking a new Misfit.
          </p>
        </header>

        {/* ANIMATIONS */}
        <section className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {animations.map((animation) => (
              <article
                key={animation.name}
                className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6"
              >
                <AnimationVideo
                  name={animation.name}
                  video={animation.video}
                />

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-bold">
                      {animation.name}
                    </h2>

                    <DownloadButton animation={animation} />
                  </div>

                  {/* DEV NOTE */}
                  <p className="mt-4 min-h-6 text-sm italic leading-6 text-white/45">
                    {animation.devNote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
