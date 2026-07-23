import { aboutCards } from "@/data/content";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-heading about-heading">
          <div>
            <span className="section-kicker">01 — ABOUT US</span>
            <h2>우리는 하나의 문제에만<br />머무르지 않습니다.</h2>
          </div>
          <div className="section-intro">
            <p>콘텐츠럭은 일상과 산업 곳곳에 존재하는 불편함과 비효율을 발견합니다.</p>
            <p>사용자의 행동과 경험을 관찰하고, 기술·기획·디자인을 결합해 실제로 사용할 수 있는 서비스로 구현합니다.</p>
          </div>
        </div>
        <div className="about-grid">
          {aboutCards.map((card) => (
            <article className="about-card" key={card.title}>
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
