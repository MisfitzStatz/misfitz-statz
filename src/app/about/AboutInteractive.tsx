"use client";

import { useEffect, useState } from "react";

const videos = [
  { id: "is99Y4HDd8A", title: "Creator video 1" },
  { id: "X6ejJ8KacBU", title: "Creator video 2" },
  { id: "4YQ0PNwnCgk", title: "Creator video 3", start: 175 },
];

const history = [
  { date: "APR", title: "The idea", type: "done", body: "Players wanted a way to understand their own progress outside a match. The idea for a separate statistics platform began to take shape." },
  { date: "MAY", title: "Conversations begin", type: "done", body: "I started discussing a Game API endpoint with the Misfitz developers. The first goal was player-specific statistics, not a return of in-game leaderboards or match statistics." },
  { date: "JUN", title: "First API version", type: "done", body: "The first public version displayed a limited set of global PA5 statistics. It was an early foundation, with a small data response and a desktop-first website." },
  { date: "JUL", title: "Making it usable", type: "done", body: "The site was reworked for phones and tablets, bugs were fixed, and work began on Discord account tools." },
  { date: "SEP", title: "More data, own domain", type: "done", body: "API response v2 introduced around five times more statistics. The project also moved to misfitzstatz.com." },
  { date: "OCT", title: "A clearer platform", type: "done", body: "The website was redesigned to present more data in clearer categories. Support resources, indexing, and preparation for wider community use also moved forward." },
  { date: "NEXT", title: "More community tools", type: "next", body: "Planned areas include streamer tools, Discord bot improvements, player-focused guides, a skill-tree and balance builder, API v3 discussions, and tournament tools. Priorities may change." },
];

const roadmap = [
  { title: "Streamer tools", body: "Make it easier for creators to show player progress and use statistics in streams or videos." },
  { title: "Discord bot improvements", body: "Improve account management and expand the useful stats and community features available directly in Discord." },
  { title: "Player-focused guides", body: "Explain Misfitz systems from the perspective of an established player, with practical context instead of simply repeating patch notes." },
  { title: "Support and languages", body: "Improve the unofficial support resource and make its information more accessible to players using different languages." },
  { title: "Skill tree and balance builder", body: "Explore a tool for planning skill-tree setups and comparing possible balance changes." },
  { title: "Game API v3", body: "Discuss possible additions to the API response and which statistics would be genuinely useful to players." },
  { title: "Tournament builder", body: "Explore tools for setting up and hosting community-run tournaments." },
];

export function CreatorVideos() {
  const [selected, setSelected] = useState(videos.slice(0, 3));

  useEffect(() => {
    // Randomize after hydration to avoid a server/client HTML mismatch.
    const shuffled = [...videos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setSelected(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {selected.map((video) => (
        <article key={video.id} className="min-w-0">
          <div className="aspect-video overflow-hidden bg-[#111b2b]">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}${video.start ? `?start=${video.start}` : ""}`}
              title={video.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProjectTimeline() {
  const [selected, setSelected] = useState(0);
  const current = history[selected];

  return (
    <section aria-labelledby="history-heading" className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <h2 id="history-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">From the first idea to the next version.</h2>
        <p className="mt-4 leading-7 text-white/65">A timeline of what has been built so far and the areas being explored next.</p>
      </div>

      <div className="mt-10">
        <div className="relative">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-[2px] bg-gradient-to-r from-[#7CFF00] via-[#7CFF00] to-[#00D9FF] md:block" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 md:grid-cols-7 md:gap-3">
            {history.map((item, index) => (
              <button
                key={item.date}
                type="button"
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
                className="group relative flex min-w-0 flex-col items-start text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF] md:items-center md:text-center"
              >
                <span className={`relative z-10 mb-3 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-[#0b1220] transition-colors duration-300 ${selected === index ? "border-white" : item.type === "done" ? "border-[#7CFF00]" : "border-[#00D9FF]"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${selected === index ? "bg-white" : item.type === "done" ? "bg-[#7CFF00]" : "bg-[#00D9FF]"}`} />
                </span>
                <span className={`text-xs font-bold tracking-wider ${item.type === "done" ? "text-[#7CFF00]" : "text-[#00D9FF]"}`}>{item.date}</span>
                <span className={`mt-2 text-sm font-bold leading-5 transition-colors duration-200 ${selected === index ? "text-[#00D9FF]" : "text-white group-hover:text-[#00D9FF]"}`}>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className="mt-7 min-h-28 max-w-3xl bg-[#111b2b] p-5 sm:p-6">
          <p className={`text-xs font-bold tracking-wider ${current.type === "done" ? "text-[#7CFF00]" : "text-[#00D9FF]"}`}>{current.date}</p>
          <h3 className="mt-2 text-lg font-bold text-white">{current.title}</h3>
          <p key={current.date} className="mt-2 animate-[aboutFadeIn_220ms_ease-out] leading-7 text-white/75">{current.body}</p>
        </div>
      </div>
      <style jsx>{`@keyframes aboutFadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}

export function Roadmap() {
  return (
    <section aria-labelledby="roadmap-heading" className="py-12 sm:py-16">
      <div className="grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end">
        <div>
          <h2 id="roadmap-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">The roadmap</h2>
        </div>
        <p className="max-w-xl leading-7 text-white/65">
          Select a topic to read more. Join the{" "}
          <a
            href="https://discord.gg/bb9bGA9HW4"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00D9FF] underline decoration-[#00D9FF]/40 underline-offset-4 transition-colors hover:text-white"
          >
            community Discord
          </a>{" "}
          to discuss ideas with other players and follow what may come next.
        </p>
      </div>
      <div className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((item) => (
          <details key={item.title} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span className="font-bold text-white transition-colors duration-200 group-hover:text-[#00D9FF] group-open:text-[#00D9FF]">{item.title}</span>
              <span aria-hidden="true" className="text-xl text-white/45 transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 pr-5 text-sm leading-6 text-white/70">{item.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
