# Help — PC

출처: https://developers.cafe24.com/design/front/component/pc/help

## 클래스

- `span.ec-base-help` / `p.ec-base-help` / `ul.ec-base-help li` — 인라인/문장형/목록형 도움말 (느낌표 아이콘 자동)
- `ul.ec-base-help` — 목록형 도움말 (대시 아이콘)
- `div.ec-base-help` — 박스형 도움말 컨테이너
- `.ec-base-help.typeDash` — 대시형 도움말 수정자

### div.ec-base-help 내부 구조

- `h2` / `h3` — 박스 제목 (배경 #fbfbfb, 하단 테두리)
- `.inner` — 내용 래퍼 (padding: 0 9px 12px)
- `h4` — 섹션 소제목
- `ol > li.item1 ~ li.item10` — 숫자형 목록 (1~10, 이미지 스프라이트)
- `ul > li` — 대시형 목록

## CSS 핵심

```css
span.ec-base-help,
p.ec-base-help,
ul.ec-base-help li {
  margin: 2px 9px;
  padding: 1px 0 1px 20px;
  line-height: 1.4;
  background: url('//img.echosting.cafe24.com/skin/base/common/ico_info.gif') no-repeat 0 2px;
}
div.ec-base-help {
  margin: 20px 0;
  border: 1px solid #d6d4d4;
  line-height: 18px;
}
div.ec-base-help > h2,
div.ec-base-help > h3 {
  padding: 9px 0 6px 10px;
  border-bottom: 1px solid #e8e7e7;
  color: #101010;
  font-size: 12px;
  background: #fbfbfb;
}
div.ec-base-help .inner {
  padding: 0 9px 12px;
}
/* 대시형 */
div.ec-base-help ul li,
.ec-base-help.typeDash li {
  padding: 0 0 0 11px;
  background: url('//img.echosting.cafe24.com/skin/base/common/ico_dash.gif') no-repeat 0 7px;
}
/* 숫자형 */
div.ec-base-help ol li {
  padding: 0 0 0 25px;
  background: url('//img.echosting.cafe24.com/skin/base/common/ico_number.png') no-repeat;
}
div.ec-base-help ol .item1 {
  background-position: -484px 0;
}
/* .item2~.item10 패턴 동일 */
```

## 예제

### 문장형 (인라인 — 우측 정렬)

```html
<input type="text" /> <span class="ec-base-help">도움말 내용을 입력하세요.</span>
```

### 문장형 (하단 정렬)

```html
<input type="text" />
<p class="ec-base-help">한 줄 도움말 내용을 입력하세요.</p>
<p class="ec-base-help">긴 텍스트 문장이 들어가는 도움말<br />내용을 입력하세요.</p>
```

### 목록형

```html
<ul class="ec-base-help">
  <li>목록형 도움말입니다.</li>
  <li>기본형 목록입니다.</li>
</ul>
```

### 숫자형 (박스)

```html
<div class="ec-base-help">
  <h3>숫자형 도움말</h3>
  <div class="inner">
    <h4>도움말 제목</h4>
    <p>내용을 입력합니다.</p>
    <ol>
      <li class="item1">도움말 메시지가 표시됩니다.</li>
      <li class="item2">도움말 메시지가 표시됩니다.<br />줄바꿈이 가능합니다.</li>
      <li class="item3">도움말 메시지가 표시됩니다.</li>
    </ol>
  </div>
</div>
```

### 대시형 (문장형)

```html
<p class="ec-base-help typeDash">대시형 문장입니다. 내용을 입력하세요.</p>
```

### 대시형 (박스형)

```html
<div class="ec-base-help">
  <h2>대시형 도움말</h2>
  <div class="inner">
    <ul>
      <li>도움말 내용이 표시됩니다.</li>
      <li>도움말 내용이 표시됩니다.</li>
    </ul>
  </div>
</div>
```

### 텍스트 스타일 조합

```html
<!-- 문장형 + 색상/크기 -->
<p class="ec-base-help txtWarn txt11">한줄 도움말 내용을 입력하세요.</p>

<!-- 목록형 + 강조 -->
<ul class="ec-base-help">
  <li>기본형 목록입니다.</li>
  <li class="txtWarn txt11">강조형 목록입니다.</li>
</ul>
```

## 주의사항

- 숫자형 `ol li`는 반드시 `.item1` ~ `.item10` 클래스를 지정해야 숫자 아이콘이 표시됨
- 텍스트 색상(`.txtWarn`, `.txtEm` 등)과 크기(`.txt11` 등) 클래스와 조합 가능
