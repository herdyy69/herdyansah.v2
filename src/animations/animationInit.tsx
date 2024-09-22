"use client";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export const AnimationInit = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.exportRoot = gsap.exportRoot();
  }, []);

  useEffect(() => {
    const w = window.innerWidth;
    if (w < 1000) {
      gsap.ticker.fps(20);
    }
  }, [pathname]);

  return null;
};
