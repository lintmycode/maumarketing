import { pt } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';

const translations: Record<Lang, Record<string, string>> = { pt, en };

/**
 * Returns a t(key) function for the given language.
 * Falls back to the key itself if no translation is found.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return translations[lang][key] ?? translations['pt'][key] ?? key;
  };
}
