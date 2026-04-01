---
name: cafe24
description: Cafe24 쇼핑몰 스킨 구조, 템플릿 문법, CSS/JS 패턴 가이드. 스킨 코드 작성/수정 시 참조.
---

## 배포 구조

```
base/          ← 정본 (모든 수정의 기준)
web/           ← PC 오버라이드
mobile/        ← 모바일 오버라이드
```

`base/`를 수정한 경우 동일 변경이 `web/`, `mobile/`에도 필요한지 확인한다.

---

## 템플릿 디렉티브

Cafe24가 서버사이드에서 처리하는 HTML 주석. 표준 HTML이 아니므로 브라우저에서 동작하지 않는다.

```html
<!--@layout(/layout/basic/layout.html)-->   ← 레이아웃 래핑
<!--@css(/css/module/product/detail.css)-->  ← CSS 삽입
<!--@js(/js/module/product/detail.js)-->     ← JS 삽입
<!--@import(/path/to/partial.html)-->        ← 파셜 인클루드
```

각 페이지 HTML의 최상단 순서: `<!--@layout-->` → `<!--@css-->` → `<!--@js-->` → 본문

---

## 변수 및 모듈 문법

```html
{$variable_name}           ← 변수 출력
{$variable|filter}         ← 필터 적용 (예: {$item_display|display})
module="section_name"      ← 동적 섹션 정의 (반복/조건부 렌더링)
```

모듈 주석으로 옵션 설정:

```html
<div module="product_listmain_1">
  <!--
    $count = 9
    $moreview = yes
    $cache = yes
  -->
  ...
</div>
```

---

## 파일 명명 규칙

| 경로 | 패턴 | 예시 |
|------|------|------|
| `base/css/module/{feature}/` | `{feature}Package.css` | `listPackage.css` |
| `base/js/module/{feature}/` | `{feature}Package.js` | `writePackage.js` |
| 단일 기능 | `{feature}.css` / `{feature}.js` | `detail.css` |

---

## CSS 패턴

**클래스 네이밍**: `.xans-{section}-{element}`

```css
.xans-board-commentlist .boardComment li { position: relative; padding: 25px 0; }
.xans-board-commentwrite textarea { width: 100%; height: 148px; }
```

**반응형 클래스**:
- `class="RW"` — 반응형 웹 (PC + 태블릿)
- `class="RTMB"` — 태블릿/모바일 전용

---

## JavaScript 패턴

**기본 구조**: jQuery 모듈 객체 패턴

```javascript
var methods = {
  init: function() { /* 초기화 */ },
  show: function(target) { /* 동작 */ }
};

$(function() {
  methods.init();
});
```

**AJAX 엔드포인트**: `/exec/front/{Module}` (예: `/exec/front/Product/SubCategory`)

**Swiper 캐러셀**:

```javascript
var slide = new Swiper('.selector', {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: { delay: 5000, disableOnInteraction: false }
});
```

---

## Cafe24 커스텀 엘리먼트 (EZ Design System)

```html
<script type="text/ez-prop">
  <ez-prop data-version="1.0.0">
    <ez-var data-prop="theme" data-namespace="ez.layout.theme" data-type="array">
      <ez-item data-id="theme01" data-name="MODERN">
    </ez-var>
  </ez-prop>
</script>
```

- `data-ez-module` — 모듈 컨테이너
- `data-ez-role="ez-discount-tag"` — 역할 지정
- `<body class="theme01" data-ez-theme="theme01">` — 테마 적용 (theme01~04)

---

## 4가지 테마

| 클래스 | 이름 |
|--------|------|
| `theme01` | MODERN |
| `theme02` | SOFT |
| `theme03` | BREEZY |
| `theme04` | FRESH |

---

## 다국어

hreflang 태그로 언어별 쇼핑몰 연결 (URL 폴더 구조 아님):

```html
<link rel="alternate" hreflang="ko-KR" href="...">
<link rel="alternate" hreflang="en-US" href="...">
<link rel="alternate" hreflang="ja-JP" href="...">
```

지원 언어: ko-KR, en-US, ja-JP, zh-CN, zh-TW, vi-VN

---

## 주요 페이지 URL 패턴

| 페이지 | URL |
|--------|-----|
| 카테고리 | `/product/list.html?cate_no={id}` |
| 상품 상세 | `/product/detail.html?product_no={id}` |
| 장바구니 | `/order/basket.html` |
| 주문서 | `/order/orderform.html` |
| 마이페이지 | `/myshop/order/list.html` |

---

## PG (결제) 주의사항

`order/ec_orderform/` 내 파일은 크로스브라우저 결제 요구사항이 있으므로 수정 시 주의.
레이아웃 최상단에 캐시 제어 메타태그가 필요:

```html
<meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
```
