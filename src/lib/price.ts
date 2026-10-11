// Price formatting for the redesign: numbers come from src/data/pricing.ts so cards,
// detail pages, schema and llms.txt can't disagree. PT puts € after ("1.490€"),
// EN before ("€1,490") — matches the design mocks.
import type { Lang } from '../i18n/index';
import { pricing, type Tier } from '../data/pricing';

export function eur(n: number, lang: Lang): string {
  // Manual grouping: Intl's pt-PT uses a thin space ("1 490"), the design wants "1.490"
  const num = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'pt' ? '.' : ',');
  return lang === 'pt' ? `${num}€` : `€${num}`;
}

/** Monthly suffix: "/mês" or "/mo" */
export const perMonth = (lang: Lang) => (lang === 'pt' ? '/mês' : '/mo');

export function tierPrice(tier: Tier) {
  return pricing[tier] as { setup?: number; monthly?: number; once?: number };
}
