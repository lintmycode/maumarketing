import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../../chunks/BaseLayout_CYZM01wV.mjs';
import { $ as $$CTABlock } from '../../chunks/CTABlock_DPAUdb1y.mjs';
export { renderers } from '../../renderers.mjs';

const $$LandingPages = createComponent(($$result, $$props, $$slots) => {
  const lang = "pt";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("landing-page.title"), "description": t("landing-page.description"), "lang": lang, "alternateLangUrl": "/en/services/landing-pages" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <h1>${t("landing-page.hero.heading")}</h1> <p>${t("landing-page.hero.subheading")}</p> </div> </div> <section class="section"> <div class="container service-detail"> <div class="detail-section"> <h2>${t("landing-page.problem.heading")}</h2> <p>${t("landing-page.problem.body")}</p> </div> <div class="detail-section"> <h2>${t("landing-page.what.heading")}</h2> <p>${t("landing-page.what.body")}</p> <ul> <li>${t("landing-page.what.item1")}</li> <li>${t("landing-page.what.item2")}</li> <li>${t("landing-page.what.item3")}</li> <li>${t("landing-page.what.item4")}</li> <li>${t("landing-page.what.item5")}</li> </ul> </div> <div class="detail-section"> <h2>${t("landing-page.outcome.heading")}</h2> <p>${t("landing-page.outcome.body")}</p> </div> </div> </section> ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("cta.default.heading"), "body": t("cta.default.body"), "buttonLabel": t("cta.default.button"), "buttonHref": "/contacto" })} ` })}`;
}, "/Volumes/echo.ops/maumarketing/src/pages/servicos/landing-pages.astro", void 0);

const $$file = "/Volumes/echo.ops/maumarketing/src/pages/servicos/landing-pages.astro";
const $$url = "/servicos/landing-pages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LandingPages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
