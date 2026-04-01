---
name: pull-request
description: 현재 브랜치에서 PR 제목과 설명을 작성하는 절차. /pull-request로 호출.
---

현재 브랜치에서 PR의 제목과 설명을 작성해줘.

다음 순서로 진행해:

1. 베이스 브랜치 감지: `git log --simplify-by-decoration --pretty=format:'%D' HEAD | tr ',' '\n' | grep -oE 'origin/[^ ]+' | grep -v "$(git rev-parse --abbrev-ref HEAD)" | head -1` 실행 후 결과를 BASE_BRANCH로 사용. 결과가 없으면 `origin/main` 사용
2. `git log {BASE_BRANCH}..HEAD --oneline --no-merges` 로 커밋 목록 확인
3. `git diff {BASE_BRANCH}...HEAD --stat` 로 변경 파일 요약 확인
4. 커밋 목록을 접두어별로 분류 (@.claude/skills/commit/SKILL.md 의 커밋 메시지 형식 참조)
5. 아래 규칙에 따라 PR 제목과 설명 작성

**PR 제목 규칙:**

- 70자 이내
- 가장 비중이 큰 변경사항을 중심으로 작성
- 여러 유형이 섞여 있으면 `Release: ` 접두어 사용
- 단일 유형이면 해당 접두어 사용 (예: `Style: ...`, `Feature: ...`)
- 코드 블록으로 제공

**PR 설명 규칙:**

- 변경사항이 있는 섹션만 포함 (빈 섹션 제외)
- 각 항목은 커밋 메시지에서 접두어를 제거하고 간결하게 작성
- 마크다운 코드 블록으로 제공

**출력 형식 (반드시 이 형식 그대로):**

**PR 제목:**

```
[제목 내용]
```

**PR 설명:**

```
[설명 내용]
```
