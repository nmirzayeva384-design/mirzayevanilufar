import React, { useEffect, useMemo, useState } from 'react';
import { Search, ArrowUpRight, X } from 'lucide-react';
import { GlossaryItem, Language } from '../types';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { UI_TEXT, tText } from '../i18n/ui';

interface GlossarySectionProps {
  lang: Language;
  onOpenTopic: (topicId: number) => void;
}

type CategoryFilter = 'all' | GlossaryItem['category'];

export const GlossarySection: React.FC<GlossarySectionProps> = ({ lang, onOpenTopic }) => {
  const t = UI_TEXT[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');

  // Reset letter filter when language changes so Cyrillic/Latin letters never mismatch
  useEffect(() => {
    setSelectedLetter('ALL');
  }, [lang]);

  const sortedItems = useMemo(() => {
    return [...GLOSSARY_ITEMS].sort((a, b) =>
      tText(a.term, lang).localeCompare(tText(b.term, lang), lang === 'ru' ? 'ru' : 'en')
    );
  }, [lang]);

  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    sortedItems.forEach((item) => {
      const termStr = tText(item.term, lang).trim();
      if (termStr.length > 0) {
        set.add(termStr[0].toUpperCase());
      }
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, lang === 'ru' ? 'ru' : 'en'));
  }, [sortedItems, lang]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return sortedItems.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      const termStr = tText(item.term, lang);
      if (selectedLetter !== 'ALL' && termStr.trim()[0]?.toUpperCase() !== selectedLetter) {
        return false;
      }
      if (!q) return true;
      const defStr = tText(item.definition, lang);
      return termStr.toLowerCase().includes(q) || defStr.toLowerCase().includes(q);
    });
  }, [sortedItems, selectedCategory, selectedLetter, searchQuery, lang]);

  const categoryLabels: Record<CategoryFilter, string> = {
    all: t.glossaryCatAll,
    economics: t.glossaryCatEconomics,
    climate: t.glossaryCatClimate,
    resources: t.glossaryCatResources,
    policy: t.glossaryCatPolicy,
    ecology: t.glossaryCatEcology,
  };

  const categoryAccent: Record<GlossaryItem['category'], string> = {
    economics: 'text-emerald-600 dark:text-emerald-400',
    climate: 'text-sky-600 dark:text-sky-400',
    resources: 'text-amber-600 dark:text-amber-400',
    policy: 'text-indigo-600 dark:text-indigo-400',
    ecology: 'text-teal-600 dark:text-teal-400',
  };

  return (
    <section
      id="glossary"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            {t.glossaryKicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.glossaryTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.glossarySubtitle}
          </p>
        </div>

        {/* Controls: Search + Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="relative w-full lg:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.glossarySearchPlaceholder}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {(Object.keys(categoryLabels) as CategoryFilter[]).map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-[#131C2E] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Alphabetical Bar */}
        <div className="flex items-center gap-1.5 flex-wrap mb-8 p-2 rounded-2xl bg-slate-100/80 dark:bg-[#131C2E]/80 border border-slate-200/70 dark:border-slate-800/80">
          <button
            type="button"
            onClick={() => setSelectedLetter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
              selectedLetter === 'ALL'
                ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
            }`}
          >
            {t.glossaryAllLetters}
          </button>
          {availableLetters.map((letter) => {
            const active = selectedLetter === letter;
            return (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(letter)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold font-mono-num flex items-center justify-center shrink-0 transition-colors ${
                  active
                    ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Glossary Grid */}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 p-10 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{t.cmdNoResults}</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLetter('ALL');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
            >
              {t.resetFiltersBtn}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800/90 p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <span className={`font-semibold ${categoryAccent[item.category]}`}>
                      {categoryLabels[item.category]}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 font-mono-num">
                      #{String(item.relatedTopicId).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {tText(item.term, lang)}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tText(item.definition, lang)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenTopic(item.relatedTopicId)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 whitespace-nowrap shrink-0 transition-colors"
                  >
                    <span>
                      {t.glossaryRelatedTopic}: #{item.relatedTopicId}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
