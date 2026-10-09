export const metadata = {
  title: "Legal Notice | MisfitzStatz",
  description:
    "Legal information regarding MisfitzStatz, intellectual property, content ownership, liability, and contact details.",
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
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Legal Notice</h1>

        <p className="text-sm text-zinc-400">
          Last Updated: 9th October 2026
        </p>

        <p className="mt-6 max-w-2xl text-zinc-300">
          Legal information regarding MisfitzStatz, intellectual property,
          content ownership, liability, copyright notices, and contact
          information.
        </p>
      </div>

      <div className="mb-12 rounded-xl border border-zinc-700 bg-zinc-900/40 p-8">
        <h2 className="mb-6 text-3xl font-bold">Website Operator</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-400">Project</p>
            <p className="font-medium transition text-[#7CFF00]">
              MisfitzStatz
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Operator</p>
            <p className="font-medium transition text-[#7CFF00]">
              Scharky the Shark
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Country</p>
            <p className="font-medium transition text-[#7CFF00]">
              Germany
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Email</p>
            <a
              href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Inquiry"
              className="font-medium transition text-[#7CFF00]"
            >
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

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <aside className="relative h-fit self-start lg:sticky lg:top-28">
          <div className="border-l border-zinc-800 pl-4 sm:pl-6">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:mb-8 sm:tracking-[0.35em]">
              Table of Contents
            </p>

            <nav className="flex flex-col gap-3 text-sm sm:gap-4 lg:gap-5">
              <a href="#project" className="hover:text-white">
                01 About the Project
              </a>

              <a href="#api" className="hover:text-white">
                02 Game API and Technical Access
              </a>

              <a href="#relationship" className="hover:text-white">
                03 Relationship with Antihero Studios
              </a>

              <a href="#responsibility" className="hover:text-white">
                04 Content Responsibility
              </a>

              <a href="#third-party" className="hover:text-white">
                05 External Links and Third-Party Services
              </a>

              <a href="#ip" className="hover:text-white">
                06 Intellectual Property
              </a>

              <a href="#design" className="hover:text-white">
                07 Website Design and Recreation
              </a>

              <a href="#copyright" className="hover:text-white">
                08 Copyright
              </a>

              <a href="#removal" className="hover:text-white">
                09 Removal Requests
              </a>

              <a href="#credits" className="hover:text-white">
                10 Credits
              </a>

              <a href="#contact" className="hover:text-white">
                11 Contact
              </a>
            </nav>
          </div>
        </aside>

        <div className="space-y-14 sm:space-y-20 lg:space-y-24">
          <LegalSection
            id="project"
            title="About the Project"
          >
            <p>
              MisfitzStatz is an independently operated community
              statistics and leaderboard platform for the game
              Misfitz.
            </p>

            <p>
              MisfitzStatz is operated by Scharky the Shark and
              provides statistics, leaderboards, player profiles,
              account linking, achievements, historical data, and
              other community-focused features.
            </p>

            <p>
              MisfitzStatz is provided free of charge and is
              independently operated.
            </p>
          </LegalSection>

          <LegalSection
            id="api"
            title="Game API and Technical Access"
          >
            <p>
              MisfitzStatz currently has exclusive access to the
              Misfitz Game API for the operation and development
              of the platform.
            </p>

            <p>
              The Misfitz Game API provides the underlying game
              data used by MisfitzStatz. MisfitzStatz processes,
              combines, calculates, organizes, archives, and
              presents this data through its own infrastructure
              and services.
            </p>

            <p>
              The Game API is not a publicly available API.
              Unauthorized access, use, extraction, or attempts to
              circumvent technical access controls are prohibited.
            </p>

            <p>
              Access to the MisfitzStatz API is separately
              controlled by MisfitzStatz and requires explicit
              permission from the operator.
            </p>
          </LegalSection>

          <LegalSection
            id="relationship"
            title="Relationship with Antihero Studios"
          >
            <p>
              MisfitzStatz is independently operated and is not
              owned or operated by Antihero Studios.
            </p>

            <p>
              Antihero Studios is the developer and rights holder
              associated with the Misfitz game and its related
              intellectual property. Game data used by MisfitzStatz
              originates from the Misfitz API.
            </p>

            <p>
              The operator of MisfitzStatz is an established member
              of the Misfitz community and has an ongoing role
              within the community surrounding the game.
            </p>

            <p>
              The operator is acknowledged by the Misfitz
              development team in the game's credits and
              participates in the official Misfitz Discord
              community and technical tests when invited.
            </p>

            <p>
              These community and technical roles do not mean that
              MisfitzStatz itself is operated or owned by
              Antihero Studios.
            </p>
          </LegalSection>

          <LegalSection
            id="responsibility"
            title="Content Responsibility"
          >
            <p>
              The operator strives to keep information displayed
              by MisfitzStatz accurate and up to date.
            </p>

            <p>
              However, no guarantee is provided regarding the
              accuracy, completeness, reliability, availability,
              or suitability of information displayed on the
              website.
            </p>

            <p>
              Statistics, rankings, player information, and
              related data may originate from Misfitz Game API
              or other sources and may change without notice.
            </p>

            <p>
              MisfitzStatz does not control the underlying game
              data and cannot directly modify or correct data
              stored by the Misfitz.
            </p>

            <p>
              Use of the website and its information is at the
              user's own risk.
            </p>
          </LegalSection>

          <LegalSection
            id="third-party"
            title="External Links and Third-Party Services"
          >
            <p>
              MisfitzStatz may utilize, integrate, or reference
              third-party services including, but not limited to:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Discord</li>
              <li>Cloudflare</li>
              <li>Amazon Web Services (AWS)</li>
              <li>Misfitz Game API</li>
            </ul>

            <p>
              The operator is not responsible for the content,
              availability, security, or privacy practices of
              third-party services.
            </p>

            <p>
              Third-party services remain subject to their own
              terms, policies, and conditions.
            </p>
          </LegalSection>

          <LegalSection
            id="ip"
            title="Intellectual Property"
          >
            <p>
              The Misfitz name, Antihero Studios name, logos,
              trademarks, game assets, artwork, screenshots, and
              other game-related intellectual property belong to
              their respective rights holders.
            </p>

            <p>
              Their appearance on MisfitzStatz is for
              informational, identification, educational, and
              community purposes and does not by itself imply
              ownership or operation of those materials by
              MisfitzStatz.
            </p>

            <p>
              MisfitzStatz-specific website design, branding,
              layouts, original graphics, original text, and
              original software are created and maintained for the
              MisfitzStatz project and may not be reproduced or
              commercially reused without permission where
              applicable.
            </p>
          </LegalSection>

          <LegalSection
            id="design"
            title="Website Design and Recreation"
          >
            <p>
              The general concept of creating a statistics or
              leaderboard platform is not claimed as exclusive by
              MisfitzStatz.
            </p>

            <p>
              A private recreation or implementation of the
              general structure or design of MisfitzStatz for
              personal learning, experimentation, or development
              purposes is permitted.
            </p>

            <p>
              However, creating, publishing, or operating a
              substantially identical copy of the MisfitzStatz
              website or design with the purpose of copying,
              impersonating, replacing, or presenting itself as
              MisfitzStatz is not permitted without prior
              permission.
            </p>

            <p>
              In particular, the MisfitzStatz website may not be
              reproduced 1:1 or presented in a manner intended to
              make another project appear to be the official
              MisfitzStatz platform.
            </p>

            <p>
              A private development project that recreates parts
              of the structure or visual design solely for
              learning or experimentation does not by itself
              constitute a prohibited use.
            </p>

            <p>
              Use of the MisfitzStatz API is not granted by this
              permission. API access always requires explicit
              authorization from the operator.
            </p>
          </LegalSection>

          <LegalSection
            id="copyright"
            title="Copyright"
          >
            <p>
              Unless otherwise stated, content created
              specifically for MisfitzStatz, including website
              design, branding, graphics, layouts, code, and
              original text, is maintained as part of the
              MisfitzStatz project and may not be reproduced,
              redistributed, or commercially reused without
              permission where applicable.
            </p>

            <p>
              Game-related content, trademarks, artwork, assets,
              and other intellectual property originating from
              Misfitz or Antihero Studios remain the property of
              their respective rights holders.
            </p>

            <p>
              Creator screenshots, videos, profile images,
              promotional material, artwork, and other
              creator-generated content remain the property of
              their respective creators.
            </p>
          </LegalSection>

          <LegalSection
            id="removal"
            title="Copyright and Content Removal Requests"
          >
            <p>
              If you believe that content displayed on MisfitzStatz
              infringes your copyright, trademark, ownership, or
              other legal rights, please contact the operator.
            </p>

            <p>
              Requests will be reviewed in good faith and, where
              appropriate, content may be removed, modified, or
              credited accordingly.
            </p>

            <p>
              Player IDs contained in historical MisfitzStatz
              leaderboards may also be requested for removal.
              Such requests can be submitted through the official
              MisfitzStatz support server or by email.
            </p>

            <a
              href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Removal%20Request"
              className="transition text-[#7CFF00]"
            >
              Submit a Removal Request
            </a>
          </LegalSection>

          <LegalSection
            id="credits"
            title="Credits"
          >
            <p>
              MisfitzStatz respects the work of the Misfitz
              development team, developers, creators, artists,
              contributors, and community members.
            </p>

            <p>
              The operator of MisfitzStatz is acknowledged as
              "Scharky" in the Special Thanks section of the
              game Misfitz.
            </p>

            <p>
              Additional game-related content, creator-generated
              content, and community contributions may be credited
              on the dedicated MisfitzStatz Credits page where
              applicable.
            </p>

            <a
              href="/credits"
              target="_blank"
              rel="noopener noreferrer"
              className="transition text-[#7CFF00]"
            >
              View MisfitzStatz Credits
            </a>
          </LegalSection>

          <LegalSection
            id="contact"
            title="Contact"
          >
            <p>
              For legal inquiries, privacy requests, copyright
              concerns, historical leaderboard removal requests,
              API permission requests, or general questions,
              please contact the operator using the information
              below.
            </p>

            <a
              href="mailto:scharky.the.shark.official@gmail.com?subject=MisfitzStatz%20Inquiry"
              className="font-medium transition text-[#7CFF00]"
            >
              Email: scharky.the.shark.official@gmail.com
            </a>

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
          </LegalSection>
        </div>
      </div>
    </main>
  );
}