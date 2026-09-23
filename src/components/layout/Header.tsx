"use client";

import { useEffect, useRef, useState } from "react";
import LoginModal from "../LoginModal";
import { useAuth } from "@/lib/AuthContext";

export default function Header() {
  const { loggedIn, clearAuth } = useAuth();
  const [authDebug, setAuthDebug] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(true);
  const desktopNavRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const media = window.matchMedia("(hover: hover) and (pointer: fine)");
  const update = () => {setCanHover(media.matches)};
  update();
  media.addEventListener("change", update);
  return () => media.removeEventListener("change", update);
}, []);

useEffect(() => {
  const handleClick = (event: MouseEvent) => {
    if (
      desktopNavRef.current &&
      !desktopNavRef.current.contains(event.target as Node)
    ) {
      setDesktopDropdown(null);
    }
  };
  document.addEventListener("mousedown", handleClick);
  return () => document.removeEventListener("mousedown", handleClick);
}, []);

const handleLogout = async () => {
  await fetch("/api/auth/logout", {
    credentials: "include",
    cache: "no-store"
  });

  clearAuth();
  setMenuOpen(false);
};

const mobileNavigation = [
  {
    title: "Stats",
    href: "/stats",
    items: [],
  },
  {
    title: "Leaderboards",
    items: [
      { label: "Top Relic Extractor", href: "/leaderboards/relics" },
      { label: "Most Killers",        href: "/leaderboards/kills" },
      { label: "Most Deaths",         href: "/leaderboards/deaths" },
      { label: "Highest Playtime",    href: "/leaderboards/playtime" },
    ],
  },
  {
    title: "Game",
    items: [
      {label: "Characters",   href: "/game/misfits"},
      { label: "Meta Stats",  href: "/game/meta" },
      {label: "Relics",       href: "https://misfitz.fandom.com/wiki/Relics"},
      {label: "Map",          href: "https://misfitz.fandom.com/wiki/Zero_City"},
      {label: "Sneak Peeks",  href: "/game/sneak-peeks"},
    ],
  },
  {
    title: "Version",
    items: [
      {label: "Antihero Studios", href: "/version/antiherostudios",},
      {label: "Game",             href: "/version/game"},
      {label: "Discord Bot",      href: "/version/discord"} ,
      {label: "Website",          href: "/version/website",},
    ],
  },
  {
    title: "Discord Bot",
    href: "/discord",
    items: [],
  },
];

const navigation = [
  {
    title: "Discord Bot",
    color: "#00D9FF",
    href: "/discord",
    items: [],
  },
  {
    title: "Game",
    color: "#7CFF00",
    items: [
      { label: "Characters",  href: "/game/misfits" },
      { label: "Meta Stats",  href: "/game/meta" },
      { label: "Relics",      href: "https://misfitz.fandom.com/wiki/Relics" },
      { label: "Map",         href: "https://misfitz.fandom.com/wiki/Zero_City" },
      { label: "Sneak Peeks", href: "/game/sneak-peeks" },
    ],
  },
  {
    title: "Version",
    color: "#7CFF00",
    items: [
      { label: "Antihero Studios",    href: "/version/antiherostudios" },
      { label: "Game",                href: "/version/game" },
      { label: "Discord Bot",         href: "/version/discord" },
      { label: "Misfitz Statz Page",  href: "/version/website" },
    ],
  },
  {
    title: "Leaderboards",
    color: "#00D9FF",
    items: [
      { label: "Top Relic Extractor", href: "/leaderboards/relics" },
      { label: "Most Killers",        href: "/leaderboards/kills" },
      { label: "Most Deaths",         href: "/leaderboards/deaths" },
      { label: "Highest Playtime",    href: "/leaderboards/playtime" },
    ],
  },
  {
    title: "Stats",
    href: "/stats",
    items: [],
  },
];



return (
<>
<header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">      
  {authDebug && (
    <pre className="fixed bottom-4 left-4 z-[99999] max-w-[90vw] rounded-xl bg-black p-4 text-xs text-white">
      {authDebug}
    </pre>
  )}
  <div className="relative flex w-full items-center px-6 py-3 lg:px-12">
    <div className="flex items-center gap-4">
      <img
        src="/logo.png"
        alt="Misfitz Logo"
        className="h-12 w-auto drop-shadow-[0_0_18px_rgba(124,255,0,0.45)]"
      />

      <div className="hide-under-1050">
        <p className="text-xl font-black tracking-widest text-[#7CFF00]">
          STATS TRACKER
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          The only working tracker
        </p>
      </div>
    </div>

    <nav
        ref={desktopNavRef}
        className="ml-auto mr-4 hidden items-center gap-8 xl:flex"
      >          
      {navigation.map((section) => {
        if (section.items.length === 0) {
          return (
            <a
              key={section.title}
              href={section.href}
              className="transition hover:text-[#7CFF00]"
            >
              {section.title}
            </a>
          );
        }

        return (
            <div
              key={section.title}
              className="relative"
              onMouseEnter={() => {if (canHover) {setDesktopDropdown(section.title)}}}
              onMouseLeave={() => {if (canHover) {setDesktopDropdown(null)}}}
            >
            <button
              onClick={() => {if (!canHover) {setDesktopDropdown(desktopDropdown === section.title ? null : section.title)}}}
              className="transition"
              style={{color: desktopDropdown === section.title ? section.color : undefined}}
            >
              {section.title}
            </button>

            {desktopDropdown === section.title && (
              <div className="absolute top-full pt-3 min-w-[240px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl">
                {section.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>

    {mobileMenuOpen && (
      <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#111827]/95 backdrop-blur-xl xl:hidden">
        <div className="p-4">
          {mobileNavigation.map((section) => (
            <div
              key={section.title}
              className="border-b border-white/5 last:border-0"
            >
              {section.items.length === 0 ? (
                <a
                  href={section.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-semibold text-[#7CFF00] transition hover:bg-white/5"
                >
                  {section.title}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold transition hover:bg-white/5"
                  >
                    <span>{section.title}</span>
                    <span className="text-white/60">
                      {expandedSection === section.title ? "−" : "+"}
                    </span>
                  </button>

                  {expandedSection === section.title && (
                    <div className="pb-2">
                      {section.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="ml-4 block rounded-xl px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    )}

    <div className="ml-auto flex items-center gap-3 xl:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
        aria-label="Open navigation"
      >
        {mobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {!loggedIn ? (
        <button
          onClick={() => setShowLoginModal(true)}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
        >
          Sign In
        </button>
      ) : (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
          >
            Account
          </button>
          {menuOpen && (
            <div className="absolute right-6 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-[#111827]/95 p-2 shadow-2xl backdrop-blur-xl">
              <a
                href="/settings"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-white/5"
              >
                Settings
              </a>
              <a
                href="/verification"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-white/5"
              >
                Verification
              </a>
              <a
                href="/redeem"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-white/5"
              >
                Redeem a Code
              </a>
              <button
                onClick={handleLogout}
                className="mt-2 w-full rounded-xl px-3 py-2 text-left text-red-400 hover:bg-red-500/10"
              >
                Logout
              </button>
            </div>
          )}
        </>
      )}
    </div>

    <div className="relative ml-8 hidden xl:block">
              {!loggedIn ? (
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setShowLoginModal(true);
            }}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
          >
            Sign In
          </button> 
            ) : (
              <>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
        >
          Account
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#111827]/95 p-2 shadow-2xl backdrop-blur-xl">
            <a
              href="/settings"
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
            >
              Settings
            </a>
            <a
              href="/verification"
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
            >
              Verification
            </a>
            <a
              href="/redeem"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
            >
              Redeem a Code
            </a>
            <button
              onClick={handleLogout}
              className="mt-2 w-full rounded-xl px-3 py-2 text-left text-red-400 hover:bg-red-500/10"
            >
              Logout
            </button>
          </div>
        )}
      </>
    )}
    </div>
  </div>
</header>
<LoginModal
  isOpen={showLoginModal}
  onClose={() => setShowLoginModal(false)}
/>
</>
);
}