import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maumarketing.pt',
  output: 'static',
  // Old service URLs (pre-Oct 2026 offer) → closest new service, so shared/indexed links don't 404
  redirects: {
    '/servicos/landing-pages': '/servicos/websites',
    '/servicos/visibilidade-local': '/servicos/auditoria-seo',
    '/servicos/crm-follow-up': '/servicos/',
    '/en/services/landing-pages': '/en/services/websites',
    '/en/services/local-visibility': '/en/services/audit-seo',
    '/en/services/crm-follow-up': '/en/services/',
  },
});
