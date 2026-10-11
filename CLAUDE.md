# MAU Marketing site

Astro static site (PT default, EN under `/en/`). A NÍTIDA Digital brand.

- All copy lives in `src/i18n/pt.ts` and `src/i18n/en.ts` — pages only call `t('key')`. Keep both files in sync.
- Offer (Oct 2026): MAU (€99 + €49/mo), MUITO MAU (€1,490 + €99/mo), Inspeção (€249). Tone: informal, bold, funny. Details and open decisions: `discovery/offer.md`.
- Service pages: `src/pages/servicos/*.astro` (PT) and `src/pages/en/services/*.astro` (EN), same template, keys `<x>-page.*`.
- Prices exist twice: display strings in i18n and numbers in `src/data/pricing.ts` (schema.org Offers, `/llms.txt`). Change both.
- SEO/AI meta: `src/lib/schema.ts` (JSON-LD; org + website on every page via BaseLayout, `Service` on tier pages via `jsonLd` prop),
  `src/pages/sitemap.xml.ts` and `src/pages/llms.txt.ts` (generated from the i18n copy), `public/robots.txt` (AI crawlers allowed).
  No og:image yet and no GA4 yet (needs a measurement ID + consent).
- Old service URLs are redirected in `astro.config.mjs` — add a redirect when renaming a page.
- Styles: `src/styles/global.scss`. A new theme is in progress (design team), so keep styling changes minimal.
- `node_modules` may come from another machine; if the build fails on `@rollup/rollup-darwin-arm64`, run
  `npm i --no-save @rollup/rollup-darwin-arm64@<rollup version>`.
