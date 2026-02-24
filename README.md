# Todos 애플리케이션

간단하고 직관적인 할 일 관리 앱입니다. Next.js 16과 React 19를 기반으로 제작되었습니다.

## 기술 스택

- **프레임워크**: Next.js 16.1.6 (App Router)
- **언어**: TypeScript 5.7.3
- **UI 라이브러리**: React 19.2.4
- **스타일링**: Tailwind CSS 4.2.0
- **UI 컴포넌트**: shadcn/ui (Radix UI 기반)
- **아이콘**: Lucide React
- **폼 관리**: React Hook Form + Zod
- **상태 관리**: LocalStorage 기반 커스텀 훅

## 프로젝트 구조

```
todos/
├── app/                    # Next.js App Router
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/             # React 컴포넌트
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── add-todo-form.tsx   # 할 일 추가 폼
│   ├── theme-provider.tsx  # 테마 프로바이더
│   ├── todo-item.tsx       # 할 일 아이템
│   └── todo-list.tsx       # 할 일 목록
├── hooks/                  # 커스텀 훅
│   ├── use-mobile.ts       # 모바일 감지
│   ├── use-toast.ts        # 토스트 알림
│   └── use-todos.ts        # 할 일 CRUD 로직
├── lib/                    # 유틸리티
│   └── utils.ts            # 공통 유틸 함수
├── public/                 # 정적 파일
└── styles/                 # 추가 스타일
    └── globals.css
```

## 주요 기능

- 할 일 추가/삭제/완료 토글
- 활성/완료 할 일 분리 표시
- LocalStorage 기반 데이터 영속성
- 다크/라이트 테마 지원
- 반응형 디자인

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

### 프로덕션 빌드

```bash
pnpm build
pnpm start
```

## 설정 파일

- `components.json`: shadcn/ui 설정 (new-york 스타일, RSC 지원)
- `tsconfig.json`: TypeScript 설정
- `next.config.mjs`: Next.js 설정
- `postcss.config.mjs`: PostCSS 설정 (Tailwind CSS)
