"use client";

import type { StatsResponse } from "@/app/stats/types/stats";
import DesktopGears from "./DesktopGears";
import TabletGears from "./TabletGears";
import MobileGears from "./MobileGears";

interface GearsProps {
  data: StatsResponse;
}

export default function Gears({ data }: GearsProps) {
  return (
    <section className="mt-10 w-full">
      <div className="hidden lg:block">
        <DesktopGears data={data} />
      </div>

      <div className="hidden md:block lg:hidden">
        <TabletGears data={data} />
      </div>

      <div className="block md:hidden">
        <MobileGears data={data} />
      </div>
    </section>
  );
}
