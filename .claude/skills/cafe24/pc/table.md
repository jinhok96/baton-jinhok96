# Table — PC

출처: https://developers.cafe24.com/design/front/component/pc/table

## 클래스
- 기본: `ec-base-table`
- 타입 수정자:
  - `typeWrite` — 입력형 (폼 태그 포함 시)
  - `typeList` — 목록형 (제목 상단, 세로형)
  - `typeClear` — 테두리/배경색 없음
- 그리드 수정자:
  - `gBorder` — 셀 전체 테두리
  - `gLine` — 라인형 (테두리 없는 목록형)
  - `gLayoutFixed` — 셀 고정형 (`table-layout: fixed`)
- 정렬 (`tbody` 또는 `td`/`th`에 추가):
  - `left`, `center`, `right` — 수평 정렬
  - `top`, `middle` — 수직 정렬
- 기타:
  - `thead.blind` — 제목 미노출 (스크린리더용 유지)
  - `tbody.head` — 스크롤형 헤더 역할
  - `.scroll` — 스크롤 영역 래퍼
  - `.clear` — 셀 병합 시 여백/테두리 초기화
  - `.message` — 내역 없음 메시지

## 예제

```html
<!-- 기본형 (가로형, 보기) -->
<div class="ec-base-table">
  <table border="1" summary="">
    <caption>제목</caption>
    <colgroup>
      <col style="width:20%;" />
      <col style="width:30%;" />
      <col style="width:20%;" />
      <col style="width:30%;" />
    </colgroup>
    <tbody>
      <tr>
        <th scope="row">제목</th>
        <td>내용</td>
        <th scope="row">제목<img src="//img.echosting.cafe24.com/skin/base_ko_KR/member/ico_required.gif" alt="필수" /></th>
        <td>내용</td>
      </tr>
      <tr>
        <td colspan="4">colspan="4" (셀 병합)</td>
      </tr>
      <tr>
        <td colspan="4" class="clear">clear 클래스 - 셀 병합 시 여백/테두리 기본값 변경</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 입력형 -->
<div class="ec-base-table typeWrite">
  <table summary="" border="1">
    <caption>제목</caption>
    <colgroup>
      <col style="width:20%;" />
      <col style="width:auto;" />
    </colgroup>
    <tbody>
      <tr>
        <th scope="row">ID <img src="//img.echosting.cafe24.com/skin/base_ko_KR/member/ico_required.gif" alt="필수" /></th>
        <td><input type="text" /> 영문 소문자/숫자, 4~16자</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 목록형 (세로형) -->
<div class="ec-base-table typeList">
  <table border="1" summary="">
    <caption>테이블명</caption>
    <colgroup>
      <col style="width:70px;" />
      <col style="width:145px;" />
      <col style="width:auto;" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col">제목</th>
        <th scope="col">제목</th>
        <th scope="col">제목</th>
      </tr>
    </thead>
    <tbody class="center">
      <tr>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 스크롤형 -->
<div class="ec-base-table typeList">
  <table border="1" summary="">
    <caption>테이블 제목</caption>
    <colgroup>
      <col style="width:100px;" />
      <col style="width:auto;" />
      <col style="width:128px;" />
    </colgroup>
    <tbody class="head">
      <tr>
        <td scope="col">이미지</td>
        <td scope="col">제품 정보</td>
        <td scope="col">판매 가격</td>
      </tr>
    </tbody>
  </table>
  <div class="scroll">
    <table border="1" summary="">
      <caption>테이블 제목</caption>
      <colgroup>
        <col style="width:100px;" />
        <col style="width:auto;" />
        <col style="width:111px;" />
      </colgroup>
      <tbody class="center">
        <tr>
          <td><a href="#none"><img src="" alt="" /></a></td>
          <td class="left"><p><a href="#none">추가 구성 상품</a></p></td>
          <td><strong>20,000원</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- 제목 미노출형 -->
<div class="ec-base-table typeList">
  <table border="1" summary="">
    <caption>테이블명</caption>
    <thead class="blind">
      <tr>
        <th scope="col">제목</th>
        <th scope="col">작성일</th>
      </tr>
    </thead>
    <tbody class="center">
      <tr>
        <td class="left"><a href="#none">제목</a></td>
        <td>2015-05-04</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 라인형 -->
<div class="ec-base-table typeList gLine">
  <table border="1" summary="">
    <caption>테이블명</caption>
    <thead class="blind">
      <tr>
        <th scope="col">제목</th>
        <th scope="col">작성일</th>
      </tr>
    </thead>
    <tbody class="center">
      <tr>
        <td class="left"><a href="#none">제목</a></td>
        <td>2015-05-04</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- typeClear형 -->
<div class="ec-base-table typeClear">
  <table summary="" border="1">
    <caption>테이블명</caption>
    <tbody>
      <tr>
        <th scope="row">상품명</th>
        <td>샘플9</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 내역 없음 -->
<div class="ec-base-table typeList">
  <table border="1" summary="">
    <caption>테이블명</caption>
    <thead>
      <tr>
        <th scope="col">상품 정보</th>
        <th scope="col">판매가격</th>
      </tr>
    </thead>
    <tbody class="center displaynone">
      <tr>
        <td>내용</td>
        <td>내용</td>
      </tr>
    </tbody>
  </table>
  <p class="message">주문 내역이 없습니다.</p>
</div>
```

## 주의사항
- 폼 태그 포함 시 반드시 `typeWrite` 추가
- 스크롤형은 헤더 table의 `tbody`에 `head` 클래스, 내용 영역을 `.scroll`로 감쌈
- `thead.blind`는 접근성을 위해 제목을 화면에서 숨기되 HTML 구조 유지
- `gLayoutFixed` 사용 시 `colgroup`의 `col` 너비값이 실제로 고정됨
