"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden bg-grid pt-12 pb-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-purple/30 to-brand-light-purple/20 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-brand-pink/25 to-brand-orange/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 主要内容区域 */}
          <div className="text-center mb-16">
            {/* 标题 */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tight animate-fadeIn">
                <span className="gradient-text-brand">{t("title.line1")}</span>
                <br />
                <span className="gradient-text-warm">{t("title.line2")}</span>
                <br />
                <span className="text-text-primary">{t("title.line3")}</span>
              </h1>
            </div>
            
            {/* 副标题 */}
            <p className="text-xl sm:text-2xl text-gray-500 mb-12 leading-relaxed max-w-4xl mx-auto animate-fadeIn animate-delay-200">
              {t("subtitle")}
            </p>
            
            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeIn animate-delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-purple/80 to-brand-light-purple/80 hover:from-brand-purple hover:to-brand-light-purple text-white text-lg px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScQpR8WuKxFFMzWMNRQmO-AqueghbAaeG3F-4vzUqkXqTN6Qg/viewform?usp=dialog', '_blank')}
              >
                {t("cta.trial")}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-4 rounded-full border border-brand-purple/40 text-brand-light-purple hover:bg-brand-purple/10 hover:border-brand-purple/60 hover:text-white backdrop-blur-sm transition-all duration-300"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScQpR8WuKxFFMzWMNRQmO-AqueghbAaeG3F-4vzUqkXqTN6Qg/viewform?usp=dialog', '_blank')}
              >
                {t("cta.demo")}
              </Button>
            </div>
          </div>
          
          {/* Xinference 热度数据展示 - 紧凑版 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 animate-fadeIn animate-delay-600">
            {/* GitHub Stars */}
            <div className="flex items-center gap-4 glass-card px-6 py-4 rounded-xl border border-white/10 hover:border-brand-purple/30 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-light-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-brand">8K</div>
                <div className="text-sm text-text-secondary">{t("stats.githubStars")}</div>
              </div>
            </div>

            {/* 全球站点部署 */}
            <div className="flex items-center gap-4 glass-card px-6 py-4 rounded-xl border border-white/10 hover:border-brand-pink/30 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-warm">2000+</div>
                <div className="text-sm text-text-secondary">{t("stats.globalDeployments")}</div>
              </div>
            </div>

            {/* 商业用户 */}
            <div className="flex items-center gap-4 glass-card px-6 py-4 rounded-xl border border-white/10 hover:border-brand-light-purple/30 transition-all duration-300 group hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-light-purple to-brand-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text-brand">300+</div>
                <div className="text-sm text-text-secondary">{t("stats.enterpriseUsers")}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}