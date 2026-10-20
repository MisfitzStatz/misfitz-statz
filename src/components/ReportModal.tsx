"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { authFetch } from "@/lib/auth";
import { API_URL } from "@/lib/api";

interface ReportModalProps {
open: boolean;
playerId: string;
playerName: string;
onClose: () => void;
}

type ReportReason =
| "not_exist"
| "suspicious_cheating"
| "privacy_issue"
| "inappropriate_name"
| "other";

const reportReasons: {
value: ReportReason;
label: string;
}[] = [
{
value: "not_exist",
label: "Player banned / not exists"
},
{
value: "suspicious_cheating",
label: "Suspicious / Cheating"
},
{
value: "privacy_issue",
label: "Privacy Issue"
},
{
value: "inappropriate_name",
label: "Inappropriate Name"
},
{
value: "other",
label: "Other"
}
];

export default function ReportModal({
  open,
  playerId,
  playerName,
  onClose
}: ReportModalProps) {

const { loggedIn }        = useAuth();
const [reason, setReason] = useState<ReportReason | "">("");
const [showDisclaimer, setShowDisclaimer] = useState(false);
const [submitting, setSubmitting]   = useState(false);
const [message, setMessage]         = useState("");
const [messageType, setMessageType] = useState<"success" | "error" | "info">("info");

useEffect(() => {
if (!open) {
return;
}

setReason("");
setMessage("");
setSubmitting(false);

const disclaimerAccepted = localStorage.getItem("report_disclaimer") === "true";
setShowDisclaimer(!disclaimerAccepted);
}, [open]);


function acceptDisclaimer() {localStorage.setItem("report_disclaimer", "true");
setShowDisclaimer(false);
}

async function submitReport() {
if (!loggedIn) {
setMessageType("error");
setMessage(
"You must be logged in to submit a report."
);
return;
}

if (!reason) {
  setMessageType("error");
  setMessage("Please select a reason for this report.");
  return;
}

setSubmitting(true);
setMessage("");

try {
  const response = await authFetch(
    `${API_URL}/api/report`,
    {
      method: "POST",
      credentials: "include",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        playerId,
        reason
      })
    }
  );

  let data: any = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || "Failed to submit report.");
  }

  setMessageType("success");
  setMessage("Report submitted successfully.");

  setReason("");
} catch (error: any) {
  console.error(error);

  setMessageType("error");
  setMessage(error?.message || "Failed to submit report.");
} finally {
  setSubmitting(false);
}
}

if (!open) {
return null;
}

return (
<div
className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
onMouseDown={(event) => {
if (event.target === event.currentTarget) {
onClose();
}
}}
> <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Report Player
        </h2>
        <p className="mt-1 text-sm text-white/50">
          Report an issue related to this player.
        </p>
      </div>

      <button
        onClick={onClose}
        className="rounded-lg px-2 py-1 text-xl text-white/40 transition hover:bg-white/10 hover:text-white"
        aria-label="Close"
      >
        ×
      </button>
    </div>

    <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-wider text-white/40">
        Player
      </p>
      <p className="mt-1 text-lg font-bold text-white">
        {playerName}
      </p>
      <p className="mt-1 font-mono text-sm text-cyan-400">
        {playerId}
      </p>
    </div>

    {showDisclaimer ? (
      <div className="mt-6">
        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <h3 className="font-bold text-yellow-300">
            Before submitting a report
          </h3>

          <p className="mt-3 text-sm leading-6 text-yellow-100/80">
            Please only report issues that are
            relevant to Misfitz Statz, player
            data, privacy, cheating, nicknames or similiar.
          </p>

          <p className="mt-3 text-sm leading-6 text-yellow-100/80">
            In-game arguments, insults, or general
            player disputes should not be reported
            here.
          </p>

          <p className="mt-3 text-sm leading-6 text-yellow-100/80">
            Reports concerning the game itself may
            need to be handled on Antihero Studios Support channel on Discord.
          </p>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-4 py-2 font-semibold text-white transition hover:bg-slate-600"
          >
            Cancel
          </button>

          <button
            onClick={acceptDisclaimer}
            className="rounded-xl bg-lime-400 px-4 py-2 font-bold text-black transition hover:bg-lime-300"
          >
            I understand
          </button>
        </div>
      </div>
    ) : (
      <>
        <div className="mt-6">
          <label
            htmlFor="report-reason"
            className="mb-2 block text-sm font-semibold text-white/70"
          >
            Reason
          </label>

          <select
            id="report-reason"
            value={reason}
            onChange={(event) => setReason(event.target.value as | ReportReason | "")}
            disabled={submitting}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-lime-400/50 disabled:cursor-not-allowed disabled:opacity-50"
          >

            {reportReasons.map((item) => (
              <option
                key={item.value}
                value={item.value}
                className="bg-slate-900"
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {!loggedIn && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
            <p className="text-sm text-red-300">
              You must be logged in to submit
              a report.
            </p>

            <p className="mt-1 text-xs text-red-300/60">
              Your account is required to verify
              who submitted the report.
            </p>
          </div>
        )}

        {message && (
          <div
            className={`mt-4 rounded-xl border p-4 text-sm
              ${
                messageType === "success" ? "border-lime-400/20 bg-lime-400/10 text-lime-300" : 
                messageType === "error" ? "border-red-500/20 bg-red-500/10 text-red-300" : "border-white/10 bg-white/5 text-white/70"
              }
            `}
          >
            {message}
          </div>

        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={submitting}
            className="rounded-xl bg-slate-700 px-4 py-2 font-semibold text-white transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={submitReport}
            disabled={  !loggedIn || !reason || submitting}
            className="rounded-xl bg-lime-400 px-5 py-2 font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-400"
          >
            {submitting ? "Submitting..." : "Submit Report"}
          </button>
        </div>
      </>
    )}
  </div>
</div>
);
}
