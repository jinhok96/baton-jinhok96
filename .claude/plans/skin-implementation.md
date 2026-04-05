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

| 파일                                      | Wave     | 상태    |
| ----------------------------------------- | -------- | ------- |
| `src/tailwind.css`                        | Wave 0   | ✅ 완료 |
| `layout/header/header.html`               | Wave 1-A | ✅ 완료 |
| `layout/header/header.js`                 | Wave 1-A | ✅ 완료 |
| `layout/header/state_login.html`          | Wave 1-A | ✅ 완료 |
| `layout/footer/footer.html`               | Wave 1-B | ✅ 완료 |
| `layout/home/hero.html`                   | Wave 2-A | ✅ 완료 |
| `layout/home/home.js`                     | Wave 2-A | ✅ 완료 |
| `layout/home/category-quicklinks.html`    | Wave 2-A | ✅ 완료 |
| `layout/product/detail.html`              | Wave 3-A | ✅ 완료 |
| `layout/product/detail.js`                | Wave 3-A | ✅ 완료 |
| `layout/product/detail_fixed_button.html` | Wave 3-B | ✅ 완료 |
| `product/detail.html`                     | Wave 3-C | ✅ 완료 |

---

## 코딩 원칙 — 하드코딩 금지

> 디자인 변경 시 `src/tailwind.css` 한 곳만 수정하면 전체 반영되도록 유지한다.

### 색상 / 타이포그래피

- 모든 색상·타이포·간격은 `src/tailwind.css`에 정의된 Tailwind 유틸리티 클래스로 적용.
- hex 직접 입력 금지. `style=""` 인라인 스타일 금지.
- 주요 시맨틱 클래스:

| UI 요소                   | 사용 클래스             |
| ------------------------- | ----------------------- |
| 기본 텍스트               | `text-primary`          |
| 보조 텍스트               | `text-secondary`        |
| 비활성/플레이스홀더       | `text-tertiary`         |
| 할인율 (빨강)             | `text-error`            |
| 장바구니 담기 버튼 (노랑) | `bg-warning`            |
| 바로 구매하기 버튼 (검정) | `bg-black`              |
| 기본 보더                 | `border-color-primary`  |
| 강조 보더 (선택 상태)     | `border-color-tertiary` |
| 배경 기본                 | `bg-primary`            |
| 배경 보조                 | `bg-secondary`          |

### 구조 — 반응형

TailwindCSS의 반응형 prefix 사용:

| prefix | 적용 시점   | 기준    |
| ------ | ----------- | ------- |
| (없음) | 모바일 기본 | < 768px |
| `md:`  | 태블릿 이상 | ≥ 768px |

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
