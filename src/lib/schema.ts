// schema.org JSON-LD builders. BaseLayout always emits the organization + website;
// service pages add serviceSchema() for their tier.
import { pricing, tierPaths, type Tier } from '../data/pricing';
import { useTranslations, type Lang } from '../i18n/index';

export const SITE = 'https://maumarketing.pt';
export const ORG_ID = `${SITE}/#organization`;

export function baseSchema(lang: Lang) {
  return [
    {
      '@type': 'ProfessionalService',
      '@id': ORG_ID,
      name: 'MAU Marketing',
      url: `${SITE}/`,
      logo: `${SITE}/favicon.svg`,
      slogan: lang === 'pt' ? 'Nem todo o marketing é MAU. Mas devia.' : 'Not all marketing is MAU. But it should be.',
      areaServed: { '@type': 'Country', name: 'Portugal' },
      knowsLanguage: ['pt-PT', 'en'],
      parentOrganization: { '@type': 'Organization', name: 'NÍTIDA Digital', url: 'https://nitida.pt' },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'MAU Marketing',
      inLanguage: lang === 'pt' ? 'pt-PT' : 'en',
      publisher: { '@id': ORG_ID },
    },
  ];
}

// Plans are a one-off setup + a monthly fee; Inspeção is one-off only
function priceSpecs(tier: Tier, lang: Lang) {
  const p = pricing[tier] as { setup?: number; monthly?: number; once?: number };
  const spec = (price: number, name: string, monthly = false) => ({
    '@type': 'UnitPriceSpecification',
    price,
    priceCurrency: 'EUR',
    valueAddedTaxIncluded: false,
    name,
    ...(monthly && { unitCode: 'MON', billingDuration: 'P1M' }),
  });
  const out = [];
  if (p.setup) out.push(spec(p.setup, lang === 'pt' ? 'Arranque' : 'Setup'));
  if (p.monthly) out.push(spec(p.monthly, lang === 'pt' ? 'Mensalidade (mínimo 12 meses)' : 'Monthly (12-month minimum)', true));
  if (p.once) out.push(spec(p.once, lang === 'pt' ? 'Pagamento único' : 'One-off'));
  return out;
}

export function serviceSchema(tier: Tier, lang: Lang) {
  const t = useTranslations(lang);
  const url = `${SITE}${tierPaths[tier][lang]}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: t(`service.${tier}.title`),
    description: t(`${tier}-page.description`),
    url,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Portugal' },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'EUR',
      priceSpecification: priceSpecs(tier, lang),
    },
  };
}
