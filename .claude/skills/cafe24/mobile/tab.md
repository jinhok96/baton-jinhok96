# Tab — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/tab

## 클래스

- `ec-base-tab` — 기본 탭 (페이지 이동, 동기식)
- `ec-base-tab typeSub` — 서브형 탭 (선택된 탭 색상만 다름)
- `ec-base-tab eTab` — 비동기식 탭 (페이지 내 콘텐츠 전환, JS 제어)
- `ec-base-tab typeLight eTab` — 서브형 비동기식 탭
- `.selected` — 현재 선택된 탭 `<li>`에 적용
- `.gFlex2` — 특정 탭 항목을 2배 너비로 확장 (동일 폭 배치)
- `.number` — 건수 표시 (`<span class="number">`)
- `.menu` — eTab의 탭 목록 `<ul>`
- `.tabCont` — eTab의 콘텐츠 영역

## 주의사항
- 최대 4개 탭까지 사용 권장
- 텍스트가 길어지면 자동 줄바꿈
- 기본형은 페이지 이동(동기식), 비동기식은 `eTab` 클래스 사용

## 예제

```html
<!-- 기본형 (동기식, 페이지 이동) -->
<div class="ec-base-tab">
    <ul>
        <li class="selected"><a href="#none">메뉴 01</a></li>
        <li><a href="#none">메뉴 02</a></li>
        <li><a href="#none">메뉴 03</a></li>
        <li><a href="#none">메뉴 04</a></li>
    </ul>
</div>

<!-- 서브형 -->
<div class="ec-base-tab typeSub">
    <ul>
        <li class="selected"><a href="#none">메뉴 01</a></li>
        <li><a href="#none">메뉴 02</a></li>
        <li><a href="#none">메뉴 03</a></li>
        <li><a href="#none">메뉴 04</a></li>
    </ul>
</div>

<!-- gFlex2로 특정 탭 2배 너비 -->
<div class="ec-base-tab">
    <ul>
        <li class="selected gFlex2"><a href="#none">메뉴 01</a></li>
        <li><a href="#none">메뉴 02</a></li>
        <li><a href="#none">메뉴 03</a></li>
    </ul>
</div>

<!-- 건수 표시 -->
<div class="ec-base-tab">
    <ul>
        <li class="selected"><a href="#none"><span>메뉴 01<span class="number">(123건)</span></span></a></li>
        <li><a href="#none"><span>메뉴 02<span class="number">(12건)</span></span></a></li>
    </ul>
</div>

<!-- 비동기식 (페이지 내 콘텐츠 전환) -->
<div class="ec-base-tab eTab">
    <ul class="menu">
        <li class="selected"><a href="#tabCont1_1"><span>메뉴 01<span class="number">(123건)</span></span></a></li>
        <li><a href="#tabCont1_2"><span>메뉴 02<span class="number">(12건)</span></span></a></li>
    </ul>
    <div id="tabCont1_1" class="tabCont" style="display:block;">
        메뉴 01 내용영역입니다.
    </div>
    <div id="tabCont1_2" class="tabCont" style="display:none;">
        메뉴 02 내용영역입니다.
    </div>
</div>

<!-- 비동기식 서브형 -->
<div class="ec-base-tab typeLight eTab">
    <ul class="menu">
        <li class="selected"><a href="#tabCont1_1"><span>메뉴 01<span class="number">(123건)</span></span></a></li>
        <li><a href="#tabCont1_2"><span>메뉴 02<span class="number">(0)</span></span></a></li>
    </ul>
    <div id="tabCont1_1" class="tabCont" style="display:block;">
        메뉴 01 내용영역입니다.
    </div>
    <div id="tabCont1_2" class="tabCont" style="display:none;">
        메뉴 02 내용영역입니다.
    </div>
</div>
```
