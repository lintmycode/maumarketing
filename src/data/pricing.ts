// Numeric prices (EUR, excl. VAT) used by schema.org Offers and /llms.txt.
// The display strings live in src/i18n/{pt,en}.ts — change both when a price changes.
export const pricing = {
  mau: { setup: 99, monthly: 49 },
  'muito-mau': { setup: 1490, monthly: 99 },
  // Key `inspecao` is historical: the tier is shown as "Auditoria" / "Audit" (renamed 2026-10-11)
  inspecao: { once: 249 },
} as const;

export type Tier = keyof typeof pricing;

// PT / EN paths per tier, with the trailing slash the directory build uses for canonicals (EN for Auditoria is "audit")
export const tierPaths: Record<Tier, { pt: string; en: string }> = {
  mau: { pt: '/servicos/mau/', en: '/en/services/mau/' },
  'muito-mau': { pt: '/servicos/muito-mau/', en: '/en/services/muito-mau/' },
  inspecao: { pt: '/servicos/auditoria/', en: '/en/services/audit/' },
};
