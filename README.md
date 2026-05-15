# Mongolia Mate Next.js Site

2026년 9월 30일~10월 5일 몽골 5박 6일 여행 동행 모집용 Next.js 랜딩 페이지입니다.

## 포함 기능

- 고비사막 + 테를지 5박 6일 추천 코스
- 인원별 예상 금액을 원화로 표시
- 1 USD = 1,500원 기준 계산
- AI 동행 모집 글 생성 UI
- 카카오 오픈채팅 링크 입력란
- 모바일 반응형 디자인
- Vercel 배포 가능

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 배포

1. GitHub 저장소에 업로드
2. Vercel에서 Import Project
3. Framework Preset: Next.js
4. Deploy 클릭

## 수정하면 좋은 부분

- `app/page.tsx`의 `openChat` 기본값을 실제 카카오 오픈채팅 URL로 변경
- 투어사 확정 견적을 받은 뒤 `usdPrices` 값을 실제 금액으로 변경
- 항공권 포함 여부, 여행자보험, 예약금 정책 등 추가

## 정보 출처

- WAUG: 고비사막+테를지 5박 6일 코스 참고
- Mongolia Short Tours: 6일/5박 프라이빗 투어 인원별 USD 가격 참고
- Selena Travel: 2026년 Gobi Odyssey 6일/5박 조인 그룹 가격 참고
- Seoul Money Brokerage Services: 2026년 5월 15일 USD/KRW 1,495.10원 참고
