import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maumarketing.pt',
  output: 'static',
  // Old service URLs (pre-Oct 2026 offer) → closest new service, so shared/indexed links don't 404
  redirects: {
    // Tier renamed Inspeção → Auditoria (2026-10-11)
    '/servicos/inspecao': '/servicos/auditoria',
    '/en/services/inspection': '/en/services/audit',
    '/servicos/landing-pages': '/servicos/mau',
    '/servicos/visibilidade-local': '/servicos/auditoria',
    '/servicos/crm-follow-up': '/servicos/',
    '/en/services/landing-pages': '/en/services/mau',
    '/en/services/local-visibility': '/en/services/audit',
    '/en/services/crm-follow-up': '/en/services/',
    // Redesign dropped these pages; send them to the services pages
    '/como-funciona': '/servicos/',
    '/sobre': '/servicos/',
    '/en/how-it-works': '/en/services/',
    '/en/about': '/en/services/',
  },
});
