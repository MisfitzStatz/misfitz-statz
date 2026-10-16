"use client";

import StatsSearch from "./components/StatsSearch";
import Overview from "./components/overview/Overview";
import Heroes from "./components/heroes/Heroes";
import MatchStats from "./components/matchstats/MatchStats";
import Relics from "./components/relics/Relics";
import Gears from "./components/gears/Gears";

import { useStats } from "./hooks/useStats";
import { useEffect, useRef } from "react";

export default function StatsPage() {
  const { data, loading, error, searchPlayer } = useStats();
  const hashSearchStarted = useRef(false);

  useEffect(() => {
    if (hashSearchStarted.current) return;

    const hash = window.location.hash;

    if (!hash) return;

    const playerId = decodeURIComponent(hash.slice(1)).trim();

    if (!/^[A-Za-z0-9]{9,12}$/.test(playerId)) {
      return;
    }

    hashSearchStarted.current = true;

    void searchPlayer(playerId);
  }, [searchPlayer]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white select-none">
      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-8 text-center sm:px-6 sm:py-10">
        <div className="relative w-full">
          <h1 className="relative z-10 mb-10 whitespace-nowrap text-4xl font-black uppercase tracking-wider leading-tight sm:text-5xl md:text-6xl">
            <span className="text-white">MISFITZ </span>

            <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
              STATZ
            </span>
          </h1>

          <StatsSearch
            onSearch={searchPlayer}
            loading={loading}
          />

          {error && (
            <div className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-300">
              {error}
            </div>
          )}

          {data && !loading && !error && (
            <Overview data={data} />
          )}

          {data && !loading && !error && (
            <Heroes data={data} />
          )}

          {data && !loading && !error && (
            <MatchStats data={data} />
          )}

          {data && !loading && !error && (
            <Relics data={data} />
          )}

          {data && !loading && !error && (
            <Gears data={data} />
          )}
        </div>
      </section>
    </main>
  );
}
