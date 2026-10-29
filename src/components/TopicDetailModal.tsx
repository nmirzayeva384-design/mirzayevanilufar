import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  X,
  Share2,
  Printer,
  ChevronLeft,
  ChevronRight,
  Check,
  Bookmark,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from 'lucide-react';
import { Language, Topic } from '../types';
import { UI_TEXT, tText } from '../i18n/ui';
import { renderTopicIcon } from '../utils/topicIcons';
import { TopicChartRenderer } from './TopicChartRenderer';

export type TopicDetailTab = 'content' | 'statistics' | 'laws' | 'facts' | 'terms' | 'quiz';

interface TopicDetailModalProps {
  topic: Topic | null;
  totalTopics: number;
  lang: Language;
  isDark: boolean;
  initialTab?: TopicDetailTab;
  isCompleted: boolean;
  onToggleCompleted: (id: number) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: number) => void;
  onClose: () => void;
  onNavigateTopic: (id: number) => void;
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  topic,
  totalTopics,
  lang,
  isDark,
  initialTab = 'content',
  isCompleted,
  onToggleCompleted,
  isBookmarked,
  onToggleBookmark,
  onClose,
  onNavigateTopic,
}) => {
  const t = UI_TEXT[lang];
  const prefersReducedMotion = Boolean(useReducedMotion());

  const [activeTab, setActiveTab] = useState<TopicDetailTab>(initialTab);
  const [copied, setCopied] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  // Reset tab and quiz answers when topic changes
  useEffect(() => {
    setActiveTab(initialTab);
    setQuizAnswers({});
    setCopied(false);
  }, [topic?.id, initialTab]);

  // Keyboard navigation: Esc closes, Left/Right switches topics
  useEffect(() => {
    if (!topic) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && topic.id > 1) {
        e.preventDefault();
        onNavigateTopic(topic.id - 1);
      } else if (e.key === 'ArrowRight' && topic.id < totalTopics) {
        e.preventDefault();
        onNavigateTopic(topic.id + 1);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [topic, totalTopics, onClose, onNavigateTopic]);

  if (!topic) return null;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#/topic/${topic.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback copy via temporary input
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const tabs: { key: TopicDetailTab; label: string }[] = [
    { key: 'content', label: t.tabContent },
    { key: 'statistics', label: t.tabStatistics },
    { key: 'laws', label: t.tabLaws },
    { key: 'facts', label: t.tabFacts },
    { key: 'terms', label: t.tabTerms },
    { key: 'quiz', label: t.tabQuiz },
  ];

  const lawTypeLabel = (type: 'uz_law' | 'presidential' | 'international') => {
    if (type === 'uz_law') return t.lawTypeUz;
    if (type === 'presidential') return t.lawTypePresidential;
    return t.lawTypeInternational;
  };

  const correctQuizCount = topic.quiz.reduce((acc, q) => {
    return quizAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto print-only-container"
      >
        {/* Backdrop */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/65 backdrop-blur-xs no-print"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden print-only-container"
        >
          {/* Sticky Modal Header */}
          <div className="px-5 sm:px-8 pt-5 pb-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#131C2E]/95">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3.5 max-w-3xl">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 no-print">
                  {renderTopicIcon(topic.iconName, 'w-5 h-5')}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-mono-num font-bold text-emerald-600 dark:text-emerald-400">
                      #{String(topic.id).padStart(2, '0')}
                    </span>
                    {topic.isIndependentStudy && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-amber-600 dark:text-amber-400">
                          {t.independentStudyLabel}
                        </span>
                      </>
                    )}
                  </div>
                  <h2
                    id="topic-modal-title"
                    className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug"
                  >
                    {tText(topic.title, lang)}
                  </h2>
                </div>
              </div>

              {/* Top Utility Buttons */}
              <div className="flex items-center gap-2 shrink-0 no-print">
                <button
                  type="button"
                  onClick={() => onToggleCompleted(topic.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.markAsRead}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleBookmark(topic.id)}
                  aria-label={t.bookmarkAdd}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? t.linkCopied : t.shareTopic}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{t.printPdf}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.closeModal}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 6 Segmented Tabs */}
            <div className="mt-4 flex items-center gap-1 p-1 bg-slate-100 dark:bg-[#0B1220] rounded-xl overflow-x-auto no-print">
              {tabs.map((tab) => {
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white dark:bg-[#131C2E] text-emerald-700 dark:text-emerald-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scrollable Body (Interactive Screen View) */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 sm:py-8 no-print">
            {/* TAB 1: CONTENT */}
            {activeTab === 'content' && (
              <div className="space-y-8 max-w-3xl">
                {topic.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {tText(sec.heading, lang)}
                    </h3>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-[15px] sm:text-base text-slate-700 dark:text-slate-300 leading-[1.72]"
                      >
                        {tText(p, lang)}
                      </p>
                    ))}
                    {sec.keyTakeaway && (
                      <div className="rounded-xl bg-emerald-50/70 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/25 p-4 sm:p-5">
                        <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                          {t.keyTakeawayLabel}
                        </p>
                        <p className="text-sm sm:text-[15px] font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                          {tText(sec.keyTakeaway, lang)}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: STATISTICS */}
            {activeTab === 'statistics' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {topic.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-50/90 dark:bg-[#0B1220]/80 border border-slate-200/90 dark:border-slate-800 p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                          <span className="font-mono-num text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                            {kpi.value}
                          </span>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {tText(kpi.unit, lang)}
                          </span>
                        </div>
                        <p className="mt-2.5 text-sm text-slate-700 dark:text-slate-200 leading-snug">
                          {tText(kpi.label, lang)}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <span>
                            {t.yearLabel}: <strong className="font-mono-num">{kpi.year}</strong>
                          </span>
                          {kpi.isApproximate && (
                            <span className="text-amber-600 dark:text-amber-400 font-medium">
                              {t.approxBadge}
                            </span>
                          )}
                        </div>
                        <p className="truncate" title={tText(kpi.source, lang)}>
                          {tText(kpi.source, lang)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {topic.charts.map((chart) => (
                    <TopicChartRenderer
                      key={chart.id}
                      chart={chart}
                      lang={lang}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: LAWS & TREATIES */}
            {activeTab === 'laws' && (
              <div className="space-y-5 max-w-4xl">
                {topic.laws.map((law) => (
                  <div
                    key={law.id}
                    className="rounded-2xl bg-slate-50/80 dark:bg-[#0B1220]/70 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 space-y-3"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-sky-700 dark:text-sky-400">
                        {lawTypeLabel(law.type)}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-num">{tText(law.codeAndDate, lang)}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {tText(law.title, lang)}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                          {t.lawSummaryLabel}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {tText(law.summary, lang)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                          {t.lawSignificanceLabel}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {tText(law.significance, lang)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: FACTS & CASE STUDY */}
            {activeTab === 'facts' && (
              <div className="space-y-8 max-w-4xl">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    {t.factsHeading}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {topic.facts.map((fact, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-slate-50/90 dark:bg-[#0B1220]/75 border border-slate-200 dark:border-slate-800 p-5"
                      >
                        <span className="font-mono-num text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-2">
                          0{idx + 1}
                        </span>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {tText(fact, lang)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Block */}
                <div className="rounded-2xl bg-slate-50/90 dark:bg-[#0B1220]/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-5">
                  <div>
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
                      {t.caseStudyHeading} · {tText(topic.caseStudy.location, lang)}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {tText(topic.caseStudy.title, lang)}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                        1. {t.caseChallenge}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {tText(topic.caseStudy.challenge, lang)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sky-700 dark:text-sky-400 mb-1.5">
                        2. {t.caseSolution}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {tText(topic.caseStudy.solution, lang)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1.5">
                        3. {t.caseOutcome}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {tText(topic.caseStudy.economicOutcome, lang)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: TERMS */}
            {activeTab === 'terms' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {topic.terms.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-50/90 dark:bg-[#0B1220]/75 border border-slate-200 dark:border-slate-800 p-5"
                  >
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {tText(item.term, lang)}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {tText(item.definition, lang)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 6: SELF-CHECK QUIZ (5 QUESTIONS) */}
            {activeTab === 'quiz' && (
              <div className="space-y-6 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.quizTopicHeading}
                  </h3>
                  {Object.keys(quizAnswers).length > 0 && (
                    <div className="flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 font-mono-num">
                        {t.quizScoreSummary}: {correctQuizCount} / {topic.quiz.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({})}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{t.quizRetryBtn}</span>
                      </button>
                    </div>
                  )}
                </div>

                {topic.quiz.map((q, qIdx) => {
                  const selected = quizAnswers[q.id];
                  const answered = selected !== undefined;
                  const isCorrect = selected === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl bg-slate-50/80 dark:bg-[#0B1220]/75 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-4"
                    >
                      <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                        <span className="font-mono-num text-emerald-600 dark:text-emerald-400 mr-2">
                          {qIdx + 1}.
                        </span>
                        {tText(q.question, lang)}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isThisSelected = selected === optIdx;
                          const isThisCorrectOption = optIdx === q.correctIndex;

                          let btnStyle =
                            'bg-white dark:bg-[#131C2E] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500/60';
                          if (answered) {
                            if (isThisCorrectOption) {
                              btnStyle =
                                'bg-emerald-50 dark:bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-200';
                            } else if (isThisSelected && !isThisCorrectOption) {
                              btnStyle =
                                'bg-red-50 dark:bg-red-500/15 border-red-500 text-red-900 dark:text-red-200';
                            } else {
                              btnStyle =
                                'bg-white/60 dark:bg-[#131C2E]/60 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={answered}
                              onClick={() =>
                                setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                              }
                              className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors flex items-center justify-between gap-3 ${
                                answered ? 'cursor-default' : 'cursor-pointer'
                              } ${btnStyle}`}
                            >
                              <span>{tText(opt, lang)}</span>
                              {answered && isThisCorrectOption && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              )}
                              {answered && isThisSelected && !isThisCorrectOption && (
                                <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {answered && (
                        <div
                          className={`rounded-xl p-4 text-xs sm:text-sm leading-relaxed border ${
                            isCorrect
                              ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200'
                              : 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200'
                          }`}
                        >
                          <strong className="mr-1.5">
                            {isCorrect ? t.quizCorrect : t.quizIncorrect}
                          </strong>
                          {tText(q.explanation, lang)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Dedicated Complete Print / PDF Layout (Visible only when printing) */}
          <div className="hidden print:block p-8 space-y-6 text-slate-900">
            {topic.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2 print-break-avoid">
                <h3 className="text-lg font-bold">{tText(sec.heading, lang)}</h3>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm leading-relaxed">
                    {tText(p, lang)}
                  </p>
                ))}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-300 print-break-avoid">
              <h3 className="text-lg font-bold mb-3">{t.tabStatistics}</h3>
              <div className="grid grid-cols-2 gap-3">
                {topic.kpis.map((kpi, idx) => (
                  <div key={idx} className="border border-slate-300 rounded-lg p-3">
                    <div className="font-bold text-base">
                      {kpi.value} {tText(kpi.unit, lang)} ({kpi.year})
                    </div>
                    <div className="text-xs">{tText(kpi.label, lang)}</div>
                    <div className="text-[11px] text-slate-600">
                      {t.sourceLabel}: {tText(kpi.source, lang)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-300 print-break-avoid">
              <h3 className="text-lg font-bold mb-3">{t.tabLaws}</h3>
              <div className="space-y-2">
                {topic.laws.map((law) => (
                  <div key={law.id} className="text-xs">
                    <strong>{tText(law.title, lang)}</strong> ({tText(law.codeAndDate, lang)}) —{' '}
                    {tText(law.summary, lang)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Modal Footer: Prev / Next Topic & Keyboard Hint */}
          <div className="px-5 sm:px-8 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0B1220]/90 flex flex-wrap items-center justify-between gap-4 no-print">
            <button
              type="button"
              disabled={topic.id <= 1}
              onClick={() => onNavigateTopic(topic.id - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t.prevTopic}</span>
            </button>

            <span className="hidden lg:inline text-xs text-slate-500 dark:text-slate-400">
              {t.keyboardHint}
            </span>

            <button
              type="button"
              disabled={topic.id >= totalTopics}
              onClick={() => onNavigateTopic(topic.id + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm font-semibold text-white disabled:opacity-40 transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed"
            >
              <span>{t.nextTopic}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
