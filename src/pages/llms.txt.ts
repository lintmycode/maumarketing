// /llms.txt — plain-markdown summary for AI assistants (llmstxt.org format).
// Built from the i18n copy so it never drifts from the site.
import type { APIRoute } from 'astro';
import { useTranslations } from '../i18n/index';
import { tierPaths, type Tier } from '../data/pricing';
import { SITE } from '../lib/schema';

const pt = useTranslations('pt');
const en = useTranslations('en');
const tiers: Tier[] = ['mau', 'muito-mau', 'inspecao'];

const body = `# MAU Marketing

> ${pt('hero.headline')} ${pt('hero.headline-accent')} ${pt('hero.subheadline')} MAU Marketing é uma marca da NÍTIDA Digital (https://nitida.pt), em Portugal. Preços sem IVA.

## Serviços

${tiers.map((k) => `- [${pt(`service.${k}.title`)}](${SITE}${tierPaths[k].pt}): ${pt(`service.${k}.problem`)} ${pt(`service.${k}.outcome`)} Preço: ${pt(`service.${k}.price`)}.`).join('\n')}

## Páginas

- [Serviços](${SITE}/servicos/): ${pt('services-page.intro')}
- [Contacto](${SITE}/contacto/): ${pt('contact-page.description')}

## English

${tiers.map((k) => `- [${en(`service.${k}.title`)}](${SITE}${tierPaths[k].en}): ${en(`service.${k}.problem`)} Price: ${en(`service.${k}.price`)}.`).join('\n')}
- [Contact](${SITE}/en/contact/)
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
