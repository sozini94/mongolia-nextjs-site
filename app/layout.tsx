import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mongolia Mate · 5박 6일 몽골 동행 모집',
  description: '2026년 9월 30일~10월 5일 몽골 고비사막+테를지 5박 6일 여행 코스, 원화 예상 금액, AI 동행 모집 글 생성 페이지',
  openGraph: {
    title: 'Mongolia Mate · 몽골 동행 모집',
    description: '코스·인원별 금액·AI 동행 모집 글을 한 페이지에 담은 몽골 여행 랜딩 페이지',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
