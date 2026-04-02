# Cafe24 스킨 구현 계획

## Context

Figma 디자인(QosvLUINHW725RugIH71W4)을 기반으로 Cafe24 스킨 3페이지를 구현하는 마이그레이션 작업.
기존 코드 구조(HTML/CSS/JS 분리, Cafe24 템플릿 문법)는 유지하면서 Figma 디자인을 적용한다.

---

## Figma NodeId 참조

**파일키**: `QosvLUINHW725RugIH71W4`

### 컴포넌트 레이어 (`29301:9134`)
| 컴포넌트 | NodeId |
|---------|--------|
| Header / Desktop | 29301:4894 |
| Header / Mobile | 29301:5006 |
| Header / Menu (드로어) | 29301:4939 |
| Footer / Desktop | 29301:4715 |
| Footer / Mobile | 29301:4684 |
| Shop List / Product (카드 4종) | 29301:4745 |
| Home / Curation (PC/MO) | 29301:4914 |
| Shop Detail / Fixed Button | 29301:7025 |
| Shop Detail / Mobile (탭 5종) | 29301:5020 |
| Shop Detail / Desktop (탭 5종) | 29301:6111 |

### 페이지 레이어 (`29301:15414`)
| 페이지 | NodeId |
|--------|--------|
| Home / Mobile | 29301:11693 |
| Home / Desktop | 29301:11799 |
| Shop List / Mobile | 29301:11616 |
| Shop List / Desktop | 29301:11899 |
| Shop Detail / Mobile | 29301:11958 |
| Shop Detail / Desktop | 29301:12171 |

---

## 완료된 작업

| 파일 | 상태 |
|------|------|
| `layout/basic/css/tokens.css` | ✅ 완료 |
| `layout/basic/css/utilities.css` | ✅ 완료 |

---

## 코딩 원칙 — 하드코딩 금지

> 디자인 변경 시 `tokens.css` 한 곳만 수정하면 전체 반영되도록 유지한다.

### 색상
- 모든 색상값은 반드시 `var(--color-*)` 토큰 참조. hex 직접 입력 금지.
- 주요 토큰 매핑:

| UI 요소 | 사용 토큰 |
|---------|----------|
| 기본 텍스트 | `var(--color-text-primary)` |
| 보조 텍스트 (카테고리명 등) | `var(--color-text-secondary)` |
| 비활성/플레이스홀더 | `var(--color-text-tertiary)` |
| 할인율 (빨강) | `var(--color-error)` |
| 장바구니 담기 버튼 (노랑) | `var(--color-warning)` |
| 바로 구매하기 버튼 (검정) | `var(--color-black)` |
| 기본 보더 | `var(--color-border-primary)` |
| 강조 보더 (선택 상태) | `var(--color-border-tertiary)` |
| 배경 기본 | `var(--color-bg-primary)` |
| 배경 보조 | `var(--color-bg-secondary)` |

### 간격 / 크기
- 모든 padding, margin, gap은 `var(--spacing-*)` 토큰 사용.
- 레이아웃 고정 치수(헤더 높이, 최대 너비 등)는 **Wave 0에서 tokens.css에 추가** 후 `var(--layout-*)` 참조.

### 타이포그래피
- 폰트 크기: `var(--font-size-*)` 토큰 또는 `utilities.css` 클래스(`.heading-h4`, `.label-l5` 등) 사용.
- 폰트 패밀리: `var(--font-family-base)`. 직접 명시 금지.

### 구조 — 반응형
Cafe24는 자체 반응형 클래스 시스템을 제공한다 (`layout.css`에 정의됨).

**요소 표시/숨김 → Cafe24 클래스 사용 (미디어쿼리 대신)**

| 클래스 | 적용 시점 | 용도 예시 |
|--------|----------|-----------|
| `RWB` / `RWI` / `RWIB` | PC만 표시 (`min-width: 1025px`) | Desktop 전용 Nav |
| `RTMB` / `RTMI` | Tablet+Mobile 표시 (`max-width: 1024px`) | Mobile 메뉴 버튼, Footer 모바일 |
| `RMB` / `RMI` | Mobile만 표시 (`max-width: 767px`) | 카테고리 퀵링크 |
| `RTI` / `RTB` | Mobile에서 숨김 | Desktop 전용 요소 |

**레이아웃 변경 → CSS 미디어쿼리 필요**
- 그리드 열 수, 간격, 방향 전환 등 레이아웃 자체가 바뀌는 경우는 미디어쿼리 사용
- CSS custom property는 미디어쿼리 조건절에 사용 불가 (CSS 언어 제약)
- 브레이크포인트 수치(767px / 1024px / 1025px)는 **Cafe24 플랫폼 표준값**이므로 하드코딩이 아님 — 임의 값 추가 금지

**규칙 요약**:
1. 요소 표시/숨김 → Cafe24 반응형 클래스 우선
2. 레이아웃 변경 → 미디어쿼리 (Cafe24 표준 브레이크포인트 3단계만 사용)
3. 신규 브레이크포인트 추가 금지

### 검증 (모든 브랜치 공통)
각 브랜치 완료 시 아래를 반드시 실행:
```
grep -rn "#[0-9a-fA-F]\{3,6\}" css/ layout/basic/css/ --include="*.css"
```
→ 결과에서 `tokens.css` 외 파일의 hex 색상값이 0건이어야 함. (필수 예외: `rgba()` 내 `0,0,0`만 허용)

---

## 브랜치 완료 절차

각 브랜치 작업 완료 후 순서대로 실행:
1. `/verify` — 정적 검사 + SFTP 배포 후 Chrome MCP 확인
2. `/commit` — 컨벤션에 따라 커밋 생성
3. `/pr` — feature/* → dev PR 생성 (사용자가 검토 후 병합)

---

## Wave 0 — 공통 기반

> 브랜치: `feature/common-styles` | 상태: ⬜ | 선행 작업 없음

### 수정 파일
- `layout/basic/css/tokens.css` ✧ (레이아웃 토큰 추가)
- `layout/basic/css/common.css` ✧
- `layout/basic/css/layout.css` ✧

### 요구사항
- Cafe24 필수 영역(주석 "수정 및 삭제 불가" 블록) 유지
- tokens.css에 정의된 CSS 변수 체계를 common.css 전체에 일관 적용
- 기존 `--font-color-*` 등 비표준 변수명을 `--color-text-*` 체계로 통일
- 기본 폰트(Pretendard), 컨테이너, 반응형 기준점 명시
- **레이아웃 고정값 전부 tokens.css로 이동** — 이후 모든 브랜치가 이 토큰을 참조

### 구현 목표

**1. tokens.css — 레이아웃 토큰 추가**
```css
/* Layout */
--layout-header-height-desktop: 56px;
--layout-header-height-mobile: 48px;
--layout-footer-height-desktop: 72px;
--layout-content-max-width: 1240px;
--layout-container-padding-desktop: 50px;
--layout-container-padding-mobile: 16px;
--layout-section-gap: var(--spacing-80);

/* Product */
--product-card-ratio: 4 / 5;
--product-grid-cols-desktop: 5;
--product-grid-cols-mobile: 2;
--product-grid-gap: var(--spacing-20);

/* Breakpoints (CSS 변수 불가 — 참조 상수로만 사용)
   Mobile  : max-width 767px
   Tablet  : 768px – 1024px
   PC      : min-width 1025px            */
```

**2. common.css**
- 색상 변수를 `var(--color-text-primary)` 등 tokens.css 변수로 교체
- `body` 기본 폰트/색상/배경 토큰 적용
- 기존 리셋, 접근성 클래스(`.blind`, `#skipNavigation`) 유지

**3. layout.css**
- `#contents`: `max-width: var(--layout-content-max-width)`, padding에 `var(--layout-container-padding-desktop)` 사용
- `#header`: height에 `var(--layout-header-height-desktop)` / `var(--layout-header-height-mobile)` 참조
- 반응형 브레이크포인트 3단계 유지

### 검증 항목
- [ ] `tokens.css`에 레이아웃 토큰 섹션 추가 확인
- [ ] `common.css` / `layout.css` 내 hex 색상 직접 입력 0건 (Grep 검사)
- [ ] `--font-color-*` 구형 변수 사용 잔여 여부 Grep 검사
- [ ] `var(--layout-content-max-width)` 등 레이아웃 토큰이 실제 렌더링에 반영되는지 Chrome DevTools 확인
- [ ] Mobile/Tablet/PC 3단계 컨테이너 너비 정상 적용
- [ ] Cafe24 필수 블록 누락 없음

---

## Wave 1-A — Header

> 브랜치: `feature/header` ← **현재** | 상태: ⬜ | Wave 0 완료 후

### 수정 파일
- `layout/basic/header.html` ✦ (신규 생성)
- `css/module/layout/header.css` ✦ (신규 생성)
- `layout/basic/js/slide_menu.js` ✧

### 요구사항 (Figma: 29301:4894, 29301:5006, 29301:4939)

**Desktop (1440px, 높이 56px)**
- 좌: 브랜드 로고 (텍스트)
- 중앙: 전체 / 대분류1 / 대분류2 / 대분류3 / 대분류4 / 대분류5 — Cafe24 카테고리 모듈
- 우: 검색 아이콘 / 로그인(텍스트) / 장바구니(아이콘 + 수량 뱃지)
- 스크롤 시 상단 fixed 고정

**Mobile (390px, 높이 48px)**
- 좌: 브랜드 로고
- 우: 메뉴(햄버거) / 검색 / 로그인 / 장바구니(뱃지)

**Mobile Menu Drawer (전체 화면)**
- 1depth: 전체 / 대분류1~5 (각 항목 우측에 `>` chevron)
- 2depth: `< 대분류명` 뒤로가기 + 중분류1~4 목록
- 하단 고정: 로그인 / 공지사항 / 자주 묻는 질문
- 우상단 "닫기" 버튼

### 구현 목표
1. **header.html** — Cafe24 모듈 구조
   - `module="Layout_Top"` 또는 직접 마크업
   - Desktop nav: `module="Layout_Category"` 활용
   - 장바구니 뱃지: `{$basket_count_display}` 변수
   - Mobile 드로어: `#slideMenuWrap` 구조 (slide_menu.js와 연동)
2. **header.css** — 토큰 참조 필수
   - 높이: `height: var(--layout-header-height-desktop)` / `var(--layout-header-height-mobile)`
   - 색상: `background-color: var(--color-bg-primary)`, `color: var(--color-text-primary)` 등 토큰만 사용
   - Desktop: `display: flex; justify-content: space-between; align-items: center`
   - Drawer: `position: fixed; top: 0; left: 0; width: 100%; height: 100%`
   - 2depth 전환 애니메이션 (translateX)
3. **slide_menu.js**
   - 기존 1depth 구조에 2depth 전환 로직 확인/보완
   - 하단 링크(로그인/공지/FAQ) 추가

### 검증 항목
- [ ] `header.css` 내 hex 색상 직접 입력 0건 (Grep 검사)
- [ ] 헤더 높이가 `var(--layout-header-height-desktop/mobile)` 토큰으로 지정됨
- [ ] Desktop 1440px: 로고(좌) / 카테고리(중앙) / 유틸(우) 3분할 레이아웃
- [ ] Mobile 390px: 로고(좌) / 아이콘 4개(우) 레이아웃
- [ ] 햄버거 버튼 → 드로어 open/close 애니메이션
- [ ] Drawer 1depth → 2depth 전환 및 뒤로가기
- [ ] 장바구니 뱃지 수량 정상 표시 (`{$basket_count_display}`)
- [ ] 스크롤 이후 `#header.fixed` 클래스 적용 및 fixed 헤더 동작
- [ ] Cafe24 카테고리 데이터 정상 렌더링

---

## Wave 1-B — Footer

> 브랜치: `feature/footer` | 상태: ⬜ | Wave 0 완료 후 (Wave 1-A와 병렬)

### 수정 파일
- `layout/basic/footer.html` ✧
- `css/module/layout/footer.css` ✧

### 요구사항 (Figma: 29301:4715, 29301:4684)

**Desktop (1440px, 단일 행)**
- 좌: 사업자명(주) 회사명 / 대표 김바톤 / 사업자등록번호 / 주소 / 통신판매번호 / 대표메일 / 사입도매문의
- 중: 이용약관 / 개인정보처리방침 / 이용안내 / Site by BATON / COPYRIGHT © 2026
- 우: SNS 아이콘 3개 (Instagram, YouTube, 카카오채널)
- 배경: white

**Mobile (390px, 세로 스택)**
- 회사명 + 대표
- 사업자등록번호 [사업자정보확인]
- 주소 / 통신판매번호 / 대표메일 / 사입도매문의 / 해외수출문의
- 구분선
- 이용약관 / 개인정보처리방침 / 이용안내 / Site by BATON
- COPYRIGHT © 2026
- SNS 아이콘

### 구현 목표
1. **footer.html**
   - 기존 Cafe24 변수(`{$company_name}`, `{$president_name}`, `{$phone}` 등) 보존
   - Bottom Navigation, 다중상점, 결제레이어 등 기존 모듈 유지
   - `#footer` 내부 마크업을 Figma 구조에 맞게 재구성
2. **footer.css** — 토큰 참조 필수
   - 배경/텍스트/보더: 전부 `var(--color-*)` 토큰 사용
   - 간격: `padding: var(--spacing-32) 0` 등 `var(--spacing-*)` 사용
   - Desktop: `display: flex; justify-content: space-between; align-items: center`
   - Mobile: block 스택, 각 항목 줄바꿈

### 검증 항목
- [ ] `footer.css` 내 hex 색상 직접 입력 0건 (Grep 검사)
- [ ] Desktop: 1행 3분할 (회사정보 / 링크 / SNS) 레이아웃
- [ ] Mobile: 세로 스택, 모든 정보 항목 표시
- [ ] Cafe24 변수(`{$company_name}` 등) 실제 값 출력
- [ ] SNS 아이콘 링크 정상 동작
- [ ] Bottom Navigation 모바일 동작 유지
- [ ] 기존 다중상점, 검색, 결제레이어 모듈 정상 작동

---

## Wave 2-A — 홈 페이지

> 브랜치: `feature/home` | 상태: ⬜ | Wave 1 완료 후

### 수정 파일
- `index.html` ✧
- `layout/basic/css/main.css` ✧
- `layout/basic/js/main.js` ✧

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
   - 홈형 카드: 이미지(4:5 비율) + 제품명 + 현재가 + 원가(취소선) + 할인율(빨강)
   - Cafe24 상품 모듈 활용

5. **뉴스레터 배너** (전체 너비)
   - 배경 이미지 전체 너비
   - 좌: "뉴스레터" 레이블 / 제목 / 설명
   - 우: 이메일 입력 + 구독하기 버튼 (Cafe24 뉴스레터 모듈)

### 구현 목표
- `index.html`: 레이아웃 `<!--@layout(/layout/basic/main.html)-->` 유지
- Hero: Swiper 슬라이더 (`swiper-bundle.js`) 또는 단일 배너
- Curation: 정적 HTML 구조 (이미지 링크 + 오버레이)
- 상품 그리드: `module="ProductListMain"` 등 Cafe24 모듈
- 뉴스레터: `module="Layout_Newsletter"` 활용
- `main.js`: Swiper 초기화, 퀵링크 가로 스크롤 처리

### 검증 항목
- [ ] `main.css` 내 hex 색상 직접 입력 0건 (Grep 검사)
- [ ] 상품 카드 이미지 비율이 `aspect-ratio: var(--product-card-ratio)` 사용 확인
- [ ] Desktop 1440px: Hero 전체 너비 이미지 + 텍스트 오버레이
- [ ] Mobile 390px: 카테고리 퀵링크 가로 스크롤
- [ ] Curation 섹션 3개: Desktop 비대칭 레이아웃 / Mobile 그리드 레이아웃
- [ ] 이미지 오버레이 텍스트(카테고리/제품명/설명) 정상 표시
- [ ] 상품 그리드: 홈형 카드 (이미지/제품명/가격/할인율) 렌더링
- [ ] 뉴스레터 이메일 입력 폼 표시

---

## Wave 2-B — 상품목록 페이지

> 브랜치: `feature/product-list` | 상태: ⬜ | Wave 1 완료 후 (Wave 2-A와 병렬)

### 수정 파일
- `product/list.html` ✧
- `css/module/product/list.css` ✧

### 요구사항 (Figma: 29301:11899 / 29301:11616)

**레이아웃 구성**

1. **카테고리 썸네일 탭**
   - Desktop: 이미지(정사각형) + 카테고리명, 가로 나열
   - Mobile: 가로 스크롤
   - 선택된 탭: border 강조 또는 밑줄

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
     - 텍스트 영역: 카테고리명 `>` / **제품명** / 현재가 / 원가(취소선) + 할인율(빨강) / 색상 스와치 (원형, 4~5개)

5. **Related Curation 섹션** (페이지 하단)
   - "관련 큐레이션" 섹션 타이틀
   - 4개 이미지 그리드 (홈 Curation과 동일 구조)

### 구현 목표
- `product/list.html`: `module="ProductList"` Cafe24 상품 목록 모듈 활용
- 카테고리 썸네일 탭: `module="Layout_Category"` 또는 직접 마크업
- 정렬 드롭다운: Cafe24 기본 정렬 모듈 활용
- 색상 스와치: `{$color_list}` 변수 활용
- `list.css`: 카드 레이아웃, 스와치, 배지 스타일

### 검증 항목
- [ ] `list.css` 내 hex 색상 직접 입력 0건 (Grep 검사)
- [ ] 그리드가 `repeat(var(--product-grid-cols-desktop), 1fr)` / `repeat(var(--product-grid-cols-mobile), 1fr)` 사용 확인
- [ ] 카드 이미지 비율이 `aspect-ratio: var(--product-card-ratio)` 사용 확인
- [ ] Desktop 5열 / Mobile 2열 그리드
- [ ] 목록형 카드: 배지 / 이미지 / 담기 버튼 / 카테고리 / 제품명 / 가격 / 스와치 전부 표시
- [ ] 카테고리 썸네일 탭 선택 상태 스타일
- [ ] Mobile 태그 필터 가로 스크롤
- [ ] 정렬 드롭다운 Cafe24 동작
- [ ] Related Curation 섹션 하단 렌더링
- [ ] 담기 버튼 클릭 시 Cafe24 장바구니 레이어 동작

---

## Wave 3 — 상품상세 페이지

> 브랜치: `feature/product-detail` | 상태: ⬜ | Wave 2 완료 후

### 수정 파일
- `product/detail.html` ✧
- `css/module/product/detail.css` ✧

### 요구사항 (Figma: 29301:12171 / 29301:11958, 29301:7025)

**Desktop 레이아웃 (1440px)**

좌측 (이미지 영역):
- 메인 이미지 (정사각형 또는 세로형)
- 하단 썸네일 목록 (가로 스크롤 또는 5개)

우측 (정보 영역):
- 브랜드명 (소문자)
- **제품명** (bold)
- 현재가 / 원가(취소선) + 할인율
- 리뷰 별점 + 개수
- 구분선
- **색상 옵션**: 이미지 스와치 + 이름 (화이트/그레이/차콜그레이/블랙/레드)
- **추가구성상품** 드롭다운
- 선택된 옵션 행: 제품명 + 색상 / 수량 ─1─+ / 가격 / ✕
- 총 상품금액 (수량) `N,000원 (N개)`
- CTA 버튼 2개 (동등 너비): **장바구니 담기** (yellow, `--color-warning`) / **바로 구매하기** (dark navy)
- 네이버페이 버튼 + 찜 / 공유

**탭 네비게이션** (색상 / 상세 / 후기 / 문의 / 추천)
- Desktop/Mobile 공통
- 탭별 콘텐츠:
  - **색상**: 색상별 이미지 갤러리 (색상 선택 → 해당 색상 이미지)
  - **상세**: 상품 상세 에디터 이미지
  - **후기**: 리뷰 목록 (별점 + 텍스트 + 이미지, 페이지네이션)
  - **문의**: Q&A 아코디언 목록
  - **추천**: 연관 상품 그리드 (목록형 카드)

**Mobile 레이아웃 (390px)**
- 이미지 풀너비 (세로 스크롤)
- 상품 정보 섹션 (Desktop 우측과 동일)
- **고정 하단 버튼**: "바로 구매하기" (풀너비, dark navy)
- 버튼 탭 → **옵션 선택 바텀시트 모달**:
  - 모달 제목: "옵션 선택"
  - 색상 이미지 선택 UI
  - 추가구성상품 드롭다운
  - 선택된 옵션 행 (수량 ─1─+)
  - 총 상품금액
  - **장바구니 담기** / **바로 구매하기** 버튼 2개
  - 네이버페이 버튼

### 구현 목표
- `product/detail.html`: Cafe24 상품상세 모듈 활용
  - `module="ProductImageCarousel"` (이미지)
  - `module="ProductOption"` (옵션 선택)
  - `module="ProductReview"` (후기)
  - `module="ProductQnA"` (문의)
- Mobile 고정 버튼: `position: fixed; bottom: 0` + JS로 모달 토글
- 탭 전환: Cafe24 기본 탭 or 커스텀 JS
- `detail.css`: 2분할 레이아웃, 옵션 UI, 바텀시트 모달 스타일

### 검증 항목
- [ ] `detail.css` 내 hex 색상 직접 입력 0건 (Grep 검사)
- [ ] 장바구니 버튼 배경: `var(--color-warning)` 토큰 사용 확인
- [ ] 구매 버튼 배경: `var(--color-black)` 토큰 사용 확인
- [ ] 할인율 색상: `var(--color-error)` 토큰 사용 확인
- [ ] Desktop: 이미지(좌) / 정보(우) 2분할 레이아웃
- [ ] 색상 옵션: 이미지 스와치 선택 UI (선택 시 border)
- [ ] 선택된 옵션 행 + 수량 ─/+ 조절
- [ ] Mobile: 이미지 풀너비 + 하단 고정 버튼 표시
- [ ] Mobile: 고정 버튼 탭 → 바텀시트 모달 open/close
- [ ] 탭 5개(색상/상세/후기/문의/추천) 전환 동작
- [ ] 후기 별점 + 페이지네이션 동작
- [ ] 문의 아코디언 열기/닫기
- [ ] 추천 상품 그리드 렌더링
