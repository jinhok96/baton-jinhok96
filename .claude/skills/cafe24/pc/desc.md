# Description List — PC

출처: https://developers.cafe24.com/design/front/component/pc/desc

## 클래스
- 기본: `ec-base-desc` (`dl` 또는 `ul`에 적용)
- 타입 수정자:
  - `typeBullet` — 블릿형 (제목 오른쪽에 블릿 추가)
  - `typeDot` — 도트형 (제목 오른쪽에 도트 추가)
- 그리드 수정자 (제목:내용 비율):
  - `gSmall` — 3:7
  - `gMedium` — 4:6
  - `gLarge` — 5:5
- 정렬 수정자 (`dl`에 추가):
  - `center`, `right` — dt/dd 전체 정렬
  - `centerDT`, `rightDT` — dt만 정렬
  - `centerDD`, `rightDD` — dd만 정렬
  - `center`, `right` — 개별 dt/dd에 직접 추가 가능

## 예제

```html
<!-- 기본형 (dl) -->
<dl class="ec-base-desc">
  <dt>제목</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
  <dt>제목이 길어지면, 자동 줄 바꿈</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
</dl>

<!-- 블릿형 -->
<dl class="ec-base-desc typeBullet">
  <dt>제목(1)</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
  <dt>제목(2)</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
</dl>

<!-- 도트형 -->
<dl class="ec-base-desc typeDot">
  <dt>제목(1)</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
</dl>

<!-- 목록형 (ul) -->
<ul class="ec-base-desc">
  <li><strong class="term">제목(1)</strong><span class="desc">내용이 들어오는 영역입니다.</span></li>
  <li><strong class="term">제목(2)</strong><span class="desc">내용이 들어오는 영역입니다.</span></li>
</ul>

<!-- 크기 그리드 -->
<!-- gSmall (3:7) -->
<dl class="ec-base-desc gSmall">
  <dt>제목</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
</dl>

<!-- gMedium (4:6) -->
<dl class="ec-base-desc gMedium">
  <dt>제목</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
</dl>

<!-- gLarge (5:5) -->
<dl class="ec-base-desc gLarge">
  <dt>제목</dt>
  <dd>내용이 들어오는 영역입니다.</dd>
</dl>

<!-- 전체 정렬 -->
<dl class="ec-base-desc center">
  <dt>center</dt>
  <dd>center</dd>
</dl>

<dl class="ec-base-desc centerDT">
  <dt>dt만 가운데 정렬</dt>
  <dd>내용</dd>
</dl>

<dl class="ec-base-desc centerDD">
  <dt>제목</dt>
  <dd>dd만 가운데 정렬</dd>
</dl>

<!-- 부분 정렬 -->
<dl class="ec-base-desc">
  <dt class="right">right</dt>
  <dd class="center">center</dd>
</dl>
```

## 주의사항
- 기본형은 `dl > dt + dd` 구조 사용
- 목록형은 `ul > li > strong.term + span.desc` 구조 사용
- 그리드 수정자(`gSmall/gMedium/gLarge`)는 부모 너비에 따라 비율로 동작
