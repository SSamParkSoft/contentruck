import { projectStates } from "@/data/content";
import type { CSSProperties } from "react";

export function Direction() {
  return (
    <section className="section direction">
      <div className="container direction-layout">
      <div className="direction-board visual-reveal" data-reveal data-tilt aria-label="동시에 탐색하고 제작하고 검증하는 콘텐트럭의 프로젝트 구조">
          <div className="board-header"><span>CONTENTRUCK STUDIO</span><i /><i /><i /></div>
          <div className="board-content">
            {projectStates.map((project, index) => (
              <article className={`project-state ${project.tone}`} key={project.label}>
                <div className="project-label"><i /> {project.label}<span>0{index + 1}</span></div>
                <div className="project-art"><i /><i /><i /></div>
                <h3>{project.title}</h3>
                <p>{project.value}</p>
              </article>
            ))}
          </div>
          <div className="board-footer"><span><i /> Active studio cycle</span><b>Explore → Build → Learn →</b></div>
        </div>
        <div className="direction-copy">
          <span className="section-kicker" data-reveal>04 — OUR DIRECTION</span>
          <h2 className="title-reveal" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>하나의 서비스가 아닌,<br /><em>계속되는 문제 해결</em></h2>
          <p data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>우리는 하나의 성공 방식에 머무르지 않습니다. 사용자에게 필요한 문제를 발견하고, 가장 적합한 기술과 방식으로 새로운 서비스를 만들어갑니다.</p>
          <div className="direction-note" data-reveal style={{ "--reveal-delay": "210ms" } as CSSProperties}><span>✦</span><p><b>Technology as a tool</b>AI와 자동화는 목적이 아니라, 더 나은 문제 해결을 위한 가장 유용한 수단입니다.</p></div>
        </div>
      </div>
    </section>
  );
}
