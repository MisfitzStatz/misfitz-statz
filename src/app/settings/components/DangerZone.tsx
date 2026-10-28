"use client";

import { useState } from "react";
import DeleteAccountModal from "@/components/DeleteAccountModal";
import { deleteAccount as deleteAccountRequest } from "@/lib/auth";

interface DangerZoneProps {
  loggedIn: boolean;
}

export default function DangerZone({
  loggedIn
}: DangerZoneProps) {
  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  async function deleteAccount() {
    const success =
      await deleteAccountRequest();

    if (!success) {
      throw new Error(
        "Failed to delete account."
      );
    }

    window.location.href = "/";
  }

  return (
    <>
      <section className="rounded-3xl border border-red-500/30 bg-red-500/5 p-6 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-300/50">
          Danger Zone
        </p>

        <h2 className="mt-2 text-2xl font-bold text-red-300">
          Delete Account
        </h2>

        <p className="mt-3 max-w-2xl text-white/50">
          Permanently delete your Misfitz Statz
          account and all linked player associations.
        </p>

        <button
          type="button"
          disabled={!loggedIn}
          onClick={() => {
            if (!loggedIn) return;

            setShowDeleteModal(true);
          }}
          className="mt-5 rounded-xl bg-red-500/20 px-5 py-3 font-semibold text-red-300 transition hover:bg-red-500/30 disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
        >
          Delete Misfitz Statz Account
        </button>

        {!loggedIn && (
          <p className="mt-2 text-xs text-white/40">
            You must be logged in to delete your
            account.
          </p>
        )}
      </section>

      <DeleteAccountModal
        open={showDeleteModal}
        onClose={() =>
          setShowDeleteModal(false)
        }
        onDelete={deleteAccount}
      />
    </>
  );
}