"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SneakPeekTopic = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
};

const topics: SneakPeekTopic[] = [
  {
    title: "Maps",
    slug: "maps",
    description:
      "New maps, points of interest and other changes happen in Zero City.",
    tags: [
      "maps",
      "downtown",
      "suburbs",
      "starter map",
      "poi",
      "points of interest",
      "jumppad",
      "manhole",
      "skydiving",
    ],
  },
  {
    title: "New Misfit",
    slug: "new-misfit",
    description:
      "New Misfit and everything we know already.",
    tags: ["misfit", "new", "fang", "shadow", "characters"],
  },
  {
    title: "Skill Tree & Gears",
    slug: "skill-tree",
    description:
      "Redesigned Skill Trees with clearer upgrades, improved structure and unique gear designs.",
    tags: [
      "skill tree",
      "skills",
      "gear",
      "upgrade",
      "redesign",
      "ui",
    ],
  },
  {
    title: "Skins",
    slug: "skins",
    description:
      "New skin concepts designed to give Misfitz a fresh look while keeping their main design and story intact.",
    tags: ["skins", "skin", "weapon", "concepts", "wip", "redisgn"],
  },
  {
    title: "3rd Abilities",
    slug: "3rd-abilities",
    description:
      "Every Misfit gets additionally to it's Main Attack and Ultimate an 3rd Ability, bringing new ways to play.",
    tags: [
      "3rd ability",
      "third ability",
      "abilities",
      "ultimate",
      "ray",
      "beat",
      "gloss",
      "shade",
      "rush",
      "drip",
      "vfx",
    ],
  },
  {
    title: "Relic Road",
    slug: "relic-road",
    description:
      "Relic Road bringing a new way of progression.",
    tags: [
      "relic road",
      "relics",
      "progression",
      "ui",
      "ux",
    ],
  },
  {
    title: "Tricks",
    slug: "tricks",
    description:
      "Equippable abilities with limited uses that can be looted",
    tags: [
      "tricks",
      "trick",
      "loadout",
      "crafting",
      "loot",
      "prop disguise",
      "teleport beacon",
      "deployable shield",
    ],
  },
  {
    title: "Consumables & Revive",
    slug: "consumables",
    description:
      "Consumables have are now instant power-ups, Revive has now its own button.",
    tags: [
      "consumables",
      "power-ups",
      "revive",
      "heal",
      "healing",
      "button"
    ],
  },
  {
    title: "Animations",
    slug: "animations",
    description:
      "New animations and visual work for several Misfits, including Beat, Ray, Rush and Shade.",
    tags: [
      "animations",
      "animation",
      "vfx",
      "beat",
      "ray",
      "rush",
      "shade",
    ],
  },
];

export default function SneakPeeksPage() {
  const [search, setSearch] = useState("");

  const filteredTopics = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return topics;
    }

    return topics.filter((topic) => {
      const searchableText = [
        topic.title,
        topic.description,
        ...topic.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-black tracking-[0.16em] sm:text-4xl">
            SNEAK PEEK
          </h1>

          <p className="mt-3 max-w-xl text-sm text-white/60 sm:text-base">
            Discover what&apos;s coming to Misfitz.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <div className="relative">
            <span
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
              aria-hidden="true"
            >
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search sneak peeks..."
              aria-label="Search sneak peeks"
              className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-14 pr-12 text-sm tracking-wide text-white outline-none backdrop-blur-md transition placeholder:text-white/30 focus:border-lime-400/40 focus:bg-black/50"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-sm text-white/40 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            )}
          </div>

          {search.trim() && (
            <p className="mt-3 px-1 text-xs text-white/40">
              {filteredTopics.length}{" "}
              {filteredTopics.length === 1 ? "topic" : "topics"} found
              {" "}for &quot;{search.trim()}&quot;
            </p>
          )}
        </div>

        {/* RESULTS */}
        <div className="mt-12">
          {filteredTopics.length > 0 ? (
            <>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold tracking-wide sm:text-xl">
                  {search.trim() ? "SEARCH RESULTS" : "EXPLORE TOPICS"}
                </h2>

                <span className="text-xs uppercase tracking-wider text-white/30">
                  {filteredTopics.length} topics
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTopics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/game/sneak-peeks/${topic.slug}`}
                    className="group rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition duration-200 hover:border-lime-400/30 hover:bg-white/[0.02]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-white transition group-hover:text-lime-300">
                        {topic.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/55">
                      {topic.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-lime-400/70">
                        View topic
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-black/40 p-10 text-center backdrop-blur-md">
              <h2 className="text-xl font-bold">
                No sneak peeks found
              </h2>

              <p className="mt-3 text-sm text-white/50">
                Try searching for another topic, feature or change.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-6 rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
