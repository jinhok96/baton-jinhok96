# Font — PC

출처: https://developers.cafe24.com/design/front/component/pc/font

## 클래스

### 색상

- `.txtInfo` — 보조 설명 텍스트 (회색, `#707070`)
- `.txtWarn` — 주의 텍스트 (빨강, `#f76560`)
- `.txtEm` — 강조 텍스트 (파랑, `#008bcc`)
- `.txtDel`, `.strike`, `.discount` — 취소선 텍스트
- `.txtNormal` — 기본 폰트 스타일 (normal weight, normal style)

### 크기

- `.txt11` — 11px (JP/TW/CN: 12px)
- `.txt12` — 12px
- `.txt14` — 14px
- `.txt16` — 16px
- `.txt18` — 18px (letter-spacing: -1px)

### 기타

- `.txtNum` — 숫자 표시용 (inline-block, 11px, `#939393`)
- `.txtIcon` — 아이콘 옆 텍스트 (12px, font-style: normal)
- `.txtBreak` — 줄바꿈 강제 (word-break: break-all)

## CSS 전체

```css
.txtInfo {
  color: #707070;
}
.txtWarn {
  color: #f76560;
}
.txtEm {
  color: #008bcc;
}
.txtDel,
.strike,
.discount {
  text-decoration: line-through;
  font-weight: normal;
}
.strike strong,
.discount strong {
  font-weight: normal;
}
.txtNormal {
  font-weight: normal;
  font-style: normal;
}
.txtNum {
  display: inline-block;
  font-size: 11px;
  color: #939393;
  word-break: normal;
}
.txt11 {
  font-size: 11px;
}
.txt12 {
  font-size: 12px;
}
.txt14 {
  font-size: 14px;
}
.txt16 {
  font-size: 16px;
}
.txt18 {
  font-size: 18px;
  letter-spacing: -1px;
}
.txtIcon {
  font-size: 12px;
  font-style: normal;
}
.txtBreak {
  word-break: break-all;
  word-wrap: break-word;
}
/* JP, TW, CN */
html:lang(ja) .txt11,
html:lang(zh) .txt11,
html:lang(zh-tw) .txt11 {
  font-size: 12px;
}
```

## 예제

```html
<p>기본 텍스트 정보를 입력하세요.</p>
<p class="txtInfo">보조설명 텍스트 정보를 입력하세요.</p>
<p class="txtWarn">주의가 필요한 텍스트 정보를 입력하세요.</p>
<p class="txtEm">강조하고 싶은 텍스트 정보를 입력하세요.</p>
```
