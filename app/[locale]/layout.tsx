import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import "../globals.css";

const inter = Inter({ subsets: ['latin'] });

import { locales } from "../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  if (!locales.includes(locale as typeof locales[number])) {
    console.log("Locale not found:", locale); // Logging for debugging purpose
    notFound();
  }

  return {
    title: "Xinference - 企业级推理服务平台", // Restored original title
    description: "Xinference 是针对生成式 AI 场景度身定制的能力全面的推理服务平台",
    keywords: "AI, 推理服务, 机器学习, 企业级, 高性能",
  };
}

interface Props {
  children: React.ReactNode;
  params: {locale: string};
}

export default async function LocaleLayout({children, params: {locale}}: Props) {
  const messages = await getMessages({locale});

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17176992071" type="text/javascript"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17176992071');
          `
        }} />
      </head>
      <body className={clsx(inter.className, 'bg-slate-50 dark:bg-slate-900')}>
        <NextIntlClientProvider locale={locale} messages={messages}> {/* Ensure locale prop is passed */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}