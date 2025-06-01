import {notFound} from "next/navigation";
import {getRequestConfig} from "next-intl/server";

export const locales = ["en", "zh", "ja", "ko", "zh-TW"] as const;
export const defaultLocale = "en";
export const localePrefix = 'as-needed' as const; // Add this line

export default getRequestConfig(async ({requestLocale}) => {
  // 获取请求的语言环境
  let locale = await requestLocale;
  
  // 验证语言环境，如果无效则使用默认语言
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  // 加载消息
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});