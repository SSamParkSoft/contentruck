"use client";

import { useRef } from "react";

export function HeroVisual() {
  const visual = useRef<HTMLDivElement>(null);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (
      !visual.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const rect = visual.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
    visual.current.style.setProperty("--visual-x", `${x}px`);
    visual.current.style.setProperty("--visual-y", `${y}px`);
  }

  function reset() {
    visual.current?.style.setProperty("--visual-x", "0px");
    visual.current?.style.setProperty("--visual-y", "0px");
  }

  return (
    <div
      className="hero-visual"
      ref={visual}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      aria-label="문제가 서비스로 연결되는 과정을 표현한 그래픽"
      role="img"
    >
      <div className="visual-coordinate coordinate-x">X / 127.04</div>
      <div className="visual-coordinate coordinate-y">Y / 036.81</div>
      <svg viewBox="0 0 620 500" aria-hidden="true">
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8" fill="none" stroke="currentColor" />
          </marker>
        </defs>
        <path className="visual-grid-line" d="M40 90H580M40 250H580M40 410H580" />
        <path className="visual-grid-line" d="M110 45V455M310 45V455M510 45V455" />
        <path
          className="visual-route route-one"
          d="M110 340 C185 340 205 160 310 160 S430 250 510 250"
          markerEnd="url(#arrow)"
        />
        <path
          className="visual-route route-two"
          d="M110 250 C205 250 215 340 310 340 S420 160 510 160"
        />
        <circle className="visual-pulse pulse-one" cx="110" cy="340" r="7" />
        <circle className="visual-pulse pulse-two" cx="310" cy="160" r="7" />
        <circle className="visual-pulse pulse-three" cx="510" cy="250" r="7" />
      </svg>
      <div className="visual-node node-problem">
        <span>01</span>
        <strong>PROBLEM</strong>
        <small>OBSERVE</small>
      </div>
      <div className="visual-node node-idea">
        <span>02</span>
        <strong>IDEA</strong>
        <small>DEFINE</small>
      </div>
      <div className="visual-node node-build">
        <span>03</span>
        <strong>BUILD</strong>
        <small>EXECUTE</small>
      </div>
      <div className="visual-node node-service">
        <span>04</span>
        <strong>SERVICE</strong>
        <small>VALIDATE</small>
      </div>
      <div className="visual-caption">
        <span>OPERATING MODEL</span>
        <span>V.01 / LIVE</span>
      </div>
    </div>
  );
}
