import ScrollSmoother from "gsap/dist/ScrollSmoother";

declare global {
  interface Window {
    scrollSmoother: ScrollSmoother;
    preload: GSAP.core.Timeline;
    exportRoot: GSAP.core.Timeline;
    InstancedMouseEffect?: {
      start: () => void;
    };
  }
}
