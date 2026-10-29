import { LocalizedText } from '../types';

export interface GlobalBenchmarkItem {
  id: string;
  value: string;
  unit: LocalizedText;
  label: LocalizedText;
  source: LocalizedText;
  trend: 'up' | 'down' | 'target';
}

export const GLOBAL_BENCHMARKS: GlobalBenchmarkItem[] = [
  {
    id: 'gb-co2',
    value: '422.5',
    unit: { uz: 'ppm', en: 'ppm', ru: 'ppm' },
    label: {
      uz: 'Atmosferada CO₂ konsentratsiyasi',
      en: 'Atmospheric CO₂ Concentration',
      ru: 'Концентрация CO₂ в атмосфере',
    },
    source: { uz: 'NOAA Mauna Loa, 2024', en: 'NOAA Mauna Loa, 2024', ru: 'NOAA Мауна-Лоа, 2024' },
    trend: 'up',
  },
  {
    id: 'gb-temp',
    value: '+1.45°C',
    unit: { uz: '1850–1900 ga nisbatan', en: 'vs. 1850–1900', ru: 'к 1850–1900 гг.' },
    label: {
      uz: 'Global o‘rtacha sirt harorati o‘sishi',
      en: 'Global Mean Warming Anomaly',
      ru: 'Глобальное превышение температуры',
    },
    source: { uz: 'WMO State of Climate, 2024', en: 'WMO State of Climate, 2024', ru: 'ВМО, 2024' },
    trend: 'up',
  },
  {
    id: 'gb-res',
    value: '30.3%',
    unit: { uz: 'jahon elektr ulushi', en: 'of global electricity', ru: 'мировой электроген.' },
    label: {
      uz: 'Qayta tiklanuvchi manbalar generatsiyasi',
      en: 'Global Renewable Power Share',
      ru: 'Доля ВИЭ в мировой электроэнергетике',
    },
    source: { uz: 'IEA / Ember, 2024', en: 'IEA / Ember, 2024', ru: 'МЭА / Ember, 2024' },
    trend: 'target',
  },
  {
    id: 'gb-uz-res',
    value: '25 GVt',
    unit: { uz: '40% ulush (2030)', en: '40% share (2030)', ru: 'доля 40% (2030)' },
    label: {
      uz: "O'zbekiston yashil energetika marrasi",
      en: 'Uzbekistan Clean Power Target',
      ru: 'Цель зелёной энергетики Узбекистана',
    },
    source: { uz: 'PF-158 «O‘zbekiston – 2030»', en: 'PF-158 "Uzbekistan – 2030"', ru: 'УП-158 «Узбекистан – 2030»' },
    trend: 'target',
  },
  {
    id: 'gb-aral-green',
    value: '1.7+ mln ga',
    unit: { uz: 'yashil qoplama', en: 'afforested seabed', ru: 'зелёный покров' },
    label: {
      uz: 'Orolqumda barpo etilgan saksovulzorlar',
      en: 'Aralkum Seabed Saxaul Forests',
      ru: 'Лесопосадки саксаула на дне Арала',
    },
    source: { uz: 'Ekologiya vazirligi / UNDP, 2024', en: 'Ministry of Ecology / UNDP, 2024', ru: 'Минэкологии РУз / ПРООН, 2024' },
    trend: 'target',
  },
];

export interface AralTimelineMilestone {
  year: number;
  areaKm2: number;
  volumeKm3: number;
  salinityGL: number;
  greenCoverMlnHa: number;
  waterScale: number; // 0.1 to 1.0 for SVG rendering
  note: LocalizedText;
}

export const ARAL_TIMELINE_MILESTONES: AralTimelineMilestone[] = [
  {
    year: 1960,
    areaKm2: 68000,
    volumeKm3: 1083,
    salinityGL: 10,
    greenCoverMlnHa: 0,
    waterScale: 1.0,
    note: {
      uz: "Dunyoda to'rtinchi eng yirik ko'l: Mo'ynoq va Orol portlarida yiliga 40+ ming tonna baliq ovlangan va kema qatnovi faol bo'lgan.",
      en: 'Fourth-largest inland lake globally: Muynak and Aralsk ports supported active shipping and >40,000 tonnes of annual fish catch.',
      ru: 'Четвёртое по величине озеро мира: порты Муйнак и Аральск обеспечивали судоходство и вылов свыше 40 тыс. тонн рыбы в год.',
    },
  },
  {
    year: 1976,
    areaKm2: 55700,
    volumeKm3: 640,
    salinityGL: 14,
    greenCoverMlnHa: 0,
    waterScale: 0.81,
    note: {
      uz: "Sug'orish maydonlarining kengayishi tufayli Amudaryo va Sirdaryodan keladigan suv oqimi kamayib, dengiz sathi 5 metrga pasaydi.",
      en: 'Massive irrigation diversions from the Amu Darya and Syr Darya dropped sea levels by ~5 meters and raised salinity.',
      ru: 'Масштабный забор стока Амударьи и Сырдарьи на орошение привёл к падению уровня моря на ~5 метров.',
    },
  },
  {
    year: 1989,
    areaKm2: 39700,
    volumeKm3: 365,
    salinityGL: 30,
    greenCoverMlnHa: 0.05,
    waterScale: 0.56,
    note: {
      uz: "Dengiz ikki qismga — Shimoliy (Kichik) Orol va Janubiy (Katta) Orolga bo'linib ketdi; sanoat baliqchiligi deyarli to'xtadi.",
      en: 'The sea split into the Northern (Small) Aral and Southern (Large) Aral basins as commercial endemic fisheries collapsed.',
      ru: 'Море разделилось на Северный (Малый) и Южный (Большой) Арал; промышленное рыболовство прекратилось.',
    },
  },
  {
    year: 2000,
    areaKm2: 23400,
    volumeKm3: 175,
    salinityGL: 62,
    greenCoverMlnHa: 0.18,
    waterScale: 0.35,
    note: {
      uz: "Janubiy Orol sharqiy va g'arbiy havzalarga ajrala boshladi; qurigan tubda sho'rxok «Orolqum» cho'li kengaydi.",
      en: 'Southern Aral began separating into deep western and shallow eastern lobes while salt-dust storms intensified from Aralkum.',
      ru: 'Южный Арал стал распадаться на западный и мелководный восточный плесы; усилились солепылевые бури с Аралкума.',
    },
  },
  {
    year: 2010,
    areaKm2: 13900,
    volumeKm3: 98,
    salinityGL: 95,
    greenCoverMlnHa: 0.35,
    waterScale: 0.21,
    note: {
      uz: "Shimoliy Orolda Ko'korol to'g'oni suv sathini saqlab qoldi; Janubiy Orolning sharqiy sayoz qismi yozda qurishga o'tdi.",
      en: 'Kok-Aral dike stabilized the Northern Aral, while the shallow eastern lobe of the Southern Aral experienced seasonal drying.',
      ru: 'Кокаральская плотина стабилизировала Малый Арал, тогда как восточная котловина Большого Арала начала пересыхать летом.',
    },
  },
  {
    year: 2018,
    areaKm2: 8600,
    volumeKm3: 80,
    salinityGL: 115,
    greenCoverMlnHa: 0.5,
    waterScale: 0.14,
    note: {
      uz: "O'zbekiston Prezidenti tashabbusi bilan BMT Orolbo'yi Trast jamg'armasi tuzildi va Orolqumda aviatsiya yordamida keng ko'lamli saksovul ekish boshlandi.",
      en: 'Uzbekistan launched the UN Multi-Partner Aral Sea Trust Fund and initiated massive aerial saxaul seeding across the dry seabed.',
      ru: 'По инициативе Узбекистана создан Трастовый фонд ООН для Приаралья и начат массовый аэросев саксаула на высохшем дне.',
    },
  },
  {
    year: 2024,
    areaKm2: 7200,
    volumeKm3: 75,
    salinityGL: 120,
    greenCoverMlnHa: 1.75,
    waterScale: 0.11,
    note: {
      uz: "Orolning qurigan tubida 1,7+ mln ga yashil «qalqon» yaratildi, BMT rezolyutsiyasi bilan Orolbo'yi ekologik innovatsiyalar hududiga aylandi.",
      en: 'Over 1.7 million hectares of protective saxaul forest now anchor Aralkum soils under the UN Ecological Innovations Zone framework.',
      ru: 'На высохшем дне сформирован зелёный щит площадью свыше 1,7 млн га; Приаралье развивается как Зона экоинноваций ООН.',
    },
  },
];
