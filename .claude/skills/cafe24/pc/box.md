# Box — PC

출처: https://developers.cafe24.com/design/front/component/pc/box

## 클래스

- 기본: `ec-base-box`
- 수정자:
  - `gHalf` — 중앙 분리형 (화면 중앙에 분리선)
  - `typeThin` — 얇은 라인형
  - `typeBg` — 배경 색상형
  - `typeThinBg` — 배경색 + 얇은 라인형
  - `typeProduct` — 상품 선택형
  - `typeMember` — 회원 정보형
  - `gMerge` — 인접 박스 라인 1px 병합
  - `gHalf` — 중앙 분리선 추가

## 예제

```html
<!-- 기본형(굵은 라인) -->
<div class="ec-base-box">
  <p>내용을 입력합니다.</p>
</div>

<!-- 중앙 분리형 -->
<div class="ec-base-box gHalf">
  <p>내용을 입력합니다.</p>
  <p>내용을 입력합니다.</p>
</div>

<!-- 얇은 라인형 -->
<div class="ec-base-box typeThin">
  <p>내용을 입력합니다.</p>
</div>

<!-- 배경 색상형 -->
<div class="ec-base-box typeBg">
  <p>내용을 입력합니다.</p>
</div>

<!-- 배경색 + 얇은 라인형 -->
<div class="ec-base-box typeThinBg">
  <p>내용을 입력합니다.</p>
</div>

<!-- 박스 + 박스 (라인 병합) -->
<div class="ec-base-box typeThin">
  <p>내용이 들어가는 영역입니다.</p>
</div>
<div class="ec-base-box typeThinBg gMerge">
  <p>내용이 들어가는 영역입니다.</p>
</div>

<!-- 가운데 정렬 (CSS 추가 필요) -->
<!--가운데 정렬-->
<div module="MODULE" class="ec-base-box">...</div>
<!--css 소스 예시-->
<!-- .Module { width:600px; margin:0 auto; } -->

<!-- 이용 약관 -->
<div class="ec-base-box typeThinBg">
  <div class="agree">
    <p>내용을 입력합니다.</p>
  </div>
</div>

<!-- 상품 선택형 -->
<div class="ec-base-box typeProduct">
  <p class="thumbnail">
    <a href="#none"><img src="//img.echosting.cafe24.com/thumb/75x75.gif" alt="" /></a>
  </p>
  <div class="information">
    <h3>상품명</h3>
    <strong class="txtEm">10,000원</strong>
    <p class="button">
      <a href="#none"
        ><img src="//img.echosting.cafe24.com/skin/base_ko_KR/board/btn_prd_detail.gif" alt="상품 상세보기"
      /></a>
      <a href="#none"
        ><img src="//img.echosting.cafe24.com/skin/base_ko_KR/board/btn_prd_select.gif" alt="상품정보선택"
      /></a>
      <a href="#none"
        ><img src="//img.echosting.cafe24.com/skin/base_ko_KR/board/btn_prd_order.gif" alt="주문상품선택"
      /></a>
    </p>
  </div>
</div>

<!-- 회원 정보형 (기본형) -->
<!--회원정보 기본형 -->
<div class="ec-base-box typeMember">
  <div class="information">
    <strong class="thumbnail"
      ><img src="//uidevdmp.cafe24.com/web/upload/mg_img_btn_mem_group_b2.gif" alt="" /><br />상단정렬</strong
    >
    <div class="description">
      <p><strong>○○○</strong>님은 [vip]회원이십니다.</p>
      <ul>
        <li>내용을 입력하세요.</li>
      </ul>
    </div>
  </div>
</div>

<!-- 회원 정보 확장형 -->
<div class="ec-base-box typeThinBg">
  <p class="ec-base-help">내용을 입력하세요.</p>
</div>
<div class="ec-base-box typeThin typeMember gMerge">
  <div class="information">
    <strong class="thumbnail"
      ><img src="//uidevdmp.cafe24.com/web/upload/mg_img_btn_mem_group_b2.gif" alt="" /><br />상단정렬</strong
    >
    <div class="description">
      <p><strong>○○○</strong>님은 [vip]회원이십니다.</p>
      <ul>
        <li>내용을 입력하세요.</li>
      </ul>
    </div>
  </div>
</div>
```

## 주의사항

- `gMerge`는 인접 박스 사이 보더가 2px로 겹치는 것을 1px로 보이게 처리
- 가운데 정렬은 모듈 CSS에서 `width` 및 `margin: 0 auto` 직접 지정
- `ec-base-help`, `ec-base-desc` 등 다른 컴포넌트와 조합하여 활용 가능
