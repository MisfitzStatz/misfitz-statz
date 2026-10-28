import type { Metadata } from "next";
import Image from "next/image";
import { CreatorVideos, ProjectTimeline, Roadmap } from "./AboutInteractive";

export const metadata: Metadata = {
  title: "About MisfitzStatz",
  description:
    "Learn what MisfitzStatz does, why it was created, who operates it, how the project has developed, and what community tools are planned next.",
  openGraph: {
    title: "About MisfitzStatz",
    description:
      "The independent community project for Misfitz player statistics, leaderboards, and tools.",
    url: "https://misfitzstatz.com/about/",
    siteName: "MisfitzStatz",
    type: "website",
  },
};

function PlaceholderImage({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-[#111b2b] sm:min-h-72 ${className}`}>
      <Image
        src="/relic_lost.png"
        alt={alt}
        width={420}
        height={320}
        sizes="(max-width: 768px) 100vw, 44vw"
        className="h-auto max-h-64 w-auto max-w-[85%] object-contain sm:max-h-72"
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <header className="grid items-center gap-8 py-2 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              About <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">MisfitzStatz</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              An independent statistics platform built around Misfitz and its community.
            </p>
          </div>
          <div className="flex min-h-44 items-center justify-center md:min-h-64">
            <Image
              src="/logo.png"
              alt="MisfitzStatz logo"
              width={420}
              height={240}
              priority
              sizes="(max-width: 768px) 80vw, 38vw"
              className="h-auto max-h-44 w-auto max-w-full object-contain md:max-h-64"
            />
          </div>
        </header>

<section aria-labelledby="what-heading" className="grid items-start gap-8 py-14 sm:py-20 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div>
            <h2 id="what-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">What is this, anyway?</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/75">
              <p>MisfitzStatz is an independent community project for exploring Misfitz player statistics, following leaderboards, and using tools built around the game.</p>
              <p>Some statistics are visible in the in-game player profile. The developers have confirmed that other statistics will remain exclusive to the Game API. MisfitzStatz makes those additional API statistics accessible through a dedicated website, so players can see more here than in the in-game profile.</p>
              <p>The game is about the loop: team up, loot, betray, and extract. MisfitzStatz gives players a separate place to explore their statistics without changing that in-game experience. It is independently operated, not an official Antihero Studios product, and remains free and ad-free.</p>
            </div>
          </div>
          <PlaceholderImage alt="Temporary artwork placeholder for the MisfitzStatz player statistics section" />
        </section>

<section aria-labelledby="operator-heading" className="grid items-center gap-8 py-10 sm:py-16 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div className="md:order-2">
            <h2 id="operator-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">Behind MisfitzStatz</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/75">
              <blockquote className="border-l-2 border-[#7CFF00]/70 pl-5 italic text-white/75">
                <p>“I’m Scharky, a Misfitz player since PA3. I independently run MisfitzStatz and work on the website, backend, statistics features, and Discord integration.</p>
                <p className="mt-4">I stay in contact with the developers, and together with MisfitzStatz users we discuss which Game API data and features would be useful next. Community feedback helps shape what gets improved and built.”</p>
              </blockquote>
            </div>
          </div>
          <div className="md:order-1">
            <PlaceholderImage alt="Temporary artwork placeholder for Scharky, the independent MisfitzStatz operator" />
          </div>
        </section>

<section aria-labelledby="idea-heading" className="grid items-center gap-8 py-10 sm:py-16 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div>
            <h2 id="idea-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">The idea behind the project</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/75">
              <p>During PA4, in-game leaderboards were removed after a significant backlash from established players. The developers publicly confirmed that this community backlash was a reason for the removal.</p>
              <p>In PA5, leaderboard information was mainly shared through daily updates on Discord. Players were still asking to see their own statistics, but there was no publicly available, player-focused way to browse a fuller profile, and only a limited set of stats was being tracked.</p>
              <p>MisfitzStatz began as an attempt to fill that gap. The first version introduced a limited set of global PA5 statistics. It was a starting point, not the finished platform: the API response and the website have both grown since then.</p>
              <p>Misfitz itself is built around a simple, tense loop: team up, loot, betray, and extract. MisfitzStatz sits alongside that experience, giving players a place to explore the numbers after a run without turning the game itself into a leaderboard screen.</p>
            </div>
          </div>
          <PlaceholderImage alt="Temporary artwork placeholder for the origins of MisfitzStatz" />
        </section>

<section aria-labelledby="statz-heading" className="py-8 sm:py-12">
          <h2 id="statz-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">Why “Statz” and not “Stats”?</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-white/75">“Statz” keeps the meaning of stats while giving the project a name of its own. It is a small bit of wordplay tied to Misfitz, not a different kind of statistic.</p>
        </section>

<section aria-labelledby="audience-heading" className="py-14 sm:py-20">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-14">
            <div>
              <h2 id="audience-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">For players, curious analysts, and creators.</h2>
            </div>
            <div className="space-y-4 leading-7 text-white/75">
              <p><strong className="text-white">Players</strong> can explore statistics beyond those shown in the in-game profile, including additional statistics available through the Game API.</p>
              <p><strong className="text-white">Competitive players</strong> can use leaderboards to compare records outside the game itself.</p>
              <p><strong className="text-white">Creators</strong> can use stats and rankings to add context to videos, streams, challenges, and community playtests.</p>
            </div>
          </div>

          <CreatorVideos />
        </section>

<section aria-labelledby="account-heading" className="py-5 sm:py-8">
          <div className="grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
            <div>
              <h2 id="account-heading" className="text-2xl font-bold leading-tight text-[#7CFF00] sm:text-3xl">Your account, your choice</h2>
              <p className="mt-4 leading-7 text-white/70">
                You can explore the platform, while an account connects the features that are personal to you.
                Earn MisfitzStatz achievements, manage linked player IDs, and use supported Discord features from one place.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <article>
                <h3 className="font-bold text-white">Achievements</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">Earn and display MisfitzStatz badges alongside your statistics.</p>
              </article>
              <article>
                <h3 className="font-bold text-white">Leaderboard visibility</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">Choose whether to compete under your player identity on leaderboards or appear anonymously.</p>
              </article>
              <article>
                <h3 className="font-bold text-white">Linked player IDs</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">Keep your connected player identity and community features together.</p>
              </article>
              <article>
                <h3 className="font-bold text-white">Discord integration</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">Use supported commands for linked player information and account verification.</p>
              </article>
            </div>
          </div>
        </section>

        <ProjectTimeline />

        <Roadmap />
      </div>
    </main>
  );
}
