import Link from "next/link";
import Image from "next/image";

type FeatureStatus = "available" | "development" | "unavailable";

type Comparison = {
  feature: string;
  personal: FeatureStatus;
  community: FeatureStatus;
  communityPlus: FeatureStatus;
};

const comparisons: Comparison[] = [
  {
    feature: "Direct Messages",
    personal: "available",
    community: "unavailable",
    communityPlus: "unavailable",
  },
  {
    feature: "Server Installation",
    personal: "unavailable",
    community: "available",
    communityPlus: "available",
  },
  {
    feature: "Account Verification",
    personal: "available",
    community: "available",
    communityPlus: "available",
  },
  {
    feature: "Personal Tracking",
    personal: "available",
    community: "available",
    communityPlus: "available",
  },
  {
    feature: "View Server Members Stats",
    personal: "unavailable",
    community: "available",
    communityPlus: "available",
  },
  {
    feature: "Moderation",
    personal: "unavailable",
    community: "unavailable",
    communityPlus: "available",
  },
  {
    feature: "SecurityCore",
    personal: "unavailable",
    community: "unavailable",
    communityPlus: "available",
  },
  {
    feature: "Scam Detection",
    personal: "unavailable",
    community: "unavailable",
    communityPlus: "available",
  },
  {
    feature: "Custom AutoMod",
    personal: "unavailable",
    community: "unavailable",
    communityPlus: "development",
  },
  {
    feature: "Server Leaderboards",
    personal: "unavailable",
    community: "development",
    communityPlus: "development",
  },
  {
    feature: "Early Access Features",
    personal: "available",
    community: "unavailable",
    communityPlus: "unavailable",
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
  development: {
    label: "In development",
    icon: "/goldenGoose.png",
    className: "text-yellow-300",
  },
  unavailable: {
    label: "Not available",
    icon: "/images/cross.png",
    className: "text-white/35",
  },
};

function StatusIcon({ status }: { status: FeatureStatus }) {
  const config = statusConfig[status];

return (
<div
  className={`flex items-center justify-center gap-2 text-sm font-medium ${config.className}`}
>
  {config.icon ? (
    <Image
      src={config.icon}
      alt=""
      width={22}
      height={22}
      className={status === "unavailable" ? "opacity-40" : ""}
    />
  ) : (
    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
  )}

  <span className="hidden lg:inline">{config.label}</span>
</div>
);
}

export default function DiscordComparePage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
  <section className="relative mx-auto max-w-6xl px-6 pt-12 text-center">
    <h1 className="mb-6 text-5xl font-black uppercase md:text-6xl">
      PRIVATE BOT
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        OR SERVER BOT
      </span>
    </h1>

    <p className="mx-auto max-w-3xl text-lg text-white/70">
      Every version has a different purpose. Compare the available
      features and choose the bot that fits your needs.
    </p>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-12">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="grid grid-cols-4 border-b border-white/10 p-6 font-bold">
        <div>Feature</div>
        <div className="text-center">Personal Bot</div>
        <div className="text-center">Community Bot</div>
        <div className="text-center">Community Bot +</div>
      </div>

      {comparisons.map((item) => (
        <div
          key={item.feature}
          className="grid grid-cols-4 border-b border-white/5 p-5 last:border-0"
        >
          <div className="font-medium">{item.feature}</div>

          <div className="flex justify-center">
            <StatusIcon status={item.personal} />
          </div>

          <div className="flex justify-center">
            <StatusIcon status={item.community} />
          </div>

          <div className="flex justify-center">
            <StatusIcon status={item.communityPlus} />
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 pb-10">
    <h2 className="mb-10 text-center text-2xl font-bold">
      Choose the bot that fits your needs
    </h2>

    <div className="grid gap-6 lg:grid-cols-3">
      <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold">Personal Bot</h3>

        <p className="text-white/70">
          Perfect if you are interested in your personal statistics.
          Manage your Misfitz Statz account directly from Discord.
        </p>

        <div className="mt-auto pt-6">
          <Link
            href="/discord/userBot"
            className="inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10"
          >
            Install Personal Bot
          </Link>
        </div>
      </div>

      <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold">Community Bot</h3>

        <p className="text-white/70">
          Built for active communities. Bring your players together,
          compare statistics and compete through server features.
        </p>

        <div className="mt-auto pt-6">
          <Link
            href="/discord/communityBot"
            className="inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-[#7CFF00] hover:bg-[#7CFF00]/10"
          >
            Install Community Bot
          </Link>
        </div>
      </div>

      <div className="flex h-full flex-col rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold text-[#7CFF00]">
          Community Bot +
        </h3>
        <p className="text-white/70">
          The Community Bot upgraded with advanced moderation, security
          features and scam protection.
        </p>

        <div className="mt-auto pt-6">
          <Link
            href="/discord/communityBotPlus"
            className="inline-flex w-full justify-center rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-6 py-3 font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
          >
            Install Community Bot +
          </Link>
        </div>
      </div>
    </div>
  </section>

  <section className="relative mx-auto max-w-4xl px-2 pb-8">
    <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl sm:flex-row">
      <div>
        <h2 className="text-lg font-bold">
          Need a custom Statz Bot?
        </h2>
        <p className="mt-1 text-sm text-white/55">
          Contact us for custom setups and specialized community features.
        </p>
      </div>

      <Link
        href="https://discord.com/invite/bb9bGA9HW4"
        className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold transition hover:border-[#7CFF00]/40 hover:bg-[#7CFF00]/10"
      >
        Contact us
      </Link>
    </div>
  </section>
</main>
);
}