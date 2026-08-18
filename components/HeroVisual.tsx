"use client";

import { useEffect, useRef } from "react";

export function HeroVisual() {
  const visual = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => () => {
    if (frame.current) window.cancelAnimationFrame(frame.current);
  }, []);

  function renderPosition() {
    const element = visual.current;
    if (!element) return;
    const { x, y } = pointer.current;
    element.style.setProperty("--mx", `${x}px`);
    element.style.setProperty("--my", `${y}px`);
    element.style.setProperty("--mx-slow", `${x * -0.35}px`);
    element.style.setProperty("--my-slow", `${y * -0.35}px`);
    frame.current = 0;
  }

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (
      !visual.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) return;
    const rect = visual.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    pointer.current = { x, y };
    if (!frame.current) frame.current = window.requestAnimationFrame(renderPosition);
  }

  function reset() {
    pointer.current = { x: 0, y: 0 };
    if (!frame.current) frame.current = window.requestAnimationFrame(renderPosition);
  }

  return (
    <div className="hero-visual hero-entry hero-entry-visual" ref={visual} onPointerMove={handleMove} onPointerLeave={reset} aria-label="문제 발견부터 서비스 구현까지 이어지는 콘텐트럭의 제작 과정">
      <div className="visual-glow" />
      <div className="visual-grid" />
      <svg className="visual-lines" viewBox="0 0 600 500" fill="none" aria-hidden="true">
        <path d="M125 125 C210 125 195 240 290 240" />
        <path d="M125 375 C210 375 195 260 290 260" />
        <path d="M365 250 C430 250 425 250 485 250" />
      </svg>
      <div className="process-card card-problem">
        <span className="card-dot coral" />
        <span className="card-label">Problem</span>
        <strong>반복되는 불편</strong>
        <div className="mini-lines"><i /><i /><i /></div>
      </div>
      <div className="process-card card-signal">
        <span className="card-dot mint" />
        <span className="card-label">Signal</span>
        <strong>사용자의 반응</strong>
        <div className="signal-bars"><i /><i /><i /><i /></div>
      </div>
      <div className="process-card card-build">
        <span className="build-icon">✦</span>
        <span className="card-label">Build</span>
        <strong>경험으로 구현</strong>
        <span className="build-status">In progress <i /></span>
      </div>
      <div className="process-card card-service">
        <div className="service-top"><span className="service-logo">C</span><span>Service</span></div>
        <strong>작고 유용한 변화</strong>
        <div className="service-ui"><i /><span><b /><b /><b /></span></div>
        <span className="service-ready"><i /> Ready to use</span>
      </div>
      <div className="floating-chip chip-idea">Idea</div>
      <div className="floating-chip chip-validate">Validate</div>
      <span className="node node-a" /><span className="node node-b" /><span className="node node-c" />
    </div>
  );
}
