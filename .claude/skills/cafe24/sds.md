# SDS 공통 기본

출처: https://developers.cafe24.com/design/front/smart/sdsupport/basic

## STEP01 - 디자인 구상하기

### 1. 쇼핑몰 화면 구성

쇼핑몰 화면은 크게 **헤더(Header), 푸터(Footer), 바디(Body), 내비게이션(Navigation)** 영역으로 구성됩니다.

### 2. 레이아웃 이해하기

레이아웃이란 모든 쇼핑몰 페이지에서 공통으로 노출되는 로고, 카테고리, 푸터(Footer) 부분입니다.

#### 레이아웃 HTML 소스 구조

레이아웃 HTML 소스의 필수 구성 요소:
- `<!DOCTYPE html>` — 독타입 선언 (웹 표준 필수, HTML 버전 알림)
- `<html>`, `<head>`, `<body>`

`<head>` 사이: 사이트의 meta 정보  
`<body>` 사이: 레이아웃 디자인 작성

CSS와 JS 파일은 필요에 따라 불러올 수 있습니다.

#### 레이아웃과 콘텐츠 영역 연결하기

레이아웃 페이지 내에서 콘텐츠를 불러오는 방법:

```html
<!--{layout path="layout/basic/layout.html"}-->
```

페이지별로 다른 레이아웃 디자인을 적용하려면 별도의 레이아웃 HTML 파일을 만든 후 각 페이지에서 호출합니다.

---

## STEP02 - 웹페이지 기본

### HTML, CSS, Javascript 역할

| 언어 | 역할 |
|------|------|
| HTML | 구조 — 웹 문서 전체 구조와 콘텐츠 구성 |
| CSS | 디자인 — HTML 문서를 꾸밀 때 사용 |
| Javascript | 동작 — 경고창, Drag&Drop 등 상호작용 |

- HTML이 웹페이지 구성의 **필수** 언어
- CSS, Javascript는 선택 언어

### 파일 위치

- 레이아웃 CSS/JS: `/layout/basic/css/`, `/layout/basic/js/`
- 모듈별 CSS/JS: `/css/`, `/js/`

---

## STEP03 - 변수와 모듈

### 1. 변수와 모듈이란?

스마트디자인의 기능들은 **모듈**과 **변수**로 작동합니다.  
변수는 모듈에 상속되어 동작하며, 각 모듈마다 사용할 수 있는 변수는 정해져 있습니다.

### 2. 모듈 (Module)

모듈은 HTML과 변수의 조합으로 만들어지는 프로그램의 최소 단위입니다.  
`module="모듈아이디"` 속성으로 지정합니다.

```html
<ul module="product_listmain_1">
  <li>{$product_name}</li>
</ul>
```

- 페이지에 제약 없이 어떤 페이지에서나 자유롭게 사용 가능
- 예: `module="member_join"`, `module="product_listmain_1"`

### 3. 변수

쇼핑몰관리자와 연동되는 기능을 표시합니다.  
`{$변수명}` 형태로 사용합니다.

**예시 변수:**
- `{$category_title_text}` — 메인분류 관리에서 설정한 분류명
- `{$image_medium}` — 상품 목록 이미지 (`{$image_small}`, `{$image_large}` 사용 가능)
- `{$product_name}` — 상품명

---

## STEP03-2 - 주석변수 활용하기

### 반복 횟수 설정 (우선순위 순)

1. `$only_html` — HTML 반복 단위 횟수 그대로 사용
2. `$count` — 지정한 숫자만큼 반복
3. DB의 카운트 설정

```html
<!-- $count = 5 반복 횟수 5회 -->
<ul module="Module_Action">
  <!--
  $count = 5
  -->
  <li>{$title}</li>
  <li>{$title}</li>
  <li>{$title}</li>
</ul>
```

```html
<!-- $only_html = yes 이면 count 무시, HTML 반복 단위(3회) 적용 -->
<ul module="Module_Action">
  <!--
  $count = 5
  $only_html = yes
  -->
  <li>{$title}</li>
  <li>{$title}</li>
  <li>{$title}</li>
</ul>
```

### 반복 항목이 동일한 경우

`$count` 설정 시 동일한 `<li>`가 count 수만큼 반복 출력됩니다.

```html
<ul module="Module_Action">
  <!--
  $count = 5
  -->
  <li class="test1">{$title}</li>
  <li class="test1">{$title}</li>
  <li class="test1">{$title}</li>
</ul>
```

### 반복 항목이 동일하지 않은 경우

`$count` 설정 시 **마지막 항목**이 count 수만큼 반복됩니다.

```html
<ul module="Module_Action">
  <!--
  $count = 5
  -->
  <li class="test1">{$title}</li>
  <li class="test2">{$title}</li>
  <li class="test3">{$title}</li>
</ul>
<!-- 출력: test1, test2, test3, test3, test3 -->
```

### 주요 주석변수 예시

```html
<!--
$move_order_after=/order/order_result.html  -> 주문완료 후 이동 url
$move_basket=/order/basket.html             -> 장바구니 이동 url
-->
```

---

## STEP03-3 - 모디파이어 (Modifier)

변수에 `|모디파이어명` 형태로 붙여 값을 가공합니다.

### 1. Cover

문자열이 존재할 경우 감싸는 문자를 설정합니다.

```
{$foo|cover:(,)}
```
사용방법: `|cover:앞에 감쌀문자,뒤에 감쌀문자`

### 2. Cut

문자열을 지정한 개수만큼 잘라서 출력합니다.

```
{$product_name|cut:10,...}
```
사용방법: `|cut:자르고 싶은 숫자, 잘린 문자의 표현 형태`

### 3. Date

날짜/시간 출력 포맷을 지정합니다.

```
{$write_date|date:Y-m-d}
{$write_date|date:Y-m-d H:i:s}
```
사용방법: `|date:Y-m-d H:i:s`

### 4. Imgconv

값이 있으면 지정한 이미지 주소로, 없으면 대체 이미지로 치환합니다.

```
{$name_or_img_tag|imgconv:'이미지 주소'}
```
사용방법: `|imgconv:대체할 이미지주소, 값이 없는 경우 대체할 이미지주소`

### 5. Strconv

값이 있으면 지정한 문자열로 치환합니다.

```
{$new_icon|strconv:신상품}
```
사용방법: `|strconv:change`

### 6. Nl2br

줄바꿈 문자를 `<br>` 태그로 변환합니다.

```
{$foo|nl2br}
```

### 7. Numberformat

숫자를 천 단위 콤마 형태로 출력합니다.

```
{$product_price|numberformat}
```

### 8. Replace

문자열을 치환합니다.

```
{$notice_icon|replace:공지,공지사항}
```
사용방법: `|replace:찾을문자,치환할 문자`

### 9. Striptag

변수에 적용된 HTML 태그를 모두 제거합니다.

```
{$product_name|striptag}
```

### 10. Timetodate

타임스탬프 값을 지정한 포맷으로 날짜 출력합니다.

```
{$write_date|timetodate:Y-m-d}
```

### 11. Lower / Upper

문자를 소문자/대문자로 변경합니다.

```
{$product_name|lower}
{$product_name|upper}
```

### 12. Display

값이 false이면 `display:none` 처리합니다. 어드민 노출 설정과 연동할 때 사용합니다.

```html
<ul module="product_ListItem">
  <li class="{$item_display|display}">
    <strong class="title {$item_title_display|display}">{$item_title} :</strong>
    {$item_content}
  </li>
</ul>
```
