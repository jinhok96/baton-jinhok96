# Fold — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/fold

## 클래스

- `ec-base-fold theme1` — 기본형 (제목 배경 진한 회색)
- `ec-base-fold theme2` — 테마2 (제목 배경 연회색)
- `ec-base-fold theme3` — 테마3 (제목 배경 밝은 회색, 제목/콘텐츠 구분선 없음)
- `dl.ec-base-fold theme4` — 테마4 (여러 제목+콘텐츠 나열, `<dl>` 태그 사용)

### 상태/동작 클래스
- `.selected` — 폴드 열린 상태
- `.eToggle` — 토글 동작 활성화 (JS)

### 내부 구조 (theme1~3)
- `.title` — 제목 영역
- `.contents` — 콘텐츠 영역

### 내부 구조 (theme4)
- `<dt>` — 제목
- `<dd>` — 콘텐츠

## 예제

```html
<!-- theme1: 기본형 (진한 회색, 열린 상태) -->
<div class="ec-base-fold theme1 selected eToggle">
    <div class="title">
        <h2>ec-base-fold theme1 <span>(총 1점 / 0원)</span></h2>
    </div>
    <div class="contents">contents</div>
</div>

<!-- theme2: 연회색 -->
<div class="ec-base-fold theme2 eToggle">
    <div class="title">
        <h3>ec-base-fold theme2</h3>
        <p>35,000원</p>
    </div>
    <div class="contents">contents</div>
</div>

<!-- theme3: 밝은 회색, 구분선 없음 -->
<div class="ec-base-fold theme3 eToggle">
    <div class="title">
        <h3>ec-base-fold theme3</h3>
    </div>
    <div class="contents">contents</div>
</div>

<!-- theme4: 여러 항목 나열형 (dl 태그) -->
<dl class="ec-base-fold theme4 eToggle">
    <dt>ec-base-fold theme4</dt>
    <dd>contents</dd>
    <dt>ec-base-fold theme4</dt>
    <dd>contents</dd>
</dl>
```
