# Sanath — Portfolio

Modern, responsive portfolio built with **React + TypeScript + Vite + Tailwind + Framer Motion**.

## Quickstart

```bash
# 1) Install deps
npm i

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build && npm run preview
```

## Deploy

- **Vercel**: Import this repo, set **Build Command** `npm run build`, **Output Dir** `dist`.
- **Netlify**: Build `npm run build`, publish `dist`.
- **Static hosting**: `npm run build` and upload the `dist/` folder.

## Edit your info

- `src/data/site.ts`: name, contact, blurb
- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/education.ts`

Your resume is served from `/public/resume.pdf`.
