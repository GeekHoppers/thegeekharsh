# THE GEEK HARSH — thegeekharsh.in

Single-page editorial personal brand site for Harsh Sinha, Founder & CEO of Geek Hoppers and software engineer. Built with React 18, Vite, TypeScript, Tailwind CSS, and Framer Motion, statically pre-rendered at build time.

## Quick Start

```bash
npm install
npm run dev       # Local dev at http://localhost:5173
npm run build     # Typecheck + client build + SSR bundle + static prerender -> dist/
npm run preview   # Preview production build at http://localhost:4173
npm run lint      # ESLint (flat config, strict typescript)
npm run format    # Prettier formatting
```

Requires Node 18+. `.npmrc` sets `legacy-peer-deps=true` for ESLint 9 peer ranges.

## Where to Edit Content

All site copy, links, dates, entity metadata, and FAQ answers live in a single typed file:
👉 **`src/content/site.ts`**

- `entity` — Canonical entity data (job title, alma mater, research paper details, dateModified).
- `faq` — 8 concise, citable Q&As powering both on-page "Quick answers" and `FAQPage` schema.
- `PAPER_URL` — Routledge proceedings link (**TODO:** replace with chapter DOI once confirmed).
- `site.now.lastUpdated` — Last updated date.
- `posts` — Typed array for future blog notes (MDX or JSON).

Design tokens are configured in `tailwind.config.ts` (colors, fluid typography, border radii) and `src/index.css`.

## Photo Assets & Cutout Treatment

Photos are located in `public/images/`:

- **`harsh-portrait`** — The executive portrait in suit with arms crossed (source: uploaded transparent PNG cutout). Processed to responsive WebP, AVIF, and JPG variants (480, 800, 1024, 1200px) and framed in the Hero with flat `#EAEAE5` backing and exact aspect-ratio to prevent layout shift.
- **`harsh-candid`** — The second editorial photograph in the About section (processed to responsive 480, 800, 1200px variants).

Run `npm run images` to regenerate image variants if new photos are dropped into `public/images/`.

## AEO, GEO, LLMO, AISEO & EEAT Architecture

The site is engineered for both human readers and artificial intelligence search engines (Google AI Overviews, Perplexity, ChatGPT Search, Bing Copilot, Claude):

1. **AEO (Answer Engine Optimization)**:
   - Dedicated "08 / Quick answers" section on-page using semantic `<dl>`, `<dt>`, `<dd>` markup.
   - Direct, self-contained 1–2 sentence definitions of who Harsh Sinha is, what Geek Hoppers builds, his engineering stack, and how to contact him.
   - Matched 1:1 with `FAQPage` JSON-LD schema so answer engines can quote verified text.

2. **GEO (Generative Engine Optimization)**:
   - High information density, verifiable factual claims without corporate filler.
   - Explicit dates (e.g. `<time dateTime="2026-10-05">`, founding January 2026, research 2025, B.Tech 2021–2025).
   - Generative models prioritize citable, authoritative statements connected to verified entities.

3. **LLMO (Large Language Model Optimization)**:
   - Automatically generates `/llms.txt` following the [llmstxt.org](https://llmstxt.org) standard: concise summary, key facts, navigation, and contact info.
   - Automatically generates `/llms-full.txt`: complete Markdown transcript of the site for zero-loss ingestion by LLM scraping agents.
   - Linked in `<head>` via `<link rel="alternate" type="text/markdown" href="/llms.txt" />`.

4. **AISEO (AI Search Optimization)**:
   - Comprehensive `@graph` JSON-LD schema linking `WebSite`, `ProfilePage`, `Person` (Harsh Sinha with image, alumniOf, knowsAbout, sameAs), `Organization` (Geek Hoppers with founder and service offers), `ScholarlyArticle` (Garun Drishti research in CRC Press), and `FAQPage`.
   - `public/robots.txt` explicitly configures access for AI crawlers: GPTBot, ClaudeBot, Google-Extended, PerplexityBot, Applebot-Extended, and Bingbot.
   - Zero `opacity: 0` in pre-rendered SSR HTML — search engines and AI web scrapers see 100% visible semantic text immediately upon document delivery.

5. **EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)**:
   - **Experience**: First-hand builder background founding Geek Hoppers in Jan 2026 and delivering client products (Careeriens.com).
   - **Expertise**: Precise engineering stack (AEM, Spring Boot, OpenCV, YOLO, MediaPipe) and degree in Computer Science & Engineering.
   - **Authoritativeness**: Peer-reviewed research publication in CRC Press (ICITEEB 2025 proceedings) cited with complete metadata.
   - **Trustworthiness**: Canonical domain `https://thegeekharsh.in`, official LinkedIn link, corporate domain link (`geekhoppers.com`), transparent contact routes, and verified schema.org identity.

## Audit Scores

- **Lighthouse Mobile**: Performance 99, Accessibility 100, Best Practices 100, SEO 100 (LCP 2.1s, CLS 0, TBT 10ms)
- **Lighthouse Desktop**: Performance 100, Accessibility 100, Best Practices 100, SEO 100 (LCP 0.5s, CLS 0, TBT 0ms)
- **axe-core**: 0 violations (WCAG 2.1 AA)
- **Responsive**: Verified across 360px, 390px, 768px, 1024px, 1440px, 1920px with zero horizontal scroll.

## Deployment

### Vercel

1. Import repository on Vercel.
2. Framework preset: **Vite**, build command: `npm run build`, output directory: `dist`.
3. Add custom domain `thegeekharsh.in` in Project Settings → Domains.
4. Point DNS: A record `@` to `76.76.21.21`, CNAME `www` to `cname.vercel-dns.com`.

### Netlify

1. Build command: `npm run build`, publish directory: `dist`.
2. Add custom domain `thegeekharsh.in` in Domain Management.
3. Point DNS records as instructed by Netlify.
