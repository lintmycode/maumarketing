# MAU Marketing — offer v3 (Oct 2026)

Content revamp ahead of the new theme. Copy lives in `src/i18n/{pt,en}.ts`; the new theme should consume those keys.
Tone: informal ("tu"), bold, funny. The brand joke carries the tiers: you choose *how MAU* you want to be.

Headline: **Nem todo o marketing é MAU. / Mas devia.** (EN: *Not all marketing is MAU. / But it should be.*)

## The menu (excl. VAT)

| Tier | Price | What | i18n keys | PT / EN page |
|---|---|---|---|---|
| **MAU** | €99 setup + €49/mo, 12-mo min | Static (Astro) site ≤6 pages, Google trio (GBP + GA4 + Search Console) + schema JSON-LD, WhatsApp/call buttons, hosting, monthly report, agent (≤10 simple requests/mo) | `service.mau.*`, `mau-page.*` | `/servicos/mau` · `/en/services/mau` |
| **MUITO MAU** | €1,490 + €99/mo, 12-mo min | WordPress with custom theme, unlimited pages, catalogue/stock/blog, WP updates, custom schema for catalogue/events, agent (≤25 requests/mo) | `service.muito-mau.*`, `muito-mau-page.*` | `/servicos/muito-mau` · `/en/services/muito-mau` |
| **Inspeção** | €249 one-off | Audit + priority repair list + GBP, GA4, Search Console + schema setup — no fixes (quoted separately, or move to MAU) | `service.inspecao.*`, `inspecao-page.*` | `/servicos/inspecao` · `/en/services/inspection` |

The agent works on both stacks: on static sites it edits the Astro content and a human approves the build/deploy;
on WordPress it edits through WP. Every change gets a human review before it goes live.

## The roadside pitch (MAU)

"Mandas a foto do carro por WhatsApp com 'Golf 2018, 120 mil km, 12.900€' — aparece no site. 49€ por mês, menos do que o café da equipa."
Value to show on a phone: their Google Maps listing fixed, a site with their stock, the WhatsApp button, the agent demo.

## Pricing rationale (internal — never show the hourly rate)

- MAU: a 6-page static build costs ~€300–400 of time; €99 + €49/mo pays it back in ~7 months. Year one €687, then €588/yr.
  The 12-month minimum is what makes the €99 setup safe. No early exit, no buyout.
- MAU vs market: DIY builders ~€25/mo with no human; "unlimited edits" agencies start ~€200/mo. €49 with an agent sits in the gap.
- Inspeção: ~5 h (audit + Google setup, no fixes). Priced low as the easy first yes that leads into MAU.
- MUITO MAU: custom theme ~25–30 h. Kept well under NÍTIDA's custom work — the page says "bigger than this is a NÍTIDA job".
- Monthly cost is mostly human review time; the agent's model cost is cents per edit. Request caps limit review time.

## Decided (2026-10-11)

- €1,490 sits clearly below NÍTIDA's entry price.
- Agent caps: 10 requests/mo (MAU), 25 requests/mo (MUITO MAU).
- Google trio (GBP, GA4, Search Console) + schema JSON-LD are in every tier.
- MAU: 12-month minimum, no early exit. Inspeção: no fixes, €249.

## Open decisions

- Existing hosting clients on cheap annual plans: move them to MAU or leave them as they are?
- Old service URLs redirect via `astro.config.mjs`. Earlier drafts (2-day launch, AI updates, custom CRM) are in `_drafts/`.
