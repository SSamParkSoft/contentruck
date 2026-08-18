import { principles } from "@/data/content";
import type { CSSProperties } from "react";
import { Icon } from "./Icons";

export function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="container principles-layout">
        <div className="principles-copy">
          <span className="section-kicker" data-reveal>03 — PRINCIPLES</span>
          <h2 className="title-reveal" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>우리가 서비스를<br />만드는 네 가지 기준</h2>
          <p data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>좋은 기술보다 중요한 것은, 그 기술이 누구에게 어떤 변화를 만드는지입니다.</p>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="principle-card" data-reveal style={{ "--reveal-delay": `${index * 75}ms` } as CSSProperties} key={principle.title}>
              <div className="principle-icon"><Icon name={principle.icon} /></div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
              <span className="corner-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
