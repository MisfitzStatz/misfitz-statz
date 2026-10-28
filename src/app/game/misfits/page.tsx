"use client";

import { useState } from "react";

import Desktop from "./layouts/Desktop";
import Tablet from "./layouts/Tablet";
import Mobile from "./layouts/Mobile";

import { MISFITS } from "./data/misfits";
import useDeviceType from "@/lib/useDeviceType";

export default function MisfitsPage() {
  const [selected, setSelected] = useState(MISFITS[0]);

  const { isDesktop, isTablet } = useDeviceType();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {isDesktop && (
        <Desktop
          selected={selected}
          setSelected={setSelected}
        />
      )}

      {isTablet && (
        <Tablet
          selected={selected}
          setSelected={setSelected}
        />
      )}

      {!isDesktop && !isTablet && (
        <Mobile
          selected={selected}
          setSelected={setSelected}
        />
      )}

    </main>
  );
}