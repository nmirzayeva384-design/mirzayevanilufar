import React from 'react';
import { Leaf, Lock, LogOut } from 'lucide-react';
import { Language } from '../types';
import { AUTHOR_INFO } from '../config/constants';
import { UI_TEXT, tText } from '../i18n/ui';

interface FooterProps {
  lang: Language;
  isAdmin: boolean;
  onAdminButtonClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, isAdmin, onAdminButtonClick }) => {
  const t = UI_TEXT[lang];

  return (
    <footer className="border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B1220] py-12 print-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-slate-200/70 dark:border-slate-800/70">
          {/* Brand & Author Info */}
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white shadow-xs">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                EcoEconomics
              </span>
              <span className="text-xs text-slate-400 font-mono-num">
                · {AUTHOR_INFO.academicYear}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {tText(AUTHOR_INFO.preparedBy, lang)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {tText(AUTHOR_INFO.department, lang)}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#topics" className="hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap">
              {t.navTopics}
            </a>
            <a href="#climate" className="hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap">
              {t.navClimate}
            </a>
            <a href="#glossary" className="hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap">
              {t.navGlossary}
            </a>
            <a href="#quiz" className="hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap">
              {t.navQuiz}
            </a>
            <a href="#references" className="hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap">
              {t.navReferences}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>{t.footerRights}</p>

          {/* Subtle Instructor Mode Button */}
          <button
            type="button"
            onClick={onAdminButtonClick}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap shrink-0 transition-colors self-start sm:self-auto ${
              isAdmin
                ? 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {isAdmin ? <LogOut className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{isAdmin ? t.adminToggleLogout : t.adminToggleLogin}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
