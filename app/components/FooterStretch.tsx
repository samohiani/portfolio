"use client";

import { useEffect } from "react";

export default function FooterStretch() {
  useEffect(() => {
    const wordmark = document.querySelector<HTMLElement>(".sammy-wordmark");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!wordmark || reducedMotion.matches) return;

    let tension = 0;
    let releaseTimer: number | undefined;
    let lastTouchY: number | undefined;

    const release = () => {
      tension = 0;
      wordmark.style.transform = "scaleY(1)";
    };

    const handleWheel = (event: WheelEvent) => {
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (!atBottom || event.deltaY <= 0) {
        release();
        return;
      }

      tension = Math.min(150, tension + Math.abs(event.deltaY) * 0.45);
      wordmark.style.transition = "none";
      wordmark.style.transform = `scaleY(${1 + tension / 420})`;

      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(() => {
        wordmark.style.transition = "";
        release();
      }, 420);
    };

    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      if (currentY === undefined || lastTouchY === undefined) return;

      const downwardPull = lastTouchY - currentY;
      lastTouchY = currentY;

      if (downwardPull > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        tension = Math.min(150, tension + downwardPull * 0.65);
        wordmark.style.transition = "none";
        wordmark.style.transform = `scaleY(${1 + tension / 420})`;
      }
    };

    const handleTouchEnd = () => {
      lastTouchY = undefined;
      wordmark.style.transition = "";
      release();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.clearTimeout(releaseTimer);
    };
  }, []);

  return null;
}
