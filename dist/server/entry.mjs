import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BnuGuNV_.mjs';
import { manifest } from './manifest_C_91va3F.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/como-funciona.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/en/about.astro.mjs');
const _page5 = () => import('./pages/en/contact.astro.mjs');
const _page6 = () => import('./pages/en/how-it-works.astro.mjs');
const _page7 = () => import('./pages/en/services/crm-follow-up.astro.mjs');
const _page8 = () => import('./pages/en/services/landing-pages.astro.mjs');
const _page9 = () => import('./pages/en/services/local-visibility.astro.mjs');
const _page10 = () => import('./pages/en/services.astro.mjs');
const _page11 = () => import('./pages/en.astro.mjs');
const _page12 = () => import('./pages/servicos/crm-follow-up.astro.mjs');
const _page13 = () => import('./pages/servicos/landing-pages.astro.mjs');
const _page14 = () => import('./pages/servicos/visibilidade-local.astro.mjs');
const _page15 = () => import('./pages/servicos.astro.mjs');
const _page16 = () => import('./pages/sobre.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/como-funciona.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/en/about.astro", _page4],
    ["src/pages/en/contact.astro", _page5],
    ["src/pages/en/how-it-works.astro", _page6],
    ["src/pages/en/services/crm-follow-up.astro", _page7],
    ["src/pages/en/services/landing-pages.astro", _page8],
    ["src/pages/en/services/local-visibility.astro", _page9],
    ["src/pages/en/services/index.astro", _page10],
    ["src/pages/en/index.astro", _page11],
    ["src/pages/servicos/crm-follow-up.astro", _page12],
    ["src/pages/servicos/landing-pages.astro", _page13],
    ["src/pages/servicos/visibilidade-local.astro", _page14],
    ["src/pages/servicos/index.astro", _page15],
    ["src/pages/sobre.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Volumes/DATA/projects/maumarketing/dist/client/",
    "server": "file:///Volumes/DATA/projects/maumarketing/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
