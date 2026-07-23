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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label="Contentruck 홈">
          <span className="wordmark-mark" aria-hidden="true">C</span>
          CONTENTRUCK
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
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
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
