import React, { useMemo, useState } from 'react';
import { RotateCcw, TrendingUp, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT, tText } from '../i18n/ui';
import { ARAL_TIMELINE_MILESTONES, GLOBAL_BENCHMARKS } from '../data/climateData';

interface ClimateDashboardProps {
  lang: Language;
}

export const ClimateDashboard: React.FC<ClimateDashboardProps> = ({ lang }) => {
  const t = UI_TEXT[lang];

  // --- 1. Aral Sea Interactive Timeline State (1960 -> 2024) ---
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  const interpolatedAral = useMemo(() => {
    const ms = ARAL_TIMELINE_MILESTONES;
    if (selectedYear <= ms[0].year) return ms[0];
    if (selectedYear >= ms[ms.length - 1].year) return ms[ms.length - 1];

    for (let i = 0; i < ms.length - 1; i++) {
      const a = ms[i];
      const b = ms[i + 1];
      if (selectedYear >= a.year && selectedYear <= b.year) {
        const ratio = (selectedYear - a.year) / (b.year - a.year);
        return {
          year: selectedYear,
          areaKm2: Math.round(a.areaKm2 + (b.areaKm2 - a.areaKm2) * ratio),
          volumeKm3: Math.round(a.volumeKm3 + (b.volumeKm3 - a.volumeKm3) * ratio),
          salinityGL: Math.round(a.salinityGL + (b.salinityGL - a.salinityGL) * ratio),
          greenCoverMlnHa: Number(
            (a.greenCoverMlnHa + (b.greenCoverMlnHa - a.greenCoverMlnHa) * ratio).toFixed(2)
          ),
          waterScale: a.waterScale + (b.waterScale - a.waterScale) * ratio,
          note: ratio < 0.5 ? a.note : b.note,
        };
      }
    }
    return ms[ms.length - 1];
  }, [selectedYear]);

  // --- 2. Student Carbon Footprint Calculator State ---
  const [weeklyKm, setWeeklyKm] = useState<number>(120);
  const [monthlyKwh, setMonthlyKwh] = useState<number>(160);
  const [diet, setDiet] = useState<'meat' | 'balanced' | 'plant'>('balanced');
  const [wasteLevel, setWasteLevel] = useState<'low' | 'medium' | 'high'>('medium');

  const footprintTons = useMemo(() => {
    // Annualized model calibrated for undergraduate lifestyle
    // Mobility: ~0.12 kg CO2e/km blended bus/car -> weekly * 52 / 1000
    const transportTons = (weeklyKm * 52 * 0.12) / 1000;
    // Grid electricity (~0.52 kg CO2e/kWh natural-gas-heavy grid) -> monthly * 12 / 1000
    const powerTons = (monthlyKwh * 12 * 0.52) / 1000;
    // Diet baseline (t CO2e/yr)
    const dietTons = diet === 'meat' ? 2.1 : diet === 'balanced' ? 1.45 : 0.95;
    // Waste & manufactured goods baseline
    const wasteTons = wasteLevel === 'low' ? 0.95 : wasteLevel === 'medium' ? 0.65 : 0.35;

    return Number((transportTons + powerTons + dietTons + wasteTons).toFixed(2));
  }, [weeklyKm, monthlyKwh, diet, wasteLevel]);

  const resetCalculator = () => {
    setWeeklyKm(120);
    setMonthlyKwh(160);
    setDiet('balanced');
    setWasteLevel('medium');
  };

  const footprintStatus =
    footprintTons <= 2.4 ? 'low' : footprintTons <= 4.0 ? 'moderate' : 'high';

  const maxBarScale = Math.max(6.0, footprintTons + 0.5);

  return (
    <section
      id="climate"
      className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mb-2">
            {t.climateKicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            {t.climateTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.climateSubtitle}
          </p>
        </div>

        {/* Part A: Global & Regional Climate Indicators Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {GLOBAL_BENCHMARKS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800 p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span
                    className={`font-mono-num text-2xl font-bold ${
                      item.trend === 'target'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {tText(item.unit, lang)}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 leading-snug">
                  {tText(item.label, lang)}
                </p>
              </div>
              <p className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                {tText(item.source, lang)}
              </p>
            </div>
          ))}
        </div>

        {/* Part B: Interactive Aral Sea Timeline (1960 -> 2024) */}
        <div className="rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stage: Dynamic Aral Sea Basin SVG Map */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200/80 dark:border-slate-800 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-num text-xl font-bold text-slate-900 dark:text-white">
                  {selectedYear}
                </span>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-xs bg-sky-500 inline-block" />
                    {t.aralLegendWater}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block" />
                    {t.aralLegendGreen}
                  </span>
                </div>
              </div>

              <svg
                viewBox="0 0 360 260"
                className="w-full h-60 sm:h-68"
                role="img"
                aria-label={`${t.aralTitle} — ${selectedYear}`}
              >
                {/* Arid Seabed Sand Background */}
                <rect width="360" height="260" rx="16" className="fill-amber-50/70 dark:fill-slate-900" />

                {/* 1960 Historical Full Shoreline Contour */}
                <path
                  d="M95 36 C140 18, 225 22, 262 56 C292 85, 286 155, 250 198 C215 234, 132 238, 96 205 C65 176, 62 118, 76 76 C82 56, 84 44, 95 36 Z"
                  fill="#E2E8F0"
                  fillOpacity="0.35"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />

                {/* Green Afforestation Zone (Saxaul Plantations expanding post-2000 / 2018) */}
                {interpolatedAral.greenCoverMlnHa > 0.02 && (
                  <g
                    opacity={Math.min(0.9, 0.25 + interpolatedAral.greenCoverMlnHa * 0.4)}
                    style={{
                      transformOrigin: '205px 175px',
                      transform: `scale(${Math.min(1.12, 0.45 + interpolatedAral.greenCoverMlnHa * 0.38)})`,
                      transition: 'transform 180ms ease-out, opacity 180ms ease-out',
                    }}
                  >
                    <path
                      d="M148 135 C182 120, 236 132, 248 168 C256 196, 220 222, 174 218 C142 215, 130 162, 148 135 Z"
                      fill="#10B981"
                      fillOpacity="0.45"
                      stroke="#059669"
                      strokeWidth="1.2"
                    />
                  </g>
                )}

                {/* Dynamic Water Bodies: Unified in 1960-1985, Splitting into North + West/East South Lobes */}
                {interpolatedAral.waterScale > 0.62 ? (
                  <g
                    style={{
                      transformOrigin: '175px 128px',
                      transform: `scale(${interpolatedAral.waterScale})`,
                      transition: 'transform 150ms ease-out',
                    }}
                  >
                    <path
                      d="M95 36 C140 18, 225 22, 262 56 C292 85, 286 155, 250 198 C215 234, 132 238, 96 205 C65 176, 62 118, 76 76 C82 56, 84 44, 95 36 Z"
                      fill="#0EA5E9"
                      fillOpacity="0.88"
                    />
                  </g>
                ) : (
                  <g>
                    {/* North (Small) Aral Stabilized by Kok-Aral */}
                    <path
                      d="M135 34 C168 24, 218 28, 234 48 C242 60, 212 72, 172 70 C142 68, 122 48, 135 34 Z"
                      fill="#0284C7"
                      fillOpacity="0.9"
                    />
                    {/* Deep Western Lobe of South Aral */}
                    <g
                      style={{
                        transformOrigin: '102px 142px',
                        transform: `scale(${Math.max(0.58, interpolatedAral.waterScale * 1.45)})`,
                        transition: 'transform 150ms ease-out',
                      }}
                    >
                      <path
                        d="M86 84 C104 78, 122 96, 120 142 C118 182, 104 206, 88 198 C72 190, 70 112, 86 84 Z"
                        fill="#0EA5E9"
                        fillOpacity="0.88"
                      />
                    </g>
                    {/* Shallow Eastern Lobe (shrinks fastest) */}
                    {interpolatedAral.waterScale > 0.13 && (
                      <g
                        style={{
                          transformOrigin: '190px 145px',
                          transform: `scale(${Math.max(0.18, interpolatedAral.waterScale * 1.55)})`,
                          transition: 'transform 150ms ease-out',
                        }}
                      >
                        <path
                          d="M148 92 C192 84, 238 104, 236 152 C234 188, 188 202, 154 186 C132 174, 130 112, 148 92 Z"
                          fill="#38BDF8"
                          fillOpacity="0.78"
                        />
                      </g>
                    )}
                  </g>
                )}

                {/* Muynak Historical Port Marker */}
                <circle cx="152" cy="226" r="4" fill="#F59E0B" />
                <text
                  x="162"
                  y="230"
                  className="fill-slate-700 dark:fill-slate-300 text-[11px] font-medium"
                >
                  Mo‘ynoq / Muynak
                </text>
              </svg>
            </div>

            {/* Right Control & Hydrological Metrics Deck */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {t.aralTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {t.aralSubtitle}
                </p>
              </div>

              {/* Slider Control with Visible Label & Value */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <label htmlFor="aral-year-slider" className="text-slate-700 dark:text-slate-200">
                    {t.aralSliderLabel}
                  </label>
                  <span className="font-mono-num text-sky-600 dark:text-sky-400">
                    {selectedYear}
                  </span>
                </div>
                <input
                  id="aral-year-slider"
                  type="range"
                  min={1960}
                  max={2024}
                  step={1}
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                {/* Quick Milestone Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-1 pt-1">
                  {ARAL_TIMELINE_MILESTONES.map((m) => (
                    <button
                      key={m.year}
                      type="button"
                      onClick={() => setSelectedYear(m.year)}
                      className={`px-2.5 py-1 rounded-md font-mono-num text-xs font-medium transition-colors cursor-pointer ${
                        selectedYear === m.year
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {m.year}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Live Hydrological Readouts */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200/80 dark:border-slate-800 p-3.5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.aralAreaLabel}</p>
                  <p className="font-mono-num text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {interpolatedAral.areaKm2.toLocaleString()} km²
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200/80 dark:border-slate-800 p-3.5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.aralVolumeLabel}</p>
                  <p className="font-mono-num text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {interpolatedAral.volumeKm3.toLocaleString()} km³
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200/80 dark:border-slate-800 p-3.5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.aralSalinityLabel}</p>
                  <p className="font-mono-num text-lg font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                    ~{interpolatedAral.salinityGL} g/L
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200/80 dark:border-slate-800 p-3.5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.aralForestLabel}</p>
                  <p className="font-mono-num text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {interpolatedAral.greenCoverMlnHa} mln ha
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {tText(interpolatedAral.note, lang)}
              </p>
            </div>
          </div>
        </div>

        {/* Part C: Interactive Student Carbon Footprint Calculator */}
        <div className="rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.calcTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {t.calcSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.calcResetBtn}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls Deck */}
            <div className="lg:col-span-6 space-y-5">
              {/* Slider 1: Weekly Mobility */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label htmlFor="calc-km" className="font-medium text-slate-700 dark:text-slate-200">
                    {t.calcTransportLabel}
                  </label>
                  <span className="font-mono-num font-bold text-emerald-600 dark:text-emerald-400">
                    {weeklyKm} {t.calcTransportUnit}
                  </span>
                </div>
                <input
                  id="calc-km"
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={weeklyKm}
                  onChange={(e) => setWeeklyKm(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Slider 2: Monthly Electricity */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label htmlFor="calc-kwh" className="font-medium text-slate-700 dark:text-slate-200">
                    {t.calcElectricityLabel}
                  </label>
                  <span className="font-mono-num font-bold text-sky-600 dark:text-sky-400">
                    {monthlyKwh} {t.calcElectricityUnit}
                  </span>
                </div>
                <input
                  id="calc-kwh"
                  type="range"
                  min={40}
                  max={500}
                  step={10}
                  value={monthlyKwh}
                  onChange={(e) => setMonthlyKwh(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
              </div>

              {/* Segmented Control 3: Diet */}
              <div className="space-y-2">
                <span className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t.calcDietLabel}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { key: 'plant', label: t.calcDietPlant },
                      { key: 'balanced', label: t.calcDietBalanced },
                      { key: 'meat', label: t.calcDietMeat },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setDiet(opt.key)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        diet === opt.key
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-slate-50 dark:bg-[#0B1220] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Segmented Control 4: Waste & Recycling */}
              <div className="space-y-2">
                <span className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t.calcWasteLabel}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { key: 'high', label: t.calcWasteHigh },
                      { key: 'medium', label: t.calcWasteMedium },
                      { key: 'low', label: t.calcWasteLow },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setWasteLevel(opt.key)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        wasteLevel === opt.key
                          ? 'bg-sky-600 border-sky-600 text-white'
                          : 'bg-slate-50 dark:bg-[#0B1220] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-500/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Comparison Stage */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#0B1220] border border-slate-200/80 dark:border-slate-800 p-6 space-y-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {t.calcResultLabel}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-mono-num text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                      {footprintTons}
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {t.calcUnitTons}
                    </span>
                  </div>
                </div>

                {/* Accessible Icon + Text Semantic Status */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold">
                  {footprintStatus === 'low' ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.calcStatusLow}
                    </span>
                  ) : footprintStatus === 'moderate' ? (
                    <span className="inline-flex items-center gap-1.5 text-sky-700 dark:text-sky-400">
                      <TrendingUp className="w-4 h-4" />
                      {t.calcStatusModerate}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                      <AlertTriangle className="w-4 h-4" />
                      {t.calcStatusHigh}
                    </span>
                  )}
                </div>
              </div>

              {/* Comparative Benchmark Bars */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    label: t.calcResultLabel,
                    val: footprintTons,
                    color: 'bg-emerald-500',
                  },
                  {
                    label: t.calcCompareUz,
                    val: 3.6,
                    color: 'bg-sky-500',
                  },
                  {
                    label: t.calcCompareWorld,
                    val: 4.7,
                    color: 'bg-slate-400 dark:bg-slate-500',
                  },
                  {
                    label: t.calcCompareTarget,
                    val: 2.0,
                    color: 'bg-amber-500',
                  },
                ].map((bar, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                      <span>{bar.label}</span>
                      <span className="font-mono-num font-semibold">{bar.val} t</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full w-full ${bar.color} origin-left transition-transform duration-200`}
                        style={{
                          transform: `scaleX(${Math.min(1, bar.val / maxBarScale)})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200/80 dark:border-slate-800">
                {footprintStatus === 'low'
                  ? t.calcTipLow
                  : footprintStatus === 'moderate'
                  ? t.calcTipModerate
                  : t.calcTipHigh}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
