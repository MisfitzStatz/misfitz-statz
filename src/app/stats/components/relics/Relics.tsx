"use client";

import type { StatsResponse } from "@/app/stats/types/stats";
import DesktopRelics from "./DesktopRelics";
import TabletRelics from "./TabletRelics";
import MobileRelics from "./MobileRelics";

interface RelicsProps {
  data: StatsResponse;
}

export default function Relics({ data }: RelicsProps) {
  return (
    <section className="mt-10 w-full">
      <div className="hidden lg:block">
        <DesktopRelics data={data} />
      </div>

      <div className="hidden md:block lg:hidden">
        <TabletRelics data={data} />
      </div>

      <div className="block md:hidden">
        <MobileRelics data={data} />
      </div>
    </section>
  );
}