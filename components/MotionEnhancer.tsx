"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    root.classList.add("motion-ready");

    let revealObserver: IntersectionObserver | undefined;
    if (reducedMotion.matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );
      revealElements.forEach((element) => revealObserver?.observe(element));
    }

    let scrollFrame = 0;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      scrollFrame = 0;
    };
    const queueProgress = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", queueProgress, { passive: true });
    window.addEventListener("resize", queueProgress, { passive: true });

    const cleanups: Array<() => void> = [];

    if (!reducedMotion.matches && finePointer.matches) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
        let frame = 0;
        let nextX = 0;
        let nextY = 0;
        const render = () => {
          element.style.setProperty("--magnetic-x", `${nextX.toFixed(2)}px`);
          element.style.setProperty("--magnetic-y", `${nextY.toFixed(2)}px`);
          frame = 0;
        };
        const move = (event: Event) => {
          const pointer = event as PointerEvent;
          const rect = element.getBoundingClientRect();
          nextX = ((pointer.clientX - rect.left) / rect.width - 0.5) * 8;
          nextY = ((pointer.clientY - rect.top) / rect.height - 0.5) * 6;
          if (!frame) frame = window.requestAnimationFrame(render);
        };
        const reset = () => {
          nextX = 0;
          nextY = 0;
          if (!frame) frame = window.requestAnimationFrame(render);
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", reset);
          if (frame) window.cancelAnimationFrame(frame);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((element) => {
        let frame = 0;
        let nextX = 0;
        let nextY = 0;
        const render = () => {
          element.style.setProperty("--tilt-x", `${nextX.toFixed(2)}deg`);
          element.style.setProperty("--tilt-y", `${nextY.toFixed(2)}deg`);
          frame = 0;
        };
        const move = (event: Event) => {
          const pointer = event as PointerEvent;
          const rect = element.getBoundingClientRect();
          nextY = ((pointer.clientX - rect.left) / rect.width - 0.5) * 3;
          nextX = -((pointer.clientY - rect.top) / rect.height - 0.5) * 2;
          if (!frame) frame = window.requestAnimationFrame(render);
        };
        const reset = () => {
          nextX = 0;
          nextY = 0;
          if (!frame) frame = window.requestAnimationFrame(render);
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", reset);
          if (frame) window.cancelAnimationFrame(frame);
        });
      });
    }

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      revealObserver?.disconnect();
      window.removeEventListener("scroll", queueProgress);
      window.removeEventListener("resize", queueProgress);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span /></div>;
}
