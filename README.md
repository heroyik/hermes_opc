# 🛸 Hermes Agent OS 101: The Solo Founder's Command Center

Yo, welcome to the future of agentic engineering. 🌌

**Hermes Agent OS 101** isn't just another dry tech manual. It’s a high-octane, interactive webbook designed for the solo entrepreneurs who want to build, scale, and automate their empire—all while staying completely off the grid. We’re talking **Deep Space Black** aesthetics, **Cyber Blue** accents, and zero-latency performance.

This project is the visual and interactive evolution of the legendary [WikiDocs: Building AI Agents](https://wikidocs.net/book/19686). If that was the blueprint, this is the fully functional cockpit.

---

## ⚡ Why This Exists?

Building agents is messy. Most people get lost in the "Prompting" loop. We’re here to help you move to **"Orchestrating."** 
- **Offline First**: Optimized for local LLMs (Ollama) so you can build on a plane, in a bunker, or in the middle of nowhere.
- **Visual Excellence**: Glassmorphism UI that actually feels premium. No boring white backgrounds here.
- **Live Simulations**: See how agents think in real-time with our built-in `<SimulationCard />` and `<Terminal />` components.

---

## 🛠 The Tech Stack (The Heavy Metal)

We didn't come to play. We built this with the sharpest tools in the shed:

### ⚛️ Frontend
- **Next.js 16 (App Router)**: The bleeding edge of React. Static Site Generation (SSG) for that instant-load feeling.
- **MDX Pipeline**: We use `next-mdx-remote/rsc` to inject live React components directly into our markdown.
- **Tailwind CSS 4**: Next-gen styling engine for that crispy, high-contrast look.
- **Framer Motion**: Butter-smooth animations and transitions.

### 🧠 Intelligence & Backend
- **Ollama (Gemma 2 / Nous Hermes)**: The brain of the operation. Running locally, keeping your data *your* data.
- **Python 3.12 + LangChain**: The simulation engine that powers our agent logic and workflow processing.
- **Isolated `.venv`**: Keeping our AI environment clean and separated from the rest of the system.

---

## 🚀 Speedrun: Get It Running

Ready to launch? Follow these steps:

```bash
# 1. Grab the code
git clone https://github.com/heroyik/hermes_book.git
cd hermes_book

# 2. Fuel up the dependencies
npm install

# 3. Boot the engine
npm run dev
```

Open [localhost:3000](http://localhost:3000) and witness the glory.

---

## 📂 Inside the Cockpit

- `src/content/`: Where the magic happens. All chapters are high-performance MDX files.
- `src/components/`: Interactive UI elements like the Terminal and SimulationCard.
- `config.yaml`: The master switch. Control the book’s structure, titles, and navigation in one place.
- `res/`: Our local knowledge base, including the original source material.

---

## 🛰 Origin Story

This project stands on the shoulders of giants. We've taken the deep technical insights from the [WikiDocs AI Agent Guide](https://wikidocs.net/book/19686) and wrapped them in a modern, agent-driven OS experience. Respect to the original authors for laying the foundation.

---

## 🛠 Support & Contribution

Got a bug? Want to add a new simulation? Drop an issue or a PR. We’re building this for the solo founders of tomorrow.

*Built with 🦾 by the Hermes Agent Community.*
