'use client';

import { useMemo, useState } from 'react';

const EXCHANGE_RATE = 1500;
const LIVE_REFERENCE_RATE = 1495.1;

const routes = [
  {
    badge: 'BEST · 첫 몽골 추천',
    title: '고비사막 + 테를지 밸런스 코스',
    summary: '5박 6일 안에 사막, 협곡, 초원, 게르, 별 관측을 모두 담는 대표 일정입니다.',
    goodFor: '처음 몽골에 가는 3~6명 팀',
    places: ['울란바토르', '차강소브라가 또는 바가가자르', '욜링암', '홍고린엘스', '바얀작', '테를지'],
    mood: '사막 60% · 초원 25% · 도시 15%',
  },
  {
    badge: 'DESERT',
    title: '고비사막 집중 코스',
    summary: '이동 시간이 길어도 홍고린엘스, 바얀작, 욜링암 등 남고비 핵심 풍경을 우선합니다.',
    goodFor: '사진, 노을, 모래언덕을 가장 중요하게 보는 팀',
    places: ['차강소브라가', '욜링암', '홍고린엘스', '바얀작', '달란자드가드'],
    mood: '사막 80% · 초원 10% · 도시 10%',
  },
  {
    badge: 'SLOW',
    title: '테를지 + 중부 초원 여유 코스',
    summary: '장거리 이동 부담을 낮추고 승마, 게르 숙박, 초원 산책, 시내 관광에 집중합니다.',
    goodFor: '부모님 동반, 이동 부담이 걱정되는 팀',
    places: ['테를지', '거북바위', '아리야발 사원', '칭기즈칸 동상', '후스타이'],
    mood: '초원 65% · 도시 25% · 사막 10%',
  },
];

const itinerary = [
  { day: 'DAY 1', date: '9/30 수', title: '울란바토르 도착 · 남쪽으로 이동', detail: '공항 또는 시내 픽업 후 차강소브라가/바가가자르 방향 이동. 첫날은 게르 숙박과 별 관측으로 시작합니다.' },
  { day: 'DAY 2', date: '10/1 목', title: '욜링암 협곡 · 남고비', detail: '욜링암 트레킹, 독수리 계곡 풍경 감상, 현지 게르 캠프 숙박. 이동 중 사진 스팟을 충분히 잡습니다.' },
  { day: 'DAY 3', date: '10/2 금', title: '홍고린엘스 모래언덕', detail: '쌍봉낙타 체험, 모래언덕 등반, 사막 노을 감상. 날씨가 좋으면 밤하늘 촬영 포인트로 운영합니다.' },
  { day: 'DAY 4', date: '10/3 토', title: '바얀작 · 장거리 이동', detail: '불타는 절벽으로 알려진 바얀작 또는 차강소브라가 지형 탐방 후 북쪽으로 이동합니다.' },
  { day: 'DAY 5', date: '10/4 일', title: '테를지 국립공원', detail: '거북바위, 아리야발 사원, 초원 산책 또는 승마 옵션. 마지막 밤은 초원 게르에서 여유롭게 보냅니다.' },
  { day: 'DAY 6', date: '10/5 월', title: '칭기즈칸 동상 · 울란바토르 복귀', detail: '칭기즈칸 기마상 방문 후 울란바토르 복귀. 항공 시간에 따라 캐시미어 쇼핑 또는 시내 카페를 추가합니다.' },
];

const usdPrices = [
  { people: '1명', usd: 3360, note: '단독 진행 기준, 비용 부담 큼' },
  { people: '2명', usd: 2150, note: '커플·친구 2인 참고가' },
  { people: '3명', usd: 1810, note: '차량 비용 분담 시작' },
  { people: '4명', usd: 1550, note: '추천 기준가' },
  { people: '5명 이상', usd: 1430, note: '1인 비용 효율 최고' },
];

const checklist = [
  '항공권은 불포함으로 계산했습니다.',
  '게르 캠프, 차량, 기사, 가이드, 식사 포함 여부는 투어사별로 다릅니다.',
  '9월 말~10월 초는 일교차가 커서 방한 장비가 필요합니다.',
  '현지 견적 확정 전까지 가격은 “예상가”로 표기하는 것이 안전합니다.',
];

function krw(usd: number) {
  return Math.round((usd * EXCHANGE_RATE) / 10000);
}

export default function Home() {
  const [people, setPeople] = useState('3~4명 모집 중');
  const [style, setStyle] = useState('사진·별·사막 중심의 감성 여행');
  const [tone, setTone] = useState('시간 약속을 잘 지키고 서로 배려하는 분');
  const [openChat, setOpenChat] = useState('https://open.kakao.com/o/여기에_오픈채팅_링크');
  const [copied, setCopied] = useState(false);

  const companionPost = useMemo(() => `[몽골 5박 6일 동행 모집] 9/30~10/5 고비사막+테를지 같이 가실 분 찾아요!

안녕하세요. 2026년 9월 30일(수)부터 10월 5일(월)까지 몽골 5박 6일 여행을 함께할 동행을 구합니다.

생각 중인 코스는 울란바토르 출발 기준으로 차강소브라가/바가가자르, 욜링암, 홍고린엘스, 바얀작, 테를지 국립공원을 연결하는 일정입니다. 사막 노을, 게르 숙박, 별 관측, 낙타 체험, 초원 풍경까지 한 번에 보고 싶은 분께 잘 맞을 것 같아요.

현재 조건
- 모집 인원: ${people}
- 여행 스타일: ${style}
- 원하는 동행: ${tone}
- 예상 비용: 4명 기준 1인 약 ${krw(1550)}만원, 5명 이상 기준 1인 약 ${krw(1430)}만원부터 참고
- 환율 기준: 1 USD = ${EXCHANGE_RATE.toLocaleString('ko-KR')}원으로 계산, 항공권 별도

장거리 차량 이동이 있는 일정이라 서로 컨디션을 배려하면서 즐겁게 여행할 분이면 좋겠습니다. 관심 있으시면 오픈채팅으로 편하게 연락 주세요!
${openChat}`, [people, style, tone, openChat]);

  const copyPost = async () => {
    await navigator.clipboard.writeText(companionPost);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="주요 메뉴">
          <a className="brand" href="#top">Mongolia Mate</a>
          <div className="navLinks">
            <a href="#route">코스</a>
            <a href="#price">금액</a>
            <a href="#ai">AI 동행글</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="pill">2026.09.30 - 10.05 · 5박 6일</p>
            <h1>몽골 고비사막과 테를지, 같이 갈 동행을 찾는 여행 페이지</h1>
            <p className="lead">코스 비교, 인원별 원화 예상 금액, AI 동행 모집 글 생성까지 한 번에 담은 모바일 최적화 랜딩 페이지입니다.</p>
            <div className="actions">
              <a className="button primary" href="#ai">동행 모집 글 만들기</a>
              <a className="button ghost" href="#price">예상 금액 보기</a>
            </div>
          </div>
          <div className="heroPanel" aria-label="여행 요약">
            <span>추천 조합</span>
            <strong>4~6명</strong>
            <p>차량·기사·가이드 비용을 나눌 수 있어 1인 비용이 가장 안정적입니다.</p>
            <div className="miniStats">
              <b>5박 6일</b>
              <b>게르 숙박</b>
              <b>사막+초원</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">왜 이 구성이 좋은가요?</p>
          <h2>짧지만 몽골다운 장면을 가장 많이 담는 구성</h2>
        </div>
        <p>5박 6일은 고비 전체를 깊게 돌기에는 빠듯하지만, 고비 핵심 지형과 테를지 초원을 연결하면 “사막·별·게르·초원” 이미지를 모두 경험할 수 있습니다. 단, 실제 가능 여부는 항공 도착 시간과 현지 투어사 차량 동선에 따라 달라집니다.</p>
      </section>

      <section className="section" id="route">
        <div className="sectionHeader">
          <p className="eyebrow">ROUTE OPTIONS</p>
          <h2>선택 가능한 5박 6일 코스</h2>
        </div>
        <div className="routeGrid">
          {routes.map((route, index) => (
            <article className={index === 0 ? 'routeCard featured' : 'routeCard'} key={route.title}>
              <span>{route.badge}</span>
              <h3>{route.title}</h3>
              <p>{route.summary}</p>
              <div className="meta">추천: {route.goodFor}</div>
              <div className="chips">{route.places.map((place) => <b key={place}>{place}</b>)}</div>
              <small>{route.mood}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section timelineWrap">
        <div className="sectionHeader left">
          <p className="eyebrow">SAMPLE ITINERARY</p>
          <h2>추천 일정표</h2>
        </div>
        <div className="timeline">
          {itinerary.map((item) => (
            <article key={item.day}>
              <div><b>{item.day}</b><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section priceSection" id="price">
        <div className="sectionHeader">
          <p className="eyebrow">KRW PRICE TABLE</p>
          <h2>인원별 예상 금액</h2>
          <p>공개 USD 가격을 1 USD = {EXCHANGE_RATE.toLocaleString('ko-KR')}원으로 환산했습니다. 참고 환율은 {LIVE_REFERENCE_RATE.toLocaleString('ko-KR')}원 수준이며, 사이트 표기는 환율 변동을 고려해 보수적으로 1,500원을 적용했습니다.</p>
        </div>
        <div className="priceGrid">
          {usdPrices.map((row) => (
            <article className={row.people === '4명' ? 'priceCard best' : 'priceCard'} key={row.people}>
              <span>{row.people}</span>
              <strong>약 {krw(row.usd)}만원</strong>
              <p>1인 US${row.usd.toLocaleString('en-US')}</p>
              <small>{row.note}</small>
            </article>
          ))}
        </div>
        <div className="formula">계산식: USD 금액 × {EXCHANGE_RATE.toLocaleString('ko-KR')}원 ÷ 10,000 = 만원 단위 반올림</div>
      </section>

      <section className="section aiSection" id="ai">
        <div className="aiCopy">
          <p className="eyebrow">AI COMPANION POST</p>
          <h2>동행 모집 글 자동 생성</h2>
          <p>조건을 바꾸면 네이버 카페, 커뮤니티, 카카오 오픈채팅 공지에 바로 붙여넣을 수 있는 글이 생성됩니다.</p>
          <ul>
            {checklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="generator">
          <label>모집 인원
            <select value={people} onChange={(e) => setPeople(e.target.value)}>
              <option>2명 모집 중</option>
              <option>3~4명 모집 중</option>
              <option>5명까지 모집</option>
            </select>
          </label>
          <label>여행 스타일
            <select value={style} onChange={(e) => setStyle(e.target.value)}>
              <option>사진·별·사막 중심의 감성 여행</option>
              <option>일정 빡빡하지 않은 여유 여행</option>
              <option>액티비티와 장거리 이동도 괜찮은 알찬 여행</option>
            </select>
          </label>
          <label>원하는 동행
            <select value={tone} onChange={(e) => setTone(e.target.value)}>
              <option>시간 약속을 잘 지키고 서로 배려하는 분</option>
              <option>사진을 서로 잘 찍어줄 수 있는 분</option>
              <option>장거리 이동에도 긍정적인 분</option>
            </select>
          </label>
          <label>카카오 오픈채팅 링크
            <input value={openChat} onChange={(e) => setOpenChat(e.target.value)} />
          </label>
          <textarea value={companionPost} readOnly rows={16} />
          <button className="button primary full" type="button" onClick={copyPost}>{copied ? '복사 완료!' : '동행 글 복사하기'}</button>
        </div>
      </section>

      <section className="section deploy">
        <div>
          <p className="eyebrow">DEPLOY READY</p>
          <h2>Vercel 배포 준비 완료</h2>
          <p>GitHub에 업로드한 뒤 Vercel에서 Import하면 바로 배포할 수 있습니다. 오픈채팅 링크만 실제 링크로 바꾸면 모집 페이지로 사용할 수 있습니다.</p>
        </div>
        <pre><code>{`npm install
npm run dev
# http://localhost:3000

npm run build`}</code></pre>
      </section>

      <section className="section sources">
        <h2>출처와 주의사항</h2>
        <p>코스와 가격은 공개 여행상품 페이지를 기반으로 한 참고 정보입니다. 2026년 9월 30일~10월 5일 실제 가능 여부, 포함/불포함, 항공 스케줄, 가이드 언어, 숙소 등급은 예약 전 투어사에 직접 확인해야 합니다.</p>
        <ol>
          <li>WAUG: 고비사막+테를지 5박 6일 코스와 주요 체험 참고</li>
          <li>Mongolia Short Tours: 6일/5박 프라이빗 투어 인원별 USD 가격 참고</li>
          <li>Selena Travel: 2026년 Gobi Odyssey 6일/5박 조인 그룹 투어 가격 참고</li>
          <li>Seoul Money Brokerage Services: 2026년 5월 15일 USD/KRW 1,495.10원 참고</li>
        </ol>
      </section>

      <footer>
        <b>Mongolia Mate</b>
        <span>© 2026 · 여행 전 현지 견적과 항공편을 반드시 재확인하세요.</span>
      </footer>
    </main>
  );
}
