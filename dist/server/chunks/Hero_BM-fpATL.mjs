import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate } from './astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://maumarketing.pt");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { t, lang } = Astro2.props;
  const ctaHref = lang === "pt" ? "/contacto" : "/en/contact";
  const servicesHref = lang === "pt" ? "/servicos/" : "/en/services/";
  return renderTemplate`${maybeRenderHead()}<section class="hero section"> <div class="container"> <span class="hero__eyebrow">${t("hero.eyebrow")}</span> <h1 class="hero__headline"> ${t("hero.headline")} <span class="hero__headline--accent">${t("hero.headline-accent")}</span> </h1> <p class="hero__subheadline">${t("hero.subheadline")}</p> <div class="hero__actions"> <a${addAttribute(ctaHref, "href")} class="btn btn--primary">${t("hero.cta-primary")}</a> <a${addAttribute(servicesHref, "href")} class="btn btn--secondary">${t("hero.cta-secondary")}</a> </div> </div> </section>`;
}, "/Volumes/DATA/projects/maumarketing/src/components/Hero.astro", void 0);

export { $$Hero as $ };
