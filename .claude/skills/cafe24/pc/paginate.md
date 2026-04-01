# Paginate — PC

출처: https://developers.cafe24.com/design/front/component/pc/paginate

## 클래스
- 기본: `ec-base-paginate`
- 수정자:
  - `typeSub` — 보조형 (중요도 낮은 영역, 레이어팝업 등)

## 내부 구조
- `.first` — 첫 페이지 버튼
- `.last` — 마지막 페이지 버튼
- `ol > li > a` — 페이지 번호 목록
- `a.this` — 현재 페이지 (활성 상태)

## 예제

```html
<!-- 기본형 -->
<div module="모듈명" class="ec-base-paginate">
  <a href="#none" class="first"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_first.gif" alt="첫 페이지" /></a>
  <a href="#none"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_prev.gif" alt="이전" /></a>
  <ol>
    <li><a href="#none" class="{$변수}">1</a></li>
    <li><a href="#none" class="{$변수}">2</a></li>
    <li><a href="#none" class="{$변수}">3</a></li>
    <li><a href="#none" class="{$변수}">4</a></li>
    <li><a href="#none" class="{$변수}">5</a></li>
  </ol>
  <a href="#none"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_next.gif" alt="다음에" /></a>
  <a href="#none" class="last"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_last.gif" alt="마지막 페이지" /></a>
</div>

<!-- 보조형 (팝업, 중요도 낮은 영역) -->
<div module="모듈명" class="ec-base-paginate typeSub">
  <a href="#none" class="first"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_first2.gif" alt="첫 페이지" /></a>
  <a href="#none"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_prev2.gif" alt="이전" /></a>
  <ol>
    <li><a href="#none" class="{$변수}">1</a></li>
    <li><a href="#none" class="{$변수}">2</a></li>
    <li><a href="#none" class="{$변수}">3</a></li>
    <li><a href="#none" class="{$변수}">4</a></li>
    <li><a href="#none" class="{$변수}">5</a></li>
  </ol>
  <a href="#none"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_next2.gif" alt="다음에" /></a>
  <a href="#none" class="last"><img src="//img.echosting.cafe24.com/skin/base/common/btn_page_last2.gif" alt="마지막 페이지" /></a>
</div>
```

## 주요 CSS (기본 스타일 참고)
```css
.ec-base-paginate { margin:30px 0; text-align:center; }
.ec-base-paginate li a { display:block; width:33px; padding:9px 0; color:#939393; background:#fff; }
.ec-base-paginate li a.this { border-bottom:3px solid #495164; color:#495164; }

/* typeSub */
.ec-base-paginate.typeSub ol { margin:0 15px; }
.ec-base-paginate.typeSub li a { width:auto; margin:0 5px; background:none; }
.ec-base-paginate.typeSub li a.this { color:#008bcc; text-decoration:underline; border:0; }
```

## 주의사항
- 사용하지 않는 버튼(첫/마지막 페이지 등)은 해당 태그 제거
- 현재 페이지 링크에 `class="this"` 추가
- 보조형은 한 화면에 페이지네이트가 2번 이상 사용될 때 중요도 낮은 영역에 적용
