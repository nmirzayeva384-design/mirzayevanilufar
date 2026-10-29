import React, { useState } from 'react';
import { BookOpen, Edit3, Check, RotateCcw } from 'lucide-react';
import { Language, ReferenceItem } from '../types';
import { UI_TEXT, tText } from '../i18n/ui';

interface ReferencesSectionProps {
  lang: Language;
  references: ReferenceItem[];
  onUpdateReferences: (refs: ReferenceItem[]) => void;
  onResetReferences: () => void;
  isAdmin: boolean;
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  lang,
  references,
  onUpdateReferences,
  onResetReferences,
  isAdmin,
}) => {
  const t = UI_TEXT[lang];
  const [editing, setEditing] = useState(false);

  const handleCitationChange = (id: number, value: string) => {
    const next = references.map((ref) =>
      ref.id === id
        ? {
            ...ref,
            citation: {
              ...ref.citation,
              [lang]: value,
            },
          }
        : ref
    );
    onUpdateReferences(next);
  };

  return (
    <section
      id="references"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              {t.refKicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {t.refTitle}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.refSubtitle}
            </p>
          </div>

          {isAdmin && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEditing((v) => !v)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
              >
                {editing ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{editing ? t.refSaveBtn : t.refEditBtn}</span>
              </button>
              <button
                type="button"
                onClick={onResetReferences}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 whitespace-nowrap shrink-0 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.refResetBtn}</span>
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {references.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-800/90 p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono-num text-sm font-bold flex items-center justify-center shrink-0">
                [{item.id}]
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>{tText(item.type, lang)}</span>
                </div>

                {isAdmin && editing ? (
                  <textarea
                    rows={3}
                    value={tText(item.citation, lang)}
                    onChange={(e) => handleCitationChange(item.id, e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                ) : (
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {tText(item.citation, lang)}
                  </p>
                )}

                {item.note && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {tText(item.note, lang)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
