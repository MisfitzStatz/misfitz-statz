export const metadata = {
  title: "Terms of Service | MisfitzStatz",
  description:
    "Terms and conditions governing the use of MisfitzStatz and its related services.",
};

function TermsSection({
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

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold">
          Terms of Service
        </h1>

        <p className="text-sm text-zinc-400">
          Last Updated: 9th October 2026
        </p>

        <p className="mt-6 max-w-3xl text-zinc-400">
          These Terms of Service govern access to and use of
          MisfitzStatz and its related services.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside className="relative h-fit self-start lg:sticky lg:top-28">
          <div className="border-l border-zinc-800 pl-4 sm:pl-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:mb-8 sm:tracking-[0.35em]">
              Table of Contents
            </p>

            <nav className="flex flex-col gap-3 text-sm sm:gap-4 lg:gap-5">
              <a href="#acceptance">01 Acceptance of Terms</a>
              <a href="#service">02 About MisfitzStatz</a>
              <a href="#eligibility">03 Eligibility</a>
              <a href="#accounts">04 User Accounts</a>
              <a href="#leaderboards">05 Leaderboards and Public Profiles</a>
              <a href="#acceptable-use">06 Acceptable Use</a>
              <a href="#content">07 Content and Reporting</a>
              <a href="#enforcement">08 Enforcement Actions</a>
              <a href="#availability">09 Service Availability</a>
              <a href="#accuracy">10 Statistics and Data Accuracy</a>
              <a href="#api">11 API and Data Usage</a>
              <a href="#commercial">12 Commercial Use and Content Creation</a>
              <a href="#ip">13 Intellectual Property</a>
              <a href="#deletion">14 Account Deletion and Historical Data</a>
              <a href="#liability">15 Limitation of Liability</a>
              <a href="#changes">16 Changes to the Service and Terms</a>
              <a href="#contact">17 Contact</a>
            </nav>
          </div>
        </aside>

        <div className="space-y-14 sm:space-y-20 lg:space-y-24">
          <TermsSection
            id="acceptance"
            title="Acceptance of Terms"
          >
            <p>
              By accessing or using MisfitzStatz ("the Service"),
              you agree to be bound by these Terms of Service.
            </p>

            <p>
              If you do not agree with these Terms, you must not
              use the Service.
            </p>
          </TermsSection>

          <TermsSection
            id="service"
            title="About MisfitzStatz"
          >
            <p>
              MisfitzStatz is an independent fan-made statistics
              and leaderboard platform for the game Misfitz.
            </p>

            <p>
              MisfitzStatz is operated as a community project and
              is not affiliated with, endorsed by, sponsored by,
              or officially associated with Antihero Studios.
            </p>

            <p>
              MisfitzStatz may provide statistics, leaderboards,
              player profiles, account linking, achievements,
              and other related features.
            </p>
          </TermsSection>

          <TermsSection
            id="eligibility"
            title="Eligibility"
          >
            <p>
              To use account-related features, users must comply
              with Discord's minimum age requirements and
              applicable Discord Terms of Service.
            </p>

            <p>
              Users are responsible for maintaining access to
              their Discord account and for any activity performed
              through their account.
            </p>
          </TermsSection>

          <TermsSection
            id="accounts"
            title="User Accounts"
          >
            <p>
              Authentication and account-related functionality
              may be provided through Discord OAuth.
            </p>

            <p>
              Users may verify ownership of a Misfitz account
              through the verification functionality provided by
              MisfitzStatz.
            </p>

            <p>
              Users are responsible for ensuring that they only
              verify Misfitz accounts they are authorized to link
              to their MisfitzStatz account.
            </p>

            <p>
              Account settings, including available privacy
              settings, can be managed through the available
              settings functionality.
            </p>
          </TermsSection>

          <TermsSection
            id="leaderboards"
            title="Leaderboards and Public Profiles"
          >
            <p>
              MisfitzStatz may display public leaderboards,
              player profiles, rankings, statistics, and other
              information derived from Misfitz data.
            </p>

            <p>
              A Misfitz Player ID that has not been linked to a
              MisfitzStatz account is, by default, treated as
              publicly visible ("Open") and may appear on public
              leaderboards.
            </p>

            <p>
              Available privacy settings may affect the visibility
              of linked player information where supported.
            </p>

            <p>
              A direct association between a Misfitz Player ID
              and a specific Discord account is not publicly
              displayed on player profiles.
            </p>

            <p>
              Outdated leaderboards may be archived. Archived
              leaderboards may remain publicly accessible for
              historical purposes.
            </p>
          </TermsSection>

          <TermsSection
            id="acceptable-use"
            title="Acceptable Use"
          >
            <p>
              Users must use MisfitzStatz responsibly and must
              not interfere with the operation, security, or
              availability of the Service.
            </p>

            <p>Users agree not to:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Abuse, disrupt, overload, or interfere with the
                Service.
              </li>

              <li>
                Attempt to bypass authentication, security
                mechanisms, rate limits, cooldowns, or other
                technical restrictions.
              </li>

              <li>
                Attempt unauthorized access to MisfitzStatz
                systems, infrastructure, accounts, or data.
              </li>

              <li>
                Use automated scraping, crawling, or data
                collection methods to reproduce or extract the
                MisfitzStatz data set without permission.
              </li>

              <li>
                Access non-public data or functionality through
                unofficial methods.
              </li>

              <li>
                Create a public service that mirrors or
                substantially reproduces MisfitzStatz without
                permission.
              </li>

              <li>
                Use MisfitzStatz data to create a competing
                commercial service without permission.
              </li>

              <li>
                Attempt to impersonate MisfitzStatz or falsely
                represent a service, account, website, or project
                as being officially operated or endorsed by
                MisfitzStatz.
              </li>

              <li>
                Use the Service for unlawful purposes or in a way
                that violates applicable laws.
              </li>
            </ul>

            <p>
              Any technical request limits or rate limits
              communicated by MisfitzStatz must be respected.
            </p>
          </TermsSection>

          <TermsSection
            id="content"
            title="Content and Reporting"
          >
            <p>
              MisfitzStatz provides reporting functionality that
              allows users to report inappropriate, offensive,
              harmful, or otherwise problematic content or player
              information.
            </p>

            <p>
              Reports should be submitted in good faith and must
              not be used to intentionally abuse, harass, or
              falsely target other users.
            </p>

            <p>
              MisfitzStatz may review reports and take
              appropriate action where a violation of these Terms
              or applicable platform rules is identified.
            </p>
          </TermsSection>

          <TermsSection
            id="enforcement"
            title="Enforcement Actions"
          >
            <p>
              MisfitzStatz reserves the right to take reasonable
              action against accounts, Player IDs, or other
              activity that violates these Terms.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Removal of account verification</li>
              <li>Removal or restriction of linked accounts</li>
              <li>Temporary restrictions</li>
              <li>Restriction of access to the Service</li>
              <li>Removal of Player IDs from MisfitzStatz features</li>
              <li>Permanent blacklisting of Player IDs where appropriate</li>
              <li>Deletion of MisfitzStatz accounts where appropriate</li>
            </ul>

            <p>
              Enforcement decisions may be made at the reasonable
              discretion of the operator based on the
              circumstances of the violation.
            </p>
          </TermsSection>

          <TermsSection
            id="availability"
            title="Service Availability"
          >
            <p>
              MisfitzStatz is provided on an "as is" and
              "as available" basis.
            </p>

            <p>
              Continuous availability, uninterrupted operation,
              and permanent availability of individual features
              are not guaranteed.
            </p>

            <p>
              MisfitzStatz may modify, temporarily disable, or
              discontinue features where necessary for technical,
              operational, security, or other reasons.
            </p>
          </TermsSection>

          <TermsSection
            id="accuracy"
            title="Statistics and Data Accuracy"
          >
            <p>
              Statistics displayed by MisfitzStatz are obtained
              from external game data sources, including the
              Misfitz API.
            </p>

            <p>
              MisfitzStatz does not control the underlying game
              data and cannot directly correct data originating
              from the game Misfitz.
            </p>

            <p>
              Accuracy, completeness, availability, and
              timeliness of displayed information cannot be
              guaranteed.
            </p>

            <p>
              Differences between information displayed by
              MisfitzStatz and information available through the
              game or other sources may occur.
            </p>
          </TermsSection>

          <TermsSection
            id="api"
            title="API and Data Usage"
          >
            <p>
              Access to and use of the MisfitzStatz API requires
              prior explicit permission from MisfitzStatz.
            </p>

            <p>
              API access is not granted merely by accessing the
              website or using publicly available MisfitzStatz
              features.
            </p>

            <p>
              Without explicit permission, users may not:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Access the MisfitzStatz API.</li>
              <li>Share or redistribute API credentials.</li>
              <li>
                Use the API to operate another public service,
                website, bot, application, or database.
              </li>
              <li>
                Mirror or systematically reproduce MisfitzStatz
                data.
              </li>
              <li>
                Circumvent API authentication, rate limits, or
                other technical restrictions.
              </li>
              <li>
                Reverse engineer or attempt to obtain
                unauthorized API access.
              </li>
            </ul>

            <p>
              Permission to use the API may be granted or revoked
              at the discretion of MisfitzStatz.
            </p>
          </TermsSection>

          <TermsSection
            id="commercial"
            title="Commercial Use and Content Creation"
          >
            <p>
              MisfitzStatz data, statistics, rankings, leaderboard
              information, and other data provided by the Service
              may not be used for commercial purposes without
              prior explicit permission from MisfitzStatz.
            </p>

            <p>
              This includes, but is not limited to:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Selling, licensing, or reselling MisfitzStatz
                data.
              </li>

              <li>
                Incorporating MisfitzStatz data into paid
                products or services.
              </li>

              <li>
                Using MisfitzStatz data as the basis of a
                commercial competing service.
              </li>

              <li>
                Creating or maintaining a commercial mirror or
                database of MisfitzStatz data.
              </li>

              <li>
                Redistributing MisfitzStatz data as a standalone
                commercial data source.
              </li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold">
              Social Media and Visual Content
            </h3>

            <p>
              The use of MisfitzStatz data for visual content
              creation on social media is permitted, including
              content published through monetized social media
              accounts.
            </p>

            <p>
              This exception applies provided that:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                It is clearly apparent that the content concerns
                MisfitzStatz and/or uses information provided by
                MisfitzStatz.
              </li>

              <li>
                The content does not falsely imply that it is
                officially produced, sponsored, or endorsed by
                MisfitzStatz.
              </li>

              <li>
                MisfitzStatz data is not redistributed as a
                standalone database or data service.
              </li>

              <li>
                No private, internal, or otherwise non-public
                MisfitzStatz information is disclosed.
              </li>

              <li>
                All other applicable MisfitzStatz Terms of
                Service are followed.
              </li>
            </ul>
          </TermsSection>

          <TermsSection
            id="ip"
            title="Intellectual Property"
          >
            <p>
              The MisfitzStatz platform, its original website
              design, branding, logos, original content, and
              original software remain the property of their
              respective rights holders.
            </p>

            <p>
              The MisfitzStatz name and branding may not be used
              in a manner that falsely suggests an official
              relationship with another project, service, or
              website.
            </p>

            <p>
              A private recreation or implementation of the
              general structure or design of MisfitzStatz for
              personal learning, experimentation, or development
              purposes is permitted.
            </p>

            <p>
              However, publicly distributing or operating a
              substantially identical copy intended to imitate,
              replace, or represent MisfitzStatz is not permitted
              without permission.
            </p>

            <p>
              Misfitz, the Misfitz game, and game-related assets
              remain the property of their respective owners.
            </p>
          </TermsSection>

          <TermsSection
            id="deletion"
            title="Account Deletion and Historical Data"
          >
            <p>
              Users may delete their MisfitzStatz account through
              the available account deletion functionality in
              Settings.
            </p>

            <p>
              When an account is deleted, the following account
              information is removed where applicable:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The associated Discord User ID</li>
              <li>Linked Misfitz account relationships</li>
              <li>MisfitzStatz achievements</li>
              <li>Account-associated privacy settings</li>
            </ul>

            <p>
              Previously linked Misfitz Player IDs are released
              and may be verified again by another eligible
              MisfitzStatz account.
            </p>

            <p>
              Deleting a MisfitzStatz account does not
              automatically remove the corresponding Player ID
              or historical entries from archived or existing
              leaderboards.
            </p>

            <p>
              Historical leaderboard information may remain
              available for historical and ranking purposes.
            </p>

            <p>
              Users may request removal of their Player ID from
              historical leaderboards by contacting MisfitzStatz
              through the official support server or by email.
            </p>

            <p>
              A Player ID that is no longer linked to a
              MisfitzStatz account is treated as Open by default,
              where applicable.
            </p>
          </TermsSection>

          <TermsSection
            id="liability"
            title="Limitation of Liability"
          >
            <p>
              To the maximum extent permitted by applicable law,
              MisfitzStatz shall not be liable for service
              interruptions, data loss, incorrect statistics,
              ranking inaccuracies, third-party failures, or
              changes to the underlying game or API.
            </p>

            <p>
              Use of the Service is at the user's own risk.
            </p>
          </TermsSection>

          <TermsSection
            id="changes"
            title="Changes to the Service and Terms"
          >
            <p>
              MisfitzStatz reserves the right to modify,
              suspend, limit, or discontinue any part of the
              Service at any time.
            </p>

            <p>
              These Terms may also be updated to reflect changes
              to the Service, technical infrastructure, applicable
              requirements, or operating practices.
            </p>

            <p>
              The latest version of these Terms will be made
              available through the MisfitzStatz website.
            </p>

            <p>
              Continued use of the Service after updated Terms
              become effective constitutes acceptance of the
              revised Terms.
            </p>
          </TermsSection>

          <TermsSection
            id="contact"
            title="Contact"
          >
            <p>
              Questions regarding these Terms, API permission,
              data removal requests, or other matters concerning
              MisfitzStatz may be submitted through the official
              support server or by email.
            </p>

            <p>
              <a
                href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Terms%20of%20Service"
                className="underline"
              >
                scharky.the.shark.official@gmail.com
              </a>
            </p>
          </TermsSection>
        </div>
      </div>
    </main>
  );
}