export default function Footer() {
return (
<footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
  {/* ================= Desktop / Tablet ================= */}
  <div className="hidden w-full items-center justify-between gap-3 px-6 py-4 text-left md:flex lg:px-12">
    <div>
      <p className="text-lg font-bold text-[#7CFF00]">
        MISFITZ STATZ
      </p>
      <p className="mt-2 text-sm text-white/45">
        Not owned or affiliated with Antihero Studios
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
      <a
        href="/settings"
        className="hide-under-1050 transition hover:text-[#7CFF00]"
      >
        Settings
      </a>
      <a
        href="https://www.antiherostudios.com/en?creatorCode=SCHARKY"
        target="_blank"
        rel="noopener noreferrer"
        className="hide-under-1050 transition hover:text-[#7CFF00]"
      >
        Register for Playtests
      </a>
      <a
        href="https://discord.gg/bb9bGA9HW4"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-[#7CFF00]"
      >
        Support Server
      </a>
      <a
        href="/status"
        className="transition hover:text-[#7CFF00]"
      >
        Status
      </a>
      <a
        href="/privacy"
        className="transition hover:text-[#7CFF00]"
      >
        Privacy Policy
      </a>
      <a
        href="/terms"
        className="transition hover:text-[#7CFF00]"
      >
        Terms
      </a>
      <a
        href="/legal"
        className="transition hover:text-[#7CFF00]"
      >
        Legal
      </a>
    </div>
  </div>

  {/* ================= Smartphone ================= */}
  <div className="px-6 py-6 text-center md:hidden">
    <p className="text-lg font-bold text-[#7CFF00]">
      MISFITZ STATZ
    </p>
    <p className="mt-2 text-sm text-white/45">
      Community-made for Misfitz players
    </p>

    <div className="mt-6 flex flex-col gap-4 text-sm">
      <a
        href="https://discord.gg/bb9bGA9HW4"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/10 bg-white/5 py-3 transition hover:bg-white/10"
      >
        Support Server
      </a>
      <div className="flex justify-center gap-6 text-white/60">
        <a href="/settings" className="transition hover:text-[#7CFF00]">
          Settings
        </a>
        <a href="/privacy" className="transition hover:text-[#7CFF00]">
          Privacy
        </a>
        <a href="/terms" className="transition hover:text-[#7CFF00]">
          Terms
        </a>
        <a href="/legal" className="transition hover:text-[#7CFF00]">
          Legal
        </a>
      </div>
      <p className="pt-2 text-xs text-white/35">
        © 2026 Misfitz Statz
      </p>
    </div>
  </div>
</footer>
);
}