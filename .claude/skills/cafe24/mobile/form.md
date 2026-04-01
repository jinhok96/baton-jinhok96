# Form — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/form

## 클래스

- 폼 태그(`input`, `textarea`, `select`, `radio`, `checkbox`)는 별도 클래스 없이 reset CSS가 전역 선언
- `ec-base-label` — radio/checkbox + label 묶음 래퍼 (`<span>`)

## 주의사항
- 실제 폼 태그들은 변수 안에 포함되어 있어 형태 수정 불가
- 클래스 없이 기본 reset 스타일 적용됨

## 예제

```html
<!-- 텍스트 입력 (싱글라인) -->
<input type="text" />
<input type="text" disabled>

<!-- 텍스트 입력 (멀티라인) -->
<textarea>내용을 입력할 수 있는 영역입니다.</textarea>

<!-- 라디오 버튼 -->
<input type="radio">
<input type="radio" checked>
<input type="radio" disabled>

<!-- input + label -->
<input type="radio" checked><label>라디오버튼</label>
<input type="radio"><label>라디오버튼</label>

<!-- label > input -->
<label><input type="radio" checked>라디오버튼</label>
<label><input type="radio">라디오버튼</label>

<!-- ec-base-label 래퍼 -->
<span class="ec-base-label">
    <input type="radio" checked><label>라디오버튼</label>
</span>
<span class="ec-base-label">
    <input type="radio"><label>라디오버튼</label>
</span>

<!-- 체크박스 -->
<input type="checkbox">
<input type="checkbox" checked>
<input type="checkbox" disabled>

<!-- 체크박스 + label -->
<input type="checkbox" checked><label>체크 박스</label>
<label><input type="checkbox" checked>체크 박스</label>
<span class="ec-base-label">
    <input type="checkbox" checked><label>체크 박스</label>
</span>

<!-- 셀렉트 박스 -->
<select>
    <option>옵션1</option>
    <option>옵션2</option>
    <option>옵션3</option>
</select>

<!-- 셀렉트 박스 비활성화 -->
<select disabled>
    <option>옵션1</option>
    <option>옵션2</option>
    <option>옵션3</option>
</select>
```
