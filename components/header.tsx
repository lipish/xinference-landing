"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">
                {t("title")}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-xinference-blue transition-colors">
              {t("nav.features")}
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-xinference-blue transition-colors">
              {t("nav.pricing")}
            </a>
            <a href="#docs" className="text-sm font-medium text-gray-700 hover:text-xinference-blue transition-colors">
              {t("nav.docs")}
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-xinference-blue transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          {/* CTA & Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-xinference-blue text-xinference-blue hover:bg-xinference-blue/10">
                {t("cta.enterprise")}
              </Button>
              <Button variant="outline" size="sm" className="border-xinference-blue text-xinference-blue hover:bg-xinference-blue/10">
                {t("cta.compare")}
              </Button>
              <Button size="sm" className="bg-xinference-blue hover:bg-xinference-darkblue text-white">
                {t("cta.partner")}
              </Button>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}