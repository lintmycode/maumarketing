# Mau Marketing website spec v1

Status: high-level specification
Date: 2026-04-07

## Purpose

Create a fast, credible, lightweight website for **MAU Marketing**, a Nitida Digital brand offering practical, AI-native marketing services with human supervision.

The site should:
- explain the offer clearly
- make the name feel intentional, not amateur
- position services in a no-BS way
- generate leads for discovery calls or direct contact
- support future service pages, case studies, and outbound credibility

## Technical direction

### Platform
- Astro
- reuse Nitida repo patterns and implementation philosophy as reference
- lightweight customizations over framework bloat
- performance-first approach

### Likely stack assumptions
Based on Nitida’s actual repo structure:
- Astro site structure
- minimal setup (`astro`, simple scripts, plain `astro.config.mjs`)
- reusable components/layouts
- simple content architecture
- limited dependencies
- custom CSS/JS only where useful
- strong performance baseline
- bilingual structure if appropriate from launch

### Non-goals
- no WordPress-first assumptions
- no overbuilt CMS/page-builder setup
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
- MAU Marketing is backed by real delivery capability

## Primary target audience

Initial audience hypothesis:
- small businesses
- local businesses
- service businesses
- owner-led companies
- businesses with poor websites, weak follow-up, inconsistent local presence, or messy lead handling

Secondary audience:
- existing Nitida-adjacent clients who need marketing help beyond a normal website build
- somewhat more sophisticated businesses who appreciate a sharper tone

## Site goals by priority

1. make the offer understandable in under 15 seconds
2. establish trust despite the provocative brand name
3. present 3 focused services clearly
4. make contact friction very low
5. create a structure that can support later growth without needing a rebuild

## Language strategy

- support **Portuguese and English**
- **Portuguese is primary**
- English should be available from launch if feasible
- English copy should adapt the message, not rigidly translate lines that depend on Portuguese nuance around “MAU”

## Sitemap (v1)

### 1) Home
Purpose:
- explain what MAU Marketing is
- frame websites as marketing tools
- introduce core services
- push toward contact

Sections:
- hero
- short value proposition
- what MAU Marketing does
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
- landing pages and conversion websites
- local visibility and practical improvements
- CRM and follow-up systems

### 3) Individual service pages
Recommended initial pages:
- Landing pages and conversion websites
- Visibilidade local e melhorias práticas
- CRM e automação de follow-up

Optional later pages:
- AI integrations
- audits and quick wins
- campaign launch packs
- articles/insights

### 4) How it works
Purpose:
- explain the process
- explain AI honestly
- reduce skepticism

Include:
- diagnosis
- audit / offer clarity
- execution
- review and iteration
- what AI does
- what humans do

### 5) About
Purpose:
- explain MAU Marketing as a Nitida Digital brand
- give the founder/operator context
- establish competence and tone

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

## Homepage spec

### Hero
Goal:
- state the core offer clearly
- make the brand memorable without over-explaining it

Possible direction:
- **Provavelmente não precisas de mais marketing. Precisas de marketing melhor.**
- **Websites, landing pages e sistemas de follow-up para negócios que já estão fartos de conversa.**

Hero components:
- headline
- supporting paragraph
- primary CTA
- secondary CTA

### Core value proposition block
Explain that MAU Marketing helps businesses with:
- clearer offers
- better pages
- better lead capture
- better local visibility
- better follow-up
- practical automation

### Services block
Show 3 cards max at first:
- landing pages and conversion websites
- local visibility and practical improvements
- CRM + follow-up systems

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

### CTA block
Simple and direct.
Examples:
- Need a better website, follow-up system or local presence?
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
- strong typographic hierarchy
- restrained accent color(s)
- avoid trendy AI neon nonsense

### UX principles
- very clear hierarchy
- fast loading
- strong mobile experience
- direct CTA placement
- low friction forms
- readable service pages

### Brand expression
The name **MAU Marketing** is a strength if framed correctly.
The design should make it feel:
- self-aware
- memorable
- competent
- not careless or too jokey

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

## Functional requirements

### Required
- contact form
- analytics setup
- cookie/privacy/legal essentials as needed
- SEO basics
- OG/meta basics
- spam protection
- performance optimization
- bilingual navigation/routing if EN ships at launch

### Recommended
- CRM/form integration
- simple event tracking for CTA clicks and form submits
- reusable components/sections for future pages

## SEO direction

Initial SEO should focus on clarity and structure, not content-volume theatre.

Possible targets later:
- marketing agency for small businesses in Portugal
- landing page services
- local visibility improvements
- CRM follow-up systems
- website conversion improvements

At launch, priority is credibility and conversion.

## Conversion model

Primary conversion:
- contact form inquiry

Secondary conversions:
- email click
- WhatsApp click if used

Potential intake fields:
- business name
- website
- what they need help with
- budget range (optional)
- urgency

## Relationship with Nitida

The site should clarify the relationship without confusion.
Recommended framing:
- **MAU Marketing is a Nitida Digital brand.**

Need to avoid making the two brands feel redundant.
Nitida = broader web/digital execution brand.
MAU Marketing = marketing-facing, offer/conversion/follow-up/local-visibility branch.

## Suggested v1 launch scope

### Must-have
- Home
- Services
- 3 service pages
- About
- Contact

### Can wait
- case studies
- articles
- complex lead magnets
- advanced on-site automation

## Implementation notes

- use Astro and Nitida-style implementation patterns
- Nitida’s actual site app is very lean: Astro with minimal dependencies and a plain `astro.config.mjs`; MAU should follow that spirit unless a real need appears
- create reusable sections/components for service pages and CTAs
- keep dependency count low
- prioritize editable, maintainable content structure without overcomplicating the stack
- optimize for fast launch and easy iteration

## Open questions

- exact bilingual routing strategy
- how playful the homepage should be
- whether pricing is visible at launch
- whether the founder appears explicitly on the homepage
- whether early case studies reuse Nitida work or wait for MAU-native work

## Recommended next deliverables

1. homepage copy draft
2. sitemap confirmation
3. service page templates
4. launch content drafts
5. technical build checklist for Astro
