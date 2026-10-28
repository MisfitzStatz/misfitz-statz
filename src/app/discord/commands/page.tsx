import Link from "next/link";

const commands = [
  {
    command: "/stats",
    description: [
      "Search a player by ID",
      "Get stats from a Discord user",
    ],
  },
  {
    command: "/verify",
    description: [
      "Start the verification process directly from Discord",
    ],
  },
  {
    command: "/report",
    description: [
      "Report an inappropriate in-game name",
    ],
  },
  {
    command: "/graph",
    description: [
      "Display your last 2 weeks of stats as a graph",
      "Requires active tracking",
    ],
  },
  {
    command: "/leaderboards",
    description: [
      "Open the leaderboard menu",
      "Choose a leaderboard to display",
    ],
  },
  {
    command: "/me",
    description: [
      "List all verified Player IDs",
      "Copy-paste ready output",
    ],
  },
  {
    command: "/help",
    description: [
      "Solve common issues",
      "Information about the bot",
      "Support Server invite",
      "Website links",
    ],
  },
  {
    command: "/settings",
    description: [
      "List all verified accounts",
      "Change privacy settings",
      "Remove linked accounts",
      "Keeps your data private at all times",
    ],
  },
  {
    command: "/system",
    description: [
      "Bot and website information",
      "Uptime and latency",
    ],
  },
];

export default function DiscordCommandsPage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
  <section className="relative mx-auto max-w-7xl px-6 pt-10 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
      Discord Commands
    </div>

    <h1 className="mb-6 text-6xl font-black uppercase">
      WHAT THE BOT
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        OFFERS
      </span>
    </h1>

    <p className="mx-auto max-w-3xl text-lg text-white/70">
      Explore player statistics, collections, leaderboards, tracking and
      account management directly from Discord.
    </p>

    <p className="mt-5 text-xl font-semibold bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
      Unlock the full power of Misfitz Statz.
    </p>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {commands.map((item) => (
        <div
          key={item.command}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
        >
          <h2 className="mb-4 text-2xl font-bold text-[#7CFF00]">
            {item.command}
          </h2>

          <ul className="space-y-2 text-white/75">
            {item.description.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>

  <section className="relative mx-auto max-w-4xl px-6 pb-10">
    <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-center backdrop-blur-xl sm:flex-row sm:text-left">
      <div>
        <h2 className="text-2xl font-bold">
          Ready to use the bot?
        </h2>
        <p className="mt-1 text-sm text-white/60">
          Choose the bot version that fits your needs.
        </p>
      </div>

      <Link
        href="/discord/choose"
        className="shrink-0 rounded-xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-6 py-3 font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
      >
        Choose a Bot
      </Link>
    </div>
  </section>
</main>
);
}