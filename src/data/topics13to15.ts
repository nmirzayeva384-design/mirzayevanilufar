import { Topic } from '../types';

export const TOPICS_13_TO_15: Topic[] = [
  {
    id: 13,
    isIndependentStudy: true,
    iconName: 'Factory',
    title: {
      uz: 'Sanoat tarmoqlarini rivojlantirish va sanoat ekologiyasi',
      en: 'Industrial Development and Industrial Ecology',
      ru: 'Развитие отраслей промышленности и промышленная экология',
    },
    shortDescription: {
      uz: "Sanoat inqilobi bosqichlari (Industriya 1.0–4.0), yoqilg'i-energetika va tog'-kon majmuasi, «sof ekologik mahsulot», ISO 14001 va sanoat chiqindilari.",
      en: 'Industrial Revolutions (Industry 1.0–4.0), fuel-energy and mining sectors, eco-labeled clean products, ISO 14001 LCA, and industrial waste.',
      ru: 'Этапы промышленной революции (Индустрия 1.0–4.0), ТЭК и горнорудная отрасль, «чистая продукция», ISO 14001 и промотходы.',
    },
    keywords: {
      uz: ['sanoat ekologiyasi', 'Industriya 4.0', 'yoqilg‘i-energetika', 'tog‘-kon', 'ISO 14001', 'LCA', 'ekodizayn', 'yashil vodorod'],
      en: ['industrial ecology', 'Industry 4.0', 'fuel-energy complex', 'mining', 'ISO 14001', 'Life Cycle Assessment', 'clean production'],
      ru: ['промышленная экология', 'Индустрия 4.0', 'ТЭК', 'горнодобывающая отрасль', 'ISO 14001', 'жизненный цикл товара'],
    },
    sections: [
      {
        heading: {
          uz: '1. Sanoat inqilobi bosqichlari va Sanoat ekologiyasi fani',
          en: '1. Four Industrial Revolutions and the Discipline of Industrial Ecology',
          ru: '1. Четыре промышленные революции и предмет промышленной экологии',
        },
        paragraphs: [
          {
            uz: "Jahon sanoati to'rtta texnologik bosqichni bosib o'tdi: Industriya 1.0 (ko'mir va bug' mashinasi), Industriya 2.0 (neft, elektr va konveyer), Industriya 3.0 (elektronika va avtomatlashtirish) hamda zamonaviy Industriya 4.0 (sun'iy intellekt, buyumlar interneti IoT, raqamli egizaklar va «yashil» robototexnika). Agar dastlabki bosqichlar tabiatni ifloslantirish hisobiga kengaygan bo'lsa, to'rtinchi sanoat inqilobi «Sanoat ekologiyasi» (Industrial Ecology) tamoyillariga tayanadi.",
            en: 'Global manufacturing has progressed through four technological eras: Industry 1.0 (coal and steam), Industry 2.0 (electrification, oil, assembly lines), Industry 3.0 (automation and electronics), and Industry 4.0 (IoT sensors, digital twins, AI process optimization, and clean electrification). Unlike earlier smokestack eras, modern competitiveness rests on Industrial Ecology.',
            ru: 'Мировая индустрия прошла четыре этапа: Индустрию 1.0 (уголь и пар), Индустрию 2.0 (нефть, электричество, конвейер), Индустрию 3.0 (автоматизация) и современную Индустрию 4.0 (интернет вещей, цифровые двойники и энергоэффективная робототехника). Сегодня конкурентоспособность опирается на принципы промышленной экологии.',
          },
          {
            uz: "Sanoat ekologiyasi (1989-yilda R. Frosh va N. Gallopulos tomonidan ilmiy muomalaga kiritilgan) zavod va fabrikalarni tabiiy ekotizimlar analogiyasi sifatida loyihalashtiradi: maqsad faqat truba oxiriga filtr qo'yish («end-of-pipe») emas, balki ishlab chiqarish texnologiyasining o'zini xomashyo, suv va energiyani minimal sarflaydigan yopiq «sanoat metabolizmi»ga o'tkazishdir.",
            en: 'Pioneered by Robert Frosch and Nicholas Gallopoulos (1989), industrial ecology redesigns factories to mimic biological ecosystems—shifting from costly "end-of-pipe" scrubbers toward preventive clean production and closed-loop industrial metabolism.',
            ru: 'Промышленная экология (концепция Фроша и Галлопулоса, 1989 г.) рассматривает заводы по аналогии с природными экосистемами: переход от очистки «на конце трубы» (end-of-pipe) к превентивным ресурсосберегающим технологиям и замкнутому промышленному метаболизму.',
          },
        ],
        keyTakeaway: {
          uz: "Eng ilg'or mavjud texnologiyalar (BAT — Best Available Techniques) standarti korxona rentabelligini oshirgan holda solishtirma chiqindilarni 40–70% ga kamaytiradi.",
          en: 'Adopting Best Available Techniques (BAT) simultaneously lowers unit energy/material costs and slashes industrial pollution intensity by 40–70%.',
          ru: 'Переход на наилучшие доступные технологии (НДТ / BAT) одновременно снижает себестоимость и сокращает удельные выбросы на 40–70%.',
        },
      },
      {
        heading: {
          uz: "2. Yoqilg'i-energetika, kimyo va tog'-kon sanoatining ekologik transformatsiyasi",
          en: '2. Decarbonizing Fuel-Energy, Chemical, and Mining Industries',
          ru: '2. Экологическая трансформация ТЭК, химии и горнорудного сектора',
        },
        paragraphs: [
          {
            uz: "Global miqyosda og'ir sanoat (po'lat quyish, sement, kimyo-ammiak, alyuminiy) va yoqilg'i-energetika majmuasi eng yuqori ekologik yuklama hosil qiluvchi tarmoqlardir: masalan, birgina global sement sanoati insoniyat chiqaradigan CO₂ ning ~7–8 foizini, qora metallurgiya esa ~7–9 foizini yuzaga keltiradi (IEA).",
            en: 'Globally, heavy industry and the fuel-energy complex generate the largest stationary environmental footprint: cement clinker calcination alone accounts for ~7–8% of global CO₂ emissions, while iron and steelmaking contribute another ~7–9% (IEA).',
            ru: 'В мировом масштабе ТЭК и тяжёлая индустрия формируют наибольшую стационарную нагрузку: только цементная отрасль даёт около 7–8% глобальных выбросов CO₂, а чёрная металлургия — ещё 7–9% (МЭА).',
          },
          {
            uz: "O'zbekistonda sanoat ekologiyasini modernizatsiya qilish doirasida eski bug'-kuch IES bloklari FIKi 55–60% ga yetadigan zamonaviy bug'-gaz qurilmalariga (BGQ / CCGT) almashtirilmoqda, Chirchiq shahrida Markaziy Osiyoda ilk bor quyosh energiyasi hisobiga «yashil vodorod» va «yashil ammiak» ishlab chiqarish majmuasi barpo etilmoqda, sement zavodlarida esa quruq usul va chang tutish avtomatik tizimlari majburiy qilindi.",
            en: 'In Uzbekistan, industrial modernization is replacing aging steam turbines with 55–60% efficient Combined-Cycle Gas Turbines (CCGT), launching Central Asia’s first green hydrogen and low-carbon ammonia complex in Chirchik (with ACWA Power), and converting wet-process cement kilns to energy-saving dry clinker lines.',
            ru: 'В Узбекистане устаревшие энергоблоки ТЭС заменяются парогазовыми установками (ПГУ) с КПД 55–60%, в Чирчике строится первый в регионе комплекс «зелёного водорода» и аммиака, а цементные заводы переводятся на энергосберегающий сухой способ производства.',
          },
        ],
      },
      {
        heading: {
          uz: '3. «Sof ekologik mahsulot», hayotiy siklni baholash (LCA) va sanoat chiqindilari',
          en: '3. Clean Eco-Products, Life Cycle Assessment (LCA), and Industrial Tailings',
          ru: '3. «Чистая продукция», оценка жизненного цикла (LCA) и промотходы',
        },
        paragraphs: [
          {
            uz: "Zamonaviy jahon bozorlarida «sof ekologik mahsulot» maqomini olish uchun korxonalar ISO 14001 (Ekologik menejment tizimi) va ISO 14040 (Hayotiy siklni baholash — Life Cycle Assessment, LCA) xalqaro standartlarini joriy etmoqda. LCA metodologiyasi mahsulotning «beshikdan — qabrgacha» (yoki «beshikdan — beshikgacha» — cradle-to-cradle) barcha bosqichlaridagi suv, energiya va uglerod izini hisoblaydi.",
            en: 'Competing in global export markets increasingly requires ISO 14001 Environmental Management Systems and ISO 14040 Life Cycle Assessment (LCA). LCA audits a product’s cumulative water, material, and Scope 1–3 carbon footprint from raw ore ("cradle") through manufacturing, consumer use, and recycling ("cradle-to-cradle").',
            ru: 'Выход на глобальные рынки требует сертификации по стандартам экологического менеджмента ISO 14001 и оценки жизненного цикла продукции ISO 14040 (LCA — от добычи сырья до утилизации по принципу cradle-to-cradle).',
          },
          {
            uz: "O'zbekiston to'qimachilik klasterlari Yevropa brendlariga mahsulot yetkazib berishda OEKO-TEX va Better Cotton ekologik sertifikatlarini, tog'-kon va kimyo sanoati korxonalari esa texnogen shlak va fosfogips uyumlari (yiliga millionlab tonna)dan qurilish materiallari hamda nodir metallarni qayta ajratib olish texnologiyalarini joriy qilmoqda.",
            en: 'Uzbekistan’s textile clusters now adopt OEKO-TEX and Better Cotton sustainability certifications to supply European retailers, while mining and chemical enterprises deploy hydrometallurgical reprocessing to extract rare metals and building materials from historical slag and phosphogypsum heaps.',
            ru: 'Текстильные кластеры Узбекистана активно внедряют сертификацию OEKO-TEX и Better Cotton для поставок в ЕС, а горно-химические предприятия осваивают переработку техногенных отвалов шлаков и фосфогипса в стройматериалы и редкие металлы.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '~30%',
        unit: { uz: 'global IIG ulushi', en: 'of global GHG', ru: 'мировых выбросов' },
        label: {
          uz: 'To‘g‘ridan-to‘g‘ri va bilvosita (elektr bilan) sanoat sektorining global issiqxona gazlaridagi ulushi',
          en: 'Share of global GHG emissions from industry (including indirect electricity)',
          ru: 'Доля промышленности (с учётом электроэнергии) в мировых выбросах ПГ',
        },
        year: '2023',
        source: { uz: 'IPCC AR6 / IEA Industry Report', en: 'IPCC AR6 / IEA', ru: 'МГЭИК ДО6 / МЭА' },
      },
      {
        value: '~26%',
        unit: { uz: 'YaIM ulushi', en: 'of Uzbekistan GDP', ru: 'доля в ВВП РУз' },
        label: {
          uz: "Sanoat tarmog'ining (qurilishsiz) O'zbekiston yalpi ichki mahsulotidagi ulushi",
          en: 'Manufacturing, mining, and utilities share of Uzbekistan’s GDP',
          ru: 'Доля промышленности в структуре ВВП Республики Узбекистан',
        },
        year: '2023',
        source: { uz: "O'zbekiston Statistika agentligi", en: 'Statistics Agency of Uzbekistan', ru: 'Агентство статистики РУз' },
        isApproximate: true, // TODO: tekshiring (Stat.uz ma'lumotlarida ~26–27% atrofida)
      },
      {
        value: '55–60%',
        unit: { uz: 'foydali ish koeff.', en: 'thermal efficiency', ru: 'КПД генерации' },
        label: {
          uz: "Zamonaviy bug'-gaz qurilmalarining (BGQ) FIKi (eski bug' IESlarda 32–35% edi)",
          en: 'Efficiency of modern Combined-Cycle Gas Turbines vs. 32–35% legacy steam units',
          ru: 'КПД современных парогазовых установок (против 32–35% на старых ТЭС)',
        },
        year: '2024',
        source: { uz: 'IEA / Energetika vazirligi', en: 'IEA / Ministry of Energy', ru: 'МЭА / Минэнерго РУз' },
      },
      {
        value: '400k+',
        unit: { uz: 'sertifikatlar', en: 'certified sites', ru: 'сертификатов' },
        label: {
          uz: 'Dunyo bo‘yicha ISO 14001 ekologik menejment tizimini joriy etgan korxonalar soni',
          en: 'Industrial and corporate sites certified to ISO 14001 globally',
          ru: 'Число предприятий мира, сертифицированных по экостандарту ISO 14001',
        },
        year: '2023',
        source: { uz: 'Xalqaro standartlashtirish tashkiloti (ISO Survey)', en: 'ISO Survey', ru: 'Международная организация по стандартизации (ISO)' },
      },
    ],
    charts: [
      {
        id: 't13-industry-co2',
        type: 'pie',
        title: {
          uz: 'Global sanoat CO₂ ajratmalarining asosiy tarmoqlar kesimidagi taqsimoti (%)',
          en: 'Breakdown of Direct Global Industrial CO₂ Emissions by Subsector (%)',
          ru: 'Структура прямых мировых промышленных выбросов CO₂ по отраслям (%)',
        },
        subtitle: {
          uz: 'Po‘lat, sement va kimyo-neft-kimyo sanoatlarining yetakchi ulushi',
          en: 'Heavy reliance on high-temperature process heat in steel, cement, and chemicals',
          ru: 'Доминирующая роль чёрной металлургии, цементной и химической индустрии',
        },
        source: { uz: 'IEA Net Zero Industry Tracker (2023)', en: 'IEA Industry Tracker (2023)', ru: 'МЭА (2023)' },
        unit: '%',
        seriesName: { uz: 'Ulush (%)', en: 'Share (%)', ru: 'Доля (%)' },
        data: [
          { name: { uz: 'Qora metallurgiya (po‘lat)', en: 'Iron & Steel', ru: 'Чёрная металлургия' }, value: 29 },
          { name: { uz: 'Sement sanoati', en: 'Cement', ru: 'Цементная отрасль' }, value: 27 },
          { name: { uz: 'Kimyo va o‘g‘itlar', en: 'Chemicals & Fertilizers', ru: 'Химия и удобрения' }, value: 16 },
          { name: { uz: 'Rangli metallar va alyuminiy', en: 'Aluminum & Non-ferrous', ru: 'Цветная металлургия' }, value: 6 },
          { name: { uz: 'Yengil, oziq-ovqat va b.', en: 'Light, Pulp & Other Mfg.', ru: 'Лёгкая, пищевая и пр.' }, value: 22 },
        ],
      },
      {
        id: 't13-ccgt-efficiency',
        type: 'bar',
        title: {
          uz: '1 MVt·soat elektr ishlab chiqarish uchun sarflanadigan tabiiy gaz hajmi (m³)',
          en: 'Natural Gas Consumed per 1 MWh of Electricity Generated (m³)',
          ru: 'Удельный расход природного газа на выработку 1 МВт·ч электроэнергии (м³)',
        },
        subtitle: {
          uz: 'IESlarni zamonaviy bug‘-gaz (BGQ) texnologiyasiga o‘tkazish samarasi',
          en: 'Resource savings achieved by upgrading legacy thermal units to modern CCGT',
          ru: 'Эффект модернизации энергоблоков ТЭС на парогазовый цикл (ПГУ)',
        },
        source: { uz: 'Energetika iqtisodiyoti texnik me’yorlari', en: 'Power Engineering Benchmarks', ru: 'Технико-экономические показатели ТЭС' },
        unit: 'm³',
        seriesName: { uz: 'Gaz sarfi (m³/MWh)', en: 'Gas Input (m³/MWh)', ru: 'Расход газа (м³/МВт·ч)' },
        data: [
          { name: { uz: 'Eski bug‘-turbina IES', en: 'Legacy Steam Plant', ru: 'Старая паросиловая ТЭС' }, value: 365 },
          { name: { uz: 'Modernizatsiya qilingan IES', en: 'Upgraded Thermal Unit', ru: 'Модернизированный блок' }, value: 290 },
          { name: { uz: 'Zamonaviy BGQ (CCGT)', en: 'Modern CCGT Plant', ru: 'Современная ПГУ' }, value: 215 },
          { name: { uz: 'Quyosh / Shamol ES', en: 'Solar / Wind Plant', ru: 'СЭС / ВЭС' }, value: 0 },
        ],
      },
    ],
    laws: [
      {
        id: 't13-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Ekologik nazorat to'g'risida»gi va «Sanoat xavfsizligi to'g'risida»gi Qonunlari",
          en: 'Laws of Uzbekistan "On Environmental Control" & "On Industrial Safety"',
          ru: 'Законы Республики Узбекистан «Об экологическом контроле» и «О промышленной безопасности»',
        },
        codeAndDate: {
          uz: 'O‘RQ-363-son (27.12.2013) va O‘RQ-57-son (28.09.2006)',
          en: 'No. O’RQ-363 (Dec 27, 2013) & No. O’RQ-57 (Sept 28, 2006)',
          ru: '№ ЗРУ-363 (27.12.2013 г.) и № ЗРУ-57 (28.09.2006 г.)',
        },
        summary: {
          uz: "Xavfli ishlab chiqarish obyektlarida texnogen avariyalarning oldini olish, korxona ichki ekologik xizmati hamda jamoatchilik ekologik nazoratini tartibga soladi.",
          en: 'Mandates industrial hazard prevention, internal corporate environmental auditing, and public environmental oversight.',
          ru: 'Регулируют предупреждение техногенных аварий, производственный экоконтроль на предприятиях и общественный экологический контроль.',
        },
        significance: {
          uz: "Yirik kimyo, metallurgiya va energetika korxonalarida ekologik risk-menejmentni majburiy qiladi.",
          en: 'Embeds mandatory environmental risk management inside heavy industrial facilities.',
          ru: 'Обязывает промышленные гиганты вести непрерывный производственный экомониторинг.',
        },
      },
      {
        id: 't13-law-2',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Energiyadan oqilona foydalanish to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Rational Use of Energy"',
          ru: 'Закон Республики Узбекистан «О рациональном использовании энергии»',
        },
        codeAndDate: {
          uz: '25.04.1997-yil, 412-I-son (2020–2024 energoaudit tuzatishlari bilan)',
          en: 'April 25, 1997, No. 412-I (with mandatory energy-audit amendments)',
          ru: '25.04.1997 г., № 412-I (с поправками об обязательном энергоаудите)',
        },
        summary: {
          uz: "Yirik sanoat korxonalarida majburiy energoaudit o'tkazish, mahsulot birligiga energiya sarfi me'yorlari va energiya samarador uskunalarni rag'batlantirishni belgilaydi.",
          en: 'Requires periodic industrial energy audits, sets specific energy consumption benchmarks, and penalizes wasteful equipment.',
          ru: 'Вводит обязательный энергоаудит энергоёмких предприятий, нормативы удельного расхода энергии и стимулы модернизации.',
        },
        significance: {
          uz: "Sanoat mahsuloti tannarxidagi energiya ulushini va Scope 1–2 emissiyalarni pasaytiradi.",
          en: 'Directly lowers manufacturing unit costs alongside greenhouse gas intensity.',
          ru: 'Снижает энергетическую составляющую себестоимости и выбросы парниковых газов.',
        },
      },
      {
        id: 't13-law-3',
        type: 'international',
        title: {
          uz: "ISO 14000 xalqaro ekologik menejment standartlari oilasi va Stokgolm konvensiyasi (POPs)",
          en: 'ISO 14001 Environmental Management Standard & Stockholm Convention on POPs',
          ru: 'Международный стандарт ISO 14001 и Стокгольмская конвенция о СОЗ',
        },
        codeAndDate: {
          uz: 'ISO 14001:2015 · Stokgolm konvensiyasi — 2001-yil (O‘zbekiston 2019-y. qo‘shilgan, O‘RQ-538)',
          en: 'ISO 14001:2015 & Stockholm Convention (Uzbekistan acceded May 2019, O’RQ-538)',
          ru: 'ISO 14001:2015 · Стокгольмская конвенция (РУз присоединилась в 2019 г., № ЗРУ-538)',
        },
        summary: {
          uz: "Korxonalarda ekologik menejment va ekomarkirovka tizimini o'rnatadi hamda sanoatda turg'un organik ifloslantiruvchilarni (dioksinlar, PXB) taqiqlaydi.",
          en: 'Standardizes corporate environmental management/LCA while banning toxic persistent organic industrial pollutants (PCBs, dioxins).',
          ru: 'Регламентирует корпоративный экоменеджмент и запрещает стойкие органические загрязнители (ПХБ, диоксины) в промышленности.',
        },
        significance: {
          uz: "Mahalliy sanoat korxonalariga «sof ekologik mahsulot» bilan xalqaro tender va birjalarda qatnashish eshigini ochadi.",
          en: 'Qualifies domestic manufacturers as verified green suppliers in global value chains.',
          ru: 'Открывает отечественным заводам доступ к международным «зелёным» закупкам и экспорту.',
        },
      },
    ],
    facts: [
      {
        uz: "Toshkent viloyatining Chirchiq shahrida barpo etilayotgan «yashil vodorod» loyihasi suvni qayta tiklanuvchi elektr energiyasi yordamida elektroliz qilib, azotli mineral o'g'itlarni tabiiy gaz yoqmasdan dekarbonizatsiya qilishga xizmat qiladi.",
        en: 'The Chirchik green hydrogen pilot uses renewable electrolysis to produce low-carbon ammonia fertilizer without burning natural gas feedstock.',
        ru: 'Проект «зелёного водорода» в Чирчике использует электролиз воды от ВИЭ для выпуска низкоуглеродных азотных удобрений.',
      },
      {
        uz: "Toshkent metallurgiya zavodi (TMZ) va zamonaviy elektr yoy pechlarida temir-tersak (lom)dan po'lat eritish — domna pechida ko'mir koksi bilan ruda eritishga qaraganda CO₂ ajratmasini 70–75% ga kamaytiradi.",
        en: 'Electric Arc Furnace (EAF) steelmaking from scrap metal emits 70–75% less CO₂ per tonne of steel than coal-fired blast furnaces.',
        ru: 'Выплавка стали из лома в электродуговых печах даёт на 70–75% меньше выбросов CO₂, чем доменное производство на коксе.',
      },
      {
        uz: "O'zbekiston paxta-to'qimachilik klasterlarida bo'yoqxona oqova suvlarini biologik va membranali tozalab 70% gacha qayta ishlatish Yevropa chakana tarmoqlarining asosiy ekologik talabiga aylangan.",
        en: 'Membrane wastewater recycling (recovering up to 70% of process water) enables Uzbek textile clusters to meet strict European retail sustainability audits.',
        ru: 'Мембранная очистка и возврат до 70% воды в красильных цехах позволяют текстильным кластерам РУз проходить экоаудит брендов ЕС.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Navoiy va Sirdaryo IESlarda bug'-gaz (BGQ) texnologiyasiga o'tish va tabiiy gaz tejami",
        en: 'Thermal Power Modernization via Combined-Cycle Gas Turbines in Navoi & Syrdarya',
        ru: 'Переход на парогазовые установки (ПГУ) на Навоийской и Сырдарьинской ТЭС',
      },
      location: {
        uz: 'Navoiy va Sirdaryo viloyatlari energetika klasterlari',
        en: 'Navoi & Syrdarya Power Hubs, Uzbekistan',
        ru: 'Навоийский и Сырдарьинский энергетические узлы, Узбекистан',
      },
      challenge: {
        uz: "XX asrda qurilgan an'anaviy IES energobloklarining FIKi 32–34% atrofida bo'lib, yoqilgan gaz issiqligining uchdan ikki qismi havoga behuda tarqalar edi.",
        en: 'Legacy 20th-century steam power blocks operated at 32–34% efficiency, wasting two-thirds of natural gas thermal energy.',
        ru: 'Старые паросиловые энергоблоки имели КПД всего 32–34%, теряя две трети тепловой энергии сжигаемого газа.',
      },
      solution: {
        uz: "Xalqaro moliya institutlari va investorlar bilan birgalikda 450–1 500 MVt quvvatli yuqori samarador bug'-gaz (CCGT) stansiyalari ishga tushirildi.",
        en: 'High-efficiency 450–1,500 MW Combined-Cycle Gas Turbine (CCGT) plants were commissioned, capturing exhaust heat for a second steam turbine cycle.',
        ru: 'Введены современные парогазовые станции мощностью 450–1 500 МВт, использующие тепло выхлопных газов во втором паровом контуре.',
      },
      economicOutcome: {
        uz: "FIK 55–60% gacha ko'tarilib, har yili milliardlab kub metr tabiiy gaz tejaldi va atmosferaga millionlab tonna CO₂ chiqishining oldi olindi.",
        en: 'Thermal efficiency jumped to 55–60%, saving billions of cubic meters of gas annually and avoiding millions of tonnes of CO₂.',
        ru: 'КПД вырос до 55–60%, что сберегает миллиарды кубометров газа и предотвращает выброс миллионов тонн CO₂ ежегодно.',
      },
    },
    terms: [
      {
        term: { uz: 'Sanoat ekologiyasi', en: 'Industrial Ecology', ru: 'Промышленная экология' },
        definition: {
          uz: "Sanoat korxonalaridagi moddiy va energetik oqimlarni tabiiy ekotizimlardagi yopiq aylanishga yaqinlashtirishni o'rganuvchi amaliy fan.",
          en: 'Systems science studying material and energy flows through industrial systems to design closed-loop, low-waste manufacturing.',
          ru: 'Научно-практическое направление по организации промышленных производств по образцу замкнутых природных экосистем.',
        },
      },
      {
        term: { uz: 'Hayotiy siklni baholash (LCA)', en: 'Life Cycle Assessment (LCA)', ru: 'Оценка жизненного цикла (LCA)' },
        definition: {
          uz: "Mahsulotning xomashyo qazib olishdan boshlab ishlab chiqarish, tashish, ishlatish va qayta ishlashgacha bo'lgan jami ekologik ta'sirini hisoblash usuli.",
          en: 'ISO-standardized methodology quantifying cumulative environmental impacts of a product from raw-material extraction to disposal.',
          ru: 'Стандартизированный метод расчёта совокупного воздействия товара на среду от добычи сырья до утилизации (ISO 14040).',
        },
      },
      {
        term: { uz: 'Yashil vodorod (Green Hydrogen)', en: 'Green Hydrogen', ru: '«Зелёный» водород' },
        definition: {
          uz: "Quyosh yoki shamol elektr energiyasi yordamida suvni elektroliz qilish orqali uglerod ajratmasdan olinadigan toza sanoat yoqilg'isi va kimyoviy xomashyo.",
          en: 'Zero-carbon hydrogen produced by splitting water via electrolysis powered exclusively by renewable electricity.',
          ru: 'Безуглеродный водород, получаемый электролизом воды за счёт энергии солнечных или ветровых электростанций.',
        },
      },
      {
        term: { uz: 'Eng ilg‘or mavjud texnologiyalar (BAT)', en: 'Best Available Techniques (BAT)', ru: 'Наилучшие доступные технологии (НДТ)' },
        definition: {
          uz: "Iqtisodiy jihatdan o'zini oqlaydigan va atrof-muhitga eng kam solishtirma tashlama chiqarishni ta'minlaydigan zamonaviy sanoat texnologik standarti.",
          en: 'Economically viable, state-of-the-art industrial processes serving as regulatory benchmarks for minimal emission intensity.',
          ru: 'Экономически доступные современные технологические решения, обеспечивающие минимальное удельное воздействие на среду.',
        },
      },
    ],
    quiz: [
      {
        id: 'q13-1',
        question: {
          uz: "«End-of-pipe» (truba oxirida tozalash) yondashuvidan farqli ravishda sanoat ekologiyasining ustuvor g'oyasi nima?",
          en: 'How does modern Industrial Ecology differ fundamentally from legacy "end-of-pipe" pollution control?',
          ru: 'Чем подход промышленной экологии принципиально отличается от очистки «на конце трубы» (end-of-pipe)?',
        },
        options: [
          { uz: "Chiqindi hosil bo'lishining o'zini texnologik boshida kamaytirish va yopiq siklda qayta ishlatish", en: 'Preventing waste at the source and cycling byproducts in closed industrial loops', ru: 'Предотвращение образования отходов внутри самого техпроцесса и замкнутый оборот ресурсов' },
          { uz: 'Faqat zavod mo‘risini balandroq qurish', en: 'Simply building taller smokestacks', ru: 'Простое увеличение высоты дымовых труб' },
          { uz: 'Chiqindilarni tunda daryoga oqizish', en: 'Discharging effluents at night', ru: 'Сброс стоков в ночное время' },
          { uz: 'Sanoat ishlab chiqarishini butunlay yopish', en: 'Shutting down all manufacturing', ru: 'Полная ликвидация промышленности' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Sanoat ekologiyasi zararli moddani hosil qilib keyin tutishdan ko'ra, yopiq siklli toza texnologiya qo'llash iqtisodiy arzonroq ekanini asoslaydi.",
          en: 'Preventive process redesign cuts both raw input costs and downstream abatement liabilities.',
          ru: 'Превентивная перестройка техпроцесса экономит сырьё и снижает затраты на очистные сооружения.',
        },
      },
      {
        id: 'q13-2',
        question: {
          uz: "Mahsulotning xomashyodan utilizatsiyagacha bo'lgan jami ekologik ta'sirini hisoblash standarti (ISO 14040) qanday ataladi?",
          en: 'What ISO-standardized method quantifies a product’s environmental footprint from raw material to disposal?',
          ru: 'Как называется метод расчёта экологического следа продукции от добычи сырья до утилизации (ISO 14040)?',
        },
        options: [
          { uz: 'Hayotiy siklni baholash (LCA — Life Cycle Assessment)', en: 'Life Cycle Assessment (LCA)', ru: 'Оценка жизненного цикла (LCA)' },
          { uz: 'Balans likvidligi tahlili', en: 'Balance sheet liquidity ratio', ru: 'Анализ ликвидности баланса' },
          { uz: 'Valyuta svopi', en: 'Currency swap', ru: 'Валютный своп' },
          { uz: 'Demografik piramida', en: 'Demographic pyramid', ru: 'Демографическая пирамида' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "LCA (Life Cycle Assessment) «sof ekologik mahsulot» va uglerod pasportini berishning xalqaro ilmiy asosidir.",
          en: 'LCA prevents burden-shifting across supply-chain stages and underpins carbon footprint labels.',
          ru: 'Методология LCA позволяет объективно рассчитать полный углеродный и водный след готового изделия.',
        },
      },
      {
        id: 'q13-3',
        question: {
          uz: "Zamonaviy bug'-gaz qurilmalarining (BGQ / CCGT) foydali ish koeffitsiyenti (FIK) o'rtacha necha foizni tashkil etadi?",
          en: 'What thermal efficiency do modern Combined-Cycle Gas Turbine (CCGT) power plants achieve?',
          ru: 'Какого уровня КПД достигают современные парогазовые установки (ПГУ) на электростанциях?',
        },
        options: [
          { uz: '55–60%', en: '55–60%', ru: '55–60%' },
          { uz: '10–12%', en: '10–12%', ru: '10–12%' },
          { uz: '120%', en: '120%', ru: '120%' },
          { uz: '20%', en: '20%', ru: '20%' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Eski bug' IESlarining FIKi 32–35% bo'lsa, ikki konturli zamonaviy BGQ stansiyalarida FIK 55–60% ga yetadi.",
          en: 'Combining a gas turbine with a heat-recovery steam turbine raises fuel efficiency to 55–60%.',
          ru: 'Использование тепла уходящих газов во втором контуре поднимает КПД ПГУ до 55–60%.',
        },
      },
      {
        id: 'q13-4',
        question: {
          uz: "O'zbekistonning qaysi shahrida Markaziy Osiyodagi birinchi «yashil vodorod» va «yashil ammiak» loyihasi amalga oshirilmoqda?",
          en: 'In which Uzbek industrial city is Central Asia’s pioneering green hydrogen and low-carbon ammonia complex located?',
          ru: 'В каком городе Узбекистана реализуется первый в Центральной Азии проект «зелёного водорода» и аммиака?',
        },
        options: [
          { uz: 'Chirchiq (Toshkent viloyati)', en: 'Chirchik (Tashkent Region)', ru: 'Чирчик (Ташкентская область)' },
          { uz: 'Shahrisabz', en: 'Shakhrisabz', ru: 'Шахрисабз' },
          { uz: 'Marg‘ilon', en: 'Margilan', ru: 'Маргилан' },
          { uz: 'Chust', en: 'Chust', ru: 'Чуст' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Chirchiq kimyo klasterida qayta tiklanuvchi energiya asosida yashil vodorod va mineral o'g'it olish loyihasi yo'lga qo'yilgan.",
          en: 'Chirchik hosts Uzbekistan’s flagship green hydrogen electrolysis facility integrated with nitrogen fertilizer production.',
          ru: 'В Чирчике на базе химического кластера запущен проект производства «зелёного водорода» для декарбонизации удобрений.',
        },
      },
      {
        id: 'q13-5',
        question: {
          uz: "To'g'ridan-to'g'ri sanoat CO₂ ajratmalarida eng katta ulushga ega bo'lgan ikki og'ir sanoat tarmog'i qaysilar?",
          en: 'Which two heavy industrial subsectors generate over half of direct global industrial CO₂ emissions?',
          ru: 'Какие две отрасли тяжёлой индустрии дают более половины прямых мировых промышленных выбросов CO₂?',
        },
        options: [
          { uz: 'Qora metallurgiya (po‘lat) va sement sanoati', en: 'Iron/steel and cement manufacturing', ru: 'Чёрная металлургия (сталь) и цементная отрасль' },
          { uz: 'Soatsozlik va zargarlik', en: 'Watchmaking and jewelry', ru: 'Часовая и ювелирная отрасли' },
          { uz: 'Poligrafiya va mebelsozlik', en: 'Printing and furniture', ru: 'Полиграфия и мебельное дело' },
          { uz: 'Tikuvchilik va poyabzal', en: 'Garments and footwear', ru: 'Швейная и обувная отрасли' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Po'lat quyish (~29%) va sement klinkeri pishirish (~27%) global to'g'ridan-to'g'ri sanoat CO₂ chiqindilarining yarmidan ko'pini beradi.",
          en: 'Steel (~29%) and cement (~27%) together account for ~56% of direct global industrial CO₂ emissions (IEA).',
          ru: 'На выплавку стали (~29%) и обжиг цементного клинкера (~27%) приходится свыше половины прямых промвыбросов CO₂.',
        },
      },
    ],
  },

  {
    id: 14,
    isIndependentStudy: false,
    iconName: 'Users',
    title: {
      uz: 'Aholi demografiyasi va demografik siyosat',
      en: 'Population Demographics, Urbanization, and Demographic Policy',
      ru: 'Демография населения и демографическая политика',
    },
    shortDescription: {
      uz: "Global va O'zbekiston demografik o'sishi, urbanizatsiya va «aqlli shaharlar», tug'ilish-o'lim va umr ko'rish davomiyligi, demografik dividend va farovonlik.",
      en: 'Global and Uzbekistan population dynamics, urbanization and green cities, fertility/mortality and life expectancy, demographic dividend, and welfare.',
      ru: 'Мировая и национальная демография, урбанизация, рождаемость, смертность и продолжительность жизни, демографическая политика и благосостояние.',
    },
    keywords: {
      uz: ['demografiya', 'urbanizatsiya', 'tabiiy ko‘payish', 'umr ko‘rish davomiyligi', 'demografik dividend', 'IPAT formulasi', 'farovonlik'],
      en: ['demographics', 'urbanization', 'natural increase', 'life expectancy', 'demographic dividend', 'IPAT equation', 'human welfare'],
      ru: ['демография', 'урбанизация', 'естественный прирост', 'продолжительность жизни', 'демографический дивиденд', 'благосостояние'],
    },
    sections: [
      {
        heading: {
          uz: '1. Global demografik dinamika va IPAT ekologik-iqtisodiy tenglamasi',
          en: '1. Global Demographic Trends and the IPAT Environmental Equation',
          ru: '1. Глобальная демографическая динамика и уравнение нагрузки IPAT',
        },
        paragraphs: [
          {
            uz: "2022-yil noyabr oyida Yer yuzi aholisi 8 milliard kishidan oshdi; BMTning «Jahon aholisi istiqbollari» (UN World Population Prospects 2024) prognoziga ko'ra, global aholi soni 2050-yilda ~9,7 milliardga yetib, 2080-yillarning o'rtalarida ~10,3 milliard nuqtada eng yuqori cho'qqiga chiqishi kutilmoqda. Shu bilan birga mintaqalar o'rtasida keskin tafovut mavjud: Yevropa va Sharqiy Osiyoda aholi qarishi (depopulyatsiya) kuzatilsa, Afrika va Markaziy Osiyoda yosh mehnatga layoqatli qatlam tez o'smoqda.",
            en: 'World population crossed 8 billion in November 2022 and is projected by the UN World Population Prospects (2024) to reach ~9.7 billion in 2050 before peaking near ~10.3 billion in the mid-2080s. Sharp regional divergence prevails: Europe and East Asia face rapid aging, whereas Sub-Saharan Africa and Central Asia experience youthful demographic expansion.',
            ru: 'В ноябре 2022 года население Земли превысило 8 млрд человек; по прогнозу ООН (World Population Prospects 2024), к 2050 году оно достигнет ~9,7 млрд и выйдет на пик около 10,3 млрд в 2080-х годах. При этом регионы развиваются разнонаправленно: старение в Европе и Восточной Азии контрастирует с демографической молодостью Центральной Азии.',
          },
          {
            uz: "Demografiyaning atrof-muhitga ta'siri Pol Erlix va Jon Xoldrenning mashhur «I = P × A × T» formulasi orqali tahlil qilinadi: bu yerda I — atrof-muhitga yuklama (Impact), P — aholi soni (Population), A — jon boshiga iste'mol darajasi/farovonlik (Affluence, YaIM/aholi), T — texnologiyaning resurs va uglerod sig'imi (Technology). Demak, aholi va farovonlik o'sib borar ekan, ekologik barqarorlikni saqlashning yagona yo'li T omilini (yashil texnologiyalar orqali) keskin kichraytirishdir.",
            en: 'Environmental economists formalize demographic pressure using Ehrlich and Holdren’s identity I = P × A × T, where Environmental Impact (I) equals Population (P) × per-capita Affluence (A) × Technological emission intensity per dollar of GDP (T). Rising population and living standards require slashing T via clean technology to keep planetary impact bounded.',
            ru: 'Взаимосвязь демографии и экологии описывается классическим тождеством П. Эрлиха и Дж. Холдрена: I = P × A × T, где нагрузка на среду (I) равна произведению численности населения (P), подушевого потребления (A) и ресурсоёмкости технологий (T). При росте P и A устойчивость достижима только через радикальное снижение T.',
          },
        ],
        keyTakeaway: {
          uz: "Yuqori daromadli 1 nafar iste'molchining uglerod izi kam daromadli mamlakatlardagi o'rtacha ko'rsatkichdan 10–20 barobar yuqori bo'lishi mumkin — ya'ni iste'mol madaniyati (A) va texnologiya (T) hal qiluvchi rol o'ynaydi.",
          en: 'Per-capita consumption patterns (A) and clean technology (T) matter as much as headcount (P): high-income lifestyles emit 10–20x more CO₂ per person than low-income averages.',
          ru: 'Модель потребления (A) и чистота технологий (T) значат не меньше самой численности (P): подушевой след в богатых странах в 10–20 раз выше, чем в беднейших.',
        },
      },
      {
        heading: {
          uz: "2. Urbanizatsiya jarayonlari va barqaror «yashil shaharlar» iqtisodiyoti",
          en: '2. Global Urbanization and Sustainable Green City Economics',
          ru: '2. Процессы урбанизации и экономика устойчивых «зелёных городов»',
        },
        paragraphs: [
          {
            uz: "Bugun jahon aholisining ~57 foizi shaharlarda istiqomat qiladi va 2050-yilga borib bu ulush 68 foizga yetadi (UN-Habitat). Shaharlar yer yuzining atigi 2–3 foizini egallasa-da, global YaIMning 80 foizdan ortig'ini yaratadi, ayni paytda jahon energiyasining ~75 foizini iste'mol qiladi va CO₂ ajratmalarining ~70 foizini hosil qiladi.",
            en: 'Roughly 57% of humanity lives in cities today—projected to reach 68% by 2050 (UN-Habitat). Occupying under 3% of global land, cities generate over 80% of global GDP while consuming ~75% of energy and accounting for ~70% of energy-related CO₂ emissions.',
            ru: 'Около 57% мирового населения сегодня проживает в городах, а к 2050 году эта доля вырастет до 68% (ООН-Хабитат). Занимая менее 3% суши, города создают свыше 80% мирового ВВП, но потребляют ~75% энергии и дают около 70% энергетических выбросов CO₂.',
          },
          {
            uz: "Tartibsiz gorizontal kengayuvchi shaharlar (urban sprawl) qishloq xo'jaligi yerlarini yutib, avtomobil tirbandligini kuchaytiradi. Barqaror urbanizatsiya esa ixcham ko'p markazli rejalashtirish, jamoat elektr transporti (metro, tramvay, BRT), energiya tejamkor «yashil binolar» va shahar suvlari hamda bog'larining uyg'unligiga tayanadi (masalan, «Yangi Toshkent» loyihasida «15 daqiqalik piyoda shahar», trigeneratsiya va yashil bog'lar konsepsiyasi qo'llanilmoqda).",
            en: 'Unplanned suburban sprawl devours prime farmland and locks households into car dependence. Sustainable urbanism prioritizes transit-oriented density, metro/rail corridors, insulated green buildings, and sponge-city parks—principles embedded in Uzbekistan’s "New Tashkent" masterplan featuring 15-minute walkable districts and district trigeneration.',
            ru: 'Хаотичное расползание пригородов поглощает пашню и усиливает автопробки. Устойчивая урбанизация опирается на рельсовый электротранспорт, энергоэффективные здания и концепцию «15-минутного города» — эти решения заложены в мастер-план строительства «Нового Ташкента».',
          },
        ],
      },
      {
        heading: {
          uz: "3. O'zbekistonda demografik o'sish, umr ko'rish davomiyligi va aholi farovonligi",
          en: '3. Demographic Growth, Life Expectancy, and Welfare Policy in Uzbekistan',
          ru: '3. Демографическая политика, продолжительность жизни и благосостояние в Узбекистане',
        },
        paragraphs: [
          {
            uz: "O'zbekiston Markaziy Osiyoning eng yirik demografik markazi bo'lib, doimiy aholi soni 37 million kishidan oshdi (yillik tabiiy o'sish ~700–750 ming kishi atrofida, o'rtacha yosh ~29 yosh). Tug'ilishda kutilayotgan umr ko'rish davomiyligi mustaqillik yillarida ~67 yoshdan 74,6–75 yoshgacha ko'tarildi, onalar va go'daklar o'limi sezilarli kamaydi (Statistika agentligi).",
            en: 'Uzbekistan is Central Asia’s demographic powerhouse, with its permanent population surpassing 37 million (growing by ~700–750k naturally per year, median age ~29). Average life expectancy at birth has risen from ~67 years in the early 1990s to ~74.6–75.0 years today alongside falling infant mortality (Statistics Agency of Uzbekistan).',
            ru: 'Узбекистан является крупнейшим демографическим центром региона: постоянное население превысило 37 млн человек (естественный прирост ~700–750 тыс. в год, медианный возраст ~29 лет). Ожидаемая продолжительность жизни выросла с ~67 лет в начале 1990-х до ~74,6–75 лет (Агентство статистики РУз).',
          },
          {
            uz: "BMT prognozlariga ko'ra, 2040–2050-yillarga borib O'zbekiston aholisi 45–50 million kishiga yaqinlashadi. Ushbu «demografik dividend»ni (mehnatga layoqatli yoshlarning yuqori ulushini) iqtisodiy farovonlikka aylantirish uchun sifatli oliy ta'lim, yashil ish o'rinlari yaratish, toza ichimlik suvi bilan qamrovni 90%+ ga yetkazish hamda BMT Inson kamoloti indeksini (HDI) oshirish davlat demografik va ijtimoiy siyosatining o'zagini tashkil etadi.",
            en: 'Projections indicate Uzbekistan’s population will approach 45–50 million by mid-century. Harvesting this "demographic dividend" without exhausting water and energy endowments requires investing heavily in STEM/higher education, clean-tech jobs, universal piped drinking water, and advancing the UN Human Development Index (HDI).',
            ru: 'К середине века население Узбекистана приблизится к 45–50 млн человек. Превращение этого «демографического дивиденда» в рост благосостояния без перегрузки экосистем требует инвестиций в образование, создание «зелёных» рабочих мест, питьевое водоснабжение и рост Индекса человеческого развития (ИЧР).',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '8.1+',
        unit: { uz: 'mlrd kishi', en: 'bln people', ru: 'млрд человек' },
        label: {
          uz: 'Yer shari aholisining umumiy soni (2050-yilda ~9,7 mlrd prognoz)',
          en: 'Total world population (projected ~9.7 billion by 2050)',
          ru: 'Численность населения Земли (прогноз ~9,7 млрд к 2050 г.)',
        },
        year: '2024',
        source: { uz: 'BMT Aholishunoslik bo‘limi (UN DESA)', en: 'UN World Population Prospects 2024', ru: 'Отдел народонаселения ООН (2024)' },
      },
      {
        value: '37.5+',
        unit: { uz: 'mln kishi', en: 'mln people', ru: 'млн человек' },
        label: {
          uz: "O'zbekiston Respublikasi doimiy aholisi soni (shahar aholisi ulushi ~51%)",
          en: 'Permanent population of the Republic of Uzbekistan (~51% urban)',
          ru: 'Численность постоянного населения Республики Узбекистан (~51% горожан)',
        },
        year: '2025',
        source: { uz: "O'zbekiston Statistika agentligi (Stat.uz)", en: 'Statistics Agency of Uzbekistan', ru: 'Агентство статистики РУз (Stat.uz)' },
      },
      {
        value: '74.7',
        unit: { uz: 'yosh', en: 'years', ru: 'лет' },
        label: {
          uz: "O'zbekistonda tug'ilishda kutilayotgan o'rtacha umr ko'rish davomiyligi",
          en: 'Average life expectancy at birth in Uzbekistan',
          ru: 'Ожидаемая продолжительность жизни при рождении в Узбекистане',
        },
        year: '2023',
        source: { uz: "O'zbekiston Statistika agentligi", en: 'Statistics Agency of Uzbekistan', ru: 'Агентство статистики РУз' },
      },
      {
        value: '57%',
        unit: { uz: 'global shahar ulushi', en: 'urban share', ru: 'доля горожан' },
        label: {
          uz: 'Jahon aholisining shaharlarda yashovchi qismi (2050-yilda 68% ga yetadi)',
          en: 'Share of world population residing in urban areas (68% by 2050)',
          ru: 'Доля городского населения мира (прогноз 68% к 2050 г.)',
        },
        year: '2023',
        source: { uz: 'UN-Habitat / Jahon banki', en: 'UN-Habitat / World Bank', ru: 'ООН-Хабитат / Всемирный банк' },
      },
    ],
    charts: [
      {
        id: 't14-uz-pop',
        type: 'area',
        title: {
          uz: "O'zbekiston Respublikasi doimiy aholisi sonining o'sish dinamikasi va prognozi (mln kishi)",
          en: 'Uzbekistan Permanent Population Growth & Mid-Century Projection (Millions)',
          ru: 'Динамика и прогноз численности постоянного населения Узбекистана (млн чел.)',
        },
        subtitle: {
          uz: 'Demografik o‘sish sharoitida suv, uy-joy va yashil energiya infratuzilmasiga talab',
          en: 'Rising demand for green housing, clean water, and sustainable jobs',
          ru: 'Рост спроса на жильё, питьевую воду, энергию и рабочие места',
        },
        source: { uz: 'Statistika agentligi va BMT demografik prognozi', en: 'Statistics Agency of Uzbekistan & UN DESA', ru: 'Агентство статистики РУз и прогноз ООН' },
        unit: 'mln',
        seriesName: { uz: 'Aholi soni (mln)', en: 'Population (Millions)', ru: 'Население (млн чел.)' },
        data: [
          { name: '1991', value: 20.6 },
          { name: '2000', value: 24.5 },
          { name: '2010', value: 28.0 },
          { name: '2020', value: 33.9 },
          { name: '2025', value: 37.5 },
          { name: '2040 (P)', value: 45.2 },
        ],
      },
      {
        id: 't14-transit-co2',
        type: 'bar',
        title: {
          uz: 'Shahar transport turlarida 1 yo‘lovchi-kilometrga o‘rtacha CO₂ ajratmasi (gramm CO₂ / pkm)',
          en: 'Urban Passenger Transport Emissions per Passenger-Kilometer (g CO₂ / pkm)',
          ru: 'Удельные выбросы CO₂ городского транспорта на 1 пассажиро-километр (г CO₂ / пасс.-км)',
        },
        subtitle: {
          uz: 'Barqaror urbanizatsiyada jamoat elektr transportining ekologik ustunligi',
          en: 'Decarbonization leverage of shifting urban commuters from solo cars to rail/metro',
          ru: 'Экологическое преимущество метро, трамваев и электробусов в мегаполисах',
        },
        source: { uz: 'IEA / European Environment Agency', en: 'IEA / European Environment Agency', ru: 'МЭА / Европейское агентство ОС' },
        unit: 'g CO₂',
        seriesName: { uz: 'Emissiya (g CO₂/pkm)', en: 'Emissions (g CO₂/pkm)', ru: 'Выбросы (г CO₂/пасс.-км)' },
        data: [
          { name: { uz: 'Shaxsiy benzin avtomobil', en: 'Single-Occupant Petrol Car', ru: 'Личный бензиновый авто' }, value: 170 },
          { name: { uz: 'Dizel avtobus', en: 'Standard Diesel Bus', ru: 'Дизельный автобус' }, value: 68 },
          { name: { uz: 'Elektromobil (EV)', en: 'Battery Electric Car', ru: 'Электромобиль' }, value: 48 },
          { name: { uz: 'Metro / Elektrobus', en: 'Metro Rail / Electric Bus', ru: 'Метро / Электробус' }, value: 18 },
          { name: { uz: 'Velosiped va piyoda', en: 'Cycling & Walking', ru: 'Велосипед и пешком' }, value: 0 },
        ],
      },
    ],
    laws: [
      {
        id: 't14-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining Shaharsozlik kodeksi (yangi tahriri)",
          en: 'Urban Planning Code of the Republic of Uzbekistan (Revised Edition)',
          ru: 'Градостроительный кодекс Республики Узбекистан (новая редакция)',
        },
        codeAndDate: {
          uz: '22.02.2021-yil, O‘RQ-676-son',
          en: 'February 22, 2021, No. O’RQ-676',
          ru: '22.02.2021 г., № ЗРУ-676',
        },
        summary: {
          uz: "Aholi punktlari bosh rejalarini jamoatchilik muhokamasidan o'tkazish, yashil va rekreatsion hududlar me'yorlarini saqlash hamda energiya tejamkor qurilish talablarini belgilaydi.",
          en: 'Mandates masterplan public consultations, minimum urban green-space ratios, seismic safety, and energy-efficient building codes.',
          ru: 'Закрепляет общественное обсуждение генпланов городов, нормативы озеленённых зон и энергоэффективность зданий.',
        },
        significance: {
          uz: "Tartibsiz qurilishlar hisobiga shahar bog'lari qisqarishining oldini oladi.",
          en: 'Prevents unplanned infill development from eroding urban parks and ventilation corridors.',
          ru: 'Предотвращает хаотичную застройку и сокращение городских зелёных зон.',
        },
      },
      {
        id: 't14-law-2',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Aholining sanitariya-epidemiologik osoyishtaligi to'g'risida»gi Qonuni",
          en: 'Law of Uzbekistan "On Sanitary and Epidemiological Welfare of the Population"',
          ru: 'Закон РУз «О санитарно-эпидемиологическом благополучии населения»',
        },
        codeAndDate: {
          uz: '26.08.2015-yil, O‘RQ-393-son',
          en: 'August 26, 2015, No. O’RQ-393',
          ru: '26.08.2015 г., № ЗРУ-393',
        },
        summary: {
          uz: "Ichimlik suvi sifati, turar joylar havosi, shovqin va vibratsiya me'yorlari hamda sanoat korxonalari atrofidagi sanitariya-himoya zonalarini belgilaydi.",
          en: 'Enforces safe drinking water standards, residential air/noise norms, and mandatory sanitary buffer zones around factories.',
          ru: 'Устанавливает нормативы качества питьевой воды, воздуха жилых зон, шума и санитарно-защитных зон вокруг промпредприятий.',
        },
        significance: {
          uz: "Ekologik omillarning aholi umr ko'rish davomiyligi va salomatligiga salbiy ta'sirini huquqiy cheklaydi.",
          en: 'Directly protects urban public health and life expectancy from industrial nuisances.',
          ru: 'Защищает здоровье и продолжительность жизни граждан от неблагоприятных факторов городской среды.',
        },
      },
      {
        id: 't14-law-3',
        type: 'international',
        title: {
          uz: "BMTning Yangi shaharsozlik kun tartibi (New Urban Agenda — Habitat III) va BRM 11-maqsad",
          en: 'UN New Urban Agenda (Habitat III) & Sustainable Development Goal 11',
          ru: 'Новая программа развития городов ООН (Хабитат III) и ЦУР 11',
        },
        codeAndDate: {
          uz: 'Kito deklaratsiyasi, 20.10.2016-yil · BMT BRM (2015–2030)',
          en: 'Quito Declaration, Oct 20, 2016 · UN SDG 11 (2015–2030)',
          ru: 'Декларация Кито от 20.10.2016 г. · ЦУР ООН 11 (2015–2030)',
        },
        summary: {
          uz: "2030-yilga qadar shaharlarni inklyuziv, xavfsiz, iqlimga chidamli va ekologik barqaror maskanga aylantirish mezonlarini belgilaydi.",
          en: 'Provides global standards for inclusive, disaster-resilient, low-carbon cities with universal public transit and green spaces.',
          ru: 'Определяет международные стандарты инклюзивных, безопасных, климатически устойчивых и экологичных городов.',
        },
        significance: {
          uz: "O'zbekistonda Samarqand, Namangan, Buxoro va Yangi Toshkent «yashil shahar» dasturlarini YEI va YTTB bilan moliyalashtirishga asos bo'ladi.",
          en: 'Guides EBRD Green Cities investments in Samarkand, Namangan, and Tashkent.',
          ru: 'Служит ориентиром для программ «Зелёные города» (ЕБРР и ПРООН) в городах Узбекистана.',
        },
      },
    ],
    facts: [
      {
        uz: "BMT Inson kamoloti indeksi (HDI) mamlakat rivojlanishini faqat jon boshiga YaIM bilan emas, balki uchta o'lchov — uzoq va sog'lom umr, ta'lim darajasi va munosib turmush darajasi uyg'unligida baholaydi; 2020-yildan BMT bunga «Sayyoraviy bosim tuzatishi»ni (PHDI) ham qo'shdi!",
        en: 'Since 2020, UNDP publishes the Planetary Pressures-adjusted Human Development Index (PHDI), discounting national HDI scores by per-capita CO₂ emissions and material footprint.',
        ru: 'С 2020 года ПРООН рассчитывает Индекс человеческого развития, скорректированный с учётом планетарной нагрузки (ИЧРП) — выбросов CO₂ и материального следа.',
      },
      {
        uz: "Samarqand shahri Yevropa tiklanish va taraqqiyot bankining (EBRT) «Yashil shaharlar» (Green Cities) dasturiga Markaziy Osiyodan qo'shilgan yetakchi shaharlardan bo'lib, elektrobuslar tarmog'ini joriy etdi.",
        en: 'Samarkand joined the EBRD Green Cities program, rolling out modern electric buses and upgrading municipal solid waste and street lighting.',
        ru: 'Самарканд вошёл в программу ЕБРР «Зелёные города», внедрив парк современных электробусов и энергоэффективное освещение.',
      },
      {
        uz: "O'zbekiston mehnat bozoriga har yili 600 mingdan ortiq yoshlar kirib kelmoqda — «yashil energetika», IT, suv muhandisligi va agrobiznes ushbu demografik o'sishni yuqori daromadli ish o'rinlari bilan ta'minlovchi drayverlardir.",
        en: 'Over 600,000 young labor-market entrants join Uzbekistan’s workforce annually, making green engineering, IT, and modern agribusiness critical job creators.',
        ru: 'Ежегодно на рынок труда Узбекистана выходят свыше 600 тыс. молодых специалистов, формируя кадровый ресурс «зелёной» модернизации.',
      },
    ],
    caseStudy: {
      title: {
        uz: "«Yangi Toshkent» ekologik va aqlli shaharsozlik loyihasi",
        en: '"New Tashkent" Masterplan: Transit-Oriented and Sponge-City Urbanism',
        ru: 'Проект «Новый Ташкент»: эколого-экономическая модель умного города',
      },
      location: {
        uz: 'Toshkent viloyati (Chirchiq va Qorasuv daryolari oralig‘i)',
        en: 'East of Tashkent between the Chirchik and Karasu Rivers, Uzbekistan',
        ru: 'Междуречье Чирчика и Карасу, Ташкентская область, Узбекистан',
      },
      challenge: {
        uz: "Mavjud poytaxt infratuzilmasiga demografik yuklamaning ortib ketishi, transport tirbandligi va yozgi «issiqlik oroli» ta'sirini kamaytirish zarurati tug'ildi.",
        en: 'Rapid demographic growth strained legacy Tashkent roads, utilities, and air ventilation corridors.',
        ru: 'Быстрый демографический рост создал перегрузку транспортной и коммунальной сети существующей столицы.',
      },
      solution: {
        uz: "Maktab, bog'cha va parklar 15 daqiqalik piyoda masofada joylashgan mahallalar, yer osti metro va tramvay liniyalari, Chirchiq-Qorasuv suvbo'yi yashil koridorlari hamda trigeneratsiya (bitta tizimda elektr, issiqlik va yozgi sovitish) loyihalashtirildi.",
        en: 'Designed around 15-minute walkable neighborhoods, rail/tram priority, Chirchik-Karasu blue-green cooling canals, and high-efficiency district trigeneration (power, heat, and chilled water).',
        ru: 'В основу положены концепция «15-минутного города», приоритет метро и трамвая, водно-зелёный каркас вдоль рек и централизованная тригенерация (электричество, тепло и холод).',
      },
      economicOutcome: {
        uz: "Binolarni isitish va sovitish energiya sarfi an'anaviy massivlarga qaraganda ~35–40% ga qisqaradi va avtotransport tashlamalari keskin kamayadi.",
        en: 'District trigeneration and green building envelopes cut heating/cooling energy demand by ~35–40% while minimizing private car congestion.',
        ru: 'Тригенерация и энергоэффективные здания снижают затраты энергии на отопление и охлаждение на ~35–40% при минимизации автотрафика.',
      },
    },
    terms: [
      {
        term: { uz: 'Urbanizatsiya', en: 'Urbanization', ru: 'Урбанизация' },
        definition: {
          uz: "Mamlakat va jahon rivojlanishida shaharlar roli hamda shahar aholisi ulushining ijtimoiy-iqtisodiy o'sib borish jarayoni.",
          en: 'Socio-economic shift in which an increasing proportion of a population resides in urban settlements and cities.',
          ru: 'Исторический социально-экономический процесс роста роли городов и повышения доли городского населения.',
        },
      },
      {
        term: { uz: 'Demografik dividend', en: 'Demographic Dividend', ru: 'Демографический дивиденд' },
        definition: {
          uz: "Aholi yosh tarkibida mehnatga layoqatli qatlam ulushining qaramog'idagilarga nisbatan yuqori bo'lishi natijasida yuzaga keladigan iqtisodiy o'sish salohiyati.",
          en: 'Accelerated economic growth potential arising when the working-age share of a population exceeds the dependent share.',
          ru: 'Потенциал ускоренного экономического роста при высокой доле трудоспособного населения в возрастной структуре страны.',
        },
      },
      {
        term: { uz: 'IPAT tenglamasi', en: 'IPAT Identity', ru: 'Уравнение IPAT' },
        definition: {
          uz: "Atrof-muhitga antropogen ta'sirni (I) aholi soni (P), jon boshiga farovonlik (A) va texnologiya sig'imi (T) ko'paytmasi sifatida ifodalovchi model.",
          en: 'Analytical formula (I = P × A × T) decomposing environmental pressure into population, affluence, and technological intensity.',
          ru: 'Формула оценки антропогенного воздействия на природу через численность населения (P), потребление (A) и технологичность (T).',
        },
      },
      {
        term: { uz: 'Inson kamoloti indeksi (HDI)', en: 'Human Development Index (HDI)', ru: 'Индекс человеческого развития (ИЧР)' },
        definition: {
          uz: "BMTning umr ko'rish davomiyligi, ta'lim davomiyligi va jon boshiga yalpi milliy daromadni jamlovchi kompleks farovonlik ko'rsatkichi.",
          en: 'UNDP composite index measuring average achievement in life expectancy, education, and gross national income per capita.',
          ru: 'Интегральный показатель ПРООН, объединяющий ожидаемую продолжительность жизни, уровень образования и подушевой доход.',
        },
      },
    ],
    quiz: [
      {
        id: 'q14-1',
        question: {
          uz: "Erlix va Xoldrenning «I = P × A × T» formulasida «T» harfi nimani anglatadi?",
          en: 'In Ehrlich and Holdren’s IPAT identity (I = P × A × T), what does the variable "T" represent?',
          ru: 'Что обозначает множитель «T» в эколого-демографическом уравнении I = P × A × T?',
        },
        options: [
          { uz: "Texnologiya (YaIMning bir birligiga to'g'ri keladigan ekologik yuklama)", en: 'Technology (environmental impact per unit of GDP)', ru: 'Технологический фактор (удельная нагрузка на единицу ВВП)' },
          { uz: 'Bojxona tarifi', en: 'Customs tariff rate', ru: 'Таможенный тариф' },
          { uz: 'Transport tezligi', en: 'Transit speed', ru: 'Скорость транспорта' },
          { uz: 'Turizm mavsumi', en: 'Tourism season length', ru: 'Длительность турсезона' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "I = P × A × T tenglamasida P — aholi, A — jon boshiga YaIM, T esa texnologiyaning resurs va ifloslanish sig'imidir.",
          en: 'T measures environmental impact per unit of economic output—the lever lowered by green innovation.',
          ru: 'Множитель T отражает ресурсо- и природоёмкость технологий на единицу создаваемого продукта.',
        },
      },
      {
        id: 'q14-2',
        question: {
          uz: "O'zbekiston Respublikasining doimiy aholisi soni 2024–2025-yillarda qancha ko'rsatkichdan oshdi?",
          en: 'What milestone has Uzbekistan’s permanent population surpassed in 2024–2025?',
          ru: 'Какой рубеж превысила численность постоянного населения Узбекистана в 2024–2025 годах?',
        },
        options: [
          { uz: '37 million kishidan oshdi', en: 'Surpassed 37 million people', ru: 'Превысила 37 миллионов человек' },
          { uz: '12 million kishi', en: '12 million people', ru: '12 миллионов человек' },
          { uz: '110 million kishi', en: '110 million people', ru: '110 миллионов человек' },
          { uz: '5 million kishi', en: '5 million people', ru: '5 миллионов человек' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Statistika agentligi ma'lumotlariga ko'ra, O'zbekiston doimiy aholisi 2024-yilda 37 mln kishidan, 2025-yilda esa 37,5 mln kishidan oshdi.",
          en: 'Official Statistics Agency figures show Uzbekistan’s permanent population crossed 37 million in 2024.',
          ru: 'По данным Агентства статистики РУз, численность населения республики превысила 37 млн человек.',
        },
      },
      {
        id: 'q14-3',
        question: {
          uz: "Shahar yo'lovchi transportida 1 yo'lovchi-kilometrga eng kam motorli CO₂ ajratmasi qaysi vositaga to'g'ri keladi?",
          en: 'Among motorized urban transit modes, which emits the least CO₂ per passenger-kilometer?',
          ru: 'Какой из моторизованных видов городского транспорта даёт наименьшие выбросы CO₂ на пассажиро-километр?',
        },
        options: [
          { uz: 'Metropoliten va elektrobuslar', en: 'Metro rail and electric buses', ru: 'Метрополитен и электробусы' },
          { uz: 'Yolg‘iz haydovchili katta benzin yo‘ltanlamas', en: 'Single-occupant petrol SUV', ru: 'Личный бензиновый внедорожник' },
          { uz: 'Eski karbyuratorli taksi', en: 'Carbureted petrol taxi', ru: 'Старое бензиновое такси' },
          { uz: 'Shaxsiy vertolyot', en: 'Private helicopter', ru: 'Частный вертолёт' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Yuqori sig'imli relsli elektr transporti (metro, tramvay) va elektrobuslar yo'lovchi boshiga shaxsiy avtomobildan ~8–10 barobar kam CO₂ chiqaradi.",
          en: 'High-occupancy electric rail and e-buses cut per-passenger emissions by up to 90% compared to solo petrol driving.',
          ru: 'Метро и электробусы снижают удельные выбросы на одного пассажира в 8–10 раз по сравнению с личным авто.',
        },
      },
      {
        id: 'q14-4',
        question: {
          uz: "Aholi tarkibida mehnatga layoqatli yoshlar ulushining yuqori bo'lishi beradigan iqtisodiy imkoniyat qanday nomlanadi?",
          en: 'What term describes the growth boost arising from a large working-age share in a young population?',
          ru: 'Как называется экономическое преимущество высокой доли трудоспособной молодёжи в структуре населения?',
        },
        options: [
          { uz: 'Demografik dividend', en: 'Demographic dividend', ru: 'Демографический дивиденд' },
          { uz: 'Demografik qish', en: 'Demographic winter', ru: 'Демографическая зима' },
          { uz: 'Stagflyatsiya', en: 'Stagflation', ru: 'Стагфляция' },
          { uz: 'Monopsoniya', en: 'Monopsony', ru: 'Монопсония' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Demografik dividend ta'lim va yashil ish o'rinlari bilan qo'llab-quvvatlanganda YaIM o'sishini tezlashtiradi.",
          en: 'Paired with education and productive job creation, a youthful workforce delivers a powerful demographic dividend.',
          ru: 'При качественном образовании и создании рабочих мест молодая структура населения обеспечивает демографический дивиденд.',
        },
      },
      {
        id: 'q14-5',
        question: {
          uz: "«Yangi Toshkent» loyihasida bir vaqtning o'zida elektr, issiqlik va yozgi sovitish energiyasini beruvchi tizim qanday ataladi?",
          en: 'What high-efficiency district energy system simultaneously supplies electricity, heating, and summer cooling?',
          ru: 'Как называется высокоэффективная система централизованной выработки электричества, тепла и летнего холода?',
        },
        options: [
          { uz: 'Trigeneratsiya', en: 'Trigeneration (CCHP)', ru: 'Тригенерация' },
          { uz: 'Ochiq ko‘mir pechi', en: 'Open coal stove', ru: 'Угольная печь' },
          { uz: 'Dizel generator', en: 'Standalone diesel genset', ru: 'Дизель-генератор' },
          { uz: 'Pirotexnika', en: 'Pyrotechnics', ru: 'Пиротехника' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Trigeneratsiya (Combined Cooling, Heat and Power) yoqilg'i energiyasidan foydalanish samaradorligini 80%+ gacha yetkazadi.",
          en: 'Combined Cooling, Heat and Power (trigeneration) utilizes waste thermal energy for both winter heating and summer absorption chilling.',
          ru: 'Тригенерация позволяет полезно использовать отходящее тепло зимой для отопления, а летом — для централизованного охлаждения зданий.',
        },
      },
    ],
  },

  {
    id: 15,
    isIndependentStudy: false,
    iconName: 'Landmark',
    title: {
      uz: 'Ekologik qonunchilik va barqaror rivojlanish konsepsiyasi',
      en: 'Environmental Legislation and the Sustainable Development Concept',
      ru: 'Экологическое законодательство и концепция устойчивого развития',
    },
    shortDescription: {
      uz: "Konstitutsiyaviy va huquqiy asoslar, Brundtland va BMT 17 BRM (SDGs), iqtisodiy boshqarish dastaklari hamda O'zbekistonning «Yashil iqtisodiyot» strategiyasi.",
      en: 'Constitutional environmental rights, Brundtland & UN 17 SDGs, market-based policy instruments, and Uzbekistan’s Green Economy Strategy to 2030.',
      ru: 'Конституционно-правовые основы, комиссия Брундтланд и 17 ЦУР ООН, экономические методы управления и Стратегия «зелёной» экономики РУз.',
    },
    keywords: {
      uz: ['ekologik qonunchilik', 'barqaror rivojlanish', 'BRM', 'SDGs', 'Konstitutsiya', 'yashil iqtisodiyot', 'ESG', 'yashil taksonomiya'],
      en: ['environmental law', 'sustainable development', 'UN SDGs', 'Constitution', 'green economy', 'ESG', 'green taxonomy', 'Coase theorem'],
      ru: ['экологическое право', 'устойчивое развитие', 'ЦУР ООН', 'Конституция', 'зелёная экономика', 'ESG', 'зелёная таксономия'],
    },
    sections: [
      {
        heading: {
          uz: '1. Barqaror rivojlanish konsepsiyasi va BMTning 17 ta maqsadi (BRM / SDGs)',
          en: '1. The Concept of Sustainable Development and the 17 UN SDGs',
          ru: '1. Концепция устойчивого развития и 17 ЦУР ООН',
        },
        paragraphs: [
          {
            uz: "1987-yilda Gro Xarlem Brundtland boshchiligidagi BMT komissiyasining «Bizning umumiy kelajagimiz» (Our Common Future) ma'ruzasida barqaror rivojlanishga klassik ta'rif berildi: «Barqaror rivojlanish — kelajak avlodlarning o'z ehtiyojlarini qondirish imkoniyatiga putur yetkazmagan holda hozirgi avlod ehtiyojlarini qondiruvchi rivojlanishdir». Ushbu konsepsiya uchta teng huquqli ustun — iqtisodiy samaradorlik, ijtimoiy adolat va ekologik barqarorlik (ESG) birligiga asoslanadi.",
            en: 'In 1987, the UN Brundtland Commission’s landmark report "Our Common Future" defined sustainable development as "development that meets the needs of the present without compromising the ability of future generations to meet their own needs." It integrates three inseparable pillars: economic prosperity, social inclusion, and environmental integrity.',
            ru: 'В 1987 году Комиссия ООН под руководством Гро Харлем Брундтланд в докладе «Наше общее будущее» дала классическое определение устойчивого развития — удовлетворение потребностей нынешнего поколения без ущерба для возможностей будущих поколений. Концепция объединяет три триединые опоры: экономическую, социальную и экологическую.',
          },
          {
            uz: "2015-yil sentabrda BMT Bosh Assambleyasi «2030-yilgacha Kun tartibi» doirasida 17 ta global Barqaror rivojlanish maqsadlarini (SDGs) qabul qildi (jumladan: 6 — Toza suv va sanitariya, 7 — Arzon va toza energiya, 11 — Barqaror shaharlar, 12 — Mas'uliyatli iste'mol va ishlab chiqarish, 13 — Iqlim o'zgarishiga qarshi kurash, 14–15 — Dengiz va quruqlik ekotizimlarini asrash). O'zbekiston 16 ta milliy BRM va 125+ vazifani tasdiqlab, ularni davlat budjeti bilan bog'ladi.",
            en: 'In September 2015, the UN General Assembly adopted the 2030 Agenda comprising 17 Sustainable Development Goals (SDGs)—spanning Clean Water (SDG 6), Affordable Clean Energy (SDG 7), Sustainable Cities (SDG 11), Responsible Consumption (SDG 12), Climate Action (SDG 13), and Life on Land (SDG 15). Uzbekistan localized 16 national SDGs backed by parliamentary and fiscal monitoring.',
            ru: 'В сентябре 2015 года Генассамблея ООН приняла Повестку-2030 из 17 Целей устойчивого развития (ЦУР 6 — чистая вода, ЦУР 7 — чистая энергия, ЦУР 12 — ответственное потребление, ЦУР 13 — борьба с изменением климата, ЦУР 15 — экосистемы суши). Узбекистан утвердил национальные ЦУР и интегрировал их в госпрограммы.',
          },
        ],
        keyTakeaway: {
          uz: "«Kuchsiz barqarorlik» tabiiy kapitalni sun'iy kapital bilan almashtirishga yo'l qo'ysa, «Kuchli barqarorlik» hayotiy kritik tabiiy kapitalni (iqlim, suv, ozon, bioxilma-xillik) almashtirib bo'lmas deb hisoblaydi.",
          en: 'Whereas "weak sustainability" assumes physical capital can substitute for depleted nature, "strong sustainability" recognizes critical natural capital (climate, water, biodiversity) as non-substitutable.',
          ru: 'Если «слабая устойчивость» допускает замену природы техногенным капиталом, то «сильная устойчивость» признаёт критический природный капитал (климат, воду, биосферу) незаменимым.',
        },
      },
      {
        heading: {
          uz: '2. Ekologik xavfsizlikning konstitutsiyaviy asoslari va iqtisodiy boshqaruv usullari',
          en: '2. Constitutional Foundations and Economic Policy Instruments',
          ru: '2. Конституционно-правовые основы и экономические методы управления',
        },
        paragraphs: [
          {
            uz: "2023-yil 30-apreldagi umumxalq referendumida qabul qilingan yangi tahrirdagi O'zbekiston Respublikasi Konstitutsiyasida ekologik huquqlar tarixda ilk bor eng yuqori konstitutsiyaviy darajaga ko'tarildi: 49-moddada har kim qulay atrof-muhitga, uning holati to'g'risidagi ishonchli axborotga ega bo'lish huquqiga egaligi va davlat Orolbo'yi mintaqasining ekologik tizimini tiklash bo'yicha choralar ko'rishi mustahkamlandi (62 va 68-moddalarda yer-suv-tabiat umummilliy boylik ekani belgilandi).",
            en: 'Uzbekistan’s revised Constitution adopted via national referendum on April 30, 2023 elevated environmental rights to supreme constitutional law: Article 49 guarantees every citizen the right to a favorable environment and reliable ecological information while obligating the state to restore the Aral Sea region (complemented by Articles 62 and 68 on natural heritage stewardship).',
            ru: 'В новой редакции Конституции Республики Узбекистан (принятой на референдуме 30 апреля 2023 года) экологические права впервые получили высший конституционный статус: статья 49 закрепляет право каждого на благоприятную окружающую среду и достоверную информацию о ней, а также обязанность государства по восстановлению экосистемы Приаралья.',
          },
          {
            uz: "Atrof-muhitni boshqarishda ikki guruh usullar qo'llaniladi: (1) Ma'muriy-huquqiy usullar (REK/PDK standartlari, litsenziya, ekologik ekspertiza, taqiq va jarimalar); (2) Iqtisodiy-bozor dastaklari — ifloslantirganlik uchun tabaqalashtirilgan kompensatsiya to'lovlari, uglerod solig'i, sotiladigan emissiya kvotalari (Kouz teoremasi asosida), «yashil subsidiyalar», imtiyozli yashil kreditlar, yashil davlat xaridlari va ekologik sug'urta.",
            en: 'Environmental governance combines two toolkits: (1) Command-and-Control regulation (emission limits, EIA permits, moratoriums, penalties) and (2) Market-Based Economic Instruments—pollution compensation fees, Pigouvian carbon taxes, Coasean cap-and-trade allowances, green tax credits, green public procurement, sovereign green bonds, and environmental liability insurance.',
            ru: 'В управлении природопользованием сочетаются две группы методов: (1) административно-правовые (стандарты ПДК/ПДВ, экспертиза, запреты и штрафы) и (2) экономические рыночные инструменты — компенсационные платежи за загрязнение, углеродные налоги, торговля квотами (по теореме Коуза), «зелёные» субсидии, облигации и экострахование.',
          },
        ],
      },
      {
        heading: {
          uz: "3. O'zbekistonning «Yashil iqtisodiyot»ga o'tish strategiyasi va ustuvor yo'nalishlar",
          en: '3. Uzbekistan’s Green Economy Transition Strategy and Priority Reforms',
          ru: '3. Стратегия перехода Узбекистана к «зелёной» экономике и приоритеты',
        },
        paragraphs: [
          {
            uz: "O'zbekistonning 2030-yilgacha «yashil» iqtisodiyotga o'tish strategiyasi (PQ-4477 va PQ-436-son qarorlar) hamda «O'zbekiston – 2030» strategiyasi aniq miqdoriy maqsadlarni belgilab berdi: YaIM birligiga IIG solishtirma ajratmalarini 35% ga qisqartirish, QTEM ulushini elektr generatsiyasida 40% ga yetkazish, sanoatda energiya samaradorligini kamida 20% oshirish hamda Milliy «Yashil taksonomiya» asosida bank-moliya resurslarini toza loyihalarga yo'naltirish.",
            en: 'Uzbekistan’s Green Economy Transition Strategy through 2030 (Resolutions PQ-4477 and PQ-436) and the "Uzbekistan – 2030" Strategy anchor measurable national targets: cutting GHG intensity per GDP by 35%, lifting renewable power share to 40%, improving industrial energy efficiency by at least 20%, and channeling bank credit via the National Green Taxonomy.',
            ru: 'Стратегия перехода к «зелёной» экономике до 2030 года (ПП-4477 и ПП-436) и Стратегия «Узбекистан – 2030» закрепили чёткие ориентиры: снижение удельных выбросов ПГ на 35%, доведение доли ВИЭ до 40%, повышение энергоэффективности промышленности минимум на 20% и внедрение Национальной «зелёной таксономии».',
          },
          {
            uz: "Shuningdek, 2023-yilda O'zbekiston Orxus konvensiyasiga (Atrof-muhitga oid axborotdan foydalanish, qaror qabul qilishda jamoatchilik ishtiroki va odil sudlovga erishish to'g'risida) qo'shilishi fuqarolik jamiyati, OAV va talaba-tadqiqotchilar uchun ekologik ma'lumotlar ochiqligini xalqaro darajaga olib chiqdi.",
            en: 'Moreover, Uzbekistan’s accession to the UNECE Aarhus Convention in 2023 institutionalized public access to environmental data, citizen participation in green decision-making, and environmental justice.',
            ru: 'Присоединение Узбекистана к Орхусской конвенции ЕЭК ООН в 2023 году подняло на международный уровень открытость экологических данных и участие общественности в принятии градостроительных и хозяйственных решений.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '17 ta',
        unit: { uz: 'global maqsad', en: 'global goals', ru: 'глобальных целей' },
        label: {
          uz: 'BMTning 2030-yilgacha Barqaror rivojlanish maqsadlari (169 ta global vazifa bilan)',
          en: 'UN Sustainable Development Goals for 2030 (backed by 169 targets)',
          ru: 'Цели устойчивого развития ООН до 2030 года (169 глобальных задач)',
        },
        year: '2015–2030',
        source: { uz: 'BMT Bosh Assambleyasi (A/RES/70/1)', en: 'UN General Assembly Agenda 2030', ru: 'Генеральная Ассамблея ООН (Повестка-2030)' },
      },
      {
        value: '49-modda',
        unit: { uz: 'Asosiy Qonun', en: 'Constitution Art.', ru: 'статья Конституции' },
        label: {
          uz: "Yangi tahrirdagi O'zbekiston Konstitutsiyasida har kimning qulay atrof-muhitga ega bo'lish huquqi va Orolbo'yi muhofazasi moddasi",
          en: 'Constitutional article guaranteeing citizens’ right to a favorable environment and Aral Sea restoration',
          ru: 'Статья обновлённой Конституции РУз о праве на благоприятную среду и защите Приаралья',
        },
        year: '2023',
        source: { uz: "O'zbekiston Respublikasi Konstitutsiyasi (30.04.2023)", en: 'Constitution of Uzbekistan (April 30, 2023)', ru: 'Конституция Республики Узбекистан (30.04.2023)' },
      },
      {
        value: '$500+',
        unit: { uz: 'mlrd AQSh $/yil', en: 'bln USD / yr', ru: 'млрд долл./год' },
        label: {
          uz: 'Global yashil obligatsiyalar (Green Bonds) yillik emissiya bozori ko‘lami',
          en: 'Annual global issuance volume of labeled Green Bonds',
          ru: 'Годовой мировой объём выпуска «зелёных облигаций» (Green Bonds)',
        },
        year: '2023',
        source: { uz: 'Climate Bonds Initiative (CBI)', en: 'Climate Bonds Initiative (CBI)', ru: 'Climate Bonds Initiative (CBI)' },
      },
      {
        value: '2025',
        unit: { uz: 'Yashil yil', en: 'National Theme', ru: 'Год экологии' },
        label: {
          uz: "O'zbekistonda «Atrof-muhitni asrash va 'yashil' iqtisodiyot yili» davlat dasturi e'lon qilingan yil",
          en: 'Designated in Uzbekistan as the "Year of Environmental Protection and Green Economy"',
          ru: 'Объявлен в Узбекистане «Годом охраны окружающей среды и „зелёной“ экономики»',
        },
        year: '2025',
        source: { uz: "O'zbekiston Respublikasi Prezidenti tashabbusi va Davlat dasturi", en: 'State Program of the Republic of Uzbekistan', ru: 'Государственная программа Республики Узбекистан' },
      },
    ],
    charts: [
      {
        id: 't15-green-bonds',
        type: 'area',
        title: {
          uz: 'Global «Yashil obligatsiyalar» (Green Bonds) yillik chiqarilishi dinamikasi (mlrd AQSh $)',
          en: 'Global Annual Labeled Green Bond Issuance Growth (Billion USD)',
          ru: 'Динамика мирового годового выпуска «зелёных облигаций» (млрд долл. США)',
        },
        subtitle: {
          uz: 'Barqaror rivojlanishni moliyalashtirishda kapital bozorining o‘sib borayotgan roli',
          en: 'Rapid institutional scaling of sustainable debt markets since the Paris Agreement',
          ru: 'Масштабирование рынка устойчивого долгового финансирования после 2015 года',
        },
        source: { uz: 'Climate Bonds Initiative /Jahon banki', en: 'Climate Bonds Initiative / World Bank', ru: 'Climate Bonds Initiative / Всемирный банк' },
        unit: '$ mlrd',
        seriesName: { uz: 'Yillik emissiya ($ mlrd)', en: 'Annual Issuance ($B)', ru: 'Выпуск ($ млрд)' },
        data: [
          { name: '2014', value: 37 },
          { name: '2017', value: 162 },
          { name: '2019', value: 266 },
          { name: '2021', value: 582 },
          { name: '2023', value: 587 },
        ],
      },
      {
        id: 't15-uz-targets',
        type: 'bar',
        title: {
          uz: "O'zbekiston «Yashil iqtisodiyot» strategiyasining 2030-yilgi asosiy maqsadli ko'rsatkichlari (%)",
          en: 'Uzbekistan Green Economy Strategy Key Quantitative Targets for 2030 (%)',
          ru: 'Ключевые целевые индикаторы Стратегии «зелёной» экономики Узбекистана к 2030 году (%)',
        },
        subtitle: {
          uz: 'PQ-436 va «O‘zbekiston – 2030» strategiyasida belgilangan marralar',
          en: 'Legally anchored milestones under PQ-436 and Uzbekistan – 2030',
          ru: 'Целевые рубежи согласно ПП-436 и Стратегии «Узбекистан – 2030»',
        },
        source: { uz: 'PQ-436 (2022) va PF-158 (2023)', en: 'Resolutions PQ-436 & PF-158', ru: 'Постановление № ПП-436 и Указ № УП-158' },
        unit: '%',
        seriesName: { uz: '2030 maqsadi (%)', en: '2030 Target (%)', ru: 'Цель к 2030 г. (%)' },
        data: [
          { name: { uz: 'Elektrda QTEM ulushi', en: 'RES Share in Power', ru: 'Доля ВИЭ в электроген.' }, value: 40 },
          { name: { uz: 'YaIMga IIG qisqarishi', en: 'GHG/GDP Intensity Cut', ru: 'Снижение ПГ к ВВП' }, value: 35 },
          { name: { uz: 'Shahar yashillik darajasi', en: 'Urban Green Cover', ru: 'Озеленение городов' }, value: 30 },
          { name: { uz: 'Sanoat energosamaradorligi +', en: 'Industrial Efficiency Gain', ru: 'Рост энергоэфф. пром.' }, value: 20 },
        ],
      },
    ],
    laws: [
      {
        id: 't15-law-1',
        type: 'uz_law',
        title: {
          uz: "Yangi tahrirdagi O'zbekiston Respublikasi Konstitutsiyasi (49, 62, 68-moddalar)",
          en: 'Constitution of the Republic of Uzbekistan (Revised April 30, 2023 — Articles 49, 62, 68)',
          ru: 'Конституция Республики Узбекистан в новой редакции (статьи 49, 62, 68)',
        },
        codeAndDate: {
          uz: '30.04.2023-yil umumxalq referendumi (01.05.2023 dan kuchga kirgan)',
          en: 'Adopted by National Referendum April 30, 2023',
          ru: 'Принята на референдуме 30.04.2023 г.',
        },
        summary: {
          uz: "Fuqarolarning qulay atrof-muhitga bo'lgan konstitutsiyaviy huquqini, shaharsozlikda jamoatchilik nazoratini, tabiatni asrash burchini va Orolbo'yi ekotizimini tiklashni mustahkamladi.",
          en: 'Enshrines constitutional environmental rights, public urban-planning oversight, citizen conservation duties, and state obligations in Priaralye.',
          ru: 'Закрепляет конституционное право на благоприятную среду, общественный контроль в градостроительстве и защиту Приаралья.',
        },
        significance: {
          uz: "Mamlakatdagi barcha ekologik va iqtisodiy qonunlar uchun oliy yuridik mezon hisoblanadi.",
          en: 'Provides supreme constitutional authority overriding environmentally harmful subordinate acts.',
          ru: 'Обладает высшей юридической силой для всего природоохранного и хозяйственного законодательства.',
        },
      },
      {
        id: 't15-law-2',
        type: 'presidential',
        title: {
          uz: "2030-yilgacha O'zbekiston Respublikasining «yashil» iqtisodiyotga o'tishiga qaratilgan islohotlar samaradorligini oshirish chora-tadbirlari",
          en: 'Presidential Resolution on Enhancing Green Economy Transition Reforms to 2030',
          ru: 'Постановление Президента о повышении эффективности реформ по переходу к «зелёной» экономике до 2030 года',
        },
        codeAndDate: {
          uz: 'PQ-436-son qaror, 02.12.2022-yil (va VM 586-son Milliy «yashil» taksonomiya qarori, 2023)',
          en: 'Presidential Resolution No. PQ-436, Dec 2, 2022 (& Green Taxonomy Resolution No. 586)',
          ru: 'Постановление Президента № ПП-436 от 02.12.2022 г. (и Национальная зелёная таксономия)',
        },
        summary: {
          uz: "Issiqxona gazlari monitoringi va savdosi tizimini (MRV), «Yashil taksonomiya» tasniflagichini va davlat-xususiy yashil moliyalashtirish mexanizmlarini tasdiqladi.",
          en: 'Establishes national GHG Monitoring-Reporting-Verification (MRV), Green Taxonomy classification, and carbon credit trading frameworks.',
          ru: 'Утвердило систему мониторинга парниковых газов (MRV), Национальную зелёную таксономию и механизмы обращения углеродных единиц.',
        },
        significance: {
          uz: "Banklar va investorlar uchun qaysi loyiha haqiqiy «yashil» ekanini aniqlovchi aniq iqtisodiy standart berdi (greenwashing ga qarshi).",
          en: 'Prevents corporate "greenwashing" by defining strict technical criteria for green loans and bonds.',
          ru: 'Предотвращает «гринвошинг», задавая строгие критерии для зелёных кредитов и инвестиций.',
        },
      },
      {
        id: 't15-law-3',
        type: 'international',
        title: {
          uz: "BMTning 2030-yilgacha Barqaror rivojlanish kun tartibi (17 BRM) va Orxus konvensiyasi",
          en: 'UN 2030 Agenda for Sustainable Development (17 SDGs) & UNECE Aarhus Convention',
          ru: 'Повестка ООН в области устойчивого развития до 2030 года (17 ЦУР) и Орхусская конвенция',
        },
        codeAndDate: {
          uz: 'BMT BRM: 25.09.2015 · Orxus konvensiyasi: O‘zbekiston qo‘shilishi — 11.12.2023, O‘RQ-880-son',
          en: 'UN SDGs (Sept 25, 2015) & Aarhus Convention (Uzbekistan acceded Dec 11, 2023, O’RQ-880)',
          ru: 'ЦУР ООН (25.09.2015 г.) и Орхусская конвенция (РУз присоединилась 11.12.2023 г., № ЗРУ-880)',
        },
        summary: {
          uz: "Global barqaror rivojlanish indikatorlarini hamda fuqarolarning ekologik axborot olish, qarorlarda qatnashish va sud orqali himoyalanish huquqini kafolatlaydi.",
          en: 'Unites global sustainability metrics with legally enforceable public access to environmental information and justice.',
          ru: 'Объединяет глобальные индикаторы устойчивости с правом общественности на доступ к экоинформации и правосудию.',
        },
        significance: {
          uz: "Institutsional shaffoflik va xalqaro ESG investitsiya reytinglarini yaxshilaydi.",
          en: 'Strengthens institutional transparency and sovereign ESG credit standing.',
          ru: 'Повышает институциональную прозрачность и международный ESG-рейтинг страны.',
        },
      },
    ],
    facts: [
      {
        uz: "Ronald Kouz (1991-yilgi Nobel sovrindori) o'zining mashhur «Kouz teoremasi»da mulkchilik huquqlari aniq belgilangan va bitim (transaksiya) xarajatlari past bo'lganda, tomonlar tashqi zararni muzokara orqali samarali hal eta olishini ko'rsatib, zamonaviy uglerod kvotalari bozoriga nazariy asos solgan.",
        en: 'Nobel laureate Ronald Coase showed that clearly defined property rights allow private bargaining to resolve externalities—laying the theoretical foundation for cap-and-trade markets.',
        ru: 'Нобелевский лауреат Рональд Коуз показал, что чёткое определение прав собственности позволяет эффективно решать проблему экстерналий — эта идея легла в основу рынков углеродных квот.',
      },
      {
        uz: "O'zbekistonda 2025-yil «Atrof-muhitni asrash va 'yashil' iqtisodiyot yili» deb e'lon qilinib, sanoat, energetika, suv va ta'lim tizimida keng ko'lamli yashil transformatsiya dasturlari amalga oshirildi.",
        en: 'Declaring 2025 the "Year of Environmental Protection and Green Economy" placed decarbonization, water efficiency, and clean industry at the top of Uzbekistan’s national agenda.',
        ru: 'Объявление 2025 года в Узбекистане «Годом охраны окружающей среды и „зелёной“ экономики» вывело зелёную трансформацию в главный приоритет госполитики.',
      },
      {
        uz: "Ekologik Kuznets egri chizig'i (EKC) gipotezasiga ko'ra, boshlang'ich sanoatlashuvda ifloslanish ortsa-da, ma'lum daromad pog'onasidan so'ng kuchli qonunchilik, ta'lim va toza texnologiyalar tufayli ifloslanish pasayishga o'tadi — biroq bu o'z-o'zidan emas, faqat faol davlat siyosati bilan yuz beradi!",
        en: 'The Environmental Kuznets Curve (EKC) hypothesizes an inverted-U link between income and local pollution—yet economists stress that turning the curve downward requires deliberate policy and strong institutions, never passive growth.',
        ru: 'Гипотеза экологической кривой Кузнеца описывает перевёрнутую U-образную связь дохода и загрязнения, однако экономисты подчёркивают: перелом наступает только при активном экологическом законодательстве.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Milliy «Yashil taksonomiya» va tijorat banklarida ESG moliyalashtirish amaliyoti",
        en: 'Uzbekistan’s National Green Taxonomy and Commercial Bank ESG Lending',
        ru: 'Национальная «зелёная таксономия» Узбекистана и банковское ESG-финансирование',
      },
      location: {
        uz: "O'zbekiston bank-moliya tizimi",
        en: 'Banking and Financial Sector of Uzbekistan',
        ru: 'Банковско-финансовый сектор Республики Узбекистан',
      },
      challenge: {
        uz: "Tadbirkorlar va banklar xalqaro yashil kredit liniyalarini jalb etishda qaysi loyiha haqiqatan ekologik mezonlarga javob berishini baholovchi yagona milliy standartga ega emas edi.",
        en: 'Banks and borrowers lacked a standardized technical rulebook to verify which capital projects qualified for concessional green credit lines.',
        ru: 'Банкам и бизнесу не хватало единого национального классификатора для отбора подлинно экологических проектов и защиты от «гринвошинга».',
      },
      solution: {
        uz: "Vazirlar Mahkamasining 2023-yildagi qarori bilan xalqaro standartlarga mos Milliy «Yashil taksonomiya» (7 ta ustuvor kategoriya: QTEM, energosamaradorlik, suv tejash, sirkulyar iqtisodiyot, toza transport va b.) tasdiqlandi.",
        en: 'Uzbekistan enacted its National Green Taxonomy defining clear technical screening thresholds across renewable power, water efficiency, clean transit, and circular manufacturing.',
        ru: 'Утверждена Национальная «зелёная таксономия», задавшая чёткие технические пороги по ВИЭ, водосбережению, чистому транспорту и рециклингу.',
      },
      economicOutcome: {
        uz: "Mahalliy tijorat banklari xalqaro moliya institutlaridan (IFC, EBRD, ADB) yuz millionlab dollarlik maqsadli «yashil kredit» va obligatsiya liniyalarini jalb etishni tezlashtirdi.",
        en: 'Commercial banks unlocked hundreds of millions of dollars in dedicated IFC, EBRD, and ADB green credit facilities for Uzbek SMEs.',
        ru: 'Коммерческие банки привлекли сотни миллионов долларов целевых «зелёных» кредитных линий МФК, ЕБРР и АБР для модернизации бизнеса.',
      },
    },
    terms: [
      {
        term: { uz: 'Barqaror rivojlanish', en: 'Sustainable Development', ru: 'Устойчивое развитие' },
        definition: {
          uz: "Kelajak avlodlarning o'z ehtiyojlarini qondirish imkoniyatlariga zarar yetkazmasdan hozirgi avlod farovonligini ta'minlovchi muvozanatli taraqqiyot modeli.",
          en: 'Development meeting present needs without compromising future generations’ capacity to meet theirs across economic, social, and ecological pillars.',
          ru: 'Модель гармоничного социально-экономического развития, не подрывающая природную базу благосостояния будущих поколений.',
        },
      },
      {
        term: { uz: 'Yashil taksonomiya', en: 'Green Taxonomy', ru: 'Зелёная таксономия' },
        definition: {
          uz: "Iqtisodiy faoliyat turlari va investitsiya loyihalarining ekologik hamda iqlim maqsadlariga mos kelishini aniqlovchi rasmiy tasniflash tizimi.",
          en: 'Official classification system establishing technical criteria to determine whether an economic activity is environmentally sustainable.',
          ru: 'Официальная система классификации видов экономической деятельности и инвестпроектов, отвечающих критериям экологической устойчивости.',
        },
      },
      {
        term: { uz: 'Kouz teoremasi', en: 'Coase Theorem', ru: 'Теорема Коуза' },
        definition: {
          uz: "Mulk huquqlari aniq taqsimlangan va bitim xarajatlari nolga yaqin bo'lganda, bozor ishtirokchilari tashqi ta'sirlarni davlat aralashuvisiz samarali hal etishi haqidagi qoida.",
          en: 'Economic theorem stating that with well-defined property rights and low transaction costs, private bargaining achieves efficient externality resolution.',
          ru: 'Положение институциональной экономики о том, что при чётких правах собственности и низких трансакционных издержках рынок эффективно устраняет экстерналии.',
        },
      },
      {
        term: { uz: 'ESG tamoyillari', en: 'ESG (Environmental, Social, Governance)', ru: 'Принципы ESG' },
        definition: {
          uz: "Kompaniya va investitsiyalarni baholashda ekologik mas'uliyat (E), ijtimoiy adolat (S) va halol korporativ boshqaruv (G) mezonlari majmui.",
          en: 'Environmental, Social, and Corporate Governance criteria used by investors and lenders to evaluate long-term sustainability and risk.',
          ru: 'Совокупность экологических (E), социальных (S) и управленческих (G) стандартов оценки устойчивости бизнеса и инвестиций.',
        },
      },
    ],
    quiz: [
      {
        id: 'q15-1',
        question: {
          uz: "1987-yilda «Barqaror rivojlanish» tushunchasini jahon siyosiy-iqtisodiy muomalasiga olib kirgan BMT hisoboti qanday nomlangan?",
          en: 'Which landmark 1987 UN report popularized the modern definition of "Sustainable Development"?',
          ru: 'Какой доклад Комиссии ООН 1987 года ввёл в мировой оборот классическое определение «устойчивого развития»?',
        },
        options: [
          { uz: '«Bizning umumiy kelajagimiz» (Brundtland ma’ruzasi)', en: '"Our Common Future" (Brundtland Report)', ru: '«Наше общее будущее» (доклад Брундтланд)' },
          { uz: '«Xalqlar boyligi» (1776)', en: '"The Wealth of Nations" (1776)', ru: '«Богатство народов» (1776)' },
          { uz: '«Bretton-Vuds kelishuvi» (1944)', en: '"Bretton Woods Accord" (1944)', ru: '«Бреттон-Вудское соглашение» (1944)' },
          { uz: '«Rim shartnomasi» (1957)', en: '"Treaty of Rome" (1957)', ru: '«Римский договор» (1957)' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Gro Xarlem Brundtland komissiyasining 1987-yilgi «Bizning umumiy kelajagimiz» ma'ruzasi barqaror rivojlanishga klassik ta'rif bergan.",
          en: 'Chaired by Gro Harlem Brundtland, the 1987 WCED report "Our Common Future" defined intergenerational sustainability.',
          ru: 'Доклад комиссии Гро Харлем Брундтланд «Наше общее будущее» (1987 г.) заложил фундамент концепции устойчивого развития.',
        },
      },
      {
        id: 'q15-2',
        question: {
          uz: "Yangi tahrirdagi O'zbekiston Respublikasi Konstitutsiyasining qaysi moddasida har kimning qulay atrof-muhitga ega bo'lish huquqi va Orolbo'yini tiklash vazifasi belgilangan?",
          en: 'Which article of Uzbekistan’s revised 2023 Constitution guarantees every person’s right to a favorable environment and Aral Sea restoration?',
          ru: 'Какая статья новой редакции Конституции РУз (2023 г.) закрепляет право каждого на благоприятную окружающую среду и защиту Приаралья?',
        },
        options: [
          { uz: '49-modda', en: 'Article 49', ru: 'Статья 49' },
          { uz: '1-modda', en: 'Article 1', ru: 'Статья 1' },
          { uz: '122-modda', en: 'Article 122', ru: 'Статья 122' },
          { uz: '150-modda', en: 'Article 150', ru: 'Статья 150' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Yangi tahrirdagi Konstitutsiyaning 49-moddasi ekologik huquqlar, shaharsozlik shaffofligi va Orolbo'yi muhofazasini mustahkamlagan.",
          en: 'Article 49 of the 2023 Constitution codifies citizens’ environmental rights and state stewardship of the Aral Sea region.',
          ru: 'Статья 49 обновлённой Конституции РУз посвящена экологическим правам граждан и восстановлению экосистемы Приаралья.',
        },
      },
      {
        id: 'q15-3',
        question: {
          uz: "Investitsiya loyihalarining haqiqatan «yashil» ekanini texnik mezonlar asosida ajratib beruvchi rasmiy tasniflagich nima deb ataladi?",
          en: 'What official classification system defines technical criteria to verify whether investments are genuinely environmentally sustainable?',
          ru: 'Как называется официальный классификатор критериев для определения подлинно экологических инвестиционных проектов?',
        },
        options: [
          { uz: 'Yashil taksonomiya (Green Taxonomy)', en: 'Green Taxonomy', ru: 'Зелёная таксономия' },
          { uz: 'Bojxona deklaratsiyasi', en: 'Customs declaration', ru: 'Таможенная декларация' },
          { uz: 'Aksiz markasi', en: 'Excise tax stamp', ru: 'Акцизная марка' },
          { uz: 'Kredit tarixi byurosi', en: 'Consumer credit bureau', ru: 'Бюро кредитных историй' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Yashil taksonomiya banklar va investorlarni «soxta yashillik»dan (greenwashing) himoya qiluvchi aniq mezonlar jadvalidir.",
          en: 'A Green Taxonomy prevents greenwashing by establishing clear technical thresholds for green loans and bonds.',
          ru: 'Зелёная таксономия защищает финансовый рынок от гринвошинга, устанавливая измеримые экологические пороги.',
        },
      },
      {
        id: 'q15-4',
        question: {
          uz: "O'zbekiston 2023-yil dekabrda qo'shilgan (O'RQ-880) Orxus konvensiyasi fuqarolarga qanday huquqlarni kafolatlaydi?",
          en: 'What core rights are guaranteed by the UNECE Aarhus Convention to which Uzbekistan acceded in December 2023?',
          ru: 'Какие права граждан гарантирует Орхусская конвенция, к которой Узбекистан присоединился в декабре 2023 года?',
        },
        options: [
          { uz: "Ekologik axborot olish, qaror qabul qilishda ishtirok etish va odil sudlovga erishish", en: 'Access to environmental information, public participation, and access to justice', ru: 'Доступ к экологической информации, участие общественности в решениях и доступ к правосудию' },
          { uz: 'Vizasiz turistik sayohat', en: 'Visa-free international travel', ru: 'Безвизовые туристические поездки' },
          { uz: 'Bojsiz avtomobil importi', en: 'Duty-free vehicle imports', ru: 'Беспошлинный ввоз автомобилей' },
          { uz: 'Oltin zaxiralarini taqsimlash', en: 'Central bank gold distribution', ru: 'Распределение золотого запаса' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Orxus konvensiyasi ekologik demokratiya va shaffoflikning uch ustunini — axborot, ishtirok va odil sudlovni kafolatlaydi.",
          en: 'The Aarhus Convention rests on three pillars: open ecological data, citizen participation, and judicial redress.',
          ru: 'Орхусская конвенция опирается на три столпа: открытость экоданных, общественное участие и судебную защиту.',
        },
      },
      {
        id: 'q15-5',
        question: {
          uz: "BMTning 2015–2030-yillarga mo'ljallangan global kun tartibida nechta Barqaror rivojlanish maqsadi (BRM / SDGs) tasdiqlangan?",
          en: 'How many Sustainable Development Goals (SDGs) comprise the UN 2030 Agenda?',
          ru: 'Сколько глобальных Целей устойчивого развития (ЦУР) утверждено в Повестке ООН до 2030 года?',
        },
        options: [
          { uz: '17 ta maqsad', en: '17 Goals', ru: '17 целей' },
          { uz: '3 ta maqsad', en: '3 Goals', ru: '3 цели' },
          { uz: '50 ta maqsad', en: '50 Goals', ru: '50 целей' },
          { uz: '100 ta maqsad', en: '100 Goals', ru: '100 целей' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "2015-yilda BMTga a'zo 193 ta davlat tomonidan 17 ta Barqaror rivojlanish maqsadi (SDGs) qabul qilingan.",
          en: 'All 193 UN Member States adopted the 17 Sustainable Development Goals in September 2015.',
          ru: 'Повестка-2030 объединяет 17 взаимосвязанных Целей устойчивого развития ООН.',
        },
      },
    ],
  },
];
