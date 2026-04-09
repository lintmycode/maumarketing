import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../../../chunks/BaseLayout_CYZM01wV.mjs';
import { $ as $$CTABlock } from '../../../chunks/CTABlock_DPAUdb1y.mjs';
export { renderers } from '../../../renderers.mjs';

const $$LocalVisibility = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("local-page.title"), "description": t("local-page.description"), "lang": lang, "alternateLangUrl": "/servicos/visibilidade-local" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <h1>${t("local-page.hero.heading")}</h1> <p>${t("local-page.hero.subheading")}</p> </div> </div> <section class="section"> <div class="container service-detail"> <div class="detail-section"> <h2>${t("local-page.problem.heading")}</h2> <p>${t("local-page.problem.body")}</p> </div> <div class="detail-section"> <h2>${t("local-page.what.heading")}</h2> <p>${t("local-page.what.body")}</p> <ul> <li>${t("local-page.what.item1")}</li> <li>${t("local-page.what.item2")}</li> <li>${t("local-page.what.item3")}</li> <li>${t("local-page.what.item4")}</li> <li>${t("local-page.what.item5")}</li> </ul> </div> <div class="detail-section"> <h2>${t("local-page.outcome.heading")}</h2> <p>${t("local-page.outcome.body")}</p> </div> </div> </section> ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("cta.default.heading"), "body": t("cta.default.body"), "buttonLabel": t("cta.default.button"), "buttonHref": "/en/contact" })} ` })}`;
}, "/Volumes/echo.ops/maumarketing/src/pages/en/services/local-visibility.astro", void 0);

const $$file = "/Volumes/echo.ops/maumarketing/src/pages/en/services/local-visibility.astro";
const $$url = "/en/services/local-visibility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LocalVisibility,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
