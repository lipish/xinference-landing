"use client";

import { useTranslations } from "next-intl";

const features = [
  {
    key: "models",
    icon: "🤖",
    gradient: "from-xinference-blue to-xinference-gradient-end"
  },
  {
    key: "hardware", 
    icon: "🔧",
    gradient: "from-xinference-blue to-xinference-gradient-end"
  },
  {
    key: "ecosystem",
    icon: "🌐", 
    gradient: "from-xinference-blue to-xinference-gradient-end"
  },
  {
    key: "engines",
    icon: "⚡",
    gradient: "from-xinference-blue to-xinference-gradient-end"
  },
  {
    key: "performance",
    icon: "🚀",
    gradient: "from-xinference-blue to-xinference-gradient-end"
  },
  {
    key: "enterprise",
    icon: "🏢",
    gradient: "from-xinference-blue to-xinference-gradient-end"
  }
];

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-radial from-xinference-blue/5 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 gradient-text inline-block">
            产品特性
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            全方位的AI推理服务解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.key} 
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-xinference-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-xinference-blue/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-xinference-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} text-white text-2xl mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-xinference-blue transition-colors duration-300">
                  {t(`${feature.key}.title`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}