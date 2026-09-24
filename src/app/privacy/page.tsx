export const metadata = {
  title:        "Privacy Policy | Misfitz Stats",
  description:  "Learn how Misfitz Stats collects, processes, stores, and protects information when using our services.",
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
<main className="mx-auto max-w-7xl px-6 py-16">
  <div className="mb-16">
    <h1 className="mb-4 text-4xl font-bold">
      Privacy Policy
    </h1>
    <p className="text-sm text-zinc-400">
      Last Updated: 4th June 2026
    </p>
    <p className="mt-6 max-w-3xl text-zinc-400">
      This Privacy Policy explains how Misfitz Stats
      collects, processes, stores, and protects information
      when you use our website and related services.
    </p>
  </div>

  <div className="grid gap-20 lg:grid-cols-[260px_1fr]">
    <aside className="sticky top-28 h-fit self-start">
      <div className="border-l border-zinc-800 pl-6">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Table of Contents
        </p>
        <nav className="flex flex-col gap-5 text-sm">
          <a href="#introduction">01 Introduction</a>
          <a href="#purpose">02 Purpose of the Service</a>
          <a href="#collection">03 Information We Collect</a>
          <a href="#discord">04 Discord Authentication</a>
          <a href="#tokens">05 Authentication Tokens</a>
          <a href="#leaderboards">06 Leaderboards</a>
          <a href="#third-party">07 Third-Party Services</a>
          <a href="#analytics">08 Analytics</a>
          <a href="#sharing">09 Data Sharing</a>
          <a href="#retention">10 Data Retention</a>
          <a href="#rights">11 Your Rights</a>
          <a href="#security">12 Security</a>
          <a href="#minors">13 Children and Minors</a>
          <a href="#contact">14 Contact Information</a>
          <a href="#changes">15 Policy Changes</a>
        </nav>
      </div>
    </aside>

    <div className="space-y-24">
      <PolicySection
        id="introduction"
        title="Introduction"
      >
        <p>
          Welcome to Misfitz Stats.
        </p>
        <p>
          This Privacy Policy explains how Misfitz Stats
          collects, uses, stores, and protects information
          when you use our website and related services.
        </p>
        <p>
          By using Misfitz Stats, you agree to the practices
          described in this Privacy Policy.
        </p>
      </PolicySection>

      <PolicySection
        id="purpose"
        title="Purpose of the Service"
      >
        <p>
          Misfitz Stats is a community-operated statistics
          and leaderboard platform for the game Misfitz.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>View game statistics and leaderboards</li>
          <li>Link a Discord account to a Misfitz account</li>
          <li>Verify account ownership</li>
          <li>Manage profile visibility settings</li>
        </ul>
      </PolicySection>

      <PolicySection
        id="collection"
        title="Information We Collect"
      >
        <h3 className="mb-2 text-xl font-semibold">
          Information Stored Permanently
        </h3>

        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Discord User ID</li>
          <li>Verification status</li>
          <li>Linked Misfitz Player ID</li>
          <li>Leaderboard-related statistics</li>
          <li>Profile visibility settings</li>
          <li>Verification timestamps</li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold">
          Information Processed Temporarily
        </h3>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Membership status during account verification
          </li>
          <li>
            Detailed player statistics retrieved through the
            Misfitz API for up to 10 minutes
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        id="discord"
        title="Discord Authentication"
      >
        <p>
          Misfitz Stats uses Discord OAuth for
          authentication and account verification.
        </p>

        <p>
          Authentication through Discord is voluntary and
          required only for account-related features.
        </p>
      </PolicySection>

      <PolicySection
        id="tokens"
        title="Authentication Tokens"
      >
        <p>
          Misfitz Stats uses JSON Web Tokens (JWT) and
          related session technologies to maintain secure
          authentication.
        </p>
      </PolicySection>

      <PolicySection
        id="leaderboards"
        title="Leaderboards and Public Information"
      >
        <p>
          Misfitz Stats may publish public leaderboards.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Public in-game names</li>
          <li>Relevant leaderboard statistics</li>
        </ul>

        <p>
          Discord User IDs, authentication tokens, and
          private account information are never publicly
          displayed.
        </p>
      </PolicySection>

      <PolicySection
        id="third-party"
        title="Third-Party Services"
      >
        <ul className="list-disc space-y-2 pl-6">
          <li>Amazon Web Services (AWS)</li>
          <li>Cloudflare</li>
          <li>Discord OAuth</li>
          <li>Misfitz API</li>
        </ul>
      </PolicySection>

      <PolicySection
        id="analytics"
        title="Analytics"
      >
        <p>
          Misfitz Stats uses Cloudflare Analytics to monitor
          website performance, stability, and usage trends.
        </p>

        <p>
          No advertising profiles are created and no user
          data is sold.
        </p>
      </PolicySection>

      <PolicySection
        id="sharing"
        title="Data Sharing"
      >
        <p>
          Misfitz Stats does not sell, rent, or trade user
          information.
        </p>
      </PolicySection>

      <PolicySection
        id="retention"
        title="Data Retention and Account Deletion"
      >
        <p>
          Stored account information remains associated with
          your account while it is active.
        </p>

        <p>
          Accounts and associated data may be automatically
          deleted after 180 days of inactivity.
        </p>

        <p>
          At the current stage of development, account
          deletion requests can be done here:
        </p>
        <a
        href="/settings"
        className="font-medium transition text-[#7CFF00]"
      >
        Data removal request
      </a>
      </PolicySection>

      <PolicySection
        id="rights"
        title="Your Rights"
      >
        <ul className="list-disc space-y-2 pl-6">
          <li>Request access to your data</li>
          <li>Request deletion of your data</li>
          <li>Restrict certain processing activities</li>
          <li>Object to certain processing activities</li>
          <li>Request a copy of stored information</li>
        </ul>
      </PolicySection>

      <PolicySection
        id="security"
        title="Security"
      >
        <p>
          Reasonable technical and organizational measures
          are used to protect stored information.
        </p>
      </PolicySection>

      <PolicySection
        id="minors"
        title="Children and Minors"
      >
        <p>
          Misfitz Stats is intended for users who meet the
          minimum age requirements established by Discord
          and applicable local laws.
        </p>
      </PolicySection>

      <PolicySection
        id="contact"
        title="Contact Information"
      >
        <p>
          Email:{" "}
          <a
            href="mailto:scharky.the.shark.official@gmail.com?subject=Privacy%20Request"
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
          Official Misfitz Stats Discord Server:{" "}
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
          We may update this Privacy Policy from time to
          time to reflect technical, operational, or legal
          changes.
        </p>

        <p>
          Continued use of the service after changes become
          effective constitutes acceptance of the updated
          Privacy Policy.
        </p>
      </PolicySection>
    </div>
  </div>
</main>
);
}
