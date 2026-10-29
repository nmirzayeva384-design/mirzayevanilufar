import React, { useEffect, useState } from 'react';
import { Search, Sun, Moon, Menu, X, Leaf } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../i18n/ui';

interface NavbarProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onChangeLang,
  isDark,
  onToggleTheme,
  onOpenSearch,
}) => {
  const t = UI_TEXT[lang];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(Math.min(1, Math.max(0, scrollTop / docHeight)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#topics', label: t.navTopics },
    { href: '#climate', label: t.navClimate },
    { href: '#glossary', label: t.navGlossary },
    { href: '#quiz', label: t.navQuiz },
    { href: '#references', label: t.navReferences },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-[#0B1220]/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors no-print">
      {/* Reading progress bar (compositor-only scaleX) */}
      <div className="h-0.5 w-full bg-transparent overflow-hidden" aria-hidden="true">
        <div
          className="h-full w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500 origin-left transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
        >
          <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>EcoEconomics</span>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 hover:text-emerald-600 dark:hover:text-emerald-400 border-b-2 border-transparent hover:border-emerald-500 transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Search, Language Switcher & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label={t.openCommandPalette}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span className="hidden sm:inline">{t.searchPlaceholder}</span>
          </button>

          {/* Language segmented control */}
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800/90 rounded-lg border border-slate-200/70 dark:border-slate-700/70 shrink-0"
          >
            {languages.map((item) => {
              const active = lang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onChangeLang(item.code)}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? t.toggleThemeLight : t.toggleThemeDark}
            title={isDark ? t.toggleThemeLight : t.toggleThemeDark}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform duration-200 rotate-0" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-200 rotate-0" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md px-4 py-3">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
