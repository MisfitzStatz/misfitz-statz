"use client";

import { useEffect, useState } from "react";

const latestUpdate = {
  version: "v0.9",
  date: "20th October 2026",
  changes: [
    "Added:  Dev-mode. Enable it in settings. Use it with caution!",
    "Rework: Copy feature for playerID",
    "Fixed:  Report player throw error 530",
    "Fixed:  leaderboard selector order"
  ],
};
const oldUpdates = [
  {
    date: "9th October 2026",
    changes: [
      "Rework: /stats and /leaderboard and hompage",
      "Added:  tapping on the logo redirects to /stats",
      "Added:  Achievements, season stats",
      "Added:  All-time and season leaderboards",
      "Added:  Share player stats with the copy button",
      "Added:  /game/misfits show balance changes and more",
      "Fixed:  Report players on /stats",
      "Fixed:  Screen rendering won't cause ratelimits",
      "Fixed:  Discord support server invite link"
    ],
  },
  {
  date: "28th August 2026",
  changes: [
    "Added: Sneak Peek page",
    "Fixed: Support Server invite",
    "Fixed: linking in Legal page",
    "Fixed: Description for installing Bot",
    ],
  },
  {
    date: "27th August 2026",
    changes: [
      "Added: WebMCP for agents to use leaderboards",
      "Added: WebMCP for agents to use playerdata",
      "Fixed: Login Informations expire",
      "Fixed: Footer for mobile",
    ],
  },
  {
    date: "19th August 2026",
    changes: [
      "Fixed: Header and Footer UI on mobile",
      "Fixed: Login Informations storage on client side",
      "Fixed: Traffic improvements",
      "Fixed: Background design on many pages",
      "Rework: Settings menu remodelled",
      "Rework: Save settings changes"
    ],
  },
  {
    date: "12th August 2026",
    changes: [
      "Added: Report feature",
      "Added: Recently searched"
    ],
  },
  {
    date: "31st July 2026",
    changes: [
      "Support for mobile devices",
      "Added: Leaderboards",
      "Added: Navigation for Mobile",
      "Fixed: Embeds",
      "Rework: Character page",
      "Rework: Stats page",
      "Rework: Header",
      "Rework: Status page",
    ],
  },
  {
    date: "19th June 2026",
    changes: [
    "Added: Stats for each Misfit",
    ],
  },
  {
    date: "14th July 2026",
    changes: [
      "Added: Pages to add the bot to a server or account",
      "Added: Page to choose which bot version is preferred",
      "Fixed: Damage stats for each Misfit is now shown"
    ],
  }
];

export default function VersionPage() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

const [expandedVersion, setExpandedVersion] = useState<string | null>(null);

return (
<main className="min-h-screen bg-[#050816] text-white">
  <section className="relative overflow-hidden border-b border-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_60%)]" />

    <div className="relative mx-auto max-w-4xl px-6 py-10">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
        Update History
      </p>
      <h2 className="max-w-3xl text-5xl font-black leading-tight md:text-5xl">
        Version Logs & Updates of Misfitz Statz Website
      </h2>
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-6 py-14">
    <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
            Latest Version
          </p>
          <h3 className="text-3xl font-black">
            {latestUpdate.version}
          </h3>
        </div>
        <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-sm text-cyan-200">
          {latestUpdate.date}
        </div>
      </div>

      <ul className="space-y-3 text-base text-zinc-200">
      {latestUpdate.changes.map((change, index) => (
        <li
          key={index}
          className="flex items-start gap-3"
        >
          <span className="mt-1 text-cyan-300">•</span>
          <span>{change}</span>
        </li>
      ))}
    </ul>
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-6 pb-20">
    <div className="mb-8 flex items-center justify-between">
      <h3 className="text-3xl font-black">
        Older Updates
      </h3>
      <div className="h-px flex-1 bg-white/10 ml-6" />
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {oldUpdates.map((update) => (
      <div
        key={update.date}
        className="rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
      >
        <button
          onClick={() =>
            setExpandedVersion(
              expandedVersion === update.date ? null : update.date
            )
          }
          className="flex w-full items-center justify-between p-7 text-left"
        >
          <div>
            <span className="text-sm text-zinc-500">
              {update.date}
            </span>
          </div>
          <span className="text-3xl font-light text-cyan-300">
            {expandedVersion === update.date ? "−" : "+"}
          </span>
        </button>

        {expandedVersion === update.date && (
          <div className="border-t border-white/10 px-7 pb-7 pt-5">
            <div className="space-y-3 text-sm text-zinc-300">
              {update.changes.map((change, index) => (
                <p key={index}>
                  • {change}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
    </div>
  </section>
</main>
);
}