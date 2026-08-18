"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#principles", label: "Principles" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    const sections = ["top", "about", "approach", "principles", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const update = () => {
      const currentY = window.scrollY;
      const anchor = currentY + Math.min(window.innerHeight * 0.32, 240);
      let currentSection = "#top";
      sections.forEach((section) => {
        if (section.offsetTop <= anchor) currentSection = `#${section.id}`;
      });
      setScrolled(currentY > 16);
      setHidden(!open && currentY > 120 && currentY > previousY + 4);
      setActive(currentSection);
      previousY = currentY;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label="Contentruck 홈">
          <span className="wordmark-mark" aria-hidden="true">C</span>
          CONTENTRUCK
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {links.map((link) => (
            <a
              className={active === link.href ? "is-active" : ""}
              href={link.href}
              key={link.href}
              aria-current={active === link.href ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="모바일 메뉴">
        {links.map((link) => (
          <a className={active === link.href ? "is-active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
