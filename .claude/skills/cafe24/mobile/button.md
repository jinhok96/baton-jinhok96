# Button — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/button

## 클래스

### 버튼 타입
- `.btnStrong` — 강조 버튼 (주요 액션)
- `.btnNormal` — 일반 버튼
- `.btnBasic` — 기본 버튼
- `.btnSubmit` — 제출 버튼
- `.btnEm` — 강조 서브 버튼
- `.mini` — 미니 사이즈 (버튼 클래스에 추가)

### 컨테이너
- `ec-base-button` — 버튼 그룹 컨테이너 (기본: 우측 정렬)
- `ec-base-button gFull` — 버튼 너비 100% (단독 또는 그룹)
- `ec-base-button gColumn` — 버튼 좌측 나열 (버튼+버튼)
- `ec-base-button gCenter` — 버튼 가운데 정렬
- `ec-base-button gLeft` — 버튼 좌측 정렬
- `ec-base-button typeMulti` — 다단형 버튼
- `ec-base-button gFixed` — 화면 하단 고정형

### 정렬 유틸리티 (컨테이너 내부)
- `.gLeft` — 좌측으로 분리 (양쪽 정렬에 활용)
- `.gFlex2` / `.gFlex3` / `.gFlex4` — flex 비율로 너비 확장

## 예제

```html
<!-- 버튼 타입 -->
<a href="#none" class="btnStrong">btnStrong</a>
<a href="#none" class="btnNormal">btnNormal</a>
<a href="#none" class="btnBasic">btnBasic</a>

<!-- 미니 사이즈 -->
<a href="#none" class="btnStrong mini">버튼</a>
<a href="#none" class="btnNormal mini">버튼</a>
<a href="#none" class="btnBasic mini">버튼</a>

<!-- 100% 너비 단독형 -->
<a href="#none" class="btnSubmit gFull">로그인</a>

<!-- 100% 너비 그룹형 -->
<div class="ec-base-button gFull">
    <a href="#none" class="btnSubmit">로그인</a>
    <a href="#none" class="btnEm">비회원 주문조회</a>
</div>

<!-- 버튼+버튼 (gColumn, 좌측 나열) -->
<div class="ec-base-button gColumn">
    <a href="#none" class="btnStrong">버튼</a>
    <a href="#none" class="btnNormal">버튼</a>
</div>

<!-- gFlex로 비율 조정 -->
<div class="ec-base-button gColumn">
    <a href="#none" class="btnStrong gFlex3">버튼의 텍스트가 긴 경우</a>
    <a href="#none" class="btnNormal">짧은 텍스트</a>
    <a href="#none" class="btnStrong">긴 텍스트</a>
</div>

<!-- 우측 정렬 (기본) -->
<div class="ec-base-button">
    <a href="#none" class="btnStrong">버튼</a>
    <a href="#none" class="btnNormal">버튼</a>
</div>

<!-- 가운데 정렬 -->
<div class="ec-base-button gCenter">
    <a href="#none" class="btnStrong">버튼</a>
    <a href="#none" class="btnStrong">버튼</a>
</div>

<!-- 양쪽 정렬 -->
<div class="ec-base-button">
    <div class="gLeft">
        <a href="#none" class="btnStrong">버튼</a>
    </div>
    <a href="#none" class="btnNormal">버튼</a>
    <a href="#none" class="btnStrong">버튼</a>
</div>

<!-- 텍스트 + 버튼 -->
<div class="ec-base-button">
    <span class="gLeft">배송완료</span>
    <a href="#none" class="btnStrong">버튼</a>
</div>

<!-- 다단형 버튼 -->
<div class="ec-base-button typeMulti">
    <div class="gTop">
        <div class="gLeft">
            <a href="#none" class="btnNormal">버튼</a>
        </div>
        <a href="#none" class="btnStrong">버튼</a>
        <a href="#none" class="btnNormal">버튼</a>
    </div>
    <div class="gBottom">
        <a href="#none" class="btnStrong">다단형 버튼</a>
    </div>
</div>

<!-- 하단 고정형 -->
<div class="ec-base-button gFixed">
    <div class="ec-base-button gColumn">
        <a href="#none" class="btnSubmit">버튼</a>
        <a href="#none" class="btnEm">버튼</a>
    </div>
</div>
```
