"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const glyphs =
"ᚫᛉᚢᚱᛟᚦᚲᛞᛗᚺᛋᚾ";

export default function NotFound() {

const [symbols, setSymbols] = useState<any[]>([]);

useEffect(() => {

  setSymbols(
    Array.from(
      { length: 200 },
      (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: -200 - Math.random() * 1200,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 12,
        symbol: Array.from(
        {
            length:
            3 +
            Math.floor(
                Math.random() * 4
            )
        },
        () =>
            glyphs[
            Math.floor(
                Math.random() *
                glyphs.length
            )
            ]
        ).join("")
      })
    )
  );

}, []);

if (symbols.length === 0) {
  return null;
}

return ( 
<main className="fixed inset-0 z-[9999] overflow-hidden bg-[#0b1220] text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.12),transparent_35%)]" />
  <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#7CFF00]/10 blur-3xl" />
  <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/10 blur-3xl" />

  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {symbols.map((symbol) => (
      <span
        key={symbol.id}
        className="absolute text-white/10 font-mono text-xl"        
        style={{
          left: `${symbol.left}%`,
          top: `${symbol.top}px`,
          animation: `relic-fall ${symbol.duration}s linear infinite`,
          animationDelay: `${symbol.delay}s`
        }}
      >
        {symbol.symbol}
      </span>
    ))}
  </div>

  <section className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
    <div className="relative">
      <div className="absolute inset-0 bg-[#00D9FF]/20 blur-3xl" />
      <Image
        src="/relic_lost.png"
        alt="Relic"
        width={320}
        height={320}
        className="relative drop-shadow-[0_0_40px_rgba(0,217,255,0.4)]"
        priority
      />
    </div>
    <h1 className="mt-8 text-6xl font-black uppercase tracking-wider md:text-8xl">
      ERROR 404
    </h1>
    <h2 className="mt-4 bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-2xl font-bold uppercase text-transparent md:text-4xl">
      Relic not found
    </h2>

    <p className="mt-6 max-w-2xl text-white/70 text-lg">
      The relic you are searching for could
      not be recovered.
    </p>

    <p className="mt-2 text-white/50">
      Zero may have taken the relic
    </p>

    <Link
      href="/"
      className="mt-10 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10"
    >
      Return Home
    </Link>
  </section>
</main>
);
}
