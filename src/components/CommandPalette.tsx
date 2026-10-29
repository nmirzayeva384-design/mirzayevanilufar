import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Search, X, BookOpen, Scale, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TOPICS } from '../data/topics';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { UI_TEXT, tText } from '../i18n/ui';
import { TopicDetailTab } from './TopicDetailModal';

interface CommandPaletteProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onSelectTopic: (topicId: number, tab?: TopicDetailTab) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  lang,
  onClose,
  onSelectTopic,
}) => {
  const t = UI_TEXT[lang];
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matchedTopics = TOPICS.filter((topic) => {
      if (!q) return topic.id <= 5;
      const title = tText(topic.title, lang).toLowerCase();
      const desc = tText(topic.shortDescription, lang).toLowerCase();
      const kw = (topic.keywords[lang] || []).join(' ').toLowerCase();
      return title.includes(q) || desc.includes(q) || kw.includes(q) || String(topic.id) === q;
    }).slice(0, 6);

    const matchedTerms = GLOSSARY_ITEMS.filter((item) => {
      if (!q) return false;
      return (
        tText(item.term, lang).toLowerCase().includes(q) ||
        tText(item.definition, lang).toLowerCase().includes(q)
      );
    }).slice(0, 5);

    const allLaws = TOPICS.flatMap((topic) =>
      topic.laws.map((law) => ({
        law,
        topicId: topic.id,
      }))
    );

    const matchedLaws = allLaws
      .filter(({ law }) => {
        if (!q) return false;
        return (
          tText(law.title, lang).toLowerCase().includes(q) ||
          tText(law.codeAndDate, lang).toLowerCase().includes(q) ||
          tText(law.summary, lang).toLowerCase().includes(q)
        );
      })
      .slice(0, 5);

    return { matchedTopics, matchedTerms, matchedLaws };
  }, [query, lang]);

  const hasAnyResults =
    results.matchedTopics.length > 0 ||
    results.matchedTerms.length > 0 ||
    results.matchedLaws.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.16 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
          />

          {/* Dialog */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
              <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.cmdPlaceholder}
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono-num text-slate-500 dark:text-slate-400 shrink-0"
              >
                Esc
              </button>
            </div>

            {/* Results Body */}
            <div className="max-h-[65vh] overflow-y-auto p-3 space-y-5">
              {!hasAnyResults ? (
                <div className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                  {t.cmdNoResults}
                </div>
              ) : (
                <>
                  {/* Topics */}
                  {results.matchedTopics.length > 0 && (
                    <div>
                      <p className="px-2.5 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {t.cmdGroupTopics}
                      </p>
                      <div className="space-y-1">
                        {results.matchedTopics.map((topic) => (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => {
                              onSelectTopic(topic.id, 'content');
                              onClose();
                            }}
                            className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 flex items-center justify-between gap-3 transition-colors"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono-num text-xs font-bold flex items-center justify-center shrink-0">
                                {String(topic.id).padStart(2, '0')}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                  {tText(topic.title, lang)}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                  {tText(topic.shortDescription, lang)}
                                </p>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Glossary Terms */}
                  {results.matchedTerms.length > 0 && (
                    <div>
                      <p className="px-2.5 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {t.cmdGroupTerms}
                      </p>
                      <div className="space-y-1">
                        {results.matchedTerms.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              onSelectTopic(item.relatedTopicId, 'terms');
                              onClose();
                            }}
                            className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 flex items-center justify-between gap-3 transition-colors"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <Sparkles className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                  {tText(item.term, lang)}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                  {tText(item.definition, lang)}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-mono-num text-slate-400 shrink-0">
                              #{item.relatedTopicId}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Laws */}
                  {results.matchedLaws.length > 0 && (
                    <div>
                      <p className="px-2.5 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {t.cmdGroupLaws}
                      </p>
                      <div className="space-y-1">
                        {results.matchedLaws.map(({ law, topicId }) => (
                          <button
                            key={law.id}
                            type="button"
                            onClick={() => {
                              onSelectTopic(topicId, 'laws');
                              onClose();
                            }}
                            className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 flex items-center justify-between gap-3 transition-colors"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <Scale className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                  {tText(law.title, lang)}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                  {tText(law.codeAndDate, lang)}
                                </p>
                              </div>
                            </div>
                            <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer Hint */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>EcoEconomics · Ctrl+K</span>
              <span>{t.cmdCloseHint}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
