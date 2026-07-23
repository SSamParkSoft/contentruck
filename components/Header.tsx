"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Studio" },
  { href: "#approach", label: "Approach" },
  { href: "#principles", label: "Principles" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="Contentruck 홈">
          <span aria-hidden="true">C</span>
          CONTENTRUCK
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {links.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="header-contact" href="mailto:contact@contentruck.com">
          Start a conversation
          <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`mobile-nav ${open ? "is-open" : ""}`}
        id="mobile-menu"
        aria-label="모바일 메뉴"
      >
        {links.map((link, index) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
