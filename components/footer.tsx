"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");

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
              最全面的企业级推理服务平台，为生成式AI场景提供高性能、高可用的解决方案。
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
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-light-purple">产品</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-text-secondary hover:text-brand-light-purple transition-all duration-300 hover:translate-x-1">功能特性</a></li>
              <li><a href="#pricing" className="text-text-secondary hover:text-brand-light-purple transition-all duration-300 hover:translate-x-1">价格方案</a></li>
              <li><a href="#" className="text-text-secondary hover:text-brand-light-purple transition-all duration-300 hover:translate-x-1">企业版</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-orange">支持</h4>
            <ul className="space-y-4">
              <li><a href="https://inference.readthedocs.io/" className="text-text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-1">文档</a></li>
              <li><a href="https://inference.readthedocs.io/en/latest/reference/api/" className="text-text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-1">API参考</a></li>
              <li><a href="https://github.com/xorbitsai/inference/discussions" className="text-text-secondary hover:text-brand-orange transition-all duration-300 hover:translate-x-1">社区</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-brand-purple/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary mb-4 md:mb-0 text-lg">
              {t("copyright")}
            </p>
            <div className="flex items-center space-x-6 text-text-secondary">
              <span className="hover:text-brand-light-purple transition-colors duration-300">{t("icp")}</span>
              <div className="w-1 h-1 bg-brand-purple/40 rounded-full"></div>
              <span className="hover:text-brand-light-purple transition-colors duration-300">{t("security")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}