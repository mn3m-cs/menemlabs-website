import { SITE } from 'astrowind:config';

import { t, getLocalePermalink, otherLocale, type Locale } from './i18n';

export const CONTACT_EMAIL = 'support@menemlabs.tech';
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

export const getHeaderData = (locale: Locale) => {
  const dict = t(locale);
  const target = otherLocale(locale);

  return {
    homeHref: getLocalePermalink(locale),
    links: [
      { text: dict.nav.work, href: '#work' },
      { text: dict.nav.contact, href: '#contact' },
    ],
    actions: [{ text: dict.nav.talkToUs, href: CONTACT_HREF }],
    languageSwitch: {
      text: dict.nav.switchLanguage,
      ariaLabel: dict.nav.switchLanguageLabel,
      href: getLocalePermalink(target),
      locale: target,
    },
  };
};

export const getFooterData = (locale: Locale) => {
  const dict = t(locale);

  return {
    homeHref: getLocalePermalink(locale),
    links: [],
    secondaryLinks: [],
    socialLinks: [{ ariaLabel: CONTACT_EMAIL, icon: 'tabler:mail', href: CONTACT_HREF }],
    footNote: `© ${new Date().getFullYear()} ${SITE?.name}. ${dict.footer.rights}`,
  };
};
