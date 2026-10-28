"use client";

import { useState } from "react";
import { FlaskConical, LoaderCircle } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { devLogin, devLogout, getCurrentAccount, type Account } from "@/lib/auth";

const TEST_DISCORD_ID = "000000000000001";

function isDevAccount(account: Account | null): boolean {
  return Boolean(
    account?.isDevAccount === true ||
    (account?.provider === "dev" && account?.discordId === TEST_DISCORD_ID)
  );
}

export default function LocalSettings() {
  const { account, setAuth } = useAuth();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const devMode = isDevAccount(account);

  function clearRecentSearchCache() {
    try {
      localStorage.removeItem("misfitz_recent_searches");
      setMessage("Recently searched cache cleared.");
      setError("");
    } catch (cause) {
      console.error(cause);
      setError("Failed to clear recently searched cache.");
    }
  }

  function resetReportDisclaimer() {
    try {
      localStorage.removeItem("report_disclaimer");
      setMessage("Report disclaimer reset.");
      setError("");
    } catch (cause) {
      console.error(cause);
      setError("Failed to reset report disclaimer.");
    }
  }

  function resetLoginDisclaimer() {
    try {
      localStorage.removeItem("login_disclaimer");
      setMessage("Login disclaimer reset.");
      setError("");
    } catch (cause) {
      console.error(cause);
      setError("Failed to reset login disclaimer.");
    }
  }

  async function toggleDevMode() {
    if (busy) return;
    setBusy(true);
    setError("");
    setMessage("");

    try {
      if (devMode) {
        await devLogout();
      } else {
        await devLogin();
      }

      // Trust the server's resulting session, not a locally stored ON/OFF flag.
      const nextAccount = await getCurrentAccount();
      if (!devMode && !isDevAccount(nextAccount)) {
        throw new Error("The API did not return the expected test account.");
      }
      if (devMode && isDevAccount(nextAccount)) {
        throw new Error("The API still reports the test account after Dev Mode was disabled.");
      }

      setAuth(nextAccount);
      setMessage(devMode ? "Dev Mode disabled. Your previous session was restored if available." : "Dev Mode enabled. You are now using the shared test account.");
    } catch (cause) {
      // Re-sync with the server in case the session changed before a later request failed.
      try {
        setAuth(await getCurrentAccount());
      } catch {
        // Keep the original error; the next page/context refresh can retry session sync.
      }
      setError(cause instanceof Error ? cause.message : "Could not change Dev Mode.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-white/40">Browser</p>
      <h2 className="mt-2 text-2xl font-bold">Local Settings</h2>
      <p className="mt-2 text-sm text-white/50">
        These settings are stored locally in your browser and do not require an account.
      </p>

      <div className="mt-6 space-y-4">
        <SettingAction
          title="Clear recently searched cache"
          description="Removes recently searched Player IDs stored in this browser."
          button="Clear"
          onClick={clearRecentSearchCache}
        />
        <SettingAction
          title="Reset report disclaimer"
          description="Shows the report information again the next time you open the report feature."
          button="Reset"
          onClick={resetReportDisclaimer}
        />
        <SettingAction
          title="Reset login disclaimer"
          description="Shows the Terms of Service and Privacy Policy confirmation again the next time you sign in."
          button="Reset"
          onClick={resetLoginDisclaimer}
        />
        <SettingAction
          title="Developer Mode"
          description="Sign in as a test account and get access to more pages. You may need to login again when disabling it. Use it with caution!"
          button={busy ? "Working…" : devMode ? "Disable" : "Enable"}
          onClick={toggleDevMode}
          disabled={busy}
        />
      </div>

      {message && <p role="status" className="mt-5 text-sm font-semibold text-lime-300">{message}</p>}
      {error && <p role="alert" className="mt-5 text-sm font-semibold text-red-300">{error}</p>}
    </section>
  );
}

function SettingAction({
  title,
  description,
  button,
  onClick,
  disabled = false,
}: {
  title: string;
  description: string;
  button: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/50">{description}</p>
        </div>
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className="rounded-xl bg-red-500/20 px-4 py-2 font-semibold text-red-300 transition hover:bg-red-500/30 disabled:cursor-wait disabled:opacity-60"
        >
          {button}
        </button>
      </div>
    </div>
  );
}
