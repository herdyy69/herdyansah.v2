"use client";
import React, { useEffect, useState } from "react";
import s from "./hero.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;

    if (window.innerWidth > 1024) {
      const heroSection = gsap.fromTo(
        `.${s.hero}`,
        {
          y: vh * 50,
        },
        {
          scrollTrigger: {
            trigger: `.${s.hero}`,
            start: "top top",
            end: `bottom+=${
              document.body.clientHeight - window.innerHeight
            } top`,
            pin: true,
            pinSpacing: false,
            onEnter: () => {
              gsap.to(`.${s.title}`, { fontSize: "2rem", duration: 0.5 });
              gsap.to(`.${s.description}`, { opacity: 0, duration: 0.5 });
              setIsPinned(true);
            },
            onLeaveBack: () => {
              gsap.to(`.${s.title}`, { fontSize: "4rem", duration: 0.5 });
              gsap.to(`.${s.description}`, { opacity: 1, duration: 0.5 });
              setIsPinned(false);
            },
            onLeave: () => {
              gsap.set(`.${s.title}`, {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 10,
              });
            },
            onEnterBack: () => {
              gsap.set(`.${s.title}`, { position: "static" });
              setIsPinned(false);
            },
          },
        }
      );

      return () => {
        heroSection.kill();
      };
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${s.hero} ${isPinned ? s.pinned : ""}`}>
      <h1 className={s.title} data-split-reveal data-reveal-delay="3">
        HERDYANSAH
      </h1>
      <p className={s.description} data-reveal data-reveal-delay="3.4">
        An independent software engineer who loves to learn and share knowledge.
      </p>
    </div>
  );
};
