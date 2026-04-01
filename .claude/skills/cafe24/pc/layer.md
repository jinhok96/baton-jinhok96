# Layer — PC

출처: https://developers.cafe24.com/design/front/component/pc/layer

## 클래스
- 기본: `ec-base-layer`
- 내부 구조: `.header`, `.content`, `.close`

## 예제

```html
<!-- 레이어 팝업 (화면 내 노출) -->
<div module="모듈명" class="ec-base-layer">
  <div class="header">
    <h3>레이어 팝업</h3>
  </div>
  <div class="content">
    세부 내용
  </div>
  <div class="ec-base-button">
    <a href="#none" class="btnSubmitFix sizeS">확인</a>
    <a href="#none" class="btnNormalFix sizeS">취소</a>
  </div>
  <a href="#none" class="close"><img src="//img.echosting.cafe24.com/skin/base/common/btn_close.png" alt="닫기" /></a>
</div>

<!-- 팝업 (새 윈도우창) -->
<div id="popup">
  <div module="모듈명" class="ec-base-layer">
    <div class="header">
      <h1>팝업</h1>
    </div>
    <div class="content">
      세부 내용
    </div>
    <div class="ec-base-button">
      <a href="#none" class="btnSubmitFix sizeS">확인</a>
      <a href="#none" class="btnNormalFix sizeS">취소</a>
    </div>
    <a href="#none" class="close"><img src="//img.echosting.cafe24.com/skin/base/common/btn_close.png" alt="닫기" /></a>
  </div>
</div>
```

## 주의사항
- 레이어 팝업(화면 내): 별도 `id` 없이 `ec-base-layer` 단독 사용
- 팝업(새 창): `body`에 `id="popup"` 선언 후 `ec-base-layer` 감싸기
- 닫기 버튼은 `class="close"` 사용
- 버튼 영역은 `ec-base-button` 컴포넌트 조합 사용
