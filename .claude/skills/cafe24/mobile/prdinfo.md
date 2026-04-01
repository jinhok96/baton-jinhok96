# PrdInfo — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/prdinfo

## 클래스

- `ec-base-prdInfo` — 상품 정보 컨테이너
- `.prdBox` — 썸네일 + 상세 정보 묶음
- `.thumbnail` — 상품 이미지 영역
- `.description` — 상품 설명 영역
- `.prdName` — 상품명
- `.info` — 상품 정보 목록 (`<ul>`)
- `.info .price` — 가격 항목
- `.info .cart` — 장바구니 항목
- `.refer` — 참조 가격 (취소선 등)
- `.option` — 옵션 목록 (`<ul>`)
- `.optionDesc` — 옵션 설명
- `.layerOptionModify` — 옵션 변경 레이어
- `.prdFoot` — 하단 상태/합계 영역
- `ec-base-qty` — 수량 조절 버튼 (info 내부)

## 주요 사용 페이지
- 게시판 상품 후기 (읽기/쓰기/수정)
- 마이쇼핑
- 주문 페이지

## 예제

```html
<div class="ec-base-prdInfo">
    <input type="checkbox" />
    <div class="prdBox">
        <div class="thumbnail"><a href="#none"><img src="{$변수}" alt="" width="71" height="71" /></a></div>
        <div class="description">
            <strong class="prdName" title="상품명">{$변수}</strong>
            <ul class="info">
                <li>유효기간 : {$변수}</li>
                <li>배송 : {$변수} / 기본배송 {$변수}</li>
                <li class="price">
                    <span title="판매가격">
                        {$변수}<strong>{$변수}</strong>{$변수}
                        <span class="refer">{$변수}</span>
                    </span>
                    <span title="할인 가격">
                        {$변수}<strong>{$변수}</strong>{$변수}
                        <span class="refer">{$변수}</span>
                    </span>
                    <strong class="quantity" title="수량">1</strong>점
                </li>
                <li class="cart">{$변수}</li>
                <li class="ec-base-qty">
                    <button type="button" onclick="{$변수}">
                        <img src="/ico_quantity_down.jpg" width="33" height="29" alt="감소" />
                    </button>
                    {$product_amount}
                    <button type="button" onclick="{$변수}">
                        <img src="/ico_quantity_up.jpg" width="33" height="29" alt="증가" />
                    </button>
                    <span><button type="button" onclick="{$변수}" class="btnStrong">선택</button></span>
                </li>
            </ul>
        </div>
    </div>

    <!-- 옵션 목록 -->
    <ul class="option">
        <li><div class="name">{$변수}</div></li>
    </ul>

    <!-- 옵션 변경 (마이쇼핑) -->
    <ul class="option" module="Myshop_optionAll">
        <li>
            <div class="name">
                <span class="optionDesc"><span>{$변수} : </span>{$변수}</span>
                <a href="#none" class="btnBasic change" onclick="{$변수}">옵션변경</a>
            </div>
            <div class="layerOptionModify" id="{$변수}">
                <ul module="Myshop_optionList">
                    <li><span class="optionItem">{$변수}</span> {$변수}</li>
                </ul>
                <div class="ec-base-button gCenter">
                    <a href="#none" class="btnStrong" onclick="{$변수}">변경</a>
                    <a href="#none" class="btnNormal" onclick="$('.layerOptionModify').remove();">취소</a>
                </div>
            </div>
        </li>
    </ul>

    <!-- 하단: 주문 상태 -->
    <div class="prdFoot" title="주문상태">
        {$변수}
        <div class="gRight">
            <a href="#none" class="btnBasic mini">리뷰</a>
            <a href="#none" class="btnBasic mini" onclick="{$변수}">취소 철회</a>
        </div>
    </div>

    <!-- 하단: 합계 -->
    <div class="prdFoot" title="합계">
        <div class="gRight">
            합계 : {$변수}<strong>{$변수}</strong>{$변수}
        </div>
    </div>
</div>
```
