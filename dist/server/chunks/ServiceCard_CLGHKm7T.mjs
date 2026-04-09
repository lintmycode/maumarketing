import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate } from './astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://maumarketing.pt");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, problem, outcome, href, ctaLabel } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="service-card"> <h3 class="service-card__title">${title}</h3> <p class="service-card__problem">${problem}</p> <p class="service-card__outcome">${outcome}</p> <a${addAttribute(href, "href")} class="service-card__cta">${ctaLabel}</a> </article>`;
}, "/Volumes/echo.ops/maumarketing/src/components/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
