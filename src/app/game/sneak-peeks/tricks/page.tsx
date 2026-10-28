import Link from "next/link";

const tricks = [
  {
    name: "Prop Disguise Trick",
    description:
      "Hide yourself as a barrel or vending machine and sneak trough the map. If you get hitted, you lose it.",
  },
  {
    name: "Teleport Beacon",
    description:
      "Drop it somewhere safe, go explore, and teleport back to it when you need to escape.",
  },
  {
    name: "Deployable Shield",
    description:
      "Spawn a temporary barrier to help you protect a zone and lock down an area.",
  },
];

export default function TricksSneakPeekPage() {
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
            TRICKS
          </h1>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            Equippable abilities that add new ways to approach a match.
          </p>
        </header>

        {/* VIDEO */}
        <section className="mt-12">
          <div className="aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/teaNLc5cDo0?rel=0"
              title="Tricks Sneak Peek"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>

        {/* WHAT ARE TRICKS */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
            What are Tricks?
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Equippable Abilities
          </h2>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-white/55 sm:text-base">
            Tricks are equippable abilities that you can loot or craft
            and add directly to your loadout. They have a limited and
            small number of uses. Once you use up all the charges, the
            Trick breaks and you lose it.
          </p>
        </section>

        {/* WHY ARE THEY ADDED */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
            Why are they added?
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            A Sandbox for New Ideas
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-white/55 sm:text-base">
            <p>
              Tricks are a natural evolution of consumables. The
              consumable system wasn't giving enough depth to create
              dynamic gameplay experiences. Standard Hero abilities
              should remain somewhat consistent and predictable.
            </p>

            <p>
              Tricks give the team a public sandbox to experiment with
              crazy new abilities without permanently locking them into
              a specific Hero's kit.
            </p>

            <p>
              They will be launching a small batch of them. Tricks may
              be used to test out mechanics for future Hero abilities.
            </p>
          </div>
        </section>

        {/* NEXT UPDATE */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
              Next Update
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Tricks in the Next Update
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {tricks.map((trick) => (
              <article
                key={trick.name}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="text-lg font-bold text-white">
                  {trick.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {trick.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CONSUMABLES LINK */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
          <p className="text-sm leading-7 text-white/50">
            Wondering what happened to consumables?
          </p>

          <Link
            href="/game/sneak-peeks/consumables"
            className="mt-3 inline-flex text-sm font-bold text-lime-400 transition hover:text-lime-300"
          >
            Read the Consumables & Revive sneak peek
          </Link>
        </section>
      </section>
    </main>
  );
}
