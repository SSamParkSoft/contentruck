import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "콘텐츠럭 | 문제를 발견하고, 새로운 서비스를 만듭니다",
  description:
    "콘텐츠럭은 사용자의 문제를 발견하고 AI와 자동화를 활용해 쉽고 유용한 디지털 서비스를 만드는 벤처스튜디오입니다.",
  keywords: [
    "콘텐츠럭",
    "Contentruck",
    "벤처스튜디오",
    "AI 서비스",
    "디지털 서비스",
    "스타트업",
  ],
  openGraph: {
    title: "콘텐츠럭 | AI-Powered Venture Studio",
    description:
      "문제를 발견하고, AI와 자동화로 새로운 디지털 서비스를 만듭니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
