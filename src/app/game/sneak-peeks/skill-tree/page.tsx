import Image from "next/image";
import Link from "next/link";

type SneakPeekImage = {
  title: string;
  description: string;
  src: string;
  downloadName: string;
};

const images: SneakPeekImage[] = [
  {
    title: "Skill Tree Redesign",
    description:
      "The new skill tree interface clearly shows the value of each upgrade and the additional boost provided by rarer gear.",
    src: "/sneak-peeks/skilltree1.webp",
    downloadName: "skill-tree-redesign.png",
  },
  {
    title: "Skill Tree Navigation",
    description:
      "Each of the three skill trees is now viewed separately by scrolling vertically instead of displaying the full tree on the UI at once.",
    src: "/sneak-peeks/skilltree2.webp",
    downloadName: "skill-tree-navigation.webp",
  },
  {
    title: "Gear Redesign",
    description:
      "Gears now have their own unique designs, including when entering a match without gears equipped.",
    src: "/sneak-peeks/craft.webp",
    downloadName: "gear-redesign.webp",
  },
];

function MediaImage({
  image,
}: {
  image: SneakPeekImage;
}) {
  if (!image.src) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-black/50">
        <p className="px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
          {image.title}
        </p>
      </div>
    );
  }

  return (
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/50"
      aria-label={`View ${image.title} in full size`}
    >
      <Image
        src={image.src}
        alt={image.title}
        width={2000}
        height={1125}
        className="h-auto w-full transition duration-300"
      />
    </a>
  );
}

function DownloadButton({
  image,
}: {
  image: SneakPeekImage;
}) {
  if (!image.src) {
    return (
      <span className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white/25">
        Add image path
      </span>
    );
  }

  return (
    <a
      href={image.src}
      download={image.downloadName}
      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white/60 transition hover:border-lime-400/30 hover:text-lime-400"
    >
      Download image
    </a>
  );
}

export default function SkillTreeAndGearRedesignPage() {
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
            SKILL TREE & 
            GEAR REDESIGN
          </h1>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            Skill trees and gears are getting a cleaner redesign with
            clearer upgrade values, separate skill tree navigation and
            unique gear designs.
          </p>
        </header>

        {/* KEY CHANGES */}
        <section className="mt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
                Skill Trees
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Clearer progression
              </h2>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-white/55">
                <li>
                  <span className="font-semibold text-white/75">
                    No more tilted:
                  </span>{" "}
                  the skill tree presentation is no longer tilted.
                </li>

                <li>
                  <span className="font-semibold text-white/75">
                    Clear upgrade values:
                  </span>{" "}
                  it is clearly displayed how much an upgrade gives you
                  and what additional boost a rarer gear provides.
                </li>

                <li>
                  <span className="font-semibold text-white/75">
                    Separate trees:
                  </span>{" "}
                  the full skill tree is no longer displayed on the UI.
                  Scroll up and down through each of the three skill
                  trees separately to view the full tree.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
                Gears
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Unique gear designs
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/55">
                Gears now have their own unique design, even when you
                go without gears into a match.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGES */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
              Media
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Redesign Preview
            </h2>
          </div>

          <div className="space-y-10">
            {images.map((image) => (
              <article key={image.title}>
                <MediaImage image={image} />

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-lg font-bold">{image.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {image.description}
                    </p>
                  </div>

                  <DownloadButton image={image} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
