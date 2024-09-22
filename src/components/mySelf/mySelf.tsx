"use client";
import s from "./mySelf.module.scss";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MySelf = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      const pinImage = gsap.fromTo(
        imageRef.current,
        { y: 0 },
        {
          y: -600,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top top",
            end: `bottom+=${
              document.body.clientHeight - window.innerHeight
            } top`,
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        }
      );

      return () => {
        pinImage.kill();
      };
    }
  }, []);

  return (
    <div className={s.main}>
      <div className={s.image}>
        <Image
          ref={imageRef}
          src="/images/herdyansah.png"
          alt="hero"
          width={500}
          height={500}
        />
      </div>
      <div className={s.content}>
        <h2 data-split-reveal>
          I specialize in front-end development, partnering with technology
          agencies and a diverse range of clients in Bandung, from startups to
          established firms. With 5 years of experience, I create engaging
          digital experiences that inspire and captivate. My focus is on
          interaction and meticulous detail, transforming ideas into unique,
          user-friendly, and visually striking websites.
        </h2>
        <p data-reveal data-reveal-delay="1">
          Above all, I thrive on building strong partnerships and meaningful
          connections with fellow creative minds.
        </p>
      </div>
    </div>
  );
};
