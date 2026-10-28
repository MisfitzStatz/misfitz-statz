"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  value: number;
  maxValue: number;
  suffix?: string;
}

export default function StatBar({
  label,
  value,
  maxValue,
  suffix = "",
}: Props) {
  const percentage = Math.min(
    (value / maxValue) * 100,
    100
  );

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>

        <span>
          {value}
          {suffix}
        </span>
      </div>

      <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
        <motion.div
          key={value}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
          className="h-full rounded-full bg-lime-400"
        />
      </div>
    </div>
  );
}