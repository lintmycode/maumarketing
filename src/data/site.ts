// Site-wide constants and path helpers shared by pages and components.
import type { Lang } from '../i18n/index';

export const EMAIL = 'ola@maumarketing.pt'; // inbox must exist before deploy

// Canonical page paths per language (trailing slash matches the directory build)
export const paths = {
  home: { pt: '/', en: '/en/' },
  services: { pt: '/servicos/', en: '/en/services/' },
  contact: { pt: '/contacto', en: '/en/contact' },
  privacy: { pt: '/privacidade', en: '/en/privacy' },
} as const;

// "Marcar chamada" target: calls are booked through the contact page (decided 2026-10-11).
// #falar is the anchor of the call/email block on the contact page.
export function bookingUrl(lang: Lang): string {
  return `${paths.contact[lang]}#falar`;
}
