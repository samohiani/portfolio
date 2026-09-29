"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { content } from "../content";

const CYCLE_MS = 6500;

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function getPageVisible() {
  return document.visibilityState === "visible";
}

export default function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, () => false);
  const pageVisible = useSyncExternalStore(subscribeVisibility, getPageVisible, () => true);
  const isRunning = isPlaying && inView && pageVisible && !reducedMotion && !isHovered && !focusWithin;
  const project = content.projects[activeIndex];

  useEffect(() => {
    const feature = sectionRef.current?.querySelector(".work-feature");
    if (!feature || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    observer.observe(feature);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % content.projects.length);
    }, CYCLE_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isRunning]);

  function chooseProject(index: number) {
    setActiveIndex(index);
    setIsPlaying(false);
  }

  return (
    <section ref={sectionRef} className="work" id="work" aria-labelledby="work-title">
      <div className="section-head work-head">
        <div>
          <h2 id="work-title">{content.sections.work}</h2>
          <p>{content.presentation.workIntro}</p>
        </div>
        <div className="work-controls">
          <span className="work-count">{String(activeIndex + 1).padStart(2, "0")} / {String(content.projects.length).padStart(2, "0")}</span>
          {!reducedMotion && (
            <button
              className="work-autoplay"
              type="button"
              onClick={() => setIsPlaying((current) => !current)}
              aria-label={isPlaying ? "Pause automatic project previews" : "Play automatic project previews"}
            >
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
              {isPlaying ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>

      <div
        className="work-layout"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setFocusWithin(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
        }}
      >
        <div className="work-selector" role="group" aria-label={content.presentation.chooseProject}>
          {content.projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === activeIndex ? "work-choice is-active" : "work-choice"}
              aria-pressed={index === activeIndex}
              aria-controls="selected-project"
              onClick={() => chooseProject(index)}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <article className="work-feature" id="selected-project" aria-live={isPlaying ? "off" : "polite"} aria-atomic="true">
          <div className="work-visual" key={`${project.id}-image`}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              priority={activeIndex === 0}
              sizes="(max-width: 800px) 94vw, 55vw"
            />
            <span className="work-visual__caption">{content.presentation.previewLabel}</span>
          </div>
          <div className="work-story" key={`${project.id}-story`}>
            <p className="work-category">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="work-headline">{project.headline}</p>
            <p className="work-summary">{project.summary}</p>
            <div className="work-facts">
              <p><strong>{content.presentation.contributionLabel}</strong>{project.decision}</p>
              <p><strong>{content.presentation.resultLabel}</strong>{project.result}</p>
            </div>
            {"context" in project && <p className="work-context">{project.context}</p>}
            <div className="work-links">
              <a href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label}</a>
              {"secondaryLink" in project && <a href={project.secondaryLink.href} target="_blank" rel="noopener noreferrer">{project.secondaryLink.label}</a>}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
