import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import NavLanguageSwitcher from "../../components/nav-language-switcher";

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const currentLocale = useLocale();
  const t = useTranslations("hero");
  const headerT = useTranslations("header");
  const footerT = useTranslations("footer");
  const featuresT = useTranslations("features");
  const openSourceT = useTranslations("openSource");
  const githubT = useTranslations("github");
  const navT = useTranslations("header.nav");
  const ctaT = useTranslations("header.cta");
  
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/favicon.png" 
                alt="Xinference Logo" 
                width={32} 
                height={32} 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold purple-gradient-text">Xinference</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-[#9c27b0] transition-colors">
              {navT("features")}
            </Link>
            <Link href="#models" className="text-gray-600 hover:text-[#9c27b0] transition-colors">
              {navT("models")}
            </Link>
            <Link href="https://inference.readthedocs.io/" className="text-gray-600 hover:text-[#9c27b0] transition-colors">
              {navT("docs")}
            </Link>
            <Link href="https://github.com/xorbitsai/inference" className="text-gray-600 hover:text-[#9c27b0] transition-colors">
              GitHub
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <NavLanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#9c27b0]/5 to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/Xinference.svg" 
              alt="Xinference" 
              width={300} 
              height={180} 
              className="h-44 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9c27b0] to-[#7c4dff] bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#f50057] to-[#ff4081] bg-clip-text text-transparent">
            {t("subtitle")}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="https://github.com/xorbitsai/inference" 
              className="px-8 py-3 bg-purple-gradient text-white rounded-lg hover:opacity-90 transition-colors"
            >
              {ctaT("enterprise")}
            </Link>
            <Link 
              href="https://inference.readthedocs.io/" 
              className="px-8 py-3 border border-[#9c27b0] text-[#9c27b0] rounded-lg hover:bg-[#9c27b0]/5 transition-colors"
            >
              {navT("docs")}
            </Link>
          </div>
          
          {/* 特性卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#9c27b0]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-gradient flex items-center justify-center text-white text-2xl mb-4">
                🤖
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{featuresT("models.title")}</h3>
              <p className="text-gray-600">{featuresT("models.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#f50057]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-red-gradient flex items-center justify-center text-white text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{featuresT("performance.title")}</h3>
              <p className="text-gray-600">{featuresT("performance.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#ff9800]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-orange-gradient flex items-center justify-center text-white text-2xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{featuresT("enterprise.title")}</h3>
              <p className="text-gray-600">{featuresT("enterprise.description")}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* GitHub 区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">{openSourceT("title")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {openSourceT("description")}
          </p>
          <div className="flex justify-center">
            <a 
              href="https://github.com/xorbitsai/inference" 
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>{githubT("star")}</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* 页脚 */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/images/favicon.png" 
                  alt="Xinference Logo" 
                  width={32} 
                  height={32} 
                  className="h-8 w-auto invert"
                />
                <span className="text-2xl font-bold text-white">Xinference</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="https://inference.readthedocs.io/" className="text-gray-300 hover:text-white transition-colors">{navT("docs")}</a>
              <a href="https://github.com/xorbitsai/inference" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
              <a href="https://github.com/xorbitsai/inference/issues" className="text-gray-300 hover:text-white transition-colors">{navT("contact")}</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex justify-center">
              <NavLanguageSwitcher variant="dark" />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>{footerT("copyright")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}