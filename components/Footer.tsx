export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">C</span> CONTENTRUCK</a>
        <a href="mailto:ceo@contentruck.co.kr">ceo@contentruck.co.kr</a>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Contentruck. All rights reserved.</span>
        <div>
          <a
            href="https://jasper-chiller-0f4.notion.site/3a6e1d5d7567800ea950dac4b5c75390?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보처리방침
          </a>
          <a
            href="https://jasper-chiller-0f4.notion.site/3a6e1d5d7567808fb8eaf9a2fcf3c55e?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            이용약관
          </a>
        </div>
      </div>
      <div className="container footer-business">
        <strong>주식회사 콘텐트럭</strong>
        <div className="footer-business-meta">
          <span>대표자: 박종인</span>
          <span>사업자등록번호: 614-87-03791</span>
          <a href="mailto:ceo@contentruck.co.kr">이메일: ceo@contentruck.co.kr</a>
        </div>
        <address>
          주소: 경기도 안산시 상록구 한양대학로 55, 제5공학관 지하 1층{" "}
          <span className="footer-nowrap">소프트웨어창업실</span> 2호
        </address>
      </div>
    </footer>
  );
}
