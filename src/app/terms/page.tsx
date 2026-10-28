export const metadata = {
  title: "Terms of Service | MisfitzStatz",
  description: "Terms governing use of the free MisfitzStatz statistics service.",
};

type SectionProps = { id: string; title: string; children: React.ReactNode };

function TermsSection({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-5 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
      <header className="mb-14">
        <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
        <p className="text-sm text-zinc-500">Last updated: 28 October 2026 - Valid from: 16th November 2026</p>
        <p className="mt-6 max-w-3xl text-zinc-400">
          These Terms govern access to and use of MisfitzStatz and its related
          services.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside className="relative h-fit self-start lg:sticky lg:top-28">
          <div className="border-l border-zinc-800 pl-4 sm:pl-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500">Contents</p>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#scope" className="hover:text-white">1. Scope and service</a>
              <a href="#accounts" className="hover:text-white">2. Accounts and privacy</a>
              <a href="#public-data" className="hover:text-white">3. Public data and archives</a>
              <a href="#acceptable-use" className="hover:text-white">4. Acceptable use</a>
              <a href="#reports" className="hover:text-white">5. Reports and enforcement</a>
              <a href="#api" className="hover:text-white">6. API and commercial use</a>
              <a href="#deletion" className="hover:text-white">7. Account deletion</a>
              <a href="#availability" className="hover:text-white">8. Availability, liability, and changes</a>
            </nav>
          </div>
        </aside>

        <div className="space-y-12 sm:space-y-16">
          <TermsSection id="scope" title="1. Scope and service">
            <h3 className="text-lg font-semibold">1a) Acceptance</h3>
            <p>
              By accessing or using MisfitzStatz (the “Service”), you agree to
              these Terms. If you do not agree, do not use the Service.
            </p>
            <h3 className="text-lg font-semibold">1b) Independent, free service</h3>
            <p>
              MisfitzStatz is an independently operated, free and ad-free
              community statistics and leaderboard platform for Misfitz. It is
              not owned or operated by, and is not an official service of,
              Antihero Studios.
            </p>
            <h3 className="text-lg font-semibold">1c) Features with and without an account</h3>
            <p>
              Public statistics and leaderboards can be accessed without an
              account, subject to privacy settings and restrictions. Detailed
              seasonal statistics and account-related settings require a
              MisfitzStatz account.
            </p>
          </TermsSection>

          <TermsSection id="accounts" title="2. Accounts and privacy settings">
            <h3 className="text-lg font-semibold">2a) Discord authentication and linked IDs</h3>
            <p>
              Authentication uses Discord. You may link only Player IDs that
              you own or are authorized to manage. MisfitzStatz stores the
              unique Discord User ID as the account identifier. The direct
              association between a Discord account and a Player ID is not
              publicly displayed.
            </p>
            <h3 className="text-lg font-semibold">2b) Player privacy levels</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Open:</strong> the in-game name and Player ID may be displayed on leaderboards.</li>
              <li><strong>Anonymous:</strong> the displayed name is replaced with “Anonymous”; the Player ID remains visible. This setting is enforced server-side.</li>
              <li><strong>Hidden:</strong> the profile is excluded from leaderboards but remains searchable and the in-game name remains visible.</li>
              <li><strong>Private:</strong> statistics are not displayed and the Player ID is not searchable through normal search results. Depending on applicable settings, a lookup may return “Private”, “Blacklisted”, or “Not found” without revealing statistics.</li>
            </ul>
            <h3 className="text-lg font-semibold">2c) Account responsibility</h3>
            <p>
              You are responsible for the security of your Discord account and
              for activity carried out through your MisfitzStatz account. You
              must not attempt to access another person's account or link
              accounts without authorization.
            </p>
          </TermsSection>

          <TermsSection id="public-data" title="3. Public data and archives">
            <h3 className="text-lg font-semibold">3a) Public statistics</h3>
            <p>
              Visitors may browse leaderboards and search Player IDs that are
              not private or blocked without logging in. Detailed seasonal
              statistics require an account. A visible indication that a Player
              ID is linked does not reveal the Discord account behind the link.
            </p>
            <h3 className="text-lg font-semibold">3b) Historical leaderboards</h3>
            <p>
              Archived leaderboards are retained indefinitely and include only
              profiles that were public at the time of the relevant archive.
              Account deletion does not automatically remove a Player ID from
              archived records. A separate removal request is required, and
              technical limitations may prevent direct edits to older archives.
            </p>
            <h3 className="text-lg font-semibold">3c) Optional bot lookup</h3>
            <p>
              A separate MisfitzStatz Discord bot feature may allow a user to
              search for another Discord user who has configured a default
              account through that bot. This feature is disabled by default and
              is separate from public website leaderboards.
            </p>
          </TermsSection>

          <TermsSection id="acceptable-use" title="4. Acceptable use">
            <h3 className="text-lg font-semibold">4a) Prohibited conduct</h3>
            <p>You must not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Attempt unauthorized access, bypass authentication, or circumvent technical restrictions or rate limits.</li>
              <li>Scrape, systematically extract, or reproduce MisfitzStatz statistics or datasets without prior permission.</li>
              <li>Copy data into a separate tool, service, bot, application, or database without prior permission and a lawful basis for the intended use.</li>
              <li>Access non-public data or functionality through unofficial methods.</li>
              <li>Sell, license, or offer MisfitzStatz statistics for sale.</li>
              <li>Impersonate MisfitzStatz or falsely imply that a service is official or endorsed by MisfitzStatz.</li>
              <li>Interfere with the security, stability, or availability of the Service.</li>
            </ul>
            <h3 className="text-lg font-semibold">4b) Search engines and WebMCP</h3>
            <p>
              Ordinary search-engine indexing of publicly available website
              content is not prohibited by this section. WebMCP runs on the
              client and follows the same backend checks as an ordinary website
              request. It does not grant privileged access or permission to
              bypass privacy settings, scrape data, or build a separate service
              from collected statistics.
            </p>
          </TermsSection>

          <TermsSection id="reports" title="5. Reports and enforcement">
            <h3 className="text-lg font-semibold">5a) Reports</h3>
            <p>
              Reports must be submitted in good faith and must not be used to
              harass others or knowingly make false allegations. MisfitzStatz
              receives the reporting user's Discord User ID, the reported
              Player ID, the in-game name, and the report reason. The operator
              reviews reports and may forward relevant information about the
              reported player and the reason to Antihero Studios where
              appropriate. The reporting user's Discord User ID is not included
              in the forwarded report.
            </p>
            <p>
              Reports are normally deleted after handling and retained for no
              longer than two weeks unless further retention is needed for an
              ongoing review, follow-up, or abuse prevention. Submitting a
              report does not guarantee action by Antihero Studios.
            </p>
            <h3 className="text-lg font-semibold">5b) MisfitzStatz account restrictions</h3>
            <p>
              MisfitzStatz may restrict a Discord account for violations of its
              own rules. Restrictions may be temporary, from a few days up to
              six months, or may remain until the relevant restriction record
              expires under the retention rule below. A violation flag and,
              where applicable, a reason may be retained to prevent a restriction
              from being bypassed by creating a new account. No separate flag
              recording an actual ban-evasion attempt is maintained.
            </p>
            <h3 className="text-lg font-semibold">5c) Player ID blacklists</h3>
            <p>
              A Player ID may be blacklisted for game-related conduct, such as a
              problematic in-game name or cheating that affects leaderboard
              quality or reliability. For this blacklist record, only the Player
              ID is stored as blocked; no specific reason or timestamp is stored.
              The blacklist has no fixed expiry and remains until a removal
              request is approved. A Player ID blacklist may affect a linked
              Discord account, but a Discord-account restriction for violating
              MisfitzStatz rules does not by itself blacklist a Player ID.
              These measures apply only within MisfitzStatz and can be reviewed
              through support.
            </p>
            <h3 className="text-lg font-semibold">5d) Restriction review and retention</h3>
            <p>
              The severity and repetition of incidents may be considered when
              deciding a restriction. Restriction records are handled separately
              from ordinary account data and are reviewed and removed when they
              are no longer needed for enforcement or prevention of circumvention.
              Automatic account deletion after 180 days of inactivity does not
              itself promise automatic deletion of separate restriction records.
            </p>
          </TermsSection>

          <TermsSection id="api" title="6. API and commercial use">
            <h3 className="text-lg font-semibold">6a) API access</h3>
            <p>
              The Misfitz Game API is not public. MisfitzStatz retrieves available
              game statistics using a Player ID and cannot search that API by
              in-game name. Access to the MisfitzStatz API requires prior
              explicit permission from the operator. Viewing the website does
              not grant API access or permission to copy the underlying dataset.
            </p>
            <h3 className="text-lg font-semibold">6b) Content creation</h3>
            <p>
              You may create and publish content using website content and
              statistics, including on monetized social media accounts, YouTube
              channels, and community servers, provided that you respect player
              privacy settings and do not expose private or internal information.
            </p>
            <p>
              This permission does not allow selling or licensing statistics,
              redistributing them as a standalone dataset, building a separate
              statistics tool from copied data, or implying official sponsorship
              or endorsement.
            </p>
          </TermsSection>

          <TermsSection id="deletion" title="7. Account deletion">
            <h3 className="text-lg font-semibold">7a) Automatic deletion after inactivity</h3>
            <p>
              An account that has not been used to log in for 180 consecutive
              days is automatically deleted. The last-login date is used to
              determine inactivity.
            </p>
            <h3 className="text-lg font-semibold">7b) Effect of deletion</h3>
            <p>
              Deletion removes the MisfitzStatz account data, badges, saved
              privacy settings, and the association between the Discord account
              and linked Player IDs. Previously linked Player IDs return to Open
              unless a blacklist applies. Data held independently by Discord or
              Antihero Studios is not deleted by deleting a MisfitzStatz account.
              Any separate restriction record is assessed under section 5d and
              is not treated as ordinary account profile data.
            </p>
            <h3 className="text-lg font-semibold">7c) Historical records and requests</h3>
            <p>
              Account deletion does not automatically remove Player IDs from
              archived leaderboards. Historical leaderboard removal is a
              separate request. You can request deletion or review through the
              official MisfitzStatz support server or by email. To minimize
              additional personal data, use the Discord account linked to your
              MisfitzStatz account where possible. Proof of ownership may be
              requested where reasonably necessary.
            </p>
          </TermsSection>

          <TermsSection id="availability" title="8. Availability, liability, and changes">
            <h3 className="text-lg font-semibold">8a) Availability and accuracy</h3>
            <p>
              The Service is provided on an “as is” and “as available” basis.
              Features, statistics, and availability may change. Data may be
              incomplete, delayed, or inaccurate, and the Service depends in part
              on third-party infrastructure and the game API.
            </p>
            <h3 className="text-lg font-semibold">8b) Liability</h3>
            <p>
              Nothing in these Terms excludes or limits liability where such
              exclusion or limitation is prohibited by applicable law.
            </p>
            <h3 className="text-lg font-semibold">8c) Changes and contact</h3>
            <p>
              These Terms may be updated to reflect changes to the Service,
              infrastructure, or legal requirements. Material changes will be
              communicated in an appropriate manner where required by law.
              Questions, API permission requests, privacy requests, and removal
              requests may be sent to{" "}
              <a href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Terms%20of%20Service" className="underline text-[#7CFF00]">scharky.the.shark.official@gmail.com</a>{" "}
              or submitted through the official MisfitzStatz Discord server.
            </p>
          </TermsSection>
        </div>
      </div>
    </main>
  );
}
