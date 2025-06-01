"use client";

import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const locales = [
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
];

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find(loc => loc.code === locale) || locales[0];

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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors border border-transparent
          ${variant === 'light' 
            ? 'text-gray-700 hover:text-[#0078E7] hover:bg-[#0078E7]/5 hover:border-[#0078E7]/20' 
            : 'text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/20'
          }`}
        onClick={() => setIsOpen(!isOpen)}
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
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 overflow-hidden
          ${variant === 'light' ? 'bg-white border border-gray-100' : 'bg-gray-800 border border-gray-700'}`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((loc) => (
              <a
                key={loc.code}
                href={`/${loc.code}`}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors
                  ${variant === 'light'
                    ? locale === loc.code 
                      ? 'text-[#0078E7] bg-[#0078E7]/5 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#0078E7]'
                    : locale === loc.code
                      ? 'text-[#0078E7] bg-[#0078E7]/10 font-medium'
                      : 'text-gray-200 hover:bg-gray-700 hover:text-white'
                  }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                <span className="mr-3 text-lg">{loc.flag}</span>
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
