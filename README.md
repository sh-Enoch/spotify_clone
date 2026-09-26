# Spotify Clone UI

A lightweight Spotify-inspired landing page built with Next.js and Tailwind CSS. The project focuses on a dark, polished music-dashboard aesthetic with rounded controls, icon-driven navigation, and a modern app-shell layout.

## Overview

This app recreates a Spotify-like interface for the home area, including:

- a dark top navigation bar
- left-side page controls
- search and action pills
- icon buttons for notifications and profile controls
- a clean, minimal visual system based on Tailwind utility classes

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react

## Features

- Dark-mode interface styling
- Rounded pill components and soft hover states
- Custom font setup using Next.js font optimization
- App Router structure with modular page and global styling files
- Minimal, product-focused front-end layout

## Project Structure

```bash
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── next-env.d.ts
├── README.md
└── .gitignore
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

To serve the production build locally:

```bash
npm run start
```

## Linting

```bash
npm run lint
```

## Key Files

- `app/page.tsx` — primary home screen UI
- `app/layout.tsx` — app shell and font loading
- `app/globals.css` — global styles and theme variables

## Notes

This project is a front-end mockup and design experiment rather than a full music streaming clone. It is intentionally focused on layout, styling, and visual polish while demonstrating how to build a modern UI in Next.js with Tailwind.

## License

This project is for personal learning and experimentation. Update this section if you plan to publish or distribute it.
