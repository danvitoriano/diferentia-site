"use client";

import { useEffect } from "react";

function motionAllowed(): boolean {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function clearParallaxStyles(): void {
  document.querySelectorAll<HTMLElement>(".parallax-media").forEach((el) => {
    el.style.removeProperty("transform");
  });
  document.querySelectorAll<HTMLElement>("section.section[id]").forEach((el) => {
    el.style.removeProperty("--section-parallax");
  });
}

function updateParallax(): void {
  if (!motionAllowed()) {
    clearParallaxStyles();
    return;
  }

  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  document.querySelectorAll<HTMLElement>(".parallax-media").forEach((media) => {
    const frame = media.closest<HTMLElement>(".hero-right, .results-media");
    if (!frame) return;

    const speed = clamp(parseFloat(media.dataset.speed ?? "0.35"), 0.05, 0.95);
    const rate = 1 - speed;
    const frameRect = frame.getBoundingClientRect();
    const frameTop = frameRect.top + scrollY;
    const frameH = frame.offsetHeight || frameRect.height;
    const scale = 1.18;
    const maxShift = frameH * 0.28;

    const travel = scrollY + vh - frameTop;
    const range = frameH + vh;

    if (travel <= 0) {
      media.style.transform = `translate3d(0, ${(-maxShift * 0.5).toFixed(1)}px, 0) scale(${scale})`;
      return;
    }
    if (travel >= range) {
      media.style.transform = `translate3d(0, ${(maxShift * 0.5).toFixed(1)}px, 0) scale(${scale})`;
      return;
    }

    const t = travel / range;
    const y = (t - 0.5) * 2 * maxShift * rate;
    media.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale})`;
  });

  document.querySelectorAll<HTMLElement>("section.section[id]").forEach((section) => {
    const rect = section.getBoundingClientRect();
    const enter = clamp((vh - rect.top) / (vh * 0.92), 0, 1);
    const y = (1 - enter) * (1 - enter) * 48;
    section.style.setProperty("--section-parallax", `${y.toFixed(1)}px`);
  });
}

export function useParallaxMedia(): void {
  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    mq.addEventListener("change", schedule);

    schedule();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mq.removeEventListener("change", schedule);
      clearParallaxStyles();
    };
  }, []);
}
