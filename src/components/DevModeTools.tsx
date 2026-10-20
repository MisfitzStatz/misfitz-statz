"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Clipboard,
  Trash2,
  X,
} from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import type { Account } from "@/lib/auth";
import {
  installApiResponseMonitor,
  onApiResponse,
  setApiResponseMonitoringEnabled,
  type ApiResponseLog,
} from "@/lib/apiDebug";

const TEST_DISCORD_ID = "000000000000001";

function isDevAccount(account: Account | null): boolean {
  return Boolean(
    account?.isDevAccount === true ||
    (account?.provider === "dev" && account?.discordId === TEST_DISCORD_ID)
  );
}

export default function DevModeTools() {
  const { account } = useAuth();
  const devMode = isDevAccount(account);
  const [panelOpen, setPanelOpen] = useState(false);
  const [entries, setEntries] = useState<ApiResponseLog[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    installApiResponseMonitor();
    setApiResponseMonitoringEnabled(devMode);
    const unsubscribe = onApiResponse((entry) => {
      if (!devMode) return;
      setEntries((current) => [entry, ...current].slice(0, 80));
      setSelectedId((current) => current ?? entry.id);
    });
    return () => {
      unsubscribe();
      setApiResponseMonitoringEnabled(false);
    };
  }, [devMode]);

  useEffect(() => {
    if (!devMode) {
      setPanelOpen(false);
      setApiResponseMonitoringEnabled(false);
    }
  }, [devMode]);

  const selectedEntry = entries.find((entry) => entry.id === selectedId) ?? entries[0] ?? null;

  async function copySelected() {
    if (!selectedEntry) return;
    try {
      await navigator.clipboard.writeText(selectedEntry.body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setError("Clipboard access is unavailable in this browser.");
    }
  }

  return (
    <>
      {devMode && (
        <button
          type="button"
          onClick={() => setPanelOpen((open) => !open)}
          className="fixed bottom-4 right-4 z-[10000] inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 shadow-xl backdrop-blur-xl"
          aria-expanded={panelOpen}
          aria-controls="misfitz-api-inspector"
        >
          Inspect
        </button>
      )}

      {error && (
        <div role="alert" className="fixed bottom-20 right-4 z-[10001] max-w-sm rounded-xl border border-red-400/30 bg-[#201217] px-4 py-3 text-sm text-red-200 shadow-xl">
          <div className="flex items-start gap-3">
            <span className="flex-1">{error}</span>
            <button type="button" onClick={() => setError("")} aria-label="Dismiss error"><X size={15} /></button>
          </div>
        </div>
      )}

      {devMode && panelOpen && (
        <section
          id="misfitz-api-inspector"
          aria-label="API response inspector"
          className="fixed bottom-[4.25rem] right-4 z-[9999] flex h-[min(72vh,650px)] w-[min(940px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/[0.98] text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <header className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="min-w-0 flex-1">
              <h2 className="font-bold">API Response Inspector</h2>
            </div>
            <button type="button" onClick={() => setEntries([])} className="rounded-lg p-2 text-white/55" title="Clear captured responses" aria-label="Clear responses"><Trash2 size={17} /></button>
            <button type="button" onClick={() => setPanelOpen(false)} className="rounded-lg p-2 text-white/55" title="Close inspector" aria-label="Close inspector"><X size={18} /></button>
          </header>

          <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[minmax(230px,34%)_1fr]">
            <aside className="min-h-0 border-b border-white/10 md:border-b-0 md:border-r">
              <div className="flex items-center justify-between px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                <span>Captured requests</span><span>{entries.length} / 80</span>
              </div>
              <div className="max-h-32 overflow-y-auto md:h-[calc(100%-34px)] md:max-h-none">
                {entries.length === 0 ? (
                  <p className="px-4 py-6 text-sm text-white/40">Requests made while Dev Mode is active will appear here.</p>
                ) : entries.map((entry) => (
                  <button
                    type="button"
                    key={entry.id}
                    onClick={() => setSelectedId(entry.id)}
                    className={`block w-full border-l-2 px-3 py-3 text-left ${selectedEntry?.id === entry.id ? "border-white/60 bg-white/[0.06]" : "border-transparent"}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${entry.ok ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-300"}`}>{entry.status || "ERR"}</span>
                      <span className="font-mono text-[10px] text-white/45">{entry.method}</span>
                      <span className="ml-auto text-[10px] text-white/35">{entry.durationMs} ms</span>
                    </div>
                    <p className="mt-1 break-all font-mono text-xs text-white/80">{entry.url}</p>
                    <p className="mt-1 text-[10px] text-white/35">{entry.time}</p>
                  </button>
                ))}
              </div>
            </aside>

            <div className="flex min-h-0 min-w-0 flex-col">
              {selectedEntry ? (
                <>
                  <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-2.5">
                    <span className={`rounded-md px-2 py-1 font-mono text-xs font-bold ${selectedEntry.ok ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-300"}`}>{selectedEntry.status || "Network error"}</span>
                    <span className="font-mono text-xs text-white/65">{selectedEntry.method} {selectedEntry.url}</span>
                    <button type="button" onClick={copySelected} className="ml-auto inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/70"><Clipboard size={14} /> {copied ? <><Check size={13} /> Copied</> : "Copy response"}</button>
                  </div>
                  <pre className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words p-4 font-mono text-xs leading-relaxed text-[#d4e3f4]">{selectedEntry.body}</pre>
                </>
              ) : (
                <div className="flex flex-1 items-center justify-center p-8 text-sm text-white/35">Select a captured response.</div>
              )}
            </div>
          </div>
          <footer className="border-t border-white/10 px-4 py-2 text-[10px] text-white/35">This panel only observes requests already made by the site. It cannot send requests or edit API data.</footer>
        </section>
      )}
    </>
  );
}
