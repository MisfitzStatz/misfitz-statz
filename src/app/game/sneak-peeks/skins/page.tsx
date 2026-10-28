import Link from "next/link";

export default function NewMisfitSneakPeekPage() {
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
            SKINS
          </h1>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            Chnagge the look and hide the real identity like Zero does
          </p>
        </header>

        {/* CLASSIFIED DATA */}
        <section className="mt-10 flex min-h-[220px] items-center justify-center rounded-3xl border border-white/10 bg-black/40 p-6 text-center backdrop-blur-md sm:p-10">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-black tracking-wide sm:text-4xl text-lime-400">
              ZERO DELETED THE FILES
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
              The available data has been compromised. Stay tuned
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
