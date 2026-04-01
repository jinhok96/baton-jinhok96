# Font — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/font

## 클래스

### 색상
- `.txtInfo` — 보조 텍스트 색상 (#707070)
- `.txtWarn` — 주의 텍스트 색상 (#f76560, 빨강)
- `.txtEm` — 강조 텍스트 색상 (#008bcc, 파랑)
- `.txtDel` / `.strike` / `.discount` — 취소선 텍스트
- `.txtNormal` — 기본 폰트 스타일 초기화 (font-weight:normal, font-style:normal)
- `.txtNum` — 숫자용 소형 텍스트 (11px, #939393)
- `.txtBreak` — 단어 줄바꿈 강제 적용

### 폰트 크기
- `.txt11` — 11px
- `.txt12` — 12px
- `.txt14` — 14px
- `.txt16` — 16px
- `.txt18` — 18px (letter-spacing: -1px)
- `.txtIcon` — 12px, font-style: normal

### 여백/레이아웃 유틸리티
- `.gBlank5` / `.gBlank10` / `.gBlank20` / `.gBlank30` — 상단 마진 (5/10/20/30px)
- `.gIndent10` / `.gIndent20` — 좌측 마진 (10/20px)
- `.gSpace10` / `.gSpace20` — 우측 마진 (10/20px)
- `.gMerge` — 상단 -1px 마진 (보더 겹치기)

### 폼 관련
- `.gLabel` — 인라인 레이블 컨테이너
- `.fWidthFull` — input/select/textarea 100% 너비
- `.fList.typeHor` — 수평 나열
- `.fList.typeVer` — 수직 나열

## CSS 정의

```css
/* Font */
.txtInfo { color:#707070; }
.txtWarn { color:#f76560; }
.txtEm { color:#008bcc; }
.txtDel, .strike, .discount { text-decoration:line-through; font-weight:normal; }
.txtNormal { font-weight:normal; font-style:normal; }
.txtNum { display:inline-block; font-size:11px; color:#939393; word-break:normal; }
.txt11 { font-size:11px; }
.txt12 { font-size:12px; }
.txt14 { font-size:14px; }
.txt16 { font-size:16px; }
.txt18 { font-size:18px; letter-spacing:-1px; }
.txtIcon { font-size:12px; font-style:normal; }
.txtBreak { word-break:break-all; word-wrap:break-word; }

/* grid */
.gBlank5 { display:block; margin-top:5px; }
.gBlank10 { display:block; margin-top:10px; }
.gBlank20 { display:block; margin-top:20px; }
.gBlank30 { display:block; margin-top:30px; }
.gIndent10 { margin-left:10px; }
.gIndent20 { margin-left:20px; }
.gSpace10 { margin-right:10px; }
.gSpace20 { margin-right:20px; }
.gMerge { position:relative; z-index:1; margin-top:-1px; }
```

## 예제

```html
<!-- 색상 텍스트 -->
<p>기본 텍스트 정보를 입력하세요.</p>
<p class="txtWarn">주의가 필요한 텍스트 정보를 입력하세요.</p>
<p class="txtEm">강조하고 싶은 텍스트 정보를 입력하세요.</p>
```
