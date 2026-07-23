import { principles } from "@/data/content";
import { Icon } from "./Icons";

export function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="container principles-layout">
        <div className="principles-copy">
          <span className="section-kicker">03 — PRINCIPLES</span>
          <h2>우리가 서비스를<br />만드는 네 가지 기준</h2>
          <p>좋은 기술보다 중요한 것은, 그 기술이 누구에게 어떤 변화를 만드는지입니다.</p>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
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
