# Mau Marketing website spec v1

Status: high-level specification
Date: 2026-04-07

## Purpose

Create a fast, credible, lightweight website for **Mau Marketing**, a Nitida Digital brand offering practical, AI-native marketing services with human supervision.

The site should:
- explain the offer clearly
- make the joke/name feel intentional, not amateur
- position services in a no-BS way
- generate leads for discovery calls or direct contact
- support future service pages, case studies, and outbound credibility

## Technical direction

### Platform
- WordPress
- Astra theme as base
- lightweight customizations over framework bloat
- reuse the broad practical philosophy already used at Nitida

### Likely stack assumptions
Based on Nitida-style delivery preferences:
- WordPress core
- Astra theme
- Kadence blocks or equivalent lightweight block tooling if needed
- limited plugin footprint
- native/custom post types only where justified
- custom CSS/JS only where useful
- strong performance baseline

### Non-goals
- no overbuilt page-builder monster
- no animation circus
- no marketing-funnel SaaS labyrinth on day one
- no fake enterprise architecture for a simple lead-gen site

## Brand and positioning goals

The site needs to balance:
- a memorable, playful brand name
- commercial seriousness
- clear explanation of what is actually sold
- visible human supervision behind AI-enabled delivery

The visitor should quickly understand:
- this is not random AI slop
- this is not generic “full-service marketing” fluff
- this is practical execution for small businesses
- Mau Marketing is backed by real delivery capability

## Primary target audience

Initial audience hypothesis:
- small businesses
- local businesses
- service businesses
- owner-led companies
- businesses with poor websites, weak follow-up, inconsistent content, or messy lead handling

Secondary audience:
- existing Nitida-adjacent clients who need marketing help beyond a normal website build

## Site goals by priority

1. make the offer understandable in under 15 seconds
2. establish trust despite the playful brand name
3. present 3–5 focused services clearly
4. make contact friction very low
5. create a structure that can support later growth without needing a rebuild

## Sitemap (v1)

### 1) Home
Purpose:
- explain what Mau Marketing is
- frame websites as marketing tools
- introduce core services
- push toward contact

Sections:
- hero
- short value proposition
- what Mau Marketing does
- selected service blocks
- “how we work” / AI + human explanation
- why this is different from normal agencies
- proof / credibility / relation to Nitida
- CTA

### 2) Services overview
Purpose:
- list core service categories
- route users to specific service pages

Initial service families:
- websites and landing pages for lead generation
- content systems / content operations
- email + CRM automation
- analytics/reporting clarity
- campaign support / offer launch support

### 3) Individual service pages
Recommended initial pages:
- Landing pages and conversion websites
- Content ops and AI-assisted content production
- CRM and email follow-up automation

Optional later pages:
- local business marketing systems
- audits and quick wins
- campaign launch packs

### 4) How it works
Purpose:
- explain the process
- explain AI honestly
- reduce skepticism

Include:
- discovery
- audit / offer clarity
- execution
- review and iteration
- what AI does
- what humans do

### 5) About
Purpose:
- explain Mau Marketing as a Nitida Digital brand
- give the founder/operator context
- establish competence and tone

Should cover:
- who is behind it
- why Mau Marketing exists
- practical background in digital delivery
- anti-BS stance

### 6) Contact
Purpose:
- direct inquiry capture
- low-friction contact path

Options:
- form
- email
- optional WhatsApp link
- optional short intake questions

### 7) Case studies / work (later)
Purpose:
- credibility and proof

Could start with:
- selected Nitida-style work reframed through marketing outcomes
- not all cases need deep case-study pages initially

### 8) Insights / articles (optional later)
Purpose:
- SEO and trust
- a place for useful no-BS content

Not required for launch.

## Homepage spec

### Hero
Goal:
- state the core offer clearly
- make the brand memorable without leaning too hard into irony

Possible direction:
- **Marketing without the agency theatre.**
- Websites, landing pages, content and follow-up systems — built to get business, not just look nice.

Hero components:
- headline
- supporting paragraph
- primary CTA: talk to us / get a quote / book a discovery call
- secondary CTA: see services

### Core value proposition block
Explain that Mau Marketing helps businesses with:
- clearer offers
- better pages
- better lead capture
- better follow-up
- faster content production
- practical automation

### Services block
Show 3 cards max at first:
- landing pages and conversion websites
- content ops
- CRM + email follow-up

Each card should explain:
- what problem it solves
- what outcome the client gets

### “Web as a marketing tool” block
This is strategically important.
Explain that the website is not sold as a decorative object but as part of a marketing and conversion system.

### “AI, but supervised” block
Say this plainly:
- AI helps research, draft, systematize, and speed up delivery
- humans stay responsible for judgment, editing, and real decisions
- client does not get dumped into a black box

### Trust / credibility block
Potential elements:
- operated by Nitida Digital
- years of digital delivery experience
- practical execution across websites, systems, and client work
- maybe selected logos or projects later if appropriate

### CTA block
Simple and direct.
Examples:
- Need a better website, follow-up system or campaign page?
- Let’s figure out what’s leaking leads and fix it.

## Tone and copy guidance

### Tone goals
- direct
- useful
- slightly sharp
- confident without guru language
- playful where it helps, not where it harms trust

### Copy constraints
Avoid:
- “360 marketing solutions”
- “growth hacking” fluff
- “data-driven synergy” clown vocabulary
- exaggerated AI claims
- generic agency filler

Prefer:
- practical language
- plain explanations
- specific bottlenecks and outcomes
- anti-theatre tone

## Design direction

### Visual style
- clean, modern, lightweight
- probably white/light neutral base with strong typographic hierarchy
- restrained accent color(s)
- avoid trendy AI neon nonsense unless intentionally done well

### UX principles
- very clear hierarchy
- fast loading
- strong mobile experience
- direct CTA placement
- low friction forms
- readable service pages

### Brand expression
The name “Mau Marketing” is a strength if framed correctly.
The design should make it feel:
- self-aware
- memorable
- competent
- not cheap or jokey in a careless way

## Content requirements

### Launch content required
- homepage copy
- services overview copy
- 3 initial service pages
- about page copy
- contact page copy
- short explanation of AI role

### Nice-to-have later
- FAQs
- case studies
- article templates
- downloadable audit/checklist lead magnet if useful

## Functional requirements

### Required
- contact form
- analytics setup
- cookie/privacy/legal essentials as needed
- SEO basics
- OG/meta basics
- spam protection
- performance optimization

### Recommended
- CRM/form integration
- simple event tracking for CTA clicks and form submits
- reusable block patterns for future service pages

## SEO direction

Initial SEO should focus on clarity and structure, not content volume theatre.

Possible targets later:
- marketing agency for small businesses in Portugal
- landing page services
- email automation for small business
- website conversion improvements

At launch, priority is credibility and conversion, not publishing 40 empty articles.

## Conversion model

Primary conversion:
- contact form inquiry

Secondary conversions:
- email click
- WhatsApp click if used
- booking link if later adopted

Potential intake fields:
- business name
- website
- what they need help with
- monthly budget range (optional)
- urgency

## Relationship with Nitida

The site should clarify the relationship without confusion.
Recommended framing:
- “Mau Marketing is a Nitida Digital brand.”

Possible uses:
- footer reference
- about page explanation
- selective cross-linking

Need to avoid making the two brands feel redundant.
Nitida = broader web/digital execution brand.
Mau Marketing = marketing-facing, offer/conversion/follow-up/content branch.

## Suggested v1 launch scope

Launch lean.

### Must-have
- Home
- Services
- 3 service pages
- About
- Contact

### Can wait
- case studies
- blog/articles
- complex lead magnets
- advanced automation on-site

## Implementation notes

- use Astra for speed and simplicity
- create reusable section patterns for service pages and CTAs
- keep plugin count low
- prioritize editable content blocks without making the site fragile
- use Nitida-standard sensible setup for SEO/performance/forms

## Open questions

- Portuguese first, English first, or bilingual?
- How playful should the homepage be?
- Should pricing be visible at launch or kept to inquiry/discovery?
- Should Mau Marketing show the founder explicitly on the homepage?
- Should case studies reuse Nitida work or wait for MM-native work?

## Recommended next deliverables

1. brand/positioning statement v1
2. homepage wireframe with section-by-section copy goals
3. sitemap confirmation
4. service page templates
5. launch content drafts
6. technical build checklist for WordPress + Astra
