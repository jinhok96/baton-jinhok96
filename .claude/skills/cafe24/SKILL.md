---
name: cafe24
description: Cafe24 쇼핑몰 스킨 구조, 템플릿 문법, CSS/JS 패턴 가이드. 스킨 코드 작성/수정 시 참조.
---

## 디렉토리 구조

로컬 프로젝트 루트 = 서버 스킨 폴더 루트 (반응형 스킨)

---

## 템플릿 디렉티브

Cafe24가 서버사이드에서 처리하는 HTML 주석. 표준 HTML이 아니므로 브라우저에서 동작하지 않는다.

```html
<!--@layout(/layout/basic/layout.html)-->
← 레이아웃 래핑
<!--@css(/css/module/product/detail.css)-->
← CSS 삽입
<!--@js(/js/module/product/detail.js)-->
← JS 삽입
<!--@import(/path/to/partial.html)-->
← 파셜 인클루드
```

각 페이지 HTML의 최상단 순서: `<!--@layout-->` → `<!--@css-->` → `<!--@js-->` → 본문

---

## 파일 명명 규칙

| 경로                    | 패턴                             | 예시              |
| ----------------------- | -------------------------------- | ----------------- |
| `css/module/{feature}/` | `{feature}Package.css`           | `listPackage.css` |
| `js/module/{feature}/`  | `{feature}Package.js`            | `writePackage.js` |
| 단일 기능               | `{feature}.css` / `{feature}.js` | `detail.css`      |

---

## CSS 클래스 컨벤션

**클래스 네이밍**: `.xans-{section}-{element}`

**반응형 클래스**:

- `class="RW"` — 반응형 웹 (PC + 태블릿)
- `class="RTMB"` — 태블릿/모바일 전용

---

## 컴포넌트 레퍼런스

### 공통

- SDS 기본: @.claude/skills/cafe24/sds.md

### PC 컴포넌트

- Font: @.claude/skills/cafe24/pc/font.md
- Grid: @.claude/skills/cafe24/pc/grid.md
- Uses (유틸리티): @.claude/skills/cafe24/pc/uses.md
- Help (도움말): @.claude/skills/cafe24/pc/help.md
- Box: @.claude/skills/cafe24/pc/box.md
- Tab: @.claude/skills/cafe24/pc/tab.md
- Button: @.claude/skills/cafe24/pc/button.md
- Layer (팝업): @.claude/skills/cafe24/pc/layer.md
- Tooltip: @.claude/skills/cafe24/pc/tooltip.md
- Product (상품): @.claude/skills/cafe24/pc/product.md
- Table: @.claude/skills/cafe24/pc/table.md
- Paginate (페이지네이션): @.claude/skills/cafe24/pc/paginate.md
- Desc (설명): @.claude/skills/cafe24/pc/desc.md
- Form: @.claude/skills/cafe24/pc/form.md
