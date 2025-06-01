import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './i18n';

export default createMiddleware({
  defaultLocale: defaultLocale,
  locales: locales,
  localePrefix: localePrefix,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\..*).*)']
};