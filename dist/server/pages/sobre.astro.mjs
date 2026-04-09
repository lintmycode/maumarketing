import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from '../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../chunks/BaseLayout_CYZM01wV.mjs';
import { $ as $$CTABlock } from '../chunks/CTABlock_DPAUdb1y.mjs';
export { renderers } from '../renderers.mjs';

const $$Sobre = createComponent(($$result, $$props, $$slots) => {
  const lang = "pt";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("about-page.title"), "description": t("about-page.description"), "lang": lang, "alternateLangUrl": "/en/about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <span class="NÍTIDA-badge">${t("about-page.N\xCDTIDA-badge")}</span> <h1>${t("about-page.heading")}</h1> </div> </div> <section class="section"> <div class="container"> <!-- Intro: the name --> <div style="max-width: 680px; margin-bottom: 4rem;"> <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">${t("about-page.intro.heading")}</h2> <p style="font-size: 1.0625rem; line-height: 1.75; color: var(--mau-text); margin-bottom: 1rem;"> ${t("about-page.intro.body1")} </p> <p style="font-size: 1.0625rem; line-height: 1.75; color: var(--mau-muted);"> ${t("about-page.intro.body2")} </p> </div> <!-- NÍTIDA Digital connection --> <div style="max-width: 680px; margin-bottom: 4rem;"> <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">${t("about-page.N\xCDTIDA.heading")}</h2> <p style="font-size: 1.0625rem; line-height: 1.75; color: var(--mau-text); margin-bottom: 1rem;"> ${t("about-page.N\xCDTIDA.body1")} </p> <p style="font-size: 1.0625rem; line-height: 1.75; color: var(--mau-muted); margin-bottom: 1.5rem;"> ${t("about-page.N\xCDTIDA.body2")} </p> <a${addAttribute(t("about-page.N\xCDTIDA.url"), "href")} class="btn btn--secondary" target="_blank" rel="noopener"> ${t("about-page.N\xCDTIDA.link")} </a> </div> <!-- Approach --> <div> <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${t("about-page.approach.heading")}</h2> <div class="approach-grid"> <div class="approach-item"> <h3>${t("about-page.approach.item1.title")}</h3> <p>${t("about-page.approach.item1.body")}</p> </div> <div class="approach-item"> <h3>${t("about-page.approach.item2.title")}</h3> <p>${t("about-page.approach.item2.body")}</p> </div> <div class="approach-item"> <h3>${t("about-page.approach.item3.title")}</h3> <p>${t("about-page.approach.item3.body")}</p> </div> </div> </div> </div> </section> ${renderComponent($$result2, "CTABlock", $$CTABlock, { "heading": t("cta.default.heading"), "body": t("cta.default.body"), "buttonLabel": t("cta.default.button"), "buttonHref": "/contacto" })} ` })}`;
}, "/Volumes/echo.ops/maumarketing/src/pages/sobre.astro", void 0);

const $$file = "/Volumes/echo.ops/maumarketing/src/pages/sobre.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
