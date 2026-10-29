import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../i18n/ui';

interface HeroSectionProps {
  lang: Language;
}

interface CountUpNumberProps {
  target: number;
  suffix?: string;
  reducedMotion: boolean;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ target, suffix = '', reducedMotion }) => {
  const [count, setCount] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (reducedMotion) {
      setCount(target);
      return;
    }
    let startTime: number | null = null;
    const duration = 1100;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, reducedMotion]);

  return (
    <span className="font-mono-num">
      {count}
      {suffix}
    </span>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const prefersReducedMotion = Boolean(useReducedMotion());

  const titleWords = t.heroTitle.split(' ');

  const stats = [
    { target: 15, suffix: '', label: t.statTopicsLabel },
    { target: 3, suffix: '', label: t.statLanguagesLabel },
    { target: 60, suffix: '+', label: t.statIndicatorsLabel },
    { target: 90, suffix: '+', label: t.statTermsLabel },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Moving Aurora Background Mesh */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="animate-aurora absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-emerald-400/15 dark:bg-emerald-500/15 blur-3xl" />
        <div
          className="animate-aurora absolute top-12 right-0 w-[30rem] h-[30rem] rounded-full bg-sky-400/15 dark:bg-sky-500/15 blur-3xl"
          style={{ animationDelay: '-5s' }}
        />
        <div
          className="animate-aurora absolute -bottom-24 left-1/3 w-[26rem] h-[26rem] rounded-full bg-amber-400/10 dark:bg-amber-500/10 blur-3xl"
          style={{ animationDelay: '-9s' }}
        />

        {/* Subtle Floating Botanical & Climate SVG Particles */}
        <svg
          className="animate-float-slow absolute top-16 left-[12%] w-6 h-6 text-emerald-500/25 dark:text-emerald-400/20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
        </svg>
        <svg
          className="animate-float-slow absolute bottom-24 right-[14%] w-5 h-5 text-sky-500/25 dark:text-sky-400/20"
          style={{ animationDelay: '-3s' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
        <svg
          className="animate-float-slow absolute top-28 right-[42%] w-5 h-5 text-amber-500/25 dark:text-amber-400/20"
          style={{ animationDelay: '-4.5s' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Academic Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-xs sm:text-sm font-semibold tracking-normal text-emerald-700 dark:text-emerald-400"
            >
              {t.heroKicker}
            </motion.p>

            {/* Word-by-word stagger headline */}
            <h1
              key={lang}
              className="text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance"
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={`${word}-${idx}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.38,
                    delay: prefersReducedMotion ? 0 : idx * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#topics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span>{t.heroPrimaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#quiz"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{t.heroSecondaryCta}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Rotating SVG Biosphere & Climate Globe */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-white/80 dark:bg-[#131C2E]/85 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                {/* Outer Orbital Economic Ring */}
                <svg
                  className="animate-spin-slow absolute inset-0 w-full h-full"
                  viewBox="0 0 260 260"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="130"
                    cy="130"
                    r="120"
                    stroke="currentColor"
                    className="text-emerald-500/25 dark:text-emerald-400/25"
                    strokeWidth="1.25"
                    strokeDasharray="6 6"
                  />
                  <circle
                    cx="130"
                    cy="10"
                    r="5"
                    className="fill-emerald-500 dark:fill-emerald-400"
                  />
                  <circle
                    cx="250"
                    cy="130"
                    r="4.5"
                    className="fill-sky-500 dark:fill-sky-400"
                  />
                  <circle
                    cx="130"
                    cy="250"
                    r="4.5"
                    className="fill-amber-500 dark:fill-amber-400"
                  />
                </svg>

                {/* Stylized Earth Biosphere Globe SVG */}
                <svg
                  className="w-44 h-44 sm:w-52 sm:h-52 drop-shadow-sm"
                  viewBox="0 0 200 200"
                  role="img"
                  aria-label={t.globeCaption}
                >
                  <defs>
                    <radialGradient id="oceanGrad" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="55%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </radialGradient>
                    <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <clipPath id="earthClip">
                      <circle cx="100" cy="100" r="82" />
                    </clipPath>
                  </defs>

                  {/* Atmospheric Halo */}
                  <circle cx="100" cy="100" r="90" fill="#10B981" fillOpacity="0.1" />
                  {/* Ocean Sphere */}
                  <circle cx="100" cy="100" r="82" fill="url(#oceanGrad)" />

                  {/* Continents & Latitude/Longitude Grid */}
                  <g clipPath="url(#earthClip)">
                    {/* Eurasia / Central Asia Stylized Landmass */}
                    <path
                      d="M42 64 C58 48, 92 44, 125 54 C150 61, 168 78, 160 98 C151 116, 128 118, 110 112 C94 106, 86 124, 72 136 C56 148, 38 135, 36 112 C34 92, 32 76, 42 64 Z"
                      fill="url(#landGrad)"
                      opacity="0.92"
                    />
                    {/* Southern Landmass */}
                    <path
                      d="M112 132 C126 128, 146 136, 152 152 C156 164, 138 175, 120 170 C108 166, 102 142, 112 132 Z"
                      fill="url(#landGrad)"
                      opacity="0.85"
                    />
                    {/* Highlighted Uzbekistan / Central Asia Node */}
                    <circle cx="104" cy="78" r="5" fill="#F59E0B" />
                    <circle cx="104" cy="78" r="10" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.7" />

                    {/* Subtle Graticule Lines */}
                    <ellipse cx="100" cy="100" rx="82" ry="30" stroke="#FFFFFF" strokeOpacity="0.18" fill="none" />
                    <ellipse cx="100" cy="100" rx="42" ry="82" stroke="#FFFFFF" strokeOpacity="0.18" fill="none" />
                    <line x1="18" y1="100" x2="182" y2="100" stroke="#FFFFFF" strokeOpacity="0.22" />
                  </g>

                  {/* Specular Rim */}
                  <circle
                    cx="100"
                    cy="100"
                    r="82"
                    stroke="#FFFFFF"
                    strokeOpacity="0.28"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Clean Quantitative Readout Under Globe */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>{t.globeCo2Label}</span>
                  <span className="font-mono-num font-semibold text-slate-900 dark:text-white">422.5 ppm</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>{t.globeTempLabel}</span>
                  <span className="font-mono-num font-semibold text-amber-600 dark:text-amber-400">+1.45 °C</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>{t.globeGreenTarget}</span>
                  <span className="font-mono-num font-semibold text-emerald-600 dark:text-emerald-400">40% · 25 GW</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Count-Up Statistics Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                <CountUpNumber
                  target={item.target}
                  suffix={item.suffix}
                  reducedMotion={prefersReducedMotion}
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
