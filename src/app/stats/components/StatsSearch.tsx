"use client";

import { FormEvent, useRef, useState } from "react";
import RecentSearches from "./RecentSearches";

interface StatsSearchProps {
  onSearch: (playerId: string) => void;
  loading?: boolean;
}

export default function StatsSearch({
  onSearch,
  loading = false,
}: StatsSearchProps) {
  const [playerId, setPlayerId] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const isValidPlayerId = /^[A-Za-z0-9]{9,12}$/.test(playerId);

  const handleInputChange = (value: string) => {
    const cleaned = value
      .replace(/[^A-Za-z0-9]/g, "")
      .slice(0, 12);

    setPlayerId(cleaned);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();

      const cleaned = text
        .replace(/[^A-Za-z0-9]/g, "")
        .slice(0, 12);

      setPlayerId(cleaned);

      inputRef.current?.focus();
    } catch {
      inputRef.current?.focus();
    }
  };

  const handleInputFocus = () => {
    if (playerId.length > 0) {
      requestAnimationFrame(() => {
        inputRef.current?.select();
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidPlayerId || loading) {
      return;
    }

    onSearch(playerId);
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <h2 className="mb-4 text-lg font-semibold text-white/80 md:text-xl">
        Search for a player
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3"
      >
        {/* Search row */}
        <div className="flex w-full items-center gap-3">
          {/* Guide */}
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl font-bold text-white transition hover:bg-white/10"
            title="How to find your Player ID"
            aria-label="How to find your Player ID"
          >
            ?
          </button>

          {/* Mobile input */}
          <div className="relative flex min-w-0 flex-1 md:hidden">
            <input
              ref={inputRef}
              type="text"
              value={playerId}
              onChange={(event) =>
                handleInputChange(event.target.value)
              }
              onFocus={handleInputFocus}
              placeholder="Enter Player ID..."
              maxLength={12}
              autoComplete="off"
              spellCheck={false}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 pr-24 text-base text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-[#00D9FF]/60 focus:bg-white/10"
            />

            {!isValidPlayerId ? (
              <button
                type="button"
                onClick={handlePaste}
                className="absolute right-2 top-2 h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white/60 transition hover:bg-white/10 hover:text-white"
                title="Paste Player ID"
              >
                Paste
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 h-10 rounded-xl border border-[#00D9FF]/30 bg-[#00D9FF]/10 px-3 text-sm font-semibold text-white transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-white/30"
              >
                {loading ? "..." : "Search"}
              </button>
            )}
          </div>

          {/* Desktop / Tablet input */}
          <div className="relative hidden w-full flex-1 md:flex">
            <input
              ref={inputRef}
              type="text"
              value={playerId}
              onChange={(event) =>
                handleInputChange(event.target.value)
              }
              onFocus={handleInputFocus}
              placeholder="Enter Player ID..."
              maxLength={12}
              autoComplete="off"
              spellCheck={false}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 pr-24 text-base text-white outline-none backdrop-blur-xl transition placeholder:text-white/35 focus:border-[#00D9FF]/60 focus:bg-white/10"
            />

            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-2 top-2 h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white/60 transition hover:bg-white/10 hover:text-white"
              title="Paste Player ID"
            >
              Paste
            </button>
          </div>

          {/* Desktop / Tablet Search */}
          <button
            type="submit"
            disabled={!isValidPlayerId || loading}
            className="hidden h-14 w-full rounded-2xl border border-[#00D9FF]/30 bg-[#00D9FF]/10 px-8 font-semibold text-white transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-white/30 sm:w-auto md:block"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </form>

      <RecentSearches
        onSelect={(playerId) => {
          setPlayerId(playerId);
          onSearch(playerId);
        }}
      />

      {playerId.length > 0 && !isValidPlayerId && (
        <p className="mt-3 text-sm text-white/40">
          Player ID must contain 9–12 letters or numbers.
        </p>
      )}

      {showGuide && (
        <div className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-left">
          <h2 className="mb-4 text-lg font-bold text-cyan-300">
            How To Find Your Player ID
          </h2>

          <div className="space-y-2 text-white/70">
            <p>1. Open Misfitz</p>
            <p>2. Open Settings</p>
            <p>3. Copy your Player ID</p>
            <p>4. Paste it above</p>
          </div>
        </div>
      )}
    </div>
  );
}