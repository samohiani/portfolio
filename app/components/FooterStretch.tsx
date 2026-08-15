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
    let frame: number | undefined;

    const footer = wordmark.closest<HTMLElement>(".portfolio-footer");
    if (!footer) return;

    const render = () => {
      frame = undefined;
      wordmark.style.transform = `scaleY(${1 + tension / 420})`;
    };

    const requestRender = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(render);
    };

    const release = () => {
      tension = 0;
      requestRender();
    };

    const handleWheel = (event: WheelEvent) => {
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (!atBottom || event.deltaY <= 0) {
        release();
        return;
      }

      tension = Math.min(150, tension + Math.abs(event.deltaY) * 0.45);
      wordmark.style.transition = "none";
      requestRender();

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
        requestRender();
      }
    };

    const handleTouchEnd = () => {
      lastTouchY = undefined;
      wordmark.style.transition = "";
      release();
    };

    footer.addEventListener("wheel", handleWheel, { passive: true });
    footer.addEventListener("touchstart", handleTouchStart, { passive: true });
    footer.addEventListener("touchmove", handleTouchMove, { passive: true });
    footer.addEventListener("touchend", handleTouchEnd, { passive: true });
    footer.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    return () => {
      footer.removeEventListener("wheel", handleWheel);
      footer.removeEventListener("touchstart", handleTouchStart);
      footer.removeEventListener("touchmove", handleTouchMove);
      footer.removeEventListener("touchend", handleTouchEnd);
      footer.removeEventListener("touchcancel", handleTouchEnd);
      window.clearTimeout(releaseTimer);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
