import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate } from './astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://maumarketing.pt");
const $$CTABlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTABlock;
  const { heading, body, buttonLabel, buttonHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="cta-block"> <h2>${heading}</h2> <p>${body}</p> <a${addAttribute(buttonHref, "href")} class="btn btn--ghost">${buttonLabel}</a> </div> </div> </section>`;
}, "/Volumes/DATA/projects/maumarketing/src/components/CTABlock.astro", void 0);

export { $$CTABlock as $ };
