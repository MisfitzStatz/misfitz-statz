"use client";

import { useEffect, useState } from "react";

export default function useDeviceType() {
const [device, setDevice] = useState({
  ready: false,
  isDesktop: false,
  isTablet: false,
  isMobile: false,
  canHover: true,
  width: 0,
});

  useEffect(() => {
    const hoverMedia = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const update = () => {
      const width = window.innerWidth;
      const canHover = hoverMedia.matches;

    setDevice({
      ready: true,
      width,
      canHover,
      isDesktop: canHover,
      isTablet: !canHover && width >= 768,
      isMobile: !canHover && width < 768,
    });
    };

    update();

    window.addEventListener("resize", update);
    hoverMedia.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      hoverMedia.removeEventListener("change", update);
    };
  }, []);

  return device;
}