import { f as createAstro, g as createComponent, r as renderTemplate, k as defineScriptVars, i as addAttribute, m as maybeRenderHead } from './astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://maumarketing.pt");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { t } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="contact-form-wrap"> <!-- Thank-you message, shown after successful submit --> <div class="contact-thanks" id="contact-thanks"> <h3>', "</h3> <p>", `</p> </div> <div class="contact-error" id="contact-error" role="alert" aria-live="polite"></div> <!-- Resend-backed form --> <form class="contact-form" id="contact-form" name="contact" method="POST" action="/api/contact"> <!-- Honeypot \u2014 bots fill this, humans don't --> <label style="display:none" aria-hidden="true">
Do not fill this out
<input name="bot-field" tabindex="-1" autocomplete="off"> </label> <div class="form-row"> <label> `, ' *\n<input type="text" name="name"', ' required aria-required="true"> </label> <label> ', ' <input type="text" name="business"', "> </label> </div> <label> ", ' <input type="text" inputmode="url" name="website"', "> </label> <label> ", ' *\n<select name="service" required aria-required="true"> <option value="" disabled selected>', '</option> <option value="landing">', '</option> <option value="local">', '</option> <option value="crm">', '</option> <option value="other">', "</option> </select> </label> <label> ", ' *\n<textarea name="message"', ' required aria-required="true" rows="5"></textarea> </label> <label> ', ' <select name="budget"> <option value="" disabled selected>', '</option> <option value="lt500">', '</option> <option value="500-1000">', '</option> <option value="1000-2500">', '</option> <option value="2500-5000">', '</option> <option value="gt5000">', '</option> </select> </label> <div> <button type="submit" class="btn btn--primary">', "</button> </div> </form> </div> <script>(function(){", `
  const form = document.getElementById('contact-form');
  const thanks = document.getElementById('contact-thanks');
  const errorBox = document.getElementById('contact-error');
  const params = new URLSearchParams(window.location.search);

  const showSuccess = () => {
    if (form) form.style.display = 'none';
    if (thanks) thanks.style.display = 'block';
    if (errorBox) errorBox.style.display = 'none';
  };

  const showError = (message) => {
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.style.display = 'block';
  };

  if (params.get('sent') === 'true') {
    showSuccess();
  } else if (params.get('sent') === 'error') {
    showError(errorLabel);
  }

  if (form instanceof HTMLFormElement) {
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (errorBox) errorBox.style.display = 'none';
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true;
        submitButton.textContent = sendingLabel;
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        let payload = null;
        try {
          payload = await response.json();
        } catch {
          payload = null;
        }

        if (!response.ok) {
          const message =
            payload && typeof payload.error === 'string' && payload.error.length > 0
              ? payload.error
              : errorLabel;
          throw new Error(message);
        }
        showSuccess();
      } catch (error) {
        const message =
          error instanceof Error && error.message ? error.message : errorLabel;
        showError(message);
      } finally {
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
          submitButton.textContent = submitLabel;
        }
      }
    });
  }
})();<\/script>`])), maybeRenderHead(), t("contact.thanks.heading"), t("contact.thanks.body"), t("contact.name"), addAttribute(t("contact.name-placeholder"), "placeholder"), t("contact.business"), addAttribute(t("contact.business-placeholder"), "placeholder"), t("contact.website"), addAttribute(t("contact.website-placeholder"), "placeholder"), t("contact.service"), t("contact.service-placeholder"), t("contact.service-landing"), t("contact.service-local"), t("contact.service-crm"), t("contact.service-other"), t("contact.message"), addAttribute(t("contact.message-placeholder"), "placeholder"), t("contact.budget"), t("contact.budget-placeholder"), t("contact.budget-500"), t("contact.budget-1000"), t("contact.budget-2500"), t("contact.budget-5000"), t("contact.budget-plus"), t("contact.submit"), defineScriptVars({
    submitLabel: t("contact.submit"),
    sendingLabel: t("contact.submitting"),
    errorLabel: t("contact.error")
  }));
}, "/Volumes/DATA/projects/maumarketing/src/components/ContactForm.astro", void 0);

export { $$ContactForm as $ };
