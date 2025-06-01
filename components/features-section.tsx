"use client";

import { useTranslations } from "next-intl";

const features = [
  {
    key: "engines",
    icon: "💻",
    gradient: "from-brand-purple to-brand-light-purple",
    glowClass: "glow-brand",
    borderColor: "border-brand-purple/20"
  },
  {
    key: "hardware", 
    icon: "⚙️",
    gradient: "from-brand-pink to-brand-orange",
    glowClass: "glow-warm",
    borderColor: "border-brand-pink/20"
  },
  {
    key: "performance",
    icon: "🚀", 
    gradient: "from-brand-orange to-brand-pink",
    glowClass: "glow-warm",
    borderColor: "border-brand-orange/20"
  },
  {
    key: "models",
    icon: "📦",
    gradient: "from-brand-light-purple to-brand-purple",
    glowClass: "glow-accent",
    borderColor: "border-brand-light-purple/20"
  },
  {
    key: "enterprise",
    icon: "🏢",
    gradient: "from-brand-purple to-brand-pink",
    glowClass: "glow-brand",
    borderColor: "border-brand-purple/20"
  },
  {
    key: "concurrency",
    icon: "📈",
    gradient: "from-brand-orange to-brand-light-purple",
    glowClass: "glow-accent",
    borderColor: "border-brand-orange/20"
  }
];

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="pt-16 pb-32 bg-gradient-to-b from-dark-bg to-dark-bg/95 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-purple/20 to-brand-light-purple/10 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-brand-pink/15 to-brand-orange/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-brand-light-purple text-sm font-semibold uppercase tracking-wider bg-brand-purple/10 px-4 py-2 rounded-full border border-brand-purple/20">
              {t("section.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text-brand">
            {t("section.title")}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t("section.description")}
          </p>
        </div>
        
        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.key} 
              className="group bg-dark-card rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* 图标 */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white text-3xl mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* 标题 */}
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:gradient-text-brand transition-all duration-300">
                  {t(`${feature.key}.title`)}
                </h3>
                
                {/* 描述 */}
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t(`${feature.key}.description`)}
                </p>
                
                {/* 悬停效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 底部CTA */}
        <div className="text-center mt-20">
          <div className="bg-dark-card rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold gradient-text-warm mb-4">
              {t("cta.title")}
            </h3>
            <p className="text-text-secondary mb-6">
              {t("cta.description")}
            </p>
            <button className="btn-brand px-8 py-3 rounded-full font-semibold">
              {t("cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}