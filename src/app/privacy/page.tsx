export const metadata = {
  title: "Privacy Policy | MisfitzStatz",
  description: "How MisfitzStatz processes account, player, report, and technical information.",
};

type SectionProps = { id: string; title: string; children: React.ReactNode };

function PolicySection({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-5 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
      <header className="mb-14">
        <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Last updated: 28 October 2026 - Valid from: 16th November 2026</p>
        <p className="mt-6 max-w-3xl text-zinc-400">
          This policy explains how MisfitzStatz processes information when you
          use its website and related features.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside className="relative h-fit self-start lg:sticky lg:top-28">
          <div className="border-l border-zinc-800 pl-4 sm:pl-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500">Contents</p>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#general" className="hover:text-white">1. General</a>
              <a href="#visitors" className="hover:text-white">2. Visitors without an account</a>
              <a href="#accounts" className="hover:text-white">3. Users with an account</a>
              <a href="#reports" className="hover:text-white">4. Reports and restrictions</a>
              <a href="#providers" className="hover:text-white">5. Third-party providers</a>
              <a href="#retention" className="hover:text-white">6. Retention and deletion</a>
              <a href="#rights" className="hover:text-white">7. Your rights</a>
              <a href="#security" className="hover:text-white">8. Security and changes</a>
            </nav>
          </div>
        </aside>

        <div className="space-y-12 sm:space-y-16">
          <PolicySection id="general" title="1. General">
            <h3 className="text-lg font-semibold">1a) Controller and scope</h3>
            <p>
              MisfitzStatz is an independently operated, free and ad-free
              statistics and leaderboard service for Misfitz. The operator and
              contact details are listed in the <a href="/legal" className="text-[#7CFF00] underline">Legal Notice</a>.
              This policy covers processing carried out by MisfitzStatz. It does
              not govern processing carried out independently by Discord,
              Antihero Studios, or other providers.
            </p>
            <h3 className="text-lg font-semibold">1b) Purposes and legal bases</h3>
            <p>
              Depending on the feature, information is processed to operate the
              service, authenticate accounts, display player statistics and
              independently calculated leaderboards, apply privacy settings,
              handle reports, protect the service, and enforce MisfitzStatz
              restrictions. Processing is based on the applicable legal basis
              for the relevant activity, including performance of a requested
              account-related service, compliance with legal obligations where
              applicable, and legitimate interests in operating the statistics
              service and protecting its security. The applicable basis depends
              on the specific processing activity.
            </p>
          </PolicySection>

          <PolicySection id="visitors" title="2. Visitors without an account">
            <h3 className="text-lg font-semibold">2a) Public statistics and searches</h3>
            <p>
              Visitors can browse public leaderboards and search Player IDs that
              are not private or blocked without logging in. MisfitzStatz
              requests available game statistics by Player ID and calculates its
              own leaderboards from Player IDs that have already been looked up.
              It cannot search the game API by in-game name.
            </p>
            <h3 className="text-lg font-semibold">2b) Technical connection data and Cloudflare</h3>
            <p>
              The application request tracker records aggregate request counts,
              HTTP status-code categories, and response times in process memory.
              It does not record visitor IP addresses or URLs in that tracker.
              Application logs may contain technical errors and internal service
              events. Cloudflare operates in front of the website and processes
              IP addresses and technical request metadata for delivery, security,
              and analytics functions. Such infrastructure processing is
              separate from the application's own request tracker.
            </p>
            <h3 className="text-lg font-semibold">2c) Browser local storage</h3>
            <p>
              The website uses browser local storage for settings such as whether
              first-visit notices have been shown and for recent Player ID
              searches. These values are stored in your browser rather than as
              server-side account records and can be managed or cleared through
              the website's settings where the relevant control is available.
            </p>
          </PolicySection>

          <PolicySection id="accounts" title="3. Users with an account">
            <h3 className="text-lg font-semibold">3a) Discord authentication</h3>
            <p>
              Discord OAuth is used to authenticate your account. MisfitzStatz
              stores the unique Discord User ID as its account identifier and
              uses an authentication cookie to maintain login state. The login
              validity period is 30 days. MisfitzStatz does not intentionally
              store Discord profile fields such as your username, avatar, or
              email as account data under the described login flow.
            </p>
            <h3 className="text-lg font-semibold">3b) Linked Player IDs and account settings</h3>
            <p>
              Depending on the features you use, MisfitzStatz processes your
              Discord User ID, account badges, verified links between your
              account and one or more Player IDs, and saved privacy settings.
              The direct Discord-to-Player-ID association is not publicly
              displayed. Antihero Studios does not receive this association
              through MisfitzStatz and operates its own separate linking system.
            </p>
            <h3 className="text-lg font-semibold">3c) Privacy levels</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Open:</strong> the in-game name and Player ID may appear on leaderboards.</li>
              <li><strong>Anonymous:</strong> the displayed name is replaced with “Anonymous”; the Player ID remains visible.</li>
              <li><strong>Hidden:</strong> the profile is omitted from leaderboards but remains searchable and the in-game name remains visible.</li>
              <li><strong>Private:</strong> statistics are not displayed and normal search does not return the profile's statistics. Depending on applicable settings, a lookup may return “Private”, “Blacklisted”, or “Not found”.</li>
            </ul>
            <p>
              Privacy settings are enforced server-side. Client-side interface
              behavior and WebMCP do not bypass these checks; requests are
              evaluated by the backend under the same restrictions as ordinary
              website requests.
            </p>
            <h3 className="text-lg font-semibold">3d) Local and session storage</h3>
            <p>
              Browser local storage is used mainly for first-visit notices and
              recent Player ID searches. These settings can be managed through
              the website settings where controls are provided. Session storage
              is not used by the described website features.
            </p>
          </PolicySection>

          <PolicySection id="reports" title="4. Reports and restrictions">
            <h3 className="text-lg font-semibold">4a) Reports</h3>
            <p>
              A report contains the reporting user's Discord User ID, the
              reported Player ID, the reported in-game name, and the report
              reason. The operator reviews reports. Where appropriate, relevant
              information about the reported player and the reason may be
              forwarded to Antihero Studios for review under the game's rules;
              the reporting user's Discord User ID is not included in the
              forwarded report.
            </p>
            <p>
              Reports are normally deleted after handling and retained for no
              longer than two weeks unless further retention is needed for an
              ongoing review, follow-up, or abuse prevention. The reporting user
              may request the status of a report but does not automatically
              receive updates.
            </p>
            <h3 className="text-lg font-semibold">4b) MisfitzStatz account restrictions</h3>
            <p>
              To enforce MisfitzStatz rules and prevent restrictions from being
              bypassed through account deletion and re-registration, the service
              may retain a restriction flag associated with a Discord User ID
              and, where applicable, a reason. No separate record of an actual
              ban-evasion attempt is maintained. These records are used within
              MisfitzStatz and are not forwarded to other services as part of
              this restriction record.
            </p>
            <p>
              Discord-account restrictions may be temporary, lasting from a few
              days up to six months, or remain in place until reviewed or lifted.
              The restriction record is separate from the ordinary account data.
              The 180-day automatic account-deletion rule does not, by itself,
              establish an automatic deletion period for separate restriction
              records; those records must be reviewed and removed when they are
              no longer needed for the stated enforcement purpose.
            </p>
            <h3 className="text-lg font-semibold">4c) Player ID blacklists</h3>
            <p>
              Player ID blacklists concern game-related conduct, such as
              problematic in-game names or cheating that may affect leaderboard
              quality or reliability. For this record, only the Player ID is
              stored as blocked; no reason or timestamp is stored. The blacklist
              has no fixed expiry and remains until a removal request is approved.
              A game-related Player ID blacklist may affect a linked Discord
              account, but a Discord-account restriction for MisfitzStatz rules
              does not by itself blacklist a Player ID. These measures apply
              only within MisfitzStatz. Users may request review through support.
            </p>
          </PolicySection>

          <PolicySection id="providers" title="5. Third-party providers">
            <h3 className="text-lg font-semibold">5a) Cloudflare</h3>
            <p>
              Cloudflare provides website delivery, DNS/proxying, security, and
              analytics functionality. When requests pass through Cloudflare,
              it may process the visitor's IP address, country, requested path,
              request method, response status, cache status, and related
              technical/security metadata. Cloudflare's own privacy terms and
              retention practices apply to processing it carries out as a
              provider. The operator does not claim that disabling application
              or load-balancer access logs disables Cloudflare's processing.
            </p>
            <h3 className="text-lg font-semibold">5b) Amazon Web Services</h3>
            <p>
              MisfitzStatz uses AWS infrastructure, including an EC2 server and
              Elastic Load Balancing, in Frankfurt am Main, Germany. The operator
              has disabled Elastic Load Balancing access logs. This does not
              itself describe or disable logs generated by the application,
              operating system, or other AWS services.
            </p>
            <h3 className="text-lg font-semibold">5c) Discord and the Misfitz Game API</h3>
            <p>
              Discord processes information under its own privacy policy when
              you use Discord OAuth or Discord services. The Misfitz Game API
              supplies game statistics requested by Player ID. MisfitzStatz is
              independently operated and does not control processing carried
              out independently by Discord, Antihero Studios, or the game API.
            </p>
            <h3 className="text-lg font-semibold">5d) No sale or advertising profiles</h3>
            <p>
              MisfitzStatz is free and ad-free. It does not sell user information
              or use it to build advertising profiles for targeted advertising.
            </p>
          </PolicySection>

          <PolicySection id="retention" title="6. Retention and deletion">
            <h3 className="text-lg font-semibold">6a) Automatic account deletion</h3>
            <p>
              An account that has not been used to log in for 180 consecutive
              days is automatically deleted. The last-login date is used to
              determine inactivity. Deletion removes the account's badges, saved
              privacy settings, and association between the Discord account and
              linked Player IDs. Previously linked Player IDs return to Open
              unless a blacklist applies. Data held independently by Discord or
              Antihero Studios is not deleted by deleting a MisfitzStatz account.
            </p>
            <h3 className="text-lg font-semibold">6b) Historical leaderboards</h3>
            <p>
              Archived leaderboards are retained indefinitely and include only
              profiles that were public at the time of archiving. Account
              deletion does not automatically remove a Player ID from archived
              records. Historical leaderboard removal is a separate request.
              Older archived records may not be editable through the normal
              service workflow; requests are assessed individually.
            </p>
            <h3 className="text-lg font-semibold">6c) Reports and restriction records</h3>
            <p>
              Reports are normally deleted after handling and within two weeks,
              unless continued retention is needed for an ongoing review,
              follow-up, or abuse prevention. Restriction records are reviewed
              separately and are retained only while needed for enforcement and
              prevention of circumvention. Player ID blacklists have no fixed
              expiry and remain until an approved removal request.
            </p>
            <h3 className="text-lg font-semibold">6d) Technical information</h3>
            <p>
              The request metrics collector stores aggregate values in process
              memory and these values reset when the process restarts. PM2 log
              files may contain application errors and internal events. The
              operator has not configured Elastic Load Balancing access logs.
              Cloudflare and other infrastructure providers may process and
              retain technical connection data independently under their own
              configurations and policies.
            </p>
          </PolicySection>

          <PolicySection id="rights" title="7. Your rights">
            <h3 className="text-lg font-semibold">7a) Data protection rights</h3>
            <p>
              Depending on applicable law and the circumstances, you may have
              the right to request access to, correction of, deletion of, or
              restriction of processing of your personal data, to object to
              certain processing, and to receive data in a portable format.
              You may also lodge a complaint with a competent data protection
              supervisory authority. These rights are subject to the conditions
              and exceptions in applicable law.
            </p>
            <h3 className="text-lg font-semibold">7b) How to submit a request</h3>
            <p>
              Submit requests through the official MisfitzStatz support server
              or by email. To minimize additional personal data, users are
              encouraged to contact support through the Discord account linked
              to their MisfitzStatz account. Email remains an alternative.
              Proof of ownership or identity may be requested where reasonably
              necessary to prevent unauthorized disclosure or changes.
            </p>
            <h3 className="text-lg font-semibold">7c) Data originating from third parties</h3>
            <p>
              MisfitzStatz can directly change information it generates or
              controls. Where information originates from the game or another
              provider, a correction may also need to be requested from that
              source. This does not remove any rights that apply to personal
              data processed by MisfitzStatz.
            </p>
          </PolicySection>

          <PolicySection id="security" title="8. Security and changes">
            <h3 className="text-lg font-semibold">8a) Security</h3>
            <p>
              MisfitzStatz uses technical and organizational measures intended
              to protect information and monitor the health of internal systems.
              No internet-based service can guarantee absolute security.
            </p>
            <h3 className="text-lg font-semibold">8b) Minors</h3>
            <p>
              Users must meet the minimum age requirements applicable to their
              use of Discord and MisfitzStatz. MisfitzStatz does not knowingly
              seek to collect personal information from people who are not
              permitted to use the Service.
            </p>
            <h3 className="text-lg font-semibold">8c) Changes and contact</h3>
            <p>
              This policy may be updated to reflect changes to the Service,
              infrastructure, or data processing. The current version will be
              published on the MisfitzStatz website. For privacy requests,
              account deletion, or historical leaderboard removal, contact{" "}
              <a href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Privacy%20Request" className="text-[#7CFF00] underline">scharky.the.shark.official@gmail.com</a>,
              contact <a href="https://discord.com/users/1280882903567568922" className="text-[#7CFF00] underline">@scharky_the_shark_official</a>,
              or use the <a href="https://discord.gg/bb9bGA9HW4" className="text-[#7CFF00] underline">official MisfitzStatz Discord server</a>.
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}
