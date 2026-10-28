"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { updatePrivacy } from "@/lib/auth";

import AccountSettings from "./components/AccountSettings";
import LinkedAccounts from "./components/LinkedAccounts";
import LocalSettings from "./components/LocalSettings";
import DangerZone from "./components/DangerZone";
import SaveChangesBar from "./components/SaveChangesBar";

type PrivacyLevel =
  | "open"
  | "hidden"
  | "anonymous"
  | "private";

export default function SettingsPage() {
const {
  loggedIn,
  account,
  loading,
  setAuth
} = useAuth();
  const [pendingPrivacy, setPendingPrivacy] =
    useState<Record<string, PrivacyLevel>>({});

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const savedPrivacy = useMemo(() => {
    const result: Record<string, PrivacyLevel> = {};

    for (const linkedAccount of account?.linkedAccounts ?? []) {
      result[linkedAccount.playerId] =
        linkedAccount.privacy;
    }

    return result;
  }, [account]);

  const hasChanges =
    Object.keys(pendingPrivacy).length > 0;

  useEffect(() => {
    if (!account) {
      setPendingPrivacy({});
      return;
    }

    setPendingPrivacy({});
  }, [account]);

  function setPrivacy(
    playerId: string,
    privacy: PrivacyLevel
  ) {
    const savedValue = savedPrivacy[playerId];

    setPendingPrivacy((current) => {
      const next = {
        ...current
      };

      if (privacy === savedValue) {
        delete next[playerId];
      } else {
        next[playerId] = privacy;
      }

      return next;
    });

    setSaveMessage("");
  }

  function resetChanges() {
    setPendingPrivacy({});
    setSaveMessage("");
  }

  async function saveChanges() {
    if (!account || !hasChanges || saving) {
      return;
    }

    setSaving(true);
    setSaveMessage("");

    try {
      const changes = Object.entries(
        pendingPrivacy
      );

      for (const [playerId, privacy] of changes) {
        const success = await updatePrivacy(
          playerId,
          privacy
        );

        if (!success) {
          throw new Error(
            `Failed to update privacy for ${playerId}.`
          );
        }
      }

      const updatedLinkedAccounts =
        account.linkedAccounts.map((linkedAccount) => {
          const newPrivacy =
            pendingPrivacy[linkedAccount.playerId];

          if (newPrivacy === undefined) {
            return linkedAccount;
          }

          return {
            ...linkedAccount,
            privacy: newPrivacy
          };
        });

      setAuth({
        ...account,
        linkedAccounts: updatedLinkedAccounts
      });

      setPendingPrivacy({});
      setSaveMessage("Changes saved.");
    } catch (error) {
      console.error(error);

      setSaveMessage(
        "Some changes could not be saved."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-5xl font-black uppercase tracking-wider md:text-6xl">
            Settings
          </h1>

          <p className="mt-4 text-white/60">
            Loading...
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden"/>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12 pb-32">
        {/* PAGE HEADER */}
        <div>
          <h1 className="text-5xl font-black uppercase tracking-wider md:text-6xl">
            Settings
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Manage your Misfitz Statz account and
            website settings.
          </p>
        </div>

        {/* ACCOUNT */}
        <div className="mt-10">
          <AccountSettings
            loggedIn={loggedIn}
            account={account}
          />
        </div>

        {/* LINKED ACCOUNTS */}
        {loggedIn && account && (
          <div className="mt-8">
            <LinkedAccounts
              linkedAccounts={account.linkedAccounts}
              pendingPrivacy={pendingPrivacy}
              onPrivacyChange={setPrivacy}
            />
          </div>
        )}

        {/* LOCAL SETTINGS */}
        <div className="mt-8">
          <LocalSettings />
        </div>

        {/* DANGER ZONE */}
        <div className="mt-8">
          <DangerZone loggedIn={loggedIn} />
        </div>
      </section>

      {/* SAVE BAR */}
      {hasChanges && (
        <SaveChangesBar
          saving={saving}
          message={saveMessage}
          onReset={resetChanges}
          onSave={saveChanges}
        />
      )}
    </main>
  );
}