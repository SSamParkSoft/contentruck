import { aboutCards } from "@/data/content";
import type { CSSProperties } from "react";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-heading about-heading">
          <div>
            <span className="section-kicker" data-reveal>01 — ABOUT US</span>
            <h2 className="title-reveal" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>우리는 하나의 문제에만<br />머무르지 않습니다.</h2>
          </div>
          <div className="section-intro" data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>
          <p>콘텐트럭은 일상과 산업 곳곳에 존재하는 불편함과 비효율을 발견합니다.</p>
            <p>사용자의 행동과 경험을 관찰하고, 기술·기획·디자인을 결합해 실제로 사용할 수 있는 서비스로 구현합니다.</p>
          </div>
        </div>
        <div className="about-grid">
          {aboutCards.map((card, index) => (
            <article className="about-card" data-reveal style={{ "--reveal-delay": `${index * 65}ms` } as CSSProperties} key={card.title}>
              <span className="card-number">{card.number}</span>
              <div className="about-symbol" aria-hidden="true">
                <i className={`symbol-${card.number}`} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
