"use client";
import s from "./portfolio.module.scss";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Portfolio = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    itemsRef.current.forEach((item: HTMLDivElement) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      itemsRef.current.forEach((item: HTMLDivElement) => {
        gsap.killTweensOf(item);
      });
    };
  });

  return (
    <div className={s.main}>
      <div />
      <div className={s.content}>
        <h3 data-split-reveal>Portfolio</h3>
        <div className={s.list}>
          {PORTFOLIO.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && !itemsRef.current.includes(el)) {
                  itemsRef.current.push(el);
                }
              }}
              className={s.item}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
              />
              <div className={s.description}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PORTFOLIO: PortfolioItem[] = [
  {
    title: "STUDYZONE",
    description: "A platform for students to learn and share their knowledge.",
    image: "/images/portfolio/studyzone.png",
    link: "https://www.studyzone.co.id/",
  },
  {
    title: "DIPI",
    description:
      "DIPI is a platform for researchers to get funding for their research.",
    image: "/images/portfolio/dipi.png",
    link: "https://www.dipi.id/",
  },
  {
    title: "KATAHUKUM",
    description:
      "A platform for people to get information and share their knowledge.",
    image: "/images/portfolio/katahukum.png",
    link: "https://katahukum.id/",
  },
  {
    title: "S4 (SINAR SURYA SENTOSA SEJAHTERA)",
    description:
      "A platform for companies to get information and share their products.",
    image: "/images/portfolio/ssss.png",
    link: "https://ssss.co.id/",
  },
  {
    title: "ASCEND",
    description: "A platform for companies to save their certification data.",
    image: "/images/portfolio/ascend.png",
    link: "https://database.ascend.ahacentre.org/",
  },
  {
    title: "PURNOMO YUSGIANTORO CENTER",
    description:
      "A platform for people to get information and share their knowledge.",
    image: "/images/portfolio/pyc.png",
    link: "https://staging.purnomoyusgiantorocenter.org/",
  },
];
