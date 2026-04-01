# Grid / Margin / Align — PC

출처: https://developers.cafe24.com/design/front/component/pc/grid

## 클래스

### 상단 여백 (margin-top)

- `.gBlank5` — margin-top: 5px
- `.gBlank10` — margin-top: 10px
- `.gBlank20` — margin-top: 20px
- `.gBlank30` — margin-top: 30px

### 좌측 여백 (margin-left)

- `.gIndent10` — margin-left: 10px
- `.gIndent20` — margin-left: 20px

### 우측 여백 (margin-right)

- `.gSpace10` — margin-right: 10px
- `.gSpace20` — margin-right: 20px

### 기타

- `.gMerge` — 영역 겹치기 (margin-top: -1px, z-index: 1) — 두 박스를 테두리 공유하여 쌓을 때 사용
- `.fWidthFull` — 자식 input/textarea/select 너비를 100%로 확장
- `.gLabel` — inline-block 래퍼, input + label 줄바꿈 분리 방지

## CSS 전체

```css
.gBlank5 {
  display: block;
  margin-top: 5px;
}
.gBlank10 {
  display: block;
  margin-top: 10px;
}
.gBlank20 {
  display: block;
  margin-top: 20px;
}
.gBlank30 {
  display: block;
  margin-top: 30px;
}
.gIndent10 {
  margin-left: 10px;
}
.gIndent20 {
  margin-left: 20px;
}
.gSpace10 {
  margin-right: 10px;
}
.gSpace20 {
  margin-right: 20px;
}
.gMerge {
  position: relative;
  z-index: 1;
  margin-top: -1px;
}
.gLabel {
  display: inline-block;
}
.gLabel label {
  margin-right: 20px;
  line-height: 22px;
}
.fWidthFull input[type='text'] {
  width: 100%;
  height: 24px;
  box-sizing: border-box;
}
.fWidthFull textarea {
  width: 100%;
  box-sizing: border-box;
}
.fWidthFull select {
  width: 100%;
  box-sizing: border-box;
}
```

## 예제

### 여백 정렬

```html
<!--상단 여백-->
<p class="gBlank5">상단에 여백이 5px만큼 선언됩니다.</p>
<p class="gBlank10">상단에 여백이 10px만큼 선언됩니다.</p>
<p class="gBlank20">상단에 여백이 20px만큼 선언됩니다.</p>
<p class="gBlank30">상단에 여백이 30px만큼 선언됩니다.</p>

<!--좌측 여백-->
<p class="gIndent10">좌측 여백이 10px만큼 선언됩니다.</p>
<p class="gIndent20">좌측 여백이 20px만큼 선언됩니다.</p>

<!--우측 여백-->
<p class="gSpace10">우측 여백이 10px만큼 선언됩니다.</p>
<p class="gSpace20">우측 여백이 20px만큼 선언됩니다.</p>

<!--컴포넌트 여백-->
<div class="ec-base-box typeThin gBlank20">
  <p>내용이 들어가는 영역입니다.</p>
</div>

<!--영역 쌓기 (테두리 공유)-->
<div class="ec-base-box typeThin">
  <p>내용이 들어가는 영역입니다.</p>
</div>
<div class="ec-base-box typeThinBg gMerge">
  <p>내용이 들어가는 영역입니다.</p>
</div>
```

### Input 너비 100%

```html
<span class="fWidthFull"><input type="text" /></span> <span class="fWidthFull"><textarea></textarea></span>
```

### Input + label 가로 정렬

```html
<!--명시적 연결 구조 : label>input-->
<label><input type="radio" title="라디오 버튼 제목" />라디오</label>
<label><input type="checkbox" title="체크박스 제목" />체크박스</label>

<!-- .gLabel + .gLabel 구조 : span.gLabel > input + label -->
<span class="gLabel">
  <input type="radio" id="radio" />
  <label for="radio">내용</label>
</span>
<span class="gLabel">
  <input type="checkbox" id="checkbox" />
  <label for="checkbox">내용</label>
</span>
```

## 주의사항

- `.gMerge`는 `position:relative; z-index:1`을 포함하므로 z-index 충돌에 주의
- 스마트디자인에서는 명시적 연결 구조(`label>input`)를 일반적으로 사용하며, 줄바꿈 시 분리 방지가 필요한 경우 `.gLabel`로 감싼다
