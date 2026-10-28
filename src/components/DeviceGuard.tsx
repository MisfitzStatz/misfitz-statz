"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DeviceGuard() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/unsupported-device") {
      return;
    }

    if (window.innerWidth < 100) {
    }
  }, [pathname]);

  return null;
}