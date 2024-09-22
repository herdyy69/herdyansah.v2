"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { RevealAnimation } from "./reveal";
import { AnimationInit } from "./animationInit";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SmoothWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimationInit />
      <ReactLenis
        root
        options={{
          duration: 3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -11 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
        }}
      >
        {children}
      </ReactLenis>
      <RevealAnimation />
    </>
  );
};
