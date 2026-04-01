# Tab — PC

출처: https://developers.cafe24.com/design/front/component/pc/tab

## 클래스

- 기본: `ec-base-tab`
- 수정자:
  - `typeLight` — 라인형 (선택된 탭 색상만 다름)
  - `eTab` — 페이지 내 콘텐츠 이동 (비동기식, JS 제어)
  - `grid2` ~ `grid7` — 넓이 가변형 (메뉴 수에 따라 균등 분할)

## 예제

```html
<!-- 기본형 (페이지 이동) -->
<div class="ec-base-tab">
  <ul class="menu">
    <li class="selected"><a href="#none">탭 메뉴1</a></li>
    <li><a href="#none">탭 메뉴2</a></li>
  </ul>
</div>

<!-- 라인형 -->
<div class="ec-base-tab typeLight">
  <ul class="menu">
    <li class="selected"><a href="#none">탭 버튼1</a></li>
    <li><a href="#none">탭 버튼2</a></li>
  </ul>
</div>

<!-- 넓이 가변형 (grid2~grid7) -->
<div class="ec-base-tab grid2">
  <ul class="menu">
    <li class="selected"><a href="#none">grid2</a></li>
    <li><a href="#none">탭 메뉴2</a></li>
  </ul>
</div>

<!-- 버튼/메시지 추가 -->
<div class="ec-base-tab">
  <ul class="menu">
    <li class="selected"><a href="#none">탭 메뉴1</a></li>
    <li><a href="#none">탭 메뉴2</a></li>
  </ul>
  <span class="right"><a href="#none" class="btnNormal">추가정보</a></span>
</div>

<!-- 페이지 내 콘텐츠 이동 탭 (eTab, 비동기식) -->
<div class="ec-base-tab eTab">
  <ul class="menu">
    <li class="selected"><a href="#tabCont1_1">탭 메뉴1</a></li>
    <li><a href="#tabCont1_2">탭 메뉴2</a></li>
  </ul>
  <div id="tabCont1_1" class="tabCont" style="display:block;">탭 메뉴1 내용영역입니다.</div>
  <div id="tabCont1_2" class="tabCont" style="display:none;">탭 메뉴2 내용영역입니다.</div>
</div>

<!-- 라인형 + eTab -->
<div class="ec-base-tab typeLight eTab">
  <ul class="menu">
    <li class="selected"><a href="#tabCont1_1">탭 메뉴1</a></li>
    <li><a href="#tabCont1_2">탭 메뉴2</a></li>
  </ul>
  <div id="tabCont1_1" class="tabCont" style="display:block;">탭 메뉴1 내용영역입니다.</div>
  <div id="tabCont1_2" class="tabCont" style="display:none;">탭 메뉴2 내용영역입니다.</div>
</div>
```

## 주의사항

- 탭 메뉴 1개당 최소 168px 너비, 디자인상 최대 4개까지 권장
- 기본형은 페이지 이동(동기식); 비동기식은 `eTab` 클래스 + `tabCont` 사용
- `eTab` 사용 시 `href`는 `#tabCont아이디` 형식으로 연결
- 현재 선택된 탭 `<li>`에 `class="selected"` 추가
