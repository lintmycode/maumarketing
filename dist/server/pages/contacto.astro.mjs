import { g as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../chunks/BaseLayout_CYZM01wV.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_BH1LnrHg.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const lang = "pt";
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("contact-page.title"), "description": t("contact-page.description"), "lang": lang, "alternateLangUrl": "/en/contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-hero"> <div class="container"> <h1>${t("contact-page.heading")}</h1> <p>${t("contact-page.subheading")}</p> </div> </div> <section class="section"> <div class="container"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "t": t })} </div> </section> ` })}`;
}, "/Volumes/echo.ops/maumarketing/src/pages/contacto.astro", void 0);

const $$file = "/Volumes/echo.ops/maumarketing/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
