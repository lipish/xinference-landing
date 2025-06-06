"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [showLineQR, setShowLineQR] = useState(false);
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const [showKakaoQR, setShowKakaoQR] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-dark-bg text-text-primary py-20 border-t border-brand-purple/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-purple/10 to-brand-light-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-brand-pink/10 to-brand-orange/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 gradient-text-brand inline-block">Xinference</h3>
            <p className="text-text-secondary max-w-lg mt-4 text-lg leading-relaxed">
              {t("description")}
            </p>
            <div className="flex space-x-6 mt-8">
              <Link href="https://github.com/xorbitsai/inference" className="group">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-light-purple hover:bg-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
              <Link href="https://twitter.com/xorbitsio" className="group">
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink hover:bg-brand-pink/20 hover:border-brand-pink/40 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </Link>
              <Link href="https://discord.gg/67wPZuGJ" className="group">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange hover:bg-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
                  </svg>
                </div>
              </Link>
              {/* Line icon - show for Japanese, Korean and Traditional Chinese locales */}
              {isClient && (locale === 'ja' || locale === 'ko' || locale === 'zh-TW') && (
                <div 
                  className="relative"
                  onMouseEnter={() => setShowLineQR(true)}
                  onMouseLeave={() => setShowLineQR(false)}
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </div>
                  {/* QR Code Popup */}
                  {isClient && showLineQR && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 min-w-max">
                      <div className="text-center">
                        <Image 
                          src="/images/line.jpg" 
                          alt="Line QR Code" 
                          width={160} 
                          height={160}
                          className="mx-auto mb-2"
                        />
                        <p className="text-xs text-gray-700 font-medium">{t("links.line")}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {locale === 'ja' ? 'QRコードをスキャン' : 
                           locale === 'ko' ? 'QR 코드 스캔' : 
                           locale === 'zh-TW' ? '掃描二維碼' : 
                           'Scan QR Code'}
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-white"></div>
                    </div>
                  )}
                </div>
              )}
              {/* KakaoTalk icon - show for Korean locale only */}
              {isClient && locale === 'ko' && (
                <div 
                  className="relative"
                  onMouseEnter={() => setShowKakaoQR(true)}
                  onMouseLeave={() => setShowKakaoQR(false)}
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Image 
                      src="/images/KakaoTalk_logo.svg" 
                      alt="KakaoTalk" 
                      width={24} 
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  {/* QR Code Popup */}
                  {isClient && showKakaoQR && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 min-w-max">
                      <div className="text-center">
                        <Image 
                          src="/images/kakao.png" 
                          alt="KakaoTalk QR Code" 
                          width={160} 
                          height={160}
                          className="mx-auto mb-2"
                        />
                        <p className="text-xs text-gray-700 font-medium">{t("links.kakao")}</p>
                        <p className="text-xs text-gray-500 mt-0.5">QR 코드 스캔</p>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-white"></div>
                    </div>
                  )}
                </div>
              )}
              {/* WeChat icon - show for all locales */}
              {isClient && (
                <div 
                  className="relative"
                  onMouseEnter={() => setShowWeChatQR(true)}
                  onMouseLeave={() => setShowWeChatQR(false)}
                >
                  <div className="w-12 h-12 rounded-xl bg-green-600/10 border border-green-600/20 flex items-center justify-center text-green-600 hover:bg-green-600/20 hover:border-green-600/40 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.621-.55-.302-2.676-2.476-4.81-5.722-6.04C10.85 2.462 9.78 2.188 8.691 2.188zm-2.363 2.58c.55 0 .995.448.995 1.001 0 .551-.445.998-.995.998s-.996-.447-.996-.998c0-.553.446-1.001.996-1.001zm4.725 0c.551 0 .996.448.996 1.001 0 .551-.445.998-.996.998-.55 0-.995-.447-.995-.998 0-.553.445-1.001.995-1.001zm5.15 3.75c-3.829 0-6.955 2.685-6.955 5.996 0 3.311 3.126 5.997 6.955 5.997a8.04 8.04 0 0 0 2.3-.34c.23-.067.484-.026.69.12l1.548.903c.1.058.218.09.336.09.177 0 .320-.143.32-.32 0-.06-.023-.12-.04-.18l-.317-1.2a.506.506 0 0 1 .183-.571c1.491-1.15 2.459-2.895 2.459-4.899 0-3.311-3.125-5.996-6.955-5.996zm-2.04 2.976c.384 0 .695.31.695.693 0 .384-.311.694-.695.694-.383 0-.694-.31-.694-.694 0-.384.311-.693.694-.693zm4.079 0c.384 0 .694.31.694.693 0 .384-.31.694-.694.694-.384 0-.694-.31-.694-.694 0-.384.31-.693.694-.693z" />
                    </svg>
                  </div>
                  {/* QR Code Popup */}
                  {isClient && showWeChatQR && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-4 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 min-w-max">
                      <div className="text-center">
                        <Image 
                          src="/images/wechat.png" 
                          alt="WeChat QR Code" 
                          width={160} 
                          height={160}
                          className="mx-auto mb-2"
                        />
                        <p className="text-xs text-gray-700 font-medium">{t("links.wechat")}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {locale === 'zh' || locale === 'zh-TW' ? '扫描二维码添加微信' : 
                           locale === 'ja' ? 'QRコードをスキャン' : 
                           locale === 'ko' ? 'QR 코드 스캔' : 
                           'Scan QR Code'}
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-white"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-light-purple">{t("products.title")}</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-text-secondary hover:text-brand-light-purple transition-all duration-300 hover:translate-x-1">{t("products.features")}</a></li>
              <li><a href="#pricing" className="text-text-secondary hover:text-brand-light-purple transition-all duration-300 hover:translate-x-1">{t("products.pricing")}</a></li>
              <li><a href="#" className="text-text-secondary hover:text-brand-light-purple transition-all duration-300 hover:translate-x-1">{t("products.enterprise")}</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-orange">{t("support.title")}</h4>
            <ul className="space-y-4">
              <li><a href="https://inference.readthedocs.io/" className="text-text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-1">{t("support.docs")}</a></li>
              <li><a href="https://inference.readthedocs.io/en/latest/reference/index.html" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-1">{t("support.api")}</a></li>
              <li><a href="https://discord.gg/67wPZuGJ" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-1">{t("support.community")}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-brand-purple/20 pt-10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-text-secondary mb-4 md:mb-0 text-lg">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}