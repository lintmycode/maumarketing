import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../../chunks/BaseLayout_CZo2yBwE.mjs';
import { $ as $$ServiceCard } from '../../chunks/ServiceCard_BBW9h-fS.mjs';
import { $ as $$CTABlock } from '../../chunks/CTABlock_Dl9DivXu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("services-page.title"), "description": t("services-page.description"), "lang": lang, "alternateLangUrl": "/servicos/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <h1>${t("services-page.heading")}</h1> <p>${t("services-page.subheading")}</p> </div> </div> <section class="section"> <div class="container"> <p style="font-size: 1.0625rem; color: var(--mau-muted); max-width: 540px; margin-bottom: 3rem;"> ${t("services-page.intro")} </p> <div class="service-grid"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": t("service.landing.title"), "problem": t("service.landing.problem"), "outcome": t("service.landing.outcome"), "href": t("service.landing.href"), "ctaLabel": t("service.cta") })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": t("service.local.title"), "problem": t("service.local.problem"), "outcome": t("service.local.outcome"), "href": t("service.local.href"), "ctaLabel": t("service.cta") })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": t("service.crm.title"), "problem": t("service.crm.problem"), "outcome": t("service.crm.outcome"), "href": t("service.crm.href"), "ctaLabel": t("service.cta") })} </div> </div> </section> ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("cta.default.heading"), "body": t("cta.default.body"), "buttonLabel": t("cta.default.button"), "buttonHref": "/en/contact" })} ` })}`;
}, "/Volumes/DATA/projects/maumarketing/src/pages/en/services/index.astro", void 0);

const $$file = "/Volumes/DATA/projects/maumarketing/src/pages/en/services/index.astro";
const $$url = "/en/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
