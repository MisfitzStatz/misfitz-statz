"use client";

import { useEffect, useState } from "react";

interface DeleteAccountModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => Promise<void>;
}

export default function DeleteAccountModal({open, onClose, onDelete}: DeleteAccountModalProps) {
const [code, setCode] = useState("");
const [input, setInput] = useState("");
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  if (!open) {
    return;
  }
  const alphabet ="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const generated =
    Array.from(
      { length: 8 },
      () => alphabet[Math.floor(Math.random() * alphabet.length)]
    ).join("");

  setCode(generated);
  setInput("");
}, [open]);
if (!open) {
  return null;
}

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
  <div className="w-full max-w-md rounded-3xl border border-red-500/20 bg-[#0b1220] p-6">
    <h2 className="text-2xl font-bold text-red-300">Delete Account</h2>
    <p className="mt-4 text-white/70">This action cannot be undone.</p>
    <p className="mt-4 text-center text-white/70 font-bold">By deleting your account the following settings will be deleted as well:</p>

    <p className="mt-0 text-white/70">- verification</p>
    <p className="mt-0 text-white/70">- privacy settings</p>
    <p className="mt-0 text-white/70">- achievements</p>

    <p className="mt-2 text-center font-mono text-white/70">
      MisfitzStatz is not responsible for your inGame stats of Misfitz
    </p>
    <p className="mt-4 text-white/70">
      Type the following code:
    </p>
    <div
      className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center font-mono text-xl font-bold"
    >
      {code}
    </div>

    <input
      value={input}
      onChange={(e) =>
        setInput(e.target.value)
      }
      className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
      placeholder="Enter code"
    />

    <div
      className="mt-6 flex justify-end gap-3"
    >
      <button
        onClick={onClose}
        className="rounded-xl border border-white/10 px-4 py-2"
      >
        Cancel
      </button>

      <button
        onClick={onDelete}
        disabled={input !== code}
        className=" rounded-xl bg-red-500/20 px-4 py-2 text-red-300 disabled:opacity-40"
      >
        Delete Account
      </button>
    </div>
  </div>
</div>
);
}