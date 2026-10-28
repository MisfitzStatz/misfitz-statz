"use client";
import Link from "next/link";

const resources = [
  {
    title: "Commands",
    desc: "View available Discord commands",
    href: "/discord/commands",
  },
  {
    title: "Update Log",
    desc: "New features and changes",
    href: "/version/discord",
  },
  {
    title: "Compare",
    desc: "Compare the bot with the website",
    href: "/discord/compare",
  },
  {
    title: "Support",
    desc: "Get help for Misfitz Statz Bot",
    href: "https://discord.gg/bb9bGA9HW4",
  },
  {
    title: "Privacy Policy",
    desc: "Learn how your data is handled",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    desc: "Read the Discord Bot terms",
    href: "/terms",
  },
  {
    title: "Errors",
    desc: "Error Documentation for the bot",
    href: "/discord/errorcodes",
  },
  {
    title: "Status",
    desc: "Check if the bot is online",
    href: "/status",
  },
];

export default function DiscordPage() {
return (
<main className="relative min-h-fit overflow-hidden bg-[#0b1220] text-white select-none">
  <section className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
    <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7CFF00]/10 blur-3xl" />
    <div className="relative z-10 max-w-5xl">
      <h1 className="mb-4 text-4xl font-black uppercase tracking-wider md:text-6xl">
        The Ultimate
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          MISFITZ DISCORD BOT
        </span>
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-sm text-white/70 md:text-lg">
        Explore the full power of Misfitz Statz directly inside Discord.
        Access player statistics, leaderboards, collections, tracking and
        account management with a single command.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/discord/choose"
          className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-xl transition hover:border-[#7CFF00] hover:bg-[#7CFF00]/10"
        >
          Discover the bot for your need
        </Link>
      </div>
    </div>
  </section>

  <section className="relative mx-auto grid max-w-6xl gap-4  pb-8 md:grid-cols-2 xl:grid-cols-4">
    {resources.map((card) => (
      <Link
        key={card.title}
        href={card.href}
        className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-[#7CFF00]/40 hover:bg-white/10"
      >
        <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
        <p className="text-[15px] leading-relaxed text-white/65">
          {card.desc}
        </p>
      </Link>
    ))}
  </section>
</main>
);
}