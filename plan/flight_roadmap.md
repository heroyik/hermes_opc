# ✈️ Flight Mode Roadmap: Hermes Agent OS 101

This document is your tactical guide for the flight. Each task is designed to be completed in 30-45 minutes without internet access.

## 📝 Writing Outline (The Playbook)

### Chapter 02: Setting up the Main Desk
- **Goal**: Move from CLI to a real interface.
- **Key Concepts**: Slack/Discord Webhooks, Gateway configuration.
- **Simulation**: "First message from your agent."

### Chapter 03: The Solo Founder's HQ
- **Goal**: Channel architecture.
- **Sections**: `#hq-ops`, `#hq-research`, `#hq-sales`.
- **Logic**: How to route different agent outputs to different channels.

### Chapter 04: Building the Memory Bank
- **Goal**: Long-term RAG setup.
- **Sections**: Document ingestion, context pruning.
- **Simulation**: Agent remembers a previous brand guideline.

### Chapter 05: Teaching New Skills
- **Goal**: Custom tool development.
- **Sections**: Skill structure, Error handling.
- **Practical**: Creating a "Competitor Monitor" skill.

---

## 🛠 Atomic Task Breakdown (30m Blocks)

### Block 1: UI Refinements
- [ ] Implement the mobile navigation bottom-sheet.
- [ ] Add smooth transitions between chapters using Framer Motion.
- [ ] Fix the "Back to Home" button styling on the reader page.

### Block 2: MDX Component Engineering
- [ ] Build a `<Terminal />` component for MDX.
- [ ] Build a `<SimulationCard />` for interactive story blocks.
- [ ] Build a `<Callout />` component for "CEO Tips".

### Block 3: Content Transformation (Batch 1)
- [ ] Transform `res/` docs into Chapter 03 (The HQ).
- [ ] Transform `res/` docs into Chapter 04 (Memory).

### Block 4: Content Transformation (Batch 2)
- [ ] Transform `res/` docs into Chapter 05 (Skills).
- [ ] Transform `res/` docs into Chapter 06 (Automation).

---

## 💡 Quick Reference (No Internet)
- **Local Dev**: `npm run dev`
- **Build Test**: `npm run build`
- **MDX Directory**: `src/content/`
- **Static Assets**: `public/`
