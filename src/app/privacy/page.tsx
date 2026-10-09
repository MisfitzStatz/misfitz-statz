export const metadata = {
  title: "Privacy Policy | MisfitzStatz",
  description:
    "Learn how MisfitzStatz collects, processes, stores, and protects information when using our services.",
};

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold tracking-tight">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold">
          Privacy Policy
        </h1>

        <p className="text-sm text-zinc-400">
          Last Updated: 9th October 2026
        </p>

        <p className="mt-6 max-w-3xl text-zinc-400">
          This Privacy Policy explains how MisfitzStatz
          collects, processes, stores, and protects information
          when you use our website and related services.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside className="relative h-fit self-start lg:sticky lg:top-28">
          <div className="border-l border-zinc-800 pl-4 sm:pl-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:mb-8 sm:tracking-[0.35em]">
              Table of Contents
            </p>

            <nav className="flex flex-col gap-3 text-sm sm:gap-4 lg:gap-5">
              <a href="#introduction">01 Introduction</a>
              <a href="#purpose">02 Purpose of the Service</a>
              <a href="#collection">03 Information We Collect</a>
              <a href="#discord">04 Discord Authentication</a>
              <a href="#tokens">05 Authentication and Sessions</a>
              <a href="#leaderboards">06 Leaderboards and Public Information</a>
              <a href="#third-party">07 Third-Party Services</a>
              <a href="#analytics">08 Analytics</a>
              <a href="#sharing">09 Data Sharing</a>
              <a href="#retention">10 Data Retention and Account Deletion</a>
              <a href="#historical">11 Historical Leaderboards</a>
              <a href="#rights">12 Your Rights and Requests</a>
              <a href="#security">13 Security</a>
              <a href="#minors">14 Children and Minors</a>
              <a href="#contact">15 Contact Information</a>
              <a href="#changes">16 Changes to This Privacy Policy</a>
            </nav>
          </div>
        </aside>

        <div className="space-y-14 sm:space-y-20 lg:space-y-24">
          <PolicySection
            id="introduction"
            title="Introduction"
          >
            <p>
              Welcome to MisfitzStatz.
            </p>

            <p>
              This Privacy Policy explains how MisfitzStatz
              collects, uses, stores, and protects information
              when you use our website and related services.
            </p>

            <p>
              This policy is intended to clearly explain what
              information is associated with MisfitzStatz
              accounts and how that information is handled.
            </p>
          </PolicySection>

          <PolicySection
            id="purpose"
            title="Purpose of the Service"
          >
            <p>
              MisfitzStatz is a community-operated statistics
              and leaderboard platform for the game Misfitz.
            </p>

            <p>
              The Service may provide features including:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Game statistics and leaderboards</li>
              <li>Misfitz Player ID verification</li>
              <li>Discord account linking</li>
              <li>MisfitzStatz achievements</li>
              <li>Player profiles</li>
              <li>Profile privacy settings</li>
              <li>Historical leaderboard information</li>
            </ul>
          </PolicySection>

          <PolicySection
            id="collection"
            title="Information We Collect"
          >
            <p>
              The information stored by MisfitzStatz depends on
              how you use the Service.
            </p>

            <h3 className="mb-2 text-xl font-semibold">
              Account Information
            </h3>

            <p>
              When a MisfitzStatz account is created or account
              functionality is used, MisfitzStatz may store:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Discord User ID</li>
              <li>MisfitzStatz achievements</li>
              <li>
                Verified links between a Discord account and a
                Misfitz Player ID
              </li>
              <li>Privacy settings associated with the account</li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold">
              Misfitz Player Data
            </h3>

            <p>
              MisfitzStatz may retrieve and display information
              originating from the game Misfitz and its API for
              statistics and leaderboard functionality.
            </p>

            <p>
              MisfitzStatz does not control the underlying game
              data and cannot directly modify or correct data
              stored by Misfitz.
            </p>
          </PolicySection>

          <PolicySection
            id="discord"
            title="Discord Authentication"
          >
            <p>
              MisfitzStatz uses Discord authentication for
              account-related functionality and account linking.
            </p>

            <p>
              Your Discord User ID may be stored in association
              with your MisfitzStatz account.
            </p>

            <p>
              The direct association between a Discord account
              and a Misfitz Player ID is used internally for
              account verification and linking.
            </p>

            <p>
              This direct Discord-to-Player-ID association is
              not publicly displayed on player profiles.
            </p>
          </PolicySection>

          <PolicySection
            id="tokens"
            title="Authentication and Sessions"
          >
            <p>
              MisfitzStatz may use authentication and session
              technologies, including JSON Web Tokens (JWT) or
              equivalent mechanisms, to maintain authenticated
              sessions.
            </p>

            <p>
              Authentication and session information is used to
              provide secure access to account-related features
              and is not displayed as public player information.
            </p>
          </PolicySection>

          <PolicySection
            id="leaderboards"
            title="Leaderboards and Public Information"
          >
            <p>
              MisfitzStatz may publish player information through
              public profiles, leaderboards, and related
              statistics features.
            </p>

            <p>
              Depending on the applicable privacy settings and
              feature, publicly available information may include
              information such as:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Misfitz Player IDs</li>
              <li>Public in-game names</li>
              <li>Leaderboard positions</li>
              <li>Relevant public statistics</li>
            </ul>

            <p>
              A Player ID that has not been linked to a
              MisfitzStatz account is treated as Open by default
              and may be visible publicly and appear on
              leaderboards.
            </p>

            <p>
              Discord User IDs, authentication credentials, and
              direct Discord account associations are not publicly
              displayed on player profiles.
            </p>
          </PolicySection>

          <PolicySection
            id="third-party"
            title="Third-Party Services"
          >
            <p>
              MisfitzStatz may rely on third-party services to
              operate the platform.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Amazon Web Services (AWS)</li>
              <li>Cloudflare</li>
              <li>Discord OAuth</li>
              <li>Misfitz API</li>
            </ul>

            <p>
              These services may process information as required
              to provide their respective infrastructure,
              authentication, security, analytics, or API
              functionality.
            </p>
          </PolicySection>

          <PolicySection
            id="analytics"
            title="Analytics"
          >
            <p>
              MisfitzStatz uses Cloudflare Analytics to monitor
              website performance, stability, and general usage
              trends.
            </p>

            <p>
              MisfitzStatz does not sell, rent, or trade personal
              user information.
            </p>

            <p>
              MisfitzStatz does not use user information to create
              advertising profiles for the purpose of selling
              targeted advertising.
            </p>
          </PolicySection>

          <PolicySection
            id="sharing"
            title="Data Sharing"
          >
            <p>
              MisfitzStatz does not sell, rent, or trade user
              information.
            </p>

            <p>
              Information may be processed by infrastructure and
              service providers where necessary to operate
              MisfitzStatz and provide its functionality.
            </p>

            <p>
              Information may also be disclosed where required
              by applicable law or where necessary to protect
              the security and integrity of the Service.
            </p>
          </PolicySection>

          <PolicySection
            id="retention"
            title="Data Retention and Account Deletion"
          >
            <p>
              MisfitzStatz does not automatically delete accounts
              after a fixed period of inactivity.
            </p>

            <p>
              Users can delete their MisfitzStatz account through
              the account deletion functionality available in
              Settings.
            </p>

            <p>
              When an account is deleted, the following
              account-associated information is removed where
              applicable:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The associated Discord User ID</li>
              <li>Verified Discord-to-Misfitz account links</li>
              <li>MisfitzStatz achievements</li>
              <li>Account-associated privacy settings</li>
            </ul>

            <p>
              Previously linked Misfitz Player IDs are released
              from the deleted account and may be verified again
              by another eligible account.
            </p>

            <p>
              Deleting an account does not automatically remove
              Player IDs or historical leaderboard entries that
              are already part of MisfitzStatz leaderboards.
            </p>
          </PolicySection>

          <PolicySection
            id="historical"
            title="Historical Leaderboards and Data Removal"
          >
            <p>
              MisfitzStatz may retain and make historical
              leaderboards available after they are no longer
              current.
            </p>

            <p>
              Historical leaderboard information may remain
              accessible even after a MisfitzStatz account has
              been deleted.
            </p>

            <p>
              The internal association between a deleted
              MisfitzStatz account and its previously linked
              Discord account is not publicly displayed on the
              affected player profile.
            </p>

            <p>
              Users may request removal of their Player ID from
              historical leaderboards.
            </p>

            <p>
              Such requests can be submitted through the official
              MisfitzStatz support server or by email.
            </p>

            <p>
              Account deletion and historical leaderboard removal
              are separate processes. Deleting an account does not
              itself constitute a request to remove historical
              leaderboard entries.
            </p>
          </PolicySection>

          <PolicySection
            id="rights"
            title="Your Rights and Requests"
          >
            <p>
              Depending on applicable law, users may have rights
              concerning personal information processed by
              MisfitzStatz.
            </p>

            <p>
              These may include:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Requesting access to personal information</li>
              <li>Requesting deletion of personal information</li>
              <li>Requesting correction where applicable</li>
              <li>Requesting restriction of certain processing</li>
              <li>Objecting to certain processing activities</li>
              <li>Requesting information about stored data</li>
            </ul>

            <p>
              Users can delete their MisfitzStatz account directly
              through Settings.
            </p>

            <p>
              Requests concerning historical leaderboard Player
              IDs can be submitted through the official support
              server or by email.
            </p>
          </PolicySection>

          <PolicySection
            id="security"
            title="Security"
          >
            <p>
              MisfitzStatz uses reasonable technical and
              organizational measures intended to protect stored
              information against unauthorized access, loss,
              misuse, or alteration.
            </p>

            <p>
              No internet-based service can guarantee absolute
              security, and users should take appropriate steps
              to protect their own accounts and authentication
              credentials.
            </p>
          </PolicySection>

          <PolicySection
            id="minors"
            title="Children and Minors"
          >
            <p>
              MisfitzStatz is intended for users who meet the
              minimum age requirements established by Discord and
              applicable local laws.
            </p>

            <p>
              MisfitzStatz does not knowingly seek to collect
              personal information from users who are not permitted
              to use the Service under those requirements.
            </p>
          </PolicySection>

          <PolicySection
            id="contact"
            title="Contact Information"
          >
            <p>
              Privacy-related questions, data requests, and
              historical leaderboard removal requests can be
              submitted through the following contact methods:
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Privacy%20Request"
                className="font-medium transition text-[#7CFF00]"
              >
                scharky.the.shark.official@gmail.com
              </a>
            </p>

            <p>
              Discord:{" "}
              <a
                href="https://discord.com/users/1280882903567568922"
                className="font-medium transition text-[#7CFF00]"
              >
                @scharky_the_shark_official
              </a>
            </p>

            <p>
              Official MisfitzStatz Discord Server:{" "}
              <a
                href="https://discord.gg/bb9bGA9HW4"
                className="font-medium transition text-[#7CFF00]"
              >
                https://discord.gg/bb9bGA9HW4
              </a>
            </p>
          </PolicySection>

          <PolicySection
            id="changes"
            title="Changes to This Privacy Policy"
          >
            <p>
              We may update this Privacy Policy from time to time
              to reflect changes to the Service, technical
              infrastructure, operational practices, or applicable
              requirements.
            </p>

            <p>
              The latest version will be made available through
              the MisfitzStatz website.
            </p>

            <p>
              Continued use of the Service after an updated
              Privacy Policy becomes effective constitutes
              acknowledgment of the updated policy.
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}