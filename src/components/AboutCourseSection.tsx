import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Language } from '../types';
import { UI_TEXT } from '../i18n/ui';

interface AboutCourseSectionProps {
  lang: Language;
}

export const AboutCourseSection: React.FC<AboutCourseSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const prefersReducedMotion = Boolean(useReducedMotion());

  const cards = [
    {
      title: t.aboutGoalTitle,
      desc: t.aboutGoalDesc,
      accent: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: t.aboutTasksTitle,
      desc: t.aboutTasksDesc,
      accent: 'text-sky-600 dark:text-sky-400',
    },
    {
      title: t.aboutOutcomesTitle,
      desc: t.aboutOutcomesDesc,
      accent: 'text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section className="py-14 sm:py-16 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
            {t.aboutSectionKicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {t.aboutSectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : index * 0.08 }}
              className="rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7"
            >
              <h3 className={`text-base sm:text-lg font-semibold mb-3 ${card.accent}`}>
                {card.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
