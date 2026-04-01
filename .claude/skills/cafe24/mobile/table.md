# Table — Mobile

출처: https://developers.cafe24.com/design/front/component/mobile/table

## 클래스

### 기본 타입
- `ec-base-table` — 가로형 테이블 (제목 좌측, 입력폼 없는 경우)
- `ec-base-table typeWrite` — 입력형 테이블 (폼 태그 포함)
- `ec-base-table typeList` — 목록형 테이블 (세로형, 제목 상단)

### 그리드/여백 수정자
- `ec-base-table gCellNarrow` — 셀 상하 여백 좁게
- `ec-base-table gClearBorderTop` — 상단 테두리 제거 (상단 영역과 중첩 시)
- `ec-base-table gClearBorder` — 바깥 테두리 전체 제거
- `ec-base-table gClearCell` — 셀 라인 제거

### 셀 정렬 클래스 (td에 적용)
- `.left` / `.center` / `.right` — 수평 정렬
- `.top` / `.middle` — 수직 정렬
- `.clear` — 셀 병합(colspan) 시 여백/테두리 상쇄

### 기타
- `tbody.gLineTop` — tbody 상단 구분 라인 추가

## 예제

```html
<!-- 기본형 (가로형, 제목 좌측) -->
<div class="ec-base-table">
    <table border="1">
        <caption>테이블명</caption>
        <colgroup>
            <col style="width:86px" />
            <col style="width:auto" />
        </colgroup>
        <tbody>
            <tr>
                <th scope="row">제목</th>
                <td>가로형 기본 테이블</td>
            </tr>
            <tr>
                <td colspan="2" class="clear">셀 병합 시 여백/테두리 상쇄 (td.clear)</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- 입력형 (폼 태그 포함) -->
<div class="ec-base-table typeWrite">
    <table border="1">
        <caption>테이블명</caption>
        <colgroup>
            <col style="width:86px" />
            <col style="width:auto" />
        </colgroup>
        <tbody>
            <tr>
                <th scope="row">ID</th>
                <td><input type="text" style="width:100px;" /><button type="button" class="btnBasic">중복체크</button></td>
            </tr>
            <tr>
                <th scope="row">비밀번호</th>
                <td><input type="password" style="width:100%;" /></td>
            </tr>
        </tbody>
    </table>
</div>

<!-- 목록형 (세로형, 제목 상단) -->
<div class="ec-base-table typeList">
    <table border="1">
        <caption>테이블명</caption>
        <colgroup>
            <col style="width:60%" />
            <col style="width:40%" />
        </colgroup>
        <thead>
            <tr>
                <th scope="col">옵션</th>
                <th scope="col">재고 수량</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>블랙 / S</td>
                <td class="center">품절</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- 상단 라인 제거 (상단 영역 중첩 시) -->
<div class="titleArea"><h3>상단 영역</h3></div>
<div class="ec-base-table gClearBorderTop">
    <table border="1">
        <caption>테이블명</caption>
        <tbody>
            <tr>
                <th scope="row">제목</th>
                <td>내용</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- 셀 라인 제거 + gLineTop으로 섹션 구분 -->
<div class="ec-base-table gClearCell">
    <table border="1">
        <caption>테이블명</caption>
        <tbody>
            <tr>
                <th scope="row"><strong>판매 가격</strong></th>
                <td><strong>30,000원</strong></td>
            </tr>
        </tbody>
        <tbody class="gLineTop">
            <tr>
                <th scope="row">할인 금액</th>
                <td>1,000원</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- 폴드 + 테이블 조합 -->
<div class="ec-base-fold theme1 selected eToggle">
    <div class="title">
        <h2>ec-base-fold 영역</h2>
    </div>
    <div class="contents">
        <div class="ec-base-table">
            <table border="1">
                <caption>배송지 정보</caption>
                <colgroup>
                    <col style="width:100px" />
                    <col style="width:auto" />
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">받으시는 분</th>
                        <td>홍길동</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
```
