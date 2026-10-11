# MAU Marketing site

Astro static site (PT default, EN under `/en/`). A NÍTIDA Digital brand.

- All copy lives in `src/i18n/pt.ts` and `src/i18n/en.ts` — pages only call `t('key')`. Keep both files in sync.
- PT copy is European Portuguese **pre-AO90** (no 1990 spelling agreement): actualizar, directo, projecto, acção, inspecção, rectificação; months capitalised (Outubro). Applies to meta descriptions in pages too.
  Some keys are looked up dynamically (`sv.d.${tier}…`, `service.${tier}.*`, `privacy.s${n}.*`) — grep for the prefix before deleting.
- Offer (Oct 2026): MAU (€99 + €49/mo), MUITO MAU (€1,490 + €99/mo), Auditoria (€249; code key `inspecao`, URLs `/servicos/auditoria`, `/en/services/audit`). Tone: informal, bold, funny. Details and open decisions: `discovery/offer.md`.
- Prices: numbers live in `src/data/pricing.ts` and are formatted by `src/lib/price.ts` (`eur`, `perMonth`) for cards, detail pages,
  schema.org Offers and `/llms.txt`. A few older i18n strings (`service.*.price`, meta descriptions) also spell prices out — update them too.
- Pages and components (redesign; design handoff in `design/handoff/design_handoff_mau_site/`):
  - Home: `HomeHero` (typewriter H1 — final markup is the end state, JS only animates; full stops are round `.dot` spans, hero only — the closing one turns lime when the fill ends), `PlanStrip`, `TalkBand`.
  - Serviços: `TierCards` (overview), `TierDetail` (one template for the 3 tiers, props `tier`, `lang`), `AgentDemo`. Keys `sv.*`.
  - Contacto: `ContactPanel` (EmailJS from the browser; sends `name`, `email`, `message`, hidden `website`/`subject`). Keys `contactx.*`.
  - Privacidade: `/privacidade`, `/en/privacy`. Controller is NÍTIDA Digital (no NIF/address, same as nitida.pt). Keys `privacy.*`.
- SEO/AI meta: `src/lib/schema.ts` (JSON-LD; org + website on every page via BaseLayout, `Service` on tier pages via `jsonLd` prop),
  `src/pages/sitemap.xml.ts` and `src/pages/llms.txt.ts` (generated from the i18n copy), `public/robots.txt` (AI crawlers allowed).
  No GA4 yet (needs a measurement ID + a consent banner; update the privacy page's cookie section when added).
- Old URLs are redirected in `astro.config.mjs` (old services, Como funciona, Sobre) — add a redirect when renaming a page.
- Styles (dark, SCSS only): tokens + mixins in `src/styles/_tokens.scss` (use `@use '../styles/tokens' as *;` in component `<style lang="scss">`; also exposed as `--lime`, `--paper`… CSS vars); base, Pico overrides, `.btn` / `.chev` in `src/styles/global.scss`. Pico paints text inside links lime and styles `<article>` — components set explicit colours.
- Site constants (`EMAIL`, `bookingUrl(lang)`, `paths`) in `src/data/site.ts`; "Marcar chamada" goes to `/contacto#falar` (no booking tool, decided 2026-10-11).
- Share image: `design/og/og.html` rendered to `public/og.png` (1200x630) with headless Chrome `--screenshot`.
- Logo: the nav lockup is HTML/CSS in `Header.astro` (not an image). Icons are PNGs rendered from `design/logo/icon.html`
  at 512px (`?v=m` = 16px "M" variant, `?v=sq` = full square for apple-touch-icon) with headless Chrome
  (`--default-background-color=00000000` for transparent corners), then `sips -z` to 180/32/16. The handoff SVGs in
  `design/handoff/.../logo/` are live text, so don't ship them as favicons. `icon-512.png` is the schema.org logo.
- Visual QA at 390px: Chrome windows won't shrink that far — load pages in 390×844 iframes on a localhost page instead.
- `node_modules` may come from another machine; if the build fails on `@rollup/rollup-darwin-arm64`, run
  `npm i --no-save @rollup/rollup-darwin-arm64@<rollup version>`.

## Before deploying

- [x] `ola@maumarketing.pt` inbox exists (shown on the site, used in the privacy page). Done 2026-10-11.
- [ ] Send one real test through the contact form and check the EmailJS template still renders (subject is now "Contacto pelo site").
- [ ] Rebuild `dist/` (it is tracked in git).
