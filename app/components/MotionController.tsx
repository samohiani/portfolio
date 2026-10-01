"use client";

import { useEffect, useRef } from "react";

export default function MotionController() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = maximum > 0 ? Math.min(1, Math.max(0, window.scrollY / maximum)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${fraction})`;
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(
      ".section-head, .stack-system, .experience-item, .contact h2",
    );
    const observer = !reducedMotion && "IntersectionObserver" in window
      ? new IntersectionObserver((entries, activeObserver) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-visible");
            activeObserver.unobserve(entry.target);
          }
        }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" })
      : null;
    targets.forEach((target) => observer?.observe(target));

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
