// Hand-rolled sitemap (no @astrojs/sitemap dependency): every .astro page except /api.
// Old service URLs are config redirects, so they never show up here.
import type { APIRoute } from 'astro';
import { SITE } from '../lib/schema';

const pages = Object.keys(import.meta.glob('./**/*.astro'))
  .filter((f) => !f.startsWith('./api/'))
  .map((f) => f.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '/'))
  // Trailing slash to match the canonical URLs of the directory build
  .map((path) => (path.endsWith('/') ? path : `${path}/`))
  .sort();

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      pages.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n') +
      `\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
