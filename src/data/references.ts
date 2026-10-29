import { ReferenceItem } from '../types';

/**
 * Foydalanilgan adabiyotlar ro'yxati [1]–[6].
 * Ushbu massivni bevosita shu faylda yoki saytdagi «O'qituvchi rejimi» (PIN: 2026) orqali tahrirlash mumkin!
 */
export const DEFAULT_REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    type: {
      uz: 'Asosiy darslik [1]',
      en: 'Core Textbook [1]',
      ru: 'Базовый учебник [1]',
    },
    citation: {
      uz: "[1] Atrof-muhit iqtisodiyoti va tabiatdan foydalanish asoslari: Oliy o'quv yurtlari iqtisodiyot yo'nalishi talabalari uchun darslik. (Kafedra o'quv adabiyoti bilan almashtirilishi mumkin).",
      en: '[1] Tietenberg, T., & Lewis, L. Environmental and Natural Resource Economics (12th ed.). Routledge — Core undergraduate reference (editable by instructor).',
      ru: '[1] Экономика природопользования и охраны окружающей среды: Учебник для студентов экономических направлений вузов (редактируемая запись [1]).',
    },
  },
  {
    id: 2,
    type: {
      uz: "Me'yoriy-strategik manba [2]",
      en: 'National Policy Source [2]',
      ru: 'Нормативно-стратегический источник [2]',
    },
    citation: {
      uz: "[2] O'zbekiston Respublikasi Prezidentining PQ-4477 (04.10.2019), PQ-436 (02.12.2022) va PF-158 «O'zbekiston – 2030» strategiyasi hujjatlari to'plami — Lex.uz milliy bazasi.",
      en: '[2] Strategy for the Transition of the Republic of Uzbekistan to a Green Economy (PQ-4477, PQ-436) & "Uzbekistan – 2030" Strategy (PF-158) — Lex.uz Statutory Database.',
      ru: '[2] Стратегия перехода Республики Узбекистан к «зелёной» экономике (ПП-4477, ПП-436) и Стратегия «Узбекистан – 2030» (УП-158) — Национальная база Lex.uz.',
    },
  },
  {
    id: 3,
    type: {
      uz: 'Xalqaro iqlim hisoboti [3]',
      en: 'International Climate Assessment [3]',
      ru: 'Международный климатический доклад [3]',
    },
    citation: {
      uz: '[3] IPCC (2023). Climate Change 2023: Synthesis Report (Sixth Assessment Report — AR6). Intergovernmental Panel on Climate Change, Geneva.',
      en: '[3] IPCC (2023). Climate Change 2023: Synthesis Report. Contribution of Working Groups I, II and III to the Sixth Assessment Report of the IPCC, Geneva.',
      ru: '[3] МГЭИК (2023). Изменение климата, 2023 г.: Обобщающий доклад Шестого оценочного цикла (AR6). Женева, Швейцария.',
    },
  },
  {
    id: 4,
    type: {
      uz: 'Mamlakat iqlim tahlili [4]',
      en: 'Country Climate Report [4]',
      ru: 'Страновой доклад по климату [4]',
    },
    citation: {
      uz: "[4] World Bank Group (2023). Uzbekistan Country Climate and Development Report (CCDR). Washington, DC: Jahon banki guruhi nashri.",
      en: '[4] World Bank Group (2023). Uzbekistan Country Climate and Development Report (CCDR). Washington, DC: World Bank.',
      ru: '[4] Всемирный банк (2023). Доклад о климате и развитии страны: Республика Узбекистан (CCDR). Вашингтон.',
    },
  },
  {
    id: 5,
    type: {
      uz: 'Energetika va resurslar statistikasi [5]',
      en: 'Energy & Resource Analytics [5]',
      ru: 'Статистика энергетики и ресурсов [5]',
    },
    citation: {
      uz: '[5] IEA World Energy Outlook & IRENA Renewable Power Generation Costs (2023–2024); UNEP Global Resources Outlook 2024.',
      en: '[5] IEA World Energy Outlook & IRENA Renewable Power Generation Costs (2023–2024); UNEP Global Resources Outlook 2024.',
      ru: '[5] Обзоры МЭА (World Energy Outlook), IRENA (Renewable Power Generation Costs 2024) и ЮНЕП (Global Resources Outlook 2024).',
    },
  },
  {
    id: 6,
    type: {
      uz: 'Milliy rasmiy statistika [6]',
      en: 'Official National Statistics [6]',
      ru: 'Официальная национальная статистика [6]',
    },
    citation: {
      uz: "[6] O'zbekiston Respublikasi Prezidenti huzuridagi Statistika agentligi (stat.uz) hamda Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi ochiq ma'lumotlari.",
      en: '[6] Statistics Agency under the President of the Republic of Uzbekistan (stat.uz) & Ministry of Ecology, Environmental Protection and Climate Change portals.',
      ru: '[6] Открытые данные Агентства статистики при Президенте РУз (stat.uz) и Министерства экологии, охраны ОС и изменения климата РУз.',
    },
  },
];
