import { Header } from "@/components/Header";
import { HeroVisual } from "@/components/HeroVisual";
import { Reveal } from "@/components/Reveal";

const process = [
  {
    number: "01",
    label: "Discover",
    title: "문제를 발견합니다",
    description:
      "일상과 산업의 작은 마찰을 관찰하고, 사용자에게 실제로 중요한 문제를 선명하게 정의합니다.",
  },
  {
    number: "02",
    label: "Design",
    title: "경험을 설계합니다",
    description:
      "복잡한 문제를 누구나 이해하고 사용할 수 있는 단순한 흐름과 제품 경험으로 바꿉니다.",
  },
  {
    number: "03",
    label: "Build",
    title: "빠르게 구현합니다",
    description:
      "AI와 자동화를 적절한 도구로 활용해 아이디어를 실제 작동하는 디지털 서비스로 만듭니다.",
  },
  {
    number: "04",
    label: "Validate",
    title: "시장과 검증합니다",
    description:
      "사용자의 선택과 데이터에서 배우고, 확인한 신호를 다음 제품과 개선으로 연결합니다.",
  },
];

const principles = [
  {
    number: "01",
    label: "USEFUL FIRST",
    title: "기술보다 쓸모",
    description:
      "새로운 기술 자체보다 그것이 사용자의 하루를 얼마나 쉽고 유용하게 만드는지 먼저 봅니다.",
  },
  {
    number: "02",
    label: "SHIP TO LEARN",
    title: "완벽보다 실행",
    description:
      "작게 만들고 빠르게 시장에 내놓습니다. 생각만으로 얻을 수 없는 답을 실제 사용에서 찾습니다.",
  },
  {
    number: "03",
    label: "SIMPLE BY DESIGN",
    title: "기능보다 경험",
    description:
      "복잡한 기술은 안쪽에 두고, 사용자가 마주하는 경험은 명확하고 자연스럽게 설계합니다.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">
                  <span className="eyebrow-dot" />
                  AI-POWERED VENTURE STUDIO
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1>
                  문제를 발견하고,
                  <br />
                  <span>새로운 서비스를 만듭니다.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="hero-description">
                  콘텐츠럭은 사용자의 문제를 발견하고, AI와 자동화를 활용해
                  쉽고 유용한 디지털 서비스를 만드는 벤처스튜디오입니다.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="hero-actions">
                  <a className="button button-primary" href="#approach">
                    우리가 일하는 방식
                    <span aria-hidden="true">↘</span>
                  </a>
                  <a className="button button-text" href="#contact">
                    이야기 시작하기
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="hero-visual-wrap" delay={260}>
              <HeroVisual />
            </Reveal>
          </div>
          <div className="container hero-meta" aria-label="Contentruck operating status">
            <span>SEOUL / KOREA</span>
            <span>VENTURE STUDIO · 2026</span>
            <span className="status"><i /> ALWAYS EXPLORING</span>
          </div>
        </section>

        <section className="section studio" id="about">
          <div className="container">
            <Reveal className="section-intro">
              <p className="section-index">01 — STUDIO</p>
              <h2>
                하나의 제품에 머무르지 않고,
                <br />
                <span>다음 문제를 계속 탐색합니다.</span>
              </h2>
            </Reveal>
            <div className="studio-grid">
              <Reveal className="studio-definition">
                <p className="large-body">
                  콘텐츠럭은 다양한 문제를 발견하고 직접 서비스를 만드는
                  벤처스튜디오입니다.
                </p>
                <p>
                  우리는 외주 개발사가 아닙니다. 하나의 솔루션만 판매하는
                  회사도 아닙니다. 사용자 관찰에서 시작해 제품을 만들고,
                  시장의 반응으로 다음 방향을 결정합니다.
                </p>
              </Reveal>
              <Reveal className="studio-signals" delay={120}>
                <div className="signal-row">
                  <span>FOCUS</span>
                  <strong>Everyday problems</strong>
                  <em>01</em>
                </div>
                <div className="signal-row">
                  <span>OUTPUT</span>
                  <strong>Useful digital services</strong>
                  <em>02</em>
                </div>
                <div className="signal-row">
                  <span>ENGINE</span>
                  <strong>AI · Automation · Data</strong>
                  <em>03</em>
                </div>
                <div className="signal-row">
                  <span>METHOD</span>
                  <strong>Build · Learn · Repeat</strong>
                  <em>04</em>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="container">
            <Reveal className="section-intro approach-heading">
              <p className="section-index">02 — APPROACH</p>
              <h2>
                발견에서 서비스까지,
                <br />
                <span>하나의 흐름으로 연결합니다.</span>
              </h2>
              <p className="section-description">
                빠르게 만드는 것과 올바른 것을 만드는 것 사이의 균형을
                반복 가능한 과정으로 설계합니다.
              </p>
            </Reveal>
            <div className="process" aria-label="Contentruck process">
              <div className="process-line" aria-hidden="true"><span /></div>
              {process.map((step, index) => (
                <Reveal
                  className="process-step"
                  delay={index * 70}
                  key={step.label}
                >
                  <div className="process-number">
                    <span>{step.number}</span>
                    <i />
                  </div>
                  <p className="process-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section build">
          <div className="container build-grid">
            <Reveal className="build-copy">
              <p className="section-index section-index-light">03 — WHAT WE BUILD</p>
              <h2>
                기술을 앞세우기보다
                <br />
                <span>더 나은 사용 경험을 만듭니다.</span>
              </h2>
            </Reveal>
            <Reveal className="build-statement" delay={100}>
              <p>
                AI와 자동화는 우리의 목적이 아니라 실행을 더 빠르고 정교하게
                만드는 도구입니다.
              </p>
              <div className="build-status">
                <span>NOW EXPLORING</span>
                <strong>New problems, useful answers.</strong>
                <i>ACTIVE</i>
              </div>
            </Reveal>
          </div>
          <div className="build-marquee" aria-hidden="true">
            <div>
              <span>PROBLEM</span><i>→</i><span>IDEA</span><i>→</i>
              <span>BUILD</span><i>→</i><span>SERVICE</span><i>→</i>
              <span>LEARN</span><i>→</i><span>PROBLEM</span>
            </div>
          </div>
        </section>

        <section className="section principles" id="principles">
          <div className="container">
            <Reveal className="section-intro principles-heading">
              <p className="section-index">04 — PRINCIPLES</p>
              <h2>
                우리가 제품을 만드는
                <br />
                <span>세 가지 기준.</span>
              </h2>
            </Reveal>
            <div className="principle-list">
              {principles.map((principle, index) => (
                <Reveal
                  className="principle-row"
                  delay={index * 70}
                  key={principle.number}
                >
                  <span className="principle-number">{principle.number}</span>
                  <p className="principle-label">{principle.label}</p>
                  <h3>{principle.title}</h3>
                  <p className="principle-description">
                    {principle.description}
                  </p>
                  <span className="principle-arrow" aria-hidden="true">↗</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-grid">
            <Reveal>
              <p className="section-index">05 — CONTACT</p>
              <h2>
                함께 발견할
                <br />
                <span>문제가 있나요?</span>
              </h2>
            </Reveal>
            <Reveal className="contact-action" delay={100}>
              <p>
                새로운 아이디어, 협업, 혹은 해결하고 싶은 문제에 대해
                이야기해주세요.
              </p>
              <a href="mailto:contact@contentruck.com">
                contact@contentruck.com
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <a className="footer-logo" href="#top" aria-label="Contentruck 홈">
            <span>C</span>
            CONTENTRUCK
          </a>
          <p>Problem to product.<br />Built with clarity.</p>
          <div className="footer-meta">
            <span>© 2026 CONTENTRUCK</span>
            <span>SEOUL, SOUTH KOREA</span>
          </div>
        </div>
      </footer>
    </>
  );
}
