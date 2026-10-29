import React, { useCallback, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Award,
  ArrowUpRight,
} from 'lucide-react';
import { Language, QuizQuestion } from '../types';
import { getAllQuizQuestions } from '../data/topics';
import { UI_TEXT, tText } from '../i18n/ui';

interface GeneralQuizSectionProps {
  lang: Language;
  onOpenTopic: (topicId: number) => void;
}

const QUIZ_LENGTH = 20;

function pickRandomQuestions(count: number): QuizQuestion[] {
  const pool = [...getAllQuizQuestions()];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

const CONFETTI_COLORS = ['#10B981', '#0EA5E9', '#F59E0B', '#34D399', '#38BDF8'];

export const GeneralQuizSection: React.FC<GeneralQuizSectionProps> = ({ lang, onOpenTopic }) => {
  const t = UI_TEXT[lang];
  const prefersReducedMotion = Boolean(useReducedMotion());

  const [questions, setQuestions] = useState<QuizQuestion[]>(() => pickRandomQuestions(QUIZ_LENGTH));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRegenerate = useCallback(() => {
    setQuestions(pickRandomQuestions(QUIZ_LENGTH));
    setCurrentIndex(0);
    setAnswers({});
    setIsSubmitted(false);
  }, []);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const scoreStats = useMemo(() => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) {
        correct += 1;
      }
    });
    const percentage = Math.round((correct / questions.length) * 100);
    return { correct, total: questions.length, percentage };
  }, [questions, answers]);

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const confettiPieces = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${4 + ((i * 93) % 92)}%`,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: (i % 7) * 0.06,
      xOffset: ((i % 5) - 2) * 26,
      rotate: (i % 2 === 0 ? 1 : -1) * (120 + (i % 4) * 45),
    }));
  }, []);

  return (
    <section
      id="quiz"
      className="py-20 sm:py-24 bg-slate-100/60 dark:bg-[#0E1627]/70 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              {t.quizSectionKicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {t.quizSectionTitle}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.quizSectionSubtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={handleRegenerate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap shrink-0 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t.quizStartNew}</span>
          </button>
        </div>

        {/* Main Quiz Card or Final Result */}
        {!isSubmitted ? (
          <div className="rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-sm">
            {/* Top Progress & Question Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono-num">
                {t.quizQuestionCounter} {currentIndex + 1} / {questions.length}
                {currentQuestion?.topicId && (
                  <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400">
                    · #{String(currentQuestion.topicId).padStart(2, '0')}
                  </span>
                )}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono-num">
                {t.quizAnsweredCount}: {answeredCount} / {questions.length}
              </div>
            </div>

            {/* Numbered Step Grid */}
            <div className="flex items-center gap-1.5 flex-wrap mb-7">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[q.id] !== undefined;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold font-mono-num flex items-center justify-center transition-colors ${
                      isCurrent
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : isAnswered
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Active Question */}
            {currentQuestion && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-6">
                  {tText(currentQuestion.question, lang)}
                </h3>

                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((opt, optIdx) => {
                    const selectedIdx = answers[currentQuestion.id];
                    const hasAnsweredCurrent = selectedIdx !== undefined;
                    const isSelected = selectedIdx === optIdx;
                    const isCorrectOption = currentQuestion.correctIndex === optIdx;

                    let cardStyle =
                      'border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 bg-slate-50/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200';
                    if (hasAnsweredCurrent) {
                      if (isCorrectOption) {
                        cardStyle =
                          'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/35 text-emerald-950 dark:text-emerald-100';
                      } else if (isSelected) {
                        cardStyle =
                          'border-rose-500 bg-rose-50/80 dark:bg-rose-950/35 text-rose-950 dark:text-rose-100';
                      } else {
                        cardStyle =
                          'border-slate-200/70 dark:border-slate-800/70 opacity-65 text-slate-600 dark:text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={hasAnsweredCurrent}
                        onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${cardStyle}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold font-mono-num flex items-center justify-center shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="text-sm sm:text-base font-medium leading-relaxed">
                            {tText(opt, lang)}
                          </span>
                        </div>
                        {hasAnsweredCurrent && isCorrectOption && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {hasAnsweredCurrent && isSelected && !isCorrectOption && (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Explanation once answered */}
                {answers[currentQuestion.id] !== undefined && (
                  <div className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-4 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-700 dark:text-emerald-400">
                      {answers[currentQuestion.id] === currentQuestion.correctIndex
                        ? t.quizCorrect
                        : t.quizIncorrect}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {tText(currentQuestion.explanation, lang)}
                    </p>
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:opacity-40 hover:border-slate-300 dark:hover:border-slate-700 whitespace-nowrap shrink-0 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{t.quizPrevQuestion}</span>
                  </button>

                  <div className="flex items-center gap-2.5">
                    {currentIndex < questions.length - 1 && (
                      <button
                        type="button"
                        onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
                      >
                        <span>{t.quizNextQuestion}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold whitespace-nowrap shrink-0 shadow-sm transition-colors"
                    >
                      <Award className="w-4 h-4" />
                      <span>{t.quizFinishBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Final Summary View with Confetti */
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-10 shadow-sm">
            {!prefersReducedMotion && scoreStats.percentage >= 50 && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                {confettiPieces.map((piece) => (
                  <motion.span
                    key={piece.id}
                    initial={{ opacity: 1, y: -20, x: 0, rotate: 0, scale: 1 }}
                    animate={{
                      opacity: [1, 1, 0],
                      y: 340,
                      x: piece.xOffset,
                      rotate: piece.rotate,
                      scale: [1, 0.9, 0.7],
                    }}
                    transition={{
                      duration: 2.3,
                      delay: piece.delay,
                      ease: 'easeOut',
                    }}
                    style={{ left: piece.left, backgroundColor: piece.color }}
                    className="absolute top-0 w-2.5 h-3.5 rounded-xs"
                  />
                ))}
              </div>
            )}

            <div className="relative z-10 text-center max-w-xl mx-auto mb-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                {t.quizFinalResultTitle}
              </p>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono-num mb-2">
                {scoreStats.percentage}%
              </div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 font-mono-num mb-3">
                {scoreStats.correct} / {scoreStats.total}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {scoreStats.percentage >= 85
                  ? t.quizExcellent
                  : scoreStats.percentage >= 60
                  ? t.quizGood
                  : t.quizNeedsReview}
              </p>

              <button
                type="button"
                onClick={handleRegenerate}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold whitespace-nowrap shrink-0 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.quizStartNew}</span>
              </button>
            </div>

            {/* Question-by-question breakdown */}
            <div className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-8">
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className="rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono-num">
                        <span
                          className={`font-bold ${
                            isCorrect
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-rose-600 dark:text-rose-400'
                          }`}
                        >
                          #{idx + 1}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {isCorrect ? t.quizCorrect : t.quizIncorrect}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {tText(q.question, lang)}
                      </p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                        ✓ {tText(q.options[q.correctIndex], lang)}
                      </p>
                    </div>

                    {q.topicId && (
                      <button
                        type="button"
                        onClick={() => onOpenTopic(q.topicId!)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline whitespace-nowrap shrink-0 self-start"
                      >
                        <span>#{String(q.topicId).padStart(2, '0')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
