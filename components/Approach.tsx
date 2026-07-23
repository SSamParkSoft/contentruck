import { approachSteps } from "@/data/content";

export function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div className="section-heading centered">
          <span className="section-kicker">02 — OUR APPROACH</span>
          <h2>아이디어를 실제 서비스로 만드는 방법</h2>
          <p>관찰에서 시작해 시장의 답을 듣기까지, 빠르고 유연하게 움직입니다.</p>
        </div>
        <div className="approach-track" aria-label="콘텐트럭의 서비스 제작 과정">
          {approachSteps.map((step, index) => (
            <article className="step-card" key={step.eyebrow}>
              <div className="step-top">
                <span>{step.number}</span>
                <i>{index < approachSteps.length - 1 ? "→" : "↻"}</i>
              </div>
              <span className="step-eyebrow">{step.eyebrow}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="approach-loop"><span>관찰</span><i /><span>설계</span><i /><span>실행</span><i /><span>학습</span><b>그리고 다시, 더 나은 문제 해결로</b></div>
      </div>
    </section>
  );
}
