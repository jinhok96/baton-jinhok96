# Form — PC

출처: https://developers.cafe24.com/design/front/component/pc/form

## 클래스

- `.ePlaceholder` — placeholder 문구 표기용 래퍼 span
- `.ec-base-qty` — 수량 입력 (텍스트 + 증감 버튼)
- `.ec-base-chk` — 커스텀 체크박스 (이미지 스프라이트 기반)
- `.gLabel` — 라디오/체크박스 그룹 레이블 래퍼
- `.fWidthFull` — 폼 요소 너비 100% 확장
- `.fList.typeHor` — 폼 항목 가로 나열
- `.fList.typeVer` — 폼 항목 세로 나열

## 폼 요소 Reset CSS (공통 적용)

폼 태그에는 별도 클래스 없이 전역 reset CSS가 선언됩니다. 실제 폼 태그는 변수 안에 포함되어 있어 직접 수정이 불가합니다.

```css
/* Form reset */
input, select, textarea { font-size:100%; color:#353535; vertical-align:middle; }
input[type=radio], input[type=checkbox] { width:13px; height:13px; border:0; }
input[type=text], input[type=password] { height:18px; line-height:20px; padding:2px 4px; border:1px solid #d5d5d5; font-size:12px; }
input[type=radio] + label, input[type=checkbox] + label { margin:0 4px 0 2px; }
select { height:24px; border:1px solid #d5d5d5; }
textarea { padding:5px 6px; border:1px solid #d5d5d5; line-height:1.5; }

/* 너비 full */
.fWidthFull input[type=text] { width:100%; height:24px; box-sizing:border-box; }
.fWidthFull textarea { width:100%; box-sizing:border-box; }
.fWidthFull select { width:100%; box-sizing:border-box; }

/* 라디오/체크 그룹 */
.gLabel { display:inline-block; }
.gLabel label { margin-right:20px; line-height:22px; }
.fList.typeHor .gLabel { margin-right:20px; }
.fList.typeVer .gLabel { display:block; }

/* 수량 입력 */
.ec-base-qty { position:relative; display:inline-block; width:50px; margin:0 1px 0 0; }
.ec-base-qty input[type="text"] { width:22px; height:23px; padding:0 0 0 5px; border:1px solid #d4d8d9; border-radius:3px 0 0 3px; }
.ec-base-qty .up { position:absolute; left:27px; top:0; }
.ec-base-qty .down { position:absolute; left:27px; bottom:0; }

/* 커스텀 체크박스 */
.ec-base-chk { display:inline-block; position:relative; margin:0 8px 0 0; width:22px; height:22px; vertical-align:top; cursor:pointer; }
.ec-base-chk input { z-index:1; position:absolute; top:0; left:0; width:100%; height:100%; opacity:0; cursor:pointer; }
.ec-base-chk .checkbox { position:absolute; top:0; left:0; width:100%; height:100%; background:url("//img.echosting.cafe24.com/skin/base/common/bg_join_check.png") no-repeat 0 0; }
.ec-base-chk input:checked + .checkbox { background-position:-34px 0; }
```

## 예제

### 텍스트 입력 (싱글라인)

```html
<!-- 기본형 -->
<input type="text" />

<!-- Placeholder 문구 표기 -->
<span class="ePlaceholder" title="Placeholder">
  <input type="text" placeholder="표시할 문구를 넣으세요." />
</span>

<!-- 파일 첨부 -->
<input name="attach_file[]" type="file">
```

### 텍스트 입력 (멀티라인)

```html
<!-- cols(가로) / rows(높이) 속성으로 크기 지정 -->
<textarea cols="20" rows="3">내용을 입력할 수 있는 영역입니다.</textarea>
```

### 라디오 버튼

```html
<!-- 단독 -->
<input type="radio" title="라디오 버튼명" />

<!-- 텍스트 포함 -->
<label><input type="radio" title="라디오버튼" />라디오</label>
```

### 체크박스

```html
<!-- 단독 -->
<input type="checkbox" title="체크 박스명" />

<!-- 텍스트 포함 -->
<label><input type="checkbox" title="체크 박스명" />체크박스</label>
```

### 셀렉트 박스

```html
<select>
    <option>옵션1</option>
    <option>옵션2</option>
    <option>옵션3</option>
</select>
```

### 커스텀 체크박스 (ec-base-chk)

```html
<span class="ec-base-chk">
  <input type="checkbox" />
  <span class="checkbox"></span>
</span>
```

## 주의사항

- 실제 폼 태그는 Cafe24 변수 안에 포함되어 있어 직접 HTML 수정이 불가합니다.
- `ec-base-chk`는 스프라이트 이미지(`bg_join_check.png`)를 사용하므로 서버 환경에서만 정상 표시됩니다.
- `input[type=radio]`, `input[type=checkbox]`에는 접근성을 위해 `title` 속성을 명시합니다.
