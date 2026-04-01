# Button — PC

출처: https://developers.cafe24.com/design/front/component/pc/button

## 클래스

### 단독 버튼 (가변형)

- `btnNormal` — 기본 버튼 (높이 24px)
- `btnSubmit` — 메인 버튼 (높이 32px)
- `btnEm` — 서브 버튼1 (높이 40px)
- `btnBasic` — 서브 버튼2 (높이 48px)
- `btnLink` — 텍스트 링크
- `btnLogin` — 로그인 버튼
- `btnAgree` — 전체보기 버튼
- `btnToggle` — 토글 버튼 래퍼

### 단독 버튼 (고정형)

- `btnNormalFix` — 기본 고정 (72px × 24px)
- `btnSubmitFix` — 메인 고정 (96px × 32px)
- `btnEmFix` — 서브1 고정 (120px × 40px)
- `btnBasicFix` — 서브2 고정 (160px × 48px)

### 버튼 크기 수정자 (가변·고정 모두 적용)

- `sizeS` — 작은 크기
- `sizeM` — 중간 크기
- `sizeL` — 큰 크기
- `disabled` — 비활성화

### 버튼 아이콘

- `icoArrow` — 화살표 아이콘 (`<i>` 태그)
- `icoDelete` — X 아이콘
- `icoAdd` — 플러스 아이콘
- `icoRemove` — 마이너스 아이콘

### 버튼 그룹: `ec-base-button`

- `typeBorder` — 선 박스 처리
- `typeBG` — 배경 박스 처리
- `justify` — 조합 정렬 (좌/우 + 가운데)
- `gColumn` — 버튼 자동 정렬 (균등 비율)
- `gLeft` / `gRight` — 그룹 내 좌/우 정렬 `<span>`

## 예제

```html
<!-- 가변형 버튼 -->
<a href="#none" class="btnNormal">기본 버튼</a>
<a href="#none" class="btnNormal sizeS">선택한 주소록 삭제</a>
<a href="#none" class="btnNormal sizeM">상단으로</a>
<a href="#none" class="btnNormal sizeL">관심상품등록</a>
<a href="#none" class="btnNormal disabled">무효</a>

<a href="#none" class="btnSubmit">메인 버튼</a>
<a href="#none" class="btnEm">서브 버튼1</a>
<a href="#none" class="btnBasic">서브 버튼2</a>

<!-- 고정형 버튼 -->
<a href="#none" class="btnNormalFix">기본 버튼</a>
<a href="#none" class="btnSubmitFix sizeS">메인 버튼</a>
<a href="#none" class="btnEmFix sizeM">서브 버튼1</a>
<a href="#none" class="btnBasicFix sizeL">서브 버튼2</a>

<!-- 아이콘 버튼 -->
<a href="#none" class="btnNormal">아이콘 버튼 <i class="icoArrow"></i></a>
<a href="#none" class="btnNormal"><i class="icoDelete"></i> 아이콘 버튼</a>
<a href="#none" class="btnNormal"><i class="icoAdd"></i> 아이콘 버튼</a>
<a href="#none" class="btnLink">텍스트 링크</a>

<!-- 토글 버튼 -->
<span class="btnToggle">
  <button type="button" class="button selected">버튼</button>
  <button type="button" class="button">버튼</button>
  <button type="button" class="button">버튼</button>
</span>

<!-- 버튼 그룹 - 기본형(가운데 정렬) -->
<div class="ec-base-button">
  <a href="#none" class="btnNormalFix sizeS">삭제</a>
  <a href="#none" class="btnEmFix sizeS">수정</a>
</div>

<!-- 버튼 그룹 - 선 박스 -->
<div class="ec-base-button typeBorder">
  <a href="#none" class="btnNormalFix sizeS">삭제</a>
  <a href="#none" class="btnEmFix sizeS">수정</a>
</div>

<!-- 버튼 그룹 - 배경 박스 -->
<div class="ec-base-button typeBG">
  <span class="gLeft">
    <a href="#none" class="btnNormalFix sizeS">삭제</a>
  </span>
  <span class="gRight">
    <a href="#none" class="btnEmFix sizeS">수정</a>
  </span>
</div>

<!-- 버튼 그룹 - 좌측 정렬 -->
<div class="ec-base-button">
  <span class="gLeft">
    <a href="#none" class="btnNormalFix sizeS">삭제</a>
    <a href="#none" class="btnEmFix sizeS">수정</a>
  </span>
</div>

<!-- 버튼 그룹 - 양쪽 정렬 -->
<div class="ec-base-button">
  <span class="gLeft">
    <a href="#none" class="btnNormalFix sizeS">삭제</a>
  </span>
  <span class="gRight">
    <a href="#none" class="btnEmFix sizeS">수정</a>
  </span>
</div>

<!-- 버튼 그룹 - 조합 정렬 (좌측+가운데) -->
<div class="ec-base-button justify">
  <span class="gLeft">
    <a href="#none" class="btnNormalFix sizeS">목록</a>
  </span>
  <a href="#none" class="btnNormalFix sizeS">삭제</a>
  <a href="#none" class="btnEmFix sizeS">수정</a>
</div>

<!-- 버튼 자동 정렬 (균등 비율) -->
<div class="ec-base-button gColumn">
  <a href="#none" class="btnSubmit sizeL">바로 구매하기</a>
  <a href="#none" class="btnEm sizeL">장바구니 담기</a>
  <a href="#none" class="btnNormal sizeL">관심상품 등록</a>
</div>
```

## 주의사항

- 가변형: 텍스트 길이에 따라 너비 자동 조절
- 고정형: 텍스트가 길어지면 자동 줄 바꿈
- `gColumn`은 여러 버튼을 동일 비율로 나열할 때 사용
