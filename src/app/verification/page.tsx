"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCurrentAccount,
  devLogin,
  startVerification,
  checkVerification,
  cancelVerification,
  removePlayer,
  type Account,
  type VerificationData
} from "@/lib/auth";
import { API_URL } from "@/lib/api";

function displayPlayerId(playerId: string) {
  return playerId.startsWith("Player:")
    ? playerId.slice("Player:".length)
    : playerId;
}

export default function VerificationPage() {

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<Account | null>(null);
  const [playerId, setPlayerId] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationActive, setVerificationActive] = useState(false);
  const [verificationPlayer, setVerificationPlayer] = useState<VerificationData | null>(null);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    initialize();
  }, []);


  async function initialize() {
    try {
      const params = new URLSearchParams(window.location.search);
      const devMode = process.env.NODE_ENV === "development";
      const devLoginRequested = params.get("devLogin") === "1";

      if (devMode && devLoginRequested) {
        await devLogin();
      }

      const currentAccount = await getCurrentAccount();
      setAccount(currentAccount);
    } catch (error) {

      console.error("AUTH INITIALIZATION ERROR:", error);

      setAccount(null);
    } finally {
      setLoading(false);
    }
  }


  async function searchPlayer() {

    if (!playerId.trim()) {
      return;
    }

    const cleanedId =
      playerId.startsWith("Player:")
        ? playerId
        : `Player:${playerId}`;

    setSearchLoading(true);
    setSearchError("");
    setSearchResult(null);

    try {
    const response =
      await fetch(
        `${API_URL}/api/player/${encodeURIComponent(
          cleanedId
        )}`
      );

      const json =
        await response.json();

      if (!response.ok) {

        throw new Error(
          json.error ||
          "Player not found."
        );

      }

      setSearchResult(
        json.data
      );

    } catch (error: any) {

      setSearchError(
        error.message ||
        "Failed to search."
      );

    } finally {

      setSearchLoading(false);

    }
  }

  async function handleStartVerification() {

    if (!playerId.trim()) {
      return;
    }

    const cleanedId =
      playerId.startsWith("Player:")
        ? playerId
        : `Player:${playerId}`;

    setVerificationLoading(true);
    setVerificationError("");
    setVerificationMessage("");

    try {

      const result =
        await startVerification(
          cleanedId
        );

      if (!result.success) {

        throw new Error(
          verificationErrorMessage(
            result.code
          )
        );

      }

      setVerificationActive(
        true
      );

      setVerificationPlayer(
        result.data ?? {
          playerId: cleanedId
        }
      );

      setTimeLeft(
        7 * 60
      );

      setVerificationMessage(
        "Verification started. Extract exactly one relic. Go back to lobby, then check your verification."
      );

    } catch (error: any) {

      setVerificationError(
        error.message ||
        "Failed to start verification."
      );

    } finally {

      setVerificationLoading(false);

    }
  }

  async function handleCheckVerification() {

    setVerificationLoading(true);
    setVerificationError("");
    setVerificationMessage("");

    try {
      const result = await checkVerification();

      if (!result.success) {
        throw new Error(
          verificationErrorMessage(
            result.code
          )
        );
      }

      setVerificationActive(false);
      setVerificationPlayer(null);
      setTimeLeft(null);
      setVerificationMessage("Verification successful.");

      const currentAccount = await getCurrentAccount();
      setAccount(currentAccount);

    } catch (error: any) {

      setVerificationError(
        error.message ||
        "Verification failed."
      );

    } finally {

      setVerificationLoading(false);

    }
  }

  async function handleCancelVerification() {
    setVerificationLoading(true);
    setVerificationError("");

    try {

      const result = await cancelVerification();
      if (!result.success) {
        throw new Error(
          verificationErrorMessage(result.code)
        );
      }

      setVerificationActive(false);
      setVerificationPlayer(null);
      setTimeLeft(null);
      setVerificationMessage("Verification cancelled.");

    } catch (error: any) {

      setVerificationError(
        error.message ||
        "Failed to cancel verification."
      );

    } finally {

      setVerificationLoading(false);

    }
  }

  useEffect(() => {

    if (
      !verificationActive ||
      timeLeft === null
    ) {
      return;
    }

    if (timeLeft <= 0) {

      setVerificationActive(
        false
      );

      setTimeLeft(
        null
      );

      setVerificationError(
        "Verification expired."
      );

      return;
    }

    const timer =
      window.setTimeout(
        () => {
          setTimeLeft(
            timeLeft - 1
          );
        },
        1000
      );

    return () => {
      window.clearTimeout(timer);
    };

  }, [
    verificationActive,
    timeLeft
  ]);


  /*
   * REMOVE LINKED ACCOUNT
   */

  async function handleRemovePlayer(
    playerId: string
  ) {

    try {

      const success =
        await removePlayer(
          playerId
        );

      if (!success) {

        alert(
          "Failed to remove player."
        );

        return;
      }

      const currentAccount =
        await getCurrentAccount();

      setAccount(
        currentAccount
      );

    } catch (error) {

      console.error(
        "REMOVE PLAYER ERROR:",
        error
      );

      alert(
        "Failed to remove player."
      );
    }
  }


  /*
   * LOADING
   */

  if (loading) {

    return (
      <main className="mx-auto max-w-4xl p-8">

        <h1 className="text-4xl font-bold">
          Verification
        </h1>

        <p className="mt-6 text-white/70">
          Loading...
        </p>

      </main>
    );
  }


  /*
   * NOT LOGGED IN
   */

  if (!account) {

    return (
      <main className="mx-auto max-w-4xl p-8">

        <h1 className="text-4xl font-bold">
          Verification
        </h1>

        <p className="mt-6 text-red-400">
          You must be logged in.
        </p>

        {process.env.NODE_ENV === "development" && (

          <p className="mt-3 text-sm text-white/40">
            Development test:
            {" "}
            /verification?devLogin=1
          </p>

        )}

      </main>
    );
  }


  /*
   * PAGE
   */

  return (

    <main className="mx-auto max-w-4xl p-8">

      {/* DISCORD ACCOUNT */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

        <h2 className="text-2xl font-semibold">
          Discord Account
        </h2>

        <p className="mt-4">

          Discord ID:

          <span className="ml-2 font-semibold">
            {account.discordId}
          </span>

        </p>

      </div>


      {/* LINKED ACCOUNTS */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

        <h2 className="text-2xl font-semibold">
          Linked Accounts
        </h2>


        {account.linkedAccounts.length === 0 ? (

          <p className="mt-4 text-white/60">
            No linked accounts.
          </p>

        ) : (

          <div className="mt-6 space-y-4">

            {account.linkedAccounts.map(
              (linked) => (

                <div
                  key={linked.playerId}
                  className="rounded-2xl border border-white/10 p-4"
                >

                  <p>
                    <strong>
                      Player ID:
                    </strong>{" "}

                    {linked.verified ? (
                      <Link
                        href={`/stats/#${encodeURIComponent(
                          displayPlayerId(linked.playerId)
                        )}`}
                        className="font-mono text-cyan-400 transition hover:text-cyan-300 hover:underline"
                      >
                        {displayPlayerId(linked.playerId)}
                      </Link>
                    ) : (
                      <span className="font-mono">
                        {displayPlayerId(linked.playerId)}
                      </span>
                    )}
                  </p>

                  <p>
                    <strong>
                      Privacy:
                    </strong>{" "}
                    {linked.privacy}
                  </p>

                  <p>
                    <strong>
                      Verification:
                    </strong>{" "}
                    {linked.verified
                      ? "Verified"
                      : "Not Verified"}
                  </p>


                  <button
                    onClick={() =>
                      handleRemovePlayer(
                        linked.playerId
                      )
                    }
                    className="mt-4 rounded-xl bg-red-500 px-4 py-2 text-white"
                  >
                    Remove
                  </button>

                </div>

              )
            )}

          </div>

        )}

      </div>


      {/* VERIFICATION */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

        <h2 className="text-2xl font-bold">
          Verify Misfitz Account
        </h2>

        <p className="mt-2 text-white/60">
          Link a Misfitz player account to your Discord account.
        </p>


        {/* PLAYER INPUT */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

          <input
            value={playerId}
            onChange={(event) =>
              setPlayerId(
                event.target.value
              )
            }
            placeholder="Player ID"
            disabled={
              verificationActive
            }
            className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none disabled:opacity-50"
          />


          <button
            onClick={searchPlayer}
            disabled={
              searchLoading ||
              verificationActive ||
              !playerId.trim()
            }
            className="rounded-xl bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20 disabled:opacity-40"
          >

            {searchLoading
              ? "Searching..."
              : "Search"}

          </button>

        </div>


        {/* SEARCH ERROR */}

        {searchError && (

          <p className="mt-4 text-red-400">
            {searchError}
          </p>

        )}


        {/* SEARCH RESULT */}

        {searchResult && !verificationActive && (

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">

            <p className="text-sm text-white/50">
              Player
            </p>

            <p className="mt-1 text-xl font-bold">
              {searchResult.playerName ||
                "Unknown Player"}
            </p>

            <p className="mt-2 font-mono text-sm text-white/60">
              {displayPlayerId(playerId)}
            </p>

            <button
              onClick={
                handleStartVerification
              }
              disabled={
                verificationLoading
              }
              className="mt-5 rounded-xl bg-lime-400 px-5 py-3 font-bold text-black transition hover:bg-lime-300 disabled:opacity-40"
            >

              {verificationLoading
                ? "Starting..."
                : "Start Verification"}

            </button>

          </div>

        )}


        {/* ACTIVE VERIFICATION */}

        {verificationActive && (

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">

            <p className="text-sm font-bold uppercase tracking-wider text-lime-400">
              Verification Active
            </p>


            <p className="mt-3 text-lg font-semibold">
              {verificationPlayer?.playerName ||
                verificationPlayer?.playerId}
            </p>


            <p className="mt-3 text-white/70">
              Extract exactly one relic.
              Then return here and check your verification.
            </p>


            {timeLeft !== null && (

              <p className="mt-4 font-mono text-2xl font-bold">
                {formatTime(
                  timeLeft
                )}
              </p>

            )}


            <div className="mt-5 flex flex-wrap gap-3">

              <button
                onClick={
                  handleCheckVerification
                }
                disabled={
                  verificationLoading
                }
                className="rounded-xl bg-lime-400 px-5 py-3 font-bold text-black disabled:opacity-40"
              >

                {verificationLoading
                  ? "Checking..."
                  : "Check Verification"}

              </button>


              <button
                onClick={
                  handleCancelVerification
                }
                disabled={
                  verificationLoading
                }
                className="rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 disabled:opacity-40"
              >
                Cancel
              </button>

            </div>

          </div>

        )}


        {/* SUCCESS */}

        {verificationMessage && (

          <p className="mt-5 text-lime-400">
            {verificationMessage}
          </p>

        )}


        {/* ERROR */}

        {verificationError && (

          <p className="mt-5 text-red-400">
            {verificationError}
          </p>

        )}

      </div>

    </main>
  );
}


/*
 * HELPERS
 */

function formatTime(
  seconds: number
) {

  const minutes =
    Math.floor(
      seconds / 60
    );

  const remainingSeconds =
    seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(
      2,
      "0"
    )}`;
}


function verificationErrorMessage(
  code: string
) {

  switch (code) {

    case "VERIFICATION_RUNNING":
      return "A verification is already running.";

    case "PLAYER_NOT_FOUND":
      return "Player not found.";

    case "ACCOUNT_ALREADY_VERIFIED":
      return "This player account is already verified.";

    case "NO_ACTIVE_VERIFICATION":
      return "There is no active verification.";

    case "VERIFICATION_FAILED":
      return "Verification failed. You have not extracted a new relic yet.";

    case "VERIFICATION_EXPIRED":
      return "The verification period has expired.";

    case "NOT_LOGGED_IN":
      return "You must be logged in.";

    case "INVALID_TOKEN":
      return "Your login session is invalid.";

    case "INTERNAL_ERROR":
      return "The server encountered an internal error.";

    default:
      return "An unexpected error occurred.";
  }
}
