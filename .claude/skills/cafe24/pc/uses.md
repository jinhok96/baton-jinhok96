# Uses — PC

출처: https://developers.cafe24.com/design/front/component/pc/uses

## 클래스

- `.ec-base-field` — 텍스트 입력폼(input)과 버튼을 나열할 때 사용하는 래퍼
- `.quantity` — 상품 수량 설정 버튼 래퍼
- `.QuantityDown` / `.QuantityUp` — 수량 감소/증가 버튼 이미지 클래스

## 예제

### 텍스트 입력 + 버튼

```html
<div class="ec-base-field">
  {$form.search}
  <button class="btnStrong" onclick="{$action_search}">검색</button>
</div>
```

### 상품 수량 설정 버튼

```html
<div class="quantity">
  <span>
    <img
      class="QuantityDown"
      alt="down"
      src="//img.echosting.cafe24.com/skin/mobile_ko_KR/order/ico_quantity_down.jpg"
      width="33"
      height="29"
      onclick="{$out_shortcut}"
    />
    {$form.quantity}
    <img
      class="QuantityUp"
      alt="up"
      src="//img.echosting.cafe24.com/skin/mobile_ko_KR/order/ico_quantity_up.jpg"
      width="33"
      height="29"
      onclick="{$add_shortcut}"
    />
  </span>
</div>
```
