import { f as createAstro, g as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://maumarketing.pt");
const $$ProcessSteps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProcessSteps;
  const { t } = Astro2.props;
  const steps = [
    {
      number: t("process.step1.number"),
      title: t("process.step1.title"),
      body: t("process.step1.body")
    },
    {
      number: t("process.step2.number"),
      title: t("process.step2.title"),
      body: t("process.step2.body")
    },
    {
      number: t("process.step3.number"),
      title: t("process.step3.title"),
      body: t("process.step3.body")
    },
    {
      number: t("process.step4.number"),
      title: t("process.step4.title"),
      body: t("process.step4.body")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <h2 class="section-heading">${t("process.heading")}</h2> <div class="process-grid"> ${steps.map((step) => renderTemplate`<div class="process-step"> <div class="process-step__number">${step.number}</div> <h3 class="process-step__title">${step.title}</h3> <p class="process-step__body">${step.body}</p> </div>`)} </div> </div> </section>`;
}, "/Volumes/echo.ops/maumarketing/src/components/ProcessSteps.astro", void 0);

export { $$ProcessSteps as $ };
