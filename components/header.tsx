"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-brand-purple/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/images/Xinference.svg" 
                alt="Xinference" 
                width={140} 
                height={45}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="relative text-sm font-medium text-text-secondary hover:text-brand-light-purple transition-all duration-300 group">
              <span className="relative z-10">{t("nav.features")}</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-brand-purple to-brand-light-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a href="#pricing" className="relative text-sm font-medium text-text-secondary hover:text-brand-pink transition-all duration-300 group">
              <span className="relative z-10">{t("nav.pricing")}</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-brand-pink to-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a href="https://inference.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="relative text-sm font-medium text-text-secondary hover:text-brand-orange transition-all duration-300 group">
              <span className="relative z-10">{t("nav.docs")}</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-brand-orange to-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}