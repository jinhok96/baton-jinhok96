# Paginate — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/paginate

## 클래스

- `ec-base-paginate typeList` — 기본 목록형 페이지네이션 (이전/번호/다음)
- `ec-base-paginate typeMoreview` — 더보기형 (현재/전체 페이지 표시)
- `ec-base-paginate paginate typeSwipe` — 스와이프형 (변수 처리, 수정 불가)
- `ec-base-paginate paginate typeTotal` — 토탈형 (변수 처리, 수정 불가)

### 내부 요소
- `.btnPrev` — 이전 페이지 버튼
- `.btnNext` — 다음 페이지 버튼
- `.btnMore` — 더보기 버튼
- `.icoMore` — 더보기 아이콘
- `.circle` — 스와이프형 인디케이터 버튼
- `.circle.selected` — 현재 선택된 인디케이터
- `.prev` / `.next` — 스와이프형 이전/다음 버튼
- `.icoPrev` / `.icoNext` — 토탈형 이전/다음 아이콘

## 주의사항
- 스와이프형, 토탈형은 변수로 코드 처리 — 사용은 가능하나 직접 수정 불가

## 예제

```html
<!-- 기본 목록형 -->
<div class="ec-base-paginate typeList">
    <a href="{$변수}" class="btnPrev">이전 페이지</a>
    <ol>
        <li><a href="{$변수}" class="{$변수}">{$n}</a></li>
        <li><a href="{$변수}" class="{$변수}">{$n}</a></li>
        <li><a href="{$변수}" class="{$변수}">{$n}</a></li>
    </ol>
    <a href="{$변수}" class="btnNext">다음 페이지</a>
</div>

<!-- 더보기형 -->
<div class="ec-base-paginate typeMoreview">
    <a href="#none" class="btnMore">
        더보기(<span id="more_current_page_{$변수}">{$변수}</span>/<span id="more_total_page_{$변수}">{$변수}</span>)
        <span class="icoMore"></span>
    </a>
</div>

<!-- 스와이프형 -->
<div class="ec-base-paginate paginate typeSwipe">
    <button type="button" class="prev">
        <span>이전 리스트</span>
    </button>
    <span>
        <button type="button" class="circle selected">
            <span>1번째 리스트</span>
        </button>
        <button type="button" class="circle">
            <span>2번째 리스트</span>
        </button>
        <button type="button" class="circle">
            <span>3번째 리스트</span>
        </button>
    </span>
    <button type="button" class="next"><span>다음 리스트</span></button>
</div>

<!-- 토탈형 -->
<div class="ec-base-paginate paginate typeTotal">
    <p class="icoPrev"><a href="#none"><span>이전 리스트</span></a></p>
    <p><strong>1</strong> / 99,999</p>
    <p class="icoNext"><a href="#none"><span>다음 리스트</span></a></p>
</div>
```
