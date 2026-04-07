# Rayyan Khan — Portfolio

> Personal portfolio of **Rayyan Khan**, AI Engineer & Digital Craftsman. Specializing in Generative AI, Computer Vision, and full-stack engineering.

**Live:** [rayyan-dev.vercel.app](https://rayyan-dev.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + Tailwind CSS |
| Animation | Framer Motion |
| 3D / WebGL | React Three Fiber + Drei |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Page composition
│   └── globals.css       # Design tokens, global styles
└── components/
    ├── Hero.tsx           # Fullscreen landing section
    ├── Marquee.tsx        # Infinite scrolling ticker
    ├── Skills.tsx         # Tech skills grid
    ├── Experience.tsx     # Timeline of work experience
    ├── Projects.tsx       # Bento-grid project showcase
    ├── Footer.tsx         # Footer with links
    ├── BackgroundMusic.tsx# Ambient audio player
    ├── MagneticCursor.tsx # Custom magnetic cursor
    ├── SmoothScroll.tsx   # Lenis scroll wrapper
    └── ui/
        ├── creepy-button.tsx
        └── social-flip-button.tsx
```

---

## Featured Projects

| # | Project | Domain | Highlights |
|---|---|---|---|
| 01 | **Krishi.AI** | Agricultural Intelligence | International Winner — Startup Mahakumbh. IoT + ML crop monitoring platform. |
| 02 | **SmartLedger.AI** | Fintech Mobile | Native iOS/Android fintech app built with Flutter and Clean Architecture. |
| 03 | **Luna.AI** | Multimodal Assistant | LLM-powered voice + text assistant with RAG and response caching. |
| 04 | **PRISM Robot** | Humanoid Robotics | World Book of Records Gold Medal. CV-driven robot on NVIDIA Jetson Nano. |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Rayyankhan18/portfolio-website.git
cd portfolio-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

---

## Design System

All design tokens are defined in `src/app/globals.css`:

```css
--background:        #050505
--foreground:        #FAFAFA
--accent:            #6E56CF   /* Iris purple */
--subtext:           #A1A1AA
--border:            #27272A
--font-sans:         Inter
--font-mono:         JetBrains Mono
--font-serif:        Playfair Display
```

---

## Deployment

The site is continuously deployed via **Vercel** on every push to `main`.

```bash
git push origin main   # triggers automatic deployment
```

---

## License

This project is open source under the [MIT License](LICENSE).

---

<p align="center">Built by <a href="https://rayyan-dev.vercel.app">Rayyan Khan</a></p>
