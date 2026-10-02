import { getPermalink, trimSlash } from '~/utils/permalinks';

import en from './en';
import ar from './ar';

export const LOCALES = ['en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_STORAGE_KEY = 'menemlabs-lang';

const DIRECTIONS: Record<Locale, 'ltr' | 'rtl'> = { en: 'ltr', ar: 'rtl' };

const DICTIONARIES = { en, ar };

export type Dictionary = typeof en;

export const getDirection = (locale: Locale) => DIRECTIONS[locale];

export const t = (locale: Locale): Dictionary => DICTIONARIES[locale];

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'ar' : 'en');

export const getLocalePermalink = (locale: Locale, path = '/'): string =>
  locale === DEFAULT_LOCALE ? getPermalink(path) : getPermalink(`/${locale}/${trimSlash(path)}`);
