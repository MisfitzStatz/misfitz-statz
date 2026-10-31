"use client";

import { useCallback, useEffect, useState } from "react";
import { API_URL } from "@/lib/api";
import { authFetch } from "@/lib/auth";
import { useAuth } from "@/lib/AuthContext";

type Status = {
  eligible: boolean;
  reason: string | null;
  playerId: string | null;
  tokenExists: boolean;
  session: { id: string; startedAt: number; expiresAt: number; expired?: boolean } | null;
};

const reasonText: Record<string, string> = {
  CREATOR_BADGE_REQUIRED: "Not eligible. You must have the Misfitz Creator Badge to use the Streamer Tool.",
  DEFAULT_STATS_ACCOUNT_REQUIRED: "Please set up a verified, public Default Stats account under Settings first.",
  PLAYER_UNAVAILABLE: "Your selected player account is currently unavailable.",
};

export default function StreamerPage() {
  const { loggedIn, account, loading } = useAuth();
  const [status, setStatus] = useState<Status | null>(null);
  const [overlayUrl, setOverlayUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const refresh = useCallback(async () => {
    const response = await authFetch(`${API_URL}/api/streamer/status`);
    if (!response.ok) throw new Error("Streamer-Status konnte nicht geladen werden.");
    const data = await response.json();
    setStatus(data);
  }, []);

  useEffect(() => {
    if (!loading && loggedIn) refresh().catch(error => setMessage(error.message));
  }, [loading, loggedIn, refresh]);

  async function action(path: string, body?: unknown) {
    setBusy(true);
    setMessage("");
    try {
      const response = await authFetch(`${API_URL}/api/streamer/${path}`, {
        method: "POST",
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.code || "Aktion fehlgeschlagen.");
      if (data.url) setOverlayUrl(data.url);
      if (path === "token") setMessage("Overlay-URL erstellt. Eine neue URL widerruft die bisherige.");
      else if (path === "start") setMessage("Tracking gestartet. Alle Stream-Zähler beginnen bei 0.");
      else if (path === "stop") setMessage("Tracking beendet. Die Session wurde gelöscht.");
      else setMessage("Session um zwei Stunden verlängert.");
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unbekannter Fehler.");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <main className="mx-auto max-w-4xl px-6 py-16 text-white">Loading...</main>;
  if (!loggedIn) return <main className="mx-auto max-w-4xl px-6 py-16 text-white"><h1 className="text-3xl font-black">Streamer Tool</h1><p className="mt-4 text-white/60">Melde dich mit Discord an, um das Streamer Tool zu verwalten.</p></main>;

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 text-white">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Misfitz Statz</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-wide">Streamer Tool</h1>
      <p className="mt-3 max-w-2xl text-white/60">OBS-Overlay für deine aktuelle Misfitz-Session. Das Tool verwendet deinen Default-Stats-Account. Default Stats selbst bleibt für alle Nutzer verfügbar.</p>

      {account?.isDevAccount ? <div className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/10 p-5 text-amber-100">Das Streamer Tool ist im Dev Mode absichtlich deaktiviert.</div> : null}
      {!account?.isDevAccount && status && !status.eligible ? <div className="mt-8 rounded-xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">{reasonText[status.reason || ""] || "Streamer Tool nicht verfügbar."}</div> : null}

      {status?.eligible && <div className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-xs uppercase tracking-widest text-white/45">Verknüpfter Stats-Account</p><p className="mt-1 text-xl font-bold">{status.playerId}</p></div>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${status.session ? "bg-emerald-400/15 text-emerald-300" : "bg-white/10 text-white/60"}`}>{status.session ? (status.session.expired ? "BESTÄTIGUNG ERFORDERLICH" : "TRACKING AKTIV") : "NICHT AKTIV"}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {!status.tokenExists ? <button disabled={busy} onClick={() => action("token")} className="rounded-lg bg-cyan-300 px-5 py-3 font-bold text-slate-950 disabled:opacity-50">Create Overlay URL</button> : <button disabled={busy} onClick={() => action("token")} className="rounded-lg border border-white/20 px-5 py-3 font-bold disabled:opacity-50">Regenerate URL</button>}
          <button disabled={busy || !status.tokenExists || !!status.session} onClick={() => action("start")} className="rounded-lg bg-emerald-400 px-5 py-3 font-bold text-slate-950 disabled:opacity-40">START</button>
          <button disabled={busy || !status.session} onClick={() => { if (window.confirm("Aktuelle Session wirklich beenden und löschen?")) action("stop"); }} className="rounded-lg border border-red-400/40 px-5 py-3 font-bold text-red-300 disabled:opacity-40">STOP</button>
          <button disabled={busy || !status.session} onClick={() => { if (window.confirm("Neue Session starten? Die aktuellen Stream-Zähler werden zurückgesetzt.")) action("start"); }} className="rounded-lg border border-white/20 px-5 py-3 font-bold disabled:opacity-40">RESTART</button>
          <button disabled={busy || !status.session} onClick={() => action("keep-alive")} className="rounded-lg border border-cyan-300/40 px-5 py-3 font-bold text-cyan-200 disabled:opacity-40">I'M LIVE / KEEP TRACKING</button>
        </div>
        {status.session && <p className="text-sm text-white/50">{status.session.expired ? "Session ist abgelaufen. Bestätige, wenn du weiter streamst." : `Session läuft bis ${new Date(status.session.expiresAt).toLocaleString()}.`}</p>}
        {overlayUrl && <div className="rounded-xl bg-black/30 p-4"><p className="mb-2 text-xs uppercase tracking-widest text-white/45">OBS Browser Source URL</p><code className="block break-all text-sm text-cyan-200">{overlayUrl}</code><button onClick={() => navigator.clipboard.writeText(overlayUrl)} className="mt-3 rounded-md border border-white/20 px-3 py-2 text-sm">URL kopieren</button></div>}
      </div>}
      {message && <p role="status" className="mt-5 text-sm text-white/70">{message}</p>}
      <section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-lg font-bold">OBS-Setup</h2><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/60"><li>Create the Overlay URL.</li><li>Add a Browser Source in OBS.</li><li>Insert the URL and do not enable "Shutdown source when not visible" if you want the overlay to continue running during scene changes.</li><li>The background will remain transparent. Adjust the size and position directly in OBS.</li></ol></section>
    </main>
  );
}
