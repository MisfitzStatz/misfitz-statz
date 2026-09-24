// src/app/page.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";

const features = [
  {
    title: "Game Versions",
    desc: "Explore different game versions.",
    href: "/version/game",
  },
  {
    title: "Live Statistics",
    desc: "Real-time stats",
    href: "/stats",
  },
  {
    title: "Leaderboards",
    desc: "Track top killers, relic collectors and more.",
    href: "/leaderboards/relics",
  },
  {
    title: "Sneak Peeks",
    desc: "Sneak Peeks for pre Alpha 6 are out.",
    href: "/game/sneak-peeks",
  },
  {
    title: "Discord Bot",
    desc: "Look more deeply into statsand share your stats directly on discord server ",
    href: "/discord",
  }
];

export default function Home() {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => {e.preventDefault()};
    document.addEventListener("contextmenu", disableContextMenu);
    return () => {document.removeEventListener("contextmenu", disableContextMenu)};
  }, []);

return (
<main className="relative min-h-fit overflow-hidden bg-[#0b1220] text-white select-none">
  <section className="relative mx-auto flex min-h-[48vh] md:min-h-[58vh] max-w-7xl flex-col items-center justify-center px-5 sm:px-6 text-center">
    <div className="mx-auto mt-6 mb-17 max-w-3xl rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-5 backdrop-blur-xl">
      <h2 className="text-lg font-bold text-yellow-300">
        Website under maintenance
      </h2>
    </div>
    <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

    <div className="relative z-10 max-w-5xl">
      <h1 className="mb-4 text-3xl font-black uppercase tracking-wider leading-tight sm:text-4xl md:text-6xl">
        The Ultimate
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          MISFITZ TRACKER
        </span>
      </h1>

      <p className="mx-auto mb-6 max-w-3xl text-base text-white/70 md:text-lg">
        See all balance changes, track statistics, dominate leaderboards
        and flex with your stats with other Misfitz players.
      </p>

      <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row">
        <Link
        href="/stats"
        className="w-full sm:w-auto rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold backdrop-blur-xl transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10">
          Search for Player
      </Link>
      </div>
    </div>
  </section>

  <section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
    {features.map((card) => (
      <Link
        key={card.title}
        href={card.href}
        className="group rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-xl transition duration-300 hover:border-[#7CFF00]/40 hover:bg-white/10"
      >
        <h3 className="mb-2 text-lg font-bold md:text-xl">{card.title}</h3>
        <p className="text-sm leading-relaxed text-white/65 md:text-[15px]">
          {card.desc}
        </p>
      </Link>
    ))}
  </section>
</main>
);
}