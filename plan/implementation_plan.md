# Hermes Book: The Solo Entrepreneur's Agent OS Implementation Plan

This plan outlines the steps to build a premium "Web Book" that serves as a practical 101 guide for solo entrepreneurs. Instead of a simple documentation site, this project will simulate running a company using the Hermes Agent system, providing a step-by-step "Playbook" for daily business operations. The final product will be a Next.js-based static site with a "Bento Grid" dashboard and an elite-level responsive reader interface.

## User Review Required

> [!IMPORTANT]
> **Practical Narrative Shift**: We are not just migrating files from `res/`. We will synthesize the existing content into a practical "Day in the Life of a Solo Founder" simulation, where agents are deployed to handle specific business tasks (research, marketing, operations).

## Proposed Changes

### 1. Project Initialization & Foundation

*   **Setup Next.js**: Initialize a Next.js project in the root directory.
*   **Design Tokens**: Create `tailwind.config.js` with the `Deep Space Black` (#0A0A0B) and `Cyber Blue` (#007AFF) palette.
*   **Global Styles**: Configure `index.css` with Inter/SF Pro typography and smooth scrolling.
*   **CI/CD**: Create `.github/workflows/deploy.yml` for automatic GitHub Pages deployment.

### 2. Content Engineering: The "Agent OS" Playbook

*   **Synthesis Strategy**: Use `res/wikidocs-book-19686/pages/*.md` as raw knowledge.
*   **Step-by-Step 101**: Structure the book as a chronological journey:
    *   **Setup**: Building the foundation of your AI team.
    *   **Daily Briefing**: Automating morning intelligence reports.
    *   **Growth/Marketing**: Deploying agents for SEO, content creation, and lead gen.
    *   **Operations**: Managing documentation, memory, and task delegation.
*   **Interactive Simulations**: Use MDX to include "Interactive Playbooks" or "Prompt Templates" that users can copy and adapt.

### 3. UI/UX: The Bento Dashboard (Landing Page)

*   **Bento Grid**: Implement a responsive Bento Grid layout on the home page.
    *   Large cards for main sections (01, 02, 03...).
    *   Medium/Small cards for statistics (e.g., "110 Pages", "Latest Update").
*   **Framer Motion**: Add "Living Grid" animations where cards subtly react to hover.

### 4. UI/UX: High-Performance Responsive Reader

*   **Adaptive Layout**: 
    *   **PC**: Two-column layout with sticky TOC and wide reading area.
    *   **Tablet**: Condensed sidebar that collapses into a menu.
    *   **Mobile**: Bottom-sheet navigation for TOC and optimized font sizes for vertical reading.
*   **Glassmorphism & Depth**: Use backdrop filters for navigation bars to maintain context while scrolling.
*   **Execution Visuals**: Styling that mimics a terminal or dashboard when describing agent actions.

### 5. Online Preparation (To-Do List Integration)

*   **Config System**: Create `config.yaml` to manage book metadata (title, author, SEO).
*   **Environment Setup**: Install all dependencies (`framer-motion`, `lucide-react`, `clsx`, etc.) before offline mode.
*   **Task Breakdown**: Finalize the 30-minute atomic task list in `plan/tasks.md`.

## Verification Plan

### Automated Tests
*   `npm run build`: Ensure SSG (Static Site Generation) works correctly for all 110+ pages.
*   Lighthouse audit: Target 90+ for Performance and Accessibility.

### Manual Verification
*   Verify Bento Grid responsiveness on mobile.
*   Check "Glassmorphism" effect and blurred navigation bars.
*   Confirm smooth transitions between the dashboard and reader view.
