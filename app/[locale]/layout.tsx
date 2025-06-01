import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

const locales = ["zh", "ja", "ko", "zh-TW"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    title: "Xinference - 企业级推理服务平台",
    description: "Xinference 是针对生成式 AI 场景度身定制的能力全面的推理服务平台",
    keywords: "AI, 推理服务, 机器学习, 企业级, 高性能",
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}