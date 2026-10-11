# MAU Marketing — offer v2 (Oct 2026)

Content revamp ahead of the new theme. Copy lives in `src/i18n/{pt,en}.ts`; the new theme should consume those keys.

Headline: **Nem todo o marketing é MAU. / Mas devia.** (EN: *Not all marketing is MAU. / But it should be.*)

## Services and prices (excl. VAT)

| Service | Price | i18n keys | PT / EN page |
|---|---|---|---|
| Websites | Static €399 · WordPress €999 | `service.sites.*`, `sites-page.*` | `/servicos/websites` · `/en/services/websites` |
| Monthly Plan | Static €29/mo · WordPress €99/mo (−10% yearly) | `service.care.*`, `care-page.*` | `/servicos/plano-mensal` · `/en/services/monthly-plan` |
| Audit + SEO + Google | €349 one-off | `service.audit.*`, `audit-page.*` | `/servicos/auditoria-seo` · `/en/services/audit-seo` |

Monthly Plan contents: hosting, SSL, backups, monitoring, monthly report (both). WordPress adds core/plugin updates and the
per-site agent (change requests by message; agent drafts, a human reviews, simple changes included, bigger work quoted).

## Pricing rationale (internal — never show the hourly rate)

- €99/mo WP ≈ 2 h at the €50/h internal rate: ~30 min updates, ~15 min report (site-reports skill), rest is agent edits + review.
  Year one = €1,188, more than the €999 build — the plan is where the margin is.
- €29/mo static: hosting is near-zero cost; price covers monitoring + report time. No agent (static content changes are quoted).
- €349 audit ≈ 7 h. Includes GBP, GA4 (key events), Search Console.

## Open decisions

- Page/scope limits for the €399 and €999 builds (not stated on the site yet).
- Agent fair-use: unlimited "simple changes" or a monthly cap.
- Is the Monthly Plan required with the €999/€399 build (e.g. 12-month minimum)?
- Audit on sites we don't host/build: fixes included, or audit + list only?
- Old service URLs redirect via `astro.config.mjs`. Old 2-day launch / AI updates / custom CRM drafts are in `_drafts/`.
