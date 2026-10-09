"use client";

import { useMemo, useState } from "react";

type ErrorCode = {
  http: number;
  code: string;
  message: string;
  category: "Success" | "Verification" | "Accounts" | "Player" | "Authentication" | "Generic";
};

const errorCodes: ErrorCode[] = [
  // Success
  {
    http: 200,
    code: "OK",
    message: "Success.",
    category: "Success",
  },
  {
    http: 200,
    code: "VERIFICATION_STARTED",
    message: "Verification started.",
    category: "Success",
  },
  {
    http: 200,
    code: "VERIFICATION_SUCCESS",
    message: "Verification completed successfully.",
    category: "Success",
  },
  {
    http: 200,
    code: "VERIFICATION_CANCELLED",
    message: "Verification cancelled.",
    category: "Success",
  },

  // Verification
  {
    http: 404,
    code: "NO_ACTIVE_VERIFICATION",
    message: "No active verification found.",
    category: "Verification",
  },
  {
    http: 409,
    code: "VERIFICATION_RUNNING",
    message: "You already have an active verification.",
    category: "Verification",
  },
  {
    http: 400,
    code: "VERIFICATION_FAILED",
    message: "Verification requirements were not met.",
    category: "Verification",
  },
  {
    http: 410,
    code: "VERIFICATION_EXPIRED",
    message: "Verification has expired.",
    category: "Verification",
  },

  // Accounts
  {
    http: 409,
    code: "ACCOUNT_ALREADY_VERIFIED",
    message: "This account is already linked to another Discord account.",
    category: "Accounts",
  },
  {
    http: 403,
    code: "ACCOUNT_NOT_OWNED",
    message: "This account does not belong to you.",
    category: "Accounts",
  },
  {
    http: 400,
    code: "ACCOUNT_NOT_VERIFIED",
    message: "This account is not verified.",
    category: "Accounts",
  },
  {
    http: 403,
    code: "ACCOUNT_SUSPENDED",
    message: "This account has been suspended.",
    category: "Accounts",
  },
  {
    http: 409,
    code: "ACCOUNT_ALREADY_TRACKED",
    message: "This player's profile is private.",
    category: "Accounts",
  },
  {
    http: 411,
    code: "ACCOUNT_BANNED",
    message: "This account is either banned from Misfitz or MisfitzStatz.",
    category: "Accounts",
  },
  // Player
  {
    http: 404,
    code: "PLAYER_NOT_FOUND",
    message: "Player not found.",
    category: "Player",
  },
  {
    http: 403,
    code: "PLAYER_PRIVATE",
    message: "This player's profile is private.",
    category: "Player",
  },
  {
    http: 403,
    code: "PLAYER_FLAGGED",
    message: "This account is unavailable.",
    category: "Player",
  },
  {
    http: 417,
    code: "PLAYER_NOT_ENOUGH_STATS",
    message: "Player has not enough stats to be displayed.",
    category: "Player",
  },
  // Authentication
  {
    http: 401,
    code: "NOT_LOGGED_IN",
    message: "You are not logged in.",
    category: "Authentication",
  },
  {
    http: 401,
    code: "INVALID_TOKEN",
    message: "Your login session is invalid.",
    category: "Authentication",
  },
  {
    http: 400,
    code: "INVALID_PRIVACY",
    message: "Privacy seetings corrupt.",
    category: "Authentication",
  },
  {
    http: 403,
    code: "UNAUTHORIZED",
    message: "Unauthorized request.",
    category: "Authentication",
  },

  // Generic
  {
    http: 500,
    code: "INTERNAL_ERROR",
    message: "An internal server error occurred.",
    category: "Generic",
  },
  {
    http: 503,
    code: "MAINTENANCE",
    message: "The server is currently in maintenance.",
    category: "Generic",
  },
  {
    http: 400,
    code: "INVALID_REQUEST",
    message: "Invalid request.",
    category: "Generic",
  },
  {
    http: 429,
    code: "RATE_LIMIT",
    message: "Too many requests. Please try again later.",
    category: "Generic",
  },
];

const categoryOrder = [
  "Success",
  "Verification",
  "Accounts",
  "Player",
  "Authentication",
  "Generic",
] as const;

export default function ErrorCodesPage() {
  const [search, setSearch] = useState("");

  const filteredCodes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return errorCodes;
    }

    return errorCodes.filter((item) => {
      return (
        item.code.toLowerCase().includes(query) ||
        item.message.toLowerCase().includes(query) ||
        item.http.toString().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const groupedCodes = useMemo(() => {
    return categoryOrder
      .map((category) => ({
        category,
        items: filteredCodes.filter(
          (item) => item.category === category
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredCodes]);

return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
    <section className="relative mx-auto max-w-6xl px-6 pt-10 text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
        API Documentation
    </p>

    <h1 className="text-6xl font-black uppercase leading-none">
        ERROR{" "}
        <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        CODES
        </span>
    </h1>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-white/70">
        Reference all response codes returned by the Misfitz Statz API.
        Search by HTTP status, error code or message.
    </p>
    </section>

    <section className="relative mx-auto max-w-6xl px-6 py-10">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <label
        htmlFor="error-code-search"
        className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/50"
        >
        Search Error Codes
        </label>

        <div className="relative">
        <input
            id="error-code-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search HTTP code, error code or message..."
            className="w-full rounded-2xl border border-white/10 bg-[#0b1220]/70 px-5 py-4 text-white outline-none placeholder:text-white/30 transition focus:border-[#7CFF00]/40 focus:ring-1 focus:ring-[#7CFF00]/20"
        />
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-white/40">
        <span>
            {filteredCodes.length}{" "}
            {filteredCodes.length === 1 ? "result" : "results"}
        </span>

        {search && (
            <button
            type="button"
            onClick={() => setSearch("")}
            className="transition hover:text-white"
            >
            Clear search
            </button>
        )}
        </div>
    </div>
    </section>

    <section className="relative mx-auto max-w-6xl px-6 pb-16">
    {filteredCodes.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-xl">
        <h2 className="text-2xl font-bold">
            No error codes found
        </h2>

        <p className="mt-3 text-white/60">
            Try searching for another HTTP code, error code or message.
        </p>
        </div>
    ) : (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="hidden grid-cols-[140px_minmax(280px,1fr)_minmax(300px,1.5fr)] border-b border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/50 md:grid">
            <div>HTTP Code</div>
            <div>Error Code</div>
            <div>Message</div>
        </div>

        {groupedCodes.map((group) => (
            <div key={group.category}>
            <div className="border-b border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7CFF00]">
                {group.category}
            </div>

            {group.items.map((item) => (
                <div
                key={item.code}
                className="border-b border-white/5 last:border-0"
                >
                <div className="hidden grid-cols-[140px_minmax(280px,1fr)_minmax(300px,1.5fr)] items-center px-6 py-5 md:grid">
                    <div>
                    <span
                        className={`inline-flex rounded-lg border px-3 py-1.5 font-mono text-sm font-bold ${
                        item.http >= 500
                            ? "border-red-400/20 bg-red-400/10 text-red-300"
                            : item.http >= 400
                            ? "border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                            : "border-[#7CFF00]/20 bg-[#7CFF00]/10 text-[#7CFF00]"
                        }`}
                    >
                        {item.http}
                    </span>
                    </div>

                    <div className="font-mono text-sm font-semibold text-[#00D9FF]">
                    {item.code}
                    </div>

                    <div className="text-white/70">
                    {item.message}
                    </div>
                </div>

                <div className="flex flex-col gap-3 px-5 py-5 md:hidden">
                    <div className="flex items-center justify-between gap-4">
                    <span
                        className={`inline-flex rounded-lg border px-3 py-1.5 font-mono text-sm font-bold ${
                        item.http >= 500
                            ? "border-red-400/20 bg-red-400/10 text-red-300"
                            : item.http >= 400
                            ? "border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                            : "border-[#7CFF00]/20 bg-[#7CFF00]/10 text-[#7CFF00]"
                        }`}
                    >
                        HTTP {item.http}
                    </span>

                    <span className="font-mono text-xs text-white/40">
                        {item.category}
                    </span>
                    </div>

                    <div className="font-mono text-sm font-semibold text-[#00D9FF]">
                    {item.code}
                    </div>

                    <div className="text-sm leading-relaxed text-white/70">
                    {item.message}
                    </div>
                </div>
                </div>
            ))}
            </div>
        ))}
        </div>
    )}
    </section>

    <section className="relative mx-auto max-w-6xl px-6 pb-12">
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-xl">
        <p className="text-sm text-white/50">
        Error codes describe the application-level result returned by the
        API. The HTTP status code describes the HTTP response itself.
        </p>
    </div>
    </section>
</main>
);
}