"use client";

import { useTranslations } from "next-intl";

export function PricingSection() {
  const t = useTranslations();

  const handleGetStarted = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScQpR8WuKxFFMzWMNRQmO-AqueghbAaeG3F-4vzUqkXqTN6Qg/viewform?usp=dialog",
      "_blank"
    );
  };

  const handleOpenSourceGetStarted = () => {
    window.open(
      "https://github.com/xorbitsai/inference",
      "_blank"
    );
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-dark-bg to-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-text-primary mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch justify-center">
          {/* Open Source */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 relative w-full lg:w-80 flex-shrink-0 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-text-primary mb-2">
                {t("pricing.plans.opensource.name")}
              </h3>
              <div className="text-4xl font-bold text-brand-purple mb-2">
                {t("pricing.plans.opensource.price")}
              </div>
              <p className="text-dark-text-secondary mb-6">
                {t("pricing.plans.opensource.description")}
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {["feature1", "feature2", "feature3", "feature4", "feature5"].map((feature) => (
                <li key={feature} className="flex items-center text-dark-text-secondary">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t(`pricing.plans.opensource.features.${feature}`)}
                </li>
              ))}
            </ul>
            
            <button
              onClick={handleOpenSourceGetStarted}
              className="w-full bg-border text-text-primary py-3 px-6 rounded-lg font-semibold hover:bg-border/80 transition-colors mt-auto"
            >
              {t("pricing.plans.opensource.cta")}
            </button>
          </div>

          {/* Cluster - 放在中间 */}
          <div className="bg-dark-card border-2 border-brand-purple rounded-2xl p-8 relative transform lg:scale-110 w-full lg:w-80 flex-shrink-0 flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-brand-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                {t("pricing.popular")}
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-text-primary mb-2">
                {t("pricing.plans.cluster.name")}
              </h3>
              <div className="text-4xl font-bold text-brand-purple mb-2">
                {t("pricing.plans.cluster.price")}
              </div>
              <p className="text-dark-text-secondary mb-6">
                {t("pricing.plans.cluster.description")}
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {["feature1", "feature2", "feature3", "feature4", "feature5", "feature6", "feature7"].map((feature) => (
                <li key={feature} className="flex items-center text-dark-text-secondary">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t(`pricing.plans.cluster.features.${feature}`)}
                </li>
              ))}
            </ul>
            
            <button
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-primary to-purple-600 text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:from-primary/90 hover:to-purple-600/90 transition-colors mt-auto"
            >
              {t("pricing.plans.cluster.cta")}
            </button>
          </div>

          {/* Single Machine */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 relative w-full lg:w-80 flex-shrink-0 flex flex-col">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-text-primary mb-2">
                {t("pricing.plans.single.name")}
              </h3>
              <div className="text-4xl font-bold text-brand-purple mb-2">
                {t("pricing.plans.single.price")}
              </div>
              <p className="text-dark-text-secondary mb-6">
                {t("pricing.plans.single.description")}
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {["feature1", "feature2", "feature3", "feature4", "feature5", "feature6"].map((feature) => (
                <li key={feature} className="flex items-center text-dark-text-secondary">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t(`pricing.plans.single.features.${feature}`)}
                </li>
              ))}
            </ul>
            
            <button
              onClick={handleGetStarted}
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-auto"
            >
              {t("pricing.plans.single.cta")}
            </button>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-4">
            {t("pricing.contact.description")}
          </p>
          <button
            onClick={handleGetStarted}
            className="text-primary hover:text-primary/80 font-semibold"
          >
            {t("pricing.contact.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}