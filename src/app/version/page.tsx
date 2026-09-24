"use client";

import Link from "next/link";

const resources = [
  {
    title: "Antihero Studios",
    desc: "Changes around the studio.",
    href: "/version/antiherostudios",
  },
  {
    title: "Game",
    desc: "Explore the version history of Misfitz.",
    href: "/version/game",
  },
  {
    title: "Discord Bot",
    desc: "Discord Bot changes.",
    href: "/version/discord",
  },
  {
    title: "Misfitz Statz Website",
    desc: "Changes of the stats tracker",
    href: "/version/website",
  },
];

export default function DiscordPage() {
return (
<main className="relative flex min-h-full flex-col bg-[#0b1220] text-white select-none">
  <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-[4vh] pb-[2vh] text-center">
    <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7CFF00]/10 blur-3xl" />
    <div className="relative z-10 max-w-5xl">
      <h1 className="mb-4 text-4xl font-black uppercase tracking-wider md:text-7xl">
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          Version Tracker
        </span>
      </h1>

      <p className="mx-auto mb-4 max-w-3xl text-sm text-white/70 md:text-lg">
        Misfitz Statz is more then you think. Read the version history of the website, bot, game and Antihero Studios
      </p>
    </div>
  </section>

  <section className="relative mx-auto grid max-w-7xl gap-4 px-6 pb-[4vh] md:grid-cols-2 xl:grid-cols-4">
    {resources.map((card) => (
      <Link
        key={card.title}
        href={card.href}
        className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#7CFF00]/40 hover:bg-white/10"
      >
        <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
        <p className="text-[15px] leading-relaxed text-white/65">
          {card.desc}
        </p>
      </Link>
    ))}
  </section>

  <section className="relative mx-auto max-w-3xl px-3 pt-[6vh] pb-[6vh]">
    <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 text-center backdrop-blur-xl">
      <div className="mb-2 text-3xl"></div>
      <h2 className="mb-3 text-2xl font-bold">
        Be always up to date
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-white/70">
        The latest changes always on the Discord server
      </p>
      <Link
        href="https://discord.gg/bb9bGA9HW4"
        className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur-xl transition hover:border-[#7CFF00] hover:bg-[#7CFF00]/10"
      >
        Join Support Server
      </Link>
    </div>
  </section>
</main>
);
}
