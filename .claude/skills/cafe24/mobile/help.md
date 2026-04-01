# Help — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/help

## 클래스

- `ec-base-help` — 기본 도움말 (p, ul, ol에 적용)
- `ec-base-help typeDash` — 대시(-) 형태 도움말

## 유형

| 유형 | 설명 | 태그 |
|------|------|------|
| 기본형 | 한 줄 도움말, 느낌표 아이콘 | `<p>` |
| 목록형 | 연관 내용 나열 | `<ul>` |
| 숫자형 | 순서가 중요한 도움말 | `<ol>` |
| 대시형 | 정보 구분 나열 | `<p>`, `<ul>` + `.typeDash` |

## 예제

```html
<!-- 기본형 -->
<p class="ec-base-help">기본형 문장입니다.</p>

<!-- 목록형 -->
<ul class="ec-base-help">
    <li>목록형 도움말입니다.</li>
    <li>기본형 목록입니다.</li>
</ul>

<!-- 숫자형 -->
<ol class="ec-base-help">
    <li>숫자형 목록입니다. 내용이 보여집니다.</li>
    <li>숫자형 목록입니다. 내용이 보여집니다.</li>
</ol>

<!-- 대시형 (문장형) -->
<p class="ec-base-help typeDash">대시형 문장입니다.</p>

<!-- 대시형 (목록형) -->
<ul class="ec-base-help typeDash">
    <li>대시형 문장입니다.</li>
    <li>대시형 문장입니다.</li>
</ul>

<!-- 활용: 텍스트 스타일 조합 -->
<p class="ec-base-help"><span class="txtEm">강조형 문장입니다.</span></p>
<ul class="ec-base-help">
    <li>기본형 목록입니다.</li>
    <li><span class="txtEm txt11">강조형 문장입니다.</span></li>
</ul>
```
