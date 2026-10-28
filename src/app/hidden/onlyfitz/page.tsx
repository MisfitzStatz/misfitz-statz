"use client";

import Link from "next/link";
import Image from "next/image";
import { Crown, Users, Images, Sparkles, Lock } from "lucide-react";
import { MISFITS } from "../../game/misfits/data/misfits";

export default function OnlyFitzPage() {
  const releasedCreators  = MISFITS.filter((misfit) => misfit.status === "released");
  const teaserCreator     = MISFITS.find((misfit) => misfit.status === "teaser");

return (
<main className="relative -mt-20 min-h-screen bg-[#0a0b12] text-white z-[9999]">
  <div className="relative mx-auto max-w-7xl px-6 py-16">
    <section className="text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        Community Parody for the real fans
      </span>

      <h1 className="mt-8 text-6xl font-black tracking-tight">
        ONLY<span className="text-blue-400">FITZ</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
        The internet's favorite platform for exclusive Misfit design concepts.
        <br />
        101% public. 0% paywalls.
      </p>
      <Link
        href="#creators"
        className="mt-10 inline-flex items-center rounded-2xl bg-blue-500 px-8 py-4 text-lg font-bold transition hover:bg-blue-400"
      >
        Browse Creators
      </Link>
    </section>

    <section className="mt-24 grid gap-6 md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <Users className="mb-4 text-blue-400" size={18} />
        <p className="text-4xl font-black">
          7
        </p>
        <p className="mt-2 text-white/60">
          Creators
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <Images className="mb-4 text-blue-400" size={18} />
        <p className="text-4xl font-black">
          143
        </p>
        <p className="mt-2 text-white/60">
          Public Concepts
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <Users className="mb-4 text-blue-400" size={18} />
        <p className="text-4xl font-black">
          46.9k
        </p>
        <p className="mt-2 text-white/60">
          Subscribers
        </p>
      </div>
      <div className="rounded-3xl border border-yellow-400/10 bg-yellow-400/10 p-6 backdrop-blur-xl">
        <Crown className="mb-4 text-yellow-400" size={18} />
        <p className="text-4xl font-black">
          FREE
        </p>
        <p className="mt-2 text-yellow-200/80">
          Premium for $99/daily
        </p>
      </div>
    </section>
    <section
      id="creators"
      className="mt-28"
    >

      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black">
            Creators
          </h2>
          <p className="mt-2 text-white/60">
            Browse every official creator profile.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {releasedCreators.map((creator) => (
        <Link
          key={creator.id}
          href={`/onlyfitz/creators/${creator.id}`}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 "
        >
          <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <Image
              src={creator.image}
              alt={creator.name}
              width={160}
              height={160}
              className="h-auto max-h-64 w-auto object-contain transition duration-300"
            />

            <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Public
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-black">
              {creator.name}
            </h3>
            <p className="mt-4 line-clamp-2 text-sm text-white/60">
              {creator.description}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-white/50">
                {Math.floor(Math.random() * 40) + 15} Concepts
              </span>
              <span className="font-bold text-blue-400 transition group-hover:translate-x-1">
                View
              </span>
            </div>
          </div>
        </Link>
      ))}
      {teaserCreator && (
        <button
          className="group overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-left backdrop-blur-xl transition"
        >
          <div className="relative flex h-80 items-center justify-center">
            <div className="flex flex-col items-center">
              <Lock
                size={120}
                className="text-yellow-400 transition"
              />

              <p className="mt-6 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase tracking-widest text-black">
                Premium Creator
              </p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black">
              {teaserCreator.name}
            </h3>
            <p className="mt-2 font-semibold text-yellow-300">
              Early Access
            </p>
            <p className="mt-4 text-sm text-white/60">
              Unlock this creator with an OnlyFitz Premium subscription.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-white/50">
                1 Exclusive Preview
              </span>
              <span className="font-bold text-yellow-300">
                Subscribe
              </span>
            </div>
          </div>
        </button>
      )}
      </div>
    </section>

    <footer className="mt-28 border-t border-white/10 pt-10 pb-6">
      <div className="flex flex-col gap-3 text-center text-sm text-white/45">
        <p>© 2026 OnlyFitz</p>
        <p>A community-made parody featuring only officially released promotional artwork.</p>
        <p>No subscriptions. No payments. Just concepts from allowed sources.</p>
      </div>
    </footer>
  </div>
</main>
);
}