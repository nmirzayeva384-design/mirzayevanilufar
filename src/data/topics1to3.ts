import { Topic } from '../types';

export const TOPICS_1_TO_3: Topic[] = [
  {
    id: 1,
    isIndependentStudy: false,
    iconName: 'Compass',
    title: {
      uz: "«Atrof-muhit iqtisodiyoti va iqlim o'zgarishi» fanining predmeti va vazifalari",
      en: 'Subject and Objectives of Environmental Economics and Climate Change',
      ru: 'Предмет и задачи дисциплины «Экономика окружающей среды и изменение климата»',
    },
    shortDescription: {
      uz: "Texnologik rivojlanish bosqichlari, ekstensiv va intensiv o'sish, sanoat inqilobi, Kommoner qonunlari va ekologik eksternaliyalar nazariyasi.",
      en: 'Technological stages, extensive vs. intensive growth, Industrial Revolution impacts, Commoner’s laws, and environmental externalities.',
      ru: 'Этапы технологического развития, экстенсивный и интенсивный рост, промышленная революция, законы Коммонера и теория экстерналий.',
    },
    keywords: {
      uz: ['predmet', 'ekstensiv', 'intensiv', 'sanoat inqilobi', 'Kommoner qonunlari', 'eksternaliya', 'Pigu solig‘i'],
      en: ['subject', 'extensive growth', 'intensive growth', 'industrial revolution', 'Commoner laws', 'externalities', 'Pigouvian tax'],
      ru: ['предмет', 'экстенсивный рост', 'интенсивный рост', 'промышленная революция', 'законы Коммонера', 'экстерналии', 'налог Пигу'],
    },
    sections: [
      {
        heading: {
          uz: '1. Fanning predmeti va iqtisodiyot-tabiat tizimi',
          en: '1. Subject Matter and the Economy–Biosphere System',
          ru: '1. Предмет науки и эколого-экономическая система',
        },
        paragraphs: [
          {
            uz: "«Atrof-muhit iqtisodiyoti va iqlim o'zgarishi» fani cheklangan tabiiy resurslar va biosferaning assimilyatsiya (o'z-o'zini tozalash) sig'imi doirasida jamiyat ehtiyojlarini qondirish qonuniyatlarini o'rganadi. Klassik iqtisodiy nazariyada havo, suv va iqlim barqarorligi uzoq vaqt «erkin ne'matlar» sifatida ko'rilgan bo'lsa, XX–XXI asrlarda ular eng noyob iqtisodiy resursga aylandi.",
            en: 'Environmental and climate economics investigates how societies allocate scarce natural capital and finite biosphere assimilation capacity to meet human needs. Whereas classical economics long treated clean air, freshwater, and climate stability as limitless free goods, modern economic analysis recognizes them as binding macroeconomic constraints.',
            ru: 'Экономика окружающей среды и изменения климата изучает закономерности удовлетворения общественных потребностей в условиях ограниченности природного капитала и конечной ассимиляционной ёмкости биосферы. Если классическая школа долго рассматривала чистый воздух, воду и стабильный климат как «даровые блага», то сегодня они стали лимитирующими экономическими ресурсами.',
          },
          {
            uz: "Fanning asosiy predmeti — ishlab chiqarish, taqsimlash va iste'mol jarayonlarida yuzaga keladigan salbiy tashqi ta'sirlarni (eksternaliyalarni) ichkilashtirish (internalizatsiya qilish), tabiiy kapitalni baholash hamda iqlim xatarlarini kamaytirishning bozor va institutsional mexanizmlarini ishlab chiqishdir.",
            en: 'The core subject focuses on internalizing negative environmental externalities generated during production and consumption, valuing natural capital, and designing market-based and institutional instruments to mitigate climate risks.',
            ru: 'Предметом дисциплины выступает интернализация отрицательных внешних эффектов (экстерналий) производства и потребления, стоимостная оценка природного капитала и разработка рыночных и институциональных механизмов снижения климатических рисков.',
          },
        ],
        keyTakeaway: {
          uz: "Iqtisodiy tizim ochiq kichik tizim bo'lib, u yopiq va o'lchami o'zgarmas global biosfera ichida faoliyat yuritadi.",
          en: 'The macroeconomy operates as an open subsystem embedded within a finite, materially closed planetary biosphere.',
          ru: 'Макроэкономика функционирует как открытая подсистема внутри замкнутой и конечной глобальной биосферы.',
        },
      },
      {
        heading: {
          uz: "2. Texnologik bosqichlar, sanoat inqilobi va o'sish turlari",
          en: '2. Technological Eras, Industrial Revolution, and Growth Modes',
          ru: '2. Технологические уклады, промышленная революция и типы роста',
        },
        paragraphs: [
          {
            uz: "Insoniyat xo'jalik faoliyati agrar davrdan XVIII asr oxiridagi birinchi sanoat inqilobiga o'tgach, ko'mir, keyinchalik neft va gazning ommaviy yoqilishi natijasida resurslarga talab keskin ortdi. XX asrning ikkinchi yarmidan boshlangan «Ulkan tezlanish» (Great Acceleration) davrida jahon YaIM va birlamchi energiya sarfi bir necha barobar ko'payib, antropogen chiqindilar tabiiy aylanish tezligidan oshib ketdi.",
            en: 'Transitioning from agrarian livelihoods to the late-18th-century Industrial Revolution unlocked fossil energy—coal, oil, and natural gas—triggering exponential resource extraction. During the post-1950 Great Acceleration, global GDP and primary material use surged several-fold, pushing anthropogenic waste beyond natural absorption thresholds.',
            ru: 'Переход от аграрного уклада к Первой промышленной революции конца XVIII века и массовому использованию угля, нефти и газа привёл к скачкообразному росту ресурсопотребления. В период «Великого ускорения» (после 1950 года) мировой ВВП и добыча сырья выросли кратно, превысив естественную скорость самовосстановления природы.',
          },
          {
            uz: "Iqtisodiyotda ikki xil o'sish farqlanadi: ekstensiv o'sish — qo'shimcha tabiiy xomashyo, yer va energiya hajmini ko'paytirish hisobiga mahsulot oshirish bo'lsa, intensiv (resurs tejamkor) o'sish — yashil innovatsiyalar, raqamlashtirish va ikkilamchi qayta ishlash orqali YaIMning har bir birligiga to'g'ri keladigan energiya va uglerod sig'imini kamaytirishdir (dekapling effekti).",
            en: 'Economics distinguishes extensive growth—expanding output by extracting greater volumes of raw materials, land, and fuel—from intensive resource-efficient growth, which achieves decoupling by lowering energy and carbon intensity per unit of GDP via clean technology and circularity.',
            ru: 'В экономике различают экстенсивный рост, основанный на вовлечении всё больших объёмов сырья, земель и топлива, и интенсивный (ресурсосберегающий) рост, обеспечивающий «декаплинг» — снижение энергоёмкости и углеродоёмкости на единицу ВВП за счёт чистых технологий и рециклинга.',
          },
          {
            uz: "O'zbekiston iqtisodiyoti ham xomashyoga asoslangan ekstensiv modeldan yuqori qo'shilgan qiymatli va energiya samarador intensiv modelga o'tmoqda: 2030-yilga qadar YaIM birligiga to'g'ri keladigan issiqxona gazlari solishtirma ajratmalarini 2010-yil darajasiga nisbatan 35 foizga qisqartirish maqsad qilingan.",
            en: 'Uzbekistan is actively shifting from resource-heavy extensive production toward high-value, energy-efficient growth, committing under its updated NDC to cut greenhouse gas emissions per unit of GDP by 35% by 2030 relative to 2010 levels.',
            ru: 'Экономика Узбекистана также переходит от ресурсоёмкой модели к энергоэффективному интенсивному развитию: в рамках обновлённого ОНУВ поставлена цель снизить удельные выбросы парниковых газов на единицу ВВП на 35% к 2030 году по сравнению с уровнем 2010 года.',
          },
        ],
      },
      {
        heading: {
          uz: '3. Ekologiyaning asosiy qonuniyatlari va Barri Kommoner qonunlari',
          en: '3. Fundamental Ecological Principles and Barry Commoner’s Four Laws',
          ru: '3. Основные экологические закономерности и законы Барри Коммонера',
        },
        paragraphs: [
          {
            uz: "1971-yilda amerikalik ekolog va iqtisodchi-tahlilchi Barri Kommoner iqtisodiy qarorlar qabul qilishda hisobga olinishi shart bo'lgan to'rtta mashhur qonunni shakllantirdi: (1) «Hamma narsa hamma narsa bilan bog'liq» — ekotizimning bir bo'g'iniga ta'sir zanjirli iqtisodiy oqibat keltirib chiqaradi; (2) «Hamma narsa qayergadir ketishi kerak» — tabiatda mutlaq yo'qolib ketadigan chiqindi bo'lmaydi (modda saqlanish qonuni).",
            en: 'In 1971, Barry Commoner formulated four foundational laws linking ecology and economic decision-making: (1) Everything is connected to everything else—shocks to one ecological node propagate across markets; (2) Everything must go somewhere—matter conservation dictates that economic waste never vanishes.',
            ru: 'В 1971 году американский эколог Барри Коммонер сформулировал четыре закона, ставших методологической опорой эколого-экономического анализа: (1) «Всё связано со всем» — воздействие на одно звено экосистемы вызывает цепные макроэкономические последствия; (2) «Всё должно куда-то деваться» — в силу закона сохранения массы отходы не исчезают бесследно.',
          },
          {
            uz: "(3) «Tabiat yaxshiroq biladi» — tabiiy tizimlarni o'ylamasdan o'zgartirish kutilmagan texnogen xarajatlarga olib keladi; (4) «Hech narsa tekinga berilmaydi» (There is no such thing as a free lunch) — tabiatdan olingan har qanday iqtisodiy foyda ertami-kechmi tiklash xarajati yoki yo'qotilgan ekotizim xizmati ko'rinishida to'lanadi.",
            en: '(3) Nature knows best—reckless engineering interventions often trigger costly unintended damages; and (4) There is no such thing as a free lunch—every short-term gain extracted from nature carries an eventual economic cost in restoration or lost ecosystem services.',
            ru: '(3) «Природа знает лучше» — непродуманное вмешательство в природные циклы порождает высокие техногенные издержки; (4) «Ничто не даётся даром» — любая краткосрочная выгода за счёт эксплуатации природы неизбежно оплачивается будущими затратами на восстановление.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '100+',
        unit: { uz: 'mlrd tonna/yil', en: 'Gt / year', ru: 'млрд тонн/год' },
        label: {
          uz: "Global birlamchi xomashyo va materiallar iste'moli",
          en: 'Global annual primary material extraction',
          ru: 'Мировая ежегодная добыча первичных материалов',
        },
        year: '2023',
        source: {
          uz: 'UNEP Global Resources Outlook',
          en: 'UNEP Global Resources Outlook',
          ru: 'UNEP Global Resources Outlook',
        },
        isApproximate: true, // TODO: tekshiring (UNEP 2024 hisobotida ~106 Gt atrofida)
      },
      {
        value: '37.4',
        unit: { uz: 'Gt CO₂', en: 'Gt CO₂', ru: 'Гт CO₂' },
        label: {
          uz: 'Energetika va sanoatdan global CO₂ ajratmalari',
          en: 'Global energy-related CO₂ emissions',
          ru: 'Мировые энергетические выбросы CO₂',
        },
        year: '2023',
        source: { uz: 'IEA (Xalqaro energetika agentligi)', en: 'IEA (International Energy Agency)', ru: 'МЭА (IEA)' },
      },
      {
        value: '35%',
        unit: { uz: 'qisqartirish', en: 'reduction', ru: 'снижение' },
        label: {
          uz: "O'zbekistonning YaIM birligiga nisbatan IIG qisqartirish maqsadi (2010-yilga nisbatan)",
          en: 'Uzbekistan GDP-intensity GHG reduction target by 2030 (vs. 2010)',
          ru: 'Цель Узбекистана по снижению углеродоёмкости ВВП к 2030 г. (к 2010 г.)',
        },
        year: '2030',
        source: {
          uz: "O'zbekistonning yangilangan NDC majburiyati (UNFCCC)",
          en: 'Uzbekistan Updated NDC (UNFCCC)',
          ru: 'Обновлённый ОНУВ Узбекистана (РКИК ООН)',
        },
      },
      {
        value: '23%',
        unit: { uz: 'global ulush', en: 'global share', ru: 'мировая доля' },
        label: {
          uz: 'Uglerod solig‘i va ETS tizimlari bilan qamrab olingan jahon emissiyalari',
          en: 'Share of global GHG emissions covered by carbon pricing',
          ru: 'Доля мировых выбросов ПГ, охваченных ценообразованием на углерод',
        },
        year: '2024',
        source: {
          uz: 'Jahon banki (State and Trends of Carbon Pricing)',
          en: 'World Bank (State and Trends of Carbon Pricing)',
          ru: 'Всемирный банк (Carbon Pricing Report)',
        },
      },
    ],
    charts: [
      {
        id: 't1-decoupling',
        type: 'line',
        title: {
          uz: "Global YaIM o'sishi va CO₂ sig'imi indeksi (1990 = 100)",
          en: 'Global GDP Index vs. Carbon Intensity per GDP (1990 = 100)',
          ru: 'Индекс мирового ВВП и углеродоёмкости ВВП (1990 = 100)',
        },
        subtitle: {
          uz: 'Nisbiy dekapling: iqtisodiyot tezroq o‘smoqda, YaIM birligiga CO₂ kamaymoqda',
          en: 'Relative decoupling: global output expands faster than carbon per unit of GDP',
          ru: 'Относительный декаплинг: рост выпуска сопровождается снижением удельных выбросов',
        },
        source: { uz: 'Jahon banki va Global Carbon Project', en: 'World Bank & Global Carbon Project', ru: 'Всемирный банк и Global Carbon Project' },
        unit: 'indeks',
        seriesName: { uz: 'Global YaIM indeksi', en: 'Global Real GDP Index', ru: 'Индекс реального ВВП' },
        secondarySeriesName: { uz: 'YaIM uglerod sig‘imi', en: 'CO₂ Intensity Index', ru: 'Индекс углеродоёмкости' },
        data: [
          { name: '1990', value: 100, secondaryValue: 100 },
          { name: '2000', value: 134, secondaryValue: 86 },
          { name: '2010', value: 189, secondaryValue: 78 },
          { name: '2015', value: 220, secondaryValue: 70 },
          { name: '2020', value: 238, secondaryValue: 62 },
          { name: '2023', value: 266, secondaryValue: 58 },
        ],
      },
      {
        id: 't1-materials',
        type: 'bar',
        title: {
          uz: 'Global moddiy resurslar qazib olish tarkibi (mlrd tonna)',
          en: 'Global Material Extraction by Category (Billion Tonnes)',
          ru: 'Структура мировой добычи материальных ресурсов (млрд тонн)',
        },
        subtitle: {
          uz: 'Asosiy xomashyo guruhlari bo‘yicha yillik oqim',
          en: 'Annual primary material flows across major resource groups',
          ru: 'Годовой поток первичного сырья по основным группам',
        },
        source: { uz: 'UNEP International Resource Panel (2024)', en: 'UNEP International Resource Panel (2024)', ru: 'МРП ЮНЕП (2024)' },
        unit: 'Gt',
        seriesName: { uz: 'Hajm (Gt)', en: 'Volume (Gt)', ru: 'Объём (Гт)' },
        data: [
          { name: { uz: 'Noruda qurilish', en: 'Non-metallic minerals', ru: 'Нерудные минералы' }, value: 49 },
          { name: { uz: 'Biomassa', en: 'Biomass', ru: 'Биомасса' }, value: 26 },
          { name: { uz: 'Qazilma yoqilg‘i', en: 'Fossil fuels', ru: 'Ископаемое топливо' }, value: 16 },
          { name: { uz: 'Metall rudalari', en: 'Metal ores', ru: 'Металлические руды' }, value: 10 },
        ],
      },
    ],
    laws: [
      {
        id: 't1-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Tabiatni muhofaza qilish to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Nature Protection"',
          ru: 'Закон Республики Узбекистан «Об охране природы»',
        },
        codeAndDate: {
          uz: '09.12.1992-yil, 754-XII-son',
          en: 'December 9, 1992, No. 754-XII',
          ru: '09.12.1992 г., № 754-XII',
        },
        summary: {
          uz: "Tabiiy muhitni saqlash, resurslardan oqilona foydalanish va ifloslantirganlik uchun iqtisodiy kompensatsiya to'lovlari tizimining tayanch huquqiy asosini belgilaydi.",
          en: 'Establishes the foundational legal and economic framework for environmental conservation, rational resource use, and pollution compensation fees.',
          ru: 'Закрепляет базовые правовые и экономические основы охраны природной среды, рационального природопользования и компенсационных платежей за загрязнение.',
        },
        significance: {
          uz: "«Ifloslantiruvchi to'laydi» (Polluter Pays Principle) tamoyilini milliy iqtisodiyotga tatbiq etgan tayanch qonun.",
          en: 'Introduces the Polluter Pays Principle into national macroeconomic and enterprise accounting.',
          ru: 'Базовый закон, внедривший принцип «загрязнитель платит» в национальное хозяйственное регулирование.',
        },
      },
      {
        id: 't1-law-2',
        type: 'presidential',
        title: {
          uz: "2019–2030-yillarda O'zbekiston Respublikasining «yashil» iqtisodiyotga o'tish strategiyasi",
          en: 'Strategy for the Transition of the Republic of Uzbekistan to a Green Economy (2019–2030)',
          ru: 'Стратегия перехода Республики Узбекистан к «зелёной» экономике на период 2019–2030 годов',
        },
        codeAndDate: {
          uz: 'PQ-4477-son qaror, 04.10.2019-yil (PQ-436 bilan kengaytirilgan, 02.12.2022)',
          en: 'Presidential Resolution No. PQ-4477, Oct 4, 2019 (expanded by PQ-436, Dec 2, 2022)',
          ru: 'Постановление Президента № ПП-4477 от 04.10.2019 г. (расширено № ПП-436 от 02.12.2022 г.)',
        },
        summary: {
          uz: "Energiya samaradorligini oshirish, qayta tiklanuvchi energiya ulushini ko'paytirish va makroiqtisodiy o'sishni uglerod sarfidan ajratish (dekapling) ko'rsatkichlarini belgilaydi.",
          en: 'Defines target milestones for energy efficiency, renewable power expansion, and decoupling GDP growth from greenhouse gas emissions.',
          ru: 'Определяет целевые индикаторы повышения энергоэффективности, доли ВИЭ и декаплинга экономического роста от выбросов ПГ.',
        },
        significance: {
          uz: "Intensiv yashil o'sishga o'tishning uzoq muddatli milliy yo'l xaritasi vazifasini bajaradi.",
          en: 'Serves as the primary national roadmap for shifting from extensive to intensive green growth.',
          ru: 'Выступает главной национальной дорожной картой перехода от экстенсивного к интенсивному «зелёному» росту.',
        },
      },
      {
        id: 't1-law-3',
        type: 'international',
        title: {
          uz: "Atrof-muhit va rivojlanish bo'yicha Rio-de-Janeyro deklaratsiyasi",
          en: 'Rio Declaration on Environment and Development',
          ru: 'Рио-де-Жанейрская декларация по окружающей среде и развитию',
        },
        codeAndDate: {
          uz: 'BMT Konferensiyasi (UNCED), 14.06.1992-yil',
          en: 'UN Earth Summit (UNCED), June 14, 1992',
          ru: 'Конференция ООН (ЮНСЕД), 14.06.1992 г.',
        },
        summary: {
          uz: "27 ta global tamoyilni, jumladan ehtiyotkorlik tamoyili va ekologik xarajatlarni mahsulot tannarxiga kiritish (internalizatsiya) me'yorini tasdiqlagan.",
          en: 'Codified 27 principles, notably Principle 15 (Precautionary Approach) and Principle 16 (Internalization of environmental costs).',
          ru: 'Утвердила 27 глобальных принципов, включая принцип предосторожности и интернализацию экологических издержек (Принцип 16).',
        },
        significance: {
          uz: "Zamonaviy atrof-muhit iqtisodiyoti va barqaror rivojlanish siyosatining xalqaro poydevori.",
          en: 'Forms the international cornerstone of modern environmental economics and regulatory pricing.',
          ru: 'Международный фундамент современной экономики природопользования и устойчивого развития.',
        },
      },
    ],
    facts: [
      {
        uz: "Artur Pigu 1920-yilda «Farovonlik iqtisodiyoti» asarida ilk bor zavod tutunidan jamiyat ko'radigan zararni soliq orqali qoplash g'oyasini (Pigu solig'i) asoslab bergan.",
        en: 'Arthur Pigou pioneered environmental taxation in his 1920 work "The Economics of Welfare," proposing taxes equal to marginal social damage from factory smoke.',
        ru: 'Артур Пигу ещё в 1920 году в труде «Экономическая теория благосостояния» обосновал корректирующий налог на величину предельного внешнего ущерба (налог Пигу).',
      },
      {
        uz: "Global Ekologik Qarz Kuni (Earth Overshoot Day) 1971-yilda dekabr oxiriga to'g'ri kelgan bo'lsa, 2024-yilda insoniyat yillik biologik resurs budjetini 1-avgustdayoq sarflab bo'ldi.",
        en: 'Earth Overshoot Day shifted from late December in 1971 to August 1 in 2024, meaning humanity uses ~1.7 Earths worth of annual biocapacity.',
        ru: 'Всемирный день экологического долга сместился с конца декабря в 1971 году на 1 августа в 2024 году — человечество потребляет ресурсы ~1,7 планеты в год.',
      },
      {
        uz: "2018-yilda Uilyam Nordxaus iqlim o'zgarishini uzoq muddatli makroiqtisodiy tahlilga (DICE modeli) integratsiya qilgani uchun iqtisodiyot bo'yicha Nobel mukofotiga sazovor bo'ldi.",
        en: 'William Nordhaus won the 2018 Nobel Prize in Economic Sciences for integrating climate change into long-run macroeconomic analysis via the DICE model.',
        ru: 'Уильям Нордхаус получил Нобелевскую премию по экономике 2018 года за интеграцию изменения климата в долгосрочный макроэкономический анализ (модель DICE).',
      },
    ],
    caseStudy: {
      title: {
        uz: "Shvetsiya uglerod solig'i: iqtisodiy o'sish va emissiya qisqarishining dekapling misoli",
        en: 'Sweden’s Carbon Tax: Absolute Decoupling of GDP Growth and Emissions',
        ru: 'Углеродный налог в Швеции: пример абсолютного декаплинга ВВП и выбросов',
      },
      location: {
        uz: 'Shvetsiya (Yevropa tajribasi va O‘zbekiston uchun xulosalar)',
        en: 'Sweden (European policy benchmark with lessons for Uzbekistan)',
        ru: 'Швеция (европейский опыт и выводы для реформ в Узбекистане)',
      },
      challenge: {
        uz: "1990-yillarning boshida qazilma yoqilg'iga bog'liqlikni kamaytirish sanoat raqobatbardoshligiga zarar yetkazishi mumkin degan xavotir mavjud edi.",
        en: 'In the early 1990s, policymakers feared that taxing fossil fuels heavily would stall industrial competitiveness and GDP growth.',
        ru: 'В начале 1990-х годов существовали опасения, что налог на ископаемое топливо замедлит промышленный рост и снизит конкурентоспособность.',
      },
      solution: {
        uz: "1991-yilda bosqichma-bosqich oshib boruvchi uglerod solig'i joriy etilib, undan tushgan daromad mehnat soliqlarini pasaytirish va biomassa/markazlashgan issiqlik tizimlariga yo'naltirildi («yashil soliq islohoti»).",
        en: 'Sweden introduced a gradually escalating carbon tax in 1991 while recycling revenues to cut labor taxes and expand district bio-heating.',
        ru: 'В 1991 году был введён поэтапно растущий углеродный налог с одновременным снижением налогов на труд и инвестициями в биоэнергетику («двойной дивиденд»).',
      },
      economicOutcome: {
        uz: "1990–2022-yillarda Shvetsiya real YaIMi 85% dan ortiq o'sgani holda, issiqxona gazlari ajratmalari 35% dan ko'proqqa kamaydi — bu mutlaq dekaplingning real isbotidir.",
        en: 'Between 1990 and 2022, Sweden’s real GDP expanded by over 85% while domestic greenhouse gas emissions fell by more than 35%, proving absolute decoupling.',
        ru: 'С 1990 по 2022 год реальный ВВП Швеции вырос более чем на 85%, а выбросы парниковых газов сократились более чем на 35%, доказав реальность абсолютного декаплинга.',
      },
    },
    terms: [
      {
        term: { uz: 'Eksternaliya (tashqi ta’sir)', en: 'Externality', ru: 'Экстерналия (внешний эффект)' },
        definition: {
          uz: "Bozor bitimida bevosita qatnashmagan uchinchi shaxslarga yetkaziladigan va bozor narxida aks etmagan qo'shimcha zarar yoki foyda.",
          en: 'An uncompensated cost or benefit imposed by an economic activity on third parties outside the market transaction.',
          ru: 'Издержки или выгоды экономической деятельности, ложащиеся на третьих лиц и не отражённые в рыночной цене.',
        },
      },
      {
        term: { uz: 'Dekapling (ajratish effekti)', en: 'Decoupling', ru: 'Декаплинг (эффект размежевания)' },
        definition: {
          uz: "YaIM o'sish sur'atlarini tabiiy resurslar sarfi va atrof-muhit ifloslanishi o'sishidan uzish jarayoni.",
          en: 'Breaking the link between economic output growth and resource consumption or environmental pressure.',
          ru: 'Рассогласование темпов экономического роста и объёмов потребления ресурсов либо экологической нагрузки.',
        },
      },
      {
        term: { uz: 'Assimilyatsiya salohiyati', en: 'Assimilative Capacity', ru: 'Ассимиляционный потенциал' },
        definition: {
          uz: "Ekotizimning o'z xususiyatlarini buzmagan holda ma'lum miqdordagi zararli moddalarni yutish va zararsizlantirish qobiliyati.",
          en: 'The natural ability of an ecosystem to absorb and neutralize pollutants without suffering structural degradation.',
          ru: 'Способность природной среды поглощать и обезвреживать загрязнители без нарушения своей устойчивости.',
        },
      },
      {
        term: { uz: 'Pigu solig‘i', en: 'Pigouvian Tax', ru: 'Налог Пигу' },
        definition: {
          uz: "Salbiy ekologik eksternaliyani bartaraf etish uchun ifloslanishning har bir birligiga chekli ijtimoiy zarar miqdorida belgilanadigan soliq.",
          en: 'A corrective levy set equal to the marginal social damage of pollution to restore market efficiency.',
          ru: 'Корректирующий экологический налог на единицу выбросов, равный предельному общественному ущербу.',
        },
      },
    ],
    quiz: [
      {
        id: 'q1-1',
        question: {
          uz: "Barri Kommonerning qaysi qonuni iqtisodiyotdagi «muqobil xarajat» va tabiiy kapital qarzini ifodalaydi?",
          en: 'Which of Barry Commoner’s laws directly reflects opportunity cost and ecological debt in economics?',
          ru: 'Какой из законов Барри Коммонера напрямую отражает принцип альтернативных издержек в экономике?',
        },
        options: [
          { uz: "Hech narsa tekinga berilmaydi", en: 'There is no such thing as a free lunch', ru: 'Ничто не даётся даром' },
          { uz: 'Tabiat tez tiklanadi', en: 'Nature recovers instantaneously', ru: 'Природа восстанавливается мгновенно' },
          { uz: 'Resurslar cheksizdir', en: 'Resources are infinite', ru: 'Ресурсы безграничны' },
          { uz: 'Texnologiya barcha zararni yo‘qotadi', en: 'Technology eliminates all entropy', ru: 'Технологии отменяют энтропию' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "«Hech narsa tekinga berilmaydi» qonuniga ko'ra, biosferadan olingan har qanday resurs kelgusida tiklash xarajati yoki yo'qotilgan xizmat sifatida to'lanadi.",
          en: '"There is no such thing as a free lunch" states that every extraction from nature carries an eventual economic or ecological cost.',
          ru: 'Закон «Ничто не даётся даром» гласит, что любая эксплуатация биосферы неизбежно требует последующей оплаты или компенсации.',
        },
      },
      {
        id: 'q1-2',
        question: {
          uz: "Intensiv iqtisodiy o'sishning asosiy ekologik-iqtisodiy belgisi nima?",
          en: 'What is the defining environmental-economic feature of intensive growth?',
          ru: 'Каков ключевой эколого-экономический признак интенсивного экономического роста?',
        },
        options: [
          { uz: "Yangi konlar va yerlarni ko'proq o'zlashtirish", en: 'Expanding raw land and mineral volume only', ru: 'Только расширение площадей и объёмов добычи' },
          { uz: "Innovatsiya orqali YaIM birligiga resurs va energiya sarfini kamaytirish", en: 'Lowering resource and energy intensity per unit of GDP via innovation', ru: 'Снижение ресурсо- и энергоёмкости единицы ВВП за счёт инноваций' },
          { uz: 'Ekologik standartlardan voz kechish', en: 'Abolishing environmental standards', ru: 'Отказ от экологических нормативов' },
          { uz: "Faqat qishloq xo'jaligi ulushini oshirish", en: 'Relying solely on manual agriculture', ru: 'Рост исключительно аграрного сектора' },
        ],
        correctIndex: 1,
        explanation: {
          uz: "Intensiv o'sish texnologik samaradorlik hisobiga kamroq resurs sarflab ko'proq qo'shilgan qiymat yaratishni anglatadi.",
          en: 'Intensive growth generates higher value added per unit of material and energy input through technological productivity.',
          ru: 'Интенсивный рост обеспечивает больше добавленной стоимости при меньших удельных затратах сырья и энергии.',
        },
      },
      {
        id: 'q1-3',
        question: {
          uz: "O'zbekistonning yangilangan NDC majburiyatiga ko'ra, 2030-yilgacha YaIM birligiga IIG ajratmalari 2010-yilga nisbatan necha foizga kamaytiriladi?",
          en: 'Under Uzbekistan’s updated NDC, by what percentage will GHG emissions per unit of GDP be reduced by 2030 compared to 2010?',
          ru: 'На сколько процентов Узбекистан обязался снизить удельные выбросы ПГ на единицу ВВП к 2030 году относительно 2010 года?',
        },
        options: [
          { uz: '10%', en: '10%', ru: '10%' },
          { uz: '20%', en: '20%', ru: '20%' },
          { uz: '35%', en: '35%', ru: '35%' },
          { uz: '75%', en: '75%', ru: '75%' },
        ],
        correctIndex: 2,
        explanation: {
          uz: "O'zbekiston Parij kelishuvi doirasidagi yangilangan milliy majburiyatida (NDC) ko'rsatkichni 10% dan 35% ga oshirdi.",
          en: 'Uzbekistan raised its NDC intensity reduction ambition from an initial 10% to 35% by 2030 relative to 2010.',
          ru: 'В обновлённом ОНУВ в рамках Парижского соглашения Узбекистан повысил целевой показатель с 10% до 35%.',
        },
      },
      {
        id: 'q1-4',
        question: {
          uz: "Salbiy ekologik eksternaliyani bozor narxiga kiritish uchun Artur Pigu qanday vositani taklif qilgan?",
          en: 'What policy instrument did Arthur Pigou propose to internalize negative environmental externalities?',
          ru: 'Какой инструмент предложил Артур Пигу для интернализации отрицательных внешних эффектов?',
        },
        options: [
          { uz: "Chekli ijtimoiy zararga teng korreksiyalovchi soliq", en: 'A corrective tax equal to marginal external damage', ru: 'Корректирующий налог, равный предельному внешнему ущербу' },
          { uz: "Ko'mir qazib olishga subsidiya", en: 'Subsidies for coal extraction', ru: 'Субсидии на добычу угля' },
          { uz: 'Import bojxona tarifini bekor qilish', en: 'Eliminating all import tariffs', ru: 'Отмена таможенных пошлин' },
          { uz: 'Markaziy bank stavkasini nolga tushirish', en: 'Zero central bank interest rates', ru: 'Нулевая ставка Центробанка' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Pigu solig'i xususiy xarajatlarni ijtimoiy xarajatlarga tenglashtirib, bozor muvozanatini optimal nuqtaga qaytaradi.",
          en: 'A Pigouvian tax aligns private marginal cost with social marginal cost, correcting market failure.',
          ru: 'Налог Пигу уравнивает частные предельные издержки с общественными, устраняя провал рынка.',
        },
      },
      {
        id: 'q1-5',
        question: {
          uz: "O'zbekistonning «Tabiatni muhofaza qilish to'g'risida»gi tayanch qonuni qachon qabul qilingan?",
          en: 'When was Uzbekistan’s foundational Law "On Nature Protection" adopted?',
          ru: 'Когда был принят базовый Закон Республики Узбекистан «Об охране природы»?',
        },
        options: [
          { uz: '1992-yil 9-dekabr', en: 'December 9, 1992', ru: '9 декабря 1992 года' },
          { uz: '2005-yil 15-mart', en: 'March 15, 2005', ru: '15 марта 2005 года' },
          { uz: '2015-yil 12-dekabr', en: 'December 12, 2015', ru: '12 декабря 2015 года' },
          { uz: '2021-yil 1-yanvar', en: 'January 1, 2021', ru: '1 января 2021 года' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "754-XII-sonli mazkur qonun 1992-yil 9-dekabrda qabul qilinib, mustaqil O'zbekiston ekologik qonunchiligiga asos solgan.",
          en: 'Law No. 754-XII was adopted on December 9, 1992 as the cornerstone of national environmental law.',
          ru: 'Закон № 754-XII был принят 9 декабря 1992 года и заложил основу природоохранного права страны.',
        },
      },
    ],
  },

  {
    id: 2,
    isIndependentStudy: false,
    iconName: 'Scale',
    title: {
      uz: 'Atrof-muhit muvozanati va ekologik omillar',
      en: 'Environmental Equilibrium and Ecological Factors',
      ru: 'Равновесие окружающей среды и экологические факторы',
    },
    shortDescription: {
      uz: "Abiotik, biotik va antropogen omillar tasnifi, antropogen landshaftlar iqtisodiyoti hamda ekologik muhitning inson kapitaliga ta'siri.",
      en: 'Abiotic, biotic, and anthropogenic factors, anthropogenic landscapes, and environmental impacts on human capital productivity.',
      ru: 'Абиотические, биотические и антропогенные факторы, антропогенные ландшафты и влияние среды на человеческий капитал.',
    },
    keywords: {
      uz: ['muvozanat', 'abiotik', 'biotik', 'antropogen landshaft', 'inson salohiyati', 'tolerantlik', 'Libix qonuni'],
      en: ['equilibrium', 'abiotic', 'biotic', 'anthropogenic landscape', 'human capital', 'Liebig minimum', 'homeostasis'],
      ru: ['равновесие', 'абиотические', 'биотические', 'антропогенный ландшафт', 'человеческий капитал', 'закон Либиха'],
    },
    sections: [
      {
        heading: {
          uz: '1. Ekologik muvozanat (gomeostaz) va omillar tizimi',
          en: '1. Ecological Homeostasis and Classification of Factors',
          ru: '1. Экологическое равновесие (гомеостаз) и классификация факторов',
        },
        paragraphs: [
          {
            uz: "Atrof-muhit muvozanati — tabiiy ekotizimlardagi energiya oqimi, moddalar aylanishi va biologik turlar tarkibining o'z-o'zini boshqarish asosidagi dinamik barqarorligidir. Iqtisodiy nuqtayi nazardan, bu muvozanat qishloq xo'jaligi hosildorligi, suv ta'minoti barqarorligi va tabiiy ofatlar xavfining past bo'lishini kafolatlaydi.",
            en: 'Environmental equilibrium (homeostasis) denotes the dynamic self-regulating stability of energy flows, nutrient cycles, and species composition. Economically, this stability underpins predictable agricultural yields, reliable hydrological supply, and lower disaster losses.',
            ru: 'Равновесие окружающей среды (гомеостаз) — это динамическая устойчивость потоков энергии, круговорота веществ и видовой структуры экосистем. С экономической точки зрения это равновесие гарантирует стабильную урожайность, водообеспеченность и минимизацию ущерба от стихийных бедствий.',
          },
          {
            uz: "Tirik organizmlar va xo'jalik tizimlariga ta'sir etuvchi omillar uch guruhga bo'linadi: abiotik omillar (harorat, quyosh radiatsiyasi, yog'ingarchilik, shamol, tuproq tarkibi va relyef), biotik omillar (o'simliklar, hayvonlar va mikroorganizmlar o'rtasidagi ozuqaviy va simbiotik aloqalar) hamda antropogen omillar (insonning ishlab chiqarish, urbanizatsiya va meliorativ faoliyati).",
            en: 'Ecological factors fall into three classes: abiotic factors (temperature, solar irradiance, precipitation, soil chemistry, topography), biotic factors (pollination, predation, symbiosis, microbial decomposition), and anthropogenic factors (industrialization, land conversion, irrigation, emissions).',
            ru: 'Экологические факторы делятся на три группы: абиотические (температура, солнечная радиация, осадки, рельеф, химический состав почв), биотические (опыление, симбиоз, конкуренция, почвообразование) и антропогенные (промышленность, ирригация, урбанизация, выбросы).',
          },
        ],
        keyTakeaway: {
          uz: "Yustus Libixning «Minimum qonuni» iqtisodiyotda ham amal qiladi: hosildorlik va barqarorlik eng tanqis ekologik omil (masalan, arid mintaqada suv) bilan cheklanadi.",
          en: 'Liebig’s Law of the Minimum applies directly to regional economics: output is constrained by the scarcest ecological input, such as water in arid zones.',
          ru: 'Закон минимума Юстуса Либиха действует и в региональной экономике: выпуск ограничивается наиболее дефицитным экологическим фактором (например, водой в аридной зоне).',
        },
      },
      {
        heading: {
          uz: '2. Antropogen landshaftlar va ularning iqtisodiy bahosi',
          en: '2. Anthropogenic Landscapes and Land Transformation Economics',
          ru: '2. Антропогенные ландшафты и экономика трансформации земель',
        },
        paragraphs: [
          {
            uz: "Bugungi kunda Yer quruqlik yuzasining muzdan xoli qismining 75 foizdan ortig'i inson tomonidan o'zgartirilgan antropogen landshaftlarga (agrolandshaftlar, shahar-aglomeratsiyalar, suv omborlari, kon-sanoat va transport landshaftlariga) aylangan. Madaniy agrolandshaftlar yuqori oziq-ovqat mahsuldorligini bersa-da, monokultura va agrokimyoviy yuklama tufayli tabiiy o'z-o'zini tiklash qobiliyatini yo'qotadi.",
            en: 'Over 75% of Earth’s ice-free land surface has been transformed into anthropogenic landscapes—agro-ecosystems, urban agglomerations, reservoirs, mining pits, and transport corridors. While engineered agro-landscapes boost short-run crop output, monoculture and heavy agrochemical inputs erode natural resilience.',
            ru: 'Более 75% свободной ото льда суши Земли преобразовано в антропогенные ландшафты: агроландшафты, городские агломерации, водохранилища, карьеры и транспортные коридоры. Давая высокую продуктивность, монокультурные агроландшафты теряют способность к естественной саморегуляции.',
          },
          {
            uz: "O'zbekistonda sug'oriladigan vohalar (Farg'ona vodiysi, Zarafshon, Xorazm, Mirzacho'l va Qarshi cho'li) ming yillik va zamonaviy irrigatsiya natijasida shakllangan murakkab antropogen landshaftlardir. Ularni degradatsiyadan asrash uchun «Yashil makon» umummilliy loyihasi doirasida shahar va dalalar atrofida yashil belbog'lar va ihota daraxtzorlari barpo etilmoqda.",
            en: 'In Uzbekistan, irrigated oases—Fergana, Zarafshan, Khorezm, Mirzachul, and Karshi—represent intricate anthropogenic landscapes. Protecting them from wind erosion and heat islands drives the national "Yashil Makon" (Green Space) initiative creating shelterbelts and urban green corridors.',
            ru: 'В Узбекистане орошаемые оазисы (Ферганская долина, Зарафшан, Хорезм, Голодная и Каршинская степи) представляют собой сложные антропогенные ландшафты. Для их защиты от ветровой эрозии и теплового стресса реализуется общенациональный проект «Яшил макон» по созданию защитных лесополос.',
          },
        ],
      },
      {
        heading: {
          uz: "3. Ekologik muhit sifati va inson salohiyati (mehnat unumdorligi)",
          en: '3. Environmental Quality and Human Capital Productivity',
          ru: '3. Качество среды и человеческий капитал (производительность труда)',
        },
        paragraphs: [
          {
            uz: "Zamonaviy iqtisodiy tadqiqotlar ekologik muhit sifati inson kapitali (salomatlik, kognitiv qobiliyat va mehnat unumdorligi)ning bevosita omili ekanini isbotlaydi. Havodagi mayda dispers zarrachalar (PM2.5), ichimlik suvi minerallashuvi va jazirama to'lqinlar kasallanish darajasini oshirib, ish vaqti yo'qotilishi va sog'liqni saqlash xarajatlarining o'sishiga sabab bo'ladi.",
            en: 'Empirical labor economics demonstrates that environmental quality directly governs human capital accumulation, cognitive performance, and worker productivity. Elevated PM2.5 particulates, water salinity, and extreme heat waves increase morbidity, absenteeism, and healthcare expenditures.',
            ru: 'Современные экономические исследования доказывают, что качество среды напрямую определяет человеческий капитал, когнитивные способности и производительность труда. Загрязнение воздуха частицами PM2.5, минерализация воды и волны жары ведут к росту заболеваемости и потерям рабочего времени.',
          },
          {
            uz: "Xalqaro mehnat tashkiloti (ILO) hisob-kitoblariga ko'ra, global isish natijasidagi issiqlik stressi 2030-yilga borib dunyo bo'yicha jami ish soatlarining 2,2 foizini (taxminan 80 million to'liq ish o'rniga teng unumdorlikni) yo'qotishga olib kelishi mumkin. Shu bois ekologik investitsiyalar — bu bevosita inson kapitaliga kiritilgan yuqori rentabelli sarmoyadir.",
            en: 'According to the International Labour Organization (ILO), occupational heat stress driven by global warming could cost 2.2% of total working hours worldwide by 2030—equivalent to 80 million full-time jobs—making environmental protection a high-return human capital investment.',
            ru: 'По оценкам Международной организации труда (МОТ), тепловой стресс к 2030 году может привести к потере 2,2% совокупного рабочего времени в мире (эквивалент 80 млн рабочих мест), поэтому инвестиции в экологию — это высокодоходный вклад в человеческий капитал.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '75%',
        unit: { uz: 'quruqlik ulushi', en: 'land share', ru: 'доля суши' },
        label: {
          uz: 'Inson faoliyati ta’sirida sezilarli o‘zgartirilgan quruqlik maydoni',
          en: 'Share of ice-free terrestrial surface significantly altered by humans',
          ru: 'Доля свободной ото льда суши, существенно изменённой человеком',
        },
        year: '2023',
        source: { uz: 'IPBES Global Assessment / UNEP', en: 'IPBES Global Assessment / UNEP', ru: 'Глобальная оценка IPBES / ЮНЕП' },
      },
      {
        value: '2.2%',
        unit: { uz: 'ish soatlari', en: 'working hours', ru: 'рабочих часов' },
        label: {
          uz: 'Issiqlik stressi tufayli 2030-yilga borib yo‘qotilishi kutilayotgan global mehnat vaqti',
          en: 'Projected global working hours lost to heat stress by 2030',
          ru: 'Прогноз потерь мирового рабочего времени из-за теплового стресса к 2030 г.',
        },
        year: '2030',
        source: { uz: 'Xalqaro mehnat tashkiloti (ILO)', en: 'International Labour Organization (ILO)', ru: 'Международная организация труда (МОТ)' },
      },
      {
        value: '200',
        unit: { uz: 'mln tup/yil', en: 'mln trees/yr', ru: 'млн деревьев/год' },
        label: {
          uz: '«Yashil makon» loyihasi doirasida O‘zbekistonda yillik ko‘chat ekish maqsadi',
          en: 'Annual tree-planting target under Uzbekistan’s "Yashil Makon" program',
          ru: 'Ежегодный план посадки деревьев по проекту «Яшил макон» в Узбекистане',
        },
        year: '2024',
        source: {
          uz: 'Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi',
          en: 'Ministry of Ecology, Environmental Protection and Climate Change',
          ru: 'Министерство экологии, охраны ОС и изменения климата РУз',
        },
      },
      {
        value: '6.1%',
        unit: { uz: 'global YaIM', en: 'of global GDP', ru: 'мирового ВВП' },
        label: {
          uz: "Havo ifloslanishi bilan bog'liq global salomatlik va farovonlik yo'qotishlari bahosi",
          en: 'Estimated global welfare cost of premature mortality and morbidity from air pollution',
          ru: 'Оценка мировых потерь благосостояния и здоровья от загрязнения воздуха',
        },
        year: '2022',
        source: { uz: 'Jahon banki (Cost of Air Pollution)', en: 'World Bank Health & Pollution Report', ru: 'Всемирный банк' },
        isApproximate: true, // TODO: tekshiring (Jahon banki metodologiyasi bo'yicha ~6% global YaIM ekvivalenti)
      },
    ],
    charts: [
      {
        id: 't2-landuse',
        type: 'pie',
        title: {
          uz: 'Global yashashga yaroqli quruqlik yuzasidan foydalanish (%)',
          en: 'Global Habitable Land Use Breakdown (%)',
          ru: 'Структура использования пригодной суши Земли (%)',
        },
        subtitle: {
          uz: 'Tabiiy va antropogen landshaftlar nisbati',
          en: 'Balance between natural ecosystems and anthropogenic land use',
          ru: 'Соотношение природных экосистем и антропогенных ландшафтов',
        },
        source: { uz: 'FAO / Our World in Data (2023)', en: 'FAO / Our World in Data (2023)', ru: 'ФАО ООН (2023)' },
        unit: '%',
        seriesName: { uz: 'Ulush (%)', en: 'Share (%)', ru: 'Доля (%)' },
        data: [
          { name: { uz: 'Qishloq xo‘jaligi (agrolandshaft)', en: 'Agriculture (Agro-landscapes)', ru: 'Сельское хозяйство' }, value: 48 },
          { name: { uz: 'O‘rmonlar', en: 'Forests', ru: 'Леса' }, value: 37 },
          { name: { uz: 'Butazor va yaylovlar', en: 'Shrubland & natural grassland', ru: 'Кустарники и луга' }, value: 12 },
          { name: { uz: 'Shahar va infratuzilma', en: 'Urban & built-up infrastructure', ru: 'Города и инфраструктура' }, value: 2 },
          { name: { uz: 'Chuchuk suv havzalari', en: 'Freshwater bodies', ru: 'Пресные водоёмы' }, value: 1 },
        ],
      },
      {
        id: 't2-heat-productivity',
        type: 'bar',
        title: {
          uz: 'Harorat oshishining ochiq havodagi mehnat unumdorligiga ta’siri (%)',
          en: 'Outdoor Labor Capacity Retention by Ambient Wet-Bulb Temperature (%)',
          ru: 'Сохранение производительности труда на открытом воздухе при росте температуры (%)',
        },
        subtitle: {
          uz: 'Abiotik omil (issiqlik) va inson mehnat unumdorligi bog‘liqligi',
          en: 'Relationship between abiotic thermal load and physical work efficiency',
          ru: 'Зависимость физической выработки от термической нагрузки',
        },
        source: { uz: 'ILO / IPCC AR6 WGII', en: 'ILO / IPCC AR6 WGII', ru: 'МОТ / МГЭИК ДО6' },
        unit: '%',
        seriesName: { uz: 'Mehnat qobiliyati (%)', en: 'Effective Capacity (%)', ru: 'Работоспособность (%)' },
        data: [
          { name: '24°C', value: 100 },
          { name: '28°C', value: 92 },
          { name: '32°C', value: 76 },
          { name: '36°C', value: 55 },
          { name: '40°C', value: 32 },
        ],
      },
    ],
    laws: [
      {
        id: 't2-law-1',
        type: 'presidential',
        title: {
          uz: "2030-yilgacha bo'lgan davrda O'zbekiston Respublikasining Atrof-muhitni muhofaza qilish konsepsiyasi",
          en: 'Concept of Environmental Protection of the Republic of Uzbekistan until 2030',
          ru: 'Концепция охраны окружающей среды Республики Узбекистан на период до 2030 года',
        },
        codeAndDate: {
          uz: 'PF-5863-son Farmon, 30.10.2019-yil',
          en: 'Presidential Decree No. PF-5863, October 30, 2019',
          ru: 'Указ Президента № УП-5863 от 30.10.2019 г.',
        },
        summary: {
          uz: "Ekotizimlar muvozanatini saqlash, tuproq va landshaft degradatsiyasini to'xtatish hamda ekologik monitoringni raqamlashtirish vazifalarini belgilaydi.",
          en: 'Sets comprehensive targets to halt landscape degradation, expand green cover, and modernize environmental quality monitoring.',
          ru: 'Устанавливает целевые меры по предотвращению деградации ландшафтов, расширению озеленения и цифровизации экомониторинга.',
        },
        significance: {
          uz: "Antropogen yuklamani me'yorlashtirish va aholi salomatligini himoya qilishning davlat darajasidagi dasturi.",
          en: 'Guides public capital allocation toward landscape restoration and environmental health standards.',
          ru: 'Государственная основа регулирования антропогенной нагрузки и защиты здоровья населения.',
        },
      },
      {
        id: 't2-law-2',
        type: 'presidential',
        title: {
          uz: "Respublikada ko'kalamzorlashtirish ishlarini jadallashtirish («Yashil makon» umummilliy loyihasi)",
          en: 'Presidential Decree on Accelerating Afforestation ("Yashil Makon" National Project)',
          ru: 'Указ Президента об ускорении озеленения (общенациональный проект «Яшил макон»)',
        },
        codeAndDate: {
          uz: 'PF-46-son Farmon, 30.12.2021-yil',
          en: 'Presidential Decree No. PF-46, December 30, 2021',
          ru: 'Указ Президента № УП-46 от 30.12.2021 г.',
        },
        summary: {
          uz: "Shahar va tumanlarda yashillik darajasini 30 foizga yetkazish, sug'orish tizimiga ega daraxtzorlar barpo etish va daraxt kesishga muddatsiz moratoriy joriy etishni nazarda tutadi.",
          en: 'Introduces an indefinite moratorium on cutting valuable trees and aims to raise urban green canopy coverage to 30%.',
          ru: 'Вводит бессрочный мораторий на вырубку ценных деревьев и ставит цель довести уровень озеленения городов до 30%.',
        },
        significance: {
          uz: "Shahar mikroiqlimini yumshatish va chang-qum bo'ronlaridan iqtisodiy zararni kamaytirishga xizmat qiladi.",
          en: 'Directly mitigates urban heat-island externalities and dust-storm economic damages.',
          ru: 'Снижает эффект «городских островов тепла» и экономический ущерб от пыльно-песчаных бурь.',
        },
      },
      {
        id: 't2-law-3',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Ekologik ekspertiza to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Ecological Expertise"',
          ru: 'Закон Республики Узбекистан «Об экологической экспертизе»',
        },
        codeAndDate: {
          uz: '25.05.2000-yil, 73-II-son (yangi tahrir islohotlari bilan)',
          en: 'May 25, 2000, No. 73-II',
          ru: '25.05.2000 г., № 73-II',
        },
        summary: {
          uz: "Yangi sanoat, qurilish va infratuzilma loyihalarini amalga oshirishdan oldin ularning atrof-muhit muvozanatiga ta'sirini majburiy baholashni (ZVOS) belgilaydi.",
          en: 'Mandates prior Environmental Impact Assessment (EIA) for industrial, infrastructure, and land-use projects.',
          ru: 'Устанавливает обязательную предварительную оценку воздействия на окружающую среду (ОВОС) для хозяйственных проектов.',
        },
        significance: {
          uz: "Antropogen omillarning ekotizim sig'imidan oshib ketishining oldini oluvchi preventiv filtr.",
          en: 'Acts as an institutional filter preventing irreversible anthropogenic landscape damage.',
          ru: 'Превентивный экономико-правовой фильтр против разрушения природного баланса.',
        },
      },
    ],
    facts: [
      {
        uz: "Shahar ko'chalaridagi zich daraxt soyasi asfalt va bino sirtlari haroratini yozda 10–15°C gacha, xonadonlarni sovitish uchun ketadigan elektr energiyasi sarfini esa 20–30% gacha kamaytiradi.",
        en: 'Mature urban tree canopy can cool street surfaces by 10–15°C in summer and reduce building air-conditioning electricity demand by 20–30%.',
        ru: 'Плотная крона городских деревьев снижает температуру поверхностей летом на 10–15°C и сокращает расход электроэнергии на кондиционирование на 20–30%.',
      },
      {
        uz: "Dunyo bo'yicha oziq-ovqat ekinlarining 75 foizdan ortig'i biotik omil — hasharotlar va qushlar tomonidan changlantirishga bog'liq bo'lib, bu xizmat yiliga 235–577 mlrd AQSh dollariga baholanadi (IPBES).",
        en: 'Over 75% of global food crop types rely on biotic animal pollination, delivering $235–$577 billion in annual agricultural output value (IPBES).',
        ru: 'Более 75% мировых продовольственных культур зависят от биотического опыления, экономический вклад которого оценивается IPBES в 235–577 млрд долл. в год.',
      },
      {
        uz: "Viktor Shelfordning «Tolerantlik qonuni»ga ko'ra, omilning nafaqat yetishmasligi (masalan, qurg'oqchilik), balki me'yordan ortib ketishi (masalan, ortiqcha sug'orish tufayli botqoqlanish va ikkilamchi sho'rlanish) ham hosildorlikni pasaytiradi.",
        en: 'Shelford’s Law of Tolerance explains why over-irrigation degrades yields through waterlogging and secondary salinization just as severely as drought.',
        ru: 'Закон толерантности Шелфорда объясняет, почему избыточный полив (подтопление и вторичное засоление) снижает урожайность так же сильно, как и засуха.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Toshkent va Buxoro vohalarida yashil belbog'lar barpo etishning iqtisodiy samarasi",
        en: 'Economic Returns of Urban Green Belts and Oasis Shelterbelts in Uzbekistan',
        ru: 'Экономический эффект зелёных поясов и защитных лесополос в оазисах Узбекистана',
      },
      location: {
        uz: "Toshkent aglomeratsiyasi va Buxoro vohasi (O'zbekiston)",
        en: 'Tashkent Agglomeration & Bukhara Oasis, Uzbekistan',
        ru: 'Ташкентская агломерация и Бухарский оазис, Узбекистан',
      },
      challenge: {
        uz: "Jadal qurilishlar, cho'l shamollari va chang bo'ronlari yozgi mikroiqlim isishiga, PM10/PM2.5 ortishiga hamda paxta va g'alla maydonlarida namlikning tez bug'lanishiga olib keldi.",
        en: 'Rapid urbanization and arid winds intensified summer heat islands, particulate dust events, and soil moisture evaporation on oasis croplands.',
        ru: 'Быстрая застройка и пустынные ветры усилили летний перегрев городов, пыльные бури и испарение влаги на орошаемых полях.',
      },
      solution: {
        uz: "Qurg'oqchilikka chidamli mahalliy daraxt turlari (qayrag'och, shumtol, tut, katalpa) va tomchilatib sug'oriladigan ihota daraxtzorlari tizimi barpo etildi.",
        en: 'Drought-tolerant native tree species (elm, ash, mulberry) paired with drip-irrigated field shelterbelts were deployed around urban perimeters and farms.',
        ru: 'Созданы пояса из засухоустойчивых пород (карагач, ясень, шелковица) с капельным орошением вокруг городов и вдоль сельхозугодий.',
      },
      economicOutcome: {
        uz: "Ihota daraxtzorlari shamol tezligini 30–40% pasaytirib, tuproq namligini saqlash hisobiga qishloq xo'jaligi hosildorligini o'rtacha 10–15% oshiradi va shahar sovitish sarflarini qisqartiradi.",
        en: 'Field shelterbelts cut wind velocity by 30–40%, conserving soil moisture to lift crop yields by 10–15% while lowering urban cooling peaks.',
        ru: 'Защитные лесополосы снижают скорость ветра на 30–40%, сохраняют влагу в почве и повышают урожайность сельхозкультур в среднем на 10–15%.',
      },
    },
    terms: [
      {
        term: { uz: 'Gomeostaz', en: 'Homeostasis', ru: 'Гомеостаз' },
        definition: {
          uz: "Ekologik tizimning tashqi ta'sirlarga qaramay o'z ichki tarkibi va muvozanatini saqlab turish xususiyati.",
          en: 'The capacity of an ecological system to maintain internal dynamic equilibrium despite external disturbances.',
          ru: 'Способность экосистемы поддерживать внутреннее динамическое равновесие при внешних воздействиях.',
        },
      },
      {
        term: { uz: 'Abiotik omillar', en: 'Abiotic Factors', ru: 'Абиотические факторы' },
        definition: {
          uz: "Jonsiz tabiatning fizik va kimyoviy ko'rsatkichlari: harorat, yorug'lik, namlik, bosim va tuproq minerallari.",
          en: 'Non-living physical and chemical components of an environment such as temperature, sunlight, moisture, and soil minerals.',
          ru: 'Физико-химические условия неживой природы: температура, свет, влажность, рельеф и состав почвы.',
        },
      },
      {
        term: { uz: 'Antropogen landshaft', en: 'Anthropogenic Landscape', ru: 'Антропогенный ландшафт' },
        definition: {
          uz: "Insonning maqsadli xo'jalik faoliyati natijasida o'zgartirilgan yoki yangidan yaratilgan hududiy majmua.",
          en: 'A geographic landscape substantially modified or constructed by human economic activity.',
          ru: 'Природно-хозяйственный комплекс, целенаправленно изменённый или созданный деятельностью человека.',
        },
      },
      {
        term: { uz: 'Libixning minimum qonuni', en: 'Liebig’s Law of the Minimum', ru: 'Закон минимума Либиха' },
        definition: {
          uz: "Tizimning rivojlanishi va hosildorligi eng kam miqdorda mavjud bo'lgan (cheklovchi) omil bilan belgilanishi haqidagi qonuniyat.",
          en: 'Principle stating that growth is dictated not by total resources available, but by the scarcest limiting factor.',
          ru: 'Закономерность, согласно которой продуктивность системы определяется фактором, находящимся в минимуме.',
        },
      },
    ],
    quiz: [
      {
        id: 'q2-1',
        question: {
          uz: "Quyidagilardan qaysi biri abiotik ekologik omil hisoblanadi?",
          en: 'Which of the following is classified as an abiotic ecological factor?',
          ru: 'Что из перечисленного относится к абиотическим экологическим факторам?',
        },
        options: [
          { uz: 'Quyosh radiatsiyasi va havo harorati', en: 'Solar radiation and ambient temperature', ru: 'Солнечная радиация и температура воздуха' },
          { uz: 'Hasharotlarning gullarni changlatishi', en: 'Insect pollination of crops', ru: 'Опыление растений насекомыми' },
          { uz: 'Sanoat korxonalarini xususiylashtirish', en: 'Privatization of industrial plants', ru: 'Приватизация заводов' },
          { uz: 'Tuproq bakteriyalari simbiozi', en: 'Soil bacterial symbiosis', ru: 'Симбиоз почвенных бактерий' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Quyosh nuri, harorat, namlik va shamol jonsiz tabiatning fizik (abiotik) omillaridir.",
          en: 'Solar radiation, temperature, humidity, and wind are physical components of non-living nature (abiotic factors).',
          ru: 'Солнечная радиация, температура, влажность и ветер — физические факторы неживой природы (абиотические).',
        },
      },
      {
        id: 'q2-2',
        question: {
          uz: "Xalqaro mehnat tashkiloti (ILO) bahosiga ko'ra, 2030-yilga borib issiqlik stressi tufayli global ish vaqtining qancha qismi yo'qotilishi mumkin?",
          en: 'According to the ILO, approximately what share of global working hours could be lost to heat stress by 2030?',
          ru: 'По оценке МОТ, какая доля мирового рабочего времени может быть потеряна к 2030 году из-за теплового стресса?',
        },
        options: [
          { uz: '0.05%', en: '0.05%', ru: '0,05%' },
          { uz: '2.2%', en: '2.2%', ru: '2,2%' },
          { uz: '18.5%', en: '18.5%', ru: '18,5%' },
          { uz: '45.0%', en: '45.0%', ru: '45,0%' },
        ],
        correctIndex: 1,
        explanation: {
          uz: "ILO prognoziga ko'ra, global isish tufayli 2030-yilda jami ish soatlarining 2,2% (80 mln ish o'rni ekvivalenti) yo'qotilishi mumkin.",
          en: 'ILO estimates a 2.2% reduction in global working hours by 2030, equivalent to 80 million full-time jobs.',
          ru: 'МОТ прогнозирует потерю 2,2% мирового фонда рабочего времени к 2030 году (около 80 млн полных рабочих мест).',
        },
      },
      {
        id: 'q2-3',
        question: {
          uz: "Ortiqcha sug'orish oqibatida tuproqning ikkilamchi sho'rlanishi qaysi ekologik qonuniyat bilan izohlanadi?",
          en: 'Which ecological law explains why excessive irrigation harms crops through secondary salinization?',
          ru: 'Какой экологический закон объясняет снижение урожайности при избыточном поливе и засолении?',
        },
        options: [
          { uz: 'Shelfordning tolerantlik qonuni', en: 'Shelford’s Law of Tolerance', ru: 'Закон толерантности Шелфорда' },
          { uz: 'Gresham qonuni', en: 'Gresham’s Law', ru: 'Закон Грешема' },
          { uz: 'Engel qonuni', en: 'Engel’s Law', ru: 'Закон Энгеля' },
          { uz: 'Oken qonuni', en: 'Okun’s Law', ru: 'Закон Оукена' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Shelford qonuniga ko'ra, ekologik omilning minimumdan pastligi kabi maksimumdan oshib ketishi ham organizm uchun halokatli bo'ladi.",
          en: 'Shelford’s Law states that too much of an environmental factor (water) can be as limiting as too little.',
          ru: 'Согласно закону Шелфорда, избыток фактора за пределами оптимума угнетает систему так же, как и его нехватка.',
        },
      },
      {
        id: 'q2-4',
        question: {
          uz: "O'zbekistonda daraxt kesishga muddatsiz moratoriy va shaharlarni 30% yashillashtirish qaysi hujjat bilan mustahkamlangan?",
          en: 'Which Presidential Decree established Uzbekistan’s indefinite tree-cutting moratorium and 30% urban green target?',
          ru: 'Каким указом в Узбекистане закреплён бессрочный мораторий на вырубку ценных деревьев и цель озеленения 30%?',
        },
        options: [
          { uz: 'PF-46-son Farmon («Yashil makon» loyihasi)', en: 'Decree No. PF-46 ("Yashil Makon")', ru: 'Указ № УП-46 (проект «Яшил макон»)' },
          { uz: 'Bojxona kodeksi', en: 'Customs Code', ru: 'Таможенный кодекс' },
          { uz: 'Bank faoliyati to‘g‘risidagi qonun', en: 'Banking Activity Law', ru: 'Закон о банковской деятельности' },
          { uz: 'Valyutani tartibga solish qonuni', en: 'Currency Regulation Law', ru: 'Закон о валютном регулировании' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "2021-yil 30-dekabrdagi PF-46-son Farmon «Yashil makon» loyihasi va qimmatbaho daraxtlarni kesishga muddatsiz moratoriyni belgilagan.",
          en: 'Presidential Decree No. PF-46 of December 30, 2021 institutionalized the Yashil Makon afforestation drive and moratorium.',
          ru: 'Указ Президента № УП-46 от 30.12.2021 г. закрепил проект «Яшил макон» и бессрочный мораторий.',
        },
      },
      {
        id: 'q2-5',
        question: {
          uz: "Farg'ona vodiysi va Mirzacho'ldagi sug'oriladigan dehqonchilik vohalari landshaftning qaysi turiga kiradi?",
          en: 'How are the irrigated agricultural oases of Fergana and Mirzachul classified geographically?',
          ru: 'К какому типу ландшафтов относятся орошаемые оазисы Ферганской долины и Голодной степи?',
        },
        options: [
          { uz: 'Boshlang‘ich yovvoyi tundralar', en: 'Pristine tundra landscapes', ru: 'Первичные тундровые ландшафты' },
          { uz: 'Madaniy antropogen agrolandshaftlar', en: 'Engineered anthropogenic agro-landscapes', ru: 'Культурные антропогенные агроландшафты' },
          { uz: 'Abissal okean landshaftlari', en: 'Abyssal marine landscapes', ru: 'Абиссальные океанические ландшафты' },
          { uz: 'Muzlik landshaftlari', en: 'Glacial ice-sheet landscapes', ru: 'Ледниковые покровные ландшафты' },
        ],
        correctIndex: 1,
        explanation: {
          uz: "Sug'orish kanallari, drenaj va madaniy ekinlar bilan o'zlashtirilgan vohalar antropogen agrolandshaftlar hisoblanadi.",
          en: 'Irrigated oases maintained through canals, drainage networks, and crop rotation are classic anthropogenic agro-landscapes.',
          ru: 'Оазисы, сформированные системой каналов, коллекторов и посевов, являются антропогенными агроландшафтами.',
        },
      },
    ],
  },

  {
    id: 3,
    isIndependentStudy: false,
    iconName: 'Layers',
    title: {
      uz: 'Tabiiy resurslar tavsifi va ulardan oqilona foydalanish',
      en: 'Classification and Rational Management of Natural Resources',
      ru: 'Характеристика природных ресурсов и их рациональное использование',
    },
    shortDescription: {
      uz: "Tiklanadigan va tiklanmaydigan resurslar, Xotelling va Xartvik qoidalari, yer-suv-o'rmon-energetika zaxiralari va tabiiy resurslar bozori.",
      en: 'Renewable vs. non-renewable resources, Hotelling and Hartwick rules, land-water-forest-energy stocks, and resource markets.',
      ru: 'Возобновимые и невозобновимые ресурсы, правила Хотеллинга и Хартвика, земельно-водно-лесные фонды и рынки ресурсов.',
    },
    keywords: {
      uz: ['tabiiy resurslar', 'tiklanadigan', 'tiklanmaydigan', 'Xotelling qoidasi', 'Xartvik qoidasi', 'renta', 'o‘rmon', 'suv'],
      en: ['natural resources', 'renewable', 'non-renewable', 'Hotelling rule', 'Hartwick rule', 'resource rent', 'forests'],
      ru: ['природные ресурсы', 'возобновимые', 'невозобновимые', 'правило Хотеллинга', 'правило Хартвика', 'природная рента'],
    },
    sections: [
      {
        heading: {
          uz: '1. Tabiiy resurslarning iqtisodiy va ekologik tasnifi',
          en: '1. Economic and Ecological Classification of Natural Resources',
          ru: '1. Эколого-экономическая классификация природных ресурсов',
        },
        paragraphs: [
          {
            uz: "Tabiiy resurslar — ishlab chiqarish jarayonida xomashyo, energiya manbai yoki yashash makoni sifatida foydalaniladigan tabiat unsurlaridir. Tugash va tiklanish xususiyatiga ko'ra ular tugaydigan va tugamaydigan (quyosh nuri, shamol, geotermal va to'lqin energiyasi) resurslarga ajratiladi.",
            en: 'Natural resources encompass physical endowments of the Earth used as production inputs, energy carriers, or spatial foundations. By exhaustibility, they divide into inexhaustible flows (solar, wind, geothermal, tidal energy) and exhaustible stocks.',
            ru: 'Природные ресурсы — это элементы природы, используемые в хозяйстве как сырьё, источники энергии или пространственный базис. По исчерпаемости они делятся на неисчерпаемые потоки (солнечная, ветровая, геотермальная энергия) и исчерпаемые запасы.',
          },
          {
            uz: "Tugaydigan resurslar o'z navbatida ikkiga bo'linadi: tiklanmaydigan resurslar (neft, tabiiy gaz, ko'mir, metall va mineral rudalar — ular geologik million yillar davomida hosil bo'lgan) hamda tiklanadigan resurslar (o'rmonlar, chuchuk suv, unumdor tuproq, baliq va biologik populyatsiyalar). Biroq tiklanadigan resurslardan tiklanish tezligidan ortiq darajada foydalanilsa, ular ham amalda tugab qoladi.",
            en: 'Exhaustible stocks subdivide into non-renewable resources (crude oil, natural gas, coal, metallic ores formed over geological epochs) and renewable biological/hydrological stocks (forests, freshwater aquifers, fertile topsoil, fisheries). Crucially, harvesting a renewable stock faster than its natural regeneration rate causes stock collapse.',
            ru: 'Исчерпаемые ресурсы подразделяются на невозобновимые (нефть, газ, уголь, руды металлов) и возобновимые (леса, пресные воды, плодородная почва, биоресурсы). Однако при превышении порога естественного воспроизводства возобновимый ресурс также деградирует и истощается.',
          },
        ],
        keyTakeaway: {
          uz: "Xotelling qoidasi (1931): tiklanmaydigan resursning sof bozor rentasi vaqt davomida iqtisodiyotdagi real foiz stavkasi sur'atida o'sib borishi muvozanat shartidir.",
          en: 'Hotelling’s Rule (1931): Along an optimal extraction path, the net price (scarcity rent) of a non-renewable resource rises at the real rate of interest.',
          ru: 'Правило Хотеллинга (1931): при оптимальной траектории добычи чистая рента невозобновимого ресурса растёт темпом реальной процентной ставки.',
        },
      },
      {
        heading: {
          uz: '2. Energetik, yer, o‘rmon va suv resurslaridan oqilona foydalanish',
          en: '2. Rational Use of Energy, Land, Forest, and Water Endowments',
          ru: '2. Рациональное использование энергетических, земельных, лесных и водных ресурсов',
        },
        paragraphs: [
          {
            uz: "Dunyo bo'yicha o'rmonlar 4,06 milliard gektarni (quruqlikning ~31 foizini) egallaydi, ammo FAO ma'lumotlariga ko'ra, qishloq xo'jaligi yerlarini kengaytirish tufayli har yili millionlab gektar tropik o'rmonlar qisqarmoqda. Chuchuk suv esa global suv zaxirasining atigi 2,5 foizini tashkil etib, uning ham 70 foizga yaqini muzliklarda to'plangan.",
            en: 'Global forests cover 4.06 billion hectares (~31% of land area), yet agricultural expansion still drives millions of hectares of annual tropical deforestation (FAO). Meanwhile, freshwater represents just 2.5% of Earth’s water, with nearly 70% locked in glaciers and ice caps.',
            ru: 'Леса мира занимают 4,06 млрд га (~31% суши), однако расширение сельхозземель по-прежнему ведёт к потере миллионов гектаров тропических лесов ежегодно (ФАО). На пресную воду приходится лишь 2,5% гидросферы, причём около 70% законсервировано в ледниках.',
          },
          {
            uz: "O'zbekiston sharoitida o'rmon fondi yerlari so'nggi yillarda Orolbo'yi va tog'oldi hududlarda o'rmonzorlashtirish hisobiga kengaytirilmoqda (umumiy o'rmon fondi yerlari 11 mln gektardan oshdi, shundan daraxt-buta bilan qoplangan maydon ~3,5 mln ga atrofida). Suv va yer resurslari tanqisligi sharoitida tomchilatib sug'orish va yerlarni lazerli tekislash eng yuqori iqtisodiy samara beruvchi chora hisoblanadi.",
            en: 'In Uzbekistan, State Forest Fund lands exceed 11 million hectares (with ~3.5 million ha under active tree/shrub cover), expanding rapidly via Aralkum and foothill afforestation. Given arid land and water scarcity, laser land leveling and drip irrigation yield the highest marginal economic returns.',
            ru: 'В Узбекистане земли Государственного лесного фонда превышают 11 млн га (из них покрытые лесом и кустарником площади — около 3,5 млн га) за счёт лесопосадок в Приаралье и предгорьях. В условиях дефицита воды и пашни наибольшую отдачу дают лазерная планировка и капельное орошение.',
          },
        ],
      },
      {
        heading: {
          uz: '3. Tabiiy resurslar bozori, tabiiy renta va Xartvik qoidasi',
          en: '3. Natural Resource Markets, Resource Rent, and Hartwick’s Rule',
          ru: '3. Рынок природных ресурсов, природная рента и правило Хартвика',
        },
        paragraphs: [
          {
            uz: "Tabiiy resurslar bozorida narx ikki omildan shakllanadi: qazib olishning chekli xarajatlari hamda «tanqislik rentasi» (bugun qazib olingan tonna ertaga qazib olinmasligining muqobil qiymati). Resursga boy mamlakatlar duch keladigan xavflardan biri — «resurs la'nati» yoki «Golland kasalligi» bo'lib, xomashyo eksporti milliy valyutani mustahkamlab, qayta ishlash sanoatini siqib chiqarishi mumkin.",
            en: 'Prices in natural resource markets reflect marginal extraction cost plus scarcity rent—the opportunity cost of depleting a unit today rather than preserving it for the future. Resource-rich economies must guard against "Dutch Disease," where raw commodity booms appreciate the exchange rate and crowd out manufacturing.',
            ru: 'Цена на рынке природных ресурсов складывается из предельных издержек добычи и ренты редкости (альтернативной стоимости изъятия единицы ресурса сегодня вместо будущего). Сырьевые экономики сталкиваются с риском «голландской болезни», вытесняющей обрабатывающий сектор.',
          },
          {
            uz: "Jon Xartvik qoidasi (1977) ushbu muammoning yechimini ko'rsatadi: agar mamlakat tiklanmaydigan mineral va energetik resurslardan olingan tabiiy rentani to'liq inson kapitali (ta'lim, fan), zamonaviy sanoat va yashil infratuzilmaga qayta investitsiya qilsa, jami milliy boylik kamaymaydi va kelajak avlodlar farovonligi barqaror saqlanadi.",
            en: 'John Hartwick’s Rule (1977) provides the macro-policy solution: reinvesting all scarcity rents from non-renewable resource extraction into reproducible physical, human, and green capital keeps total national wealth and intergenerational consumption non-declining.',
            ru: 'Правило Джона Хартвика (1977) даёт макроэкономическое решение: если вся рента от добычи исчерпаемых недр реинвестируется в человеческий капитал, науку и чистую инфраструктуру, совокупное национальное богатство будущих поколений не сокращается.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '4.06',
        unit: { uz: 'mlrd gektar', en: 'bln hectares', ru: 'млрд га' },
        label: {
          uz: "Jahon o'rmon resurslarining umumiy maydoni (quruqlikning 31%)",
          en: 'Total global forest area (31% of world land surface)',
          ru: 'Общая площадь лесов мира (31% мировой суши)',
        },
        year: '2022',
        source: { uz: 'FAO Global Forest Resources Assessment', en: 'FAO Global Forest Resources Assessment', ru: 'ФАО ООН (FRA)' },
      },
      {
        value: '2.5%',
        unit: { uz: 'gidrosfera ulushi', en: 'of global water', ru: 'гидросферы' },
        label: {
          uz: 'Yer sharidagi chuchuk suv zaxiralarining umumiy suv hajmidagi ulushi',
          en: 'Freshwater share of Earth’s total water volume',
          ru: 'Доля пресной воды в общем объёме гидросферы Земли',
        },
        year: '2023',
        source: { uz: 'UNESCO / UN-Water', en: 'UNESCO / UN-Water', ru: 'ЮНЕСКО / ООН-Водные ресурсы' },
      },
      {
        value: '4.3',
        unit: { uz: 'mln gektar', en: 'mln hectares', ru: 'млн га' },
        label: {
          uz: "O'zbekistondagi sug'oriladigan qishloq xo'jaligi yerlari maydoni",
          en: 'Irrigated agricultural cropland in Uzbekistan',
          ru: 'Площадь орошаемых сельхозземель в Узбекистане',
        },
        year: '2023',
        source: {
          uz: "O'zbekiston Statistika agentligi / Qishloq xo'jaligi vazirligi",
          en: 'Statistics Agency of Uzbekistan / Ministry of Agriculture',
          ru: 'Агентство статистики РУз / Минсельхоз',
        },
        isApproximate: true, // TODO: tekshiring (~4.3 mln ga sug'oriladigan yer fondi)
      },
      {
        value: '70%',
        unit: { uz: 'suv ulushi', en: 'of freshwater', ru: 'водозабора' },
        label: {
          uz: "Global chuchuk suv olishda qishloq xo'jaligi tarmog'ining o'rtacha ulushi",
          en: 'Share of global freshwater withdrawals used in agriculture',
          ru: 'Среднемировая доля сельского хозяйства в заборе пресной воды',
        },
        year: '2023',
        source: { uz: 'FAO AQUASTAT / Jahon banki', en: 'FAO AQUASTAT / World Bank', ru: 'ФАО AQUASTAT / Всемирный банк' },
      },
    ],
    charts: [
      {
        id: 't3-water-sectors',
        type: 'bar',
        title: {
          uz: 'Chuchuk suv sarfining tarmoqlar kesimidagi taqsimoti (%)',
          en: 'Freshwater Withdrawal by Sector: Global vs. Central Asia (%)',
          ru: 'Структура водозабора по секторам: мир и Центральная Азия (%)',
        },
        subtitle: {
          uz: 'Sug‘oriladigan dehqonchilik ulushining mintaqaviy xususiyati',
          en: 'High irrigation share in arid Central Asian economies compared to global average',
          ru: 'Высокая доля ирригации в аридной зоне Центральной Азии по сравнению с миром',
        },
        source: { uz: 'FAO AQUASTAT / Jahon banki (2023)', en: 'FAO AQUASTAT / World Bank (2023)', ru: 'ФАО AQUASTAT / Всемирный банк (2023)' },
        unit: '%',
        seriesName: { uz: 'Jahon o‘rtachasi (%)', en: 'Global Average (%)', ru: 'В среднем по миру (%)' },
        secondarySeriesName: { uz: 'O‘zbekiston (%)', en: 'Uzbekistan (%)', ru: 'Узбекистан (%)' },
        data: [
          { name: { uz: 'Qishloq xo‘jaligi', en: 'Agriculture', ru: 'Сельское хоз-во' }, value: 70, secondaryValue: 88 },
          { name: { uz: 'Sanoat va energetika', en: 'Industry & Energy', ru: 'Промышленность' }, value: 19, secondaryValue: 5 },
          { name: { uz: 'Kommunal-maishiy', en: 'Municipal / Domestic', ru: 'Коммунальный сектор' }, value: 11, secondaryValue: 7 },
        ],
      },
      {
        id: 't3-msy-curve',
        type: 'area',
        title: {
          uz: 'Tiklanadigan resursning maksimal barqaror ovlash/olish (MSY) modeli',
          en: 'Maximum Sustainable Yield (MSY) Bio-Economic Growth Curve',
          ru: 'Биоэкономическая модель максимального устойчивого изъятия (MSY)',
        },
        subtitle: {
          uz: 'Zaxira hajmi (% sig‘imga nisbatan) va yillik tabiiy tiklanish sur’ati',
          en: 'Annual natural regeneration as a function of stock carrying capacity (%)',
          ru: 'Годовой естественный прирост в зависимости от ёмкости популяции (%)',
        },
        source: { uz: 'Schaefer bio-iqtisodiy modeli', en: 'Schaefer Bio-Economic Model', ru: 'Биоэкономическая модель Шефера' },
        unit: 'birlik',
        seriesName: { uz: 'Tabiiy o‘sish (MSY = 50% nuqtada)', en: 'Natural Growth Rate', ru: 'Естественный прирост' },
        data: [
          { name: '0%', value: 0 },
          { name: '25%', value: 75 },
          { name: '50% (MSY)', value: 100 },
          { name: '75%', value: 75 },
          { name: '100%', value: 0 },
        ],
      },
    ],
    laws: [
      {
        id: 't3-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining Yer kodeksi",
          en: 'Land Code of the Republic of Uzbekistan',
          ru: 'Земельный кодекс Республики Узбекистан',
        },
        codeAndDate: {
          uz: '30.04.1998-yil, 598-I-son',
          en: 'April 30, 1998, No. 598-I',
          ru: '30.04.1998 г., № 598-I',
        },
        summary: {
          uz: "Yer fondini toifalarga ajratish, sug'oriladigan qishloq xo'jaligi yerlarini alohida muhofaza qilish va yer unumdorligini tiklash majburiyatlarini tartibga soladi.",
          en: 'Governs land fund categories, strict protection of prime irrigated cropland, and soil fertility conservation.',
          ru: 'Регулирует категории земельного фонда, особую охрану орошаемых сельхозземель и сохранение плодородия почв.',
        },
        significance: {
          uz: "Qishloq xo'jaligi yerlarining noqishloq maqsadlarga asossiz olib qo'yilishini cheklaydi.",
          en: 'Protects scarce irrigated land assets from uncompensated urban encroachment.',
          ru: 'Защищает дефицитные орошаемые земли от нецелевого изъятия.',
        },
      },
      {
        id: 't3-law-2',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «O'rmon to'g'risida»gi Qonuni (yangi tahriri)",
          en: 'Law of the Republic of Uzbekistan "On Forests" (Revised Edition)',
          ru: 'Закон Республики Узбекистан «О лесе» (в новой редакции)',
        },
        codeAndDate: {
          uz: '16.04.2018-yil, O‘RQ-475-son',
          en: 'April 16, 2018, No. O’RQ-475',
          ru: '16.04.2018 г., № ЗРУ-475',
        },
        summary: {
          uz: "O'rmon fondini muhofaza qilish, qayta tiklash, ekoturizm va o'rmon xo'jaligida davlat-xususiy sheriklik asosida ko'chatzorlar yaratish tartibini belgilaydi.",
          en: 'Regulates sustainable forest management, reforestation, non-timber forest leases, and public-private nursery partnerships.',
          ru: 'Регулирует охрану и воспроизводство лесов, лесопользование, экотуризм и государственно-частное партнёрство в лесоводстве.',
        },
        significance: {
          uz: "Tiklanadigan o'rmon resurslaridan daromad olish bilan ularni ko'paytirishni uyg'unlashtiradi.",
          en: 'Aligns economic incentives for leaseholders with long-term afforestation targets.',
          ru: 'Сочетает экономические стимулы арендаторов с задачами воспроизводства лесного фонда.',
        },
      },
      {
        id: 't3-law-3',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining Soliq kodeksi (Resurs soliqlari bo'limi)",
          en: 'Tax Code of the Republic of Uzbekistan (Resource Taxes Provisions)',
          ru: 'Налоговый кодекс Республики Узбекистан (раздел ресурсных налогов)',
        },
        codeAndDate: {
          uz: '30.12.2019-yil, O‘RQ-599-son',
          en: 'December 30, 2019, No. O’RQ-599',
          ru: '30.12.2019 г., № ЗРУ-599',
        },
        summary: {
          uz: "Yer qa'ridan foydalanganlik uchun soliq, suv resurslaridan foydalanganlik uchun soliq va yer solig'i stavkalarini tabaqalashtirilgan holda belgilaydi.",
          en: 'Establishes differentiated tax rates for subsoil extraction, water resource withdrawals, and land tenure.',
          ru: 'Устанавливает дифференцированные ставки налога за пользование недрами, водными ресурсами и земельного налога.',
        },
        significance: {
          uz: "Tabiiy rentani davlat budjetiga jamlash va suv-xomashyo tejamkorligini soliq imtiyozlari orqali rag'batlantiradi.",
          en: 'Captures resource rent for society while granting tax deductions for drip irrigation and water metering.',
          ru: 'Аккумулирует природную ренту и стимулирует водосбережение через налоговые льготы.',
        },
      },
    ],
    facts: [
      {
        uz: "Norvegiya Davlat pensiya jamg'armasi (sobiq Neft jamg'armasi) Xartvik qoidasining eng yorqin namunasi bo'lib, neft-gaz rentasini global aksiyalarga yo'naltirish orqali 1,7 trln dollardan ortiq boylik to'plagan.",
        en: 'Norway’s Government Pension Fund Global exemplifies Hartwick’s Rule, transforming North Sea oil rents into over $1.7 trillion in diversified financial assets.',
        ru: 'Суверенный фонд Норвегии — эталон правила Хартвика: рента от добычи нефти преобразована в глобальный портфель стоимостью свыше 1,7 трлн долларов.',
      },
      {
        uz: "Elinor Ostrom 2009-yilda «umumiy foydalanishdagi resurslar» (yaylovlar, sug'orish tizimlari, baliqchilik havzalari) mahalliy jamoalar o'zini o'zi boshqaruvi orqali ham samarali saqlanishi mumkinligini isbotlab, Nobel mukofotini olgan.",
        en: 'Elinor Ostrom won the 2009 Economics Nobel Prize for demonstrating how local communities govern common-pool resources (irrigation canals, pastures, fisheries) sustainably without tragedy of the commons.',
        ru: 'Элинор Остром получила Нобелевскую премию по экономике 2009 года, доказав, что местные сообщества способны эффективно управлять общими ресурсами (пастбищами, ирригацией) без их истощения.',
      },
      {
        uz: "O'zbekistonda tomchilatib sug'orish texnologiyasi joriy qilingan paxta va bog' maydonlarida suv resurslari uchun soliqdan ozod etish va gektariga davlat subsidiyasi berish amaliyoti yo'lga qo'yilgan.",
        en: 'Farms in Uzbekistan adopting drip irrigation receive per-hectare capital subsidies and multi-year exemptions from the water resource use tax.',
        ru: 'В Узбекистане хозяйства, внедрившие капельное орошение, получают субсидии на гектар и налоговые льготы по налогу за пользование водными ресурсами.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Garrett Xardinning «Umumiylik fojiasi» va baliqchilikda sotiladigan kvotalar (ITQ) tizimi",
        en: 'Overcoming the Tragedy of the Commons via Individual Transferable Quotas (ITQs)',
        ru: 'Преодоление «трагедии общин» через систему индивидуальных передаваемых квот (ITQ)',
      },
      location: {
        uz: 'Islandiya va Yangi Zelandiya dengiz bioresurslari bozori',
        en: 'Iceland & New Zealand Marine Fisheries Markets',
        ru: 'Рынок морских биоресурсов Исландии и Новой Зеландии',
      },
      challenge: {
        uz: "Ochiq kirishli dengiz havzalarida har bir baliqchi kemasi tezroq ko'proq ovlashga intilib, baliq populyatsiyasini tiklanish nuqtasidan (MSY) pastga tushirib yuborgan edi.",
        en: 'Open-access fishing triggered a race-to-fish, depleting cod and haddock stocks far below Maximum Sustainable Yield (MSY).',
        ru: 'Свободный доступ к промыслу вызывал «гонку за выловом», истощая популяции рыб ниже порога естественного воспроизводства (MSY).',
      },
      solution: {
        uz: "Ilmiy asoslangan umumiy yillik ovlash limiti (TAC) belgilanib, u baliqchilar o'rtasida bozorda sotilishi va ijaraga berilishi mumkin bo'lgan ulushli kvotalarga (ITQ) bo'lindi.",
        en: 'Regulators capped Total Allowable Catch (TAC) scientifically and allocated tradable Individual Transferable Quotas (ITQs) giving fishers a long-term stake in stock health.',
        ru: 'Был введён научно обоснованный общий допустимый улов (TAC), разделённый на рыночные передаваемые квоты (ITQ), закрепившие долгосрочный интерес к сохранению запаса.',
      },
      economicOutcome: {
        uz: "Baliq populyatsiyasi barqaror tiklandi, ortiqcha kema xarajatlari qisqardi va tarmoq rentabelligi ikki barobar oshdi.",
        en: 'Fish stocks rebounded sustainably, fleet overcapacity vanished, and sector profitability more than doubled.',
        ru: 'Популяции восстановились до устойчивого уровня, исчезли избыточные затраты флота, а рентабельность отрасли выросла вдвое.',
      },
    },
    terms: [
      {
        term: { uz: 'Xotelling qoidasi', en: 'Hotelling’s Rule', ru: 'Правило Хотеллинга' },
        definition: {
          uz: "Tiklanmaydigan resursning sof narxi (rentasi) bozor foiz stavkasi tezligida oshib borishini ifodalovchi fundamental qoida.",
          en: 'Economic principle stating that the net price (rent) of an exhaustible resource grows at the market interest rate.',
          ru: 'Принцип, согласно которому чистая цена (рента) исчерпаемого ресурса растёт со скоростью рыночной ставки процента.',
        },
      },
      {
        term: { uz: 'Xartvik qoidasi', en: 'Hartwick’s Rule', ru: 'Правило Хартвика' },
        definition: {
          uz: "Tabiiy resurs rentasini to'liq ishlab chiqarish va inson kapitaliga investitsiya qilish orqali barqaror iste'molni saqlash qoidasi.",
          en: 'Rule prescribing that investing all exhaustible resource rents into reproducible capital preserves constant intergenerational consumption.',
          ru: 'Правило реинвестирования всей природной ренты в воспроизводимый и человеческий капитал для сохранения богатства поколений.',
        },
      },
      {
        term: { uz: 'Maksimal barqaror hosil (MSY)', en: 'Maximum Sustainable Yield (MSY)', ru: 'Максимальный устойчивый улов (MSY)' },
        definition: {
          uz: "Tiklanadigan biologik resurs zaxirasini kamaytirmasdan uzoq muddat davomida har yili olish mumkin bo'lgan eng katta hajm.",
          en: 'The largest annual catch or harvest that can be taken indefinitely from a renewable resource stock without depleting it.',
          ru: 'Наибольший годовой объём изъятия возобновимого биоресурса, не подрывающий его долгосрочное воспроизводство.',
        },
      },
      {
        term: { uz: 'Umumiylik fojiasi', en: 'Tragedy of the Commons', ru: 'Трагедия общин' },
        definition: {
          uz: "Mulkchilik huquqi belgilanmagan umumiy resursdan har bir ishtirokchining cheksiz foydalanishi oqibatida resursning tugab borishi.",
          en: 'Depletion of a shared open-access resource when individual users act solely in short-term self-interest.',
          ru: 'Истощение общедоступного ресурса при отсутствии прав собственности и правил коллективного ограничения.',
        },
      },
    ],
    quiz: [
      {
        id: 'q3-1',
        question: {
          uz: "Xartvik qoidasining asosiy makroiqtisodiy mazmuni nimadan iborat?",
          en: 'What is the core macroeconomic prescription of Hartwick’s Rule?',
          ru: 'В чём заключается главный макроэкономический смысл правила Хартвика?',
        },
        options: [
          { uz: "Tiklanmaydigan resurs rentasini inson va ishlab chiqarish kapitaliga investitsiya qilish", en: 'Reinvesting non-renewable resource rents into human and reproducible capital', ru: 'Реинвестирование природной ренты в человеческий и воспроизводимый капитал' },
          { uz: 'Barcha konlarni bir yilda qazib tugatish', en: 'Extracting all mineral deposits within a single year', ru: 'Полная выработка месторождений за один год' },
          { uz: "Suv solig'ini butunlay bekor qilish", en: 'Abolishing all water pricing indefinitely', ru: 'Полная отмена платы за воду' },
          { uz: "Faqat qog'oz pul emissiyasini oshirish", en: 'Expanding money supply to replace raw materials', ru: 'Увеличение денежной эмиссии взамен сырья' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Xartvik qoidasiga ko'ra, tabiiy kapital kamayishi o'rnini ta'lim, texnologiya va infratuzilma kapitali to'ldirishi zarur.",
          en: 'Hartwick showed that substituting depleted natural capital with equivalent human and physical capital sustains long-run welfare.',
          ru: 'Хартвик доказал, что замещение истощаемого природного капитала инвестициями в знания и инфраструктуру сохраняет благосостояние.',
        },
      },
      {
        id: 'q3-2',
        question: {
          uz: "Quyidagilardan qaysi biri «tugaydigan, ammo tiklanadigan» tabiiy resurslar guruhiga kiradi?",
          en: 'Which resource belongs to the "exhaustible but renewable" category?',
          ru: 'Какой из перечисленных ресурсов относится к исчерпаемым возобновимым?',
        },
        options: [
          { uz: 'Toshko‘mir va neft', en: 'Hard coal and crude oil', ru: 'Каменный уголь и нефть' },
          { uz: "O'rmon fondi va unumdor tuproq", en: 'Forest stands and fertile topsoil', ru: 'Лесной фонд и плодородная почва' },
          { uz: 'Quyosh radiatsiyasi', en: 'Incoming solar radiation', ru: 'Солнечная радиация' },
          { uz: 'Mis va oltin rudalari', en: 'Copper and gold ores', ru: 'Медные и золотые руды' },
        ],
        correctIndex: 1,
        explanation: {
          uz: "O'rmon va tuproq biologik siklda qayta tiklanadi, ammo me'yordan ortiq ekspluatatsiya qilinsa tugashi mumkin.",
          en: 'Forests and topsoil regenerate naturally over human timescales, yet degrade if overexploited.',
          ru: 'Леса и почва способны к воспроизводству, но при чрезмерной эксплуатации деградируют и исчерпываются.',
        },
      },
      {
        id: 'q3-3',
        question: {
          uz: "O'zbekistonda chuchuk suv olishning eng katta qismi (~88%) qaysi tarmoqqa to'g'ri keladi?",
          en: 'Which sector accounts for the largest share (~88%) of freshwater withdrawals in Uzbekistan?',
          ru: 'На какую отрасль приходится наибольшая доля (~88%) водозабора в Узбекистане?',
        },
        options: [
          { uz: "Sug'oriladigan qishloq xo'jaligi", en: 'Irrigated agriculture', ru: 'Орошаемое сельское хозяйство' },
          { uz: 'Avtomobilsozlik sanoati', en: 'Automotive manufacturing', ru: 'Автомобилестроение' },
          { uz: 'IT va bank sektori', en: 'IT and financial services', ru: 'ИТ и финансовый сектор' },
          { uz: 'Tog‘-chang‘i turizmi', en: 'Alpine ski tourism', ru: 'Горнолыжный туризм' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Arid iqlim sharoitida O'zbekiston suv resurslarining qariyb 88–90 foizi sug'oriladigan dehqonchilikda ishlatiladi.",
          en: 'Due to arid climate conditions, nearly 88–90% of Uzbekistan’s water withdrawals support irrigated farming.',
          ru: 'В силу аридного климата около 88–90% забираемой пресной воды в Узбекистане направляется на орошаемое земледелие.',
        },
      },
      {
        id: 'q3-4',
        question: {
          uz: "2009-yilda «umumiy foydalanishdagi resurslarni» jamoaviy boshqarish bo'yicha Nobel mukofotini olgan iqtisodchi kim?",
          en: 'Which economist won the 2009 Nobel Prize for research on governing common-pool resources?',
          ru: 'Кто получил Нобелевскую премию по экономике 2009 года за исследования управления общими ресурсами?',
        },
        options: [
          { uz: 'Elinor Ostrom', en: 'Elinor Ostrom', ru: 'Элинор Остром' },
          { uz: 'Milton Fridman', en: 'Milton Friedman', ru: 'Милтон Фридман' },
          { uz: 'Devid Rikardo', en: 'David Ricardo', ru: 'Давид Рикардо' },
          { uz: 'Jon Meynard Keyns', en: 'John Maynard Keynes', ru: 'Джон Мейнард Кейнс' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Elinor Ostrom mahalliy institutlar yaylov va sug'orish tizimlarini samarali boshqara olishini empirik asoslagan.",
          en: 'Elinor Ostrom empirically proved how polycentric community rules sustain shared pastures, forests, and irrigation systems.',
          ru: 'Элинор Остром эмпирически обосновала успешные правила коллективного самоуправления общими ресурсами.',
        },
      },
      {
        id: 'q3-5',
        question: {
          uz: "Bio-iqtisodiy Shyefer modeliga ko'ra, maksimal barqaror o'sish (MSY) populyatsiya sig'imining qaysi nuqtasida kuzatiladi?",
          en: 'In the standard logistic Schaefer bio-economic model, at what fraction of carrying capacity does Maximum Sustainable Yield (MSY) occur?',
          ru: 'При какой доле от максимальной ёмкости среды достигается максимальный устойчивый прирост (MSY) в логистической модели Шефера?',
        },
        options: [
          { uz: '0% nuqtada', en: 'At 0% stock', ru: 'При 0% запаса' },
          { uz: '50% nuqtada', en: 'At 50% of carrying capacity', ru: 'При 50% ёмкости популяции' },
          { uz: '100% nuqtada', en: 'At 100% saturation', ru: 'При 100% насыщении' },
          { uz: '150% nuqtada', en: 'At 150% overshoot', ru: 'При 150% превышении' },
        ],
        correctIndex: 1,
        explanation: {
          uz: "Logistik o'sish egri chizig'ida tabiiy ko'payish tezligi populyatsiya sig'imining yarmida (50%) eng yuqori bo'ladi.",
          en: 'Under logistic growth, biological regeneration peaks at half (50%) of the ecosystem’s carrying capacity.',
          ru: 'На логистической кривой скорость естественного воспроизводства максимальна при численности в 50% от ёмкости среды.',
        },
      },
    ],
  },
];
