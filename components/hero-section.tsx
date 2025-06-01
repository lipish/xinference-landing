"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 hero-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight animate-fadeIn gradient-text">
              {t("title")}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeIn animate-delay-200">
              {t("subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn animate-delay-400">
              <Button size="lg" className="text-lg px-8 py-4 bg-xinference-blue hover:bg-xinference-darkblue text-white">
                {t("description")}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-xinference-blue text-xinference-blue hover:bg-xinference-blue/10">
                查看演示
              </Button>
            </div>
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-slideUp animate-delay-600">
            <div className="absolute inset-0 dot-pattern rounded-2xl opacity-50"></div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-xinference-blue/5 to-xinference-gradient-end/5">
                  <h3 className="text-lg font-semibold text-xinference-blue mb-2">全面模型支持</h3>
                  <p className="text-gray-600">{t("features").split("、")[0]}</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-xinference-blue/5 to-xinference-gradient-end/5">
                  <h3 className="text-lg font-semibold text-xinference-blue mb-2">高性能推理</h3>
                  <p className="text-gray-600">{t("features").split("、")[1]}</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-xinference-blue/5 to-xinference-gradient-end/5">
                  <h3 className="text-lg font-semibold text-xinference-blue mb-2">企业级可用性</h3>
                  <p className="text-gray-600">{t("features").split("、")[2]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-xinference-gradient-end/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-xinference-blue/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
    </section>
  );
}