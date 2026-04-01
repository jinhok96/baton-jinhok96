# Product — PC

출처: https://developers.cafe24.com/design/front/component/pc/product

## 클래스
- 기본: `ec-base-product`
- 내부 목록: `prdList`
- 목록 행 수정자: `grid2`, `grid3`, `grid4`, `grid5` (prdList에 추가)

## 내부 구조
- `.title` — 카테고리/섹션 제목 영역
- `.prdList` — 상품 목록 `<ul>`
- `li#anchorBoxId_{$product_no}` — 개별 상품 아이템
- `.thumbnail` — 이미지 + 아이콘 영역
  - `.prdImg` — 상품 이미지 + 위시리스트 아이콘
  - `.icon` — 프로모션/버튼형 아이콘
- `.description` — 상품 정보 영역
  - `.name` — 상품명
  - `.spec` — 상품 목록 정보 (모듈: `product_ListItem`)

## 예제

```html
<!-- 기본형 (grid 없음 = 기본 열 수) -->
<div module="" class="ec-base-product">
  <div class="title"><h2><span>{$category_title_text}</span></h2></div>
  <ul class="prdList">
    <li id="anchorBoxId_{$product_no}">
      <div class="thumbnail">
        <div class="prdImg">
          <a href="#none"><img src="" alt="" /></a>
          <span class="wish">{$list_wish_icon}</span>
        </div>
        <div class="icon">
          <div class="promotion">아이콘</div>
          <div class="button">버튼형 아이콘</div>
        </div>
      </div>
      <div class="description">
        <strong class="name"><a href="#none"><span class="title">제목:</span>상품명</a></strong>
        <ul module="product_ListItem" class="spec">
          상품 목록
        </ul>
      </div>
    </li>
  </ul>
</div>

<!-- 4열 목록 -->
<div module="" class="ec-base-product">
  <div class="title"><h2><span>{$category_title_text}</span></h2></div>
  <ul class="prdList grid4">
    <li id="anchorBoxId_{$product_no}">
      <div class="thumbnail">
        <div class="prdImg">
          <a href="#none"><img src="" alt="" /></a>
          <span class="wish">{$list_wish_icon}</span>
        </div>
        <div class="icon">
          <div class="promotion">아이콘</div>
          <div class="button">버튼형 아이콘</div>
        </div>
      </div>
      <div class="description">
        <strong class="name"><a href="#none"><span class="title">제목 :</span>상품명</a></strong>
        <ul module="product_ListItem" class="spec">
          상품 목록
        </ul>
      </div>
    </li>
    <!-- ..반복.. -->
  </ul>
</div>
```

## 주의사항
- `prdList`에 `grid2`~`grid5` 추가로 한 행 상품 수 조절
- 상품 개별 아이템 `li`의 `id`는 `anchorBoxId_{$product_no}` 형식 유지
- `{$list_wish_icon}`, `{$category_title_text}` 등은 Cafe24 템플릿 변수
