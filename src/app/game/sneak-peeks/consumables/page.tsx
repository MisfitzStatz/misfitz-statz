import Image from "next/image";
import Link from "next/link";

type MediaItem = {
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
  downloadName: string;
};

const media: MediaItem[] = [
  {
    title: "Consumables",
    description:
      "Consumables now act as instant power-ups and apply their effects immediately when picked up.Revive now has its own system, with one revive available from the start of every match.",
    type: "image",
    src: "/sneak-peeks/button_change.webp",
    downloadName: "consumables.webm",
  }
];

function MediaPreview({ item }: { item: MediaItem }) {
  if (!item.src) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-black/50">
        <p className="px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
          {item.title}
        </p>
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <video
          className="h-full w-full object-cover"
          src={item.src}
          title={item.title}
          controls
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <a
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/50"
      aria-label={`View ${item.title} in full size`}
    >
      <Image
        src={item.src}
        alt={item.title}
        width={1536}
        height={1024}
        className="h-auto w-full transition duration-300 group-hover:scale-[1.01]"
      />
    </a>
  );
}

function DownloadButton({ item }: { item: MediaItem }) {
  if (!item.src) {
    return (
      <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white/25">
        Add asset path
      </span>
    );
  }

  return (
    <a
      href={item.src}
      download={item.downloadName}
      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white/60 transition hover:border-lime-400/30 hover:bg-lime-400/5 hover:text-lime-400"
    >
      Download
    </a>
  );
}

export default function ConsumablesAndRevivePage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/game/sneak-peeks"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition hover:text-lime-400"
        >
          <span>←</span>
          Back to Sneak Peeks
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Sneak Peek
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[0.08em] sm:text-5xl">
            CONSUMABLES AND REVIVE
          </h1>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            Consumables evolved into instant power-ups, while Revive now
            has its own dedicated system.
          </p>
        </header>

        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
            <h2 className="mt-2 text-2xl font-bold text-lime-400">
              Instant Power-ups
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Consumables now apply their effects immediately upon pickup.
            </p>

            <div className="mt-5 border-t border-white/10 pt-5">
              <h3 className="text-sm font-bold text-lime-400">Heal</h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Heal is wasted if you are already at 100%. It is still
                applied to teammates that are in range as before.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
            <h2 className="mt-2 text-2xl font-bold text-lime-400">
              Revive - A Separate System
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Revive now has its own system. You always have one revive
              when you spawn.
            </p>

            <div className="mt-5 border-t border-white/10 pt-5">
              <h3 className="text-sm font-bold text-lime-400">
                Additional Revives
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Revives can still be found on maps and can spawn when
                you kill a player.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <h2 className="mt-2 text-2xl font-bold text-lime-400">
            Why This Change
          </h2>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-white/55 sm:text-base">
            Many players kept Revive above everything else as a
            safeguard for players and to give them a second chance.
          </p>
        </section>

        <section className="mt-16">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {media.map((item) => (
              <article key={item.title}>
                <MediaPreview item={item} />

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {item.description}
                    </p>
                  </div>

                  <DownloadButton item={item} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
