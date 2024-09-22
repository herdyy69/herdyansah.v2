import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "../styles/global.scss";
import localFont from "next/font/local";
import { SmoothWrapper } from "@/animations/smoothWrapper";
import { Suspense } from "react";
import { Preload } from "@/components/preload/preload";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});
const satoshi = localFont({
  src: [
    {
      path: "/fonts/satoshi.ttf",
      style: "normal",
    },
    {
      path: "/fonts/satoshi-italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Herdyansah",
  description: "Herdyansah - Frontend Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${hankenGrotesk.variable} ${satoshi.variable} ${IBMPlexSans.variable}`}
      lang="en"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <Preload />
        <Suspense fallback={null}>
          <SmoothWrapper>{children}</SmoothWrapper>
        </Suspense>
      </body>
    </html>
  );
}
