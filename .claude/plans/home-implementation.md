# Wave 2-A 홈 페이지 구현 계획

## Context

Figma(QosvLUINHW725RugIH71W4) 기반으로 홈 페이지를 새롭게 구현한다.  
기존 `index.html`(레거시 1192줄)을 완전히 대체하고, 섹션별 컴포넌트를 `layout/home/`에 분리 생성한 뒤 `index.html`에서 조립한다.

---

## 결정사항

| 항목            | 결정                                                           |
| --------------- | -------------------------------------------------------------- |
| Hero            | Swiper 슬라이더 (custom_moduleedit_1, fade + loop + autoplay)  |
| 카테고리 퀵링크 | 모바일 전용 (`md:hidden`), 데스크톱 카테고리는 헤더 nav로 처리 |
| Curation 이미지 | Cafe24 custom_moduleedit_N (관리자 편집 가능)                  |
| 뉴스레터 섹션   | 혜택 게시판 board_no=2, 최신 2개 항목 오래된 순 표시           |

---

## Figma 참조

| 컴포넌트                         | Figma URL                                                                                                            | 적용 위치           |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Home/Curation                    | [29301-4914](https://www.figma.com/design/QosvLUINHW725RugIH71W4/studiobaton_cafe24_skin?node-id=29301-4914&m=dev)   | `curation.html`     |
| Shop List/Product (PC/홈, MO/홈) | [29301-4745](https://www.figma.com/design/QosvLUINHW725RugIH71W4/studiobaton_cafe24_skin?node-id=29301-4745&m=dev)   | `product-grid.html` |
| Home/Mobile (전체 레이아웃)      | [29301-11693](https://www.figma.com/design/QosvLUINHW725RugIH71W4/studiobaton_cafe24_skin?node-id=29301-11693&m=dev) | 참조용              |
| Home/Desktop (전체 레이아웃)     | [29301-11799](https://www.figma.com/design/QosvLUINHW725RugIH71W4/studiobaton_cafe24_skin?node-id=29301-11799&m=dev) | 참조용              |

---

## 홈 페이지 섹션 구조 (Figma 기준)

```
1. Hero 배너          → hero.html
2. 카테고리 퀵링크    → category-quicklinks.html (모바일 전용)
3. Curation 섹션      → curation.html
   - Desktop: 좌측 대형 이미지 1개 + 우측 2개 세로 스택 (비대칭)
   - Mobile: 대형 이미지 단독 + 아래 2열 그리드
4. 상품 그리드 ×2    → product-grid.html (섹션 타이틀 "큐레이션" 스타일 동일)
   - Desktop: 5열 / Mobile: 2열
5. 뉴스레터 섹션      → newsletter.html
```

---

## 파일 구조 (신규 생성)

```
layout/home/
├── hero.html                  — Hero 슬라이더
├── category-quicklinks.html   — 카테고리 퀵링크 (모바일 전용)
├── curation.html              — Curation 섹션 (이미지 비대칭 레이아웃)
├── product-grid.html          — 상품 그리드 섹션 2개 포함
├── newsletter.html            — 뉴스레터 섹션 (게시판)
└── home.js                    — Swiper 초기화

index.html                     — 전체 조립 (기존 파일 교체)
```

---

## Cafe24 모듈 배분

| 모듈                    | 파일                     | 용도                        |
| ----------------------- | ------------------------ | --------------------------- |
| custom_moduleedit_1     | hero.html                | Hero 슬라이드               |
| custom_moduleedit_2     | category-quicklinks.html | 카테고리 퀵링크 4개         |
| custom_moduleedit_3     | curation.html            | Curation 항목 1 (좌측 대형) |
| custom_moduleedit_4     | curation.html            | Curation 항목 2 (우측 상단) |
| custom_moduleedit_5     | curation.html            | Curation 항목 3 (우측 하단) |
| product_listmain_1      | product-grid.html        | 상품 그리드 섹션 1 (5개)    |
| product_listmain_2      | product-grid.html        | 상품 그리드 섹션 2 (5개)    |
| board_list (board_no=2) | newsletter.html          | 혜택 게시판 최신 2개        |

---

## 서브 Wave별 구현 상세

### Sub Wave 2-A-1: Hero 배너

**파일**: `layout/home/hero.html`

- `<section id="hero" module="custom_moduleedit_1">` 래퍼
- 섹션에 `aspect-[3/4] md:aspect-[16/7] relative overflow-hidden` 적용 → 높이를 비율로 결정
- `.swiper-container h-full` → Swiper가 섹션 전체 높이 점유
- 각 슬라이드: `<picture>` 반응형 이미지 (레거시 패턴 동일) + 좌하단 텍스트 오버레이
  - `<source media="(min-width: 768px)">` (데스크톱 이미지) + `<img>` (모바일 이미지)
  - `absolute inset-0 w-full h-full object-cover` 이미지
  - `absolute bottom-4 left-4 md:bottom-10 md:left-10` 텍스트 컨테이너
  - 브랜드명: `text-c1 text-on-color uppercase` / 제목: `text-h4 md:text-h2 text-on-color` / 설명: `text-p4 md:text-p3 text-on-color`
  - CTA: `border border-color-on-color text-c1 text-on-color px-4 py-2 w-fit`
- Swiper pagination: `.swiper-pagination` (home.js에서 초기화)

### Sub Wave 2-A-2: 카테고리 퀵링크

**파일**: `layout/home/category-quicklinks.html`

- `md:hidden` (모바일 전용)
- **2×2 그리드** (`grid grid-cols-2 gap-3`) — Figma 기준 (가로 스크롤 아님)
- `module="project_list"` — `{$project_link}`, `{$project_image}`, `{$project_name}` 변수 사용
- 항목당 구조: `relative aspect-[4/5] rounded-lg overflow-hidden` + 배경 이미지 + 하단 텍스트 오버레이 (`text-l6 text-on-color`)

### Sub Wave 2-A-3: Curation 섹션

**파일**: `layout/home/curation.html`  
**Figma**: [29301-4914](https://www.figma.com/design/QosvLUINHW725RugIH71W4/studiobaton_cafe24_skin?node-id=29301-4914&m=dev) (Home/Curation, PC/MO 양쪽)

**섹션 헤더** (큐레이션 타이틀 + 부제목):

- `text-h4 md:text-h3 text-primary` 타이틀
- `text-p2 text-secondary` 부제목

**이미지 레이아웃**:

- Mobile: 세로 스택 (full-width 대형 이미지 → 아래 2열 그리드)
- Desktop (`md:`): `flex gap-*` 비대칭 — 좌 `flex-[3]` + 우 `flex-[2] flex-col gap-*`

**각 항목** (custom_moduleedit_3/4/5):

- 이미지 컨테이너: `aspect-[4/5] rounded-lg overflow-hidden`
- 이미지 하단 정보: 카테고리명 / 제품명(bold) / 간략 설명 (`text-c1 text-secondary`)

### Sub Wave 2-A-4: 상품 그리드

**파일**: `layout/home/product-grid.html`  
**Figma**: [29301-4745](https://www.figma.com/design/QosvLUINHW725RugIH71W4/studiobaton_cafe24_skin?node-id=29301-4745&m=dev) (Shop List/Product — PC/홈, MO/홈 variant)

- 2개 섹션을 하나의 파일로 구성 (섹션 헤더 패턴 동일)
- 섹션 헤더: 타이틀 + 부제목 (curation.html과 동일 클래스)
- `product_listmain_1` / `product_listmain_2` 모듈, 각 5개 상품
- 그리드: `grid grid-cols-2 md:grid-cols-5 gap-4`
- **홈형 카드** 구조 (PC/홈, MO/홈 variant):
  - 이미지: `aspect-[4/5] rounded-lg`
  - "담기" 버튼: `border border-color-primary text-secondary` 아웃라인 버튼
  - 카테고리명 + 우측 화살표 아이콘
  - 제품명: `text-primary text-l5 md:text-l5`
  - 현재가(bold) / 원가(line-through `text-tertiary`) / 할인율(`text-error`)
  - 베스트 뱃지: 이미지 좌상단 절대 위치

### Sub Wave 2-A-5: 뉴스레터 섹션

**파일**: `layout/home/newsletter.html`

- 배경: `custom_moduleedit_6` (full-width 배경 이미지)
- 혜택 게시판 모듈 `board_no=2`, 최신 2개 항목 (오래된 순 정렬)
- 각 항목: 제목 텍스트 + 우측 화살표 아이콘, `href={$link_board_detail}`
- 하단: SNS 아이콘 3개 (footer와 동일 패턴)
  - `<!--@import(/svg/icon/sns_Facebook.html)-->`
  - `<!--@import(/svg/icon/sns_Instagram.html)-->`
  - `<!--@import(/svg/icon/sns_Kakao.html)-->`

### Sub Wave 2-A-6: Swiper JS

**파일**: `layout/home/home.js`

- `main.html`이 이미 `swiper-bundle.js`와 `main.js`를 포함함 → `home.js`에서 재선언 불필요
- `main.js`의 `swiperVisual()`은 `.mainVisual .swiper-container`를 타겟팅하므로, 새 hero가 `.mainVisual` 클래스를 쓰지 않으면 충돌 없이 무해하게 실패
- hero 섹션 id `hero`, Swiper 타겟은 `#hero .swiper-container`

```javascript
window.addEventListener('load', function () {
  new Swiper('#hero .swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '#hero .swiper-pagination', clickable: true },
  });
});
```

### Sub Wave 2-A-7: index.html 조립

**파일**: `index.html` (기존 파일 전체 교체)

```html
<!--@layout(/layout/basic/main.html)-->
<!--@import(/layout/home/hero.html)-->
<!--@import(/layout/home/category-quicklinks.html)-->
<!--@import(/layout/home/curation.html)-->
<!--@import(/layout/home/product-grid.html)-->
<!--@import(/layout/home/newsletter.html)-->
<!--@js(/layout/home/home.js)-->
```

---

## 참조 파일 (읽기 전용)

| 파일                        | 참조 목적                                       |
| --------------------------- | ----------------------------------------------- |
| `layout/basic/js/main.js`   | Swiper 초기화 패턴                              |
| `layout/footer/footer.html` | 컴포넌트 파일 작성 패턴, SNS 아이콘 임포트 패턴 |
| `layout/header/header.html` | 헤더 카테고리 nav (퀵링크와 중복 방지 확인)     |
| `src/tailwind.css`          | 사용 가능한 유틸리티 클래스                     |
| `layout/basic/footer.html`  | 레거시 board 모듈 패턴 참조                     |

---

## 검증 항목

- [ ] `grep -rn "style=\"" layout/home/ --include="*.html"` → 0건
- [ ] Hero: Swiper 슬라이드 동작 (fade 전환, 자동 재생)
- [ ] 카테고리 퀵링크: 모바일 표시 / 데스크톱 숨김 확인
- [ ] Curation: Desktop 비대칭 레이아웃 (좌 대형 + 우 2단) / Mobile 스택 확인
- [ ] 상품 그리드: Desktop 5열 / Mobile 2열, 홈형 카드 렌더링
- [ ] 뉴스레터: 게시판 항목 2개 표시, 링크 정상 동작
- [ ] Chrome MCP 모바일/데스크톱 화면 스크린샷 비교

---

## 작업 순서 (서브 Wave)

> **세션 규칙**: 서브 Wave 하나 = 세션 하나. 완료 후 `/verify` → `/commit` → 이 문서 진행 상황 업데이트 → 세션 종료. 다음 서브 Wave는 새 세션에서 진행.

| 서브 Wave | 파일                                   | 상태 |
| --------- | -------------------------------------- | ---- |
| 2-A-1     | `layout/home/hero.html`                | ✅   |
| 2-A-2     | `layout/home/category-quicklinks.html` | ✅   |
| 2-A-3     | `layout/home/curation.html`            | ✅   |
| 2-A-4     | `layout/home/product-grid.html`        | ✅   |
| 2-A-5     | `layout/home/newsletter.html`          | ✅   |
| 2-A-6     | `layout/home/home.js`                  | ✅   |
| 2-A-7     | `index.html` (조립)                    | ✅   |
