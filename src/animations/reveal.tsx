"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/dist/SplitText";
import { usePathname } from "next/navigation";

gsap.registerPlugin(SplitText);

const RevealAnimation = () => {
  const pathname = usePathname();

  useGSAP(
    () => {
      const targets = document.querySelectorAll("[data-reveal]");
      targets.forEach((target) => {
        reveal(target);
      });
    },
    { dependencies: [pathname] }
  );

  useGSAP(
    () => {
      const targets = document.querySelectorAll("[data-split-reveal]");
      targets.forEach((target) => {
        splitReveal(target);
      });
    },
    { dependencies: [pathname] }
  );

  return null;
};

const splitReveal = (target?: Element) => {
  if (!target) return;
  const delay = target.getAttribute("data-reveal-delay") || 0;
  const split = new SplitText(target, {
    type: "lines",
  });
  split.lines.forEach((line) => {
    new SplitText(line, {
      type: "lines",
      linesClass: "nested-lines",
    });
    (line as HTMLElement).style.overflow = "hidden";
  });
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom top",
      },
    })
    .to(target, {
      opacity: 1,
      duration: 0,
    })
    .fromTo(
      target.querySelectorAll(".nested-lines"),
      {
        opacity: 1,
        y: "150%",
        rotation: 3,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        rotation: 0,
        delay,
      },
      0
    );
  window.exportRoot.add(tl);
  return tl;
};

const reveal = (target?: Element) => {
  if (!target) return;
  const delay = target.getAttribute("data-reveal-delay") || 0;
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom top",
      },
    })
    .fromTo(
      target,
      {
        autoAlpha: 0,
        y: 20,
        duration: 1,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay,
      }
    );
  window.exportRoot.add(tl);
  return tl;
};

export { RevealAnimation, splitReveal, reveal };
