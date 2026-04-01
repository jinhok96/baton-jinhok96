# Grid / Margin / Align — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/grid

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

### 영역 쌓기
- `.gMerge` — 상단 -1px 마진으로 보더 겹치기 (position: relative; z-index: 1)

## 예제

```html
<!-- 상단 여백 -->
<p class="gBlank5">상단에 여백이 5px만큼 선언됩니다.</p>
<p class="gBlank10">상단에 여백이 10px만큼 선언됩니다.</p>
<p class="gBlank20">상단에 여백이 20px만큼 선언됩니다.</p>
<p class="gBlank30">상단에 여백이 30px만큼 선언됩니다.</p>

<!-- 좌측 여백 -->
<p class="gIndent10">좌측여백이 10px만큼 선언됩니다.</p>
<p class="gIndent20">좌측여백이 20px만큼 선언됩니다.</p>

<!-- 우측 여백 -->
<p class="gSpace10">우측여백이 10px만큼 선언됩니다.</p>
<p class="gSpace20">우측여백이 20px만큼 선언됩니다.</p>

<!-- 컴포넌트에 여백 적용 -->
<div class="ec-base-box typeThin gBlank20">
    <p>내용이 들어가는 영역입니다.</p>
</div>
<div class="ec-base-box typeThin gIndent10">
    <p>내용이 들어가는 영역입니다.</p>
</div>
<div class="ec-base-box typeThin gSpace20">
    <p>내용이 들어가는 영역입니다.</p>
</div>

<!-- 영역 쌓기 (보더 겹치기) -->
<div class="ec-base-box typeThin">
    <p>내용이 들어가는 영역입니다.</p>
</div>
<div class="ec-base-box typeThinBg gMerge">
    <p>내용이 들어가는 영역입니다.</p>
</div>
```
