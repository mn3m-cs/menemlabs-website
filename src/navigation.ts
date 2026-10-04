import { SITE } from 'astrowind:config';

import { t, getLocalePermalink, otherLocale, type Locale } from './i18n';

export const CONTACT_EMAIL = 'support@menemlabs.tech';
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
export const WEB3FORMS_ACCESS_KEY = '7c5f00b8-e14d-4561-9e8d-66934070a518';

export const getHeaderData = (locale: Locale) => {
  const dict = t(locale);
  const target = otherLocale(locale);

  return {
    homeHref: getLocalePermalink(locale),
    links: [
      { text: dict.nav.expertise, href: '#team_exp' },
      { text: dict.nav.work, href: '#work' },
      { text: dict.nav.contact, href: '#contact' },
    ],
    actions: [{ text: dict.nav.talkToUs, href: '#contact' }],
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
  const home = getLocalePermalink(locale);

  return {
    homeHref: home,
    links: [
      {
        title: dict.footer.pagesTitle,
        links: [
          { text: dict.nav.expertise, href: `${home}#team_exp` },
          { text: dict.nav.work, href: `${home}#work` },
          { text: dict.nav.contact, href: `${home}#contact` },
        ],
      },
      {
        title: dict.footer.contactTitle,
        links: [{ text: CONTACT_EMAIL, href: CONTACT_HREF }],
      },
    ],
    secondaryLinks: [],
    socialLinks: [{ ariaLabel: CONTACT_EMAIL, icon: 'tabler:mail', href: CONTACT_HREF }],
    footNote: `© ${new Date().getFullYear()} ${SITE?.name}. ${dict.footer.rights}`,
  };
};
