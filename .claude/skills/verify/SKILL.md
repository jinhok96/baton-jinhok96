---
name: verify
description: Cafe24 스킨 코드 검증 절차. SFTP 배포 전 정적 검사 + 배포 후 WebFetch/크롬 MCP 확인.
---

## 배포 전 정적 검사

아래 항목을 Read/Grep 도구로 확인한다.

**템플릿 디렉티브**:
- `<!--@layout-->` 선언이 페이지 최상단에 존재하는지
- `<!--@css-->` / `<!--@js-->` 에 명시된 경로의 파일이 실제로 존재하는지
- `<!--@import-->` 파셜 경로가 실제 파일과 일치하는지

**변수 문법**:
- `{$variable}` 닫힘 여부 (`{$` 열렸는데 `}` 없는 경우)
- 존재하지 않는 변수명 참조 여부

**플랫폼 동기화**:
- `base/` 수정 내용이 `web/` / `mobile/` 에도 반영이 필요한지 확인

---

## 배포 후 검증

SFTP 업로드 완료 후 실제 배포 URL로 확인한다. 

- 배포 URL: https://jinhok96.cafe24.com/skin-{skinName} ← @.vscode/sftp.json 에서 `remotePath`(/{skinName}/) 참조, ex: `"remotePath": "/skin4/"` → https://jinhok96.cafe24.com/skin-skin4
- 변경사항 저장 후 페이지 새로고침 시 반영됨

**크롬 MCP 활용** — 렌더링 기반 확인 (JavaScript 실행 결과 포함):
- 페이지 실제 렌더링 결과 및 레이아웃 확인
- 콘솔 에러 감지
- Computed CSS (실제 적용된 스타일) 검사
- 동적 컴포넌트(슬라이더, 카테고리 메뉴 등) 동작 확인

---

## 성공 기준

- 정적 검사: 디렉티브 누락, 경로 불일치, 문법 오류 없음
- 배포 후: 변경사항이 배포 URL에서 의도대로 반영됨
