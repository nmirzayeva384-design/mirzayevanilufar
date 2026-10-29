import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Search,
  Check,
  Bookmark,
  Download,
  ArrowUpRight,
  Calendar,
  Users,
  X,
} from 'lucide-react';
import { Language, Topic, TopicScheduleMap } from '../types';
import { UI_TEXT, tText } from '../i18n/ui';
import { renderTopicIcon } from '../utils/topicIcons';
import { exportSchedulesToCsv } from '../utils/exportCsv';

interface TopicsSectionProps {
  topics: Topic[];
  lang: Language;
  completedTopics: number[];
  onToggleCompleted: (id: number) => void;
  bookmarkedTopics: number[];
  onToggleBookmark: (id: number) => void;
  schedules: TopicScheduleMap;
  onUpdateSchedule: (topicId: number, field: 'date' | 'group', value: string) => void;
  isAdmin: boolean;
  onOpenTopic: (id: number) => void;
}

type FilterMode = 'all' | 'completed' | 'uncompleted' | 'bookmarked';

export const TopicsSection: React.FC<TopicsSectionProps> = ({
  topics,
  lang,
  completedTopics,
  onToggleCompleted,
  bookmarkedTopics,
  onToggleBookmark,
  schedules,
  onUpdateSchedule,
  isAdmin,
  onOpenTopic,
}) => {
  const t = UI_TEXT[lang];
  const prefersReducedMotion = Boolean(useReducedMotion());

  const [filter, setFilter] = useState<FilterMode>('all');
  const [query, setQuery] = useState('');

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics.filter((topic) => {
      const isDone = completedTopics.includes(topic.id);
      const isSaved = bookmarkedTopics.includes(topic.id);

      if (filter === 'completed' && !isDone) return false;
      if (filter === 'uncompleted' && isDone) return false;
      if (filter === 'bookmarked' && !isSaved) return false;

      if (!q) return true;

      const titleMatch = tText(topic.title, lang).toLowerCase().includes(q);
      const descMatch = tText(topic.shortDescription, lang).toLowerCase().includes(q);
      const kwMatch = topic.keywords[lang].some((kw) => kw.toLowerCase().includes(q));
      const numMatch = String(topic.id) === q;

      return titleMatch || descMatch || kwMatch || numMatch;
    });
  }, [topics, completedTopics, bookmarkedTopics, filter, query, lang]);

  const progressRatio = Math.min(1, completedTopics.length / topics.length);

  const filterButtons: { key: FilterMode; label: string; count: number }[] = [
    { key: 'all', label: t.filterAll, count: topics.length },
    { key: 'completed', label: t.filterCompleted, count: completedTopics.length },
    { key: 'uncompleted', label: t.filterUncompleted, count: topics.length - completedTopics.length },
    { key: 'bookmarked', label: t.filterBookmarked, count: bookmarkedTopics.length },
  ];

  return (
    <section
      id="topics"
      className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Overall Progress Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
              {t.topicsKicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              {t.topicsTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.topicsSubtitle}
            </p>
          </div>

          {/* Completion Progress Readout */}
          <div className="w-full lg:w-80 rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shrink-0">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">
              <span>{t.progressLabel}</span>
              <span className="font-mono-num font-semibold text-slate-900 dark:text-white">
                {completedTopics.length}/{topics.length} {t.completedCountSuffix}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full w-full bg-gradient-to-r from-emerald-500 to-sky-500 origin-left transition-transform duration-300 ease-out"
                style={{ transform: `scaleX(${progressRatio})` }}
              />
            </div>
          </div>
        </div>

        {/* Instructor Mode Active Notice & CSV Export */}
        {isAdmin && (
          <div className="mb-6 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/70 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm font-medium text-amber-900 dark:text-amber-200">
              {t.adminActiveBanner}
            </p>
            <button
              type="button"
              onClick={() => exportSchedulesToCsv(topics, schedules, lang, t.notAssigned)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.exportScheduleCsv}</span>
            </button>
          </div>
        )}

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-[#131C2E] border border-slate-200/70 dark:border-slate-800 rounded-xl overflow-x-auto">
            {filterButtons.map((btn) => {
              const active = filter === btn.key;
              return (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setFilter(btn.key)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{btn.label}</span>
                  <span className="ml-1.5 font-mono-num text-[11px] opacity-75">
                    ({btn.count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.topicSearchPlaceholder}
                className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {!isAdmin && (
              <button
                type="button"
                onClick={() => exportSchedulesToCsv(topics, schedules, lang, t.notAssigned)}
                title={t.exportScheduleCsv}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden sm:inline">CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* 15 Topics Grid */}
        {filteredTopics.length === 0 ? (
          <div className="rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 p-12 text-center">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4">
              {t.noTopicsFound}
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('all');
                setQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              {t.resetFiltersBtn}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, idx) => {
              const isDone = completedTopics.includes(topic.id);
              const isBookmarked = bookmarkedTopics.includes(topic.id);
              const schedule = schedules[topic.id];
              const formattedNum = String(topic.id).padStart(2, '0');

              return (
                <motion.article
                  key={topic.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.32,
                    delay: prefersReducedMotion ? 0 : (idx % 6) * 0.04,
                  }}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <div>
                    {/* Top Row: Gradient Topic Number + Icon */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="font-mono-num text-3xl font-bold bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-500 dark:from-emerald-400 dark:via-teal-300 dark:to-sky-400 bg-clip-text text-transparent select-none">
                        {formattedNum}
                        {topic.isIndependentStudy ? '*' : ''}
                      </span>

                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shrink-0">
                        {renderTopicIcon(topic.iconName, 'w-5 h-5')}
                      </div>
                    </div>

                    {/* Clean Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      {topic.isIndependentStudy && (
                        <>
                          <span className="font-semibold text-amber-600 dark:text-amber-400">
                            {t.independentStudyLabel}
                          </span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <span>{t.tagStatistics}</span>
                      <span aria-hidden="true">·</span>
                      <span>{t.tagLaws}</span>
                    </div>

                    {/* Title & Short Description */}
                    <h3
                      onClick={() => onOpenTopic(topic.id)}
                      className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer leading-snug mb-2"
                    >
                      {tText(topic.title, lang)}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {tText(topic.shortDescription, lang)}
                    </p>
                  </div>

                  {/* Schedule Metadata & Card Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/90 space-y-3.5">
                    {isAdmin ? (
                      <div
                        className="grid grid-cols-2 gap-2.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <label className="block">
                          <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                            {t.scheduleDateLabel}
                          </span>
                          <input
                            type="date"
                            value={schedule?.date || ''}
                            onChange={(e) => onUpdateSchedule(topic.id, 'date', e.target.value)}
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono-num focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </label>
                        <label className="block">
                          <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                            {t.scheduleGroupLabel}
                          </span>
                          <input
                            type="text"
                            value={schedule?.group || ''}
                            placeholder="IQ-301"
                            onChange={(e) => onUpdateSchedule(topic.id, 'group', e.target.value)}
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </label>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{t.scheduleDateLabel}:</span>
                          <span className="font-mono-num font-medium text-slate-700 dark:text-slate-200">
                            {schedule?.date?.trim() ? schedule.date : t.notAssigned}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{t.scheduleGroupLabel}:</span>
                          <span className="font-medium text-slate-700 dark:text-slate-200">
                            {schedule?.group?.trim() ? schedule.group : t.notAssigned}
                          </span>
                        </span>
                      </div>
                    )}

                    {/* Bottom Action Controls */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onToggleCompleted(topic.id)}
                          aria-pressed={isDone}
                          title={isDone ? t.markAsUnread : t.markAsRead}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            isDone
                              ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80'
                          }`}
                        >
                          <Check className={`w-3.5 h-3.5 ${isDone ? 'opacity-100' : 'opacity-50'}`} />
                          <span>{t.markAsRead}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onToggleBookmark(topic.id)}
                          aria-pressed={isBookmarked}
                          aria-label={isBookmarked ? t.bookmarkRemove : t.bookmarkAdd}
                          title={isBookmarked ? t.bookmarkRemove : t.bookmarkAdd}
                          className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors shrink-0 cursor-pointer ${
                            isBookmarked
                              ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30'
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                          }`}
                        >
                          <Bookmark
                            className="w-3.5 h-3.5"
                            fill={isBookmarked ? 'currentColor' : 'none'}
                          />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenTopic(topic.id)}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{t.openTopicBtn}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
