import Link from "next/link";
import Image from "next/image";

type FeatureStatus = "available" | "account" | "soon" | "unavailable";

type Comparison = {
  feature: string;
  description?: string;
  website: FeatureStatus;
  bot: FeatureStatus;
  support: FeatureStatus;
};

const comparisons: Comparison[] = [
  {
    feature: "Meta Maker",
    website: "soon",
    bot: "unavailable",
    support: "unavailable",
  },
  {
    feature: "Leaderboards",
    website: "available",
    bot: "soon",
    support: "available",
  },
  {
    feature: "Account Verification",
    website: "available",
    bot: "available",
    support: "unavailable",
  },
  {
    feature: "Privacy Settings",
    website: "available",
    bot: "available",
    support: "unavailable",
  },
  {
    feature: "View Player Statistics",
    website: "available",
    bot: "available",
    support: "unavailable",
  },
  {
    feature: "Full Account Stats",
    website: "account",
    bot: "account",
    support: "unavailable",
  },
  {
    feature: "Account Tracking",
    website: "unavailable",
    bot: "soon",
    support: "unavailable",
  },
  {
    feature: "Statistic Graphs",
    website: "soon",
    bot: "soon",
    support: "unavailable",
  },
  {
    feature: "Support",
    website: "unavailable",
    bot: "available",
    support: "available",
  },
  {
    feature: "Bug Reports",
    website: "unavailable",
    bot: "available",
    support: "available",
  },
  {
    feature: "Direct Developer Contact",
    website: "unavailable",
    bot: "unavailable",
    support: "available",
  },
  {
    feature: "New Features in Testing",
    website: "unavailable",
    bot: "unavailable",
    support: "available",
  },
  {
    feature: "Exclusive Announcements",
    website: "unavailable",
    bot: "unavailable",
    support: "available",
  },
  {
    feature: "Event Hosting Management",
    website: "unavailable",
    bot: "unavailable",
    support: "available",
  },
];

const statusConfig: Record<
  FeatureStatus,
  {
    label: string;
    icon?: string;
    className: string;
  }
> = {
  available: {
    label: "Available",
    icon: "/images/check.png",
    className: "text-[#7CFF00]",
  },
  account: {
    label: "Account required",
    icon: "/images/check.png",
    className: "text-[#00D9FF]",
  },
  soon: {
    label: "Coming soon",
    icon: "/goldenGoose.png",
    className: "text-yellow-300",
  },
  unavailable: {
    label: "Not available",
    icon: "/images/cross.png",
    className: "text-white/35",
  },
};

function StatusBadge({ status }: { status: FeatureStatus }) {
const config = statusConfig[status];

return (
<div
  className={`flex items-center justify-center gap-2 text-center text-sm font-medium ${config.className}`}
>
  {config.icon ? (
    <Image
      src={config.icon}
      alt=""
      width={20}
      height={20}
      className={status === "unavailable" ? "opacity-50" : ""}
    />
  ) : (
    <span className="h-2 w-2 rounded-full bg-yellow-300" />
  )}

  <span className="hidden sm:inline">{config.label}</span>
</div>
);
}

function PlatformCard({
  title,
  description,
  accent = false,
  children,
}: {
  title: string;
  description: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-3xl border p-8 backdrop-blur-xl ${
        accent
          ? "border-[#7CFF00]/20 bg-[#7CFF00]/5"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3
        className={`mb-3 text-2xl font-bold ${
          accent ? "text-[#7CFF00]" : ""
        }`}
      >
        {title}
      </h3>
      <p className="mb-6 text-white/65">{description}</p>

      {children}
    </div>
  );
}

export default function DiscordComparePage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
  <section className="relative mx-auto max-w-5xl px-6 pt-12 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
      Compare
    </div>

    <h1 className="mb-6 text-5xl font-black uppercase md:text-6xl">
      WEBSITE, BOT
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        OR SUPPORT SERVER?
      </span>
    </h1>

    <p className="mx-auto max-w-3xl text-lg text-white/70">
      Each part of Misfitz Statz serves a different purpose. Compare
      available features and see what you need to use them.
    </p>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 pt-14">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Feature status</h2>
        <p className="mt-1 text-sm text-white/55">
          Some features require an account, while others are not available
          yet.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            "available",
            "account",
            "soon",
            "unavailable",
          ] as FeatureStatus[]
        ).map((status) => (
          <div
            key={status}
            className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
          >
            <StatusBadge status={status} />
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-16">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="hidden grid-cols-4 border-b border-white/10 p-6 font-bold md:grid">
        <div>Feature</div>
        <div className="text-center">Website</div>
        <div className="text-center">Discord Bot</div>
        <div className="text-center">Support Server</div>
      </div>

      {comparisons.map((item) => (
        <div
          key={item.feature}
          className="border-b border-white/5 p-5 last:border-0"
        >
          <div className="mb-4 font-semibold md:hidden">
            {item.feature}
          </div>

          <div className="grid gap-4 md:grid-cols-4 md:items-center">
            <div className="hidden font-medium md:block">
              {item.feature}
            </div>

            <div className="flex items-center justify-between md:justify-center">
              <span className="text-sm text-white/50 md:hidden">
                Website
              </span>
              <StatusBadge status={item.website} />
            </div>

            <div className="flex items-center justify-between md:justify-center">
              <span className="text-sm text-white/50 md:hidden">
                Discord Bot
              </span>
              <StatusBadge status={item.bot} />
            </div>

            <div className="flex items-center justify-between md:justify-center">
              <span className="text-sm text-white/50 md:hidden">
                Support Server
              </span>
              <StatusBadge status={item.support} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 pb-20">
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-black uppercase">
        What are you
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          looking for?
        </span>
      </h2>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      <PlatformCard
        title="Website"
        description="Browse public statistics, explore Misfitz data and use website-exclusive features."
      >
        <Link
          href="/stats"
          className="inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/10"
        >
          Open Website
        </Link>
      </PlatformCard>

      <PlatformCard
        title="Discord Bot"
        description="Best for players who want statistics, account management and tracking directly inside Discord."
        accent
      >
        <Link
          href="/discord/choose"
          className="inline-flex w-full justify-center rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-6 py-3 font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
        >
          Explore Discord Bot
        </Link>
      </PlatformCard>

      <PlatformCard
        title="Support Server"
        description="Support, bug reports, announcements, developer contact and community events."
      >
        <Link
          href="https://discord.com/invite/bb9bGA9HW4"
          className="inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-white/30 hover:bg-white/10"
        >
          Join Support Server
        </Link>
      </PlatformCard>
    </div>
  </section>

  <section className="relative mx-auto max-w-5xl px-6 pb-20">
    <div className="rounded-3xl border border-[#00D9FF]/20 bg-[#00D9FF]/5 p-8 backdrop-blur-xl">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#00D9FF]/70">
        Account requirements
      </p>

      <h2 className="mb-4 text-3xl font-black">
        Some features need a Misfitz Statz account
      </h2>

      <p className="max-w-3xl text-white/70">
        Public statistics can be viewed without an account. Features
        connected to your own player accounts, such as account management
        and personal data, require an Misfitz Statz account
        and may require verification.
      </p>
    </div>
  </section>

  <section className="relative mx-auto max-w-5xl px-6 pb-24">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
      <h2 className="mb-4 text-4xl font-black uppercase">
        Start with what
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          you need
        </span>
      </h2>

      <p className="mx-auto mb-2 max-w-2xl text-white/65">
        Use the website for public statistics, the Discord Bot for
        personal features and the Support Server whenever you need help.
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/stats"
          className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/10"
        >
          Open Website
        </Link>

        <Link
          href="/discord/choose"
          className="rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-8 py-4 font-semibold text-[#7CFF00] backdrop-blur-xl transition hover:bg-[#7CFF00]/20"
        >
          Explore Bot
        </Link>
      </div>
    </div>
  </section>
</main>
);
}