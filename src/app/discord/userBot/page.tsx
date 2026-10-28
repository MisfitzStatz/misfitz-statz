"use client";

import Link from "next/link";
import {
  BarChart3,
  Settings,
  BadgeCheck,
  ChartSpline,
  Terminal,
} from "lucide-react";

export default function DiscordPage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white select-none">
  <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-8 text-center">
    <div className="mb-3 rounded-full border border-[#7CFF00]/10 bg-[#7CFF00]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7CFF00]">
      User Edition
    </div>

    <h1 className="whitespace-nowrap text-6xl font-black uppercase leading-none">
      PRIVATE{" "}
      <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        BOT
      </span>
    </h1>

    <p className="mt-5 max-w-3xl text-lg text-white/70">
      Install the Misfitz Statz User Bot to access additional statistics,
      tracking and account features directly from Discord.
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Get Statistics
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Account Managemant
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Player Tracking
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Private Usage
      </span>
    </div>

    <Link
      href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&integration_type=1&scope=applications.commands"
      className="mt-10 rounded-xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-7 py-3 text-base font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
    >
      Install User Bot
    </Link>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-10">
    <div className="mb-8 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-white/50">
        Features
      </p>
      <h2 className="text-4xl font-black uppercase">
        <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          Everything you need
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
        Get more from Misfitz Statz. Track your stats, view diagrams and
        manage your settings directly from Discord.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <BarChart3
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />

        <h3 className="mb-2 text-2xl font-bold">
          Statistics
        </h3>

        <p className="text-white/70">
          Access detailed player statistics directly from Discord.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <BadgeCheck
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />

        <h3 className="mb-2 text-2xl font-bold">
          Verification
        </h3>

        <p className="text-white/70">
          Securely connect Discord users with their Misfitz player
          accounts.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <ChartSpline
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />

        <h3 className="mb-2 text-2xl font-bold">
          Tracking
        </h3>

        <p className="text-white/70">
          Follow player progression with automatically updated historical
          data.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <Terminal
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />

        <h3 className="mb-2 text-2xl font-bold">
          Slash Commands
        </h3>

        <p className="text-white/70">
          Fast, responsive commands built directly into the Discord
          interface.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <Settings
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />

        <h3 className="mb-2 text-2xl font-bold">
          Settings
        </h3>

        <p className="text-white/70">
          Manage your settings completely via Discord. Account deletion is
          excluded.
        </p>
      </div>
    </div>
  </section>

  <section className="relative mx-auto max-w-5xl px-6 py-10">
    <div className="mb-8 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-white/50">
        FAQ
      </p>
      <h2 className="text-4xl font-black uppercase">
        Frequently Asked
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <p className="mt-4 text-lg text-white/70">
        Everything you should know before installing the User Bot.
      </p>
    </div>

    <div className="space-y-3">
      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Is the Bot free?
        </summary>

        <p className="mt-3 text-white/70">
          Yes, the Bot is free for everyone. Server leaderboards are not
          included because they require other server members to compete.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Why does the bot request these permissions?
        </summary>

        <p className="mt-3 text-white/70">
          The User Bot requests only the permissions required for its
          functionality.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Does the bot store messages?
        </summary>

        <p className="mt-3 text-white/70">
          No. The bot does not store messages. Interaction errors may be
          stored to help investigate and resolve problems.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Who can use the Bot?
        </summary>

        <p className="mt-3 text-white/70">
          Everyone can use the Bot as long as they are not flagged or
          suspended from Misfitz Statz.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Where can I get support?
        </summary>

        <p className="mt-3 text-white/70">
          The best way to get fast support is to join our{" "}
          <Link
            href="https://discord.gg/bb9bGA9HW4"
            className="underline hover:text-white"
          >
            Support Server
          </Link>
          .
        </p>
      </details>
    </div>
  </section>

  <section className="relative mx-auto max-w-4xl px-6 pb-12">
    <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 px-6 py-5 backdrop-blur-xl sm:flex-row sm:text-left">
      <div>
        <h2 className="mt-1 text-xl font-bold">
          Ready to get started?
        </h2>
        <p className="mt-1 text-sm text-white/60">
          Access your Misfitz Statz features directly in Discord.
        </p>

        <p className="mt-2 text-xs text-white/40">
          By installing the User Bot you agree to our{" "}
          <Link
            href="/terms"
            className="underline hover:text-white"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <Link
        href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&integration_type=1&scope=applications.commands"
        className="shrink-0 rounded-xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-6 py-3 text-sm font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
      >
        Install User Bot
      </Link>
    </div>
  </section>
</main>
);
}