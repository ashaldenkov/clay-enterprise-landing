# Clay Enterprise landing page recreation

A responsive recreation of the [Clay Enterprise page](https://www.clay.com/enterprise), built with Next.js and Tailwind CSS.

**Live demo:** https://enterprise-landing-ten.vercel.app

## Why this project exists

It started as a **test assignment for 23BG**: rebuild the clay.com/enterprise page in Next.js and Tailwind CSS as close to the original as possible.

> **Disclaimer.** This is a non-commercial study project. It is not affiliated with or endorsed by Clay Labs. The Clay name, logo, copy, images and videos belong to Clay and are used here only to recreate the page. Search engines are asked not to index the demo.

## Try it

Open the [live demo](https://enterprise-landing-ten.vercel.app) and click around:

- **Resize the window or open it on a phone.** The page has its own layout for phones, tablets and desktops, with no horizontal scrolling.
- **Hover the top navigation or move through it with Tab.** Dropdowns open on both. On a phone, open the menu and expand its sections.
- **Switch the data tabs.** Their images are loaded in advance, so switching is instant.
- **Scroll through “Unique and complete data coverage”.** The text highlights and the visual on the right changes as you scroll.
- **Drag the testimonials and resources carousels.**

## Quality

- **Responsive.** Checked at 390, 820, 1024 and 1440 px wide.
- **Fast.** Lighthouse 13 Performance is 97 on mobile and 100 on desktop, with LCP 2.5 s on a simulated slow 4G connection and no layout shift. Videos and below-the-fold images load lazily.
- **Accessible.** Semantic HTML, keyboard navigation and ARIA roles on tabs and menus. Lighthouse Accessibility is 97.
- **Reliable.** ESLint and Prettier pass, the console is free of errors, and `npm audit` reports no vulnerabilities.

## Stack

- **Next.js 16** (App Router, Turbopack) and **React 19**
- **Tailwind CSS 4** with CSS-first configuration in `globals.css`
- **Swiper 14** for the carousels and **clsx** for conditional classes
- **Figtree** from Google Fonts via `next/font`
- **ESLint 9** (`eslint-config-next`) and **Prettier** with the Tailwind plugin

## Project structure

```
src/
├── app/              layout, page, global styles and theme tokens, favicon
├── components/
│   ├── layout/       header (desktop dropdowns, mobile menu) and footer
│   ├── sections/     one file per page section, content kept next to its markup
│   └── ui/           shared building blocks: links, icons, carousel, lazy video
└── hooks/            useScrollLock
public/
├── images/           self-hosted Clay images, grouped by section
└── videos/           compressed product videos
```

## Getting started

Requires Node.js 20.9 or newer; `.nvmrc` pins Node 24.

```bash
npm install
npm run dev
```

| Script                 | What it does                     |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Build for production             |
| `npm start`            | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format the code with Prettier    |
| `npm run format:check` | Check formatting without writing |
