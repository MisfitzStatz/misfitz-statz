"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { API_URL } from "@/lib/api";

type Snapshot = { playerId: string; playerName: string; deaths: number; extractions: number; relics: number };
type Payload = { session: { id: string; expiresAt: number; baseline: Snapshot }; snapshot: Snapshot };
type Stored = { sessionId: string; previous: Snapshot; events: string[] };

export default function StreamerOverlayPage() {
  const params = useSearchParams();
  const token = params.get("token") || "";
  const [payload, setPayload] = useState<Payload | null>(null);
  const [stored, setStored] = useState<Stored | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const update = useCallback(async (initial = false) => {
    if (!token) { setError("Overlay token missing."); return; }
    try {
      const response = await fetch(`${API_URL}/api/streamer/overlay?token=${encodeURIComponent(token)}`, { cache: "no-store" });
      const data = await response.json();
      if (response.status === 409 && data.code === "SESSION_EXPIRED" && data.session) {
        const key = `misfitz-stream-${data.session.id}`;
        let saved: Stored | null = null;
        try { const raw = localStorage.getItem(key); saved = raw ? JSON.parse(raw) as Stored : null; } catch { saved = null; }
        setStored(saved);
        setPayload(current => ({
          session: data.session,
          snapshot: current && current.session.id === data.session.id
            ? current.snapshot
            : saved && saved.sessionId === data.session.id
              ? saved.previous
              : data.session.baseline,
        }));
        setError("");
        if (timer.current) clearInterval(timer.current);
        return;
      }
      if (!response.ok || !data.success) throw new Error(data.code || "Overlay not available.");
      const next = data as Payload;
      const key = `misfitz-stream-${next.session.id}`;
      let prior: Stored | null = null;
      try { const raw = localStorage.getItem(key); prior = raw ? JSON.parse(raw) as Stored : null; } catch { prior = null; }
      if (!prior || prior.sessionId !== next.session.id) {
        prior = { sessionId: next.session.id, previous: next.session.baseline, events: [] };
      } else {
        const deaths = Math.max(0, next.snapshot.deaths - prior.previous.deaths);
        const wins = Math.max(0, next.snapshot.extractions - prior.previous.extractions);
        const added = [...Array(Math.min(deaths, 20)).fill("death"), ...Array(Math.min(wins, 20)).fill("win")];
        prior = { sessionId: next.session.id, previous: next.snapshot, events: [...prior.events, ...added].slice(-5) };
      }
      if (initial && prior.previous.playerId !== next.snapshot.playerId) prior = { sessionId: next.session.id, previous: next.session.baseline, events: [] };
      localStorage.setItem(key, JSON.stringify(prior));
      setStored(prior);
      setPayload(next);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connection error.");
    }
  }, [token]);

  useEffect(() => {
    update(true);
    timer.current = setInterval(() => update(false), 5 * 60 * 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [update]);

  const expired = !payload || payload.session.expiresAt <= Date.now();
  const totals = useMemo(() => {
    if (!payload) return { deaths: 0, extractions: 0, relics: 0 };
    const b = payload.session.baseline, s = payload.snapshot;
    return { deaths: Math.max(0, s.deaths - b.deaths), extractions: Math.max(0, s.extractions - b.extractions), relics: Math.max(0, s.relics - b.relics) };
  }, [payload]);

  async function keepTracking() {
    setBusy(true);
    try {
      const response = await fetch(`${API_URL}/api/streamer/overlay/keep-alive`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }) });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.code || "Session could not be extended.");
      await update(true);
    } catch (err) { setError(err instanceof Error ? err.message : "Error."); }
    finally { setBusy(false); }
  }

  if (error && !payload) return <main className="min-h-screen bg-transparent p-3 font-sans text-white"><span>{error}</span></main>;
  if (!payload) return null;
  const events = stored?.events || [];

  return <main className="min-h-screen bg-transparent p-2 font-sans text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
    <div className="inline-flex flex-col gap-1 rounded-md bg-black/25 px-3 py-2">
      <div className="text-lg font-extrabold leading-tight">{payload.snapshot.playerName} <span className="text-sm font-medium opacity-80">({payload.snapshot.playerId})</span></div>
      <div className="flex items-center gap-2" aria-label="Recent matches">{events.map((event, index) => <span key={`${event}-${index}`} className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-black ${event === "death" ? "bg-red-600 text-white" : "bg-emerald-500 text-white"}`}>{event === "death" ? "X" : "O"}</span>)}</div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold"><span>Extractions: {totals.extractions}</span><span>Deaths: {totals.deaths}</span><span>Relics: {totals.relics}</span></div>
      {expired && <button onClick={keepTracking} disabled={busy} className="mt-1 w-fit rounded bg-white px-2 py-1 text-xs font-bold text-black disabled:opacity-50">I'M LIVE / KEEP TRACKING</button>}
      {error && <span className="text-xs text-red-200">{error}</span>}
    </div>
  </main>;
}
