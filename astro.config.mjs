import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://maumarketing.pt',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
