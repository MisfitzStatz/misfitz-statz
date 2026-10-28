"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LOGIN_DISCLAIMER_KEY = "login_disclaimer";

export default function LoginModal({isOpen, onClose}: LoginModalProps) {
  const [accepted, setAccepted] = useState(false);
  const [disclaimerRequired, setDisclaimerRequired] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const alreadyAccepted = localStorage.getItem(LOGIN_DISCLAIMER_KEY) === "true";

    if (alreadyAccepted) {
      setDisclaimerRequired(false);
      window.location.href = `${API_URL}/auth/discord`;
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleContinue = () => {
    if (!accepted) {
      return;
    }

    localStorage.setItem(LOGIN_DISCLAIMER_KEY, "true");
    window.location.href = `${API_URL}/auth/discord`;
  };

  if (!disclaimerRequired) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-2xl"
      >
        <h2 className="mb-4 text-2xl font-bold">
          Sign In with Discord
        </h2>

        <p className="mb-6 text-white/70">
          Before creating an account, you must
          accept our Terms of Service and Privacy
          Policy.
        </p>

        <label className="mb-6 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) =>
              setAccepted(e.target.checked)
            }
            className="mt-1"
          />

          <span className="text-sm text-white/80">
            I agree to the{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7CFF00]"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-[#00D9FF]"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!accepted}
            onClick={handleContinue}
            className="rounded-xl bg-[#7CFF00] px-4 py-2 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}