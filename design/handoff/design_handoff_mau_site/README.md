# Handoff: MAU Marketing website (maumarketing.pt)

## Overview
Redesign of the MAU Marketing site (a NÍTIDA Digital brand). "Mau" = "bad" in Portuguese; the whole brand plays on that. Pages: Homepage, Serviços (+ tier detail page + og:image), Contacto, Privacidade (template). Primary language PT, EN alongside (`src/i18n/pt.ts` / `en.ts` — existing copy wins where it differs from the mocks).

## About the design files
The `.dc.html` files are **design references built in HTML** — they show intended look and behaviour, not production code. Recreate them in the target codebase using its existing stack and patterns. Open any file directly in a browser (`support.js` must sit next to them). Most files are a canvas showing desktop (1440) and mobile (390) side by side; the red dashed line on mobile mocks marks the 844px fold — it is a guide, not UI.

## Fidelity
**High-fidelity.** Final colours, type, spacing, copy and interactions. Build pixel-close.

## Design tokens
Colours
- Ink / page background `#0d0d0b`
- Paper / primary text `#f2f0e9`
- Lime accent `#c8f000` (CTAs, MAU word, price on MAU/MUITO MAU, focus)
- Muted text on dark `rgba(242,240,233,.7)`; secondary `.55–.6`; tertiary/footer `.4–.45`
- Hairlines on dark `rgba(242,240,233,.16)`; input/ghost-button borders `rgba(242,240,233,.28)`
- Muted text on lime `rgba(13,13,11,.6–.7)`
- NÍTIDA link blue `rgb(12,150,238)` (footer only)
- Inspection stamp red `#d8361f` (Serviços page only)

Typography (Google Fonts)
- Display: **Archivo Black** 400, uppercase, letter-spacing −0.045em to −0.05em, line-height .9 (use ≥ .98–1.0 when a line below starts with an accented capital — É/Ã accents must never touch the line above)
- UI/body: **Archivo** 400–800
- Labels / meta: **IBM Plex Mono** 500–600, 10–12px, uppercase, letter-spacing .12–.14em
- Scale used: hero 104 (desktop) / 50 (mobile); section H2 64–92; card titles 28–44; price 30–44; body 14–20; buttons 14–16 bold

Radii: pills `100px`; plan cards `20px` desktop / `18px` mobile; large cards `28px` / `24px`; inputs `14px`.
Spacing: page gutter 48px desktop / 20px mobile (cards 12px); vertical sections 72–96px.
No shadows anywhere.

## Global components
- **Nav**: `MAU` wordmark (Archivo Black 18) left; right: Serviços, Contacto, `PT / EN` (mono 12, .45), lime pill "Marcar chamada" (14 bold, 13×22 padding). Mobile: wordmark, `PT / EN`, 44px round menu button.
- **Primary button**: lime bg, ink text, 700 16px, padding 20×32, pill.
- **Secondary button**: transparent, 1px border `rgba(242,240,233,.28)`, 600 16px, same padding.
- **Chevron**: all forward CTAs end in `›` (never `→`).
- **Footer**: mono 12, colour .4: `© 2026 MAU MARKETING` · `Uma marca NÍTIDA Digital` with "NÍTIDA Digital" linking to https://nitida.pt (new tab) in `rgb(12,150,238)`. Mobile footer also shows "Preços sem IVA."

## Screens

### 1. Homepage — `MAU Homepage.dc.html` (3a desktop, 3b mobile)
**Above the fold = exactly one viewport** (desktop 900px, mobile 844px): nav → hero (vertically centred, flex:1) → plans strip pinned to bottom. Only the lime "Falamos?" band and footer are below the fold.
- **Hero H1**: "Nem todo o / marketing é **MAU**. / Mas devia." Desktop breaks after "o" and "MAU."; mobile breaks "Nem todo o / marketing / é MAU. / Mas devia." MAU always lime.
- **CTAs** (44px under H1, gap 20): primary "Marcar chamada ›", secondary "Ver serviços". Mobile: stacked full-width, 56px / 52px tall.
- **Plans strip**: grid `1.3fr 1fr 1fr`, gap 12 (mobile: stacked rows, gap 8). Each card: outline only, padding 24×26, flex space-between, bottom-aligned.
  - MAU — 1.5px lime border; title 44px; "Site, Google e um agente: mandas mensagem, o site muda."; link "Quero ser MAU ›"; price **49€/mês** lime, "+ 99€ de arranque".
  - MUITO MAU — 1.5px lime border; title 28px; "WordPress com tema à medida."; "Quero ser muito MAU ›"; **99€/mês** lime, "+ 1.490€".
  - Auditoria — 1.5px `#f2f0e9` border, all-white content; "Já tens site? Leva-o à inspeção."; "Marcar inspeção ›"; **249€**, "uma vez".
  - Mobile rows: short descriptors ("Site + Google + agente", "Tema à medida", "Já tens site?") and a 22px `›` on the right.
- **Falamos band**: lime bg, ink text, padding 72×48; "FALAMOS?" Archivo Black 64; email (mono 15) + ink pill "Marcar chamada de 20 min ›" (lime text).

### 2. Serviços — `MAU Servicos.dc.html`
- 1a/1b mobile PT/EN, 1c desktop section, 1d tier detail page (`/servicos/mau`; same template for MUITO MAU and Auditoria), 1e og:image 1200×630.
- Heading: "Escolhe o quão MAU queres ser." MAU card = lime filled hero card; MUITO MAU = lime outline; Inspeção = paper "inspection sheet" with checkbox list and rotated red double-border stamp. "Preços sem IVA." visible; MAU "mínimo 12 meses".
- **Agent demo** (`Agent Demo.dc.html`, prop `lang: pt|en`): WhatsApp-style lime bubble "sábado abrimos das 9h às 13h" → "40 s depois" → browser card showing opening hours with the Saturday row highlighted lime + "novo" tag. This is the product differentiator; build as a reusable component.

### 3. Contacto — `MAU Contacto.dc.html`
- Desktop: 2 columns (gap 72). Left: "FALAMOS?" 108px with lime "?", intro "20 minutos de conversa. Dizemos-te o que está a falhar e qual o plano que faz sentido. Se nenhum fizer, também dizemos."; rows (hairline separated) — Chamada "Marcar 20 min" + lime "Escolher hora ›" (→ booking tool, TBD); Email "ola@maumarketing.pt" + outline "Copiar ›" (copies to clipboard).
- Right: 1.5px lime-outlined card radius 28, padding 40: "OU ESCREVE AQUI" / "Respondemos ASAP."; fields Nome, Email (type=email), "Como podemos ajudar?" textarea (4 rows); note "Só usamos os teus dados para responder."; lime "Enviar ›".
- Inputs: 56px (52 mobile), transparent, 1px `.28` border, radius 14; **focus → border `#c8f000`**; placeholder `.35`.
- **No phone number anywhere** on the site.
- Mobile: H1 58px; stacked buttons "Marcar chamada de 20 min ›" + email; form card below.
- Validation (to implement): all three fields required, email format; inline error in lime-on-dark mono 12 under the field; success state replaces form with "Recebido. Respondemos ASAP."

### 4. Privacidade — `MAU Privacidade.dc.html`
Fluid template. H1 "PRIVACIDADE." (lime period), lede "A parte chata. Mas é importante, por isso está aqui.", "Atualizado: [DD/MM/AAAA]". Eight sections (hairline separated, body 16/1.6, max 720px). All `[bracketed]` text is placeholder for legal copy.

## Interactions & motion (homepage)
Keep motion minimal; everything plays **once**, nothing loops. Respect `prefers-reduced-motion` (show final state instantly).
1. **Typewriter H1** — starts 500ms after load; ~45–90ms per char (random jitter), 160ms beat after "Nem todo o" and after "marketing é ", 420ms pause before "Mas devia.". Lime caret (`.09em × .78em`, blinking 0.8s steps) follows the typed position. Reserve the full text's space from the start (untyped chars rendered invisible) so nothing reflows. Caret disappears when typing ends.
2. **"Mas devia." fill** — 350ms after typing ends, the text fills lime left→right over 0.9s linear (`background: linear-gradient(90deg,#c8f000 50%,#f2f0e9 50%)` 200% wide, `background-clip:text`, animate background-position 100%→0, forwards). Pad the span `.22em .06em` with equal negative margin so accents (ã) aren't clipped.
3. **Plan card hover** — card fills solid (lime for MAU/MUITO MAU, paper for Auditoria), all content turns ink `#0d0d0b`, muted text `rgba(13,13,11,.7)`; 0.2s background/colour transition. Whole card clickable → tier detail page.
4. **Chevron nudge** — on hover of any `›` CTA, gap text→chevron grows 6→10px (0.15s) without shifting neighbours. Desktop only.

## State
- Homepage: typewriter progress (char index) + done flag. No data.
- Contacto: form fields, validation errors, submit status (idle / sending / sent / error).

## Assets
No images. Fonts from Google Fonts (Archivo, Archivo Black, IBM Plex Mono). Real screenshots/photos not yet supplied.

## Placeholders to confirm
`ola@maumarketing.pt`, booking-tool URL, legal entity data on Privacidade, EN translations not taken from `en.ts`.

## Files
- `MAU Homepage.dc.html` — homepage (3a desktop, 3b mobile)
- `MAU Servicos.dc.html` — services section, mobile PT/EN, detail page, og:image
- `Agent Demo.dc.html` — message→site-change component (used by Serviços)
- `MAU Contacto.dc.html` — contact (1a desktop, 1b mobile)
- `MAU Privacidade.dc.html` — privacy template (fluid)
- `support.js` — runtime needed only to open the mocks in a browser
