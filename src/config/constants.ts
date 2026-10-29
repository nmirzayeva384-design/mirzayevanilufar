import { LocalizedText } from '../types';

/**
 * O'qituvchi (Admin) rejimi uchun PIN-kod.
 * Kerak bo'lganda ushbu konstantani oson o'zgartirish mumkin.
 */
export const ADMIN_PIN = '2026';

/**
 * Footerda ko'rsatiladigan muallif va kafedra/universitet ma'lumoti.
 * O'zgartirish uchun shu yerdagi matnlarni tahrirlang.
 */
export const AUTHOR_INFO: {
  preparedBy: LocalizedText;
  department: LocalizedText;
  academicYear: string;
} = {
  preparedBy: {
    uz: "Tayyorladi: Iqtisodiyot nazariyasi va yashil iqtisodiyot kafedrasi",
    en: "Prepared by: Department of Economic Theory and Green Economy",
    ru: "Подготовлено: Кафедра экономической теории и зелёной экономики",
  },
  department: {
    uz: "Iqtisodiyot fakulteti · 3-kurs bakalavriat o'quv dasturi",
    en: "Faculty of Economics · 3rd-Year Undergraduate Curriculum",
    ru: "Экономический факультет · Учебная программа 3-го курса бакалавриата",
  },
  academicYear: '2026–2027',
};

export const STORAGE_KEYS = {
  LANGUAGE: 'ecoecon_lang_v1',
  THEME: 'ecoecon_theme_v1',
  COMPLETED_TOPICS: 'ecoecon_completed_v1',
  BOOKMARKED_TOPICS: 'ecoecon_bookmarks_v1',
  TOPIC_SCHEDULES: 'ecoecon_schedules_v1',
  CUSTOM_REFERENCES: 'ecoecon_references_v1',
} as const;
