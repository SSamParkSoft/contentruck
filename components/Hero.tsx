import { ArrowIcon } from "./Icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" />
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> USER-DRIVEN VENTURE STUDIO</div>
          <h1>문제를 발견하고,<br /><em>새로운 서비스를</em> 만듭니다.</h1>
        <p>콘텐트럭은 사용자의 문제를 발견하고, AI와 자동화를 활용해 누구나 쉽게 사용할 수 있는 디지털 서비스를 만들어갑니다.</p>
          <div className="hero-actions">
          <a className="button button-primary" href="#about">콘텐트럭 알아보기 <ArrowIcon /></a>
            <a className="button button-secondary" href="#contact">문의하기</a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-bottom container">
        <span>SCROLL TO DISCOVER</span>
        <i />
        <span>SEOUL · KOREA</span>
      </div>
    </section>
  );
}
