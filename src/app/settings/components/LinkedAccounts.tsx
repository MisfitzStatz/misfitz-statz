"use client";

import Link from "next/link";
import type { LinkedAccount } from "@/lib/auth";

type PrivacyLevel = LinkedAccount["privacy"];

interface LinkedAccountsProps {
  linkedAccounts: LinkedAccount[];
  pendingPrivacy: Record<string, PrivacyLevel>;
  onPrivacyChange: (
    playerId: string,
    privacy: PrivacyLevel
  ) => void;
}

const privacyDescriptions: Record<
  PrivacyLevel,
  string
> = {
  open: "Visible on leaderboards and searchable.",
  hidden:
    "Searchable but excluded from leaderboards.",
  anonymous:
    "Shown as Anonymous on leaderboards.",
  private:
    "Not searchable and excluded from global statistics."
};

const privacyStyles: Record<
  PrivacyLevel,
  {
    label: string;
    className: string;
  }
> = {
  open: {
    label: "OPEN",
    className:
      "border-cyan-400/40 bg-cyan-500/20 text-cyan-300"
  },
  hidden: {
    label: "HIDDEN",
    className:
      "border-yellow-400/40 bg-yellow-500/20 text-yellow-300"
  },
  anonymous: {
    label: "ANONYMOUS",
    className:
      "border-purple-400/40 bg-purple-500/20 text-purple-300"
  },
  private: {
    label: "PRIVATE",
    className:
      "border-red-400/40 bg-red-500/20 text-red-300"
  }
};

function displayPlayerId(playerId: string) {
  return playerId.startsWith("Player:")
    ? playerId.slice("Player:".length)
    : playerId;
}

export default function LinkedAccounts({
  linkedAccounts,
  pendingPrivacy,
  onPrivacyChange
}: LinkedAccountsProps) {
  return (
    <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300/50">
          Account
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Linked Accounts
        </h2>

        <p className="mt-2 text-sm text-white/50">
          Manage the privacy settings of your
          linked Misfitz accounts.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {linkedAccounts.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-white/60">
              No verified accounts found.
            </p>
          </div>
        )}

        {linkedAccounts.map((linkedAccount) => {
          const currentPrivacy =
            pendingPrivacy[linkedAccount.playerId] ??
            linkedAccount.privacy;

          const hasPendingChange =
            pendingPrivacy[
              linkedAccount.playerId
            ] !== undefined;

          return (
            <div
              key={linkedAccount.playerId}
              className={`rounded-2xl border bg-black/20 p-5 transition ${
                hasPendingChange
                  ? "border-yellow-400/30"
                  : "border-white/10"
              }`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Player ID
                  </p>

                  {linkedAccount.verified ? (
                    <Link
                      href={`/stats/#${encodeURIComponent(
                        displayPlayerId(
                          linkedAccount.playerId
                        )
                      )}`}
                      className="mt-1 block font-mono text-lg font-bold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                    >
                      {displayPlayerId(
                        linkedAccount.playerId
                      )}
                    </Link>
                  ) : (
                    <p className="mt-1 font-mono text-lg font-bold">
                      {displayPlayerId(
                        linkedAccount.playerId
                      )}
                    </p>
                  )}

                  <p className="mt-2 text-sm text-white/50">
                    {
                      privacyDescriptions[
                        currentPrivacy
                      ]
                    }
                  </p>

                  {hasPendingChange && (
                    <p className="mt-2 text-xs font-semibold text-yellow-300">
                      Unsaved change
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "open",
                      "hidden",
                      "anonymous",
                      "private"
                    ] as PrivacyLevel[]
                  ).map((privacy) => {
                    const active =
                      currentPrivacy === privacy;

                    return (
                      <button
                        key={privacy}
                        type="button"
                        onClick={() =>
                          onPrivacyChange(
                            linkedAccount.playerId,
                            privacy
                          )
                        }
                        className={`
                          rounded-xl
                          border
                          px-3
                          py-2
                          text-xs
                          font-bold
                          transition

                          ${
                            active
                              ? privacyStyles[
                                  privacy
                                ].className
                              : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                          }
                        `}
                      >
                        {
                          privacyStyles[
                            privacy
                          ].label
                        }
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}