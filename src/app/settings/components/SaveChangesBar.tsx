"use client";

interface SaveChangesBarProps {
  saving: boolean;
  message: string;
  onReset: () => void;
  onSave: () => void;
}

export default function SaveChangesBar({
  saving,
  message,
  onReset,
  onSave
}: SaveChangesBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">
            You have unsaved changes.
          </p>

          <p className="mt-1 text-sm text-white/50">
            Your changes have not been saved yet.
          </p>

          {message && (
            <p className="mt-1 text-sm font-semibold text-red-300">
              {message}
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onReset}
            disabled={saving}
            className="rounded-xl bg-white/5 px-5 py-3 font-semibold text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            className="rounded-xl bg-lime-400 px-5 py-3 font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-400"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}