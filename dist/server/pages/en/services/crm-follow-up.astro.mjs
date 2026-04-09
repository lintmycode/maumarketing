import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../../../chunks/BaseLayout_CZo2yBwE.mjs';
import { $ as $$CTABlock } from '../../../chunks/CTABlock_Dl9DivXu.mjs';
export { renderers } from '../../../renderers.mjs';

const $$CrmFollowUp = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("crm-page.title"), "description": t("crm-page.description"), "lang": lang, "alternateLangUrl": "/servicos/crm-follow-up" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <h1>${t("crm-page.hero.heading")}</h1> <p>${t("crm-page.hero.subheading")}</p> </div> </div> <section class="section"> <div class="container service-detail"> <div class="detail-section"> <h2>${t("crm-page.problem.heading")}</h2> <p>${t("crm-page.problem.body")}</p> </div> <div class="detail-section"> <h2>${t("crm-page.what.heading")}</h2> <p>${t("crm-page.what.body")}</p> <ul> <li>${t("crm-page.what.item1")}</li> <li>${t("crm-page.what.item2")}</li> <li>${t("crm-page.what.item3")}</li> <li>${t("crm-page.what.item4")}</li> <li>${t("crm-page.what.item5")}</li> </ul> </div> <div class="detail-section"> <h2>${t("crm-page.outcome.heading")}</h2> <p>${t("crm-page.outcome.body")}</p> </div> </div> </section> ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("cta.default.heading"), "body": t("cta.default.body"), "buttonLabel": t("cta.default.button"), "buttonHref": "/en/contact" })} ` })}`;
}, "/Volumes/DATA/projects/maumarketing/src/pages/en/services/crm-follow-up.astro", void 0);

const $$file = "/Volumes/DATA/projects/maumarketing/src/pages/en/services/crm-follow-up.astro";
const $$url = "/en/services/crm-follow-up";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CrmFollowUp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
