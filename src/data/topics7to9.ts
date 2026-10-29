import { Topic } from '../types';

export const TOPICS_7_TO_9: Topic[] = [
  {
    id: 7,
    isIndependentStudy: false,
    iconName: 'Droplets',
    title: {
      uz: 'Suv va tuproq resurslaridan foydalanish, ularni muhofaza qilish tadbirlari',
      en: 'Utilization and Conservation of Water and Soil Resources',
      ru: 'Использование водных и почвенных ресурсов, меры по их охране',
    },
    shortDescription: {
      uz: "Gidrosfera va transchegaraviy suv balansi, Orol dengizi ekologik-iqtisodiy inqirozi, Markaziy Osiyo suv hamkorligi, tuproq sho'rlanishi va eroziya.",
      en: 'Hydrosphere and transboundary water balance, Aral Sea ecological-economic crisis, Central Asian water diplomacy, soil salinization, and erosion.',
      ru: 'Гидросфера и трансграничный водный баланс, кризис Аральского моря, водное сотрудничество в ЦА, засоление и эрозия почв.',
    },
    keywords: {
      uz: ['suv resurslari', 'gidrosfera', 'Orol dengizi', 'Amudaryo', 'Sirdaryo', 'sho‘rlanish', 'eroziya', 'tomchilatib sug‘orish'],
      en: ['water resources', 'hydrosphere', 'Aral Sea', 'Amu Darya', 'Syr Darya', 'salinization', 'soil erosion', 'drip irrigation'],
      ru: ['водные ресурсы', 'гидросфера', 'Аральское море', 'Амударья', 'Сырдарья', 'засоление почв', 'эрозия', 'капельное орошение'],
    },
    sections: [
      {
        heading: {
          uz: '1. Gidrosfera, suv balansi va Markaziy Osiyo transchegaraviy hamkorligi',
          en: '1. Hydrosphere, Water Balance, and Transboundary Cooperation in Central Asia',
          ru: '1. Гидросфера, водный баланс и трансграничное сотрудничество в Центральной Азии',
        },
        paragraphs: [
          {
            uz: "O'zbekiston suv resurslarining o'ziga xos jihati ularning yuqori transchegaraviy bog'liqligidir: mamlakatda foydalaniladigan yillik yuza oqimining (o'rtacha 51–53 km³ atrofida) qariyb 80 foizi qo'shni tog'li davlatlar hududida (Pomir va Tyan-Shan muzliklarida shakllanadigan Amudaryo va Sirdaryo havzalarida) vujudga keladi, faqat ~20 foizi ichki daryolar hissasiga to'g'ri keladi.",
            en: 'Uzbekistan’s water economy exhibits acute transboundary interdependence: roughly 80% of its annual surface water supply (~51–53 km³ in average hydrological years) originates upstream in the Pamir and Tien Shan glaciers feeding the Amu Darya and Syr Darya, while ~20% forms internally.',
            ru: 'Ключевая особенность водного баланса Узбекистана — высокая трансграничность: около 80% ежегодно используемых поверхностных стоков (~51–53 км³) формируется за пределами республики в ледниках Памира и Тянь-Шаня (бассейны Амударьи и Сырдарьи), и лишь ~20% приходится на внутренние реки.',
          },
          {
            uz: "Iqlim isishi natijasida tog' muzliklarining qisqarishi va aholi sonining ko'payishi 2030-yilga borib O'zbekistonda yillik 7 km³ gacha suv tanqisligi xavfini yuzaga keltirishi mumkin. Shu bois 1992-yilda tashkil etilgan Davlatlararo suv xo'jaligini muvofiqlashtirish komissiyasi (ICWC) va Orolni qutqarish xalqaro jamg'armasi (IFAS) doirasida suv-energetika muvozanatini kelishish mintaqaviy iqtisodiy xavfsizlik poydevori hisoblanadi.",
            en: 'Accelerating glacial melt and demographic growth could create a 7 km³ annual water deficit in Uzbekistan by 2030 without efficiency reforms. Consequently, cooperative governance through the Interstate Commission for Water Coordination (ICWC) and the International Fund for Saving the Aral Sea (IFAS) anchors regional water-energy security.',
            ru: 'Таяние горных ледников и рост населения без мер водосбережения грозят дефицитом до 7 км³ воды к 2030 году. Поэтому координация водно-энергетического режима в рамках МКВК (ICWC) и Международного фонда спасения Арала (МФСА) является фундаментом региональной стабильности.',
          },
        ],
        keyTakeaway: {
          uz: "Kanallarni betonlashtirish (filtratsiya yo'qotishlarini 30–35% dan kamaytirish) va tomchilatib sug'orishga o'tish eng tezkor suv-iqtisodiy yechimdir.",
          en: 'Concrete canal lining (cutting 30–35% seepage losses) paired with pressurized drip irrigation delivers the highest cost-effectiveness per cubic meter saved.',
          ru: 'Бетонирование каналов (снижение фильтрационных потерь в 30–35%) и капельное орошение дают максимальный экономический эффект на каждый сэкономленный кубометр.',
        },
      },
      {
        heading: {
          uz: "2. Orol dengizi ekologik falokati va Orolbo'yini yashil tiklash iqtisodiyoti",
          en: '2. The Aral Sea Crisis and Green Socio-Economic Recovery in Priaralye',
          ru: '2. Кризис Аральского моря и «зелёное» возрождение Приаралья',
        },
        paragraphs: [
          {
            uz: "1960-yilda Orol dengizi 68 000 km² maydon va 1 083 km³ suv hajmi bilan dunyoda to'rtinchi eng yirik ko'l bo'lib, yiliga 40–45 ming tonna baliq ovlash sanoatini ta'minlagan. XX asr ikkinchi yarmida paxta monokulturasi uchun suvning haddan ortiq va samarasiz olinishi oqibatida dengiz hajmi 90 foizdan ko'proqqa qisqarib, qurigan tubida 5,5 mln gektardan ortiq yangi «Orolqum» cho'li paydo bo'ldi.",
            en: 'In 1960, the Aral Sea spanned 68,000 km² with 1,083 km³ of water—ranking as the world’s fourth-largest inland lake and supporting a 40,000+ tonne annual fishery. Unsustainable Soviet-era irrigation diversions shrank water volume by over 90%, exposing 5.5+ million hectares of saline seabed—the Aralkum Desert.',
            ru: 'В 1960 году Аральское море площадью 68 000 км² и объёмом 1 083 км³ было четвёртым по величине озером планеты и давало свыше 40 тыс. тонн рыбы в год. Нерациональный забор стока на монокультуру хлопчатника сократил объём моря более чем на 90%, обнажив свыше 5,5 млн га солончаковой пустыни Аралкум.',
          },
          {
            uz: "Qurigan dengiz tubidan har yili o'n millionlab tonna tuz va chang shamol orqali yuzlab kilometrga tarqalib, qishloq xo'jaligi hosildorligi va aholi salomatligiga katta iqtisodiy zarar yetkazdi. O'zbekiston tashabbusi bilan 2018-yildan buyon Orolning qurigan tubida 1,7–2,0 mln gektarga yaqin maydonda sho'rga va qurg'oqchilikka chidamli saksovul, cherkez va qoraburoq o'rmonzorlari barpo etildi hamda 2021-yilda BMT Bosh Assambleyasi Orolbo'yini «Ekologik innovatsiyalar va texnologiyalar hududi» deb e'lon qildi.",
            en: 'Toxic salt-dust plumes rising from the exposed seabed degraded surrounding croplands and public health. Since 2018, Uzbekistan has planted ~1.7–2.0 million hectares of halophytic saxaul forests across the dry seabed to stabilize soils, and in May 2021 the UN General Assembly declared the Aral Sea region a "Zone of Ecological Innovations and Technologies."',
            ru: 'Солепылевые выносы с высохшего дна наносили тяжёлый урон агросектору и здоровью людей. С 2018 года Узбекистан создал на высохшем дне Арала около 1,7–2,0 млн га защитных насаждений саксаула, а в мае 2021 года Генассамблея ООН объявила Приаралье «Зоной экологических инноваций и технологий».',
          },
        ],
      },
      {
        heading: {
          uz: "3. Tuproq sho'rlanishi, eroziya va melioratsiya tadbirlari",
          en: '3. Soil Salinization, Erosion, and Land Melioration Economics',
          ru: '3. Засоление почв, эрозия и экономика мелиоративных мероприятий',
        },
        paragraphs: [
          {
            uz: "Unumdor tuproqning 1 santimetr gumus qatlami tabiatda 100–300 yil davomida shakllanadi. Ammo sizot (yer osti) suvlari sathining ko'tarilishi, eskirgan kollektor-drenaj tarmoqlari hamda me'yordan ortiq bostirib sug'orish tufayli O'zbekistondagi sug'oriladigan yerlarning qariyb 45–47 foizi turli darajada sho'rlangan (ayniqsa Qoraqalpog'iston, Xorazm, Buxoro va Sirdaryo viloyatlarida).",
            en: 'Forming just 1 centimeter of fertile humus topsoil takes nature 100–300 years. Yet rising saline water tables, aging drainage collectors, and flood irrigation have left roughly 45–47% of Uzbekistan’s irrigated cropland affected by varying degrees of salinization—most acutely in Karakalpakstan, Khorezm, Bukhara, and Syrdarya.',
            ru: 'Формирование 1 см плодородного гумусового горизонта занимает в природе 100–300 лет. Из-за подъёма минерализованных грунтовых вод и устаревшего дренажа около 45–47% орошаемых земель Узбекистана подвержены различной степени засоления (особенно в Каракалпакстане, Хорезме, Бухаре и Сырдарье).',
          },
          {
            uz: "O'rtacha va kuchli sho'rlangan yerlarda paxta va g'alla hosildorligi 20 foizdan 50 foizgacha pasayib ketadi. Iqtisodiy jihatdan samarali himoya choralariga: yopiq gorizontal va vertikal drenajlarni modernizatsiya qilish, almashlab ekishda dukkakli (beda, mosh) ekinlar ulushini oshirish, nol ishlov berish (No-Till) agrotexnologiyasi hamda suv tejovchi tizimlarni kengaytirish kiradi.",
            en: 'Moderate-to-severe soil salinity depresses cotton and wheat yields by 20–50%. High-return agronomic remedies include modernizing subsurface drainage, reintroducing nitrogen-fixing alfalfa rotations, adopting conservation No-Till farming, and scaling drip and sprinkler irrigation.',
            ru: 'На средне- и сильнозасолённых почвах урожайность падает на 20–50%. Экономически эффективные меры включают реконструкцию коллекторно-дренажной сети, севообороты с люцерной и бобовыми, технологию нулевой вспашки (No-Till) и водосберегающий полив.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '~80%',
        unit: { uz: 'transchegaraviy oqim', en: 'transboundary', ru: 'трансграничный сток' },
        label: {
          uz: "O'zbekiston foydalanadigan yuza suv resurslarining qo'shni davlatlarda shakllanadigan qismi",
          en: 'Share of Uzbekistan’s surface water originating outside national borders',
          ru: 'Доля поверхностных вод Узбекистана, формирующаяся за пределами страны',
        },
        year: '2023',
        source: { uz: 'Suv xo‘jaligi vazirligi / FAO AQUASTAT', en: 'Ministry of Water Resources / FAO', ru: 'Минводхоз РУз / ФАО AQUASTAT' },
      },
      {
        value: '90%+',
        unit: { uz: 'hajm qisqarishi', en: 'volume loss', ru: 'сокращение объёма' },
        label: {
          uz: "1960-yilga nisbatan Orol dengizi suv hajmining kamayishi (1 083 km³ dan ~75 km³ gacha)",
          en: 'Shrinkage of Aral Sea water volume since 1960 (1,083 km³ to ~75 km³)',
          ru: 'Сокращение объёма воды Аральского моря с 1960 года (с 1 083 до ~75 км³)',
        },
        year: '2024',
        source: { uz: 'SIC ICWC / UNEP', en: 'SIC ICWC / UNEP', ru: 'НИЦ МКВК / ЮНЕП' },
      },
      {
        value: '~46%',
        unit: { uz: 'sug‘oriladigan yer', en: 'irrigated land', ru: 'орошаемой пашни' },
        label: {
          uz: "O'zbekistonda turli darajada sho'rlanishga uchragan sug'oriladigan yerlar ulushi",
          en: 'Share of Uzbekistan’s irrigated cropland affected by soil salinity',
          ru: 'Доля орошаемых земель Узбекистана, подверженных засолению',
        },
        year: '2023',
        source: { uz: 'Qishloq xo‘jaligi vazirligi / FAO', en: 'Ministry of Agriculture / FAO', ru: 'Минсельхоз РУз / ФАО' },
        isApproximate: true, // TODO: tekshiring (45–47% oralig'ida rasmiy kadastr hisobotlarida)
      },
      {
        value: '1.7+',
        unit: { uz: 'mln gektar', en: 'mln hectares', ru: 'млн га' },
        label: {
          uz: 'Orol dengizining qurigan tubida barpo etilgan saksovul va cho‘l yashil o‘rmonzorlari',
          en: 'Halophytic green forest cover planted on the dry Aral seabed in Uzbekistan',
          ru: 'Площадь защитных лесонасаждений (саксаул) на высохшем дне Арала',
        },
        year: '2023',
        source: { uz: 'O‘rmon xo‘jaligi agentligi / UNDP', en: 'Forestry Agency of Uzbekistan / UNDP', ru: 'Агентство лесного хозяйства РУз / ПРООН' },
      },
    ],
    charts: [
      {
        id: 't7-aral-volume',
        type: 'area',
        title: {
          uz: 'Orol dengizi suv yuzasi maydonining tarixiy o‘zgarishi (ming km²)',
          en: 'Historical Contraction of Aral Sea Water Surface Area (Thousand km²)',
          ru: 'Историческое изменение площади акватории Аральского моря (тыс. км²)',
        },
        subtitle: {
          uz: '1960–2024-yillardagi gidrologik qisqarish dinamikasi',
          en: 'Hydrological surface trajectory from 1960 baseline to 2024',
          ru: 'Динамика водного зеркала с базового 1960 года по 2024 год',
        },
        source: { uz: 'SIC ICWC / NASA Earth Observatory', en: 'SIC ICWC / NASA Earth Observatory', ru: 'НИЦ МКВК / NASA Earth Observatory' },
        unit: 'ming km²',
        seriesName: { uz: 'Maydon (ming km²)', en: 'Surface Area (k km²)', ru: 'Площадь (тыс. км²)' },
        data: [
          { name: '1960', value: 68.0 },
          { name: '1976', value: 55.7 },
          { name: '1989', value: 39.7 },
          { name: '2000', value: 23.4 },
          { name: '2010', value: 13.9 },
          { name: '2024', value: 7.2 },
        ],
      },
      {
        id: 't7-salinity-yield',
        type: 'bar',
        title: {
          uz: 'Tuproq sho‘rlanish darajasiga ko‘ra qishloq xo‘jaligi hosildorligi yo‘qotilishi (%)',
          en: 'Average Crop Yield Loss by Soil Salinity Severity (%)',
          ru: 'Средние потери урожайности в зависимости от степени засоления почв (%)',
        },
        subtitle: {
          uz: 'Meliorativ holat yomonlashuvining bevosita agroiqtisodiy zarari',
          en: 'Direct farm-income penalty from deteriorating soil melioration',
          ru: 'Прямой агроэкономический ущерб от ухудшения мелиоративного состояния',
        },
        source: { uz: 'FAO / Markaziy Osiyo melioratsiya tadqiqotlari', en: 'FAO / Central Asia Irrigation Studies', ru: 'ФАО / НИИ ирригации и мелиорации' },
        unit: '%',
        seriesName: { uz: 'Hosildorlik yo‘qotilishi (%)', en: 'Yield Penalty (%)', ru: 'Потеря урожая (%)' },
        data: [
          { name: { uz: 'Sho‘rlanmagan', en: 'Non-saline', ru: 'Незасолённые' }, value: 0 },
          { name: { uz: 'Kuchsiz sho‘rlangan', en: 'Slightly saline', ru: 'Слабозасолённые' }, value: 15 },
          { name: { uz: 'O‘rtacha sho‘rlangan', en: 'Moderately saline', ru: 'Среднезасолённые' }, value: 35 },
          { name: { uz: 'Kuchli sho‘rlangan', en: 'Severely saline', ru: 'Сильнозасолённые' }, value: 65 },
        ],
      },
    ],
    laws: [
      {
        id: 't7-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Suv va suvdan foydalanish to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Water and Water Use"',
          ru: 'Закон Республики Узбекистан «О воде и водопользовании»',
        },
        codeAndDate: {
          uz: '06.05.1993-yil, 837-XII-son (yangi Suv kodeksi islohotlari bilan uyg‘unlashtirilmoqda)',
          en: 'May 6, 1993, No. 837-XII',
          ru: '06.05.1993 г., № 837-XII',
        },
        summary: {
          uz: "Yagona davlat suv fondini boshqarish, ichimlik suvining ustuvorligini ta'minlash, suv olish limitlari va suv obyektlarini ifloslanishdan muhofaza qilish tartibini belgilaydi.",
          en: 'Regulates the Unified State Water Fund, drinking water priority, withdrawal quotas, and pollution prevention.',
          ru: 'Регулирует управление единым госводфондом, приоритет питьевого водоснабжения, лимиты водозабора и охрану водоёмов.',
        },
        significance: {
          uz: "Suv tanqis hududlarda kvotalash va suv tejovchi texnologiyalarga huquqiy ustuvorlik beradi.",
          en: 'Provides the statutory mandate for strict water metering and agricultural withdrawal limits.',
          ru: 'Закрепляет правовую основу лимитирования водопользования и обязательного водоучёта.',
        },
      },
      {
        id: 't7-law-2',
        type: 'presidential',
        title: {
          uz: "O'zbekiston Respublikasi suv xo'jaligini rivojlantirishning 2020–2030-yillarga mo'ljallangan konsepsiyasi",
          en: 'Concept for Water Sector Development of the Republic of Uzbekistan for 2020–2030',
          ru: 'Концепция развития водного хозяйства Республики Узбекистан на 2020–2030 годы',
        },
        codeAndDate: {
          uz: 'PF-6024-son Farmon, 10.07.2020-yil',
          en: 'Presidential Decree No. PF-6024, July 10, 2020',
          ru: 'Указ Президента № УП-6024 от 10.07.2020 г.',
        },
        summary: {
          uz: "Suv tejovchi sug'orish texnologiyalari bilan qamrab olingan maydonni 2 mln gektarga yetkazish, «Smart Water» datchiklarini o'rnatish va magistral kanallar FIKini oshirishni belgilaydi.",
          en: 'Targets expanding water-saving irrigation to 2 million hectares, installing digital "Smart Water" telemetry, and raising canal efficiency.',
          ru: 'Ставит цель расширить водосберегающие технологии до 2 млн га, внедрить систему «Smart Water» и повысить КПД оросительных систем.',
        },
        significance: {
          uz: "Yiliga 7–10 mlrd m³ suvni iqtisod qilish va sho'rlangan maydonlar ulushini qisqartirishga xizmat qiladi.",
          en: 'Aims to save 7–10 billion m³ of water annually while lowering waterlogged saline land area.',
          ru: 'Позволяет экономить миллиарды кубометров воды в год и снижать площадь засолённых угодий.',
        },
      },
      {
        id: 't7-law-3',
        type: 'international',
        title: {
          uz: "BMT Bosh Assambleyasining Orolbo'yi mintaqasini «Ekologik innovatsiyalar va texnologiyalar hududi» deb e'lon qilish to'g'risidagi maxsus rezolyutsiyasi",
          en: 'UN General Assembly Resolution Declaring the Aral Sea Region a Zone of Ecological Innovations and Technologies',
          ru: 'Резолюция Генассамблеи ООН об объявлении Приаралья зоной экологических инноваций и технологий',
        },
        codeAndDate: {
          uz: 'A/RES/75/278-son, 18.05.2021-yil',
          en: 'UNGA Resolution A/RES/75/278, May 18, 2021',
          ru: 'Резолюция ГА ООН A/RES/75/278 от 18.05.2021 г.',
        },
        summary: {
          uz: "Orolbo'yiga yashil texnologiyalar, sho'rga chidamli bio-qishloq xo'jaligi investitsiyalari va BMT Trast jamg'armasi grantlarini jalb etishning xalqaro maqomini tasdiqladi.",
          en: 'Mobilizes international R&D, green finance, and UN Multi-Partner Human Security Trust Fund investments for the Aral Sea basin.',
          ru: 'Мобилизует международные гранты, зелёные инвестиции и научные технологии в регион Приаралья через Многопартнёрский трастовый фонд ООН.',
        },
        significance: {
          uz: "O'zbekistonning global iqlim va suv diplomatiyasidagi tarixiy muvaffaqiyatidir.",
          en: 'Marks a landmark achievement of Uzbekistan’s environmental diplomacy at the United Nations.',
          ru: 'Историческое достижение экологической дипломатии Узбекистана на площадке ООН.',
        },
      },
    ],
    facts: [
      {
        uz: "1 gektar katta yoshli saksovul o'rmonzori yiliga shamol ko'taradigan 800–1 000 tonnagacha qum va zaharli tuz zarrachalarini tutib qolish xususiyatiga ega.",
        en: 'One hectare of mature saxaul shrub forest on the Aralkum seabed traps 800–1,000 tonnes of windblown salt and sand annually.',
        ru: 'Один гектар взрослого саксаульника на дне Аралкума удерживает от ветрового переноса до 800–1 000 тонн песка и солевой пыли в год.',
      },
      {
        uz: "O'zbekistondagi tuproq kanal o'zanlarida suvning 30–35 foizi dalaga yetib bormasdanoq yerga singib (filtratsiya bo'lib), sizot suvlarini ko'taradi va ikkilamchi sho'rlanishni kuchaytiradi.",
        en: 'Unlined earthen canals lose 30–35% of diverted water to seepage before reaching fields, raising saline groundwater tables.',
        ru: 'В земляных руслах оросительных каналов теряется до 30–35% воды на фильтрацию, что одновременно вызывает подъём солёных грунтовых вод.',
      },
      {
        uz: "BMT huzuridagi Orolbo'yi mintaqasi uchun Inson xavfsizligi bo'yicha ko'p sheriklik Trast jamg'armasi (MPHSTF) Mo'ynoq va Qoraqalpog'iston tumanlarida o'nlab toza ichimlik suvi, tibbiyot va yashil tadbirkorlik loyihalarini moliyalashtirgan.",
        en: 'The UN Multi-Partner Human Security Trust Fund for the Aral Sea Region has financed reverse-osmosis drinking water plants, clinics, and green jobs in Muynak and Karakalpakstan.',
        ru: 'Многопартнёрский трастовый фонд ООН для Приаралья профинансировал десятки проектов по опреснению питьевой воды, медицине и зелёной занятости в Каракалпакстане.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Paxtachilik va bog'dorchilik klasterlarida tomchilatib sug'orishning mikroiqtisodiy samaradorligi",
        en: 'Microeconomic Payback of Drip Irrigation in Uzbekistan’s Agro-Clusters',
        ru: 'Микроэкономическая окупаемость капельного орошения в агрокластерах Узбекистана',
      },
      location: {
        uz: 'Samarqand, Jizzax va Qashqadaryo viloyatlari fermer va klaster xo‘jaliklari',
        en: 'Samarkand, Jizzakh & Kashkadarya Agro-Clusters, Uzbekistan',
        ru: 'Фермерские хозяйства и агрокластеры Самаркандской, Джизакской и Кашкадарьинской областей',
      },
      challenge: {
        uz: "Yozgi vegetatsiya davrida suv tanqisligi, nasos elektr energiyasi xarajatlarining oshishi va an'anaviy egatlab sug'orishda mineral o'g'itlarning yuvilib ketishi.",
        en: 'Summer water shortages, rising pumping electricity bills, and fertilizer leaching under traditional furrow flood irrigation.',
        ru: 'Летний дефицит поливной воды, рост затрат на электроэнергию насосных станций и вымывание удобрений при бороздковом поливе.',
      },
      solution: {
        uz: "Davlat subsidiyasi va imtiyozli kredit yordamida filtrli tomchilatib sug'orish va fertigatsiya (o'g'itni suv bilan tomchilatib berish) tizimi o'rnatildi.",
        en: 'Backed by per-hectare state subsidies and water-tax exemptions, farms installed automated drip irrigation with precision fertigation.',
        ru: 'При поддержке госсубсидий и налоговых льгот внедрены системы капельного полива с фертигацией (точной подачей удобрений к корням).',
      },
      economicOutcome: {
        uz: "Suv sarfi 40–50% ga, azotli o'g'it va dizel sarfi 30–35% ga qisqardi, paxta hosildorligi esa gektariga 10–15 sentnerga oshib, tizim o'zini 2,5–3 mavsumda qopladi.",
        en: 'Water use dropped 40–50%, fertilizer and fuel inputs fell 30–35%, cotton yields jumped 1.0–1.5 t/ha, achieving full capital payback within 2.5–3 seasons.',
        ru: 'Расход воды сократился на 40–50%, удобрений и ГСМ — на 30–35%, урожайность хлопка выросла на 10–15 ц/га при окупаемости за 2,5–3 сезона.',
      },
    },
    terms: [
      {
        term: { uz: 'Ikkilamchi sho‘rlanish', en: 'Secondary Salinization', ru: 'Вторичное засоление почв' },
        definition: {
          uz: "Noto'g'ri sug'orish va drenaj yetishmasligi natijasida minerallashgan yer osti suvlarining bug'lanib, tuproq yuzasida tuz to'planishi.",
          en: 'Accumulation of soluble salts in the root zone caused by rising groundwater tables from excessive un-drained irrigation.',
          ru: 'Накопление водорастворимых солей в корнеобитаемом слое из-за подъёма грунтовых вод при нерациональном поливе.',
        },
      },
      {
        term: { uz: 'Fertigatsiya', en: 'Fertigation', ru: 'Фертигация' },
        definition: {
          uz: "Tomchilatib sug'orish tizimi orqali erigan mineral o'g'itlarni bevosita o'simlik ildiz zonasiga me'yorlab yetkazib berish texnologiyasi.",
          en: 'Precision injection of dissolved fertilizers directly into crop root zones through a drip irrigation network.',
          ru: 'Технология точной подачи растворённых удобрений непосредственно в прикорневую зону вместе с капельным поливом.',
        },
      },
      {
        term: { uz: 'Transchegaraviy suv oqimi', en: 'Transboundary Watercourse', ru: 'Трансграничный водоток' },
        definition: {
          uz: "Ikki yoki undan ortiq davlat chegaralarini kesib o'tuvchi yoxud chegarani tashkil etuvchi daryo va suv havzalari.",
          en: 'Surface or groundwater systems that cross or mark political boundaries between two or more sovereign states.',
          ru: 'Реки, озёра и водоносные горизонты, пересекающие государственные границы двух или более стран.',
        },
      },
      {
        term: { uz: 'Fitomelioratsiya', en: 'Phytomelioration', ru: 'Фитомелиорация' },
        definition: {
          uz: "Sho'r va eroziyaga uchragan yerlarni maxsus o'simliklar (saksovul, cherkez, beda) ekish orqali biologik sog'lomlashtirish.",
          en: 'Biological rehabilitation of degraded or saline soils by planting salt- and drought-adapted vegetation such as saxaul.',
          ru: 'Оздоровление деградированных и засолённых земель путём культивирования устойчивых растений-мелиорантов (саксаул, люцерна).',
        },
      },
    ],
    quiz: [
      {
        id: 'q7-1',
        question: {
          uz: "O'zbekiston foydalanadigan yuza suv resurslarining taxminan necha foizi qo'shni davlatlar hududida shakllanadi?",
          en: 'Approximately what percentage of Uzbekistan’s surface water supply originates outside its borders?',
          ru: 'Около скольких процентов поверхностных водных ресурсов Узбекистана формируется за пределами республики?',
        },
        options: [
          { uz: 'Taxminan 80%', en: 'Approximately 80%', ru: 'Около 80%' },
          { uz: 'Atigi 10%', en: 'Only 10%', ru: 'Всего 10%' },
          { uz: '0% (barchasi ichki daryolar)', en: '0% (entirely domestic)', ru: '0% (весь сток внутренний)' },
          { uz: '25%', en: '25%', ru: '25%' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Amudaryo va Sirdaryo oqimining ~80 foizi yuqori oqimdagi tog' muzliklarida shakllanadi, bu esa transchegaraviy hamkorlik ahamiyatini oshiradi.",
          en: 'Roughly 80% of Uzbekistan’s surface water flows in from upstream glacial basins via the Amu Darya and Syr Darya.',
          ru: 'Около 80% поверхностного стока поступает по трансграничным рекам Амударья и Сырдарья.',
        },
      },
      {
        id: 'q7-2',
        question: {
          uz: "BMT Bosh Assambleyasi 2021-yil 18-mayda Orolbo'yi mintaqasiga qanday xalqaro maqom berdi?",
          en: 'What special designation did the UN General Assembly grant the Aral Sea region on May 18, 2021?',
          ru: 'Какой международный статус Генеральная Ассамблея ООН присвоила Приаралью 18 мая 2021 года?',
        },
        options: [
          { uz: 'Ekologik innovatsiyalar va texnologiyalar hududi', en: 'Zone of Ecological Innovations and Technologies', ru: 'Зона экологических инноваций и технологий' },
          { uz: 'Erkin offshor bank hududi', en: 'Offshore banking haven', ru: 'Офшорная банковская зона' },
          { uz: 'Yopiq harbiy poligon', en: 'Restricted military zone', ru: 'Закрытый полигон' },
          { uz: 'Erkin ko‘mir eksport zonasi', en: 'Coal export free zone', ru: 'Зона экспорта угля' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "A/RES/75/278-sonli rezolyutsiya bilan Orolbo'yi «Ekologik innovatsiyalar va texnologiyalar hududi» deb e'lon qilindi.",
          en: 'UNGA Resolution A/RES/75/278 officially designated the Aral Sea region a Zone of Ecological Innovations and Technologies.',
          ru: 'Резолюцией A/RES/75/278 Приаралье объявлено Зоной экологических инноваций и технологий.',
        },
      },
      {
        id: 'q7-3',
        question: {
          uz: "Orol dengizining qurigan tubida qum va tuz ko'chishini to'xtatish uchun asosan qaysi o'simlik ekilmoqda?",
          en: 'Which halophytic desert plant is primarily used to stabilize salt-dust soils on the dry Aral seabed?',
          ru: 'Какое растение-галофит массово высаживается на высохшем дне Аральского моря для закрепления солончаков?',
        },
        options: [
          { uz: 'Saksovul (va cherkez)', en: 'Saxaul (Haloxylon)', ru: 'Саксаул (и черкез)' },
          { uz: 'Tropik bambuk', en: 'Tropical bamboo', ru: 'Тропический бамбук' },
          { uz: 'Evkalipt', en: 'Swamp eucalyptus', ru: 'Болотный эвкалипт' },
          { uz: 'Sholi', en: 'Paddy rice', ru: 'Рис' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Chuqur ildiz otuvchi saksovul suvsizlik va kuchli sho'rlanishga chidamli bo'lib, gektariga yuzlab tonna qum-tuzni ushlab qoladi.",
          en: 'Deep-rooted saxaul thrives in hyper-arid saline soils and anchors hundreds of tonnes of dust per hectare.',
          ru: 'Саксаул отличается глубокой корневой системой, высокой соле- и засухоустойчивостью, эффективно закрепляя пески.',
        },
      },
      {
        id: 'q7-4',
        question: {
          uz: "Tomchilatib sug'orish tizimi an'anaviy egatlab sug'orishga nisbatan o'rtacha qancha suvni tejaydi?",
          en: 'Roughly how much irrigation water does drip technology save compared to conventional furrow flooding?',
          ru: 'Какую экономию поливной воды в среднем обеспечивает капельное орошение по сравнению с бороздковым поливом?',
        },
        options: [
          { uz: '40–50% atrofida', en: 'Roughly 40–50%', ru: 'Около 40–50%' },
          { uz: 'Atigi 1–2%', en: 'Only 1–2%', ru: 'Всего 1–2%' },
          { uz: 'Suv sarfini 2 barobar oshiradi', en: 'Doubles water consumption', ru: 'Удваивает расход воды' },
          { uz: '0%', en: '0%', ru: '0%' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Tomchilatib sug'orish bug'lanish va filtratsiyani keskin qisqartirib, suvni 40–50% gacha tejaydi va hosildorlikni oshiradi.",
          en: 'By eliminating furrow runoff and evaporation, drip irrigation routinely saves 40–50% of water while boosting yields.',
          ru: 'Капельный полив устраняет поверхностный сброс и фильтрацию, экономя 40–50% воды при одновременном росте урожая.',
        },
      },
      {
        id: 'q7-5',
        question: {
          uz: "2020–2030-yillarda O'zbekiston suv xo'jaligini rivojlantirish konsepsiyasi qaysi hujjat bilan tasdiqlangan?",
          en: 'Which Presidential Decree approved Uzbekistan’s Water Sector Development Concept for 2020–2030?',
          ru: 'Каким указом утверждена Концепция развития водного хозяйства Узбекистана на 2020–2030 годы?',
        },
        options: [
          { uz: 'PF-6024-son Farmon (10.07.2020)', en: 'Decree No. PF-6024 (July 10, 2020)', ru: 'Указ № УП-6024 (10.07.2020 г.)' },
          { uz: 'Mehnat kodeksi', en: 'Labor Code', ru: 'Трудовой кодекс' },
          { uz: 'Jinoyat kodeksi', en: 'Criminal Code', ru: 'Уголовный кодекс' },
          { uz: 'Oila kodeksi', en: 'Family Code', ru: 'Семейный кодекс' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "PF-6024-son Farmon 2030-yilgacha 2 mln ga maydonda suv tejovchi texnologiyalarni joriy etish va raqamlashtirishni belgilaydi.",
          en: 'Presidential Decree No. PF-6024 sets Uzbekistan’s 2020–2030 water modernization and Smart Water benchmarks.',
          ru: 'Указ Президента № УП-6024 от 10.07.2020 г. определил стратегические показатели модернизации водного хозяйства до 2030 года.',
        },
      },
    ],
  },

  {
    id: 8,
    isIndependentStudy: false,
    iconName: 'Trees',
    title: {
      uz: 'Biologik resurslar va alohida muhofaza qilinadigan hududlar. Inson ekologiyasi',
      en: 'Biological Resources, Protected Natural Areas, and Human Ecology',
      ru: 'Биологические ресурсы и особо охраняемые природные территории. Экология человека',
    },
    shortDescription: {
      uz: "Biologik xilma-xillik iqtisodiyoti, qo'riqxona va milliy bog'lar tarmog'i, O'zbekiston florasi va dorivor resurslari, demografiya va rekreatsiya.",
      en: 'Biodiversity economics, protected areas network, Uzbekistan’s flora and medicinal resources, demographic pressures, and recreation.',
      ru: 'Экономика биоразнообразия, сеть заповедников и нацпарков, растительные ресурсы Узбекистана, демография и рекреационные ресурсы.',
    },
    keywords: {
      uz: ['bioxilma-xillik', 'qo‘riqxona', 'milliy bog‘', 'Qizil kitob', 'dorivor o‘simliklar', 'rekreatsiya', 'ekoturizm', 'Kunming-Monreal'],
      en: ['biodiversity', 'protected areas', 'national parks', 'Red Data Book', 'medicinal plants', 'recreation', 'ecotourism'],
      ru: ['биоразнообразие', 'заповедники', 'национальные парки', 'Красная книга', 'лекарственные растения', 'экотуризм', 'рекреация'],
    },
    sections: [
      {
        heading: {
          uz: '1. Biologik xilma-xillikning iqtisodiy qiymati va global xatarlar',
          en: '1. Economic Value of Biodiversity and Global Extinction Risks',
          ru: '1. Экономическая ценность биоразнообразия и глобальные риски',
        },
        paragraphs: [
          {
            uz: "Biologik xilma-xillik (genetik, tur va ekotizim darajasidagi xilma-xillik) — qishloq xo'jaligi seleksiyasi, farmatsevtika sanoati, oziq-ovqat barqarorligi va ekotizimlar moslashuvchanligining «tirik sug'urta fondi»dir. Buyuk Britaniya Moliya vazirligi uchun tayyorlangan mashhur «Dasgupta ma'ruzasi» (The Economics of Biodiversity, 2021) bioxilma-xillikni moliyaviy portfeldagi diversifikatsiyaga qiyoslaydi: turlar kamaygan sari tabiiy kapital portfelining xatari keskin oshadi.",
            en: 'Biodiversity—spanning genetic, species, and ecosystem diversity—acts as civilization’s biological insurance portfolio underpinning crop breeding, modern pharmaceuticals, and ecological resilience. Partha Dasgupta’s landmark "Economics of Biodiversity" review (2021) demonstrates that eroding biodiversity raises systemic macroeconomic risk just like an undiversified asset portfolio.',
            ru: 'Биологическое разнообразие (генетическое, видовое и экосистемное) выступает «страховым фондом» селекции, фармацевтики и продовольственной устойчивости. В фундаментальном «Докладе Дасгупты» (2021) биоразнообразие сравнивается с диверсификацией инвестиционного портфеля: утрата видов резко повышает системный риск природного капитала.',
          },
          {
            uz: "WWF «Tirik sayyora» hisoboti va IPBES ma'lumotlariga ko'ra, yashash muhitining torayishi, ifloslanish, invaziv turlar va iqlim o'zgarishi tufayli 1 millionga yaqin o'simlik va hayvon turlari yo'qolib ketish xavfi ostida turibdi. 2022-yilda qabul qilingan Kunming-Monreal global bioxilma-xillik dasturi («30x30» maqsadi) 2030-yilgacha Yer quruqligi va okeanlarining kamida 30 foizini muhofaza ostiga olishni belgiladi.",
            en: 'According to IPBES, habitat fragmentation, overexploitation, pollution, and climate shifts threaten roughly 1 million plant and animal species with extinction. In response, the 2022 Kunming-Montreal Global Biodiversity Framework established the "30x30" target—conserving at least 30% of global land and oceans by 2030.',
            ru: 'По оценке IPBES, около 1 миллиона видов растений и животных находятся под угрозой исчезновения. Принятая в 2022 году Куньминско-Монреальская рамочная программа закрепила глобальную цель «30x30» — взять под охрану не менее 30% суши и мирового океана к 2030 году.',
          },
        ],
        keyTakeaway: {
          uz: "Zamonaviy tibbiyotda qo'llaniladigan dori vositalarining 50% ga yaqini bevosita yovvoyi o'simliklar, zamburug'lar va bioresurslar molekulalariga asoslangan.",
          en: 'Roughly half of modern pharmaceutical compounds derive directly from or are inspired by wild plant, fungal, and biological molecules.',
          ru: 'Около половины современных лекарственных препаратов созданы на основе или по образцу природных соединений дикорастущей флоры и биоресурсов.',
        },
      },
      {
        heading: {
          uz: "2. O'zbekiston o'simlik va hayvonot dunyosi, muhofaza etiladigan tabiiy hududlar",
          en: '2. Uzbekistan’s Flora, Fauna, and Protected Natural Areas Network',
          ru: '2. Флора, фауна и система охраняемых природных территорий Узбекистана',
        },
        paragraphs: [
          {
            uz: "O'zbekiston hududida 4 300 dan ortiq yovvoyi yuksak o'simlik turlari (shundan ~8–9 foizi endemik, ya'ni faqat shu mintaqaga xos) hamda 15 000 dan ortiq hayvon va umurtqasizlar turlari uchraydi. Ulardan 1 100 dan ziyod o'simlik turi dorivor xususiyatga ega bo'lib (kovrak, qizilmiya/shirinmiya, na'matak, kiyiko't, shuvoq), farmatsevtika eksporti va qishloq aholisi daromadida yuqori iqtisodiy o'rin tutadi.",
            en: 'Uzbekistan hosts over 4,300 vascular plant species (~8–9% regional endemics) and more than 15,000 vertebrate and invertebrate animal species. Over 1,100 native plants possess medicinal value—including ferula (kovrak), licorice root, rosehip, and wild thyme—supporting a thriving phyto-pharmaceutical export sector.',
            ru: 'Флора Узбекистана насчитывает свыше 4 300 видов дикорастущих высших растений (около 8–9% — эндемики), а фауна — более 15 000 видов. Свыше 1 100 видов растений обладают лекарственными свойствами (ферула, солодка, шиповник, зизифора), формируя экспортно-ориентированный фитофармацевтический кластер.',
          },
          {
            uz: "Noyob genofondni (qor qoploni — ilvirs, Buxoro bug'usi, sayg'oq, jayron, G'arbiy Tyan-Shan yovvoyi olma va lolalarini) asrash uchun O'zbekistonda davlat qo'riqxonalari (Zomin, Hisor, Surxon, Qizilqum, Nurota, Chotqol), tabiat milliy bog'lari (Ugam-Chotqol, Zomin, Zarafshon, Janubiy Ustyurt, Orolqum va b.) hamda biosfera rezervatlari tarmog'i kengaytirilib, umumiy muhofaza etiladigan hududlar ulushi mamlakat maydonining ~14 foiziga yetkazildi.",
            en: 'To safeguard flagship species—snow leopard, Bukhara deer, saiga antelope, goitered gazelle, and wild Tien Shan tulips—Uzbekistan has expanded strict nature reserves (Hisor, Zaamin, Surkhan, Nurata, Chatkal), national parks (Ugam-Chatkal, Southern Ustyurt, Aralkum), and biosphere reserves to roughly 14% of national territory.',
            ru: 'Для сохранения снежного барса, бухарского оленя, сайгака, джейрана и диких тюльпанов Тянь-Шаня в Узбекистане расширена сеть заповедников (Гиссарский, Зааминский, Сурханский, Нуратинский), национальных парков (Угам-Чаткальский, Южный Устюрт, Аралкум) и заказников, охватившая около 14% территории страны.',
          },
        ],
      },
      {
        heading: {
          uz: '3. Inson ekologiyasi, demografik yuklama va rekreatsion resurslar',
          en: '3. Human Ecology, Demographic Pressure, and Recreational Economics',
          ru: '3. Экология человека, демографическая нагрузка и рекреационные ресурсы',
        },
        paragraphs: [
          {
            uz: "Inson ekologiyasi urbanizatsiya va aholi zichligi ortib borayotgan sharoitda inson salomatligi, ruhiy tetikligi va tabiiy rekreatsion muhit o'rtasidagi bog'liqlikni o'rganadi. O'zbekiston aholisi 37 milliondan oshgan bir davrda tog' va suvbo'yi rekreatsion zonalariga (Bo'stonliq/Chimyon, Zomin, Kitob, Boysun, Aydarko'l) dam oluvchilar oqimi keskin ko'paymoqda.",
            en: 'Human ecology examines how urban density, lifestyle stressors, and access to restorative natural landscapes shape physical and mental well-being. As Uzbekistan’s population surpasses 37 million, domestic tourism demand on mountain and lakeside recreational zones—Bostanlyk, Zaamin, Kitab, Boysun, and Aydarkul—has surged.',
            ru: 'Экология человека исследует взаимосвязь урбанизации, плотности населения и доступа к оздоровительным природным ландшафтам. С ростом населения Узбекистана свыше 37 млн человек резко возрастает рекреационная нагрузка на горные и озёрные курорты (Бостанлык, Заамин, Байсун, Айдаркуль).',
          },
          {
            uz: "Rekreatsion iqtisodiyotda «rekreatsion sig'im» tushunchasi hal qiluvchi ahamiyatga ega: agar 1 gektar o'rmon-tog' maydoniga ruxsat etilgan me'yordan ko'p sayyoh kiritilsa, tuproq zichlashib (digressiya), ekotizim o'z jozibadorligini va daromad keltirish qobiliyatini yo'qotadi. Ekologik so'qmoqlar, kirish kvotalari va pullik ekoturizm infratuzilmasi ushbu muvozanatni ta'minlaydi.",
            en: 'Managing these assets requires respecting "recreational carrying capacity": exceeding visitor thresholds compacts forest soils and degrades the very natural amenities tourists pay to experience. Designated eco-trails, tiered entry fees, and waste-free glamping infrastructure sustain long-term tourism revenues.',
            ru: 'Управление рекреационными зонами опирается на норматив «рекреационной ёмкости»: превышение допустимого потока туристов вызывает вытаптывание почв (дигрессию) и потерю привлекательности курорта. Обустроенные экотропы и регулируемый экотуризм сохраняют баланс.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '30%',
        unit: { uz: '2030 global maqsad', en: '2030 global goal', ru: 'цель к 2030 г.' },
        label: {
          uz: 'Kunming-Monreal «30x30» kelishuvi bo‘yicha muhofaza qilinadigan quruqlik va okean ulushi',
          en: 'Global land and ocean conservation target under the Kunming-Montreal 30x30 pact',
          ru: 'Глобальная цель охраны суши и океана по Куньминско-Монреальской программе «30x30»',
        },
        year: '2030',
        source: { uz: 'BMT Bioxilma-xillik konvensiyasi (CBD COP15)', en: 'UN CBD COP15', ru: 'Конвенция ООН о биоразнообразии (КС-15)' },
      },
      {
        value: '~14%',
        unit: { uz: 'hudud ulushi', en: 'of land area', ru: 'территории РУз' },
        label: {
          uz: "O'zbekistonda muhofaza etiladigan tabiiy hududlarning mamlakat maydonidagi ulushi",
          en: 'Share of Uzbekistan’s total land area under protected natural status',
          ru: 'Доля особо охраняемых природных территорий в площади Узбекистана',
        },
        year: '2024',
        source: { uz: 'Ekologiya vazirligi / UNDP Uzbekistan', en: 'Ministry of Ecology / UNDP Uzbekistan', ru: 'Минэкологии РУз / ПРООН' },
        isApproximate: true, // TODO: tekshiring (~14.08% atrofida 6,3+ mln gektar yangi milliy bog'lar bilan)
      },
      {
        value: '4 300+',
        unit: { uz: 'o‘simlik turlari', en: 'plant species', ru: 'видов растений' },
        label: {
          uz: "O'zbekiston yovvoyi florasidagi yuksak o'simlik turlari (1 100+ dorivor turlar)",
          en: 'Wild vascular plant species in Uzbekistan (including 1,100+ medicinal species)',
          ru: 'Видов дикорастущих высших растений флоры Узбекистана (1 100+ лекарственных)',
        },
        year: '2023',
        source: { uz: "O'zR FA Botanika instituti / Qizil kitob", en: 'Institute of Botany, Academy of Sciences', ru: 'Институт ботаники АН РУз / Красная книга' },
      },
      {
        value: '1 mln',
        unit: { uz: 'xavf ostidagi tur', en: 'species at risk', ru: 'видов под угрозой' },
        label: {
          uz: "Global miqyosda yo'qolib ketish xavfi ostida turgan o'simlik va hayvon turlari",
          en: 'Estimated global plant and animal species threatened with extinction',
          ru: 'Оценка числа видов флоры и фауны мира, находящихся под угрозой исчезновения',
        },
        year: '2023',
        source: { uz: 'IPBES Global Assessment', en: 'IPBES Global Assessment', ru: 'Глобальный доклад IPBES' },
      },
    ],
    charts: [
      {
        id: 't8-protected-growth',
        type: 'area',
        title: {
          uz: "O'zbekistonda muhofaza etiladigan tabiiy hududlar ulushining o'sishi (% mamlakat maydonidan)",
          en: 'Expansion of Protected Natural Areas in Uzbekistan (% of National Land Area)',
          ru: 'Рост доли особо охраняемых природных территорий в Узбекистане (% площади страны)',
        },
        subtitle: {
          uz: 'Janubiy Ustyurt, Orolqum va tog‘ milliy bog‘lari tashkil etilishi samarasi',
          en: 'Driven by new national parks in Southern Ustyurt, Aralkum, and mountain ranges',
          ru: 'Расширение за счёт создания нацпарков «Южный Устюрт», «Аралкум» и горных резерватов',
        },
        source: { uz: 'Ekologiya vazirligi / Statistika agentligi', en: 'Ministry of Ecology / Statistics Agency', ru: 'Минэкологии / Агентство статистики РУз' },
        unit: '%',
        seriesName: { uz: 'METH ulushi (%)', en: 'Protected Area Share (%)', ru: 'Доля ООПТ (%)' },
        data: [
          { name: '2016', value: 4.6 },
          { name: '2019', value: 7.4 },
          { name: '2021', value: 11.2 },
          { name: '2023', value: 14.1 },
          { name: '2030 (P)', value: 17.0 },
        ],
      },
      {
        id: 't8-redbook',
        type: 'bar',
        title: {
          uz: "O'zbekiston Respublikasi Qizil kitobiga kiritilgan noyob turlar soni (2019-yil nashri)",
          en: 'Threatened Species Listed in the Red Data Book of Uzbekistan (2019 Edition)',
          ru: 'Число редких видов, занесённых в Красную книгу Республики Узбекистан (издание 2019 г.)',
        },
        subtitle: {
          uz: 'O‘simliklar, zamburug‘lar va hayvonot dunyosi guruhlari bo‘yicha',
          en: 'Breakdown across flora and major vertebrate/invertebrate groups',
          ru: 'Распределение по группам флоры и животного мира',
        },
        source: { uz: "O'zbekiston Qizil kitobi (2019)", en: 'Red Data Book of Uzbekistan (2019)', ru: 'Красная книга Республики Узбекистан (2019)' },
        unit: 'tur',
        seriesName: { uz: 'Turlar soni', en: 'Number of Species', ru: 'Количество видов' },
        data: [
          { name: { uz: 'O‘simlik va zamburug‘lar', en: 'Plants & Fungi', ru: 'Растения и грибы' }, value: 314 },
          { name: { uz: 'Qushlar', en: 'Birds', ru: 'Птицы' }, value: 52 },
          { name: { uz: 'Sutemizuvchilar', en: 'Mammals', ru: 'Млекопитающие' }, value: 30 },
          { name: { uz: 'Baliq va sudraluvchilar', en: 'Fish & Reptiles', ru: 'Рыбы и рептилии' }, value: 39 },
        ],
      },
    ],
    laws: [
      {
        id: 't8-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Muhofaza etiladigan tabiiy hududlar to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Protected Natural Areas"',
          ru: 'Закон Республики Узбекистан «Об особо охраняемых природных территориях»',
        },
        codeAndDate: {
          uz: '03.12.2004-yil, 710-II-son',
          en: 'December 3, 2004, No. 710-II',
          ru: '03.12.2004 г., № 710-II',
        },
        summary: {
          uz: "Qo'riqxonalar, milliy bog'lar, buyurtma qo'riqxonalar, tabiat yodgorliklari va biosfera rezervatlarining huquqiy rejimini hamda xo'jalik cheklovlarini belgilaydi.",
          en: 'Defines seven categories of protected areas—from strict reserves to national parks—and sets zoning and economic activity rules.',
          ru: 'Определяет категории ООПТ (заповедники, нацпарки, заказники, биосферные резерваты) и режим хозяйственных ограничений.',
        },
        significance: {
          uz: "Noyob biologik turlarni yashash muhiti bilan birga (in-situ) saqlashning tayanch qonuni.",
          en: 'Safeguards critical habitats from industrial conversion while enabling regulated ecotourism in park zones.',
          ru: 'Обеспечивает сохранение редких экосистем in-situ и правовую базу регулируемого экотуризма.',
        },
      },
      {
        id: 't8-law-2',
        type: 'uz_law',
        title: {
          uz: "«O'simlik dunyosini muhofaza qilish va undan foydalanish to'g'risida»gi hamda «Hayvonot dunyosini muhofaza qilish to'g'risida»gi Qonunlar",
          en: 'Laws of Uzbekistan "On Flora Protection and Use" & "On Fauna Protection and Use"',
          ru: 'Законы РУз «Об охране и использовании растительного мира» и «Животного мира»',
        },
        codeAndDate: {
          uz: 'O‘RQ-409 (21.09.2016) va O‘RQ-408 (19.09.2016)',
          en: 'No. O’RQ-409 (Sept 21, 2016) & No. O’RQ-408 (Sept 19, 2016)',
          ru: '№ ЗРУ-409 (21.09.2016 г.) и № ЗРУ-408 (19.09.2016 г.)',
        },
        summary: {
          uz: "Yovvoyi dorivor o'simliklarni yig'ish kvotalari, ovchilik normalari, Qizil kitob turlarini muhofaza qilish va brakonyerlik uchun moliyaviy jarimalarni tartibga soladi.",
          en: 'Regulates commercial harvesting quotas for wild medicinal plants, wildlife permits, Red Book species protection, and poaching damages.',
          ru: 'Регулируют квоты заготовки дикорастущего лекарственного сырья, охрану краснокнижных видов и взыскание ущерба за браконьерство.',
        },
        significance: {
          uz: "Kovrak va qizilmiya kabi eksportbop yovvoyi bioresurslarni madaniy plantatsiyalarda ko'paytirishga undaydi.",
          en: 'Prevents wild depletion of high-value ferula and licorice by incentivizing cultivated plantations.',
          ru: 'Предотвращает истощение диких зарослей ферулы и солодки, стимулируя создание культурных плантаций.',
        },
      },
      {
        id: 't8-law-3',
        type: 'international',
        title: {
          uz: "Biologik xilma-xillik to'g'risidagi BMT Konvensiyasi (CBD) va CITES konvensiyasi",
          en: 'UN Convention on Biological Diversity (CBD) & CITES Convention',
          ru: 'Конвенция ООН о биологическом разнообразии (КБР) и Конвенция СИТЕС',
        },
        codeAndDate: {
          uz: 'CBD — 1992-yil (O‘zbekiston 1995-y. qo‘shilgan); CITES — 1973-yil (O‘zbekiston 1997-y.)',
          en: 'CBD (1992, acceded 1995) & CITES (1973, acceded 1997)',
          ru: 'КБР (1992 г., РУз с 1995 г.) и СИТЕС (1973 г., РУз с 1997 г.)',
        },
        summary: {
          uz: "Genetik resurslardan adolatli foydalanish hamda yo'qolib ketish xavfi ostidagi yovvoyi fauna va flora turlari bilan xalqaro savdoni qat'iy nazorat qiladi.",
          en: 'Governs equitable genetic benefit-sharing and restricts cross-border trade in endangered wildlife and flora.',
          ru: 'Регулируют сохранение генофонда, совместное использование генетических ресурсов и запрет незаконной торговли редкими видами.',
        },
        significance: {
          uz: "Transchegaraviy ko'chib yuruvchi turlar (sayg'oq, qor qoploni, qushlar) muhofazasini xalqaro moliyalashtirishga bog'laydi.",
          en: 'Connects Uzbekistan to Global Environment Facility (GEF) grants for snow leopard and saiga conservation.',
          ru: 'Обеспечивает доступ к грантам Глобального экологического фонда (ГЭФ) по охране снежного барса и сайгака.',
        },
      },
    ],
    facts: [
      {
        uz: "G'arbiy Tyan-Shan transchegaraviy obyekti (O'zbekistondagi Chotqol biosfera qo'riqxonasi bilan birga) 2016-yilda YUNESKO Butunjahon tabiiy merosi ro'yxatiga kiritilgan — bu mintaqa madaniy olma va lolalarning genetik vatanidir.",
        en: 'Inscribed as a UNESCO World Natural Heritage site in 2016, Western Tien-Shan (including Uzbekistan’s Chatkal Reserve) is the evolutionary cradle of domesticated apples and wild tulips.',
        ru: 'Включённый в Список Всемирного природного наследия ЮНЕСКО в 2016 году Западный Тянь-Шань (включая Чаткальский заповедник) является генетической родиной культурных яблонь и тюльпанов.',
      },
      {
        uz: "2023-yilda YUNESKO Butunjahon tabiiy merosi ro'yxatiga «Mo'tadil mintaqadagi Turon cho'llari» (O'zbekistonning Janubiy Ustyurt va Sayg'oqli hududlari ishtirokida) ham kiritildi.",
        en: 'In 2023, UNESCO inscribed the "Cold Winter Deserts of Turan"—spanning Uzbekistan’s Southern Ustyurt plateau—onto the World Natural Heritage List.',
        ru: 'В 2023 году в Список Всемирного наследия ЮНЕСКО были включены «Туранские пустыни умеренного пояса», охватывающие плато Южный Устюрт в Узбекистане.',
      },
      {
        uz: "Qoraqalpog'iston va Xorazmda o'suvchi shirinmiya (qizilmiya) ildizi ekstrakti farmatsevtika, kosmetika va oziq-ovqat sanoatida yuqori valyutali eksport mahsuloti bo'lib, sho'r yerlar melioratsiyasini ham yaxshilaydi.",
        en: 'Licorice root (Glycyrrhiza glabra) cultivated on saline soils in Karakalpakstan generates export revenues while biologically lowering soil salinity.',
        ru: 'Солодковый корень в Каракалпакстане одновременно даёт востребованный фармацевтический экспорт и улучшает состояние засолённых почв.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Zomin va Hisor tog' hududlarida barqaror ekoturizm va qor qoploni muhofazasi",
        en: 'Sustainable Mountain Ecotourism and Snow Leopard Conservation in Zaamin & Hisor',
        ru: 'Устойчивый горный экотуризм и охрана снежного барса в Заамине и Гиссаре',
      },
      location: {
        uz: 'Jizzax va Qashqadaryo viloyatlari (Zomin milliy bog‘i va Hisor davlat qo‘riqxonasi)',
        en: 'Jizzakh & Kashkadarya Regions (Zaamin National Park & Hisor State Reserve)',
        ru: 'Джизакская и Кашкадарьинская области (Зааминский нацпарк и Гиссарский заповедник)',
      },
      challenge: {
        uz: "Tog' archazorlarida chorva mollarini tartibsiz o'tlatish yaylov degradatsiyasiga olib kelib, yovvoyi tuyoqlilar va qor qoploni yashash makonini qisqartirar edi.",
        en: 'Unregulated livestock grazing in juniper forests degraded alpine meadows and squeezed habitat for wild ibex and endangered snow leopards.',
        ru: 'Неконтролируемый выпас скота в горных арчовниках вызывал деградацию пастбищ и сокращал кормовую базу снежного барса.',
      },
      solution: {
        uz: "GEF/UNDP ko'magida fotokamerali raqamli monitoring o'rnatildi, qat'iy qo'riqxona zonasi milliy bog' rekreatsion zonasidan ajratilib, mahalliy aholi uchun oilaviy mehmon uylari va asalarichilik grantlari yo'lga qo'yildi.",
        en: 'Camera-trap monitoring and strict core zoning were paired with alternative livelihood grants in mountain beekeeping and eco-guesthouses for local villages.',
        ru: 'Внедрены фотоловушки, чёткое функциональное зонирование и альтернативные источники дохода для сельчан (горное пчеловодство и гостевые экодома).',
      },
      economicOutcome: {
        uz: "Qor qoploni populyatsiyasi barqarorlashdi, Zomin rekreatsion klasterida esa minglab yangi xizmat ko'rsatish ish o'rinlari yaratildi.",
        en: 'Snow leopard sightings rose steadily while mountain ecotourism created thousands of year-round hospitality jobs.',
        ru: 'Численность снежного барса стабилизировалась, а туристический кластер создал тысячи рабочих мест для местного населения.',
      },
    },
    terms: [
      {
        term: { uz: 'Endemik turlar', en: 'Endemic Species', ru: 'Эндемичные виды (эндемики)' },
        definition: {
          uz: "Yer yuzining faqat ma'lum bir cheklangan geografik hududidagina tabiiy tarqalgan o'simlik yoki hayvon turlari.",
          en: 'Plant or animal species native exclusively to a single defined geographic region and found nowhere else naturally.',
          ru: 'Виды растений или животных, обитающие в дикой природе исключительно в пределах одного ограниченного географического региона.',
        },
      },
      {
        term: { uz: 'Rekreatsion sig‘im', en: 'Recreational Carrying Capacity', ru: 'Рекреационная ёмкость' },
        definition: {
          uz: "Tabiiy majmuaning o'z ekologik holati va tiklanish qobiliyatiga zarar yetkazmagan holda vaqt birligida qabul qila oladigan maksimal dam oluvchilar soni.",
          en: 'Maximum visitor load a natural site can accommodate per period without triggering soil compaction or ecological degradation.',
          ru: 'Максимальное число отдыхающих на единицу площади, которое природный комплекс выдерживает без потери способности к самовосстановлению.',
        },
      },
      {
        term: { uz: 'In-situ muhofaza', en: 'In-situ Conservation', ru: 'Сохранение in-situ' },
        definition: {
          uz: "Biologik turlarni ularning tabiiy yashash muhitida (qo'riqxona, milliy bog' va biosfera rezervatlarida) saqlash usuli.",
          en: 'Conserving biological species and genetic diversity directly within their natural ecosystems and habitats.',
          ru: 'Сохранение биологических видов и популяций непосредственно в их естественной природной среде обитания.',
        },
      },
      {
        term: { uz: 'Ekoturizm', en: 'Ecotourism', ru: 'Экологический туризм (экотуризм)' },
        definition: {
          uz: "Tabiatga zarar yetkazmaydigan, bioxilma-xillikni asrashni moliyalashtiradigan va mahalliy aholi farovonligini oshiradigan mas'uliyatli sayohat shakli.",
          en: 'Responsible travel to natural areas that conserves the environment and sustains the well-being of local communities.',
          ru: 'Ответственные путешествия на природные территории, содействующие охране природы и повышению благосостояния местных жителей.',
        },
      },
    ],
    quiz: [
      {
        id: 'q8-1',
        question: {
          uz: "Kunming-Monreal global bioxilma-xillik kelishuvidagi mashhur «30x30» maqsadi nimani anglatadi?",
          en: 'What does the "30x30" target in the Kunming-Montreal Global Biodiversity Framework commit nations to achieve?',
          ru: 'Что означает глобальная цель «30x30» Куньминско-Монреальской программы по биоразнообразию?',
        },
        options: [
          { uz: '2030-yilgacha quruqlik va okeanlarning kamida 30% qismini muhofaza ostiga olish', en: 'Conserving at least 30% of global land and oceans by 2030', ru: 'Взять под охрану не менее 30% суши и океанов к 2030 году' },
          { uz: '30 yil davomida 30% inflatsiya ushlab turish', en: 'Maintaining 30% inflation for 30 years', ru: 'Поддерживать 30% инфляции 30 лет' },
          { uz: 'Har bir shaharda 30 ta zavod qurish', en: 'Building 30 factories per city', ru: 'Построить по 30 заводов в каждом городе' },
          { uz: 'O‘rmonlarni 30% ga qisqartirish', en: 'Reducing forests by 30%', ru: 'Сократить площадь лесов на 30%' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "2022-yilda qabul qilingan «30x30» global maqsadi 2030-yilga borib sayyora quruqlik va dengiz hududlarining 30 foizini muhofaza qilishni ko'zda tutadi.",
          en: 'Adopted at CBD COP15 in 2022, 30x30 aims to protect 30% of terrestrial and marine ecosystems by 2030.',
          ru: 'Принятая на КС-15 в 2022 году цель «30x30» предусматривает охрану 30% суши и морских акваторий к 2030 году.',
        },
      },
      {
        id: 'q8-2',
        question: {
          uz: "O'zbekiston hududida muhofaza etiladigan tabiiy hududlar (METH) ulushi so'nggi islohotlar natijasida taxminan necha foizga yetkazildi?",
          en: 'Roughly what share of Uzbekistan’s land area is now covered by Protected Natural Areas following recent expansions?',
          ru: 'Примерно до какой доли от площади Узбекистана расширена сеть особо охраняемых природных территорий?',
        },
        options: [
          { uz: 'Taxminan 14%', en: 'Roughly 14%', ru: 'Около 14%' },
          { uz: '0.2%', en: '0.2%', ru: '0,2%' },
          { uz: '68%', en: '68%', ru: '68%' },
          { uz: '92%', en: '92%', ru: '92%' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Janubiy Ustyurt va Orolqum kabi yirik milliy tabiat bog'lari tashkil etilishi bilan METH ulushi ~4,6% dan ~14% ga ko'tarildi.",
          en: 'Establishing large desert and mountain national parks lifted Uzbekistan’s protected coverage from ~4.6% to ~14.1%.',
          ru: 'Создание новых крупных национальных парков увеличило долю ООПТ с 4,6% до ~14,1% территории страны.',
        },
      },
      {
        id: 'q8-3',
        question: {
          uz: "2023-yilda YUNESKO Butunjahon tabiiy merosi ro'yxatiga kiritilgan O'zbekistondagi cho'l ekotizimi qaysi?",
          en: 'Which desert ecosystem spanning Uzbekistan was inscribed on the UNESCO World Natural Heritage List in 2023?',
          ru: 'Какой пустынный объект с участием Узбекистана вошёл в Список Всемирного наследия ЮНЕСКО в 2023 году?',
        },
        options: [
          { uz: 'Mo‘tadil mintaqadagi Turon cho‘llari (Janubiy Ustyurt)', en: 'Cold Winter Deserts of Turan (Southern Ustyurt)', ru: 'Туранские пустыни умеренного пояса (Южный Устюрт)' },
          { uz: 'Saxara cho‘li', en: 'Sahara Desert', ru: 'Пустыня Сахара' },
          { uz: 'Atakama cho‘li', en: 'Atacama Desert', ru: 'Пустыня Атакама' },
          { uz: 'Kalaxari cho‘li', en: 'Kalahari Desert', ru: 'Пустыня Калахари' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "«Mo'tadil mintaqadagi Turon cho'llari» transmilliy obyekti 2023-yilda YUNESKO Butunjahon tabiiy merosi ro'yxatiga kiritildi.",
          en: 'UNESCO inscribed the transnational Cold Winter Deserts of Turan in September 2023.',
          ru: 'Транснациональный объект «Туранские пустыни умеренного пояса» включён в список ЮНЕСКО в 2023 году.',
        },
      },
      {
        id: 'q8-4',
        question: {
          uz: "2021-yilda bioxilma-xillikni moliyaviy aktivlar portfeli sifatida tahlil qilgan mashhur iqtisodiy ma'ruza muallifi kim?",
          en: 'Which economist authored the landmark 2021 UK Treasury Review on "The Economics of Biodiversity"?',
          ru: 'Кто является автором известного доклада 2021 года «Экономика биоразнообразия»?',
        },
        options: [
          { uz: 'Parta Dasgupta', en: 'Partha Dasgupta', ru: 'Партха Дасгупта' },
          { uz: 'Dikkens', en: 'Charles Dickens', ru: 'Чарльз Диккенс' },
          { uz: 'Karl Marks', en: 'Karl Marx', ru: 'Карл Маркс' },
          { uz: 'Fridrix Xayek', en: 'Friedrich Hayek', ru: 'Фридрих Хайек' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Kembrij professori ser Parta Dasgupta bioxilma-xillik iqtisodiyoti bo'yicha 600 betlik global hisobotni tayyorlagan.",
          en: 'Sir Partha Dasgupta’s 2021 Review reframed biodiversity conservation as core macroeconomic asset management.',
          ru: 'Профессор Кембриджа сэр Партха Дасгупта представил фундаментальный доклад о биоразнообразии как ключевом экономическом активе.',
        },
      },
      {
        id: 'q8-5',
        question: {
          uz: "Dam oluvchilar oqimi me'yoridan oshib ketmasligi uchun qo'llaniladigan ko'rsatkich qanday nomlanadi?",
          en: 'What metric defines the maximum visitor load a natural resort can sustain without ecological damage?',
          ru: 'Какой показатель определяет предельно допустимое число туристов без деградации природного комплекса?',
        },
        options: [
          { uz: 'Rekreatsion sig‘im', en: 'Recreational carrying capacity', ru: 'Рекреационная ёмкость' },
          { uz: 'Likvidlik koeffitsiyenti', en: 'Current liquidity ratio', ru: 'Коэффициент ликвидности' },
          { uz: 'Diskont stavkasi', en: 'Central bank discount rate', ru: 'Учётная ставка' },
          { uz: 'Inflyatsiya targeti', en: 'Inflation target', ru: 'Таргет инфляции' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Rekreatsion sig'im — ekotizim o'zini qayta tiklay oladigan chegaradagi ruxsat etilgan tashrif buyuruvchilar me'yoridir.",
          en: 'Recreational carrying capacity balances tourism income against soil trampling and wildlife disturbance.',
          ru: 'Рекреационная ёмкость позволяет получать доходы от туризма без разрушения почвенно-растительного покрова.',
        },
      },
    ],
  },

  {
    id: 9,
    isIndependentStudy: true,
    iconName: 'Wind',
    title: {
      uz: 'Atmosfera havosi va uni muhofaza qilish',
      en: 'Atmospheric Air Quality and Its Protection',
      ru: 'Атмосферный воздух и его охрана',
    },
    shortDescription: {
      uz: "Atmosfera qatlamlari va gaz tarkibi, stasionar va ko'chma antropogen ifloslanish, PM2.5 ning ijtimoiy-iqtisodiy zarari va «issiqxona samarasi».",
      en: 'Atmospheric structure, stationary and mobile anthropogenic pollution, socio-economic costs of PM2.5, ozone protection, and the greenhouse effect.',
      ru: 'Строение атмосферы, стационарные и передвижные источники загрязнения, социально-экономический ущерб PM2.5 и «парниковый эффект».',
    },
    keywords: {
      uz: ['atmosfera', 'PM2.5', 'issiqxona samarasi', 'CO2', 'metan', 'ozon qatlami', 'Monreal protokoli', 'yashil transport'],
      en: ['atmosphere', 'PM2.5', 'greenhouse effect', 'CO2', 'methane', 'ozone layer', 'Montreal Protocol', 'air quality'],
      ru: ['атмосфера', 'PM2.5', 'парниковый эффект', 'метан', 'озоновый слой', 'Монреальский протокол', 'чистый воздух'],
    },
    sections: [
      {
        heading: {
          uz: '1. Atmosfera tuzilishi va antropogen ifloslanish manbalari',
          en: '1. Atmospheric Structure and Anthropogenic Emission Sources',
          ru: '1. Строение атмосферы и источники антропогенного загрязнения',
        },
        paragraphs: [
          {
            uz: "Yer atmosferasi bir necha qobiqlardan (troposfera, stratosfera, mezosfera, termosfera va ekzosfera) iborat bo'lib, ob-havo jarayonlari va tirik mavjudotlar hayoti quyi 10–12 km qalinlikdagi troposferada kechadi. Quruq atmosfera havosining 78,08 foizini azot (N₂), 20,95 foizini kislorod (O₂), 0,93 foizini argon va atigi ~0,04 foizini karbonat angidrid (CO₂) hamda boshqa iz gazlar tashkil etadi; stratosferadagi ozon ekrani (O₃) esa tirik organizmlarni ultrabinafsha nurlanishdan himoya qiladi.",
            en: 'Earth’s atmosphere comprises concentric layers—troposphere, stratosphere, mesosphere, thermosphere, and exosphere—with nearly all weather and biological respiration occurring in the lowest 10–12 km troposphere. Dry air consists of 78.08% nitrogen, 20.95% oxygen, 0.93% argon, and ~0.04% trace gases including CO₂, while stratospheric ozone (O₃) shields life from lethal UV radiation.',
            ru: 'Атмосфера Земли состоит из тропосферы, стратосферы, мезосферы, термосферы и экзосферы; вся хозяйственная жизнь сосредоточена в нижних 10–12 км тропосферы. Сухой воздух включает 78,08% азота, 20,95% кислорода, 0,93% аргона и около 0,04% примесей (включая CO₂), а стратосферный озоновый экран защищает биосферу от жёсткого УФ-излучения.',
          },
          {
            uz: "Antropogen ifloslanish ikki katta guruhga bo'linadi: stasionar manbalar (issiqlik elektr stansiyalari, metallurgiya, sement va kimyo zavodlari, isitish qozonxonalari) hamda ko'chma manbalar (avtotransport, aviatsiya, qurilish va qishloq xo'jaligi texnikasi). Yirik shaharlarda, jumladan Toshkentda jami zararli moddalar tashlamalarining 60 foizdan ortig'i ko'chma manbalar — avtotransport ulushiga to'g'ri keladi.",
            en: 'Anthropogenic air pollutants originate from stationary sources (coal/gas thermal power plants, cement kilns, smelters, heating boilers) and mobile sources (road vehicles, aviation, off-road machinery). In major metropolitan hubs including Tashkent, mobile road transport accounts for over 60% of urban gaseous pollutant emissions.',
            ru: 'Антропогенное загрязнение делится на стационарные источники (ТЭС, металлургические, цементные и химические заводы, котельные) и передвижные источники (автотранспорт, спецтехника, авиация). В крупных городах, включая Ташкент, более 60% городских выбросов загрязняющих веществ формирует автотранспорт.',
          },
        ],
        keyTakeaway: {
          uz: "Diametri 2,5 mikrometrdan kichik PM2.5 zarrachalari o'pka alveolalaridan to'g'ridan-to'g'ri qon aylanish tizimiga o'tgani sababli eng xavfli iqtisodiy-tibbiy omil sanaladi.",
          en: 'Fine particulate matter (PM2.5) penetrates deep into lung alveoli and the bloodstream, generating the highest externalized healthcare costs among all pollutants.',
          ru: 'Мелкодисперсные частицы PM2.5 проникают через альвеолы лёгких напрямую в кровоток, создавая наибольший социально-экономический ущерб здоровью.',
        },
      },
      {
        heading: {
          uz: '2. Havo ifloslanishining ijtimoiy-iqtisodiy oqibatlari',
          en: '2. Socio-Economic Consequences of Ambient Air Pollution',
          ru: '2. Социально-экономические последствия загрязнения воздуха',
        },
        paragraphs: [
          {
            uz: "Jahon sog'liqni saqlash tashkiloti (JSST / WHO) ma'lumotlariga ko'ra, dunyo aholisining 90 foizdan ortig'i JSST tavsiya etgan yillik me'yordan (PM2.5 ≤ 5 mkg/m³) yuqori ifloslangan havodan nafas oladi; tashqi va ichki havo ifloslanishi yiliga taxminan 6,7–7 million erta o'lim holatiga sabab bo'ladi. Bu holat iqtisodiyot uchun davolanish xarajatlari, mehnatga layoqatsizlik kunlari va inson kapitalining qisqarishi demakdir.",
            en: 'According to the World Health Organization (WHO), over 90% of the global population breathes air exceeding WHO annual PM2.5 guidelines (5 µg/m³), contributing to ~6.7–7 million premature deaths annually. Macroeconomically, polluted air depresses labor supply, school attendance, cognitive test scores, and tourism revenues.',
            ru: 'По данным ВОЗ, свыше 90% населения мира дышит воздухом, превышающим строгий годовой норматив ВОЗ по PM2.5 (5 мкг/м³), что ведёт к ~6,7–7 млн преждевременных смертей ежегодно. Для экономики это оборачивается миллиардными расходами здравоохранения и снижением производительности труда.',
          },
          {
            uz: "Salomatlikdan tashqari, oltingugurt (SO₂) va azot oksidlari (NOₓ) atmosferada suv bug'lari bilan birikib «kislotali yomg'irlar» hosil qiladi: ular binolar va ko'priklar korroziyasini tezlashtiradi, tuproq kislotaliligini oshiradi va o'rmonlarni quritadi. Qora uglerod (qurum) zarrachalari esa Tyan-Shan va Pomir muzliklari ustiga o'tirib, ularning yorug'lik qaytarish qobiliyatini (albedoni) pasaytiradi va erishni tezlashtiradi.",
            en: 'Beyond human health, sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) form acid rain that corrodes infrastructure and acidifies soils, while black carbon soot settling on Tien Shan and Pamir glaciers darkens snow albedo and accelerates summer ice melt.',
            ru: 'Помимо ущерба здоровью, диоксид серы (SO₂) и оксиды азота (NOₓ) вызывают кислотные дожди, разрушающие инфраструктуру и леса, а оседание чёрного углерода (сажи) на ледниках Тянь-Шаня и Памира снижает альбедо льда и ускоряет их таяние.',
          },
        ],
      },
      {
        heading: {
          uz: '3. «Issiqxona samarasi» fizikasi va atmosferani muhofaza qilish choralari',
          en: '3. Physics of the Greenhouse Effect and Clean-Air Policy Instruments',
          ru: '3. «Парниковый эффект» и экономико-правовые меры охраны атмосферы',
        },
        paragraphs: [
          {
            uz: "Tabiiy issiqxona samarasi Yerdagi o'rtacha haroratni +15°C atrofida (busiz -18°C bo'lardi) ushlab turuvchi hayotiy mexanizmdir. Biroq qazilma yoqilg'i yoqish, qishloq xo'jaligi va chiqindixonalar tufayli atmosferada CO₂ (sanoatgacha bo'lgan 280 ppm dan 2024-yilda ~422 ppm gacha), metan (CH₄ — 100 yillik ufqi bo'yicha CO₂ dan ~28 barobar kuchli issiqxona gazi) va azot chala oksidi (N₂O) konsentratsiyasining ortishi antropogen issiqlik tutib qolinishini kuchaytirdi.",
            en: 'While the natural greenhouse effect keeps Earth habitable at ~+15°C (rather than -18°C), fossil combustion, livestock, gas leaks, and landfills have pushed atmospheric CO₂ from 280 ppm pre-industrially to ~422 ppm in 2024, alongside potent methane (CH₄, ~28x CO₂ warming potential over 100 years) and nitrous oxide (N₂O).',
            ru: 'Естественный парниковый эффект поддерживает среднюю температуру Земли около +15°C (вместо -18°C), однако сжигание ископаемого топлива и утечки метана подняли концентрацию CO₂ с доиндустриальных 280 ppm до ~422 ppm в 2024 году, усиливая радиационное удержание тепла.',
          },
          {
            uz: "O'zbekistonda atmosfera havosini sog'lomlashtirish bo'yicha tizimli choralar ko'rilmoqda: AI-80 markali past ekologik benzin bosqichma-bosqich cheklanib Yevro-4/Yevro-5 standartlariga o'tilmoqda, Toshkent va viloyat markazlarida elektrobuslar va elektromobillar uchun bojxona-soliq imtiyozlari berildi, yirik sement va issiqlik korxonalarida samaradorligi 99,5% bo'lgan avtomatik chang-gaz tutuvchi filtrlar va onlayn datchiklar o'rnatilmoqda.",
            en: 'Uzbekistan is deploying multi-pronged clean-air reforms: phasing out low-grade AI-80 fuel in favor of Euro-4/5 standards, expanding electric bus fleets and zero-tariff EV imports, banning heavy fuel oil in urban greenhouses without filters, and mandating 99.5%-efficiency baghouse filters with continuous online sensors at cement plants.',
            ru: 'В Узбекистане реализуется комплекс мер по охране воздуха: поэтапный отказ от бензина АИ-80 и переход на стандарты Евро-4/5, закупка электробусов, таможенные льготы для электромобилей и обязательная установка высокоэффективных рукавных фильтров (99,5%) с онлайн-датчиками на цементных заводах.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '422+',
        unit: { uz: 'ppm (mlndan ulush)', en: 'ppm', ru: 'ppm (млн⁻¹)' },
        label: {
          uz: 'Atmosferadagi CO₂ o‘rtacha konsentratsiyasi (sanoatgacha davrda 280 ppm edi)',
          en: 'Global atmospheric CO₂ concentration (up from 280 ppm pre-industrial)',
          ru: 'Среднегодовая концентрация CO₂ в атмосфере (против 280 ppm до индустриализации)',
        },
        year: '2024',
        source: { uz: 'NOAA Mauna Loa / WMO', en: 'NOAA Global Monitoring Lab / WMO', ru: 'Обсерватория Мауна-Лоа NOAA / ВМО' },
      },
      {
        value: '6.7',
        unit: { uz: 'mln holat/yil', en: 'mln deaths/yr', ru: 'млн случаев/год' },
        label: {
          uz: 'Tashqi va xonadon ichidagi havo ifloslanishi bilan bog‘liq global erta o‘lim ko‘rsatkichi',
          en: 'Annual global premature deaths linked to ambient and household air pollution',
          ru: 'Глобальная преждевременная смертность, связанная с загрязнением воздуха',
        },
        year: '2023',
        source: { uz: 'Jahon sog‘liqni saqlash tashkiloti (JSST / WHO)', en: 'World Health Organization (WHO)', ru: 'Всемирная организация здравоохранения (ВОЗ)' },
      },
      {
        value: '99%',
        unit: { uz: 'qisqartirish', en: 'phase-out', ru: 'сокращение' },
        label: {
          uz: 'Monreal protokoli doirasida global miqyosda ozon yemiruvchi moddalarning yo‘qotilishi',
          en: 'Global phase-out of ozone-depleting substances achieved under the Montreal Protocol',
          ru: 'Доля выведенных из оборота озоноразрушающих веществ по Монреальскому протоколу',
        },
        year: '2023',
        source: { uz: 'UNEP Ozone Secretariat', en: 'UNEP Ozone Secretariat', ru: 'Озоновый секретариат ЮНЕП' },
      },
      {
        value: '60%+',
        unit: { uz: 'shahar tashlamasi', en: 'urban share', ru: 'городских выбросов' },
        label: {
          uz: 'Yirik shaharlarda ko‘chma manbalar (avtotransport)ning atmosfera ifloslanishidagi ulushi',
          en: 'Share of mobile road transport in urban air pollutant emissions in major cities',
          ru: 'Доля передвижных источников (автотранспорта) в загрязнении воздуха мегаполисов',
        },
        year: '2023',
        source: { uz: 'O‘zgidromet / Ekologiya vazirligi', en: 'Uzhydromet / Ministry of Ecology', ru: 'Узгидромет / Минэкологии РУз' },
        isApproximate: true, // TODO: tekshiring (Toshkent shahrida ~60–65% avtotransport ulushi)
      },
    ],
    charts: [
      {
        id: 't9-keeling',
        type: 'area',
        title: {
          uz: 'Kiling egri chizig‘i: atmosferada CO₂ konsentratsiyasining o‘sishi (ppm)',
          en: 'The Keeling Curve: Atmospheric CO₂ Concentration Growth (ppm)',
          ru: 'Кривая Килинга: рост концентрации CO₂ в атмосфере Земли (ppm)',
        },
        subtitle: {
          uz: '1960–2024-yillardagi uzluksiz instrumental kuzatuv natijalari',
          en: 'Continuous direct atmospheric measurements from 1960 to 2024',
          ru: 'Данные непрерывных инструментальных наблюдений 1960–2024 гг.',
        },
        source: { uz: 'NOAA / Scripps Institution of Oceanography', en: 'NOAA / Scripps Institution', ru: 'NOAA / Институт Скриппса' },
        unit: 'ppm',
        seriesName: { uz: 'CO₂ konsentratsiyasi (ppm)', en: 'CO₂ Concentration (ppm)', ru: 'Концентрация CO₂ (ppm)' },
        data: [
          { name: '1960', value: 317 },
          { name: '1975', value: 331 },
          { name: '1990', value: 354 },
          { name: '2005', value: 380 },
          { name: '2015', value: 401 },
          { name: '2024', value: 422.5 },
        ],
      },
      {
        id: 't9-ghg-share',
        type: 'pie',
        title: {
          uz: 'Global antropogen issiqxona gazlari ajratmalarining gaz turlari bo‘yicha tarkibi (%)',
          en: 'Global Anthropogenic Greenhouse Gas Emissions by Gas Type (CO₂e %)',
          ru: 'Структура мировых антропогенных выбросов парниковых газов по видам (%)',
        },
        subtitle: {
          uz: '100 yillik global isish salohiyati (GWP-100) ekvivalentida',
          en: 'Weighted by 100-year Global Warming Potential (GWP-100)',
          ru: 'В пересчёте на 100-летний потенциал глобального потепления (GWP-100)',
        },
        source: { uz: 'IPCC AR6 WGIII (2022)', en: 'IPCC AR6 WGIII (2022)', ru: 'МГЭИК ДО6 (2022)' },
        unit: '%',
        seriesName: { uz: 'Ulush (%)', en: 'Share (%)', ru: 'Доля (%)' },
        data: [
          { name: { uz: 'CO₂ (qazilma yoqilg‘i va sanoat)', en: 'CO₂ (Fossil fuel & industry)', ru: 'CO₂ (энергетика и пром.)' }, value: 64 },
          { name: { uz: 'Metan (CH₄)', en: 'Methane (CH₄)', ru: 'Метан (CH₄)' }, value: 19 },
          { name: { uz: 'CO₂ (yer foydalanish / o‘rmon)', en: 'CO₂ (LULUCF)', ru: 'CO₂ (землепользование)' }, value: 11 },
          { name: { uz: 'Azot oksidi (N₂O) va F-gazlar', en: 'Nitrous oxide & F-gases', ru: 'Закись азота и Ф-газы' }, value: 6 },
        ],
      },
    ],
    laws: [
      {
        id: 't9-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Atmosfera havosini muhofaza qilish to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Protection of Atmospheric Air"',
          ru: 'Закон Республики Узбекистан «Об охране атмосферного воздуха»',
        },
        codeAndDate: {
          uz: '27.12.1996-yil, 353-I-son (O‘RQ-529 bilan takomillashtirilgan, 2019)',
          en: 'December 27, 1996, No. 353-I (amended by O’RQ-529, 2019)',
          ru: '27.12.1996 г., № 353-I (с изм. № ЗРУ-529, 2019 г.)',
        },
        summary: {
          uz: "Havodagi ifloslantiruvchi moddalarning ruxsat etilgan chekli konsentratsiyasi (REK / PDK), tashlama me'yorlari, transport ekologik standartlari va kompensatsiya to'lovlarini belgilaydi.",
          en: 'Establishes maximum permissible emission limits, ambient air quality standards, vehicle fuel norms, and pollution fees.',
          ru: 'Устанавливает нормативы ПДК и ПДВ вредных веществ, экологические требования к топливу и компенсационные выплаты.',
        },
        significance: {
          uz: "Korxonalarni chang-gaz tozalash uskunalarini modernizatsiya qilishga iqtisodiy majbur qiladi.",
          en: 'Creates direct financial liability for enterprises exceeding permissible stack emission limits.',
          ru: 'Создаёт прямую экономическую ответственность предприятий за превышение нормативов выбросов.',
        },
      },
      {
        id: 't9-law-2',
        type: 'international',
        title: {
          uz: "Ozon qatlamini yemiruvchi moddalar bo'yicha Monreal protokoli (va Kigali tuzatishi)",
          en: 'Montreal Protocol on Substances that Deplete the Ozone Layer',
          ru: 'Монреальский протокол по веществам, разрушающим озоновый слой',
        },
        codeAndDate: {
          uz: '16.09.1987-yil (O‘zbekiston 1993-yildan ishtirokchi)',
          en: 'September 16, 1987 (Uzbekistan party since 1993)',
          ru: '16.09.1987 г. (Узбекистан — участник с 1993 г.)',
        },
        summary: {
          uz: "Sovitish va aerozol sanoatida xlorftoruglerodlar (freonlar) ishlab chiqarish hamda qo'llashni global miqyosda bosqichma-bosqich to'xtatishni ta'minladi.",
          en: 'Successfully phased out 99% of ozone-depleting chlorofluorocarbons (CFCs) globally and now curbs hydrofluorocarbons (HFCs).',
          ru: 'Обеспечил поэтапный вывод из обращения 99% озоноразрушающих фреонов и регулирование гидрофторуглеродов.',
        },
        significance: {
          uz: "Insoniyat tarixida barcha BMT davlatlari ratifikatsiya qilgan eng samarali xalqaro ekologik-iqtisodiy kelishuvdir.",
          en: 'Universally ratified treaty widely cited by economists as the gold standard of global environmental cooperation.',
          ru: 'Самый успешный в истории универсально ратифицированный международный природоохранный договор.',
        },
      },
      {
        id: 't9-law-3',
        type: 'international',
        title: {
          uz: "Metan ajratmalarini qisqartirish bo'yicha Global majburiyat (Global Methane Pledge)",
          en: 'Global Methane Pledge (COP26 Initiative)',
          ru: 'Глобальное обязательство по сокращению выбросов метана (Global Methane Pledge)',
        },
        codeAndDate: {
          uz: 'Noyabr 2021-yil (O‘zbekiston 2022-yilda Markaziy Osiyoda birinchilardan bo‘lib qo‘shilgan)',
          en: 'Launched Nov 2021 (Uzbekistan joined in 2022)',
          ru: 'Ноябрь 2021 г. (Узбекистан присоединился в 2022 г.)',
        },
        summary: {
          uz: "2030-yilga qadar energetika (gaz quvurlari sizishi), qishloq xo'jaligi va chiqindi poligonlaridan metan chiqishini 2020-yilga nisbatan global miqyosda 30 foizga qisqartirish maqsadini qo'yadi.",
          en: 'Targets a collective 30% reduction in global anthropogenic methane emissions by 2030 from 2020 levels across gas pipelines, waste, and livestock.',
          ru: 'Ставит коллективную цель сократить глобальные выбросы метана на 30% к 2030 году за счёт устранения утечек в газотранспортной сети и на свалках.',
        },
        significance: {
          uz: "Gaz quvurlaridagi metan sizishini to'xtatish O'zbekistonga bir vaqtda ham qimmatli yoqilg'ini tejash, ham iqlimga zararni kamaytirish foydasini beradi.",
          en: 'Fixing gas pipeline leaks in Uzbekistan captures marketable fuel while delivering fast near-term cooling benefits.',
          ru: 'Устранение утечек метана в газопроводах одновременно сберегает товарный газ и снижает климатическую нагрузку.',
        },
      },
    ],
    facts: [
      {
        uz: "Toshkent shahrida yirik elektrobuslar parki (mingdan ortiq zamonaviy elektrobus va SPG avtobuslar) joriy etilishi jamoat transportidan chiqadigan azot oksidlari va PM2.5 zarrachalarini minglab tonnaga kamaytirmoqda.",
        en: 'Deploying over a thousand battery-electric and CNG buses in Tashkent eliminates thousands of tonnes of tailpipe NOₓ and PM2.5 annually.',
        ru: 'Ввод в эксплуатацию сотен электробусов в Ташкенте сокращает выбросы оксидов азота и взвешенных частиц PM2.5 на тысячи тонн в год.',
      },
      {
        uz: "Metan (CH₄) atmosferada CO₂ ga qaraganda qisqaroq (~12 yil) yashasa-da, dastlabki 20 yil ichida issiqlikni CO₂ dan 80 barobardan ko'proq kuchli tutib qoladi (IPCC AR6).",
        en: 'Although methane persists ~12 years in the atmosphere, its 20-year warming potency is over 80 times stronger per tonne than CO₂ (IPCC AR6).',
        ru: 'Хотя метан живёт в атмосфере около 12 лет, на 20-летнем горизонте одна его тонна удерживает в 80 с лишним раз больше тепла, чем тонна CO₂.',
      },
      {
        uz: "Monreal protokoli sharofati bilan Antarktida ustidagi stratosfera ozon qatlami tiklanish yo'liga o'tdi va BMT ekspertlari uning 2060-yillarga borib to'liq tiklanishini prognoz qilmoqda.",
        en: 'Thanks to the Montreal Protocol, UNEP scientists project full recovery of the Antarctic stratospheric ozone layer around the 2060s.',
        ru: 'Благодаря Монреальскому протоколу озоновый слой Земли восстанавливается и, по прогнозам ЮНЕП, вернётся к норме к 2060-м годам.',
      },
    ],
    caseStudy: {
      title: {
        uz: "AQShda kislotali yomg'irlarga qarshi SO₂ kvotalar bozori (Cap-and-Trade ilk muvaffaqiyati)",
        en: 'The US Acid Rain SO₂ Cap-and-Trade Market: Blueprint for Emissions Trading',
        ru: 'Рынок квот на выбросы SO₂ в США: первый исторический успех Cap-and-Trade',
      },
      location: {
        uz: 'AQSh energetika sektori (va Yevropa / Osiyo ETS tizimlari uchun namuna)',
        en: 'United States Power Sector (Model for global Emissions Trading Systems)',
        ru: 'Электроэнергетика США (модель для мировых систем торговли квотами)',
      },
      challenge: {
        uz: "Ko'mir elektr stansiyalaridan chiqadigan oltingugurt dioksidi (SO₂) o'rmonlar va ko'llarni kislotali yomg'ir bilan zaharlar, ma'muriy buyruqbozlik esa juda qimmatga tushar edi.",
        en: 'Sulfur dioxide from coal power plants caused severe acid rain across forests and lakes, while uniform command-and-control scrubbers were costly.',
        ru: 'Выбросы SO₂ угольных ТЭС вызывали кислотные дожди, а директивное принуждение всех станций к одинаковым фильтрам обходилось слишком дорого.',
      },
      solution: {
        uz: "1990-yilgi Toza havo qonuni (Clean Air Act) asosida umumiy SO₂ limiti qisqartirilib, stansiyalar o'rtasida ruxsatnomalar erkin oldi-sotdisi (Cap-and-Trade) yo'lga qo'yildi.",
        en: 'The 1990 Clean Air Act Amendments capped aggregate SO₂ and let power plants buy and sell emission allowances based on marginal abatement costs.',
        ru: 'Поправки к Закону о чистом воздухе 1990 года установили верхний предел выбросов и разрешили электростанциям торговать квотами.',
      },
      economicOutcome: {
        uz: "SO₂ tashlamalari rejadagidan 3 yil oldin 50% ga kamaydi, dastur xarajati esa ma'muriy tartibga solish prognozidan 4 barobar arzon tushdi.",
        en: 'SO₂ emissions fell by over 50% ahead of schedule at roughly one-quarter of projected regulatory compliance cost.',
        ru: 'Выбросы SO₂ сократились более чем вдвое с опережением графика, а затраты оказались вчетверо ниже административного сценария.',
      },
    },
    terms: [
      {
        term: { uz: 'PM2.5 dispers zarrachalar', en: 'PM2.5 Fine Particulate Matter', ru: 'Взвешенные частицы PM2.5' },
        definition: {
          uz: "Aerodinamik diametri 2,5 mikrometrdan kichik bo'lgan qattiq va suyuq muallaq havo zarrachalari (tutun, chang, qurum, sulfatlar).",
          en: 'Inhalable airborne particles measuring 2.5 micrometers or smaller in diameter capable of entering the bloodstream.',
          ru: 'Мельчайшие твёрдые и жидкие частицы в воздухе диаметром до 2,5 микрометра, способные проникать в лёгкие и сосуды.',
        },
      },
      {
        term: { uz: 'Issiqxona samarasi', en: 'Greenhouse Effect', ru: 'Парниковый эффект' },
        definition: {
          uz: "Atmosferadagi suv bug'i, CO₂, CH₄ va boshqa gazlarning Yer sirtidan qaytgan infraqizil issiqlik nurlanishini tutib qolish hodisasi.",
          en: 'Trapping of outgoing terrestrial infrared radiation by atmospheric greenhouse gases such as water vapor, CO₂, and methane.',
          ru: 'Задержка теплового инфракрасного излучения земной поверхности парниковыми газами атмосферы.',
        },
      },
      {
        term: { uz: 'Albedo', en: 'Albedo', ru: 'Альбедо' },
        definition: {
          uz: "Sirtning (masalan, qor va muzliklarning) o'ziga tushayotgan quyosh nurlarini qaytarish qobiliyati koeffitsiyenti.",
          en: 'The fraction of incoming solar radiation reflected back into space by a surface such as snow, ice, or clouds.',
          ru: 'Отражательная способность поверхности (например, чистый снег и лёд имеют высокое альбедо, а загрязнённые сажей — низкое).',
        },
      },
      {
        term: { uz: 'Cap-and-Trade (kvotalar savdosi)', en: 'Cap-and-Trade System', ru: 'Система торговли квотами (ETS)' },
        definition: {
          uz: "Davlat tomonidan jami tashlamaga yuqori chegara (cap) o'rnatilib, korxonalarga bozorda kvotalarni sotish va xarid qilish (trade) huquqini beruvchi tizim.",
          en: 'Market-based regulation setting a firm aggregate emissions cap while allowing polluters to trade emission permits.',
          ru: 'Рыночный механизм, при котором государство ограничивает суммарный объём выбросов и разрешает предприятиям торговать квотами.',
        },
      },
    ],
    quiz: [
      {
        id: 'q9-1',
        question: {
          uz: "2024-yil holatiga ko'ra, Yer atmosferasidagi CO₂ konsentratsiyasi taxminan qancha darajaga yetdi (NOAA)?",
          en: 'Approximately what concentration did global atmospheric CO₂ reach in 2024 (NOAA Mauna Loa)?',
          ru: 'Какого уровня достигла среднегодовая концентрация CO₂ в атмосфере Земли в 2024 году (NOAA)?',
        },
        options: [
          { uz: 'Taxminan 422 ppm', en: 'Approximately 422 ppm', ru: 'Около 422 ppm' },
          { uz: '150 ppm', en: '150 ppm', ru: '150 ppm' },
          { uz: '280 ppm', en: '280 ppm', ru: '280 ppm' },
          { uz: '2 500 ppm', en: '2,500 ppm', ru: '2 500 ppm' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Sanoat inqilobigacha 280 ppm bo'lgan CO₂ konsentratsiyasi 2024-yilda 422 ppm dan oshdi.",
          en: 'Atmospheric CO₂ rose from ~280 ppm pre-industrially to above 422 ppm in 2024.',
          ru: 'Концентрация углекислого газа выросла с доиндустриальных 280 ppm до более чем 422 ppm в 2024 году.',
        },
      },
      {
        id: 'q9-2',
        question: {
          uz: "1987-yilgi Monreal protokoli qaysi global ekologik muammoni muvaffaqiyatli hal etishga qaratilgan?",
          en: 'Which global environmental threat was successfully addressed by the 1987 Montreal Protocol?',
          ru: 'На решение какой глобальной экологической проблемы направлен Монреальский протокол 1987 года?',
        },
        options: [
          { uz: 'Stratosfera ozon qatlamining yemirilishi', en: 'Depletion of the stratospheric ozone layer', ru: 'Разрушение стратосферного озонового слоя' },
          { uz: 'Tuproq sho‘rlanishi', en: 'Irrigated soil salinization', ru: 'Засоление орошаемых почв' },
          { uz: 'Shovqin ifloslanishi', en: 'Urban traffic noise', ru: 'Шумовое загрязнение городов' },
          { uz: 'Plastik paketlar savdosi', en: 'Single-use plastic bags', ru: 'Оборот пластиковых пакетов' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Monreal protokoli ozon yemiruvchi xlorftoruglerodlar (freonlar)ning 99 foizini muomaladan chiqarishga erishdi.",
          en: 'The Montreal Protocol phased out 99% of ozone-depleting CFCs globally.',
          ru: 'Монреальский протокол обеспечил отказ от 99% озоноразрушающих веществ в мире.',
        },
      },
      {
        id: 'q9-3',
        question: {
          uz: "Yirik shaharlarda (jumladan Toshkentda) havo ifloslanishining eng katta ulushi odatda qaysi manbaga to'g'ri keladi?",
          en: 'In major metropolitan areas like Tashkent, which source typically accounts for over 60% of gaseous air pollutant emissions?',
          ru: 'Какой источник формирует свыше 60% выбросов загрязняющих веществ в воздух крупных городов, включая Ташкент?',
        },
        options: [
          { uz: 'Ko‘chma manbalar (avtotransport vositalari)', en: 'Mobile sources (motor vehicles)', ru: 'Передвижные источники (автотранспорт)' },
          { uz: 'Kutubxonalar va maktablar', en: 'Libraries and schools', ru: 'Школы и библиотеки' },
          { uz: 'Quyosh fotoelektr panellari', en: 'Solar photovoltaic panels', ru: 'Солнечные панели' },
          { uz: 'Velosiped yo‘laklari', en: 'Bicycle lanes', ru: 'Велосипедные дорожки' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Ichki yonuv dvigatelli avtomobillar sonining o'sishi va tirbandliklar shahar atmosferasiga eng ko'p azot va uglerod oksidlari chiqaradi.",
          en: 'Growing vehicle fleets and congestion make mobile transport the dominant urban source of NOₓ and CO.',
          ru: 'Рост автопарка и заторы делают передвижные источники главным фактором загрязнения городского воздуха.',
        },
      },
      {
        id: 'q9-4',
        question: {
          uz: "Qora uglerod (qurum) zarrachalarining tog' muzliklari ustiga cho'kishi qanday fizik oqibatga olib keladi?",
          en: 'What physical effect occurs when black carbon soot settles on mountain glaciers?',
          ru: 'К какому физическому эффекту приводит оседание сажи (чёрного углерода) на горных ледниках?',
        },
        options: [
          { uz: "Muzlik albedosini pasaytirib, quyosh issiqligini ko'proq yutadi va erishni tezlashtiradi", en: 'Lowers surface albedo, absorbing more solar heat and accelerating melt', ru: 'Снижает альбедо поверхности, усиливая поглощение тепла и ускоряя таяние' },
          { uz: 'Muzlik qalinligini ikki barobar oshiradi', en: 'Doubles glacier ice thickness', ru: 'Удваивает толщину ледника' },
          { uz: 'Haroratni -50°C ga tushiradi', en: 'Cools the glacier to -50°C', ru: 'Охлаждает ледник до -50°C' },
          { uz: 'Hech qanday ta’sir ko‘rsatmaydi', en: 'Has zero physical impact', ru: 'Никак не влияет' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Qoraygan muz sirti quyosh nurini qaytarish (albedo) o'rniga yutadi, bu esa Pomir va Tyan-Shan muzliklarining erishini tezlashtiradi.",
          en: 'Darkened snow reflects less sunlight (lower albedo), speeding up glacial retreat in Central Asia.',
          ru: 'Загрязнённый снег меньше отражает солнечные лучи (падает альбедо) и быстрее тает.',
        },
      },
      {
        id: 'q9-5',
        question: {
          uz: "O'zbekiston 2022-yilda qo'shilgan «Global Methane Pledge» tashabbusining asosiy 2030 maqsadi nima?",
          en: 'What is the collective 2030 target of the Global Methane Pledge joined by Uzbekistan?',
          ru: 'Какова глобальная цель инициативы Global Methane Pledge к 2030 году, к которой присоединился Узбекистан?',
        },
        options: [
          { uz: 'Global metan ajratmalarini 2020-yilga nisbatan 30% ga kamaytirish', en: 'Cut global anthropogenic methane emissions by 30% below 2020 levels', ru: 'Сократить глобальные выбросы метана на 30% относительно уровня 2020 года' },
          { uz: 'Metan qazib olishni 300% ko‘paytirish', en: 'Increase methane venting by 300%', ru: 'Увеличить выбросы метана на 300%' },
          { uz: 'Azot gazini atmosferadan olib tashlash', en: 'Remove nitrogen from the atmosphere', ru: 'Удалить азот из атмосферы' },
          { uz: 'Shamol stansiyalarini to‘xtatish', en: 'Shut down wind turbines', ru: 'Остановить ветропарки' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Global Methane Pledge ishtirokchi davlatlari 2030-yilgacha metan tashlamalarini 2020-yil darajasiga nisbatan 30% qisqartirishni maqsad qilgan.",
          en: 'Signatory nations work toward a collective 30% cut in global methane emissions by 2030.',
          ru: 'Страны-участницы нацелены на коллективное снижение глобальных антропогенных выбросов метана на 30% к 2030 году.',
        },
      },
    ],
  },
];
