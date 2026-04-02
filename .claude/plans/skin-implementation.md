# Cafe24 스킨 구현 계획

## Context

Figma 디자인(QosvLUINHW725RugIH71W4)을 기반으로 Cafe24 스킨 3페이지를 구현하는 마이그레이션 작업.
기존 레거시 코드를 완전히 대체하는 새로운 UI를 적용한다. Figma와의 디자인 정합성이 최우선.

**기술 스택**: TailwindCSS (`src/tailwind.css`) — `@theme`, `@layer base`, `@utility`로 토큰/유틸리티 정의

**개발 순서**: 모바일 퍼스트 — 각 컴포넌트/페이지는 모바일 시안 먼저 완성 후 데스크톱 시안 작업

---

## Figma NodeId 참조

**파일키**: `QosvLUINHW725RugIH71W4`

### 컴포넌트 레이어 (`29301:9134`)

| 컴포넌트                       | NodeId     |
| ------------------------------ | ---------- |
| Header / Desktop               | 29301:4894 |
| Header / Mobile                | 29301:5006 |
| Header / Menu (드로어)         | 29301:4939 |
| Footer / Desktop               | 29301:4715 |
| Footer / Mobile                | 29301:4684 |
| Shop List / Product (카드 4종) | 29301:4745 |
| Home / Curation (PC/MO)        | 29301:4914 |
| Shop Detail / Fixed Button     | 29301:7025 |
| Shop Detail / Mobile (탭 5종)  | 29301:5020 |
| Shop Detail / Desktop (탭 5종) | 29301:6111 |

### 페이지 레이어 (`29301:15414`)

| 페이지                | NodeId      |
| --------------------- | ----------- |
| Home / Mobile         | 29301:11693 |
| Home / Desktop        | 29301:11799 |
| Shop List / Mobile    | 29301:11616 |
| Shop List / Desktop   | 29301:11899 |
| Shop Detail / Mobile  | 29301:11958 |
| Shop Detail / Desktop | 29301:12171 |

---

## 완료된 작업

| 파일                                  | Wave     | 상태    |
| ------------------------------------- | -------- | ------- |
| `src/tailwind.css`                    | Wave 0   | ✅ 완료 |
| `layout/header/header.html`           | Wave 1-A | ✅ 완료 |
| `layout/header/header.js`             | Wave 1-A | ✅ 완료 |
| `layout/header/state_login.html`      | Wave 1-A | ✅ 완료 |

---

## 코딩 원칙 — 하드코딩 금지

> 디자인 변경 시 `src/tailwind.css` 한 곳만 수정하면 전체 반영되도록 유지한다.

### 색상 / 타이포그래피

- 모든 색상·타이포·간격은 `src/tailwind.css`에 정의된 Tailwind 유틸리티 클래스로 적용.
- hex 직접 입력 금지. `style=""` 인라인 스타일 금지.
- 주요 시맨틱 클래스:

| UI 요소                     | 사용 클래스                          |
| --------------------------- | ------------------------------------ |
| 기본 텍스트                 | `text-primary`                       |
| 보조 텍스트                 | `text-secondary`                     |
| 비활성/플레이스홀더         | `text-tertiary`                      |
| 할인율 (빨강)               | `text-error`                         |
| 장바구니 담기 버튼 (노랑)   | `bg-warning`                         |
| 바로 구매하기 버튼 (검정)   | `bg-black`                           |
| 기본 보더                   | `border-color-primary`               |
| 강조 보더 (선택 상태)       | `border-color-tertiary`              |
| 배경 기본                   | `bg-primary`                         |
| 배경 보조                   | `bg-secondary`                       |

### 구조 — 반응형

TailwindCSS의 반응형 prefix 사용:

| prefix     | 적용 시점              | 기준              |
| ---------- | ---------------------- | ----------------- |
| (없음)     | 모바일 기본            | < 768px           |
| `md:`      | 태블릿 이상            | ≥ 768px           |

**규칙 요약**:

1. 모바일 퍼스트 — 기본값은 모바일, `md:` prefix로 데스크톱 오버라이드
2. `hidden md:block` / `md:hidden` 패턴으로 표시/숨김 제어
3. 신규 브레이크포인트 추가 금지 (sm, lg, xl 사용 불가 — Tailwind config 정의 없음)

### Cafe24 변수 사용 규칙

- HTML에서 `{$변수}` 형식 사용 시 반드시 부모 요소(또는 자신)에 `module="모듈명"` 속성 설정 필요
- 예: `{$basket_count}`는 `module="Layout_OrderBasketcount"` 요소 내부에서만 유효

### 검증 (모든 브랜치 공통)

```
grep -rn "style=\"" layout/ --include="*.html"
```

→ 인라인 스타일 0건이어야 함 (Cafe24 기존 레거시 모듈 제외)

---

## 브랜치 완료 절차

각 브랜치 작업 완료 후 순서대로 실행:

1. `/verify` — 정적 검사 + SFTP 배포 후 Chrome MCP 확인
2. `/commit` — 컨벤션에 따라 커밋 생성
3. `/pr` — feature/\* → dev PR 생성 (사용자가 검토 후 병합)

---

## Wave 0 — 공통 기반

> 브랜치: `feature/common-styles` | 상태: ✅ 완료

### 완료 파일

- `src/tailwind.css` — `@theme` 색상 토큰, `@layer base` 시맨틱 변수/리셋, `@utility` 타이포그래피/색상/그림자 유틸리티

---

## Wave 1-A — Header

> 브랜치: `feature/header` | 상태: ✅ 완료

### 완료 파일

- `layout/header/header.html`
- `layout/header/header.js`
- `layout/header/state_login.html`

### 구현 내용 (Figma: 29301:4894, 29301:5006, 29301:4939)

**Desktop (≥768px)**

- 좌: 브랜드 로고 (`module="Layout_LogoTop"`)
- 중앙: 카테고리 nav (`module="Layout_category"`) — `hidden md:block`
- 우: 검색 / 로그인(state_login.html) / 장바구니 (`module="Layout_OrderBasketcount"`)
- `sticky top-0` 고정

**Mobile (<768px)**

- 좌: 브랜드 로고
- 우: 메뉴(드로어 열기) / 검색 / 로그인 / 장바구니
- 드로어: `#slideMenuWrap` — 1depth / 2depth 패널 전환 (translateX 애니메이션)
- 하단 고정: 로그인 / 공지사항 / 자주 묻는 질문

---

## Wave 1-B — Footer

> 브랜치: `feature/footer` ← **현재** | 상태: ⬜ | Wave 0 완료 후 (Wave 1-A와 병렬)

### 수정 파일

- `layout/footer/footer.html` ✦ (신규 생성)
- `layout/footer/footer.js` ✦ (필요 시 신규 생성)

### 요구사항 (Figma: 29301:4715, 29301:4684)

**Mobile (<768px, 세로 스택)**

- 회사명 + 대표
- 사업자등록번호 [사업자정보확인]
- 주소 / 통신판매번호 / 대표메일 / 사입도매문의 / 해외수출문의
- 구분선
- 이용약관 / 개인정보처리방침 / 이용안내 / Site by BATON
- COPYRIGHT © 2026
- SNS 아이콘 (Instagram, YouTube, 카카오채널)

**Desktop (≥768px, 단일 행)**

- 좌: 사업자 정보 (회사명 / 대표 / 사업자등록번호 / 주소 / 통신판매번호 / 대표메일 / 사입도매문의)
- 중: 이용약관 / 개인정보처리방침 / 이용안내 / Site by BATON / COPYRIGHT © 2026
- 우: SNS 아이콘 3개
- 배경: white

### 구현 목표

1. **footer.html**
   - Cafe24 변수(`{$company_name}`, `{$president_name}`, `{$phone}` 등) — 반드시 부모에 적절한 `module` 설정
   - `layout/basic/footer.html`의 기존 Cafe24 모듈(Bottom Navigation, 다중상점, 결제레이어 등) 유지 또는 이식
   - `layout/footer/footer.html` 신규 마크업으로 Figma 구조 구현
2. **Tailwind 클래스 사용**
   - 배경/텍스트/보더: 시맨틱 유틸리티 클래스 (`bg-primary`, `text-secondary` 등)
   - 간격: `px-4 py-8` 등 Tailwind spacing
   - Mobile: block 스택 / Desktop: `md:flex md:justify-between md:items-center`

### 검증 항목

- [ ] 인라인 스타일 0건 (Grep 검사)
- [ ] Desktop(≥768px): 1행 3분할 (회사정보 / 링크 / SNS) 레이아웃
- [ ] Mobile(<768px): 세로 스택, 모든 정보 항목 표시
- [ ] Cafe24 변수(`{$company_name}` 등) 실제 값 출력 + 부모 module 설정 확인
- [ ] SNS 아이콘 링크 정상 동작
- [ ] Bottom Navigation 모바일 동작 유지
- [ ] 기존 다중상점, 검색, 결제레이어 모듈 정상 작동

---

## Wave 2-A — 홈 페이지

> 브랜치: `feature/home` | 상태: ⬜ | Wave 1 완료 후

### 수정 파일

- `index.html` ✧
- `layout/basic/js/main.js` ✧ (또는 `js/main.js` 신규)

### 요구사항 (Figma: 29301:11799 / 29301:11693)

**섹션 구성**

1. **Hero 배너** (전체 너비)
   - 배경 이미지 전체 너비
   - 좌하단 텍스트 오버레이: 브랜드명(소문자) / 대제목(bold, 2줄) / 설명 텍스트 / "살펴보기" CTA 버튼
   - Mobile: 동일 구조, 이미지 aspect-ratio 조정

2. **카테고리 퀵링크** (Mobile 전용)
   - 가로 스크롤 4개 원형 이미지 + 이름 텍스트

3. **Curation 섹션 ×3** (섹션 타이틀 + 부제목)
   - Desktop: 좌측 대형 이미지(세로) + 우측 2장 이미지(위아래) → 각 이미지에 카테고리명/제품명/간략설명 오버레이(좌하단)
   - Mobile: 대형 이미지 단독 + 아래 2열 이미지 그리드
   - 이미지 오버레이: 카테고리명 / **제품명(bold)** / 제품 간략 설명

4. **상품 그리드** (홈형 카드)
   - Desktop: 5열 / Mobile: 2열
   - 홈형 카드: 이미지(4:5 비율) + 제품명 + 현재가 + 원가(취소선) + 할인율(빨강 `text-error`)
   - Cafe24 상품 모듈 활용

5. **뉴스레터 배너** (전체 너비)
   - 배경 이미지 전체 너비
   - 좌: "뉴스레터" 레이블 / 제목 / 설명
   - 우: 이메일 입력 + 구독하기 버튼 (Cafe24 뉴스레터 모듈)

### 구현 목표

- `index.html`: 레이아웃 `<!--@layout(/layout/basic/layout.html)-->` 유지
- Hero: Swiper 슬라이더 또는 단일 배너
- Curation: 정적 HTML 구조 (이미지 링크 + 오버레이)
- 상품 그리드: `module="ProductListMain"` 등 Cafe24 모듈
- 뉴스레터: `module="Layout_Newsletter"` 활용

### 검증 항목

- [ ] 인라인 스타일 0건 (Grep 검사)
- [ ] Desktop(≥768px): Hero 전체 너비 이미지 + 텍스트 오버레이
- [ ] Mobile(<768px): 카테고리 퀵링크 가로 스크롤
- [ ] Curation 섹션 3개: Desktop 비대칭 레이아웃 / Mobile 그리드 레이아웃
- [ ] 상품 그리드: 홈형 카드 (이미지/제품명/가격/할인율) 렌더링
- [ ] 뉴스레터 이메일 입력 폼 표시

---

## Wave 2-B — 상품목록 페이지

> 브랜치: `feature/product-list` | 상태: ⬜ | Wave 1 완료 후 (Wave 2-A와 병렬)

### 수정 파일

- `product/list.html` ✧
- `css/module/product/list.css` ✧ (필요 시)

### 요구사항 (Figma: 29301:11899 / 29301:11616)

**레이아웃 구성**

1. **카테고리 썸네일 탭**
   - Desktop: 이미지(정사각형) + 카테고리명, 가로 나열
   - Mobile: 가로 스크롤
   - 선택된 탭: border 강조 (`border-color-tertiary`)

2. **필터바**
   - 좌: "총 N개의 제품" 텍스트
   - 우: "신상품 ▼" 정렬 드롭다운

3. **태그 필터**
   - 남성의류 / 여성의류 / 실내용 / 기능성 / 건강기용 / 아우도어 / 스포츠 / 콜라보레이션
   - Mobile: 가로 스크롤

4. **상품 그리드**
   - Desktop: 5열 / Mobile: 2열
   - **목록형 카드** 구성:
     - 상단 배지: "베스트" (있을 경우)
     - 이미지 영역 (4:5 비율)
     - 이미지 하단: "🛒 담기" 버튼 (전체 너비, 아웃라인)
     - 텍스트 영역: 카테고리명 `>` / **제품명** / 현재가 / 원가(취소선) + 할인율(`text-error`) / 색상 스와치 (원형, 4~5개)

5. **Related Curation 섹션** (페이지 하단)
   - "관련 큐레이션" 섹션 타이틀
   - 4개 이미지 그리드

### 검증 항목

- [ ] 인라인 스타일 0건 (Grep 검사)
- [ ] Desktop 5열 / Mobile 2열 그리드
- [ ] 목록형 카드: 배지 / 이미지 / 담기 버튼 / 카테고리 / 제품명 / 가격 / 스와치 전부 표시
- [ ] 카테고리 썸네일 탭 선택 상태 스타일
- [ ] Mobile 태그 필터 가로 스크롤
- [ ] 담기 버튼 클릭 시 Cafe24 장바구니 레이어 동작

---

## Wave 3 — 상품상세 페이지

> 브랜치: `feature/product-detail` | 상태: ⬜ | Wave 2 완료 후

### 수정 파일

- `product/detail.html` ✧
- `css/module/product/detail.css` ✧ (필요 시)

### 요구사항 (Figma: 29301:12171 / 29301:11958, 29301:7025)

**Mobile 레이아웃 (<768px)**

- 이미지 풀너비 (세로 스크롤)
- 상품 정보 섹션 (브랜드명 / 제품명 / 가격 / 리뷰 / 색상 옵션 / 추가구성상품 / 선택 옵션 행)
- **고정 하단 버튼**: "바로 구매하기" (풀너비, `bg-black`)
- 버튼 탭 → **옵션 선택 바텀시트 모달**:
  - 색상 이미지 선택 UI
  - 추가구성상품 드롭다운
  - 선택된 옵션 행 (수량 ─1─+)
  - 총 상품금액
  - **장바구니 담기** (`bg-warning`) / **바로 구매하기** (`bg-black`) 버튼 2개

**Desktop 레이아웃 (≥768px)**

좌측 (이미지 영역):
- 메인 이미지 / 하단 썸네일 목록

우측 (정보 영역):
- 브랜드명 / **제품명** / 현재가 + 원가(취소선) + 할인율(`text-error`) / 리뷰 별점
- **색상 옵션**: 이미지 스와치 + 이름 (선택 시 `border-color-tertiary`)
- **추가구성상품** 드롭다운
- 선택된 옵션 행: 수량 ─1─+ / 가격 / ✕
- 총 상품금액
- CTA: **장바구니 담기** (`bg-warning`) / **바로 구매하기** (`bg-black`)
- 네이버페이 버튼 + 찜 / 공유

**탭 네비게이션** (색상 / 상세 / 후기 / 문의 / 추천) — Desktop/Mobile 공통

### 검증 항목

- [ ] 인라인 스타일 0건 (Grep 검사)
- [ ] 장바구니 버튼: `bg-warning` 클래스 사용 확인
- [ ] 구매 버튼: `bg-black` 클래스 사용 확인
- [ ] 할인율: `text-error` 클래스 사용 확인
- [ ] Desktop: 이미지(좌) / 정보(우) 2분할 레이아웃
- [ ] Mobile: 이미지 풀너비 + 하단 고정 버튼 표시
- [ ] Mobile: 고정 버튼 탭 → 바텀시트 모달 open/close
- [ ] 탭 5개(색상/상세/후기/문의/추천) 전환 동작
