import { ArrowIcon } from "./Icons";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
      <div className="container contact-inner">
        <span className="contact-kicker">LET&apos;S WORK TOGETHER</span>
        <h2>함께 새로운 문제를<br />해결해보세요.</h2>
        <p>콘텐츠럭과의 서비스, 기술, 프로젝트 및 협업 제안을 기다립니다.</p>
        <a className="contact-mail" href="mailto:contact@contentruck.com">contact@contentruck.com <ArrowIcon /></a>
        <span className="contact-note">일반 문의 · 서비스 제안 · 파트너십 및 협업 문의</span>
      </div>
    </section>
  );
}
