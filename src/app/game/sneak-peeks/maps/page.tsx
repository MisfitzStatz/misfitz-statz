import Image from "next/image";
import Link from "next/link";

type MapVideo = {
  name: string;
  subtitle: string;
  videoId: string;
};

const maps: MapVideo[] = [
  {
    name: "First Map",
    subtitle: "Original map with 5 regions",
    videoId: "",
  },
  {
    name: "Sector Zero",
    subtitle: "Expanded Downtown · SPECULATION",
    videoId: "",
  },
  {
    name: "Stacks",
    subtitle: "Expanded Suburbs · SPECULATION",
    videoId: "vTyjFtcNH3I",
  },
];

function MapVideoCard({ name, subtitle, videoId }: MapVideo) {
  return (
    <article className="group">
      <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        {videoId ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={`${name} Map Preview`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
              Error while loading
            </p>
          </div>
        )}
      </div>

      <div className="mt-3">
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="mt-1 text-xs text-white/35">{subtitle}</p>
      </div>
    </article>
  );
}

function InfoItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10 py-5 last:border-b-0">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/55">{children}</p>
    </div>
  );
}

export default function MapsSneakPeekPage() {
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

        <header className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Sneak Peek
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[0.08em] sm:text-5xl">
            MAPS
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/55 sm:text-lg">
            New map designs show that the dev team moves from one large map toward smaller, 
            region based maps with unique designs
          </p>
        </header>

        {/* MAP VIDEOS */}
        <section className="mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {maps.map((map) => (
              <MapVideoCard key={map.name} {...map} />
            ))}
          </div>
        </section>

        {/* MAP DIRECTION + COMPARISON IMAGE */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8">
          <h2 className="mt-2 text-2xl font-bold text-lime-400">
            From One Large Map to Smaller Maps
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-center">
            <div className="space-y-4 text-sm leading-7 text-white/55 lg:col-span-2">
              <p>
                The original map contained 5 regions with around
                21,000 m² of playable area.
              </p>

              <p>
                Current internal tests use smaller unique maps of around
                12,000 m² each. These are expanded and revamped versions
                of the original regions.
              </p>

              <p>
                Two maps are currently in production besides and tuning:
                <span className="font-semibold text-white/75"> Stacks</span>{" "}
                and
                <span className="font-semibold text-white/75">
                  {" "}Sector Zero
                </span>
                .
              </p>

              <p className="text-white/35">
                Sneak peeks haven't proofed their real names. It's not sure if the regions got renamed or if 4 smaller maps are in production for the next playtest
              </p>
            </div>

            <div className="lg:col-span-3">
              <a
                href="/sneak-peeks/difference.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                aria-label="Open map size comparison in full size"
              >
                <div className="relative">
                  <Image
                    src="/sneak-peeks/difference.png"
                    alt="Comparison of the original map and the expanded map regions"
                    width={1536}
                    height={1024}
                    className="h-auto w-full transition duration-300"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                      Click to view full size
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/sneak-peeks/difference.png"
                download="misfitz-map-size-comparison.png"
                className="mt-3 inline-flex text-xs font-semibold text-white/40 transition hover:text-lime-400"
              >
                Download image
              </a>
            </div>
          </div>
        </section>

        {/* POI + MORE */}
        <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-lime-400">
              Points of Interest
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Points of interest will be marked with an arrow where they
              are located.
            </p>

            <div className="mt-4">
              <InfoItem title="Relic Container">
                Spawns relics when getting destroyed.
              </InfoItem>

              <InfoItem title="Package deliver">
                Transport a box from A to B to get relics.
              </InfoItem>

              <InfoItem title="Escort">
                Destroy a moving truck to get relics and gears.
              </InfoItem>

              <InfoItem title="Help a Misfit">
                Deliver the needed stash / ressources to get relics,
                gears or hunt for tricks.
                <Link
                    href="/game/sneak-peeks/tricks"
                    className="mt-3 inline-flex text-sm font-bold text-lime-400 transition hover:text-lime-300">
                    What are tricks?
                </Link>
              </InfoItem>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-lime-400">
              More Map Elements
            </h2>

            <div className="mt-4">
              <InfoItem title="Manhole Covers">
                Launching in the air, emerging fumes deal damage.
              </InfoItem>

              <InfoItem title="Jumppad">
                Jump with them on a higher floor.
              </InfoItem>

              <InfoItem title="Consumables">
                Consumables have changed a lot. {" "}
                <Link
                    href="/game/sneak-peeks/consumables"
                    className="mt-3 inline-flex text-sm font-bold text-lime-400 transition hover:text-lime-300">
                    Learn more
                </Link>
              </InfoItem>
            </div>
          </div>
        </section>

        {/* CONSUMABLES LINK */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
          <p className="text-sm leading-7 text-white/50">
           What are tricks?
          </p>

          <Link
            href="/game/sneak-peeks/tricks"
            className="mt-3 inline-flex text-sm font-bold text-lime-400 transition hover:text-lime-300"
          >
            Learn more
          </Link>
          <p className="text-sm leading-7 text-white/50">
            Changes for consumables
          </p>

          <Link
            href="/game/sneak-peeks/consumables"
            className="mt-3 inline-flex text-sm font-bold text-lime-400 transition hover:text-lime-300"
          >
            Learn more
          </Link>
        </section>
      </section>
    </main>
  );
}
