# Sandesh Deshmukh — Portfolio

Personal portfolio for **Sandesh Deshmukh**, Frontend Engineer. Built with Next.js, featuring motion-driven sections, selected product case studies, and a downloadable resume.

**Live:** [sandeshdeshmukhportfolio.vercel.app](https://sandeshdeshmukhportfolio.vercel.app/)

## Featured Work

| Project | Focus |
| --- | --- |
| **QualiFlux** | AI sales & marketing automation SaaS — lead capture, qualification, CRM pipelines, analytics |
| **YieldVault** | Solana DeFi dashboard — wallet connect, portfolio tracking, yield positions, on-chain tx flows |

## Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Motion:** GSAP + ScrollTrigger, Motion
- **UI:** Lucide icons, custom glass / dark pink theme
- **Resume PDF:** html2canvas + html2pdf.js

## Project Structure

```
protfolio-new/
├── app/                  # App Router (home, resume, SEO)
├── page/                 # Page compositions
├── section/              # Home sections (Hero, QualiFlux, YieldVault, About, …)
├── components/           # Shared UI (nav, footer, container)
├── config/               # Site + resume config
├── public/project/       # Project preview images
└── lib/                  # Utilities
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Key Pages

- `/` — Portfolio home (hero, value statement, featured systems, about, expertise)
- `/resume` — Interactive resume with PDF export

## Config

- Site metadata & social links → `config/site.config.tsx`
- Resume content → `config/resume.Config.tsx`

## Deploy

Deployed on [Vercel](https://vercel.com). Push to the connected branch or run:

```bash
npm run build
```
