# 🏗️ Hermes Book Architecture & Tech Stack

이 문서는 **Hermes Agent OS 101** 웹북 프로젝트의 기술 아키텍처와 상세 스택을 정의합니다. 오프라인 개발 및 로컬 LLM 환경에 최적화되어 있습니다.

---

## 1. Core Frameworks (The Skeleton)

### ⚛️ Frontend: Next.js 16 (App Router)
- **Static Site Generation (SSG)**: `output: 'export'` 설정을 통해 모든 페이지를 정적 HTML로 빌드. 서버 없이 GitHub Pages에서 완벽하게 구동됩니다.
- **TypeScript**: 엄격한 타입 체크를 통해 대규모 콘텐츠 구조의 안정성을 보장합니다.
- **MDX Pipeline**: `next-mdx-remote/rsc`를 사용하여 마크다운 문서 내에 React 컴포넌트를 직접 삽입, 인터랙티브한 학습 경험을 제공합니다.

### 🎨 Styling: Tailwind CSS 4 & Vanilla CSS
- **Tailwind CSS 4**: 최신 JIT 엔진을 사용해 빌드 속도를 극대화하고, 디자인 토큰 기반의 시스템을 구축했습니다.
- **Glassmorphism**: Backdrop blur 및 그레이디언트 레이어를 활용한 프리미엄 UI 디자인 시스템.
- **Framer Motion**: 페이지 전환 및 요소 등장 시 부드러운 애니메이션을 처리합니다.

---

## 2. Intelligence Layer (The Brain)

### 🤖 Local LLM: Ollama (Gemma 2 / Nous Hermes)
- **Offline Intelligence**: 인터넷 연결 없이 로컬에서 모델을 가동합니다.
- **Context Management**: 프로젝트 내 `.ai-context.md`와 `plan/handover_report.md`를 통해 LLM이 프로젝트의 맥락을 완벽히 이해하도록 설계되었습니다.

### 🐍 Python Environment (.venv)
- **Isolated Env**: 모든 Python 작업은 로컬 가상 환경(`.venv`)에서 수행됩니다.
- **Key Libraries**:
  - `PyYAML`: `config.yaml` 등 설정 파일 처리.
  - `LangChain`: 에이전트 워크플로우 시뮬레이션 및 데이터 처리.
  - `OpenAI SDK`: Ollama의 OpenAI 호환 API 서버와 연동.
  - `Pandas`: 대용량 문서 및 데이터셋 정제.

---

## 3. Content & Data (The Fuel)

### 📄 Content Engineering
- **MDX Chapters**: `src/content/` 폴더 내에 챕터별 독립적인 MDX 파일로 관리.
- **YAML Configuration**: `config.yaml`을 마스터 파일로 사용하여 책의 제목, 순서, 네비게이션 구조를 동적으로 관리합니다.

### 📂 Knowledge Base
- **Res/ Folders**: WikiDocs 원본 데이터 및 공식 레퍼런스 문서를 로컬에 캐싱하여 오프라인 리서치 환경을 구축했습니다.

---

## 4. DevOps & Deployment (The Pipeline)

### 🚀 CI/CD: GitHub Actions
- **Auto-Deploy**: `main` 브랜치에 push 시 자동으로 `next build`를 수행하고 GitHub Pages로 배포합니다.
- **Security**: API Key나 민감 정보가 포함되지 않도록 `.gitignore`가 철저히 관리되며, 필요한 Secret은 GitHub Repository Secrets를 사용합니다.

---

## 🛠️ Summary of Versions
- **Node.js**: v20+
- **Next.js**: 16.x
- **Tailwind CSS**: 4.x
- **Python**: 3.x
- **Local LLM**: Ollama v0.x (Gemma 2 9b / 27b recommended)
