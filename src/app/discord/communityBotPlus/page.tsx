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
  <section className="relative mx-auto flex max-w-7xl flex-col items-center px-60 pt-8 text-center">
    <div className="mb-3 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#FFE082]">
      Community Edition Extended
    </div>

    <h1 className="whitespace-nowrap text-6xl font-black uppercase leading-none pt-5">
      COMMUNITY{" "}
      <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        BOT
      </span>{" "}
      <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#C9A227] bg-clip-text text-transparent">
        PLUS
      </span>
    </h1>

    <p className="mt-5 max-w-3xl text-lg text-white/70">
      Install the Misfitz Statz Community Bot{" "}
      <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#C9A227] bg-clip-text text-transparent">
        Plus
      </span>{" "}
      to unlock server leaderboards, player verification, advanced
      community statistics and additional security features.
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
        Includes Community Bot
      </span>
      <span className="rounded-full border border-[#C9A227]/40 bg-[#3B3112] px-4 py-2 text-sm font-medium text-[#FFE082]">
        Scam Filter
      </span>
      <span className="rounded-full border border-[#C9A227]/40 bg-[#3B3112] px-4 py-2 text-sm font-medium text-[#FFE082]">
        Default AutoMod
      </span>
      <span className="rounded-full border border-[#C9A227]/40 bg-[#3B3112] px-4 py-2 text-sm font-medium text-[#FFE082]">
        Custom AutoMod
      </span>
      <span className="rounded-full border border-[#C9A227]/40 bg-[#3B3112] px-4 py-2 text-sm font-medium text-[#FFE082]">
        Invite Protection
      </span>
    </div>

    <div className="mt-6 flex flex-wrap justify-center gap-3 pt-10">
      <Link
        href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&permissions=5630601193704482&integration_type=0&scope=bot+applications.commands"
        className="rounded-xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-14 py-4 text-sm font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
      >
        Install
      </Link>

      <Link
        href="/discord/instructions"
        className="rounded-xl border border-white/10 bg-white/5 px-14 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
      >
        Instructions (Soon)
      </Link>

      <Link
        href="/discord/upgrade"
        className="rounded-xl border border-[#C9A227]/40 bg-[#C9A227]/10 px-14 py-4 text-sm font-semibold text-[#FFE082] transition hover:bg-[#C9A227]/20"
      >
        Upgrade (Soon)
      </Link>
    </div>

    <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-10 py-6 font-semibold text-yellow-200">
      Moderation features are currently in development.
    </div>
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
        The Community Bot Plus requests only the permissions needed for
        statistics, security and moderation-related features.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
          Manage Server
        </h3>

        <p className="text-white/70">
          Allows the bot to remove malicious invites created by
          compromised or malicious accounts when invite protection is
          enabled.
        </p>
      </div>

      <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
          Moderate Members
        </h3>

        <p className="text-white/70">
          Allows the bot to temporarily timeout members when automated
          moderation detects spam or other configured violations.
        </p>
      </div>

      <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
          Kick Members
        </h3>

        <p className="text-white/70">
          Allows the bot to remove accounts identified as potential scam
          or malicious bots before they can cause further problems.
        </p>
      </div>

      <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
          Manage Messages
        </h3>

        <p className="text-white/70">
          Allows the bot to remove messages that match configured
          moderation or security rules.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Send Messages
        </h3>

        <p className="text-white/70">
          Allows the bot to send responses to slash commands and other
          interactions.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Bypass Slowmode
        </h3>

        <p className="text-white/70">
          Allows bot responses to work normally even when a channel has
          slowmode enabled, keeping interactions responsive.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Embed Links
        </h3>

        <p className="text-white/70">
          Allows the bot to display statistics, leaderboards and other
          information using rich Discord embeds.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          View Channels
        </h3>

        <p className="text-white/70">
          Allows the bot to access channels where it has permission to
          operate and respond to commands.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Read Message History
        </h3>

        <p className="text-white/70">
          Allows the bot to read relevant message history when needed for
          moderation and interaction processing.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Use Slash Commands
        </h3>

        <p className="text-white/70">
          Allows users to interact with the bot through slash commands and
          request statistics directly from Discord.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Attach Files
        </h3>

        <p className="text-white/70">
          Allows commands to send generated files such as statistic graphs
          and diagrams.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="mb-3 text-xl font-semibold">
          Use External Emojis
        </h3>

        <p className="text-white/70">
          Allows the bot to use custom emojis when displaying statistics
          and other interactions.
        </p>
      </div>
    </div>

    <div className="mt-6 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-6 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-bold text-[#7CFF00]">
        Security First
      </h3>

      <p className="text-white/70">
        Misfitz Statz only requests permissions required for its
        functionality. We strongly recommend never granting bots
        administrator permissions..
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
        Powerful tools designed for communities that want statistics,
        security and advanced server features in one bot.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <BarChart3
          size={38}
          strokeWidth={2}
          className="mb-5 text-white"
        />

        <h3 className="mb-3 text-2xl font-bold">
          Statistics
        </h3>

        <p className="text-white/70">
          Access detailed player statistics directly from your Discord
          server.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <Trophy
          size={38}
          strokeWidth={2}
          className="mb-5 text-white"
        />

        <h3 className="mb-3 text-2xl font-bold">
          Leaderboards
        </h3>

        <p className="text-white/70">
          Compare members with server-exclusive rankings and seasonal
          competition.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <BadgeCheck
          size={38}
          strokeWidth={2}
          className="mb-5 text-white"
        />

        <h3 className="mb-3 text-2xl font-bold">
          Verification
        </h3>

        <p className="text-white/70">
          Securely connect Discord users with their Misfitz player
          accounts.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <ChartSpline
          size={38}
          strokeWidth={2}
          className="mb-5 text-white"
        />

        <h3 className="mb-3 text-2xl font-bold">
          Tracking
        </h3>

        <p className="text-white/70">
          Follow player progression with automatically updated historical
          data.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <Terminal
          size={38}
          strokeWidth={2}
          className="mb-5 text-white"
        />

        <h3 className="mb-3 text-2xl font-bold">
          Slash Commands
        </h3>

        <p className="text-white/70">
          Fast, responsive commands built directly into the Discord
          interface.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.07]">
        <Users
          size={38}
          strokeWidth={2}
          className="mb-5 text-white"
        />

        <h3 className="mb-3 text-2xl font-bold">
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
        Everything you should know before installing the Community Bot Plus.
      </p>
    </div>

    <div className="space-y-3">
      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Is the Community Bot Plus free?
        </summary>

        <p className="mt-4 text-white/70">
          The Community Bot Plus is the extended version of the Community
          Bot and includes additional security and moderation-related
          features.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Why does the bot request these permissions?
        </summary>

        <p className="mt-4 text-white/70">
          Each permission has a specific purpose. The permissions are used
          for features such as responding to commands, displaying
          statistics, removing malicious messages and providing security
          features.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Does the bot need "Manage Server" permission?
        </summary>

        <p className="mt-4 text-white/70">
          Manage Server is required for the invite protection system to
          remove malicious invites created by compromised accounts. If you
          do not want to use this functionality, invite protection can be
          disabled.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Does the bot use AI for moderation?
        </summary>

        <p className="mt-4 text-white/70">
          No. Server messages are not sent to an AI for moderation.
          Moderation checks are performed internally using configured
          rules, blacklisted words and phrases.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Does the bot replace real moderators?
        </summary>

        <p className="mt-4 text-white/70">
          No. The security system is designed to detect common scam and
          phishing patterns. It is not intended to replace human
          moderation.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Will the bot contain moderation commands?
        </summary>

        <p className="mt-4 text-white/70">
          Misfitz Statz will keep its primary focus on the game. The
          moderation system may receive additional AutoMod customization,
          but it is not intended to become a full moderation bot.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Does the bot store messages?
        </summary>

        <p className="mt-4 text-white/70">
          No. The bot does not store server messages. Interaction errors
          may be stored to help investigate technical problems.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Who can use the Community Bot Plus?
        </summary>

        <p className="mt-4 text-white/70">
          Everyone can use the Community Bot Plus as long as their account
          is not flagged or suspended from Misfitz Statz.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Can I remove the bot later?
        </summary>

        <p className="mt-4 text-white/70">
          Yes. You can remove the bot from your server at any time.
          Removing the bot does not automatically delete previously
          collected server data. Contact us if you want server data
          removed.
        </p>
      </details>

      <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <summary className="cursor-pointer list-none text-lg font-semibold">
          Where can I get support?
        </summary>

        <p className="mt-4 text-white/70">
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

  <section className="relative mx-auto max-w-4xl px-6 pb-10 pt-2">
    <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#C9A227]/25 bg-[#C9A227]/5 px-6 py-5 backdrop-blur-xl sm:flex-row sm:text-left">
      <div>
        <h2 className="mt-1 text-xl font-bold">
          Ready to upgrade your server?
        </h2>
        <p className="mt-1 text-sm text-white/60">
          Add the extended Misfitz Statz features to your Discord server.
        </p>

        <p className="mt-2 text-xs text-white/40">
          By installing the Community Bot Plus you agree to our{" "}
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
        href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&permissions=5630601193704482&integration_type=0&scope=bot+applications.commands"
        className="shrink-0 rounded-xl border border-[#C9A227]/40 bg-[#C9A227]/10 px-6 py-3 text-sm font-semibold text-[#FFE082] transition hover:bg-[#C9A227]/20"
      >
        Install Plus
      </Link>
    </div>
  </section>
</main>
);
}