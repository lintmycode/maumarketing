# MAU Marketing — offer v3 (Oct 2026)

Content revamp ahead of the new theme. Copy lives in `src/i18n/{pt,en}.ts`; the new theme should consume those keys.
Tone: informal ("tu"), bold, funny. The brand joke carries the tiers: you choose *how MAU* you want to be.

Headline: **Nem todo o marketing é MAU. / Mas devia.** (EN: *Not all marketing is MAU. / But it should be.*)

## The menu (excl. VAT)

| Tier | Price | What | i18n keys | PT / EN page |
|---|---|---|---|---|
| **MAU** | €99 setup + €49/mo, 12-mo min | Static (Astro) site ≤6 pages, Google trio (GBP + GA4 + Search Console) + schema JSON-LD, WhatsApp/call buttons, hosting, monthly report, agent (≤10 simple requests/mo) | `service.mau.*`, `mau-page.*` | `/servicos/mau` · `/en/services/mau` |
| **MUITO MAU** | €1,490 + €99/mo, 12-mo min | WordPress with custom theme, unlimited pages, catalogue/stock/blog, WP updates, custom schema for catalogue/events, agent (≤25 requests/mo) | `service.muito-mau.*`, `muito-mau-page.*` | `/servicos/muito-mau` · `/en/services/muito-mau` |
| **Auditoria** | €249 one-off | Audit + priority repair list + GBP, GA4, Search Console + schema setup — no fixes (quoted separately, or move to MAU) | `service.inspecao.*`, `inspecao-page.*` | `/servicos/auditoria` · `/en/services/audit` |

The agent works on both stacks: on static sites it edits the Astro content and a human approves the build/deploy;
on WordPress it edits through WP. Every change gets a human review before it goes live.

## The roadside pitch (MAU)

"Mandas mensagem, o site muda. 49€ por mês, menos do que o café da equipa."
Value to show on a phone: their Google Maps listing fixed, the WhatsApp button, the agent demo.
Businesses with stock or a catalogue (e.g. car dealers) are MUITO MAU — MAU has no listing pages.

## Pricing rationale (internal — never show the hourly rate)

- MAU: a 6-page static build costs ~€300–400 of time; €99 + €49/mo pays it back in ~7 months. Year one €687, then €588/yr.
  The 12-month minimum is what makes the €99 setup safe. No early exit, no buyout.
- MAU vs market: DIY builders ~€25/mo with no human; "unlimited edits" agencies start ~€200/mo. €49 with an agent sits in the gap.
- Auditoria: ~5 h (audit + Google setup, no fixes). Priced low as the easy first yes that leads into MAU.
- MUITO MAU: custom theme ~25–30 h. Kept well under NÍTIDA's custom work — the page says "bigger than this is a NÍTIDA job".
- Monthly cost is mostly human review time; the agent's model cost is cents per edit. Request caps limit review time.

## Decided (2026-10-11)

- €1,490 sits clearly below NÍTIDA's entry price.
- Agent caps: 10 requests/mo (MAU), 25 requests/mo (MUITO MAU).
- Google trio (GBP, GA4, Search Console) + schema JSON-LD are in every tier.
- AI-ready in every tier: llms.txt, robots.txt allowing AI crawlers, sitemap. maumarketing.pt itself ships all of it.
- MAU: 12-month minimum, no early exit. Auditoria: no fixes, €249.
- Inspeção renamed to Auditoria (2026-10-11); the car-inspection metaphor stays in the copy ("Leva-o à inspeção", inspection sheet, stamp).

## Agente WP — standalone agent for existing WordPress sites (decided 2026-11-10)

The MAU agent sold on its own to NÍTIDA's existing WordPress clients on jaws. It **replaces the yearly
hosting line** (that's the pitch: same hosting + updates, plus "manda mensagem, o site muda").
Infra decisions: `~/projects/sys/specs/site-agent.md`.

| | Price (+IVA) |
|---|---|
| Monthly | **€29/mo, static or WordPress** (one price, decided 2026-11-10) |
| Annual (2 months free) | €290/yr, prepaid |
| Setup | €99 (connect the site, agent user, map post types/fields, test) |
| Extra site on the same bot | +€10/mo |
| Extra request over the cap | €5 |
| WhatsApp | later, as a paid extra (price TBD). **Launch is Telegram only** (2026-11-10) |

Includes: hosting on jaws, WP core/plugin updates (already part of yearly hosting, so they stay in),
agent with **10 requests/mo**, one site, one language. The client approves each change ("Publicar");
Nuno sees every change and can undo. Below MAU (€49: new site + reports) and MUITO MAU (€99: 25 requests).

Internal: direct cost ≈ €5–6/site/month (model ~€1 at one post a week, VPS ~€5 shared, jaws share ~€2.50),
so ~€23/site/month before Nuno's time. Works if updates are batched across sites (wp-cli) and time
stays under ~30 min/site/month.

Who (annual figures at the monthly price, +IVA):
- **Viking Cars** — best use case (add/update a vehicle from photos). Overdue invoice paid (2026-11-10).
  €348/yr (€290 prepaid) + €99 setup; setup includes mapping the vehicle post type and fields.
- **PrismInfinito** — €29 + €10 for assistencia = €468/yr (€390 prepaid) vs €120 today. Only sells if
  they post regularly.
- **CINCA** — €29 does not cover their dedicated hosting (€420/yr, floor €360). At the mid-December
  review: keep their hosting line and add the agent at €29/mo (€768/yr), translation per publication as
  in the 2026-09-24 proposal; folds in the unbilled €170.
- **Not moving:** Casino, JNA, Vinyldisc keep yearly hosting.
- Static sites: parked until a static client wants it (MAU already includes the agent).

## Open decisions

- ~~Existing hosting clients on cheap annual plans: move them to MAU or leave them as they are?~~
  Leave them; offer Agente WP to Viking, Prism, CINCA (2026-11-10).
- Agente WP: minimum term for the monthly option (proposed 6 months).
- Old service URLs redirect via `astro.config.mjs`. Earlier drafts (2-day launch, AI updates, custom CRM) are in `_drafts/`.
