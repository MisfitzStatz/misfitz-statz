"use client";

import { useEffect, useState } from "react";

const latestUpdate = {
  version: "v0.0.5 (5529)",
  date: "20th May 2026",
  changes: [
    "Huge Gloss nerf",
    "Improved API response speed",
    "Drip focus fire damage amplification increased from 7.5% to 12.5%",
    "Beat pulse damage reduced from 300 to 250",
    "Rush shuriken attack damage reduced from 400 to 350",
    "Downed HP reduced from 5000 to 3500",
    "Heal consumables now restore 650 HP per tick over 5 seconds",
    "Healing Effectiveness skill tree bonus reduced from 30% to 20%",
    "Base revive time increased from 7s to 10s",
    "Fixed an issue where Rush bullets were not ricocheting",
    "Basic chest opening speed increased",
    "Gear and relic pickup speed increased",
    "Robot scrap drop rate from basic enemies increased",
  ],
};
const oldUpdates = [
  {
    version: "v0.0.5 (5524)",
    date: "14th May 2026",
    changes: [
    "XP rewards are now only granted when discovering a new relic",
    "Fixed duplicate relics incorrectly granting XP rewards",
    "Drip's low health passive damaged fixed",
    "Reduced relic drop rates from regular chests and certain NPCs",
    "Fixed multiple map collider issues in the lobby",
    "Fixed tutorial map",
    ],
  },
  {
    version: "v0.0.5 (5520)",
    date: "12th May 2026",
    changes: [
      "PA5 starts now",
      "updated map layout",
      "Lobby remodel",
      "new Tutorial",
      "Docks with special interaction features",
      "updated map",
      "Updated API structure",
    ],
  },
  {
    version: "v0.0.5(5263)",
    date: "13th February 2026",
    changes: [
      "Team Up UI changes",
      "Fixed crafting screen being stuck",
      "fixed crash on extraction",
      "UI improvements",
    ],
  },
  {
    version: "v0.0.5(5253)",
    date: "11th February 2026",
    changes: [
      "Increased drop rate of robot screws from basic robots",
      "Shade now reloads ammo 30% faster for 1.5s after a successful hit",
      "Ray's vampire effect has been reduced to healing 10% of damage done",
      "Beat's skill tree spawns now a damage reduction consumable",
      "Charger Miniboss -15% damage and -15% HP",
      "Drip's basic attack has been reduced from 55 -> 50, but now it deals more damage if he hits consistently with his basic attack",
      "New players play in a smaller version of the map to get use to the basics of the game easier",
    ],
  },
  {
    version: "v0.0.5(5247)",
    date: "10th February 2026",
    changes: [
      "Fix for performance issues in rooms and construction area",
      "VFX Rush hit loop fix",
      "Minor Quest description fixes",
      "Tutorial scene changes",
      "Reduced InMenu bubble size to increase readability",
      "Updated InMenu bubble to be less contrasty",
      "Flash revive on downed",
      "Beat reduce time to spawn tornado",

    ],
  },
  {
    version: "v0.0.5(5235)",
    date: "8th February 2026",
    changes: [
      "Improved game loading times",
      "Fixed memory leaks that could cause stuttering during long play sessions",
      "Optimized lobby performance by disabling unnecessary background systems",
      "Drip - Base weapon damage increased from 45 to 55",
      "Beat - Tornado ability now has a delay of 2s instead of 0.5s",
      "Fixed epic chests sometimes spawning in wrong locations on the map",
      "Fixed a crash that could occur during the tutorial",
      "Fixed some crashes when extracting",
      "Fixed Battle Pass reward screen not displaying correctly",
      "Slow effect now has a frostier, more ice/snow-like appearance",
      "Fixed Beat's character sprite display",
      "Improved loot drop trail effects",
      "Fixed World Boss visual effects",
      "Fixed reward popup tap animations",
    ],
  },
  {
    version: "v0.0.5(2226)",
    date: "6th February 2026",
    changes: [
      "Fix for invisible players in gameplay",
      "Fixes for enemy spawning logic",
      "Improve Team Up UI positioning and sizes",
      "Fixes to adaptive performance to improve VFX performance for mid to low end devices",
      "Minor particle system fixes",
    ],
  },
  {
    version: "v0.0.5(5214)",
    date: "5th February 2026",
    changes: [
      "PA4 release",
      "New tutorial",
      "Beat is back",
      "Misfit Shadow removed from game",
      "Drip turned to a robot spreading acid",
      "polished map (re)design",
      "relic collection changes",
      "added scrap to collect to craft gears",
      "new PvE enemy models",
      "relic affinity added",
      "improvements",
      "improvements",
      "(Relic) Skill trees?",

    ],
  },
  {
    version: "v0.0.3(4150)",
    date: "17th October 2025",
    changes: [
      "Ray: Base speed up slightly, passive speed boost from 30 to 33%",
      "Gloss: Basic attack up from 600 -> 700",
      "Shade: Basic attack from 2000 -> 2200 ",
      "Drip: Special no longer stacks, slowdown effect is now 20%, max HP from 11,500 -> 10350",
      "Shadow: Super Speed Boost from 50% -> 30% (Sorry for the previously dramatic changes and thank you for the feedback!)",
    ],
  },
  {
    version: "v0.0.3(4143)",
    date: "16th October 2025",
    changes: [
      "Improved Friendship benefit descriptions with clearer and easier-to-read text",
      "Reduced damage dealt by Robot enemies",
      "Increased Shadow's base HP and improved Super movement speed boost",
      "Shade's Sniper now reloads slower but damage increased from 1800 to 2000",
      "All Heroes now receive 10% more base HP",
      "Increased Rush's Special Ability damage to 2250",
      "Increased Drip's Super slow effect",
      "Reduced overall critical hit effectiveness",
      "Added loading screen tips for new players",
      "Added core gameplay loop information to loading screens",
      "Reduced Self-Revive consumable activation time from 10s to 7s",
      "Rebalanced Rage consumable from 50% to 30% attack bonus and reduced duration from 15s to 12s",
      "Swarm Chest now relocates after being opened",
      "Fixed Gear damage bonuses not applying correctly",
      "Fixed coin count update issues",
      "Fixed players loading into matches as incorrect heroes",
      "Fixed iOS black screen loading issue",
      "Fixed Quest UI becoming stuck",
      "Fixed cases where players could remain at 0 HP"
    ],
  },
  {
    version: "v0.0.3(4127)",
    date: "12th October 2025",
    changes: [
      "Fixed unrecoverable room errors caused when Misfitz died while shooting on the same frame",
      "Limited in-game friend list size to 20 players to prevent allocation-related lag issues",
      "Removed a problematic mini-boss enemy that generated infinite errors and performance issues",
      "Removed 'Defeat Robot' quests due to progression problems",
      "Reduced Gloss's Special Ability charge rate and rebalanced its damage output",
      "Reduced Drip's Special Ability slow effect to prevent complete movement lock",
      "Buffed Shadow's attack behavior and increased effectiveness against Robot enemies",
      "Adjusted multiple Gear and Relic drop rates",
      "Reworked and increased Misfitz level-up benefits",
      "Removed Safe Pocket level-up benefit due to bug-related issues"
    ],
  },
  {
    version: "v0.0.3 (4176)",
    date: "10th October 2025",
    changes: [
      "PA3 release",
      "gatcha tickets to unlock Misfitz",
      "progression pass added",
      "quests added",
      "Flamey renamed to Drip",
      "Beat has new special ability",
      "new consumable: revive yourself when downed",
      "new point of interest (poi): bounty - survive 90s or kill a robot with bounty for big rewards",
      "enemy AI robots can dodge your shoots",
      "15 new relics",
    ],
  },
  {
    version: "v0.0.1",
    date: "23rd May 2025",
    changes: [
      "Added Social Lobby system where players load into a shared hub between matches",
      "Introduced the Relic Decoder, allowing players to decode extracted relics and view other players' rewards",
      "Added player emotes within the Social Lobby",
      "Implemented Friendship System with Friendship Points earned through gameplay activities",
      "Friendship Levels now provide increased chances of Lucky Drops containing bonus gear or relics",
      "Added ability to join friends' active matches once Friendship Level 1 is reached",
      "Closest friends are now displayed through portals in the Social Lobby",
      "Implemented Revive System with downed state, revive mechanics, and teammate support interactions",
      "Players now remain grouped together after extracting and returning to the lobby",
      "Added new playable Hero: Gloss",
      "Gloss's Main Attack now pierces enemies and heals allies",
      "Gloss's Special Ability provides AoE healing and movement speed boosts",
      "Returned Heroes available: Ray, Rush, Shade, and Schell",
      "Added Mythic Gear rarity with stronger stats and unique red glow effect",
      "Added gear recommendation arrows for both personal and teammate equipment",
      "Added Inventory Emote to display carried loot",
      "Leaderboard rankings now track total relics extracted"
    ],
  },
  {
    version: "v0.0.0",
    date: "24nd March 2025",
    changes: [
      "The FIRST pre-Alpha playtest",
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
        Version Logs & Development Updates
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
        key={update.version}
        className="rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
      >
        <button
          onClick={() =>
            setExpandedVersion(
              expandedVersion === update.version ? null : update.version
            )
          }
          className="flex w-full items-center justify-between p-7 text-left"
        >
          <div>
            <h4 className="text-2xl font-bold">
              {update.version}
            </h4>
            <p className="mt-1 text-sm text-zinc-500">
              {update.date}
            </p>
          </div>
          <span className="text-3xl font-light text-cyan-300">
            {expandedVersion === update.version ? "−" : "+"}
          </span>
        </button>
        {expandedVersion === update.version && (
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