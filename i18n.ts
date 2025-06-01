import {notFound} from "next/navigation";
import {getRequestConfig} from "next-intl/server";

export const locales = ["en", "zh", "ja", "ko", "zh-TW"];
export const defaultLocale = "zh";

export default getRequestConfig(async ({locale}) => {
  // 验证语言环境
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  // 加载消息
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});