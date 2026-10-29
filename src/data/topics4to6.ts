import { Topic } from '../types';

export const TOPICS_4_TO_6: Topic[] = [
  {
    id: 4,
    isIndependentStudy: false,
    iconName: 'Gem',
    title: {
      uz: "O'zbekiston Respublikasining mineral xom-ashyo resurslari va ulardan samarali foydalanish istiqbollari",
      en: 'Mineral Raw Material Resources of Uzbekistan and Prospects for Efficient Utilization',
      ru: 'Минерально-сырьевые ресурсы Республики Узбекистан и перспективы их эффективного использования',
    },
    shortDescription: {
      uz: "Zaxiralar va hududiy taqsimot, chuqur qayta ishlash va modernizatsiya, xorijiy investitsiyalar, jahon narxlari hamda geosiyosiy sanksiyalar ta'siri.",
      en: 'Reserves and regional distribution, deep processing modernization, foreign direct investment, commodity pricing, and sanctions dynamics.',
      ru: 'Запасы и территориальное размещение, модернизация и глубокая переработка, иностранные инвесторы, цены и влияние санкций.',
    },
    keywords: {
      uz: ['mineral xomashyo', 'oltin', 'mis', 'uran', 'tabiiy gaz', 'NKMK', 'OKMK', 'investitsiya', 'kritik minerallar'],
      en: ['mineral resources', 'gold', 'copper', 'uranium', 'natural gas', 'NMMC', 'AMMC', 'critical minerals', 'FDI'],
      ru: ['минеральное сырьё', 'золото', 'медь', 'уран', 'природный газ', 'НГМК', 'АГМК', 'критические минералы'],
    },
    sections: [
      {
        heading: {
          uz: "1. Zaxiralar salohiyati va hududiy joylashuv geografiyasi",
          en: '1. Mineral Endowment Potential and Regional Distribution',
          ru: '1. Потенциал запасов и территориальное размещение недр',
        },
        paragraphs: [
          {
            uz: "O'zbekiston mineral-xomashyo salohiyati bo'yicha jahonning yetakchi davlatlari qatoriga kiradi: mamlakat hududida 2 000 dan ortiq foydali qazilma konlari va ma'dan namoyon bo'lgan nuqtalar aniqlangan bo'lib, ular Mendeleyev davriy jadvalidagi deyarli barcha sanoat ahamiyatiga ega elementlarni o'z ichiga oladi. Oltin, mis, uran, volfram, kaliy tuzlari, fosforitlar va kaolin zaxiralari bo'yicha respublika dunyoda yuqori o'rinlarni egallaydi.",
            en: 'Uzbekistan ranks among the world’s premier mineral jurisdictions, with over 2,000 identified deposits and ore occurrences spanning nearly all commercially vital elements. The country holds top-tier global positions in gold, copper, uranium, tungsten, potash salts, phosphorites, and kaolin.',
            ru: 'Узбекистан входит в число ведущих горнодобывающих стран мира: на территории республики выявлено свыше 2 000 месторождений и рудопроявлений полезных ископаемых. Страна занимает лидирующие мировые позиции по запасам и добыче золота, меди, урана, вольфрама, калийных солей и фосфоритов.',
          },
          {
            uz: "Hududiy taqsimot aniq geologik ixtisoslashuvga ega: Qizilqum mintaqasi (Navoiy viloyati, Muruntov koni) oltin, uran va fosforitlarning asosiy markazi; Toshkent viloyati (Olmaliq — «Qalmoqqir» va «Yoshlik I» konlari) mis, molibden va polimetallar bazasi; Buxoro-Xiva va Ustyurt hududlari uglevodorodlar (tabiiy gaz va kondensat); Surxondaryo va Qashqadaryo (Dehqonobod, Boysun, Sharg'un) esa kaliy tuzlari va toshko'mirga boy.",
            en: 'Regional geology creates distinct industrial clusters: Central Kyzylkum (Navoi region, Muruntau) anchors gold, uranium, and phosphorites; Tashkent region (Almalyk’s Kalmakyr and Yoshlik I deposits) dominates copper, silver, and molybdenum; Bukhara-Khiva and Ustyurt supply hydrocarbons; while Kashkadarya and Surkhandarya host potash (Dehkanabad) and high-grade coal.',
            ru: 'Региональное размещение характеризуется чёткой специализацией: Центральные Кызылкумы (Навоийская область, Мурунтау) — центр добычи золота, урана и фосфоритов; Ташкентская область (Алмалык, месторождения «Кальмакыр» и «Ёшлик I») — медно-молибденовый кластер; Бухаро-Хивинский регион и Устюрт — газохимия; Кашкадарья и Сурхандарья — калийные соли и уголь.',
          },
        ],
        keyTakeaway: {
          uz: "Yashil energetikaga global o'tish mis, litiy, volfram va uran kabi «kritik minerallar»ga talabni 2–3 barobar oshirmoqda — bu O'zbekiston uchun strategik imkoniyatdir.",
          en: 'Global clean-energy electrification is multiplying demand for critical minerals like copper, tungsten, and uranium—positioning Uzbekistan at the center of green supply chains.',
          ru: 'Глобальный энергопереход кратно повышает спрос на «критические минералы» (медь, вольфрам, уран), открывая для Узбекистана стратегическое окно возможностей.',
        },
      },
      {
        heading: {
          uz: '2. Texnologik modernizatsiya, chuqur qayta ishlash va xorijiy investitsiyalar',
          en: '2. Modernization, Value-Chain Upgrading, and Foreign Investment',
          ru: '2. Модернизация, глубокая переработка и иностранные инвестиции',
        },
        paragraphs: [
          {
            uz: "Uzoq yillar davomida mineral xomashyoni birlamchi ko'rinishda eksport qilish qo'shilgan qiymatning chetda qolishiga sabab bo'lgan. So'nggi islohotlar doirasida «xomashyodan — tayyor yuqori texnologik mahsulotgacha» tamoyili joriy etildi: mis klasteri tashkil etilib, katodli misdan elektrotexnika kabellari, elektromobil butlovchi qismlari va quvurlar ishlab chiqarish ulushini 60–80 foizga yetkazish maqsad qilindi.",
            en: 'Historically, exporting unprocessed raw commodities forfeited downstream value added. Recent industrial policy establishes integrated clusters—such as the national Copper Cluster—to process domestic cathode copper into electrical cables, transformers, EV components, and precision alloys rather than exporting raw metal.',
            ru: 'Экспорт необработанного сырья долгое время лишал экономику высокой добавленной стоимости. Современная политика строится по цепочке «руда — металл — готовое изделие»: создан медный кластер для переработки катодной меди внутри страны в электротехнику, кабели и комплектующие для электромобилей.',
          },
          {
            uz: "2020-yilda yangi tahrirdagi geologiya-qidiruv islohotlari va xalqaro JORC standartlarining joriy etilishi xorijiy investorlar (Fransiyaning Orano, Yevropa Ittifoqi kritik xomashyo hamkorligi va Osiyo kompaniyalari) kirib kelishini tezlashtirdi. Navoiy va Olmaliq kon-metallurgiya kombinatlarida ESG (ekologik, ijtimoiy va korporativ boshqaruv) standartlari joriy qilinib, xalqaro moliya bozorlariga chiqish ta'minlandi.",
            en: 'Adopting international JORC reserve reporting standards and the new Law "On Subsoil" attracted strategic foreign partners (including France’s Orano in uranium and an EU Memorandum on Critical Raw Materials). Both NMMC and AMMC have embedded ESG governance to access global green and corporate bond markets.',
            ru: 'Внедрение международной отчётности запасов по кодексу JORC и принятие нового Закона «О недрах» привлекли стратегических инвесторов (включая французскую Orano и меморандум с ЕС по критическому сырью). НГМК и АГМК внедрили стандарты ESG для выхода на международные рынки капитала.',
          },
        ],
      },
      {
        heading: {
          uz: "3. Jahon narxlari tebranishi, eksport-import va geosiyosiy sanksiyalar ta'siri",
          en: '3. Global Price Volatility, Trade Balances, and Geopolitical Sanctions',
          ru: '3. Колебания мировых цен, экспорт-импорт и влияние геополитических санкций',
        },
        paragraphs: [
          {
            uz: "Mineral resurslar eksporti O'zbekiston tashqi savdo balansida muhim o'rin tutadi: oltin narxining jahon bozorida yuqori bo'lishi oltin-valyuta zaxiralarini mustahkamlaydi, ayni paytda ichki iqtisodiyot va aholining o'sib borayotgan talabi tufayli O'zbekiston tabiiy gaz va neft mahsulotlari bo'yicha sof importni ham amalga oshirib, gazni yoqish o'rniga MTO (metanoldan olefingacha) gaz-kimyo majmualarida polimerlarga aylantirishga ustuvorlik bermoqda.",
            en: 'Mineral exports anchor Uzbekistan’s external balance: strong global gold prices bolster central bank reserves, while rising domestic industrial demand has prompted net natural gas imports alongside a strategic pivot from burning gas as fuel toward high-margin MTO (methanol-to-olefins) petrochemicals.',
            ru: 'Экспорт металлов поддерживает платёжный баланс и золотовалютные резервы страны, тогда как быстрый рост внутреннего спроса привёл к диверсификации импорта энергоносителей и переориентации природного газа с прямого сжигания на глубокую газохимию (комплексы MTO).',
          },
          {
            uz: "Geosiyosiy ziddiyatlar va xalqaro sanksiyalar logistika yo'laklari (shimoliy yo'nalish o'rniga Transkaspiy O'rta koridori), sug'urta va komplayens xarajatlariga bevosita ta'sir ko'rsatadi. Shu sababli O'zbekiston eksport bozorlarini Yevropa, Sharqiy va Janubiy Osiyo yo'nalishlarida diversifikatsiya qilmoqda hamda kon sanoatida suvni 85–90% aylanma ishlatish va chiqindi omborlarini rekultivatsiya qilish talablarini kuchaytirmoqda.",
            en: 'Geopolitical sanctions and trade fragmentation raise compliance, insurance, and freight costs along traditional transit routes, accelerating Uzbekistan’s shift toward the Trans-Caspian Middle Corridor and diversified buyers in Europe and Asia, alongside strict closed-loop water recycling in mining.',
            ru: 'Геополитические санкции удорожают логистику и банковский комплаенс на традиционных маршрутах, ускоряя развитие Транскаспийского Срединного коридора и диверсификацию сбыта в ЕС и Азию при одновременном переходе ГОКов на замкнутое водооборотное снабжение.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '~100+',
        unit: { uz: 'tonna/yil', en: 'tonnes / yr', ru: 'тонн/год' },
        label: {
          uz: "O'zbekistonda yillik oltin qazib olish hajmi (jahonda top-10 davlat qatorida)",
          en: 'Annual gold mine production in Uzbekistan (Top-10 globally)',
          ru: 'Годовая добыча золота в Узбекистане (топ-10 стран мира)',
        },
        year: '2023',
        source: { uz: 'USGS / World Gold Council', en: 'USGS / World Gold Council', ru: 'USGS / World Gold Council' },
        isApproximate: true, // TODO: tekshiring (USGS va WGC ma'lumotlariga ko'ra ~100–105 tonna)
      },
      {
        value: '5-o‘rin',
        unit: { uz: 'jahon reytingi', en: 'global rank', ru: 'место в мире' },
        label: {
          uz: "Tabiiy uran qazib olish bo'yicha O'zbekistonning jahondagi o'rni (~3,8–4,0 ming t)",
          en: 'Uzbekistan’s global ranking in natural uranium production',
          ru: 'Место Узбекистана в мире по объёму добычи природного урана',
        },
        year: '2023',
        source: { uz: 'World Nuclear Association (WNA)', en: 'World Nuclear Association (WNA)', ru: 'Всемирная ядерная ассоциация (WNA)' },
      },
      {
        value: '148',
        unit: { uz: 'ming tonna', en: 'thousand t', ru: 'тыс. тонн' },
        label: {
          uz: "OKMK tomonidan yillik katodli mis ishlab chiqarish (Yoshlik-I bilan 300+ ming t reja)",
          en: 'AMMC annual cathode copper output (expanding to 300k+ t via Yoshlik I)',
          ru: 'Годовой выпуск катодной меди АГМК (с ростом до 300+ тыс. т на «Ёшлик I»)',
        },
        year: '2023',
        source: { uz: 'OKMK AJ ochiq hisobotlari', en: 'Almalyk MMC Public Disclosures', ru: 'Открытая отчётность АО «АГМК»' },
      },
      {
        value: '2 000+',
        unit: { uz: 'konlar soni', en: 'deposits', ru: 'месторождений' },
        label: {
          uz: "O'zbekiston davlat balansida hisobga olingan foydali qazilma konlari",
          en: 'Identified mineral deposits registered in Uzbekistan’s state balance',
          ru: 'Месторождения полезных ископаемых, учтённые в госбалансе РУз',
        },
        year: '2024',
        source: {
          uz: "Tog'-kon sanoati va geologiya vazirligi",
          en: 'Ministry of Mining Industry and Geology of Uzbekistan',
          ru: 'Министерство горнодобывающей промышленности и геологии РУз',
        },
      },
    ],
    charts: [
      {
        id: 't4-copper-expansion',
        type: 'bar',
        title: {
          uz: "O'zbekistonda katodli mis ishlab chiqarish va qayta ishlash istiqboli (ming tonna)",
          en: 'Uzbekistan Cathode Copper Output & Domestic Processing Trajectory (kt)',
          ru: 'Динамика и прогноз выпуска и глубокой переработки катодной меди в РУз (тыс. т)',
        },
        subtitle: {
          uz: '«Yoshlik I» koni va mis klasteri hisobiga quvvatlarning kengayishi',
          en: 'Capacity expansion driven by the Yoshlik I mega-project and downstream Copper Cluster',
          ru: 'Рост мощностей за счёт освоения «Ёшлик I» и развития электротехнического кластера',
        },
        source: { uz: 'OKMK AJ va Tog‘-kon vazirligi maqsadli ko‘rsatkichlari', en: 'AMMC & Ministry of Mining Targets', ru: 'Данные АГМК и Мингеологии РУз' },
        unit: 'kt',
        seriesName: { uz: 'Jami ishlab chiqarish', en: 'Total Cathode Output', ru: 'Общий выпуск меди' },
        secondarySeriesName: { uz: 'Ichki chuqur qayta ishlash', en: 'Domestic Deep Processing', ru: 'Внутренняя переработка' },
        data: [
          { name: '2017', value: 110, secondaryValue: 28 },
          { name: '2020', value: 148, secondaryValue: 45 },
          { name: '2023', value: 148, secondaryValue: 82 },
          { name: '2026 (P)', value: 250, secondaryValue: 160 },
          { name: '2030 (P)', value: 400, secondaryValue: 280 },
        ],
      },
      {
        id: 't4-value-chain',
        type: 'bar',
        title: {
          uz: 'Tabiiy gazni qayta ishlash bosqichlarida qo‘shilgan qiymat o‘sishi (shartli indeks)',
          en: 'Value-Added Multiplier Across Natural Gas Processing Stages (Base = 1x)',
          ru: 'Мультипликатор добавленной стоимости при глубокой переработке газа (база = 1x)',
        },
        subtitle: {
          uz: 'Xomashyo sifatida yoqish va polimer/kompozit mahsulot chiqarish farqi',
          en: 'Economic premium of petrochemical polymers over raw fuel export',
          ru: 'Экономический выигрыш газохимии по сравнению с прямым сжиганием сырья',
        },
        source: { uz: 'Sanoat iqtisodiyoti va MTO tahlili', en: 'Petrochemical Value Chain Economics', ru: 'Отраслевой анализ газохимии' },
        unit: 'x',
        seriesName: { uz: 'Qo‘shilgan qiymat koeffitsiyenti', en: 'Value Multiplier (x)', ru: 'Коэффициент стоимости (x)' },
        data: [
          { name: { uz: 'Xom tabiiy gaz', en: 'Raw Natural Gas', ru: 'Сырьевой газ' }, value: 1 },
          { name: { uz: 'Metanol', en: 'Methanol', ru: 'Метанол' }, value: 3 },
          { name: { uz: 'Polietilen / Polipropilen', en: 'Polyethylene / PP', ru: 'Полимеры (ПЭ/ПП)' }, value: 6 },
          { name: { uz: 'Tayyor plastik va to‘qima', en: 'Finished Technical Goods', ru: 'Готовые изделия' }, value: 11 },
        ],
      },
    ],
    laws: [
      {
        id: 't4-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Yer qa'ri to'g'risida»gi yangi Qonuni",
          en: 'New Law of the Republic of Uzbekistan "On Subsoil"',
          ru: 'Закон Республики Узбекистан «О недрах» (новая редакция)',
        },
        codeAndDate: {
          uz: '31.10.2024-yil, O‘RQ-987-son',
          en: 'October 31, 2024, No. O’RQ-987',
          ru: '31.10.2024 г., № ЗРУ-987',
        },
        summary: {
          uz: "Geologiya uchastkalariga «birinchi kelganga — birinchi huquq» xalqaro litsenziyalash tartibini, ekologik rekultivatsiya kafolat jamg'armasini va investorlar huquqlarini mustahkamlaydi.",
          en: 'Introduces transparent international licensing, mandatory mine-closure reclamation guarantees, and investor protections.',
          ru: 'Вводит прозрачное международное лицензирование участков недр, обязательные финансовые гарантии рекультивации земель и защиту инвесторов.',
        },
        significance: {
          uz: "Tog'-kon sanoatiga to'g'ridan-to'g'ri xorijiy investitsiyalarni jalb etish bilan ekologik javobgarlikni bog'laydi.",
          en: 'Pairs foreign exploration investment attraction with legally enforceable land restoration funds.',
          ru: 'Сочетает инвестиционную привлекательность геологоразведки с жёсткими обязательствами по восстановлению ландшафтов.',
        },
      },
      {
        id: 't4-law-2',
        type: 'presidential',
        title: {
          uz: "Mis xomashyosini chuqur qayta ishlash va ilmiy-texnologik klasterni tashkil etish chora-tadbirlari",
          en: 'Presidential Resolution on Establishing the Scientific-Technological Copper Cluster',
          ru: 'Постановление Президента о создании научно-технологического кластера по глубокой переработке меди',
        },
        codeAndDate: {
          uz: 'PQ-5159-son qaror, 24.06.2021-yil',
          en: 'Presidential Resolution No. PQ-5159, June 24, 2021',
          ru: 'Постановление Президента № ПП-5159 от 24.06.2021 г.',
        },
        summary: {
          uz: "Katodli misni mahalliy korxonalarda yuqori qo'shilgan qiymatli elektrotexnika va yashil energetika jihozlariga aylantirish zanjirini yaratadi.",
          en: 'Establishes incentives and R&D infrastructure to transform domestic copper into electrical equipment and renewable energy hardware.',
          ru: 'Формирует производственную цепочку переработки отечественной меди в электротехническую продукцию высокой добавленной стоимости.',
        },
        significance: {
          uz: "Xomashyo eksportiga qaramlikni kamaytirib, sanoat diversifikatsiyasini ta'minlaydi.",
          en: 'Mitigates raw-commodity price exposure by capturing high-margin manufacturing value domestically.',
          ru: 'Снижает сырьевую зависимость и формирует высокотехнологичный экспорт.',
        },
      },
      {
        id: 't4-law-3',
        type: 'international',
        title: {
          uz: "O'zbekiston va Yevropa Ittifoqi o'rtasida kritik xomashyo bo'yicha strategik sheriklik memorandumi",
          en: 'EU–Uzbekistan Memorandum of Understanding on Critical Raw Materials',
          ru: 'Меморандум о стратегическом партнёрстве между Узбекистаном и ЕС в сфере критического сырья',
        },
        codeAndDate: {
          uz: '05.04.2024-yil (Samarqand)',
          en: 'April 5, 2024 (Samarkand)',
          ru: '05.04.2024 г. (Самарканд)',
        },
        summary: {
          uz: "Barqaror va ESG mezonlariga mos tog'-kon qazib olish, xomashyoni joyida qayta ishlash hamda kadrlar tayyorlash bo'yicha hamkorlikni belgilaydi.",
          en: 'Promotes ESG-compliant mineral supply chains, local value addition, geological R&D, and clean-tech industrial links.',
          ru: 'Предусматривает устойчивую добычу по стандартам ESG, локализацию переработки, совместные исследования и подготовку кадров.',
        },
        significance: {
          uz: "Sanksiyalar va logistika cheklovlari sharoitida O'zbekiston minerallarining Yevropa yashil texnologiyalar bozoriga chiqishini kengaytiradi.",
          en: 'Diversifies export corridors and integrates Uzbek critical minerals into European clean-tech manufacturing.',
          ru: 'Диверсифицирует экспортные рынки и интегрирует минеральный сектор страны в глобальные «зелёные» цепочки поставок.',
        },
      },
    ],
    facts: [
      {
        uz: "Navoiy viloyatidagi «Muruntov» kareri zaxirasi va yillik ruda qazib olish ko'lami bo'yicha dunyodagi eng yirik ochiq oltin konlaridan biri hisoblanadi (chuqurligi 650 metrdan oshgan).",
        en: 'Navoi’s Muruntau open-pit gold mine (over 650 meters deep) consistently ranks among the top two largest gold-producing mines on Earth.',
        ru: 'Карьер «Мурунтау» в Навоийской области (глубиной свыше 650 метров) стабильно входит в двойку крупнейших в мире открытых золотодобывающих рудников.',
      },
      {
        uz: "Bitta zamonaviy elektromobil (EV) ishlab chiqarish uchun an'anaviy ichki yonuv dvigatelli avtomobilga qaraganda 3–4 barobar ko'p (taxminan 80 kg) mis sarflanadi (IEA).",
        en: 'A battery electric vehicle requires roughly 80 kg of copper—3 to 4 times more than a conventional internal combustion car (IEA).',
        ru: 'На производство одного электромобиля требуется около 80 кг меди — в 3–4 раза больше, чем для автомобиля с ДВС (МЭА).',
      },
      {
        uz: "NKMK o'zining gidrometallurgiya zavodlarining elektr ehtiyojini yashillashtirish maqsadida Qizilqum cho'lida yirik quyosh fotoelektr stansiyalaridan foydalanishni yo'lga qo'ymoqda.",
        en: 'NMMC is integrating utility-scale solar PV power in the Kyzylkum desert to lower the Scope 2 carbon footprint of each ounce of gold refined.',
        ru: 'НГМК внедряет солнечную генерацию в Кызылкумах для снижения углеродного следа (Scope 2) каждой произведённой унции золота.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Olmaliq KMKda «Yoshlik I» konini o'zlashtirish va yopiq suv aylanish tizimi",
        en: 'Almalyk MMC’s Yoshlik I Mega-Project and Closed-Loop Industrial Ecology',
        ru: 'Освоение месторождения «Ёшлик I» на АГМК и замкнутый водооборот',
      },
      location: {
        uz: "Olmaliq shahri, Toshkent viloyati (O'zbekiston)",
        en: 'Almalyk, Tashkent Region, Uzbekistan',
        ru: 'г. Алмалык, Ташкентская область, Узбекистан',
      },
      challenge: {
        uz: "Mis ishlab chiqarishni ikki barobar oshirishda ruda boyitish fabrikalarining suv sarfi va oltingugurt gazi (SO₂) chiqindilarini oshirmaslik vazifasi qo'yildi.",
        en: 'Doubling copper ore processing risked surging freshwater consumption and sulfur dioxide (SO₂) smelter emissions near populated valleys.',
        ru: 'При удвоении переработки руды требовалось не допустить роста забора пресной воды и выбросов диоксида серы (SO₂).',
      },
      solution: {
        uz: "3-mis boyitish fabrikasida suvni 85–90% qayta ishlatuvchi quyultirgichlar hamda metallurgiya gazlaridan sulfat kislotasi oluvchi zamonaviy utilizatsiya sexlari qurildi.",
        en: 'The new Copper Concentrator-3 incorporates 85–90% closed-loop water thickeners alongside smelter off-gas capture converting SO₂ into commercial sulfuric acid.',
        ru: 'На новой МОФ-3 внедрены высокоэффективные сгустители с оборотным водоснабжением 85–90% и цеха утилизации отходящих газов в товарную серную кислоту.',
      },
      economicOutcome: {
        uz: "Atrof-muhitga zararli gaz chiqishi keskin kamayib, olingan sulfat kislotasi kimyo va o'g'it sanoati uchun daromadli xomashyoga aylandi.",
        en: 'Air pollution externalities dropped substantially while captured sulfur became a profitable input for domestic phosphate fertilizer production.',
        ru: 'Выбросы в атмосферу резко сократились, а уловленная сера превратилась в рентабельное сырьё для производства фосфорных удобрений.',
      },
    },
    terms: [
      {
        term: { uz: 'Kritik minerallar', en: 'Critical Minerals', ru: 'Критические минералы' },
        definition: {
          uz: "Quyosh panellari, shamol turbinalari, akkumulyatorlar va raqamli texnologiyalar uchun zarur bo'lgan strategik metallar (mis, litiy, kobalt, nodir yer elementlari).",
          en: 'Strategic metals—such as copper, lithium, cobalt, tungsten, and rare earths—indispensable for renewable energy grids and EV batteries.',
          ru: 'Стратегические металлы (медь, литий, вольфрам, редкоземельные элементы), критически важные для ВИЭ, аккумуляторов и микроэлектроники.',
        },
      },
      {
        term: { uz: 'JORC kodeksi', en: 'JORC Code', ru: 'Кодекс JORC' },
        definition: {
          uz: "Geologik qidiruv natijalari, mineral resurslar va ruda zaxiralarini xalqaro investorlar uchun shaffof baholash standarti.",
          en: 'Internationally recognized Australasian standard for public reporting of mineral exploration results and ore reserves.',
          ru: 'Международный стандарт публичной отчётности о результатах геологоразведки и запасах твёрдых полезных ископаемых.',
        },
      },
      {
        term: { uz: 'Rekultivatsiya', en: 'Land Reclamation (Recultivation)', ru: 'Рекультивация земель' },
        definition: {
          uz: "Kon qazish ishlari yakunlangach, buzilgan yerlarning unumdorligi va ekologik holatini tiklash bo'yicha muhandislik-biologik tadbirlar.",
          en: 'Engineering and biological restoration of mined-out lands to productive agricultural, forestry, or ecological use.',
          ru: 'Комплекс горнотехнических и биологических работ по восстановлению нарушенных разработкой недр земель.',
        },
      },
      {
        term: { uz: 'Qo‘shilgan qiymat zanjiri', en: 'Value-Added Chain', ru: 'Цепочка добавленной стоимости' },
        definition: {
          uz: "Xomashyoni qazib olishdan boshlab uni boyitish, yarim tayyor va yuqori texnologik tayyor mahsulotga aylantirish bosqichlari majmui.",
          en: 'Sequential industrial stages transforming raw ore into refined intermediates and high-margin finished goods.',
          ru: 'Последовательные стадии переработки исходного сырья в полуфабрикаты и наукоёмкую конечную продукцию.',
        },
      },
    ],
    quiz: [
      {
        id: 'q4-1',
        question: {
          uz: "O'zbekistonda katodli mis va molibden qazib olishning asosiy markazi qaysi hududda joylashgan?",
          en: 'Which industrial hub serves as Uzbekistan’s primary center for copper and molybdenum mining?',
          ru: 'Где расположен главный промышленный центр добычи и выплавки меди и молибдена в Узбекистане?',
        },
        options: [
          { uz: 'Olmaliq (Toshkent viloyati)', en: 'Almalyk (Tashkent Region)', ru: 'Алмалык (Ташкентская область)' },
          { uz: 'Mo‘ynoq (Qoraqalpog‘iston)', en: 'Muynak (Karakalpakstan)', ru: 'Муйнак (Каракалпакстан)' },
          { uz: 'Xiva (Xorazm viloyati)', en: 'Khiva (Khorezm Region)', ru: 'Хива (Хорезмская область)' },
          { uz: 'Guliston (Sirdaryo viloyati)', en: 'Gulistan (Syrdarya Region)', ru: 'Гулистан (Сырдарьинская область)' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Toshkent viloyatidagi Olmaliq KMK («Qalmoqqir» va «Yoshlik I» konlari) respublikaning asosiy mis-molibden klasteridir.",
          en: 'Almalyk MMC in Tashkent Region operates the giant Kalmakyr and Yoshlik I porphyry copper-molybdenum deposits.',
          ru: 'Алмалыкский ГМК в Ташкентской области разрабатывает крупнейшие медно-порфировые месторождения «Кальмакыр» и «Ёшлик I».',
        },
      },
      {
        id: 'q4-2',
        question: {
          uz: "Tabiiy uran qazib olish hajmi bo'yicha O'zbekiston jahonda taxminan nechanchi o'rinda turadi (WNA, 2023)?",
          en: 'Approximately where does Uzbekistan rank globally in natural uranium production (WNA, 2023)?',
          ru: 'Какое место в мире занимает Узбекистан по объёму добычи природного урана (WNA, 2023)?',
        },
        options: [
          { uz: '5-o‘rin', en: '5th place', ru: '5-е место' },
          { uz: '42-o‘rin', en: '42nd place', ru: '42-е место' },
          { uz: '95-o‘rin', en: '95th place', ru: '95-е место' },
          { uz: 'Uran qazib olinmaydi', en: 'Does not mine uranium', ru: 'Уран не добывается' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Jahon yadro assotsiatsiyasi (WNA) ma'lumotlariga ko'ra, O'zbekiston («Navoiyuran» DK) uran qazib olishda dunyoda barqaror 5-o'rinni egallaydi.",
          en: 'According to the World Nuclear Association, Uzbekistan (Navoiyuran) ranks 5th globally in uranium output.',
          ru: 'По данным Всемирной ядерной ассоциации (WNA), Узбекистан (ГП «Навоиуран») занимает 5-е место в мире по добыче урана.',
        },
      },
      {
        id: 'q4-3',
        question: {
          uz: "MTO texnologiyasi mineral xomashyo iqtisodiyotida nimani anglatadi?",
          en: 'What does MTO technology stand for in natural gas value-chain upgrading?',
          ru: 'Что означает технология MTO в экономике глубокой переработки природного газа?',
        },
        options: [
          { uz: "Tabiiy gazdan metanol orqali olefin va polimerlar olish", en: 'Methanol-to-Olefins petrochemical synthesis of polymers from gas', ru: 'Получение олефинов и полимеров из природного газа через метанол' },
          { uz: "Mis rudasini qo'lda saralash usuli", en: 'Manual sorting of copper ore', ru: 'Ручная сортировка медной руды' },
          { uz: 'Dengiz transporti sug‘urtasi', en: 'Maritime transport ocean insurance', ru: 'Морское транспортное страхование' },
          { uz: 'O‘rmon daraxtlarini raqamlash', en: 'Marking timber trees', ru: 'Маркировка лесных насаждений' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "MTO (Methanol-to-Olefins) tabiiy gazni yoqib yuborish o'rniga undan yuqori qiymatli polimerlar (polietilen, polipropilen) olish imkonini beradi.",
          en: 'Methanol-to-Olefins converts natural gas into high-value polymers, generating 5–10x higher value added than raw fuel sales.',
          ru: 'Технология Methanol-to-Olefins позволяет вместо сжигания газа производить полимеры с многократным ростом добавленной стоимости.',
        },
      },
      {
        id: 'q4-4',
        question: {
          uz: "2024-yil aprel oyida Samarqandda O'zbekiston va Yevropa Ittifoqi o'rtasida qaysi soha bo'yicha memorandum imzolandi?",
          en: 'Which strategic mineral agreement did Uzbekistan and the European Union sign in Samarkand in April 2024?',
          ru: 'Меморандум по какому направлению подписали Узбекистан и ЕС в Самарканде в апреле 2024 года?',
        },
        options: [
          { uz: 'Kritik xomashyo resurslari bo‘yicha strategik sheriklik', en: 'Strategic Partnership on Critical Raw Materials', ru: 'Стратегическое партнёрство в сфере критического сырья' },
          { uz: "Ko'mir importini majburiy oshirish", en: 'Mandatory coal import expansion', ru: 'Обязательное увеличение импорта угля' },
          { uz: 'Arktikada baliq ovlash kvotasi', en: 'Arctic fishing quotas', ru: 'Квоты на вылов рыбы в Арктике' },
          { uz: 'Yagona valyuta ittifoqi', en: 'Single monetary union', ru: 'Единый валютный союз' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Mazkur memorandum kritik minerallarni ESG standartlari asosida o'zlashtirish va mahalliy qayta ishlashni rivojlantirishga qaratilgan.",
          en: 'The EU–Uzbekistan MoU advances sustainable critical mineral supply chains and local industrial value addition.',
          ru: 'Меморандум нацелен на устойчивые цепочки поставок критически важных минералов и локализацию их переработки.',
        },
      },
      {
        id: 'q4-5',
        question: {
          uz: "Kon qazish ishlari tugagandan so'ng buzilgan yerlarni tiklash jarayoni qanday ataladi?",
          en: 'What is the technical and legal term for restoring mined-out land after extraction ends?',
          ru: 'Как называется комплекс работ по восстановлению земель после завершения горных разработок?',
        },
        options: [
          { uz: 'Rekultivatsiya', en: 'Land reclamation (recultivation)', ru: 'Рекультивация' },
          { uz: 'Denominatsiya', en: 'Denomination', ru: 'Деноминация' },
          { uz: 'Amortizatsiya', en: 'Amortization', ru: 'Амортизация' },
          { uz: ' Sekvestratsiya', en: 'Fiscal sequestration', ru: 'Бюджетный секвестр' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Rekultivatsiya — tog'-kon sanoati tomonidan buzilgan yer qatlami va landshaftni qayta tiklash majburiyatidir.",
          en: 'Reclamation (recultivation) restores disturbed mining sites to safe ecological or agricultural condition.',
          ru: 'Рекультивация — обязательное инженерно-биологическое восстановление нарушенных горными работами земель.',
        },
      },
    ],
  },

  {
    id: 5,
    isIndependentStudy: false,
    iconName: 'Sun',
    title: {
      uz: 'Muqobil energiya manbalari va resurslarning bozor taqsimoti',
      en: 'Alternative Energy Sources and Market Allocation of Energy Resources',
      ru: 'Альтернативные источники энергии и рыночное распределение ресурсов',
    },
    shortDescription: {
      uz: "«Yashil energetika» iqtisodiyoti, LCOE tannarx pasayishi, geosiyosiy ziddiyatlar va narxlar, O'zbekistonda QTEM huquqiy asoslari va 2030 maqsadlari.",
      en: 'Green energy economics, LCOE cost curves, energy geopolitics and price shocks, and Uzbekistan’s renewable legal framework and 2030 targets.',
      ru: 'Экономика «зелёной энергетики», снижение LCOE, геополитические факторы цен, правовая база и госпрограммы ВИЭ в Узбекистане.',
    },
    keywords: {
      uz: ['yashil energetika', 'quyosh', 'shamol', 'LCOE', 'QTEM', 'vodorod', 'yashil sertifikat', 'O‘RQ-539'],
      en: ['green energy', 'solar PV', 'wind power', 'LCOE', 'renewables', 'green certificates', 'energy transition'],
      ru: ['зелёная энергетика', 'солнечная энергия', 'ветроэнергетика', 'LCOE', 'ВИЭ', 'зелёные сертификаты'],
    },
    sections: [
      {
        heading: {
          uz: '1. «Yashil energetika» inqilobi va LCOE tannarxining pasayishi',
          en: '1. The Green Energy Revolution and Falling LCOE Curves',
          ru: '1. Революция «зелёной энергетики» и снижение показателя LCOE',
        },
        paragraphs: [
          {
            uz: "Qayta tiklanuvchi energiya manbalari (QTEM) — quyosh, shamol, gidroenergetika, biomassa va geotermal energiya — XXI asr energetika bozorining asosiy drayveriga aylandi. IRENA (Xalqaro qayta tiklanuvchi energiya agentligi) ma'lumotlariga ko'ra, 2010–2023-yillar oralig'ida sanoat miqyosidagi quyosh fotoelektr stansiyalarida ishlab chiqarilgan 1 kVt·soat elektrning keltirilgan tannarxi (LCOE) ~90 foizga, quruqlikdagi shamol energetikasida esa ~70 foizga arzonlashdi.",
            en: 'Renewable energy sources (RES)—solar PV, wind, hydro, modern bioenergy, and geothermal—now lead global power capacity additions. According to IRENA, between 2010 and 2023 the global Levelized Cost of Electricity (LCOE) plunged by ~90% for utility-scale solar PV and ~70% for onshore wind, making renewables cheaper than new fossil-fuel plants in most regions.',
            ru: 'Возобновляемые источники энергии (ВИЭ) — солнечная, ветровая, гидро-, геотермальная и биоэнергетика — стали главным драйвером мирового энергорынка. По данным IRENA, за 2010–2023 годы приведённая стоимость электроэнергии (LCOE) промышленных солнечных станций упала примерно на 90%, а наземных ветропарков — на 70%.',
          },
          {
            uz: "2023-yilda dunyo bo'yicha elektr energiyasi ishlab chiqarishda qayta tiklanuvchi manbalar ulushi ilk bor 30 foizdan oshdi (IEA). Shu bilan birga, quyosh va shamol generatsiyasining ob-havoga bog'liqligi (intermittency) zamonaviy energiya saqlash tizimlari (BESS — litiy-ion akkumulyatorlar va gidroakkumulyatsiya stansiyalari) hamda «aqlli tarmoqlar» (Smart Grid) bozorini shakllantirmoqda.",
            en: 'In 2023, renewables surpassed 30% of global electricity generation for the first time (IEA). Because solar and wind output varies with weather (intermittency), competitive electricity markets increasingly pair generation with Battery Energy Storage Systems (BESS), pumped hydro storage, and smart-grid demand response.',
            ru: 'В 2023 году доля ВИЭ в мировом производстве электроэнергии впервые превысила 30% (МЭА). При этом переменчивость выработки солнца и ветра формирует быстрорастущий рынок систем накопления энергии (BESS, ГАЭС) и интеллектуальных сетей (Smart Grid).',
          },
        ],
        keyTakeaway: {
          uz: "Quyosh va shamol stansiyalarida yoqilg'ining chekli xarajati nolga teng (MC ≈ 0), asosiy xarajat esa dastlabki kapital qo'yilma (CAPEX) va kapital qiymatiga (WACC) to'g'ri keladi.",
          en: 'Solar and wind plants have near-zero marginal fuel cost (MC ≈ 0); their competitiveness hinges primarily on upfront CAPEX and the weighted average cost of capital (WACC).',
          ru: 'Предельные топливные издержки солнечных и ветровых станций близки к нулю (MC ≈ 0), поэтому их экономика определяется капитальными затратами (CAPEX) и стоимостью капитала.',
        },
      },
      {
        heading: {
          uz: '2. Energiya bozorlari va geosiyosiy ziddiyatlarning narxlarga ta’siri',
          en: '2. Energy Markets, Price Volatility, and Geopolitical Shocks',
          ru: '2. Энергетические рынки, волатильность цен и геополитические конфликты',
        },
        paragraphs: [
          {
            uz: "1973-yilgi neft inqirozidan tortib 2021–2023-yillardagi Yevropa gaz inqirozigacha bo'lgan tarix qazilma yoqilg'i bozorlari geosiyosiy ziddiyatlar, eksport cheklovlari va transport yo'laklari uzilishiga o'ta ta'sirchan ekanini ko'rsatdi. Uglevodorod narxlarining keskin sakrashi inflyatsiyani («energoinflyatsiya») tezlashtirib, o'g'it va oziq-ovqat narxlariga zanjirli zarba beradi.",
            en: 'From the 1973 oil embargo to the 2021–2023 global natural gas crunch, history shows that fossil fuel markets suffer acute geopolitical vulnerability. Sudden hydrocarbon price spikes trigger cost-push inflation across electricity, nitrogen fertilizers, manufacturing, and household budgets.',
            ru: 'От нефтяного шока 1973 года до газового кризиса 2021–2023 годов история показывает высокую уязвимость рынков ископаемого топлива к геополитическим конфликтам. Скачки цен на углеводороды разгоняют инфляцию издержек, удорожая электроэнергию, удобрения и продовольствие.',
          },
          {
            uz: "Paradoksal ravishda, geosiyosiy energetika inqirozlari yashil o'tishni yanada tezlashtirdi (masalan, Yevropa Ittifoqining REPowerEU dasturi, AQShning IRA qonuni va Xitoyning rekord quyosh quvvatlari). Mahalliy quyosh, shamol va gidroenergiya import qilinmaydi — shu bois QTEM nafaqat iqlim siyosati, balki milliy energetika xavfsizligi va narx barqarorligining qalqonidir.",
            en: 'Geopolitical supply shocks have paradoxically accelerated clean-energy deployment—evidenced by the EU’s REPowerEU plan, the US Inflation Reduction Act, and China’s record solar buildout. Domestic sunlight and wind cannot be embargoed, making renewables a pillar of national energy security and price stability.',
            ru: 'Парадоксально, но геополитические кризисы резко ускорили энергопереход (план REPowerEU в ЕС, закон IRA в США, рекордный ввод СЭС в Китае). Солнечный свет и ветер не зависят от внешних поставок, поэтому ВИЭ выступают гарантом национальной энергобезопасности.',
          },
        ],
      },
      {
        heading: {
          uz: "3. O'zbekistonda QTEMning huquqiy asoslari va davlat dasturlari",
          en: '3. Legal Foundations and State Renewable Programs in Uzbekistan',
          ru: '3. Правовые основы и государственные программы ВИЭ в Узбекистане',
        },
        paragraphs: [
          {
            uz: "O'zbekistonda yiliga o'rtacha 300–320 quyoshli kun kuzatilib, quyosh energiyasining texnik salohiyati mamlakat yillik energiya iste'molidan bir necha barobar yuqori baholanadi (IEA / Jahon banki). 2019-yilda qabul qilingan «Qayta tiklanuvchi energiya manbalaridan foydalanish to'g'risida»gi Qonun (O'RQ-539) hamda xalqaro tender auksionlari (Masdar, ACWA Power, Voltalia, China Gezhouba ishtirokida) 1 kVt·soat quyosh elektr energiyasi uchun ~1,8–3,0 AQSh senti atrofida raqobatbardosh tariflarga erishish imkonini berdi.",
            en: 'Blessed with 300–320 sunny days per year, Uzbekistan possesses massive solar technical potential alongside rich wind corridors in Karakalpakstan and Bukhara. Enacting Law No. O’RQ-539 (2019) and launching transparent IPP auctions with Masdar, ACWA Power, Voltalia, and international lenders achieved highly competitive solar tariffs near 1.8–3.0 US cents/kWh.',
            ru: 'Располагая 300–320 солнечными днями в году и мощными ветровыми коридорами в Каракалпакстане и Бухаре, Узбекистан создал прочную базу ВИЭ. Закон № ЗРУ-539 (2019 г.) и прозрачные международные аукционы ГЧП (с участием Masdar, ACWA Power, Voltalia) позволили достичь тарифов на солнечную генерацию на уровне ~1,8–3,0 цента США за кВт·ч.',
          },
          {
            uz: "«O'zbekiston – 2030» strategiyasiga muvofiq, 2030-yilga borib qayta tiklanuvchi energiya manbalari umumiy quvvatini 25 GVt ga, ularning elektr energiyasi ishlab chiqarishdagi ulushini esa 40 foizga yetkazish, shuningdek «Yashil energiya» sertifikatlari (I-REC) savdosi va «net-billing» mexanizmi orqali aholi hamda tadbirkorlarni rag'batlantirish yo'lga qo'yilgan.",
            en: 'Under the "Uzbekistan – 2030" Strategy, the nation targets 25 GW of renewable capacity and a 40% renewable share in total electricity generation by 2030, complemented by I-REC Green Energy Certificates, rooftop solar tax exemptions, and net-billing feed-in mechanisms for households and SMEs.',
            ru: 'Согласно Стратегии «Узбекистан – 2030», к 2030 году мощность ВИЭ намечено довести до 25 ГВт, а их долю в электрогенерации — до 40%. Дополнительно внедрены «зелёные сертификаты» I-REC, налоговые льготы на солнечные панели и механизм «нет-биллинга» для домохозяйств и бизнеса.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '89%',
        unit: { uz: 'arzonlashish', en: 'cost drop', ru: 'снижение цены' },
        label: {
          uz: '2010–2023-yillarda quyosh fotoelektr stansiyalarida global LCOE tannarxining pasayishi',
          en: 'Decline in global utility-scale solar PV LCOE from 2010 to 2023',
          ru: 'Снижение мировой стоимости солнечной генерации (LCOE) за 2010–2023 гг.',
        },
        year: '2023',
        source: { uz: 'IRENA Renewable Power Generation Costs', en: 'IRENA Renewable Power Generation Costs', ru: 'IRENA (2024)' },
      },
      {
        value: '30%+',
        unit: { uz: 'jahon ulushi', en: 'global share', ru: 'доля в мире' },
        label: {
          uz: 'Global elektr energiyasi ishlab chiqarishda qayta tiklanuvchi manbalar ulushi',
          en: 'Renewables share of global electricity generation',
          ru: 'Доля ВИЭ в мировом производстве электроэнергии',
        },
        year: '2023',
        source: { uz: 'IEA / Ember Global Electricity Review', en: 'IEA / Ember Global Electricity Review', ru: 'МЭА / Ember (2024)' },
      },
      {
        value: '40%',
        unit: { uz: '2030 maqsadi', en: '2030 target', ru: 'цель к 2030 г.' },
        label: {
          uz: "O'zbekistonda 2030-yilga borib elektr ishlab chiqarishda QTEM maqsadli ulushi (25 GVt)",
          en: 'Uzbekistan’s 2030 target for renewable share in power generation (25 GW)',
          ru: 'Целевая доля ВИЭ в электрогенерации Узбекистана к 2030 году (25 ГВт)',
        },
        year: '2030',
        source: { uz: 'PF-158 «O‘zbekiston – 2030» strategiyasi', en: 'PF-158 "Uzbekistan – 2030" Strategy', ru: 'УП-158 Стратегия «Узбекистан – 2030»' },
      },
      {
        value: '300+',
        unit: { uz: 'quyoshli kun/yil', en: 'sunny days/yr', ru: 'солнечных дней' },
        label: {
          uz: "O'zbekiston hududida yillik o'rtacha quyoshli kunlar davomiyligi",
          en: 'Average annual clear sunny days across Uzbekistan',
          ru: 'Среднегодовое число солнечных дней в Узбекистане',
        },
        year: '2024',
        source: { uz: 'Energetika vazirligi / Jahon banki Solar Atlas', en: 'Ministry of Energy / World Bank Solar Atlas', ru: 'Минэнерго РУз / Global Solar Atlas' },
      },
    ],
    charts: [
      {
        id: 't5-lcoe',
        type: 'line',
        title: {
          uz: 'Global elektr energiyasi LCOE tannarxining dinamikasi (AQSh dollari / MVt·soat)',
          en: 'Global Levelized Cost of Electricity (LCOE) Trajectory (USD / MWh)',
          ru: 'Динамика мировой приведённой стоимости электроэнергии LCOE (долл./МВт·ч)',
        },
        subtitle: {
          uz: 'Quyosh va shamol stansiyalarining an’anaviy qazilma yoqilg‘idan arzonlashishi',
          en: 'Rapid learning-curve cost decline of Solar PV and Onshore Wind',
          ru: 'Эффект кривой обучения: удешевление солнечной и ветровой генерации',
        },
        source: { uz: 'IRENA (2024)', en: 'IRENA (2024)', ru: 'IRENA (2024)' },
        unit: '$/MWh',
        seriesName: { uz: 'Quyosh FES ($/MWh)', en: 'Solar PV ($/MWh)', ru: 'Солнечные ФЭС ($/МВт·ч)' },
        secondarySeriesName: { uz: 'Quruqlik shamol ES ($/MWh)', en: 'Onshore Wind ($/MWh)', ru: 'Наземные ВЭС ($/МВт·ч)' },
        data: [
          { name: '2010', value: 445, secondaryValue: 107 },
          { name: '2014', value: 185, secondaryValue: 80 },
          { name: '2018', value: 78, secondaryValue: 55 },
          { name: '2021', value: 54, secondaryValue: 35 },
          { name: '2023', value: 44, secondaryValue: 33 },
        ],
      },
      {
        id: 't5-uz-res',
        type: 'bar',
        title: {
          uz: "O'zbekistonda quyosh va shamol elektr stansiyalari quvvatining o'sishi (GVt)",
          en: 'Uzbekistan Solar & Wind Installed Capacity Expansion (GW)',
          ru: 'Рост установленной мощности солнечных и ветровых станций в Узбекистане (ГВт)',
        },
        subtitle: {
          uz: 'Amaldagi ko‘rsatkichlar va 2030-yilgi davlat dasturi maqsadi',
          en: 'Historical buildout and official 2030 national target',
          ru: 'Фактический ввод мощностей и целевой ориентир к 2030 году',
        },
        source: { uz: 'O‘zbekiston Energetika vazirligi', en: 'Ministry of Energy of Uzbekistan', ru: 'Минэнерго Республики Узбекистан' },
        unit: 'GW',
        seriesName: { uz: 'Quyosh + Shamol (GVt)', en: 'Solar + Wind Capacity (GW)', ru: 'Мощность СЭС и ВЭС (ГВт)' },
        data: [
          { name: '2020', value: 0.1 },
          { name: '2022', value: 0.2 },
          { name: '2024', value: 3.5 },
          { name: '2026 (P)', value: 9.0 },
          { name: '2030 (P)', value: 25.0 },
        ],
      },
    ],
    laws: [
      {
        id: 't5-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Qayta tiklanuvchi energiya manbalaridan foydalanish to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On the Use of Renewable Energy Sources"',
          ru: 'Закон Республики Узбекистан «Об использовании возобновляемых источников энергии»',
        },
        codeAndDate: {
          uz: '21.05.2019-yil, O‘RQ-539-son',
          en: 'May 21, 2019, No. O’RQ-539',
          ru: '21.05.2019 г., № ЗРУ-539',
        },
        summary: {
          uz: "QTEM ishlab chiqaruvchilarining yagona elektr tarmog'iga ulanish huquqini, soliq va bojxona imtiyozlarini hamda davlat kafolatlarini belgilaydi.",
          en: 'Guarantees grid connection rights for independent renewable producers alongside property/land tax exemptions and customs incentives.',
          ru: 'Закрепляет право производителей ВИЭ на подключение к единой энергосистеме, налоговые и таможенные преференции.',
        },
        significance: {
          uz: "Energetika bozorida davlat monopoliyasidan xususiy mustaqil elektr ishlab chiqaruvchilar (IPP) ishtirokiga yo'l ochdi.",
          en: 'Unlocked billions in private Independent Power Producer (IPP) foreign investment into Uzbek solar and wind parks.',
          ru: 'Открыл электроэнергетику для частных независимых производителей (IPP) и миллиардных зелёных инвестиций.',
        },
      },
      {
        id: 't5-law-2',
        type: 'presidential',
        title: {
          uz: "2023-yilda qayta tiklanuvchi energiya manbalarini va energiya tejovchi texnologiyalarni joriy etishni jadallashtirish chora-tadbirlari",
          en: 'Presidential Resolution on Accelerating Renewable Energy and Energy-Saving Deployment',
          ru: 'Постановление Президента об ускорении внедрения ВИЭ и энергосберегающих технологий',
        },
        codeAndDate: {
          uz: 'PQ-57-son qaror, 16.02.2023-yil',
          en: 'Presidential Resolution No. PQ-57, February 16, 2023',
          ru: 'Постановление Президента № ПП-57 от 16.02.2023 г.',
        },
        summary: {
          uz: "«Quyoshli xonadon» dasturi, xonadonlardan ortiqcha elektrni tarmoqqa sotish subsidiyasi hamda ijtimoiy va biznes binolarida quyosh panellarini o'rnatish tartibini joriy etdi.",
          en: 'Launched the "Solar Home" feed-in tariff program, tax credits for rooftop PV installations, and green financing lines.',
          ru: 'Запустило программу «Солнечный дом» с выкупом излишков электроэнергии у населения и налоговыми льготами для бизнеса.',
        },
        significance: {
          uz: "Mikrogeneratsiya bozorini shakllantirib, aholini oddiy iste'molchidan «prosyumer» (ishlab chiqaruvchi-iste'molchi)ga aylantirdi.",
          en: 'Created a distributed micro-generation market, empowering households as electricity prosumers.',
          ru: 'Сформировало рынок микрогенерации, превратив домохозяйства в активных просьюмеров.',
        },
      },
      {
        id: 't5-law-3',
        type: 'presidential',
        title: {
          uz: "«Yashil energiya» sertifikatlari tizimini joriy etish chora-tadbirlari",
          en: 'Presidential Resolution on Introducing the "Green Energy" Certificates System',
          ru: 'Постановление Президента о внедрении системы сертификатов «Зелёная энергия»',
        },
        codeAndDate: {
          uz: 'PQ-156-son qaror, 12.05.2023-yil',
          en: 'Presidential Resolution No. PQ-156, May 12, 2023',
          ru: 'Постановление Президента № ПП-156 от 12.05.2023 г.',
        },
        summary: {
          uz: "QTEMda ishlab chiqarilgan har 1 000 kVt·soat elektr energiyasini tasdiqlovchi xalqaro I-REC standartidagi sertifikatlar muomalasini yo'lga qo'ydi.",
          en: 'Establishes I-REC compliant tradable certificates representing 1 MWh of verified renewable electricity generation.',
          ru: 'Вводит обращение сертификатов международного стандарта I-REC, подтверждающих выработку 1 МВт·ч чистой энергии.',
        },
        significance: {
          uz: "Mahalliy eksportyor korxonalarga Yevropa CBAM uglerod talablariga javob berishda muhim bozor vositasi beradi.",
          en: 'Helps Uzbek industrial exporters document low-carbon electricity use under global supply-chain and EU CBAM rules.',
          ru: 'Позволяет отечественным экспортёрам подтверждать низкий углеродный след продукции на внешних рынках.',
        },
      },
    ],
    facts: [
      {
        uz: "Navoiy viloyati Karmana tumanida 2021-yilda ishga tushirilgan 100 MVt quvvatli «Nur Navoi Solar» stansiyasi O'zbekistonning davlat-xususiy sheriklik asosidagi ilk sanoat quyosh stansiyasi bo'ldi.",
        en: 'Commissioned in 2021 in Karmana (Navoi), the 100 MW Nur Navoi Solar plant became Uzbekistan’s first utility-scale PPP solar facility.',
        ru: 'Запущенная в 2021 году в Навоийской области ФЭС «Nur Navoi Solar» мощностью 100 МВт стала первой промышленной солнечной станцией ГЧП в стране.',
      },
      {
        uz: "Buxoro va Navoiy viloyatlarida (Zarafshon va Bash/Jankeldi loyihalari) Markaziy Osiyodagi eng yirik shamol elektr stansiyalari klasterlari (500 MVt — 1 GVt) barpo etilmoqda.",
        en: 'Utility-scale wind farms of 500 MW to 1 GW in Zarafshan (Navoi) and Bash/Dzhankeldy (Bukhara) rank among Central Asia’s largest wind power complexes.',
        ru: 'В Навоийской (Зарафшан) и Бухарской (Баш и Джангельды) областях возводятся крупнейшие в Центральной Азии ветропарки мощностью по 500 МВт и выше.',
      },
      {
        uz: "Svanson qonuniga (Swanson’s Law) ko'ra, jahonda quyosh modullari ishlab chiqarish hajmi har safar ikki barobar oshganda, ularning narxi o'rtacha 20–24 foizga arzonlashib kelgan.",
        en: 'Swanson’s Law observes that solar photovoltaic module prices fall by roughly 20–24% for every doubling of cumulative global shipped volume.',
        ru: 'Согласно закону Свансона, при каждом удвоении мирового кумулятивного выпуска солнечных панелей их стоимость снижается в среднем на 20–24%.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Xalqaro IFC Scaling Solar auksioni: O'zbekistonda tariflarning bozor mexanizmi orqali arzonlashishi",
        en: 'IFC Scaling Solar Auctions in Uzbekistan: Competitive Price Discovery',
        ru: 'Аукционы IFC Scaling Solar в Узбекистане: рыночное снижение тарифов',
      },
      location: {
        uz: 'Navoiy, Samarqand, Jizzax va Surxondaryo viloyatlari',
        en: 'Navoi, Samarkand, Jizzakh & Surkhandarya Regions, Uzbekistan',
        ru: 'Навоийская, Самаркандская, Джизакская и Сурхандарьинская области',
      },
      challenge: {
        uz: "Davlat budjeti qarzini oshirmasdan eskirgan gaz issiqlik elektr stansiyalariga qaramlikni kamaytirish va arzon elektr olish talab etilardi.",
        en: 'Uzbekistan needed rapid gigawatt-scale clean capacity without burdening sovereign fiscal budgets or paying inflated negotiated tariffs.',
        ru: 'Требовалось быстро привлечь гигаватты чистой генерации без нагрузки на госбюджет и без завышенных нерыночных тарифов.',
      },
      solution: {
        uz: "Jahon banki guruhi (IFC) va Osiyo taraqqiyot banki ko'magida ochiq raqobatli ikki bosqichli tenderlar o'tkazilib, 25 yillik elektr sotib olish shartnomalari (PPA) tuzildi.",
        en: 'Transparent two-stage international auctions backed by IFC and ADB standardized 25-year Power Purchase Agreements (PPAs), lowering investor risk premiums.',
        ru: 'При поддержке IFC и АБР были проведены открытые двухэтапные тендеры со стандартизированными 25-летними контрактами на закупку электроэнергии (PPA).',
      },
      economicOutcome: {
        uz: "Raqobat natijasida 1 kVt·soat elektr narxi 1,8–2,9 AQSh sentigacha tushdi va yiliga milliardlab kub metr tabiiy gazni tejash imkoniyati yaratildi.",
        en: 'Winning bids fell to 1.8–2.9 US cents/kWh—among the lowest in emerging markets—saving billions of cubic meters of natural gas annually.',
        ru: 'Конкуренция снизила тарифы до 1,8–2,9 цента США за кВт·ч, обеспечив экономию миллиардов кубометров природного газа ежегодно.',
      },
    },
    terms: [
      {
        term: { uz: 'LCOE (keltirilgan elektr tannarxi)', en: 'LCOE (Levelized Cost of Electricity)', ru: 'LCOE (нормированная стоимость энергии)' },
        definition: {
          uz: "Elektr stansiyasining butun xizmat muddati davomidagi barcha kapital va operatsion xarajatlarining ishlab chiqarilgan jami elektr hajmiga nisbati.",
          en: 'Average net present cost of electricity generation for a power plant over its entire operating lifetime.',
          ru: 'Средняя дисконтированная себестоимость производства 1 кВт·ч электроэнергии за весь жизненный цикл электростанции.',
        },
      },
      {
        term: { uz: 'Prosyumer (Prosumer)', en: 'Prosumer', ru: 'Просьюмер' },
        definition: {
          uz: "O'z quyosh paneli orqali elektr energiyasini ham iste'mol qiluvchi, ham ortiqchasini tarmoqqa sotuvchi xonadon yoki korxona.",
          en: 'An energy consumer who also produces electricity (typically via rooftop solar) and sells surplus back to the grid.',
          ru: 'Потребитель, который одновременно производит собственную электроэнергию и поставляет излишки в общую сеть.',
        },
      },
      {
        term: { uz: 'Yashil energiya sertifikati (I-REC)', en: 'Green Energy Certificate (I-REC)', ru: 'Зелёный сертификат (I-REC)' },
        definition: {
          uz: "1 MVt·soat elektr energiyasi qayta tiklanuvchi manbadan olinganligini tasdiqlovchi va bozorda sotiladigan elektron hujjat.",
          en: 'A tradable digital attribute certificate verifying that 1 MWh of electricity originated from a renewable source.',
          ru: 'Рыночный электронный документ, подтверждающий выработку 1 МВт·ч электроэнергии из возобновляемого источника.',
        },
      },
      {
        term: { uz: 'PPA (elektr sotib olish shartnomasi)', en: 'PPA (Power Purchase Agreement)', ru: 'PPA (договор покупки мощности/энергии)' },
        definition: {
          uz: "Xususiy elektr stansiyasi va yagona tarmoq operatori o'rtasida uzoq muddatli belgilangan tarifda elektr xarid qilish shartnomasi.",
          en: 'Long-term contract between an independent power producer and an off-taker specifying price and delivery terms.',
          ru: 'Долгосрочное соглашение между частным генератором и оператором сети о гарантированном выкупе электроэнергии.',
        },
      },
    ],
    quiz: [
      {
        id: 'q5-1',
        question: {
          uz: "IRENA ma'lumotlariga ko'ra, 2010–2023-yillarda sanoat quyosh elektr stansiyalarida LCOE tannarxi taxminan qanchaga arzonlashdi?",
          en: 'According to IRENA, roughly how much did utility-scale solar PV LCOE fall between 2010 and 2023?',
          ru: 'По данным IRENA, примерно на сколько снизился показатель LCOE солнечных электростанций за 2010–2023 годы?',
        },
        options: [
          { uz: 'Taxminan 89–90% ga', en: 'By roughly 89–90%', ru: 'Примерно на 89–90%' },
          { uz: 'Atigi 5% ga', en: 'By only 5%', ru: 'Всего на 5%' },
          { uz: 'Ikki barobar qimmatlashdi', en: 'It doubled in cost', ru: 'Вырос в два раза' },
          { uz: 'Umuman o‘zgarmadi', en: 'Remained unchanged', ru: 'Не изменился' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Texnologik o'rganish egri chizig'i va ommaviy ishlab chiqarish quyosh elektr tannarxini 2010-yildan beri ~89–90% ga tushirdi.",
          en: 'Manufacturing scale and module efficiency cut utility-scale solar LCOE by ~89% between 2010 and 2023.',
          ru: 'Масштабирование выпуска и рост КПД модулей снизили мировую стоимость солнечной энергии примерно на 89%.',
        },
      },
      {
        id: 'q5-2',
        question: {
          uz: "«O'zbekiston – 2030» strategiyasiga ko'ra, 2030-yilga borib mamlakat elektr ishlab chiqarishida QTEM ulushini necha foizga yetkazish belgilangan?",
          en: 'Under the "Uzbekistan – 2030" Strategy, what is the target renewable share in electricity generation by 2030?',
          ru: 'Какова целевая доля ВИЭ в производстве электроэнергии к 2030 году согласно Стратегии «Узбекистан – 2030»?',
        },
        options: [
          { uz: '10%', en: '10%', ru: '10%' },
          { uz: '22%', en: '22%', ru: '22%' },
          { uz: '40%', en: '40%', ru: '40%' },
          { uz: '95%', en: '95%', ru: '95%' },
        ],
        correctIndex: 2,
        explanation: {
          uz: "PF-158-son Farmon bilan tasdiqlangan strategiyada QTEM quvvatini 25 GVt ga va ulushini 40% ga yetkazish maqsad qilingan.",
          en: 'Uzbekistan targets 25 GW of installed renewable capacity supplying 40% of national electricity by 2030.',
          ru: 'Стратегия предусматривает доведение мощности ВИЭ до 25 ГВт и их доли в выработке электроэнергии до 40%.',
        },
      },
      {
        id: 'q5-3',
        question: {
          uz: "O'zbekistonning «Qayta tiklanuvchi energiya manbalaridan foydalanish to'g'risida»gi Qonuni qaysi raqam bilan qabul qilingan?",
          en: 'What is the official legislative number of Uzbekistan’s 2019 Law "On the Use of Renewable Energy Sources"?',
          ru: 'Какой номер имеет Закон Республики Узбекистан 2019 года «Об использовании возобновляемых источников энергии»?',
        },
        options: [
          { uz: 'O‘RQ-539-son (21.05.2019)', en: 'No. O’RQ-539 (May 21, 2019)', ru: '№ ЗРУ-539 (21.05.2019 г.)' },
          { uz: 'O‘RQ-101-son (1991)', en: 'No. O’RQ-101 (1991)', ru: '№ ЗРУ-101 (1991 г.)' },
          { uz: 'PQ-12-son (2001)', en: 'No. PQ-12 (2001)', ru: '№ ПП-12 (2001 г.)' },
          { uz: 'O‘RQ-999-son (2010)', en: 'No. O’RQ-999 (2010)', ru: '№ ЗРУ-999 (2010 г.)' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "2019-yil 21-mayda qabul qilingan O'RQ-539-son Qonun yashil energetika bozorining asosiy huquqiy poydevoridir.",
          en: 'Law No. O’RQ-539 of May 21, 2019 forms the statutory basis for renewable energy investors and prosumers.',
          ru: 'Закон № ЗРУ-539 от 21 мая 2019 года заложил правовую основу сектора ВИЭ в Узбекистане.',
        },
      },
      {
        id: 'q5-4',
        question: {
          uz: "I-REC «Yashil energiya» sertifikati qancha hajmdagi qayta tiklanuvchi elektr energiyasini tasdiqlaydi?",
          en: 'One standard I-REC Green Energy Certificate verifies what quantity of renewable electricity?',
          ru: 'Какой объём выработанной чистой электроэнергии удостоверяет один зелёный сертификат стандарта I-REC?',
        },
        options: [
          { uz: '1 MVt·soat (1 000 kVt·soat)', en: '1 MWh (1,000 kWh)', ru: '1 МВт·ч (1 000 кВт·ч)' },
          { uz: '1 Vt·soat', en: '1 Wh', ru: '1 Вт·ч' },
          { uz: '100 GVt·soat', en: '100 GWh', ru: '100 ГВт·ч' },
          { uz: '1 tonna neft ekvivalenti', en: '1 tonne of oil equivalent', ru: '1 тонну нефтяного эквивалента' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "PQ-156-son qarorga va xalqaro I-REC standartiga ko'ra, 1 ta sertifikat 1 000 kVt·soat (1 MVt·soat) yashil elektrga teng.",
          en: 'Globally and in Uzbekistan (PQ-156), one I-REC certificate represents 1 MWh (1,000 kWh) of renewable generation.',
          ru: 'Один сертификат I-REC подтверждает производство ровно 1 МВт·ч (1 000 кВт·ч) возобновляемой электроэнергии.',
        },
      },
      {
        id: 'q5-5',
        question: {
          uz: "Quyosh va shamol elektr stansiyalarining asosiy mikroiqtisodiy xususiyati nimada?",
          en: 'What is the defining microeconomic cost characteristic of solar PV and wind power plants?',
          ru: 'В чём состоит главная микроэкономическая особенность структуры затрат СЭС и ВЭС?',
        },
        options: [
          { uz: "Yoqilg'ining chekli xarajati nolga yaqin, asosiy yuklama boshlang'ich CAPEXda", en: 'Near-zero marginal fuel cost with capital-intensive upfront CAPEX', ru: 'Близкие к нулю предельные топливные издержки при высокой доле начального CAPEX' },
          { uz: 'Har soatda ko‘mir sotib olish xarajati yuqori', en: 'High hourly coal purchase expenses', ru: 'Высокие почасовые расходы на закупку угля' },
          { uz: 'Qurilish xarajati nolga teng', en: 'Zero initial construction cost', ru: 'Нулевые затраты на строительство' },
          { uz: 'Faqat tunda maksimal quvvatda quyosh energiyasi beradi', en: 'Solar panels peak at midnight without storage', ru: 'Максимальная выработка СЭС ночью без аккумуляторов' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Quyosh nuri va shamol bepul bo'lgani uchun chekli xarajat nolga yaqin; iqtisodiy samaradorlik CAPEX va kredit foiz stavkasiga bog'liq.",
          en: 'Because sunlight and wind are free, marginal operating costs are minimal while financing cost (WACC) dominates LCOE.',
          ru: 'Солнце и ветер бесплатны, поэтому предельные издержки минимальны, а ключевую роль играют CAPEX и стоимость заёмного капитала.',
        },
      },
    ],
  },

  {
    id: 6,
    isIndependentStudy: true,
    iconName: 'Orbit',
    title: {
      uz: 'Ekosistema populyasiyasi. Ekologik tizimlar. Biosfera',
      en: 'Ecosystem Populations, Ecological Systems, and the Biosphere',
      ru: 'Популяции экосистем. Экологические системы. Биосфера',
    },
    shortDescription: {
      uz: "Populyatsiyalar dinamikasi, biotsenoz, ekotizim tovarlari va xizmatlari qiymati, Lindeman ozuqa piramidasi, Vernadskiy noosferasi va inson ekologiyasi.",
      en: 'Population dynamics, biocenosis, valuation of ecosystem goods and services, Lindeman’s trophic pyramid, Vernadsky’s noosphere, and human ecology.',
      ru: 'Динамика популяций, биоценоз, экономическая ценность экосистемных услуг, пирамида Линдемана, ноосфера Вернадского и экология человека.',
    },
    keywords: {
      uz: ['ekotizim', 'populyatsiya', 'biotsenoz', 'biosfera', 'noosfera', 'ekotizim xizmatlari', 'ozuqa piramidasi', 'SEEA'],
      en: ['ecosystem', 'population dynamics', 'biocenosis', 'biosphere', 'noosphere', 'ecosystem services', 'trophic pyramid', 'SEEA'],
      ru: ['экосистема', 'популяция', 'биоценоз', 'биосфера', 'ноосфера', 'экосистемные услуги', 'трофическая пирамида'],
    },
    sections: [
      {
        heading: {
          uz: '1. Populyatsiyalar dinamikasi, biotsenoz va ozuqa piramidasi',
          en: '1. Population Dynamics, Biocenosis, and the Trophic Pyramid',
          ru: '1. Динамика популяций, биоценоз и трофическая пирамида',
        },
        paragraphs: [
          {
            uz: "Populyatsiya — muayyan hududda uzoq vaqt yashovchi va o'zaro erkin chatishuvchi bir turga mansub individlar yig'indisidir. Turli populyatsiyalar hamjamiyati (biotsenoz) hamda ular yashaydigan jonsiz muhit (biotop) birgalikda yagona modda va energiya almashinuviga ega ekologik tizimni (biogeotsenozni — «ekotizim» atamasini 1935-yilda Artur Tensli kiritgan) hosil qiladi.",
            en: 'A population comprises interbreeding individuals of a single species occupying a defined habitat. Multiple interacting populations form a biological community (biocenosis), which together with its physical habitat (biotope) constitutes a functional ecosystem—a concept introduced by Arthur Tansley in 1935.',
            ru: 'Популяция — это совокупность особей одного вида, длительно обитающих на определённой территории. Сообщество взаимосвязанных популяций (биоценоз) в единстве с биотопом образует экологическую систему (термин предложен Артуром Тэнсли в 1935 году).',
          },
          {
            uz: "Ekotizimda energiya oqimi Reymond Lindemanning «10 foiz qoidasi» (1942) bo'yicha harakatlanadi: bir trofik (ozuqa) bosqichdan keyingi bosqichga energiyaning o'rtacha atigi 10 foizi o'tadi, qolgan 90 foizi nafas olish va issiqlik sifatida tarqaladi. Bu qonuniyat iqtisodiyot uchun muhim xulosa beradi: chorvachilik oqsili ishlab chiqarish o'simlikshunoslikka qaraganda o'rtacha 7–10 barobar ko'proq yer va suv resurslarini talab qiladi.",
            en: 'Energy transfer across food webs obeys Raymond Lindeman’s 10% Law (1942): roughly 10% of chemical energy at one trophic level converts into biomass at the next, while ~90% dissipates as metabolic heat. For agricultural economics, this explains why producing animal protein requires 7–10 times more land and water inputs per kilocalorie than plant crops.',
            ru: 'Поток энергии в пищевых цепях подчиняется правилу 10% Раймонда Линдемана (1942): на каждый следующий трофический уровень переходит в среднем лишь около 10% энергии. Для аграрной экономики это объясняет, почему производство животного белка требует в 7–10 раз больше земельных и водных ресурсов на килокалорию, чем растениеводство.',
          },
        ],
        keyTakeaway: {
          uz: "Ekotizim barqarorligi uning biologik xilma-xilligi bilan to'g'ri proporsional: turlar zanjiri qanchalik boy bo'lsa, iqtisodiy shoklarga chidamlilik shunchalik yuqori bo'ladi.",
          en: 'Ecosystem resilience scales with biodiversity complexity: richer trophic networks buffer agricultural and hydrological systems against shocks.',
          ru: 'Устойчивость экосистемы прямо пропорциональна её видовому разнообразию: чем сложнее трофические сети, тем ниже риск хозяйственных потерь.',
        },
      },
      {
        heading: {
          uz: '2. Ekotizim tovarlari va xizmatlarining iqtisodiy bahosi',
          en: '2. Economic Valuation of Ecosystem Goods and Services',
          ru: '2. Экономическая оценка экосистемных товаров и услуг',
        },
        paragraphs: [
          {
            uz: "BMTning «Mingyillik ekotizim bahosi» (Millennium Ecosystem Assessment) tasnifiga ko'ra, tabiat iqtisodiyotga to'rt turdagi bepul xizmat ko'rsatadi: (1) Ta'minlovchi xizmatlar (oziq-ovqat, chuchuk suv, yog'och, dorivor xomashyo); (2) Tartibga soluvchi xizmatlar (iqlimni barqarorlashtirish, uglerodni yutish, suvni tabiiy filtrlash, changlatish, sel va toshqinlardan himoya); (3) Madaniy-rekreatsion xizmatlar (ekoturizm, estetik va ilmiy qiymat); (4) Qo'llab-quvvatlovchi xizmatlar (fotosintez, tuproq hosil bo'lishi).",
            en: 'Under the UN Millennium Ecosystem Assessment framework, nature delivers four streams of economic value: (1) Provisioning services (food, freshwater, timber, pharmaceuticals); (2) Regulating services (carbon sequestration, flood attenuation, water purification, pollination); (3) Cultural services (ecotourism, recreation); and (4) Supporting services (photosynthesis, soil formation, nutrient cycling).',
            ru: 'Согласно классификации ООН (Millennium Ecosystem Assessment), экосистемы обеспечивают четыре категории услуг: (1) обеспечивающие (продовольствие, пресная вода, древесина); (2) регулирующие (поглощение углерода, очистка воды, опыление, защита от селей); (3) культурно-рекреационные (экотуризм); (4) поддерживающие (фотосинтез, почвообразование).',
          },
          {
            uz: "Robert Kostansa va hammualliflar (Costanza et al.) global ekotizim xizmatlarining yillik qiymatini 125–145 trillion AQSh dollaridan yuqori (jahon yillik YaIMidan ko'proq!) deb baholagan. Bugungi kunda BMTning SEEA (Ekologik-iqtisodiy hisob tizimi) standarti asosida davlatlar YaIM bilan bir qatorda «Yalpi ekotizim mahsuloti»ni ham hisobga olishni boshlamoqda, shuningdek «Ekotizim xizmatlari uchun to'lov» (PES) shartnomalari kengaymoqda.",
            en: 'Landmark studies by Robert Costanza et al. estimate global ecosystem services at $125–$145 trillion annually—exceeding global market GDP. Through the UN System of Environmental-Economic Accounting (SEEA) and Payments for Ecosystem Services (PES), governments now integrate natural capital accounts directly into national balance sheets.',
            ru: 'Фундаментальные оценки Роберта Костанцы показывают, что годовая ценность мировых экосистемных услуг составляет 125–145 трлн долларов США, превышая мировой ВВП. Сегодня стандарт СЭЭУ ООН (SEEA) и механизмы платы за экосистемные услуги (PES) позволяют включать природный капитал в национальные счета.',
          },
        ],
      },
      {
        heading: {
          uz: '3. Biosfera, V.I. Vernadskiyning noosfera ta’limoti va inson ekologiyasi',
          en: '3. The Biosphere, Vernadsky’s Noosphere, and Human Ecology',
          ru: '3. Биосфера, учение В.И. Вернадского о ноосфере и экология человека',
        },
        paragraphs: [
          {
            uz: "Biosfera — Yerning tirik organizmlar tarqalgan va ular tomonidan uzluksiz o'zgartiriladigan qobig'i bo'lib (troposferaning quyi qismi, butun gidrosfera va litosferaning yuqori qatlamini qamrab oladi), uning yaxlit ta'limotini akademik V.I. Vernadskiy yaratgan. Vernadskiy insoniyatning ilmiy tafakkuri va xo'jalik qudrati geologik kuchga aylanganini ko'rsatib, biosfera qonuniyatli ravishda «noosfera»ga (aql-idrok qobig'iga) o'tishi kerakligini asoslagan.",
            en: 'The biosphere encompasses Earth’s life-supporting envelope—spanning the lower troposphere, the entire hydrosphere, and the upper lithosphere—systematically theorized by Vladimir Vernadsky. Observing that human industrial activity had become a planetary geological force, Vernadsky envisioned an evolutionary transition toward the "noosphere"—the sphere of reason.',
            ru: 'Биосфера — глобальная оболочка Земли, населённая и преобразуемая живым веществом (нижняя тропосфера, вся гидросфера и верхняя часть литосферы), целостное учение о которой создал В.И. Вернадский. Учёный обосновал переход биосферы в «ноосферу» — сферу разума, где научная мысль гармонизирует развитие общества и природы.',
          },
          {
            uz: "Zamonaviy tilda noosfera g'oyasi yashil raqamli iqtisodiyot, sirkulyar ishlab chiqarish va inson ekologiyasi bilan uyg'unlashadi. O'zbekiston tog' o'rmonlari va Orolbo'yi ho'l-botqoq ekotizimlari (masalan, BMT va Ramsar ro'yxatiga kiritilgan Sudochye ko'llar tizimi) nafaqat bioxilma-xillikni saqlaydi, balki mintaqaviy iqlimni yumshatish va ekoturizm orqali mahalliy aholiga barqaror daromad beradi.",
            en: 'In contemporary economics, Vernadsky’s noosphere aligns with circular bio-economies, planetary boundary stewardship, and human ecology. In Uzbekistan, mountain juniper forests and Ramsar-designated Aral wetlands such as the Sudochye lake system regulate regional microclimates while supporting sustainable ecotourism livelihoods.',
            ru: 'В современной науке идея ноосферы перекликается с концепцией планетарных границ, циркулярной биоэкономики и экологии человека. В Узбекистане горные арчовники и водно-болотные угодья Приаралья (например, система озёр Судочье Рамсарской конвенции) смягчают микроклимат и формируют базу экотуризма.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '$125–145',
        unit: { uz: 'trln AQSh $/yil', en: 'trillion $/yr', ru: 'трлн долл./год' },
        label: {
          uz: 'Global ekotizim xizmatlarining hisoblangan yillik iqtisodiy qiymati',
          en: 'Estimated annual economic value of global ecosystem services',
          ru: 'Оценка годовой экономической ценности мировых экосистемных услуг',
        },
        year: '2020',
        source: { uz: 'Costanza et al. / OECD Biodiversity Finance', en: 'Costanza et al. / OECD Report', ru: 'Costanza et al. / ОЭСР' },
        isApproximate: true, // TODO: tekshiring (2011/2020 baholash metodologiyasiga qarab $125–145 trln)
      },
      {
        value: '50%+',
        unit: { uz: 'jahon YaIMi', en: 'of global GDP', ru: 'мирового ВВП' },
        label: {
          uz: "Tabiat va ekotizim xizmatlariga o'rtacha yoki yuqori darajada bog'liq bo'lgan global YaIM ($44+ trln)",
          en: 'Share of global GDP ($44T+) moderately or highly dependent on nature',
          ru: 'Доля мирового ВВП ($44+ трлн), прямо зависящая от экосистемных услуг',
        },
        year: '2023',
        source: { uz: 'WEF / PwC Nature Risk Rising', en: 'World Economic Forum (WEF)', ru: 'Всемирный экономический форум (ВЭФ)' },
      },
      {
        value: '~10%',
        unit: { uz: 'energiya o‘tishi', en: 'energy transfer', ru: 'передача энергии' },
        label: {
          uz: 'Lindeman qoidasiga ko‘ra ozuqa piramidasining bir bosqichidan keyingisiga o‘tuvchi energiya',
          en: 'Average trophic energy transfer efficiency across food-chain levels',
          ru: 'Средняя эффективность переноса энергии между уровнями трофической пирамиды',
        },
        year: 'Doimiy',
        source: { uz: 'Lindeman bioenergetika qonuni', en: 'Lindeman’s Trophic Law', ru: 'Закон пирамиды энергий Линдемана' },
      },
      {
        value: '90+',
        unit: { uz: 'davlatlar soni', en: 'countries', ru: 'стран мира' },
        label: {
          uz: 'BMTning SEEA ekologik-iqtisodiy milliy hisoblar tizimini joriy etgan davlatlar',
          en: 'Countries implementing UN SEEA natural capital accounting',
          ru: 'Страны, внедряющие систему эколого-экономического учёта СЭЭУ ООН',
        },
        year: '2023',
        source: { uz: 'BMT Statistika bo‘limi (UNSD SEEA)', en: 'UN Statistics Division (SEEA)', ru: 'Статистический отдел ООН (SEEA)' },
      },
    ],
    charts: [
      {
        id: 't6-trophic',
        type: 'bar',
        title: {
          uz: 'Lindeman ozuqa piramidasi: har bir trofik darajada qoluvchi energiya (kJ)',
          en: 'Lindeman Trophic Pyramid: Retained Energy Across Food-Web Tiers (kJ)',
          ru: 'Пирамида энергий Линдемана: доступная энергия по трофическим уровням (кДж)',
        },
        subtitle: {
          uz: '10 000 kJ birlamchi o‘simlik energiyasining zanjir bo‘ylab kamayishi',
          en: 'Stepwise dissipation of 10,000 kJ primary producer energy',
          ru: 'Десятикратное затухание потока от 10 000 кДж первичных продуцентов',
        },
        source: { uz: 'Ekologik bioenergetika standarti', en: 'Trophic Bioenergetics Standard', ru: 'Классическая биоэнергетика экосистем' },
        unit: 'kJ',
        seriesName: { uz: 'Energiya (kJ)', en: 'Available Energy (kJ)', ru: 'Энергия (кДж)' },
        data: [
          { name: { uz: '1. Produtsentlar (o‘simlik)', en: '1. Primary Producers', ru: '1. Продуценты (растения)' }, value: 10000 },
          { name: { uz: '2. O‘txo‘r konsumentlar', en: '2. Herbivores', ru: '2. Консументы I порядка' }, value: 1000 },
          { name: { uz: '3. Birlamchi yirtqichlar', en: '3. Primary Carnivores', ru: '3. Консументы II порядка' }, value: 100 },
          { name: { uz: '4. Yuqori yirtqichlar', en: '4. Apex Predators', ru: '4. Высшие хищники' }, value: 10 },
        ],
      },
      {
        id: 't6-ecosystem-value',
        type: 'pie',
        title: {
          uz: 'Global ekotizim xizmatlari iqtisodiy qiymatining biomlar kesimidagi taqsimoti (%)',
          en: 'Distribution of Global Ecosystem Service Value by Major Biome (%)',
          ru: 'Распределение ценности мировых экосистемных услуг по основным биомам (%)',
        },
        subtitle: {
          uz: 'Suv-botqoq, qirg‘oqbo‘yi va o‘rmon ekotizimlarining yuqori hissasi',
          en: 'High per-hectare valuation of coastal systems, wetlands, and forests',
          ru: 'Высокий удельный вклад прибрежных зон, водно-болотных угодий и лесов',
        },
        source: { uz: 'Costanza et al. / TEEB hisoboti asosida', en: 'Based on Costanza et al. / TEEB', ru: 'По данным Costanza et al. / TEEB' },
        unit: '%',
        seriesName: { uz: 'Ulush (%)', en: 'Value Share (%)', ru: 'Доля (%)' },
        data: [
          { name: { uz: 'Okean va qirg‘oqbo‘yi', en: 'Marine & Coastal Systems', ru: 'Морские и прибрежные зоны' }, value: 39 },
          { name: { uz: 'Suv-botqoq va daryo', en: 'Wetlands, Lakes & Rivers', ru: 'Водно-болотные угодья' }, value: 23 },
          { name: { uz: 'Tropik va mo‘tadil o‘rmon', en: 'Forests', ru: 'Лесные экосистемы' }, value: 21 },
          { name: { uz: 'Yaylov va dashtlar', en: 'Grasslands & Rangelands', ru: 'Луга и пастбища' }, value: 11 },
          { name: { uz: 'Agrolandshaftlar', en: 'Croplands', ru: 'Агроэкосистемы' }, value: 6 },
        ],
      },
    ],
    laws: [
      {
        id: 't6-law-1',
        type: 'international',
        title: {
          uz: "Xalqaro ahamiyatga ega bo'lgan suv-botqoq hududlar to'g'risidagi Ramsar konvensiyasi",
          en: 'Ramsar Convention on Wetlands of International Importance',
          ru: 'Рамсарская конвенция о водно-болотных угодьях международного значения',
        },
        codeAndDate: {
          uz: '02.02.1971-yil (O‘zbekistonda 2002-yildan kuchga kirgan: Dengizko‘l, Aydar-Arnasoy, To‘dako‘l, Sudochye)',
          en: 'Adopted Feb 2, 1971 (Entered into force for Uzbekistan in 2002)',
          ru: '02.02.1971 г. (вступила в силу для Узбекистана в 2002 г.)',
        },
        summary: {
          uz: "Suv-botqoq ekotizimlari va suvda suzuvchi qushlar yashash muhitini saqlash hamda ulardan «oqilona foydalanish» (wise use) tamoyilini belgilaydi.",
          en: 'Commits member states to conserve and practice "wise use" of vital wetland ecosystems and migratory bird habitats.',
          ru: 'Закрепляет охрану и принцип «разумного использования» водно-болотных экосистем международного значения.',
        },
        significance: {
          uz: "O'zbekistonning Aydar-Arnasoy, Dengizko'l, To'dako'l, Quyimozor va Sudochye ko'llarining xalqaro maqomi va ekoturizm salohiyatini oshiradi.",
          en: 'Protects Uzbekistan’s major wetland complexes, sustaining regional fisheries, microclimate regulation, and ecotourism.',
          ru: 'Защищает ключевые озёрные экосистемы Узбекистана, поддерживая рыболовство, микроклимат и экотуризм.',
        },
      },
      {
        id: 't6-law-2',
        type: 'international',
        title: {
          uz: "YUNESKOning «Inson va biosfera» (MAB) dasturi va Biosfera rezervatlari maqomi",
          en: 'UNESCO Man and the Biosphere (MAB) Programme',
          ru: 'Программа ЮНЕСКО «Человек и биосфера» (MAB)',
        },
        codeAndDate: {
          uz: '1971-yil (O‘zbekistonda Quyi Amudaryo va Chotqol biosfera rezervatlari)',
          en: 'Launched 1971 (Includes Uzbekistan’s Chatkal and Lower Amu Darya Biosphere Reserves)',
          ru: '1971 г. (включает Чаткальский и Нижне-Амударьинский биосферные резерваты РУз)',
        },
        summary: {
          uz: "Biosfera rezervatlarini 3 ta zonaga (qat'iy qo'riqlanadigan yadro, bufer zona va barqaror xo'jalik yuritiladigan o'tish zonasi) ajratish orqali tabiat va iqtisodiyotni uyg'unlashtiradi.",
          en: 'Integrates strict core conservation zones with buffer and sustainable socio-economic transition zones for local communities.',
          ru: 'Гармонизирует строгую охрану ядра экосистемы с устойчивой хозяйственной деятельностью населения в буферной и переходной зонах.',
        },
        significance: {
          uz: "Vernadskiy noosfera g'oyasining amaliy hududiy boshqaruv modelidir.",
          en: 'Provides a real-world territorial governance model balancing biodiversity and rural income.',
          ru: 'Практическая модель сочетания сохранения биосферы и устойчивых доходов местных общин.',
        },
      },
      {
        id: 't6-law-3',
        type: 'international',
        title: {
          uz: "BMTning Ekologik-iqtisodiy hisob tizimi — Ekotizim hisobi standarti (SEEA EA)",
          en: 'UN System of Environmental-Economic Accounting — Ecosystem Accounting (SEEA EA)',
          ru: 'Система эколого-экономического учёта ООН — Экосистемный учёт (SEEA EA)',
        },
        codeAndDate: {
          uz: 'BMT Statistika komissiyasi, mart 2021-yil',
          en: 'Adopted by UN Statistical Commission, March 2021',
          ru: 'Принят Статистической комиссией ООН в марте 2021 г.',
        },
        summary: {
          uz: "Ekotizimlarning maydoni, holati va ular ko'rsatadigan xizmatlarni pul hamda fizik ko'rsatkichlarda milliy hisoblar tizimiga (SNA) qo'shish metodologiyasini beradi.",
          en: 'Establishes global statistical standards to measure ecosystem extent, condition, and monetary service flows alongside GDP.',
          ru: 'Устанавливает международный стандарт оценки состояния экосистем и их услуг в натуральном и денежном выражении наряду с ВВП.',
        },
        significance: {
          uz: "«Ko'rinmas» tabiiy kapitalni makroiqtisodiy balansda ko'rinadigan aktivga aylantiradi.",
          en: 'Makes previously invisible natural capital depreciation visible to finance ministries.',
          ru: 'Делает «невидимый» природный капитал измеримым активом для макроэкономического планирования.',
        },
      },
    ],
    facts: [
      {
        uz: "Qoraqalpog'istondagi Quyi Amudaryo davlat biosfera rezervati 2021-yilda YUNESKOning Jahon biosfera rezervatlari tarmog'iga kiritilib, u yerda noyob Buxoro bug'usi (xongul) populyatsiyasi va to'qay o'rmonlari saqlab qolingan.",
        en: 'Added to UNESCO’s World Network in 2021, Uzbekistan’s Lower Amu Darya State Biosphere Reserve protects rare riparian tugai forests and endangered Bukhara deer.',
        ru: 'Включённый в сеть ЮНЕСКО в 2021 году Нижне-Амударьинский государственный биосферный резерват сохраняет уникальные тугайные леса и популяцию бухарского оленя.',
      },
      {
        uz: "Nyu-York shahri (Catskill suv havzasi) sun'iy suv filtrlash zavodini qurish uchun 8–10 mlrd dollar sarflash o'rniga, yuqori oqimdagi o'rmon va tuproq ekotizimini saqlashga ~1,5 mlrd dollar yo'naltirib, milliardlab mablag' tejagan.",
        en: 'New York City famously saved $6–$8 billion in capital filtration plant costs by investing ~$1.5 billion in restoring natural Catskill watershed ecosystems.',
        ru: 'Нью-Йорк сэкономил 6–8 млрд долларов на строительстве водоочистных заводов, инвестировав около 1,5 млрд долларов в охрану природных экосистем водосбора Кэтскилл.',
      },
      {
        uz: "Atigi bir gektar sog'lom to'qay yoki botqoqlik ekotizimi tropik o'rmonga nisbatan gektariga 2–3 barobar ko'proq uglerodni torf va cho'kindilarda uzoq muddat saqlay oladi.",
        en: 'Healthy wetlands and peatlands store 2–3 times more carbon per hectare in their sediments than terrestrial forests.',
        ru: 'Гектар здоровых водно-болотных и торфяных экосистем удерживает в донных отложениях в 2–3 раза больше углерода, чем обычный лес.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Kosta-Rikaning «Ekotizim xizmatlari uchun to'lovlar» (PES / PSA) dasturi",
        en: 'Costa Rica’s Payments for Ecosystem Services (PSA) National Program',
        ru: 'Национальная программа платы за экосистемные услуги (PSA) в Коста-Рике',
      },
      location: {
        uz: 'Kosta-Rika (global namuna)',
        en: 'Costa Rica (Global benchmark for natural capital finance)',
        ru: 'Коста-Рика (мировой эталон финансирования экосистем)',
      },
      challenge: {
        uz: "1980-yillarning oxiriga kelib yaylovlarni kengaytirish va daraxt kesish oqibatida Kosta-Rika o'rmon qoplami hududning 75 foizidan 21 foizigacha qisqarib ketgan edi.",
        en: 'By the late 1980s, cattle ranching and logging had slashed Costa Rica’s forest cover from over 75% to roughly 21%.',
        ru: 'К концу 1980-х годов вырубка лесов под пастбища сократила лесистость Коста-Рики с 75% до критических 21%.',
      },
      solution: {
        uz: "1996-yilda yoqilg'i solig'idan 3,5% ajratma hisobiga milliy fond (FONAFIFO) tuzilib, fermer va yer egalariga 4 ta ekotizim xizmati (uglerod yutish, suv havzasi himoyasi, bioxilma-xillik va landshaft go'zalligi) uchun to'g'ridan-to'g'ri pul to'lovi joriy etildi.",
        en: 'Funded by a 3.5% fossil-fuel tax, Costa Rica’s FONAFIFO agency began paying landowners directly for carbon sequestration, watershed protection, biodiversity, and scenic beauty.',
        ru: 'За счёт 3,5% налога на топливо был создан фонд FONAFIFO, выплачивающий землевладельцам прямые платежи за сохранение лесов, поглощение углерода и защиту водосборов.',
      },
      economicOutcome: {
        uz: "O'rmon qoplami 57% dan oshdi, ekoturizm esa mamlakatga yiliga 4 mlrd dollardan ortiq valyuta keltiruvchi yetakchi tarmoqqa aylandi.",
        en: 'Forest cover rebounded above 57% of national territory while ecotourism grew into a $4+ billion annual foreign-exchange engine.',
        ru: 'Лесистость страны восстановилась выше 57%, а экотуризм превратился в ведущую отрасль с доходом свыше 4 млрд долларов в год.',
      },
    },
    terms: [
      {
        term: { uz: 'Biotsenoz', en: 'Biocenosis', ru: 'Биоценоз' },
        definition: {
          uz: "Muayyan bir xil tabiiy maydonda (biotopda) birgalikda yashovchi o'simlik, hayvon va mikroorganizmlar populyatsiyalari majmui.",
          en: 'An interacting community of plant, animal, and microbial populations sharing a specific habitat (biotope).',
          ru: 'Исторически сложившаяся совокупность растений, животных и микроорганизмов, населяющих однородный участок (биотоп).',
        },
      },
      {
        term: { uz: 'Ekotizim xizmatlari', en: 'Ecosystem Services', ru: 'Экосистемные услуги' },
        definition: {
          uz: "Tabiiy ekotizimlar tomonidan inson farovonligi va iqtisodiyotga ko'rsatiladigan bevosita va bilvosita ne'matlar (suv tozalash, changlatish, iqlimni tartibga solish).",
          en: 'Direct and indirect benefits—such as water filtration, pollination, and climate regulation—that humans derive from functioning ecosystems.',
          ru: 'Прямые и косвенные выгоды, которые люди и экономика получают от функционирования здоровых экосистем.',
        },
      },
      {
        term: { uz: 'Noosfera', en: 'Noosphere', ru: 'Ноосфера' },
        definition: {
          uz: "V.I. Vernadskiy ta'limotiga ko'ra, biosfera rivojlanishining inson aql-idroki va ilmiy-oqilona boshqaruvi hal qiluvchi omilga aylangan oliy bosqichi.",
          en: 'In Vernadsky’s theory, the evolutionary stage of the biosphere guided consciously by scientific human reason and ecological stewardship.',
          ru: 'Высшая стадия эволюции биосферы, в которой разумная научная деятельность человека становится главным гармонизирующим фактором.',
        },
      },
      {
        term: { uz: 'PES (Ekotizim xizmatlari uchun to‘lov)', en: 'PES (Payments for Ecosystem Services)', ru: 'ПЭУ (Плата за экосистемные услуги)' },
        definition: {
          uz: "Ekotizimdan foydalanuvchilar tomonidan uni asrab-avaylayotgan yer egalari yoki mahalliy jamoalarga to'lanadigan iqtisodiy rag'bat mexanizmi.",
          en: 'Voluntary or policy-driven financial incentives paid to landowners or communities in exchange for conserving ecological functions.',
          ru: 'Экономический механизм вознаграждения землевладельцев или общин за сохранение и воспроизводство функций природных экосистем.',
        },
      },
    ],
    quiz: [
      {
        id: 'q6-1',
        question: {
          uz: "Reymond Lindemanning «10 foiz qoidasi» nimani ifodalaydi?",
          en: 'What does Raymond Lindeman’s 10% Rule state about trophic pyramids?',
          ru: 'Что утверждает правило 10% Раймонда Линдемана?',
        },
        options: [
          { uz: "Ozuqa zanjirining bir bosqichidan keyingisiga energiyaning o'rtacha 10% o'tadi", en: 'Roughly 10% of energy transfers from one trophic level to the next', ru: 'На следующий трофический уровень переходит в среднем около 10% энергии' },
          { uz: 'Sayyoradagi o‘rmonlarning faqat 10% fotosintez qiladi', en: 'Only 10% of trees perform photosynthesis', ru: 'Только 10% деревьев осуществляют фотосинтез' },
          { uz: 'Ekologik soliq stavkasi doimo 10% bo‘ladi', en: 'Environmental taxes are always fixed at 10%', ru: 'Ставка эконалога всегда равна 10%' },
          { uz: 'Gidrosfera biosferaning 10% qismini tashkil etadi', en: 'Water covers only 10% of Earth', ru: 'Вода покрывает лишь 10% Земли' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Har bir trofik darajada ~90% energiya hayotiy jarayonlar va issiqlikka sarflanib, keyingi bosqich biomassasiga ~10% o'tadi.",
          en: 'Metabolic heat losses dissipate ~90% of energy at each trophic step, leaving ~10% for higher consumers.',
          ru: 'Около 90% энергии теряется на метаболизм и теплоотдачу, а в биомассу следующего уровня переходит около 10%.',
        },
      },
      {
        id: 'q6-2',
        question: {
          uz: "Biosferaning aql-idrok boshqaruvidagi «noosfera» bosqichiga o'tishi haqidagi ta'limotni kim rivojlantirgan?",
          en: 'Which scientist systematically developed the doctrine of the biosphere’s transition into the noosphere?',
          ru: 'Кто разработал целостное учение о переходе биосферы в ноосферу?',
        },
        options: [
          { uz: 'V.I. Vernadskiy', en: 'Vladimir Vernadsky', ru: 'В.И. Вернадский' },
          { uz: 'Adam Smit', en: 'Adam Smith', ru: 'Адам Смит' },
          { uz: ' Pol Samuelson', en: 'Paul Samuelson', ru: 'Пол Самуэльсон' },
          { uz: 'Jozef Shumpeter', en: 'Joseph Schumpeter', ru: 'Йозеф Шумпетер' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Akademik V.I. Vernadskiy (Э. Леруа va П. Тейяр де Шарден bilan hamohang) biosfera va noosfera haqidagi fundamental ilmiy ta'limot asoschisidir.",
          en: 'Vladimir Vernadsky formulated the biogeochemical theory of the biosphere and its rational evolution into the noosphere.',
          ru: 'Академик В.И. Вернадский создал биогеохимическое учение о биосфере и обосновал её эволюцию в ноосферу.',
        },
      },
      {
        id: 'q6-3',
        question: {
          uz: "O'rmonlarning uglerodni yutishi va suv-botqoqlarning suvni tabiiy tozalashi ekotizim xizmatlarining qaysi turiga kiradi?",
          en: 'Under the UN classification, carbon sequestration by forests and natural water filtration by wetlands belong to which category?',
          ru: 'К какой категории экосистемных услуг относятся поглощение углерода лесами и естественная фильтрация воды?',
        },
        options: [
          { uz: 'Tartibga soluvchi (regulating) xizmatlar', en: 'Regulating services', ru: 'Регулирующие услуги' },
          { uz: 'Madaniy-estetik xizmatlar', en: 'Cultural services', ru: 'Культурные услуги' },
          { uz: 'Moliyaviy-kredit xizmatlar', en: 'Financial credit services', ru: 'Финансово-кредитные услуги' },
          { uz: 'Transport-logistika xizmatlar', en: 'Transport logistics services', ru: 'Транспортно-логистические услуги' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Iqlimni tartibga solish, changlatish, toshqindan himoya va suvni tozalash — ekotizimning tartibga soluvchi xizmatlaridir.",
          en: 'Climate regulation, water purification, flood control, and pollination constitute regulating ecosystem services.',
          ru: 'Регуляция климата, очистка воды, защита от паводков и опыление — это регулирующие экосистемные услуги.',
        },
      },
      {
        id: 'q6-4',
        question: {
          uz: "2021-yilda YUNESKOning Jahon biosfera rezervatlari tarmog'iga kiritilgan Qoraqalpog'istondagi muhofaza hududi qaysi?",
          en: 'Which protected area in Karakalpakstan joined UNESCO’s World Network of Biosphere Reserves in 2021?',
          ru: 'Какой резерват в Каракалпакстане был включён во Всемирную сеть биосферных резерватов ЮНЕСКО в 2021 году?',
        },
        options: [
          { uz: 'Quyi Amudaryo davlat biosfera rezervati', en: 'Lower Amu Darya State Biosphere Reserve', ru: 'Нижне-Амударьинский государственный биосферный резерват' },
          { uz: ' Йеллоустон milliy bog‘i', en: 'Yellowstone National Park', ru: 'Йеллоустонский парк' },
          { uz: 'Belovej o‘rmoni', en: 'Białowieża Forest', ru: 'Беловежская пуща' },
          { uz: 'Baykal qo‘riqxonasi', en: 'Baikal Nature Reserve', ru: 'Байкальский заповедник' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Quyi Amudaryo davlat biosfera rezervati to'qay o'rmonlari va Buxoro bug'usini asrash bo'yicha 2021-yilda YUNESKO tarmog'iga kiritilgan.",
          en: 'The Lower Amu Darya State Biosphere Reserve received UNESCO MAB designation in 2021.',
          ru: 'Нижне-Амударьинский государственный биосферный резерват вошёл в сеть ЮНЕСКО в 2021 году.',
        },
      },
      {
        id: 'q6-5',
        question: {
          uz: "Jahon iqtisodiy forumi (WEF) bahosiga ko'ra, jahon YaIMining qancha qismi tabiat va ekotizim xizmatlariga o'rtacha yoki kuchli darajada bog'liq?",
          en: 'According to the World Economic Forum (WEF), roughly what share of global GDP is moderately or highly dependent on nature?',
          ru: 'По оценке Всемирного экономического форума (ВЭФ), какая доля мирового ВВП умеренно или сильно зависит от природы?',
        },
        options: [
          { uz: '50 foizdan ortig‘i ($44+ trln)', en: 'Over 50% ($44+ trillion)', ru: 'Более 50% ($44+ трлн)' },
          { uz: 'Atigi 1 foizi', en: 'Only 1%', ru: 'Всего 1%' },
          { uz: '3 foizdan kamrog‘i', en: 'Less than 3%', ru: 'Менее 3%' },
          { uz: 'Umuman bog‘liq emas', en: 'Zero dependence', ru: 'Полностью независима' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Qurilish, qishloq xo'jaligi, oziq-ovqat, energetika va turizm tarmoqlari hisobiga jahon YaIMining yarmidan ko'pi tabiiy kapitalga bog'liq.",
          en: 'WEF’s Nature Risk Rising report shows over half of global GDP ($44T+) relies directly on ecosystem inputs.',
          ru: 'Доклад ВЭФ показал, что свыше половины мирового ВВП ($44+ трлн) критически зависит от услуг природных экосистем.',
        },
      },
    ],
  },
];
