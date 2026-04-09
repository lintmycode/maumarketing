import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../chunks/BaseLayout_CZo2yBwE.mjs';
import { $ as $$ProcessSteps } from '../chunks/ProcessSteps_DsN1H_n8.mjs';
import { $ as $$CTABlock } from '../chunks/CTABlock_Dl9DivXu.mjs';
export { renderers } from '../renderers.mjs';

const $$ComoFunciona = createComponent(($$result, $$props, $$slots) => {
  const lang = "pt";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("how-page.title"), "description": t("how-page.description"), "lang": lang, "alternateLangUrl": "/en/how-it-works" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <h1>${t("how-page.heading")}</h1> <p>${t("how-page.subheading")}</p> </div> </div> <section class="section"> <div class="container"> <p style="font-size: 1.0625rem; line-height: 1.7; color: var(--mau-muted); max-width: 560px; margin-bottom: 3rem;"> ${t("how-page.intro")} </p> </div> </section> ${renderComponent($$result2, "ProcessSteps", $$ProcessSteps, { "t": t })}  <section class="section section--surface"> <div class="container"> <div class="ai-block"> <h2>${t("how-page.ai.heading")}</h2> <p>${t("how-page.ai.body1")}</p> <p style="margin-top: 1rem;">${t("how-page.ai.body2")}</p> </div> </div> </section> ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("cta.default.heading"), "body": t("cta.default.body"), "buttonLabel": t("cta.default.button"), "buttonHref": "/contacto" })} ` })}`;
}, "/Volumes/DATA/projects/maumarketing/src/pages/como-funciona.astro", void 0);

const $$file = "/Volumes/DATA/projects/maumarketing/src/pages/como-funciona.astro";
const $$url = "/como-funciona";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComoFunciona,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
