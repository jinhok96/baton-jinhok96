# Layer — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/layer

## 클래스

- `ec-base-layer` — 기본 레이어 (팝업/레이어팝업 공통 컨테이너)
- `ec-base-layer typeModal` — 모달형 (여백 있음, 화면 중앙 노출)
- `ec-base-layer typeWide` — 와이드형 (레이아웃 전체 사이즈업)
- `ec-base-layer gClearFlex` — 전체 영역형 (콘텐츠 영역 전체 사용)
- `ec-base-layer theme1` — 배경색 흰색으로 변경

### body 클래스
- `body.popup` — 새 윈도우 팝업 페이지
- `body.layer` — 레이어팝업 페이지

### 내부 요소
- `h1` — 팝업 제목
- `.wrap` — 콘텐츠 영역
- `ec-base-button` — 버튼 영역
- `.btnClose` — 닫기 버튼

## 주의사항
- 콘텐츠가 지정 영역 초과 시 자동 스크롤바 생성
- 레이어팝업은 화면을 가득 채우며 노출 (기본형)
- `gClearFlex`는 전체 콘텐츠 영역 사용, 스크롤 범위와 하단 버튼 위치는 콘텐츠 길이에 따라 변함

## 예제

```html
<!-- 팝업 (새 윈도우, body.popup) -->
<div class="ec-base-layer">
    <h1>제목</h1>
    <div class="wrap">
        콘텐츠 영역
    </div>
    <div class="ec-base-button"></div>
    <button type="button" class="btnClose" onclick="window.close()">닫기</button>
</div>

<!-- 레이어팝업 (body.layer, 화면 가득) -->
<div class="ec-base-layer">
    <h1>제목</h1>
    <div class="wrap">
        콘텐츠 영역
    </div>
    <div class="ec-base-button"></div>
    <button type="button" class="btnClose">닫기</button>
</div>

<!-- 모달형 (여백, 화면 중앙) -->
<div class="ec-base-layer typeModal">
    <h1>제목</h1>
    <div class="wrap">
        콘텐츠 영역
    </div>
    <div class="ec-base-button"></div>
    <button type="button" class="btnClose">닫기</button>
</div>

<!-- 와이드형 -->
<div class="ec-base-layer typeWide">
    <h1>제목</h1>
    <div class="wrap">
        콘텐츠 영역
    </div>
    <div class="ec-base-button"></div>
    <button type="button" class="btnClose">닫기</button>
</div>

<!-- 전체 영역형 -->
<div class="ec-base-layer gClearFlex">
    <h1>제목</h1>
    <div class="wrap">
        콘텐츠 영역
    </div>
    <div class="ec-base-button"></div>
    <button type="button" class="btnClose">닫기</button>
</div>

<!-- 흰색 배경형 -->
<div class="ec-base-layer theme1">
    <h1>제목</h1>
    <div class="wrap">
        콘텐츠 영역
    </div>
    <div class="ec-base-button"></div>
    <button type="button" class="btnClose">닫기</button>
</div>
```
