# Tooltip — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/tooltip

## 클래스

- `ec-base-tooltip-area` — 툴팁 래퍼 (버튼을 감싸는 부모 요소)
- `ec-base-tooltip-area show` — 툴팁 표시 상태
- `ec-base-tooltip` — 툴팁 본체
- `ec-base-tooltip typeUpper` — 버튼 위쪽으로 툴팁 노출
- `.btnTip` — 툴팁 열기 버튼
- `.btnTip eTip` — JS 인터랙션 포함 툴팁 열기 버튼
- `.btnClose eClose` — JS 인터랙션 포함 닫기 버튼
- `.title` — 툴팁 제목
- `.content` — 툴팁 내용 영역

## 주의사항
- 툴팁 크기 및 디자인 변경은 각 모듈 CSS 파일에서 설정
- 배송비 할인 타입과 Eximbay DCC 타입은 인터랙션이 변수로 정의되어 있어 `tooltipArea`, `eTip`, `eClose` 추가하지 않음

## 예제

```html
<!-- 기본 툴팁 -->
<div class="ec-base-tooltip-area show">
    <button type="button" class="btnTip eTip">도움말</button>
    <div class="ec-base-tooltip" style="display: block;">
        <strong class="title">툴팁 제목</strong>
        <div class="content">
            <ul>...</ul>
            <button type="button" class="btnClose eClose">닫기</button>
        </div>
    </div>
</div>

<!-- 위쪽 노출형 (typeUpper) -->
<div class="ec-base-tooltip-area show">
    <span class="eTip">
        <input type="text" />
    </span>
    <div class="ec-base-tooltip typeUpper" style="display: block;">
        <div class="content">
            <span class="txtWarn">...</span>
            <button type="button" class="btnClose eClose">닫기</button>
        </div>
    </div>
</div>

<!-- 배송비 할인형 (인터랙션 변수 사용, eTip/eClose 미사용) -->
<div class="shippingFee">
    <a href="#none" class="btnNormal mini" id="{$변수}">상세</a>
    <div class="ec-base-tooltip">
        <strong class="title">배송비 할인</strong>
        <div class="content">
            <strong class="title">{$변수}</strong>
            <div class="ec-base-table">
                <table border="1">
                    <caption>배송비 할인 이벤트 정보</caption>
                </table>
            </div>
        </div>
        <button type="button" class="btnClose">닫기</button>
    </div>
</div>

<!-- Eximbay DCC형 (고정 레이어, 인터랙션 변수 사용) -->
<div class="eximbayDCC">
    DCC <a href="#none" onclick="{$변수}" class="btnTip">Help</a> : {$변수}
    <div class="ec-base-tooltip" id="{$변수}">
        <strong class="title">Eximbay DCC (Dynamic Currency Conversion)</strong>
        <div class="content">
            <ul>...</ul>
            <a href="#none" onclick="{$변수}" class="btnClose">Close</a>
        </div>
    </div>
</div>
```
