import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://contentruck.com"),
  title: "Contentruck | 문제를 발견하고 새로운 서비스를 만듭니다",
  description:
    "콘텐트럭은 사용자의 문제를 발견하고 AI와 자동화를 활용해 쉽고 유용한 디지털 서비스를 만드는 벤처스튜디오입니다.",
  openGraph: {
    title: "Contentruck | 문제를 발견하고 새로운 서비스를 만듭니다",
    description:
      "사용자에게 필요한 문제를 발견하고, AI와 자동화를 가장 사용하기 쉬운 서비스로 구현합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "Contentruck",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Contentruck — 문제를 발견하고 새로운 서비스를 만듭니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contentruck | 문제를 발견하고 새로운 서비스를 만듭니다",
    description:
      "사용자의 문제에서 출발해 쉽고 유용한 디지털 서비스를 만드는 벤처스튜디오",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f9fc",
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
