import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } =
  createI18nClient({
    en: () => import('./en'),
    ja: () => import('./ja'),
    zh: () => import('./zh'),
    vi: () => import('./vi'),
    id: () => import('./id'),
    tl: () => import('./tl'),
    my: () => import('./my'),
    th: () => import('./th'),
    km: () => import('./km'),
    lo: () => import('./lo'),
    ne: () => import('./ne'),
  });