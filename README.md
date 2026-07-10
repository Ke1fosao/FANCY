# FÁNCY

> A premium beauty-house website for Rivne, built as a polished Next.js experience with booking flow, service catalog, gallery, SEO, and production-ready deployment settings.

## Quick View

| Item | Value |
| --- | --- |
| Project | `FÁNCY` |
| Product | Beauty salon website |
| City | Rivne, Ukraine |
| Main developer | `Ke1fosao` |
| Designer | `Ke1fosao` |
| Contact email | `dima.kovtunovych@gmail.com` |
| Live site | `fancy_beauty` on Vercel, pending deployment |

## What This Site Includes

- homepage with hero, service highlights, gallery preview, FAQ, and contact strip
- full services catalog with searchable pricing structure
- booking flow with API route, validation, honeypot protection, and Telegram delivery hook
- dedicated pages for `About`, `Contacts`, `Gallery`, `Booking`, and `Privacy`
- SEO metadata, Open Graph, Twitter cards, sitemap, robots, manifest, and structured data
- responsive premium UI with dark/light theme support

## Stack

- Next.js 16
- React 19
- TypeScript
- Motion
- Lucide React
- Zod

## Project Layout

```text
src/
  app/          routes, metadata, API
  components/   reusable UI blocks
  data/         content and price lists
public/
  images/       local visual assets
  downloads/    PDF price list
docs/           credits and research notes
```

## Local Run

```bash
npm install
npm run dev
```

Open:

- http://127.0.0.1:3000

## Validate Before Deploy

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Set the environment variables if booking delivery is enabled.
4. Deploy.

### Node Version

This repository is pinned to Node `22.x` in `package.json` so Vercel does not auto-advance across future major Node releases.

## Main Author Block

- Developer and designer: `Ke1fosao`
- Email: `dima.kovtunovych@gmail.com`
- Repository: `Ke1fosao/FANCY`
- Live site: `fancy_beauty` on Vercel, pending first production deployment

## Content Editing

- site info, contact data, and links: `src/data/site.ts`
- services and pricing: `src/data/services.ts`
- gallery items: `src/data/gallery.ts`
- homepage layout: `src/app/page.tsx`
- global styling: `src/app/globals.css`

## Notes

- The current project is ready for Vercel deployment.
- If you add real social links or phone numbers for the author block, update this README section as well.
