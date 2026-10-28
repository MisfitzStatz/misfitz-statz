export const metadata = {
  title: "Legal Notice | MisfitzStatz",
  description:
    "Legal information about MisfitzStatz, its independent operation, intellectual property, and contact details.",
};

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function LegalSection({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

export default function LegalPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Legal Notice</h1>
        <p className="text-sm text-zinc-500">Last updated: 27 October 2026</p>
        <p className="mt-6 max-w-3xl text-zinc-300">
          Information about the MisfitzStatz project, its relationship with
          Antihero Studios, intellectual property, and contact details.
        </p>
      </header>

      {/* Keep these existing operator/contact details unchanged. */}
      <div className="mb-12 rounded-xl border border-zinc-700 bg-zinc-900/40 p-8">
        <h2 className="mb-6 text-3xl font-bold">Website Operator</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-400">Project</p>
            <p className="font-medium text-[#7CFF00]">MisfitzStatz</p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Operator</p>
            <p className="font-medium text-[#7CFF00]">Scharky the Shark</p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Country</p>
            <p className="font-medium text-[#7CFF00]">Germany</p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Email</p>
            <a
              href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Inquiry"
              className="font-medium text-[#7CFF00]"
            >
              scharky.the.shark.official@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Discord</p>
            <a
              href="https://discord.com/users/1280882903567568922"
              className="font-medium text-[#7CFF00]"
            >
              @scharky_the_shark_official
            </a>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Official MisfitzStatz Discord Server</p>
            <a href="https://discord.gg/bb9bGA9HW4" className="font-medium text-[#7CFF00]">
              https://discord.gg/bb9bGA9HW4
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside className="relative h-fit self-start lg:sticky lg:top-28">
          <div className="border-l border-zinc-800 pl-4 sm:pl-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:mb-8">Contents</p>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#project" className="hover:text-white">1. Project and service</a>
              <a href="#api" className="hover:text-white">2. Game API and access</a>
              <a href="#independence" className="hover:text-white">3. Independence</a>
              <a href="#responsibility" className="hover:text-white">4. Content and accuracy</a>
              <a href="#third-parties" className="hover:text-white">5. Third-party services</a>
              <a href="#intellectual-property" className="hover:text-white">6. Intellectual property</a>
              <a href="#requests" className="hover:text-white">7. Legal and removal requests</a>
            </nav>
          </div>
        </aside>

        <div className="space-y-12 sm:space-y-16">
          <LegalSection id="project" title="1. Project and service">
            <h3 className="text-lg font-semibold">1a) Purpose</h3>
            <p>
              MisfitzStatz is an independently operated, free and ad-free community
              statistics and leaderboard platform for the game Misfitz. Public
              statistics and leaderboards can be browsed without an account;
              certain features require a MisfitzStatz account.
            </p>
            <h3 className="text-lg font-semibold">1b) Operator</h3>
            <p>
              The project is operated by the person identified in the contact
              details above. MisfitzStatz is not the owner or developer of the
              Misfitz game.
            </p>
          </LegalSection>

          <LegalSection id="api" title="2. Game API and access">
            <h3 className="text-lg font-semibold">2a) Misfitz Game API</h3>
            <p>
              MisfitzStatz uses access to the non-public Misfitz Game API to
              retrieve available game statistics by Player ID. The API cannot be
              used by MisfitzStatz to search for players by in-game name.
            </p>
            <h3 className="text-lg font-semibold">2b) MisfitzStatz API</h3>
            <p>
              The MisfitzStatz API is separate from the game API. Website access
              or viewing public statistics does not grant permission to use the
              MisfitzStatz API, systematically extract its data, or reproduce
              the service. API access requires prior explicit permission from
              the operator.
            </p>
          </LegalSection>

          <LegalSection id="independence" title="3. Independence from Antihero Studios">
            <h3 className="text-lg font-semibold">3a) No official affiliation</h3>
            <p>
              MisfitzStatz is not owned or operated by Antihero Studios, is not
              an official service of the studio, and is not represented as being
              endorsed by it. The studio independently develops Misfitz and
              controls its own game-related services and rules.
            </p>
            <h3 className="text-lg font-semibold">3b) Community support site and account links</h3>
            <p>
              The support site at support.misfitzstatz.com is an unofficial
              community support site operated separately from Antihero Studios.
              A Discord-to-Player-ID association created through MisfitzStatz is
              managed by MisfitzStatz. Antihero Studios does not receive that
              association through MisfitzStatz and operates its own separate
              linking system.
            </p>
          </LegalSection>

          <LegalSection id="responsibility" title="4. Content and accuracy">
            <h3 className="text-lg font-semibold">4a) Data accuracy</h3>
            <p>
              Statistics, rankings, player information, and historical records
              may be incomplete, delayed, or inaccurate. MisfitzStatz does not
              control the underlying game data and cannot directly alter the
              game's source records.
            </p>
            <h3 className="text-lg font-semibold">4b) Service changes</h3>
            <p>
              Features and displayed information may change as the game API,
              infrastructure, or service develops. Applicable use conditions are
              described in the <a href="/terms" className="text-[#7CFF00] underline">Terms of Service</a>.
            </p>
          </LegalSection>

          <LegalSection id="third-parties" title="5. Third-party services">
            <p>
              MisfitzStatz relies on services including Cloudflare, Amazon Web
              Services (AWS), Discord, and the Misfitz Game API. They provide
              infrastructure, security and delivery, authentication, or game
              data as applicable. Their own terms and privacy notices govern
              processing they carry out independently. Details about personal
              data processing by MisfitzStatz and relevant providers are set out
              in the <a href="/privacy" className="text-[#7CFF00] underline">Privacy Policy</a>.
            </p>
          </LegalSection>

          <LegalSection id="intellectual-property" title="6. Intellectual property">
            <h3 className="text-lg font-semibold">6a) Game-related rights</h3>
            <p>
              Misfitz, the game, its name, game assets, artwork, and related
              intellectual property belong to their respective rights holders.
              Their appearance on MisfitzStatz does not imply ownership by the
              operator or official affiliation with the game developer.
            </p>
            <h3 className="text-lg font-semibold">6b) MisfitzStatz materials</h3>
            <p>
              Original MisfitzStatz software, text, branding, and website
              elements may be protected by applicable law. No exclusive right is
              claimed over the general idea of a statistics or leaderboard
              platform.
            </p>
          </LegalSection>

          <LegalSection id="requests" title="7. Legal and removal requests">
            <h3 className="text-lg font-semibold">7a) Contact and review</h3>
            <p>
              Copyright, intellectual property, privacy, data deletion, and
              historical leaderboard removal requests may be submitted by email
              or through the official MisfitzStatz Discord server. Requests are
              reviewed individually. Additional information or proof of
              ownership may be requested where reasonably necessary.
            </p>
            <h3 className="text-lg font-semibold">7b) Historical records</h3>
            <p>
              Archived leaderboards are retained indefinitely and include only
              profiles that were public at the time of archiving. Account
              deletion does not automatically remove a Player ID from archived
              records. A separate removal request is required; older archived
              records may not be editable through the normal service workflow.
            </p>
            <p>
              Email: <a href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Removal%20Request" className="text-[#7CFF00] underline">scharky.the.shark.official@gmail.com</a>
            </p>
          </LegalSection>
        </div>
      </div>
    </main>
  );
}
