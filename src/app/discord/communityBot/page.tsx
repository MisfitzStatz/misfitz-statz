"use client";

import Link from "next/link";
import {
  BarChart3,
  Trophy,
  BadgeCheck,
  ChartSpline,
  Terminal,
  Users,
} from "lucide-react";

export default function DiscordPage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white select-none">
  <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-8 text-center">
    <div className="mb-3 rounded-full border border-[#7CFF00]/10 bg-[#7CFF00]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7CFF00]">
      Community Edition
    </div>

    <h1 className="whitespace-nowrap text-6xl font-black uppercase leading-none pt-5">
      COMMUNITY{" "}
      <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        BOT
      </span>
    </h1>

    <p className="mt-5 max-w-3xl text-lg text-white/70">
      Install the Misfitz Statz Community Bot to bring player statistics,
      verification and community features directly to your Discord server.
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Share Statistics
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Account Management
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Server Leaderboards
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Player Tracking
      </span>
    </div>

    <Link
      href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&permissions=4503601775234048&integration_type=0&scope=bot+applications.commands"
      className="mt-6 rounded-xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-7 py-3 text-base font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
    >
      Install Community Bot
    </Link>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-30">
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-white/50">
        Permissions
      </p>
      <h2 className="text-4xl font-black uppercase">
        Why are these permissions
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          Required?
        </span>
      </h2>

      <p className="mt-4 text-lg text-white/70">
        The Community Bot only requests the permissions it needs to
        respond to commands, display statistics and provide its community
        features.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Send Messages
        </h3>
        <p className="text-white/70">
          Allows the bot to send responses to commands and other
          interactions.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Bypass Slowmode
        </h3>
        <p className="text-white/70">
          Allows the bot to respond normally even when a channel has
          slowmode enabled, so bot interactions are not delayed.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Embed Links
        </h3>
        <p className="text-white/70">
          Allows the bot to display statistics, leaderboards and other
          information in rich Discord embeds.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          View Channels
        </h3>
        <p className="text-white/70">
          Allows the bot to access channels where it has been given
          permission to operate and respond to commands.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Read Message History
        </h3>
        <p className="text-white/70">
          Allows the bot to access relevant previous messages when needed
          to process interactions correctly.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Use Slash Commands
        </h3>
        <p className="text-white/70">
          Allows the bot to provide its commands and return requested
          statistics directly inside your server.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Attach Files
        </h3>
        <p className="text-white/70">
          Allows commands to send generated files, such as statistic
          graphs and diagrams.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-xl font-semibold">
          Use External Emojis
        </h3>
        <p className="text-white/70">
          Allows the bot to use its custom emojis when displaying
          statistics and other interactions.
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-6 backdrop-blur-xl">
      <h3 className="mb-2 text-2xl font-bold text-[#7CFF00]">
        Security First
      </h3>

      <p className="text-white/70">
        Misfitz Statz only requests permissions required for the bot to
        function. We recommend never granting bots administrator
        permissions.
      </p>
    </div>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-10">
    <div className="mb-8 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-white/50">
        Features
      </p>
      <h2 className="text-4xl font-black uppercase">
        Everything your
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          Community Needs
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
        Powerful tools designed for communities that want to track player
        progress, verify members and compete through integrated statistics.
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
          Access detailed player statistics directly from your Discord
          server.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <Trophy
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />

        <h3 className="mb-2 text-2xl font-bold">
          Leaderboards
        </h3>
        <p className="text-white/70">
          Compare members with server-exclusive rankings and seasonal
          competition.
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
        <Users
          size={36}
          strokeWidth={2}
          className="mb-4 text-white"
        />
        <h3 className="mb-2 text-2xl font-bold">
          Community Ready
        </h3>

        <p className="text-white/70">
          Designed for gaming communities of every size, from small groups
          to large public servers.
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
        Everything you should know before installing the Community Bot.
      </p>
    </div>

    <div className="space-y-3">
      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Is the Community Bot free?
        </summary>

        <p className="mt-3 text-white/70">
          Yes, the Community Bot is free for everyone. Server moderation
          features are not included in this version.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Why does the bot request these permissions?
        </summary>

        <p className="mt-3 text-white/70">
          Each requested permission is used for a specific bot function,
          such as responding to commands, displaying statistics or sending
          generated graphs. We recommend reviewing the permissions before
          installing any Discord bot.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Does the bot store messages?
        </summary>

        <p className="mt-3 text-white/70">
          No, the bot does not store server messages. Interaction errors
          may be stored so that technical problems can be investigated and
          resolved.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Who can use the Community Bot?
        </summary>

        <p className="mt-3 text-white/70">
          Everyone can use the Community Bot as long as their account is
          not flagged or suspended from Misfitz Statz.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Can I remove the bot later?
        </summary>

        <p className="mt-3 text-white/70">
          Yes. You can remove the bot from your server at any time.
          Removing the bot does not automatically delete previously
          collected server data. Contact us if you want server data
          removed.
        </p>
      </details>

      <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Where can I get support?
        </summary>

        <p className="mt-3 text-white/70">
          The fastest way to get support is to join our{" "}
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
          Add the Community Bot to your Discord server.
        </p>

        <p className="mt-2 text-xs text-white/40">
          By installing the Community Bot you agree to our{" "}
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
        href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&permissions=4503601775234048&integration_type=0&scope=bot+applications.commands"
        className="shrink-0 rounded-xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-6 py-3 text-sm font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
      >
        Install Community Bot
      </Link>
    </div>
  </section>
</main>
);
}