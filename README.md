# Harshin Kailas K — Personal Portfolio Website

A personal portfolio website modeled closely after the minimalist, high-craft design language of [prathm.me](https://prathm.me/). Built for **Harshin Kailas K** to showcase the unique intersection of **MBA Business Operations & HR Coordination** with **BCA Computer Applications & IT Support Grounding**.

---

## ⚡ Highlights & Features (Matching `prathm.me`)

1. **Exact 1:1 Aesthetic & Layout**:
   - Centered column (`max-w-[720px]`) framed by subtle vertical hairline borders (`md:-left-6`, `md:-right-6`).
   - Hairline screen-line dividers (`screen-line-top`, `screen-line-bottom`, `h-px bg-border`).
   - High-contrast minimalist theme palette (Zinc/Neutral tones).
2. **Interactive Dot Matrix Canvas**:
   - Dynamic canvas grid that responds with spring physics to mouse movement and ambient wave motion.
3. **Profile Avatar Switcher**:
   - Squircle avatar frame with an interactive toggle switch between stylized monogram and credential badge.
4. **Animated Role Ticker**:
   - Cycling animated role title under the name.
5. **Command Palette (`⌘K` / `Ctrl+K`)**:
   - Keyboard-driven modal for instant section navigation, quick actions, contact copying, sound toggling, and theme switching.
6. **Web Audio Tactile Clicks**:
   - Synthesized subtle audio feedback on button clicks (with sound toggle / mute switch in navbar).
7. **Signature "Areas of Focus" Orbital Diagram**:
   - 4-circle overlapping Venn graphic highlighting:
     - Business Operations
     - HR Coordination
     - IT & Tech Grounding
     - Data & Analytics
8. **Interactive CV / Resume Modal**:
   - Built-in formatted curriculum vitae view with one-click print/PDF support.
9. **Interactive Project Modals**:
   - In-depth modal views for AdBot (Dual-Engine rule + NLP chatbot) and the MBA Empirical Research Study.

---

## 🚀 Getting Started

### 1. Run Locally
Inside this folder:
```bash
# Install dependencies (already installed)
npm install

# Start local development server with hot-reload
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates a blazing fast, optimized static build in the `dist/` directory.

---

## 🌐 Free Deployment (Vercel / Netlify / GitHub Pages)

### Option A: Deploy to Vercel (Recommended — 2 minutes)
1. Push this folder to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel will automatically detect **Vite** and deploy instantly!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and import your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## ✏️ How to Customize Your Details

All your profile information, links, and content are centralized in one clean data file:
📂 `src/data/portfolioData.ts`

- **Update LinkedIn / GitHub links**: Edit `PERSONAL_INFO.links`.
- **Add your profile photo**: Place your image in `public/avatar.jpg` and update `src/components/HeaderProfile.tsx`.
- **Add more skills or projects**: Simply edit the `PROJECTS` or `SKILL_GROUPS` arrays in `src/data/portfolioData.ts`.
