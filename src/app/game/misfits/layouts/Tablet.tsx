"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";

import { MISFITS } from "../data/misfits";
import StatBar from "../components/StatBar";

interface DesktopProps {
  selected: (typeof MISFITS)[number];
  setSelected: React.Dispatch<
    React.SetStateAction<(typeof MISFITS)[number]>
  >;
}

export default function Desktop({
  selected,
  setSelected,
}: DesktopProps) {
  return (
<div className="mx-auto max-w-7xl px-6 py-10">
  <div className="space-y-10">
    {/* Character Selector */}
    <section>

      <h2 className="mb-6 text-center text-2xl font-bold">
        Characters
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {MISFITS.map((misfit) => (

          <button
            key={misfit.id}
            onClick={() => setSelected(misfit)}
            className={`
              relative
              h-24
              w-20
              overflow-hidden
              rounded-xl
              border
              bg-neutral-900
              transition-all
              duration-200
              hover:scale-105
              ${
                selected.id === misfit.id
                  ? "border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.35)]"
                  : "border-neutral-800"
              }
            `}
          >

          {misfit.status === "teaser" ? (

            <div className="absolute inset-0 flex items-center justify-center">

              <Lock
                className="h-10 w-10 text-lime-400"
                strokeWidth={2.2}
              />

            </div>

          ) : (

            <Image
              src={misfit.image}
              alt={misfit.name}
              fill
              className="object-contain p-2"
            />

          )}

          <div className="absolute bottom-1 left-0 right-0 text-center text-xs font-semibold">
            {misfit.status === "teaser" ? " " : misfit.name}
          </div>

          </button>

        ))}

      </div>
    <div className="mt-14 border-t border-neutral-800 pt-8"></div>
    </section >

    {/* SECTION 1 */}
    <AnimatePresence mode="wait">
      <motion.section
        key={selected.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25 }}
        className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-4"
      >
        <div className="grid grid-cols-[280px_1fr] gap-6">
          {/* Character */}
          <div className="flex items-center justify-center">

            <motion.div
              key={`${selected.id}-image`}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.25 }}
              className="relative h-[280px] w-[280px]"
            >
            {selected.status === "teaser" ? (

              <div className="flex h-full w-full items-center justify-center rounded-3xl border border-dashed border-lime-400/30 bg-neutral-950">
                <div className="text-center">
                  <Lock className="mx-auto h-20 w-20 text-lime-400" />
                  <p className="mt-6 text-2xl font-bold">
                    Coming Soon
                  </p>
                  <p className="mt-2 text-neutral-400">
                    Character Reveal
                  </p>
                </div>
              </div>
            ) : (
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                priority
                className="object-contain"
              />
            )}
            </motion.div>
          </div>

          {/* Character Information */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
              {selected.status === "teaser" ? "Coming Soon"  : selected.class}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-5xl font-black tracking-tight">
                {selected.status === "teaser" ? "Coming Soon"  : selected.name}
              </h1>
              <Link
              href="/meta" 
              className="rounded-xl border border-lime-400 px-5 py-2 text-sm font-semibold text-lime-400 transition-all duration-200 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_20px_rgba(163,230,53,0.35)]">
                View Meta Data
              </Link>
            </div>
            <p className="mt-2 max-w-3xl text-lg leading-relaxed text-neutral-300">
              {selected.status === "teaser"
                ? "This Misfit hasn't been revealed yet."
                : selected.description}
            </p>
            <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
              <h2 className="mb-4 text-2xl font-bold">
                General Stats
              </h2>
              <div className="space-y-5">
                <StatBar
                  label="HP"
                  value={selected.stats.hp}
                  maxValue={12000}
                />
                <StatBar
                  label="Damage"
                  value={selected.stats.damage}
                  maxValue={2500}
                />
                <StatBar
                  label="Speed"
                  value={selected.stats.speed}
                  maxValue={5}
                  suffix=" m/s"
                />
                <StatBar
                  label="Reload"
                  value={selected.stats.reload}
                  maxValue={8}
                  suffix=" ammo/s"
                />
                <StatBar
                  label="Range"
                  value={selected.stats.range}
                  maxValue={11}
                  suffix=" m"
                />
              </div>
            </section>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>

    {/* SECTION 2 */}
    <div className="grid gap-8 xl:grid-cols-2">
      {/* Patch History */}
<section className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
  <h2 className="mb-6 text-2xl font-bold">
    Patch History
  </h2>

  <div className="space-y-4">
    {selected.balanceChanges?.map((patch, index) => (
      <div
        key={`${patch.version}-${index}`}
      >

        <div className="space-y-3">
          {patch.changes.map((change, changeIndex) => {
            const typeColor =
              change.type === "increased"
                ? "text-green-400 border-green-400/30 bg-green-400/5"
                : change.type === "reduced"
                  ? "text-red-400 border-red-400/30 bg-red-400/5"
                  : "text-yellow-400 border-yellow-400/30 bg-yellow-400/5";

            return (
              <div
                key={changeIndex}
                className={`rounded-xl border p-4 ${typeColor}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {change.type}
                  </span>

                  {change.stat && (
                    <span className="text-sm font-semibold text-neutral-200">
                      {change.stat}
                    </span>
                  )}

                  {(change.oldValue !== undefined ||
                    change.newValue !== undefined) && (
                    <span className="text-sm text-neutral-400">
                      {change.oldValue !== undefined
                        ? change.oldValue
                        : "?"}{" "}
                      →
                      {" "}
                      {change.newValue !== undefined
                        ? change.newValue
                        : "?"} - {patch.date}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {change.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Abilities */}
      <section className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h2 className="mb-8 text-2xl font-bold">
          Abilities
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-lg font-bold text-lime-400">
              Attack
            </h3>

            <p className="leading-relaxed text-neutral-300">
            {selected.status === "teaser" ? "Coming Soon"  : selected.abilities.attack}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-lime-400">
              Ultimate
            </h3>
            <p className="leading-relaxed text-neutral-300">
            {selected.status === "teaser" ? "Coming Soon"  : selected.abilities.ultimate}
            </p>
          </div>

          <div>

            <h3 className="mb-2 text-lg font-bold text-lime-400">
              Ability
            </h3>

            <p className="leading-relaxed text-neutral-300">
            {selected.status === "teaser" ? "Coming Soon"  : selected.abilities.ability}
            </p>

          </div>
        </div>
      </section>
    </div>

  </div>
</div>
)}