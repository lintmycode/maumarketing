import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from '../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../chunks/BaseLayout_CZo2yBwE.mjs';
import { $ as $$Hero } from '../chunks/Hero_BM-fpATL.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_BBW9h-fS.mjs';
import { $ as $$ProcessSteps } from '../chunks/ProcessSteps_DsN1H_n8.mjs';
import { $ as $$CTABlock } from '../chunks/CTABlock_Dl9DivXu.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "MAU Marketing \u2014 Websites, Landing Pages and Follow-up for Small Businesses", "description": "Practical marketing for real businesses. Landing pages that convert, real local visibility and follow-up systems that close deals.", "lang": lang, "alternateLangUrl": "/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "t": t, "lang": lang })}  ${maybeRenderHead()}<section class="section section--surface"> <div class="container"> <h2 class="section-heading">${t("home.services.heading")}</h2> <p class="section-subheading">${t("home.services.subheading")}</p> <div class="service-grid"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": t("service.landing.title"), "problem": t("service.landing.problem"), "outcome": t("service.landing.outcome"), "href": t("service.landing.href"), "ctaLabel": t("service.cta") })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": t("service.local.title"), "problem": t("service.local.problem"), "outcome": t("service.local.outcome"), "href": t("service.local.href"), "ctaLabel": t("service.cta") })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": t("service.crm.title"), "problem": t("service.crm.problem"), "outcome": t("service.crm.outcome"), "href": t("service.crm.href"), "ctaLabel": t("service.cta") })} </div> </div> </section>  <section class="section"> <div class="container"> <div class="ai-block"> <h2>${t("home.ai.heading")}</h2> <p>${t("home.ai.body")}</p> </div> </div> </section>  ${renderComponent($$result2, "ProcessSteps", $$ProcessSteps, { "t": t })}  <section class="section section--surface"> <div class="container"> <h2 class="section-heading">${t("home.trust.heading")}</h2> <p style="max-width: 580px; font-size: 1.0625rem; line-height: 1.7; color: var(--mau-muted);"> ${t("home.trust.body")} </p> <a${addAttribute(t("home.trust.N\xCDTIDA-url"), "href")} class="btn btn--secondary" style="margin-top: 1.5rem;" target="_blank" rel="noopener"> ${t("home.trust.N\xCDTIDA")} </a> </div> </section>  ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("home.cta.heading"), "body": t("home.cta.body"), "buttonLabel": t("home.cta.button"), "buttonHref": "/en/contact" })} ` })}`;
}, "/Volumes/DATA/projects/maumarketing/src/pages/en/index.astro", void 0);

const $$file = "/Volumes/DATA/projects/maumarketing/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
