import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
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