"use client";

import { useTranslations } from "next-intl";

const features = [
  {
    key: "engines",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    ),
    gradient: "from-brand-purple to-brand-light-purple",
    glowClass: "glow-brand",
    borderColor: "border-brand-purple/20"
  },
  {
    key: "hardware", 
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    gradient: "from-brand-pink to-brand-orange",
    glowClass: "glow-warm",
    borderColor: "border-brand-pink/20"
  },
  {
    key: "performance",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
    ), 
    gradient: "from-brand-orange to-brand-pink",
    glowClass: "glow-warm",
    borderColor: "border-brand-orange/20"
  },
  {
    key: "models",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
    gradient: "from-brand-light-purple to-brand-purple",
    glowClass: "glow-accent",
    borderColor: "border-brand-light-purple/20"
  },
  {
    key: "enterprise",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zm-6 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zm-6 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10z" clipRule="evenodd" />
      </svg>
    ),
    gradient: "from-brand-purple to-brand-pink",
    glowClass: "glow-brand",
    borderColor: "border-brand-purple/20"
  },
  {
    key: "concurrency",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    gradient: "from-brand-orange to-brand-light-purple",
    glowClass: "glow-accent",
    borderColor: "border-brand-orange/20"
  }
];

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="pt-12 pb-20 bg-gradient-to-b from-dark-bg to-dark-bg/95 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-purple/20 to-brand-light-purple/10 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-brand-pink/15 to-brand-orange/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brand-light-purple text-sm font-semibold uppercase tracking-wider bg-brand-purple/10 px-4 py-2 rounded-full border border-brand-purple/20">
              {t("section.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text-brand">
            {t("section.title")}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {t("section.description")}
          </p>
        </div>
        
        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.key} 
              className="group bg-dark-card rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* 图标 */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* 标题 */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:gradient-text-brand transition-all duration-300">
                  {t(`${feature.key}.title`)}
                </h3>
                
                {/* 描述 */}
                <p className="text-text-secondary leading-relaxed text-base">
                  {t(`${feature.key}.description`)}
                </p>
                
                {/* 悬停效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 底部CTA */}
        <div className="text-center mt-16">
          <div className="bg-dark-card rounded-2xl p-6 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-xl font-bold gradient-text-warm mb-3">
              {t("cta.title")}
            </h3>
            <p className="text-text-secondary mb-5">
              {t("cta.description")}
            </p>
            <button className="btn-brand px-6 py-2.5 rounded-full font-semibold">
              {t("cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}