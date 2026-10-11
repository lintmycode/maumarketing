// Price formatting for the redesign: numbers come from src/data/pricing.ts so cards,
// detail pages, schema and llms.txt can't disagree. PT puts € after ("1.490€"),
// EN before ("€1,490") — matches the design mocks.
import type { Lang } from '../i18n/index';
import { pricing, type Tier } from '../data/pricing';

export function eur(n: number, lang: Lang): string {
  const num = n.toLocaleString(lang === 'pt' ? 'pt-PT' : 'en-GB', { useGrouping: 'always' } as Intl.NumberFormatOptions);
  return lang === 'pt' ? `${num}€` : `€${num}`;
}

/** Monthly suffix: "/mês" or "/mo" */
export const perMonth = (lang: Lang) => (lang === 'pt' ? '/mês' : '/mo');

export function tierPrice(tier: Tier) {
  return pricing[tier] as { setup?: number; monthly?: number; once?: number };
}
