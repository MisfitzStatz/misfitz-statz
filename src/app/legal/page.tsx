export const metadata = {
  title:        "Legal Notice | Misfitz Stats",
  description:  "Legal information regarding Misfitz Stats, intellectual property, content ownership, liability, and contact details.",
};

function LegalSection({
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
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage() {
return (
<main className="mx-auto max-w-7xl px-6 py-16">
  <div className="mb-12">
    <h1 className="mb-4 text-4xl font-bold">Legal Notice</h1>
    <p className="text-sm text-zinc-400">
      Last Updated: 9th June 2026
    </p>

    <p className="mt-6 max-w-2xl text-zinc-300">
      Legal information regarding Misfitz Stats, intellectual property,
      content ownership, liability, copyright notices, and contact
      information.
    </p>
  </div>

  <div className="mb-12 rounded-xl border border-zinc-700 bg-zinc-900/40 p-8">
    <h2 className="mb-6 text-3xl font-bold">
      Website Operator
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <p className="text-sm text-zinc-400">Project</p>
        <p className="font-medium transition text-[#7CFF00]">Misfitz Stats</p>
      </div>

      <div>
        <p className="text-sm text-zinc-400">Operator</p>
        <p className="font-medium transition text-[#7CFF00]">Scharky the Shark</p>
      </div>

      <div>
        <p className="text-sm text-zinc-400">Country</p>
        <p className="font-medium transition text-[#7CFF00]">Germany</p>
      </div>

      <div>
        <p className="text-sm text-zinc-400">Email</p>
        <a href="mailto:scharky.the.shark.official@gmail.com?subject=Misfitz%20Stats%20Inquiry"
            className="font-medium transition text-[#7CFF00]">
          scharky.the.shark.official@gmail.com
        </a>
      </div>

      <div>
        <p className="text-sm text-zinc-400">Discord</p>
        <a
          href="https://discord.com/users/1280882903567568922"
          className="font-medium transition text-[#7CFF00]"
        >
          @scharky_the_shark_official
        </a>
      </div>

      <div>
        <p className="text-sm text-zinc-400">
          Official Discord Server
        </p>
        <a
        href="https://discord.gg/bb9bGA9HW4"
        className="font-medium transition text-[#7CFF00]"
      >
        https://discord.gg/bb9bGA9HW4
      </a>
      </div>
    </div>
  </div>

  <div className="grid gap-20 lg:grid-cols-[260px_1fr]">
    <aside className="sticky top-28 h-fit self-start">
      <div className="border-l border-zinc-800 pl-6">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Table of Contents
        </p>

        <nav className="flex flex-col gap-5 text-sm">
          <a href="#project"        className="hover:text-white">01 About the Project</a>
          <a href="#responsibility" className="hover:text-white">02 Content Responsibility</a>
          <a href="#third-party"    className="hover:text-white">03 Third-Party Services</a>
          <a href="#ip"             className="hover:text-white">04 Intellectual Property</a>
          <a href="#copyright"      className="hover:text-white">05 Copyright</a>
          <a href="#removal"        className="hover:text-white">06 Removal Requests</a>
          <a href="#credits"        className="hover:text-white">07 Credits</a>
          <a href="#contact"        className="hover:text-white">08 Contact</a>
        </nav>
      </div>
    </aside>
    <div className="space-y-24">
      <LegalSection id="project" title="About the Project">
        <p>
          Misfitz Stats is an independent fan-made statistics and
          leaderboard platform for the game Misfitz.
        </p>

        <p>
          Misfitz Stats is not affiliated with, endorsed by,
          sponsored by, or officially associated with Antihero
          Studios.
        </p>

        <p>
          The project is operated as a non-commercial community
          service and is provided free of charge.
        </p>
      </LegalSection>

      <LegalSection
        id="responsibility"
        title="Content Responsibility"
      >
        <p>
          The operator strives to keep information accurate and
          up to date.
        </p>

        <p>
          However, no guarantee is provided regarding the
          accuracy, completeness, reliability, availability, or
          suitability of information displayed on the website.
        </p>

        <p>
          Statistics, rankings, and related information may
          originate from third-party sources and may change
          without notice.
        </p>

        <p>
          Use of the website and its information is at your own
          risk.
        </p>
      </LegalSection>

      <LegalSection
        id="third-party"
        title="External Links and Third-Party Services"
      >
        <p>
          Misfitz Stats may utilize, integrate, or reference
          third-party services including, but not limited to:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Discord</li>
          <li>Cloudflare</li>
          <li>Amazon Web Services (AWS)</li>
          <li>Misfitz API</li>
        </ul>

        <p>
          The operator is not responsible for the content,
          availability, security, or privacy practices of
          third-party services.
        </p>
      </LegalSection>

      <LegalSection
        id="ip"
        title="Intellectual Property Disclaimer"
      >
        <p>
          The Misfitz name, Antihero Studios name, logos,
          trademarks, game assets, artwork, screenshots, and
          related intellectual property belong to their
          respective owners.
        </p>

        <p>
          Their appearance on Misfitz Stats is for
          informational, identification, educational, and
          community purposes only and does not imply any form
          of endorsement, sponsorship, or affiliation.
        </p>

        <p>
          Creator screenshots, videos, profile images,
          promotional material, artwork, and other
          creator-generated content remain the property of
          their respective creators.
        </p>
      </LegalSection>

      <LegalSection id="copyright" title="Copyright">
        <p>
          Unless otherwise stated, content created specifically
          for Misfitz Stats, including website design, branding,
          graphics, layouts, code, and original text, is the
          property of Misfitz Stats.
        </p>

        <p>
          Unauthorized reproduction, redistribution, or
          commercial use may be prohibited without prior
          permission.
        </p>

        <p>
          Game-related content, trademarks, and intellectual
          property remain the property of their respective
          owners.
        </p>
      </LegalSection>

      <LegalSection
        id="removal"
        title="Copyright and Content Removal Requests"
      >
        <p>
          If you believe that content displayed on Misfitz
          Stats infringes your copyright, trademark, ownership,
          or other legal rights, please contact the operator.
        </p>

        <p>
          Requests will be reviewed in good faith and, where
          appropriate, content may be removed, modified, or
          credited accordingly.
        </p>
        <a
          href="mailto:scharky.the.shark.official@gmail.com?subject=Copyright%20Removal%20Request"
          className="transition text-[#7CFF00]"
        >
          Submit a Removal Request
        </a>
      </LegalSection>

      <LegalSection id="credits" title="Credits">
        <p>
          Certain game-related content, creator-generated
          content, and community contributions may be credited
          on the dedicated Credits page where applicable.
        </p>

        <p>
          Misfitz Stats respects the work of developers,
          creators, artists, contributors, and community
          members.
        </p>
        <a
          href="/credits"
          target="_blank"
          className="transition text-[#7CFF00]"
        >
          View credits
        </a>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>
          For legal inquiries, privacy requests, copyright
          concerns, or general questions, please contact the
          operator using the information listed above.
        </p>

        <a href="mailto:scharky.the.shark.official@gmail.com?subject=Misfitz%20Stats%20Inquiry"
            className="font-medium transition text-[#7CFF00]">
          Email: scharky.the.shark.official@gmail.com
        </a>
        <p> </p>
        <a
          href="https://discord.com/users/1280882903567568922"
          className="font-medium transition text-[#7CFF00]"
        >
          Discord: @scharky_the_shark_official
        </a>
      </LegalSection>
    </div>
  </div> 
</main>
);
}