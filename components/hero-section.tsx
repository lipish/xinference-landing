"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden bg-grid pt-32">
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
                <span className="gradient-text-brand">Deploy AI Models</span>
                <br />
                <span className="gradient-text-warm">Fast And Seamless</span>
                <br />
                <span className="text-text-primary">Enterprise Ready</span>
              </h1>
            </div>
            
            {/* 副标题 */}
            <p className="text-xl sm:text-2xl text-text-secondary mb-12 leading-relaxed max-w-4xl mx-auto animate-fadeIn animate-delay-200">
              {t("subtitle")}
            </p>
            
            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeIn animate-delay-400">
              <Button size="lg" className="btn-brand text-lg px-10 py-4 rounded-full font-semibold">
                Request Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-full border-2 border-brand-purple/30 text-brand-light-purple hover:bg-brand-purple/10 glow-accent transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* 特性展示区域 */}
          <div className="relative animate-slideUp animate-delay-600">
            {/* 主要展示卡片 */}
            <div className="glass-card rounded-3xl p-8 mb-12">
              <div className="relative">
                {/* 模拟界面展示 */}
                <div className="bg-dark-card rounded-2xl p-6 border border-dark-border">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-text-secondary text-sm">Xinference Dashboard</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-dark-surface rounded-xl p-4 border border-brand-purple/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-light-purple rounded-lg mb-3"></div>
                      <h4 className="text-brand-light-purple font-semibold mb-2">模型管理</h4>
                      <p className="text-text-muted text-sm">统一管理各类AI模型</p>
                    </div>
                    <div className="bg-dark-surface rounded-xl p-4 border border-brand-pink/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-pink to-brand-orange rounded-lg mb-3"></div>
                      <h4 className="text-brand-pink font-semibold mb-2">推理服务</h4>
                      <p className="text-text-muted text-sm">高性能推理引擎</p>
                    </div>
                    <div className="bg-dark-surface rounded-xl p-4 border border-brand-orange/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-brand-pink rounded-lg mb-3"></div>
                      <h4 className="text-brand-orange font-semibold mb-2">API接口</h4>
                      <p className="text-text-muted text-sm">标准化API调用</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 底部特性标签 */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="glass px-4 py-2 rounded-full text-brand-light-purple border border-brand-purple/20">🚀 高性能</span>
              <span className="glass px-4 py-2 rounded-full text-brand-pink border border-brand-pink/20">🔧 易部署</span>
              <span className="glass px-4 py-2 rounded-full text-brand-orange border border-brand-orange/20">📊 可监控</span>
              <span className="glass px-4 py-2 rounded-full text-text-secondary border border-dark-border">🔒 安全可靠</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}