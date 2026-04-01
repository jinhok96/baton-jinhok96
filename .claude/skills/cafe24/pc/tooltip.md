# Tooltip — PC

출처: https://developers.cafe24.com/design/front/component/pc/tooltip

## 클래스
- 기본: `ec-base-tooltip`
- 수정자:
  - `typeUpper` — 상단 노출형 (버튼 위쪽으로 툴팁 표시)

## 내부 구조
- `h3` — 대제목
- `p` — 설명 문단
- `.content` — 상세 콘텐츠 영역
- `.bullet` — 불릿 목록/문단
- `h4` — 중제목
- `.info` — 추가 설명 목록/문단
- `.btnClose` — 닫기 버튼
- `.edge` — 툴팁 말풍선 꼬리 (`<span>`)

## 예제

```html
<!-- 기본형 (하단 노출) -->
<div class="사용자 지정 클래스" module="">
  <a href="#none" class="btnSample">버튼</a>
  <div class="ec-base-tooltip">
    <h3>h3 대제목입니다.</h3>
    <p>설명입니다.</p>
    <div class="content">
      <ul class="bullet">
        <li>목록형 설명입니다.</li>
        <li>목록형 설명입니다.</li>
      </ul>
      <p class="bullet">문단형 설명입니다.</p>
      <h4>h4 중제목입니다.</h4>
      <p class="info">문단형 설명입니다.</p>
      <ul class="info">
        <li>목록형 설명입니다.</li>
        <li>목록형 설명입니다.</li>
      </ul>
    </div>
    <a href="#none" class="btnClose"><img src="//img.echosting.cafe24.com/skin/base/common/btn_close_tip.gif" alt="닫기" /></a>
    <span class="edge"></span>
  </div>
</div>

<!-- 상단 노출형 -->
<div class="module" module="">
  <a href="#none" class="btnSample">버튼</a>
  <div class="ec-base-tooltip typeUpper">
    <h3>h3 대제목입니다.</h3>
    <p>설명입니다.</p>
    <div class="content">
      <ul class="bullet">
        <li>목록형 설명입니다.</li>
        <li>목록형 설명입니다.</li>
      </ul>
      <p class="bullet">문단형 설명입니다.</p>
      <h4>h4 중제목입니다.</h4>
      <p class="info">문단형 설명입니다.</p>
      <ul class="info">
        <li>문단형 설명입니다.</li>
        <li>문단형 설명입니다.</li>
      </ul>
    </div>
    <a href="#none" class="btnClose"><img src="//img.echosting.cafe24.com/skin/base/common/btn_close_tip.gif" alt="닫기" /></a>
    <span class="edge"></span>
  </div>
</div>
```

## 주의사항
- 툴팁은 버튼을 감싸는 부모 요소가 반드시 필요
- 크기 및 변형 디자인은 각 모듈 CSS 파일에서 별도 설정
- `.edge`는 말풍선 꼬리 역할을 하는 장식 요소
