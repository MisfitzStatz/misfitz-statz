"use client";

import { useEffect, useState } from "react";

const latestUpdate =   {
    version: "v1.0.0 (159)",
    date: "15th July 2026",
    changes: [
      "Moderation features to delete Scam automatically",
      "1st version open for everyone",
      "Bot now permanently online",
    ],
  }

const oldUpdates = [
    {
    version: "v0.0.0 (138)",
    date: "18th June 2026",
    changes: [
      "You can now check your stats from PA5",
    ],
  },
  {
    version: "v0.0.0 (125)",
    date: "14th June 2026",
    changes: [
    "First crashtest version",
    "/system - Check the stats of the bot",
    "/stats [playerID] - search for an Misfitz account and get stats",
    "/test - Embed section to test different versions of embeded messages",

    ],
  },
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
        Version Logs & Updates of Misfitz Statz Bot
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