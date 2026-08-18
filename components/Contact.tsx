import { ArrowIcon } from "./Icons";
import type { CSSProperties } from "react";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
      <div className="container contact-inner">
        <span className="contact-kicker" data-reveal>LET&apos;S WORK TOGETHER</span>
        <h2 className="title-reveal" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>함께 새로운 문제를<br />해결해보세요.</h2>
        <p data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>콘텐트럭과의 서비스, 기술, 프로젝트 및 협업 제안을 기다립니다.</p>
        <a className="contact-mail" data-magnetic data-reveal style={{ "--reveal-delay": "210ms" } as CSSProperties} href="mailto:ceo@contentruck.co.kr">ceo@contentruck.co.kr <ArrowIcon /></a>
        <span className="contact-note" data-reveal style={{ "--reveal-delay": "280ms" } as CSSProperties}>일반 문의 · 서비스 제안 · 파트너십 및 협업 문의</span>
      </div>
    </section>
  );
}
