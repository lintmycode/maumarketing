# MAU Marketing site

Astro static site (PT default, EN under `/en/`). A NÍTIDA Digital brand.

- All copy lives in `src/i18n/pt.ts` and `src/i18n/en.ts` — pages only call `t('key')`. Keep both files in sync.
- Services (Oct 2026): Websites, Monthly Plan, Audit + SEO + Google. Offer, prices and open decisions: `discovery/offer-v2.md`.
- Service pages: `src/pages/servicos/*.astro` (PT) and `src/pages/en/services/*.astro` (EN), same template, keys `<x>-page.*`.
- Old service URLs are redirected in `astro.config.mjs` — add a redirect when renaming a page.
- Styles: `src/styles/global.scss`. A new theme is in progress (design team), so keep styling changes minimal.
- `node_modules` may come from another machine; if the build fails on `@rollup/rollup-darwin-arm64`, run
  `npm i --no-save @rollup/rollup-darwin-arm64@<rollup version>`.
