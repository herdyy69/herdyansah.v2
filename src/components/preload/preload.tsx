"use client";

import { useEffect, useRef, useState } from "react";
import s from "./preload.module.scss";
import imagesloaded from "imagesloaded";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

let timeout: NodeJS.Timeout;

export const Preload = () => {
  const [preloadProgress, setPreloadProgress] = useState(0);
  const tl = useRef<gsap.core.Timeline>(null!);
  const ref = useRef<HTMLDivElement>(null!);
  const [length, setLength] = useState(40);

  useEffect(() => {
    const body = document.querySelector("body");
    clearTimeout(timeout);
    if (body) {
      setPreloadProgress(0);
      const imgLoad = imagesloaded(body);
      const ln = imgLoad.images.length;
      setLength(ln + 3);
      imgLoad.on("progress", () => {
        setPreloadProgress((prev) => prev + 1);
      });
      imgLoad.on("always", () => {
        timeout = setTimeout(
          () => {
            setPreloadProgress(ln + 3);
            tl.current.play();
          },
          window.InstancedMouseEffect ? 500 : 2000
        );
      });
    }
  }, []);

  useGSAP(() => {
    if (window.exportRoot && typeof window.exportRoot.pause === "function") {
      window.exportRoot.pause();
    }

    const targets = document.querySelectorAll("#preload>*");
    tl.current = gsap
      .timeline({
        paused: true,
        delay: 0.2,
      })
      .to(targets, {
        opacity: 0,
        y: "20px",
        rotate: 0.1,
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.05,
        onComplete: () => {
          if (
            window.exportRoot &&
            typeof window.exportRoot.play === "function"
          ) {
            window.exportRoot.play();
          }
          window.InstancedMouseEffect?.start();
        },
      })
      .to(
        ref.current,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "power3.inOut",
        },
        1.5
      );
  });

  const progress = (preloadProgress / length) * 100;

  return (
    <>
      <div ref={ref} id="preload" className={s.preload}>
        <div className={s.mid}>
          <p className={s.text}>HERDYANSAH</p>
          <div className={s.progress}>
            <div className={s.bar} style={{ maxWidth: `${progress}%` }}></div>
          </div>
          <div className={s.percent}>{Math.ceil(progress)}%</div>
        </div>
      </div>
    </>
  );
};
