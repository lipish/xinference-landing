"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const locales = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
];

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export default function NavLanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((loc) => loc.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      // 如果路径包含当前语言，则替换为新语言
      if (pathname.startsWith(`/${locale}`)) {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.replace(newPath);
      } else {
        // 否则直接跳转到新语言的根路径
        router.replace(`/${newLocale}`);
      }
    });
    setIsOpen(false);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors border border-transparent
          ${
            variant === "light"
              ? "text-gray-700 hover:text-[#9c27b0] hover:bg-[#9c27b0]/5 hover:border-[#9c27b0]/20"
              : "text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/20"
          } ${isPending ? "opacity-50" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
      >
        <span className="mr-1 text-lg">{currentLocale.flag}</span>
        <span className="hidden md:inline text-sm font-medium">{currentLocale.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 overflow-hidden
          ${
            variant === "light"
              ? "bg-white border border-gray-100"
              : "bg-gray-800 border border-gray-700"
          }`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((loc) => (
              <button
                key={loc.code}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors
                  ${
                    variant === "light"
                      ? locale === loc.code
                        ? "text-[#9c27b0] bg-[#9c27b0]/5 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#9c27b0]"
                      : locale === loc.code
                      ? "text-[#7c4dff] bg-[#9c27b0]/10 font-medium"
                      : "text-gray-200 hover:bg-gray-800 hover:text-white"
                  }`}
                onClick={() => onSelectChange(loc.code)}
                role="menuitem"
                disabled={isPending}
              >
                <span className="mr-3 text-lg">{loc.flag}</span>
                {loc.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}