import { Topic } from '../types';

export const TOPICS_10_TO_12: Topic[] = [
  {
    id: 10,
    isIndependentStudy: false,
    iconName: 'Recycle',
    title: {
      uz: 'Chiqindilarni qayta ishlash va chiqindisiz texnologiya',
      en: 'Waste Recycling and Zero-Waste Circular Technologies',
      ru: 'Переработка отходов и безотходные циркулярные технологии',
    },
    shortDescription: {
      uz: "Chiqindi tasnifi va sirkulyar iqtisodiyot, biogaz va agro-chiqindilar energetikasi, kengaytirilgan ishlab chiqaruvchi javobgarligi (EPR) va O'zbekiston islohotlari.",
      en: 'Waste hierarchy and circular economy, biogas and agricultural residues, Extended Producer Responsibility (EPR), and Uzbekistan’s recycling reforms.',
      ru: 'Классификация отходов и циркулярная экономика, биогаз и агроотходы, расширенная ответственность производителя и реформы в Узбекистане.',
    },
    keywords: {
      uz: ['chiqindi', 'qayta ishlash', 'sirkulyar iqtisodiyot', 'biogaz', 'chiqindisiz texnologiya', 'EPR', 'Waste-to-Energy'],
      en: ['waste recycling', 'circular economy', 'biogas', 'zero-waste technology', 'EPR', 'waste-to-energy', 'landfill'],
      ru: ['переработка отходов', 'циркулярная экономика', 'биогаз', 'безотходные технологии', 'РОП', 'вторичное сырьё'],
    },
    sections: [
      {
        heading: {
          uz: '1. Chiqindilar tasnifi va chiziqli modeldan sirkulyar iqtisodiyotga o‘tish',
          en: '1. Waste Classification and the Shift from Linear to Circular Economy',
          ru: '1. Классификация отходов и переход от линейной к циркулярной экономике',
        },
        paragraphs: [
          {
            uz: "An'anaviy chiziqli iqtisodiyot «qazib olish — ishlab chiqarish — foydalanish — tashlab yuborish» (take-make-waste) zanjiriga asoslanib, qimmatbaho xomashyoning axlat poligonlarida ko'milib ketishiga olib keladi. Jahon bankining «What a Waste 2.0» va UNEP (2024) hisobotlariga ko'ra, dunyoda har yili 2,1–2,3 milliard tonna qattiq maishiy chiqindi (QMCh) hosil bo'lib, 2050-yilga borib bu ko'rsatkich 3,4–3,8 mlrd tonnaga yetishi mumkin.",
            en: 'Traditional linear production ("take–make–waste") discards valuable materials into landfills after a single use. According to the World Bank’s "What a Waste 2.0" and UNEP’s Global Waste Management Outlook (2024), humanity generates 2.1–2.3 billion tonnes of municipal solid waste (MSW) annually—projected to approach 3.4–3.8 billion tonnes by 2050 without circular intervention.',
            ru: 'Традиционная линейная экономика («добыть — произвести — выбросить») ведёт к потере ценных ресурсов на свалках. По данным Всемирного банка и ЮНЕП (2024), в мире ежегодно образуется 2,1–2,3 млрд тонн твёрдых бытовых отходов (ТБО), а к 2050 году этот объём может вырасти до 3,4–3,8 млрд тонн.',
          },
          {
            uz: "Chiqindilar kelib chiqishi va xavflilik sinfiga (I sinf — o'ta xavfli simobli lampalar va akkumulyatorlardan V sinf — deyarli xavfsiz inert chiqindilargacha) ko'ra maishiy, sanoat, qishloq xo'jaligi, qurilish, tibbiyot va elektron chiqindilarga (e-waste) ajratiladi. Sirkulyar iqtisodiyot «5R» iyerarxiyasiga tayanadi: rad etish (Refuse), kamaytirish (Reduce), qayta ishlatish (Reuse), qayta ishlash (Recycle) va energiya tiklash (Recover).",
            en: 'Wastes are classified by origin (municipal, industrial, agricultural, construction, medical, e-waste) and hazard class (Class I extremely hazardous mercury/batteries down to Class V inert materials). Circular economics prioritizes the waste hierarchy: Refuse, Reduce, Reuse, Recycle, and Energy Recovery—leaving landfilling as the last resort.',
            ru: 'Отходы классифицируются по происхождению (бытовые, промышленные, аграрные, строительные, медицинские, электронные) и классам опасности (от I чрезвычайно опасного до V практически неопасного). Циркулярная модель строится на иерархии «5R»: предотвращение, сокращение, повторное использование, рециклинг и рекуперация энергии.',
          },
        ],
        keyTakeaway: {
          uz: "1 tonna alyuminiyni ikkilamchi qayta ishlash boksit rudasidan birlamchi alyuminiy eritishga qaraganda elektr energiyasini 95% ga tejaydi!",
          en: 'Recycling 1 tonne of secondary aluminum saves 95% of the electricity required to smelt primary aluminum from bauxite ore.',
          ru: 'Вторичная переработка 1 тонны алюминия экономит до 95% электроэнергии по сравнению с первичной выплавкой из бокситов.',
        },
      },
      {
        heading: {
          uz: "2. Qishloq xo'jaligi chiqindilari, biogaz va chiqindisiz texnologiyalar",
          en: '2. Agricultural Residues, Biogas, and Zero-Waste Industrial Processes',
          ru: '2. Сельскохозяйственные отходы, биогаз и безотходные технологии',
        },
        paragraphs: [
          {
            uz: "Qishloq xo'jaligi va chorvachilik majmualarida to'planadigan organik chiqindilar ochiq holda chiriganda atmosferaga kuchli issiqxona gazi — metan hamda ammiak ajratadi. Anaerob bijg'itish (kislorodsiz muhitda bakterial parchalash) texnologiyasi orqali ushbu organik massadan ikki xil yuqori iqtisodiy mahsulot olinadi: elektr va issiqlik beruvchi biogaz (55–70% metan) hamda kimyoviy o'g'itlar o'rnini bosuvchi ekologik toza bio-gumus.",
            en: 'Untreated livestock manure and crop residues emit potent methane and leach nitrates into groundwater. Anaerobic digestion converts organic farm waste into two lucrative revenue streams: renewable biogas (55–70% biomethane for combined heat and power) and nutrient-rich organic digestate (bio-humus) that restores soil fertility.',
            ru: 'Непереработанные отходы животноводства и растениеводства выделяют метан и загрязняют водоёмы нитратами. Анаэробное сбраживание в биогазовых установках превращает органику сразу в два ликвидных продукта: биогаз (55–70% метана для генерации тепла и электричества) и высокоценное биоудобрение (биогумус).',
          },
          {
            uz: "Sanoatda chiqindisiz (kam chiqindili) texnologiya «sanoat simbiozi» tamoyilida ishlaydi: bir korxonaning ikkilamchi chiqindisi boshqa korxona uchun xomashyo bo'ladi. Masalan, issiqlik elektr stansiyalari kul-shlaklari va metallurgiya shlaklaridan yuqori mustahkamlikdagi sement va gazobeton bloklar ishlab chiqariladi, g'o'zapoya va sholi qobig'idan esa MDF plitalar hamda bio-yoqilg'i granulalari (pelletlar) olinadi.",
            en: 'Zero-waste industrial engineering applies "industrial symbiosis," where one plant’s byproduct becomes another’s feedstock—such as blending thermal power fly-ash and metallurgical slag into low-carbon cement, or pressing cotton stalks into engineered wood boards and biofuel pellets.',
            ru: 'Безотходное производство опирается на принцип «промышленного симбиоза», когда отходы одного цеха становятся сырьём другого: зола ТЭС и металлургические шлаки идут на производство цемента и газобетона, а стебли хлопчатника (гузапая) — на древесные плиты и топливные пеллеты.',
          },
        ],
      },
      {
        heading: {
          uz: "3. O'zbekistonda chiqindilarni boshqarish holati va yangi islohotlar",
          en: '3. Waste Management Status and Circular Reforms in Uzbekistan',
          ru: '3. Состояние и перспективы управления отходами в Узбекистане',
        },
        paragraphs: [
          {
            uz: "O'zbekistonda yiliga o'rtacha 7–10 million tonna atrofida qattiq maishiy chiqindi (va 100 mln tonnadan ortiq sanoat/tog'-kon chiqindilari) hosil bo'ladi. So'nggi yillarda davlat-xususiy sheriklik (DXSh) klasterlari tashkil etilib, maishiy chiqindilarni olib chiqish bilan aholini qamrab olish darajasi 90 foizdan oshirildi, biroq qayta ishlash ulushini 30–35 foizdan 60 foizgacha ko'tarish dolzarb vazifa bo'lib turibdi.",
            en: 'Uzbekistan generates roughly 7–10 million tonnes of municipal solid waste annually (alongside >100 million tonnes of mining/industrial tailings). Public-Private Partnership (PPP) sanitation clusters have raised residential collection coverage above 90%, while national policy focuses on lifting MSW recycling rates toward 50–60%.',
            ru: 'В Узбекистане ежегодно образуется около 7–10 млн тонн твёрдых бытовых отходов (не считая вскрышных и промышленных пород). Кластеры ГЧП довели охват населения вывозом ТБО свыше 90%, и сейчас ключевой задачей является кратное повышение глубины переработки вторсырья.',
          },
          {
            uz: "2024-yilgi PF-5-son Prezident Farmoni va yangi ekologik islohotlar doirasida Chiqindilarni boshqarish va sirkulyar iqtisodiyotni rivojlantirish agentligi faoliyati yo'lga qo'yildi, Toshkent, Samarqand, Andijon, Farg'ona va boshqa hududlarda xorijiy investorlar bilan chiqindini yoqish orqali elektr energiyasi olish (Waste-to-Energy) hamda poligon gazini ushlash loyihalari boshlandi.",
            en: 'Under Presidential Decree PF-5 (2024) and subsequent reforms, Uzbekistan established a dedicated Waste Management and Circular Economy Agency and launched international PPP projects for landfill-gas capture and modern Waste-to-Energy thermal plants in Tashkent, Samarkand, Fergana, and Andijan.',
            ru: 'В рамках Указа № УП-5 (2024 г.) и сопутствующих реформ создано профильное Агентство по управлению отходами и развитию циркулярной экономики, а также запущены инвестпроекты по дегазации полигонов и строительству заводов энергетической утилизации (Waste-to-Energy).',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '2.3',
        unit: { uz: 'mlrd tonna/yil', en: 'bln tonnes/yr', ru: 'млрд тонн/год' },
        label: {
          uz: 'Global miqyosda yillik hosil bo‘ladigan qattiq maishiy chiqindilar hajmi',
          en: 'Annual global municipal solid waste (MSW) generation',
          ru: 'Мировой ежегодный объём образования твёрдых бытовых отходов',
        },
        year: '2023',
        source: { uz: 'UNEP Global Waste Management Outlook 2024', en: 'UNEP Global Waste Outlook 2024', ru: 'Доклад ЮНЕП по отходам (2024)' },
      },
      {
        value: '62',
        unit: { uz: 'mln tonna/yil', en: 'mln tonnes/yr', ru: 'млн тонн/год' },
        label: {
          uz: 'Jahonda yillik elektron chiqindilar (e-waste) hajmi (atigi 22,3% rasmiy qayta ishlanadi)',
          en: 'Global annual e-waste generated (only 22.3% formally recycled)',
          ru: 'Мировой объём электронных отходов в год (официально перерабатывается 22,3%)',
        },
        year: '2022',
        source: { uz: 'BMT Global E-waste Monitor (ITU / UNITAR)', en: 'UN Global E-waste Monitor 2024', ru: 'Глобальный мониторинг э-отходов ООН' },
      },
      {
        value: '~7–10',
        unit: { uz: 'mln tonna/yil', en: 'mln tonnes/yr', ru: 'млн тонн/год' },
        label: {
          uz: "O'zbekistonda yillik hosil bo'ladigan qattiq maishiy chiqindilar hajmi",
          en: 'Annual municipal solid waste generated in Uzbekistan',
          ru: 'Годовой объём образования ТБО в Республике Узбекистан',
        },
        year: '2023',
        source: { uz: 'Ekologiya vazirligi ma’lumotlari', en: 'Ministry of Ecology of Uzbekistan', ru: 'Данные Минэкологии РУз' },
        isApproximate: true, // TODO: tekshiring (turli yillarda ~7,2 mln t dan ~10 mln t gacha baholangan)
      },
      {
        value: '95%',
        unit: { uz: 'energiya tejami', en: 'energy saved', ru: 'экономия энергии' },
        label: {
          uz: 'Ikkilamchi alyuminiyni qayta ishlashda birlamchi rudaga nisbatan tejaladigan elektr energiyasi',
          en: 'Electricity saved by recycling aluminum vs. smelting virgin bauxite',
          ru: 'Экономия электроэнергии при переработке вторичного алюминия против первичного',
        },
        year: '2023',
        source: { uz: 'International Aluminium Institute / UNEP', en: 'International Aluminium Institute', ru: 'Международный институт алюминия' },
      },
    ],
    charts: [
      {
        id: 't10-energy-savings',
        type: 'bar',
        title: {
          uz: 'Ikkilamchi xomashyoni qayta ishlashda birlamchi ishlab chiqarishga nisbatan energiya tejami (%)',
          en: 'Energy Savings from Secondary Recycling Relative to Virgin Production (%)',
          ru: 'Экономия энергии при вторичной переработке сырья по сравнению с первичным производством (%)',
        },
        subtitle: {
          uz: 'Sirkulyar iqtisodiyotning to‘g‘ridan-to‘g‘ri energetik samaradorligi',
          en: 'Direct industrial energy efficiency gains of circular material loops',
          ru: 'Прямой энергетический выигрыш замкнутых материальных циклов',
        },
        source: { uz: 'UNEP / US EPA Recycling Life-Cycle Data', en: 'UNEP / EPA Life-Cycle Analysis', ru: 'ЮНЕП / Анализ жизненного цикла' },
        unit: '%',
        seriesName: { uz: 'Tejalgan energiya (%)', en: 'Energy Saved (%)', ru: 'Экономия энергии (%)' },
        data: [
          { name: { uz: 'Alyuminiy', en: 'Aluminum', ru: 'Алюминий' }, value: 95 },
          { name: { uz: 'Mis', en: 'Copper', ru: 'Медь' }, value: 85 },
          { name: { uz: 'Plastik (PET)', en: 'Plastics (PET)', ru: 'Пластик (ПЭТ)' }, value: 76 },
          { name: { uz: 'Po‘lat (temir)', en: 'Steel', ru: 'Сталь' }, value: 68 },
          { name: { uz: 'Qog‘oz va karton', en: 'Paper & Cardboard', ru: 'Бумага и картон' }, value: 60 },
        ],
      },
      {
        id: 't10-msw-composition',
        type: 'pie',
        title: {
          uz: 'Maishiy chiqindilarning o‘rtacha morfologik tarkibi (%)',
          en: 'Typical Municipal Solid Waste Composition Profile (%)',
          ru: 'Средний морфологический состав твёрдых бытовых отходов (%)',
        },
        subtitle: {
          uz: 'Organik va qayta ishlanadigan fraksiyalarning yuqori salohiyati',
          en: 'Over 80% of household waste is compostable/biogas organic or recyclable',
          ru: 'Высокий потенциал компостирования органики и отбора вторсырья',
        },
        source: { uz: 'Jahon banki What a Waste 2.0', en: 'World Bank What a Waste 2.0', ru: 'Всемирный банк What a Waste 2.0' },
        unit: '%',
        seriesName: { uz: 'Ulush (%)', en: 'Share (%)', ru: 'Доля (%)' },
        data: [
          { name: { uz: 'Oziq-ovqat va organik', en: 'Food & Organic Waste', ru: 'Пищевые и органические' }, value: 44 },
          { name: { uz: 'Qog‘oz va karton', en: 'Paper & Cardboard', ru: 'Бумага и картон' }, value: 17 },
          { name: { uz: 'Plastik', en: 'Plastics', ru: 'Пластик' }, value: 12 },
          { name: { uz: 'Shisha va metall', en: 'Glass & Metals', ru: 'Стекло и металл' }, value: 9 },
          { name: { uz: 'Boshqa fraksiyalar', en: 'Other / Residual', ru: 'Прочие фракции' }, value: 18 },
        ],
      },
    ],
    laws: [
      {
        id: 't10-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Chiqindilar to'g'risida»gi Qonuni",
          en: 'Law of the Republic of Uzbekistan "On Waste"',
          ru: 'Закон Республики Узбекистан «Об отходах»',
        },
        codeAndDate: {
          uz: '05.04.2002-yil, 362-II-son',
          en: 'April 5, 2002, No. 362-II',
          ru: '05.04.2002 г., № 362-II',
        },
        summary: {
          uz: "Chiqindilar bilan bog'liq ishlarni amalga oshirish, xavfli chiqindilarni pasportlashtirish, chiqindilarni joylashtirish limitlari va qayta ishlashni iqtisodiy rag'batlantirish tartibini belgilaydi.",
          en: 'Governs waste handling standards, hazardous waste passports, landfill limits, and fiscal incentives for secondary material recovery.',
          ru: 'Регулирует обращение с отходами, паспортизацию опасных отходов, лимиты размещения и экономическое стимулирование переработки.',
        },
        significance: {
          uz: "Ruxsatsiz chiqindixonalar tashkil etishni taqiqlab, tarmoqqa xususiy operatorlar kirishiga zamin yaratdi.",
          en: 'Outlaws illegal dumping and underpins PPP sanitation concessions.',
          ru: 'Запрещает стихийные свалки и создаёт правовую базу для частных перерабатывающих кластеров.',
        },
      },
      {
        id: 't10-law-2',
        type: 'presidential',
        title: {
          uz: "Chiqindilarni boshqarish tizimini takomillashtirish va ularning ekologik vaziyatga salbiy ta'sirini kamaytirish chora-tadbirlari",
          en: 'Presidential Decree on Improving Waste Management Systems and Circularity',
          ru: 'Указ Президента о совершенствовании системы управления отходами и снижении их негативного воздействия',
        },
        codeAndDate: {
          uz: 'PF-5-son Farmon, 04.01.2024-yil',
          en: 'Presidential Decree No. PF-5, January 4, 2024',
          ru: 'Указ Президента № УП-5 от 04.01.2024 г.',
        },
        summary: {
          uz: "Chiqindilarni saralab yig'ish tizimini bosqichma-bosqich joriy etish, poligonlarni rekultivatsiya qilish, ekologik yig'imlar va Waste-to-Energy loyihalarini nazarda tutadi.",
          en: 'Introduces phased source-separation of MSW, landfill remediation, eco-fees, and Waste-to-Energy investment frameworks.',
          ru: 'Вводит поэтапный раздельный сбор ТБО, рекультивацию полигонов, экологические сборы и проекты энергетической утилизации.',
        },
        significance: {
          uz: "Poligonlarga ko'miladigan chiqindi hajmini qisqartirib, sirkulyar bozorni shakllantiradi.",
          en: 'Accelerates diversion of recyclables and organics away from open municipal landfills.',
          ru: 'Сокращает захоронение на полигонах и запускает полноценный рынок вторичных материальных ресурсов.',
        },
      },
      {
        id: 't10-law-3',
        type: 'international',
        title: {
          uz: "Xavfli chiqindilarni transchegaraviy tashish va ularni yo'q qilish ustidan nazorat qilish to'g'risidagi Bazel konvensiyasi",
          en: 'Basel Convention on the Control of Transboundary Movements of Hazardous Wastes',
          ru: 'Базельская конвенция о контроле за трансграничной перевозкой опасных отходов',
        },
        codeAndDate: {
          uz: '22.03.1989-yil (O‘zbekiston 1996-yilda qo‘shilgan)',
          en: 'March 22, 1989 (Uzbekistan acceded in 1996)',
          ru: '22.03.1989 г. (Узбекистан присоединился в 1996 г.)',
        },
        summary: {
          uz: "Zaharli sanoat, kimyoviy va plastik chiqindilarning rivojlangan davlatlardan rivojlanayotgan davlatlarga noqonuniy olib kirilishini taqiqlaydi va oldindan xabardor rozilik tartibini o'rnatadi.",
          en: 'Restricts cross-border dumping of toxic industrial, electronic, and contaminated plastic wastes without Prior Informed Consent.',
          ru: 'Предотвращает незаконный ввоз токсичных промышленных, электронных и пластиковых отходов через процедуру предварительного согласия.',
        },
        significance: {
          uz: "Mamlakat hududini tashqi xavfli chiqindilar importidan huquqiy himoya qiladi.",
          en: 'Shields national territory from becoming a destination for hazardous foreign waste.',
          ru: 'Обеспечивает экологическую безопасность границ от ввоза опасных отходов.',
        },
      },
    ],
    facts: [
      {
        uz: "Daniyaning Kalundborg shahri 1970-yillardan beri «sanoat simbiozi»ning jahon namunasi sanaladi: u yerda elektr stansiyasi, neftni qayta ishlash, farmatsevtika va gipsokarton zavodlari o'zaro bug', suv va ikkilamchi gips almashib, yiliga 24 mln yevro va 600 ming tonna CO₂ tejaydi.",
        en: 'Kalundborg, Denmark pioneered industrial symbiosis—linking a power station, refinery, pharma plant, and gypsum board maker to save €24M and 600k tonnes of CO₂ annually.',
        ru: 'Датский Калуннборг — мировой эталон промышленного симбиоза: обмен паром, водой и побочным гипсом между заводами экономит 24 млн евро и 600 тыс. т CO₂ в год.',
      },
      {
        uz: "1 tonna elektron chiqindi (eski smartfon va kompyuter platalari) tarkibida o'rtacha oltin rudasi konidagiga qaraganda 50–100 barobar ko'proq oltin bor («shahar konchiligi» — urban mining).",
        en: 'One tonne of discarded circuit boards contains 50–100 times higher gold concentration than average mined gold ore—a practice called "urban mining."',
        ru: 'В одной тонне электронных плат содержится в 50–100 раз больше золота, чем в тонне обычной золотоносной руды («городская добыча» — urban mining).',
      },
      {
        uz: "Toshkent viloyati Ohangaron tumanidagi yangi maishiy chiqindi poligonida chiqindi qatlamlaridan ajraladigan metan gazini quvurlar orqali yig'ib, elektr energiyasi ishlab chiqarish loyihasi amalga oshirildi.",
        en: 'At Tashkent Region’s Akhangaran sanitary landfill, captured landfill biogas is piped into generators to produce clean grid electricity.',
        ru: 'На полигоне ТБО в Ахангаранском районе Ташкентской области внедрён сбор свалочного биогаза для выработки электроэнергии.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Germaniya «Pfand» garov tizimi va Kengaytirilgan ishlab chiqaruvchi javobgarligi (EPR)",
        en: 'Germany’s Deposit-Return (Pfand) and Extended Producer Responsibility Model',
        ru: 'Залоговая система возврата тары (Pfand) и РОП в Германии',
      },
      location: {
        uz: 'Germaniya (va Yevropa Ittifoqi sirkulyar qadoqlash bozori)',
        en: 'Germany & European Union Packaging Market',
        ru: 'Германия (и рынок упаковки Европейского союза)',
      },
      challenge: {
        uz: "Bir martalik plastik (PET) idishlar va alyuminiy bankalarning ko'chalarda hamda poligonlarda to'planib ketishi munitsipal budjetlarga katta yuk bo'layotgan edi.",
        en: 'Single-use PET bottles and beverage cans littered cities and strained municipal waste collection budgets.',
        ru: 'Одноразовые ПЭТ-бутылки и алюминиевые банки перегружали муниципальные бюджеты на уборку и свалки.',
      },
      solution: {
        uz: "Har bir ichimlik idishi narxiga 0,25 yevro qaytariladigan garov qiymati (Pfand) qo'shildi va supermarketlarda avtomatik qabul qiluvchi «fandomatlar» o'rnatildi.",
        en: 'A €0.25 refundable deposit per container paired with automated supermarket reverse-vending machines aligned consumer incentives.',
        ru: 'Введена залоговая стоимость 0,25 евро за бутылку/банку и сеть автоматических фандоматов в супермаркетах.',
      },
      economicOutcome: {
        uz: "Plastik va alyuminiy idishlarning 98 foizdan ortig'i toza holda qayta ishlashga qaytmoqda va oziq-ovqat darajasidagi yangi idishlar (bottle-to-bottle) tayyorlanmoqda.",
        en: 'Over 98% of PET bottles and cans are returned clean for high-grade bottle-to-bottle closed-loop manufacturing.',
        ru: 'Более 98% ПЭТ-бутылок и банок возвращаются в чистом виде в замкнутый цикл переработки «бутылка в бутылку».',
      },
    },
    terms: [
      {
        term: { uz: 'Sirkulyar (aylanma) iqtisodiyot', en: 'Circular Economy', ru: 'Циркулярная экономика' },
        definition: {
          uz: "Mahsulot va materiallarni uzoq muddat muomalada saqlash, ta'mirlash va to'liq qayta ishlash orqali chiqindini nolga yaqinlashtiruvchi iqtisodiy model.",
          en: 'Regenerative economic model designed to eliminate waste by keeping products, components, and materials in closed-loop circulation.',
          ru: 'Модель экономики замкнутого цикла, исключающая потерю ресурсов за счёт экодизайна, ремонта и глубокого рециклинга.',
        },
      },
      {
        term: { uz: 'Kengaytirilgan ishlab chiqaruvchi javobgarligi (EPR)', en: 'Extended Producer Responsibility (EPR)', ru: 'Расширенная ответственность производителя (РОП)' },
        definition: {
          uz: "Tovar ishlab chiqaruvchi yoki import qiluvchining mahsulot iste'moldan chiqqandan keyin uning qadog'i va qoldig'ini utilizatsiya qilish bo'yicha moliyaviy majburiyati.",
          en: 'Policy principle making manufacturers financially or physically responsible for post-consumer collection and recycling of their products.',
          ru: 'Экономико-правовой механизм, обязывающий производителей и импортёров обеспечивать утилизацию товаров и упаковки после утраты потребительских свойств.',
        },
      },
      {
        term: { uz: 'Biogaz', en: 'Biogas', ru: 'Биогаз' },
        definition: {
          uz: "Qishloq xo'jaligi, oziq-ovqat va oqova suv organik qoldiqlarining kislorodsiz (anaerob) bijg'ishidan olinadigan metanga boy tiklanadigan gaz yoqilg'isi.",
          en: 'Methane-rich renewable gas fuel produced via anaerobic bacterial digestion of agricultural manure, food waste, or sewage sludge.',
          ru: 'Горючий газ с высоким содержанием метана, получаемый при анаэробном брожении органических отходов агросектора и очистных сооружений.',
        },
      },
      {
        term: { uz: 'Sanoat simbiozi', en: 'Industrial Symbiosis', ru: 'Промышленный симбиоз' },
        definition: {
          uz: "Turli tarmoq korxonalarining o'zaro hamkorligi bo'lib, unda bir korxona chiqindisi yoki ortiqcha issiqligi boshqasi uchun xomashyo bo'lib xizmat qiladi.",
          en: 'Inter-firm collaboration where waste materials, water, or waste heat from one industrial process serve as inputs for another.',
          ru: 'Кооперация предприятий разных отраслей, при которой побочные продукты, вода или тепло одного производства становятся ресурсом другого.',
        },
      },
    ],
    quiz: [
      {
        id: 'q10-1',
        question: {
          uz: "1 tonna ikkilamchi alyuminiyni qayta ishlash birlamchi boksit rudasidan eritishga nisbatan qancha elektr energiyasini tejaydi?",
          en: 'Roughly what percentage of electricity is saved by recycling aluminum compared to primary smelting from bauxite?',
          ru: 'Сколько процентов электроэнергии экономит вторичная переработка алюминия по сравнению с первичной выплавкой из руды?',
        },
        options: [
          { uz: 'Taxminan 95%', en: 'Approximately 95%', ru: 'Около 95%' },
          { uz: 'Atigi 5%', en: 'Only 5%', ru: 'Всего 5%' },
          { uz: 'Energiya tejalmaydi', en: 'Zero energy saved', ru: 'Энергия не экономится' },
          { uz: '15%', en: '15%', ru: '15%' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Boksitdan elektroliz yo'li bilan alyuminiy olish juda ko'p elektr yutadi; ikkilamchi eritish esa 95% energiyani tejaydi.",
          en: 'Skipping electrolytic reduction of alumina cuts energy consumption by ~95%.',
          ru: 'Отсутствие стадии энергоёмкого электролиза глинозёма позволяет сэкономить до 95% электроэнергии.',
        },
      },
      {
        id: 'q10-2',
        question: {
          uz: "Chorvachilik va qishloq xo'jaligi organik chiqindilarini anaerob bijg'itish natijasida qanday ikki mahsulot olinadi?",
          en: 'What two valuable outputs are produced by anaerobic digestion of organic farm waste?',
          ru: 'Какие два экономически ценных продукта получаются при анаэробном сбраживании агроотходов?',
        },
        options: [
          { uz: 'Biogaz (energiya) va bio-gumus (organik o‘g‘it)', en: 'Biogas (clean energy) and bio-humus (organic fertilizer)', ru: 'Биогаз (энергия) и биогумус (органическое удобрение)' },
          { uz: 'Toshko‘mir va qo‘rg‘oshin', en: 'Hard coal and lead', ru: 'Каменный уголь и свинец' },
          { uz: 'Sement va shisha', en: 'Cement and glass', ru: 'Цемент и стекло' },
          { uz: 'Freon gazi va simob', en: 'CFCs and mercury', ru: 'Фреон и ртуть' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Biogaz qurilmasi bir vaqtda metan yoqilg'isi va tuproq unumdorligini oshiruvchi yuqori sifatli bio-o'g'it beradi.",
          en: 'Anaerobic digesters capture biomethane for heat/power while yielding pathogen-free organic fertilizer.',
          ru: 'Биогазовый реактор вырабатывает метан для энергоснабжения и обеззараженное органическое удобрение.',
        },
      },
      {
        id: 'q10-3',
        question: {
          uz: "Xavfli chiqindilarni transchegaraviy tashish ustidan xalqaro nazorat qaysi konvensiya bilan tartibga solinadi?",
          en: 'Which international treaty regulates transboundary movements of hazardous wastes?',
          ru: 'Какая международная конвенция регулирует контроль за трансграничной перевозкой опасных отходов?',
        },
        options: [
          { uz: 'Bazel konvensiyasi (1989)', en: 'Basel Convention (1989)', ru: 'Базельская конвенция (1989)' },
          { uz: 'Chikago aviatsiya konvensiyasi', en: 'Chicago Aviation Convention', ru: 'Чикагская конвенция авиации' },
          { uz: 'Bern mualliflik konvensiyasi', en: 'Berne Copyright Convention', ru: 'Бернская конвенция об авторском праве' },
          { uz: 'Vena diplomatik konvensiyasi', en: 'Vienna Diplomatic Convention', ru: 'Венская дипломатическая конвенция' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "1989-yilgi Bazel konvensiyasi (O'zbekiston 1996-y. qo'shilgan) xavfli chiqindilarning noqonuniy xalqaro harakatini cheklaydi.",
          en: 'The 1989 Basel Convention governs cross-border hazardous and plastic waste shipments.',
          ru: 'Базельская конвенция 1989 года защищает страны от незаконного ввоза опасных отходов.',
        },
      },
      {
        id: 'q10-4',
        question: {
          uz: "Tovar qadog'ini iste'moldan keyin qayta ishlash xarajatini ishlab chiqaruvchi zimmasiga yuklovchi tamoyil qanday ataladi?",
          en: 'What policy mechanism assigns post-consumer packaging recycling responsibility to manufacturers?',
          ru: 'Как называется принцип, возлагающий на производителей обязанность по утилизации товаров и упаковки после использования?',
        },
        options: [
          { uz: 'Kengaytirilgan ishlab chiqaruvchi javobgarligi (EPR / РОП)', en: 'Extended Producer Responsibility (EPR)', ru: 'Расширенная ответственность производителя (РОП)' },
          { uz: 'Mutlaq ustunlik nazariyasi', en: 'Theory of Absolute Advantage', ru: 'Теория абсолютных преимуществ' },
          { uz: ' Xarid qobiliyati pariteti', en: 'Purchasing Power Parity', ru: 'Паритет покупательной способности' },
          { uz: ' Monetar targetlash', en: 'Monetary targeting', ru: 'Монетарное таргетирование' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "EPR (Extended Producer Responsibility) kompaniyalarni oson qayta ishlanadigan ekodizayn qadoqlar yaratishga rag'batlantiradi.",
          en: 'EPR internalizes end-of-life waste costs into product design and corporate pricing.',
          ru: 'Механизм РОП стимулирует компании проектировать перерабатываемую упаковку и финансировать сбор вторсырья.',
        },
      },
      {
        id: 'q10-5',
        question: {
          uz: "Bir korxona chiqindisi yoki bug'ining qo'shni korxona uchun xomashyo bo'lib xizmat qilishi nima deb ataladi?",
          en: 'What term describes neighboring factories exchanging waste heat, water, and byproducts as feedstocks?',
          ru: 'Как называется кооперация предприятий, при которой отходы одного завода служат сырьём для другого?',
        },
        options: [
          { uz: 'Sanoat simbiozi', en: 'Industrial symbiosis', ru: 'Промышленный симбиоз' },
          { uz: ' Demping savdosi', en: 'Predatory dumping', ru: 'Товарный демпинг' },
          { uz: ' Stagnatsiya', en: 'Economic stagnation', ru: 'Экономическая стагнация' },
          { uz: ' Inflyatsion spiral', en: 'Inflationary spiral', ru: 'Инфляционная спираль' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Sanoat simbiozi (masalan, Kalundborg klasteri) chiqindisiz texnologiyaning eng yuqori klaster shaklidir.",
          en: 'Industrial symbiosis mimics natural ecosystems by closing material and energy loops across co-located industries.',
          ru: 'Промышленный симбиоз воспроизводит природные циклы в индустриальных парках, сводя отходы к минимуму.',
        },
      },
    ],
  },

  {
    id: 11,
    isIndependentStudy: true,
    iconName: 'ThermometerSun',
    title: {
      uz: "Iqlim o'zgarishlari va ekologik muvozanat",
      en: 'Climate Change Economics and Ecological Equilibrium',
      ru: 'Изменение климата и экологическое равновесие',
    },
    shortDescription: {
      uz: "Iqlim omillari va Stern/IPCC hisob-kitoblari, xalqaro iqlim muzokaralari (UNFCCC, Kioto, Parij), Markaziy Osiyoda qurg'oqchilik, mitiqatsiya va adaptatsiya.",
      en: 'Climate drivers and Stern/IPCC economics, global negotiations (UNFCCC, Kyoto, Paris), Central Asian drought risks, mitigation, and adaptation.',
      ru: 'Климатические факторы и экономика МГЭИК, переговоры (РКИК, Киото, Париж), засухи в ЦА, политика смягчения и адаптации.',
    },
    keywords: {
      uz: ['iqlim o‘zgarishi', 'UNFCCC', 'Kioto protokoli', 'Parij kelishuvi', 'mitigatsiya', 'adaptatsiya', 'qurg‘oqchilik', 'NDC'],
      en: ['climate change', 'UNFCCC', 'Kyoto Protocol', 'Paris Agreement', 'mitigation', 'adaptation', 'drought', 'social cost of carbon'],
      ru: ['изменение климата', 'РКИК ООН', 'Киотский протокол', 'Парижское соглашение', 'митигация', 'адаптация', 'засуха'],
    },
    sections: [
      {
        heading: {
          uz: '1. Iqlim o‘zgarishi omillari va harakatsizlikning iqtisodiy bahosi',
          en: '1. Drivers of Climate Change and the Macroeconomic Cost of Inaction',
          ru: '1. Факторы изменения климата и экономическая цена бездействия',
        },
        paragraphs: [
          {
            uz: "Iqlim o'zgarishi bo'yicha hukumatlararo ekspertlar guruhining (IPCC AR6) oltinchi baholash hisoboti sanoatgacha bo'lgan davrga (1850–1900) nisbatan global o'rtacha sirt harorati +1,1°C — +1,3°C dan ortiq ko'tarilganini (2023–2024-yillarda anomal yillik o'rtacha +1,45°C atrofida qayd etildi, WMO) va buning asosiy sababi inson faoliyati ekanini qat'iy tasdiqladi. Markaziy Osiyoda isish tezligi global o'rtacha ko'rsatkichdan qariyb ikki barobar yuqori kechmoqda.",
            en: 'The Intergovernmental Panel on Climate Change (IPCC AR6) confirms unequivocally that human emissions have warmed global surface temperatures by >1.1–1.3°C above 1850–1900 levels (with 2023–2024 annual anomalies nearing +1.45°C per WMO). Critically, landlocked Central Asia is warming at roughly twice the global average rate.',
            ru: 'Шестой оценочный доклад МГЭИК (IPCC AR6) однозначно подтвердил антропогенный характер современного потепления более чем на +1,1–1,3°C к доиндустриальному уровню (в рекордные 2023–2024 годы аномалия достигала ~+1,45°C по данным ВМО). В континентальной Центральной Азии темпы потепления примерно вдвое превышают среднемировые.',
          },
          {
            uz: "Nikolas Sternning mashhur «Iqlim o'zgarishi iqtisodiyoti ma'ruzasi» (Stern Review) fundamental iqtisodiy xulosani asoslab berdi: iqlim o'zgarishini yumshatishga global YaIMning yiliga 1–2 foizini sarflash — harakatsizlik oqibatida kelajakda global YaIMning doimiy 5 foizdan 20 foizigacha yo'qotilishining oldini oladigan eng oqilona makroiqtisodiy sug'urtadir.",
            en: 'Nicholas Stern’s seminal Review on the Economics of Climate Change established the core cost-benefit logic: investing 1–2% of global GDP annually in clean decarbonization avoids permanent future climate damages equivalent to 5–20% of global GDP.',
            ru: 'Знаменитый «Доклад Стерна» обосновал ключевую макроэкономическую пропорцию: ежегодные инвестиции в декарбонизацию в размере 1–2% мирового ВВП позволяют предотвратить необратимые будущие потери в масштабе от 5% до 20% глобального ВВП.',
          },
        ],
        keyTakeaway: {
          uz: "Uglerodning ijtimoiy qiymati (Social Cost of Carbon — SCC) atmosferaga chiqarilgan qo'shimcha 1 tonna CO₂ ning kelajakdagi jami iqtisodiy zararini pulda ifodalaydi.",
          en: 'The Social Cost of Carbon (SCC) monetizes the discounted global economic damage caused by emitting one additional tonne of CO₂ today.',
          ru: 'Социальная стоимость углерода (SCC) выражает в деньгах приведённый мировой ущерб от выброса одной дополнительной тонны CO₂.',
        },
      },
      {
        heading: {
          uz: '2. Xalqaro iqlim diplomatiyasi: UNFCCC (1992), Kioto (1997) va Parij (2015)',
          en: '2. Global Climate Diplomacy: UNFCCC (1992), Kyoto (1997), and Paris (2015)',
          ru: '2. Международные переговоры: РКИК ООН (1992), Киото (1997) и Париж (2015)',
        },
        paragraphs: [
          {
            uz: "Global iqlim arxitekturasi uchta tarixiy bosqichni bosib o'tdi. 1992-yilda Rio-de-Janeyroda BMTning Iqlim o'zgarishi bo'yicha doiraviy konvensiyasi (UNFCCC) qabul qilinib, «umumiy, biroq tabaqalashtirilgan mas'uliyat» tamoyili o'rnatildi. 1997-yilgi Kioto protokoli esa faqat rivojlangan davlatlar (Annex I) zimmasiga majburiy qisqartirish kvotalarini yuklab, «Sof rivojlanish mexanizmi» (CDM) orqali xalqaro uglerod savdosini boshlab berdi.",
            en: 'Global climate governance evolved across three milestones. The 1992 UN Framework Convention on Climate Change (UNFCCC) established "common but differentiated responsibilities." The 1997 Kyoto Protocol imposed legally binding emission caps solely on industrialized Annex I nations while pioneering international carbon offsets via the Clean Development Mechanism (CDM).',
            ru: 'Глобальная климатическая политика прошла три исторические вехи. В 1992 году была принята Рамочная конвенция ООН об изменении климата (РКИК), закрепившая принцип «общей, но дифференцированной ответственности». Киотский протокол 1997 года ввёл количественные обязательства для развитых стран и запустил углеродные рынки (МЧР).',
          },
          {
            uz: "2015-yil 12-dekabrda COP21 sammitida qabul qilingan Parij kelishuvi barcha davlatlarni (rivojlangan va rivojlanayotgan) yagona tizimga birlashtirdi: global isishni 2°C dan ancha past, imkon qadar 1,5°C doirasida ushlab turish maqsad qilindi va har bir mamlakat har 5 yilda kuchaytirib boriladigan Milliy miqyosda belgilanadigan hissasini (NDC) taqdim etadigan bo'ldi. O'zbekiston Parij kelishuvini 2018-yil 2-oktabrda (O'RQ-491) ratifikatsiya qildi.",
            en: 'Adopted on December 12, 2015 at COP21, the Paris Agreement united all nations around holding global warming well below 2°C—pursuing 1.5°C—through bottom-up Nationally Determined Contributions (NDCs) ratcheted up every five years, alongside Article 6 carbon markets and climate finance. Uzbekistan ratified the Paris Agreement on October 2, 2018 (Law No. O’RQ-491).',
            ru: 'Парижское соглашение от 12 декабря 2015 года (КС-21) объединило все страны мира вокруг цели удержать потепление значительно ниже 2°C (стремясь к 1,5°C) на основе определяемых на национальном уровне вкладов (ОНУВ / NDC), пересматриваемых каждые 5 лет. Узбекистан ратифицировал Парижское соглашение 2 октября 2018 года (№ ЗРУ-491).',
          },
        ],
      },
      {
        heading: {
          uz: '3. Qurg‘oqchilik xatari hamda iqlim siyosatining ikki qanoti: yumshatish va moslashish',
          en: '3. Drought Risks and the Dual Pillars: Mitigation vs. Adaptation',
          ru: '3. Засухи и два направления климатической политики: смягчение и адаптация',
        },
        paragraphs: [
          {
            uz: "Iqlim siyosati ikki o'zaro to'ldiruvchi yo'nalishda yuritiladi: (1) Yumshatish (Mitigation) — sababga qarshi kurashish, ya'ni energetika, transport va sanoatni dekarbonizatsiya qilish hamda o'rmonlar orqali issiqxona gazlarini yutish; (2) Moslashish (Adaptation) — muqarrar iqlim oqibatlariga chidamlilikni oshirish (qurg'oqchilik va issiqqa chidamli ekin navlarini yaratish, suv omborlari va selga qarshi inshootlar, erta ogohlantirish tizimlari va agrosug'urta).",
            en: 'Climate policy operates on two complementary pillars: (1) Mitigation tackles root causes by cutting GHG emissions across power, industry, and transport while expanding carbon sinks; (2) Adaptation reduces vulnerability to unavoidable climate impacts via drought-resilient seeds, modern irrigation, early-warning meteorology, flood defenses, and index-based crop insurance.',
            ru: 'Климатическая политика включает два взаимосвязанных крыла: (1) Смягчение (митигация) устраняет первопричину путём декарбонизации энергетики и расширения лесных поглотителей; (2) Адаптация снижает уязвимость экономики к уже происходящим изменениям (селекция засухоустойчивых сортов, водосбережение, раннее оповещение и агрострахование).',
          },
          {
            uz: "Jahon bankining O'zbekiston bo'yicha «Mamlakat iqlim va rivojlanish hisoboti» (CCDR, 2023) adaptatsiya choralari ko'rilmasa, 2050-yilga borib qurg'oqchilik, suv kamayishi va jazirama to'lqinlar mamlakat YaIMini bazaviy ssenariyga nisbatan 10 foizgacha pasaytirishi mumkinligini ko'rsatdi. 2024-yilda O'zbekistonda Prezident huzurida Iqlim kengashi tashkil etilib, Milliy iqlim moslashish strategiyasi amalga oshirilmoqda.",
            en: 'The World Bank’s Uzbekistan Country Climate and Development Report (CCDR, 2023) warns that unmitigated water scarcity, droughts, and heat extremes could shave up to 10% off projected national GDP by 2050. In 2024, Uzbekistan established the Presidential Climate Council to coordinate decarbonization and national adaptation finance.',
            ru: 'Страновой доклад Всемирного банка по климату и развитию Узбекистана (CCDR, 2023) показал, что без инвестиций в адаптацию засухи и дефицит воды могут снизить потенциальный ВВП к 2050 году до 10%. В 2024 году при Президенте РУз создан Климатический совет для координации митигации и адаптации.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '1.5°C',
        unit: { uz: 'chegara maqsadi', en: 'warming limit', ru: 'целевой порог' },
        label: {
          uz: 'Parij kelishuviga muvofiq global isishni ushlab turishning xavfsiz maqsadli chegarasi',
          en: 'Paris Agreement aspirational global temperature limit above pre-industrial baseline',
          ru: 'Целевой предел глобального потепления согласно Парижскому соглашению (2015)',
        },
        year: '2015',
        source: { uz: 'UNFCCC Parij kelishuvi (2-modda)', en: 'UNFCCC Paris Agreement (Art. 2)', ru: 'Парижское соглашение РКИК ООН' },
      },
      {
        value: '+1.45°C',
        unit: { uz: 'anomal isish', en: 'anomaly (±0.12)', ru: 'аномалия (±0,12)' },
        label: {
          uz: 'Kuzatuvlar tarixidagi eng issiq davrda qayd etilgan global o‘rtacha harorat o‘sishi',
          en: 'Observed global mean near-surface temperature anomaly in record warm year',
          ru: 'Зафиксированное превышение глобальной средней температуры над базой 1850–1900 гг.',
        },
        year: '2023',
        source: { uz: 'Jahon meteorologiya tashkiloti (WMO)', en: 'World Meteorological Organization (WMO)', ru: 'Всемирная метеорологическая организация (ВМО)' },
      },
      {
        value: '$300',
        unit: { uz: 'mlrd AQSh $/yil', en: 'bln USD / yr', ru: 'млрд долл./год' },
        label: {
          uz: 'COP29 (Boku, 2024) sammitida 2035-yilgacha rivojlanayotgan davlatlar uchun kelishilgan yangi iqlim moliyasi (NCQG)',
          en: 'New Collective Quantified Goal (NCQG) for annual climate finance by 2035 agreed at COP29',
          ru: 'Новая коллективная цель климатического финансирования к 2035 году, принятая на COP29',
        },
        year: '2024',
        source: { uz: 'UNFCCC COP29 qarori', en: 'UNFCCC COP29 Baku Decision', ru: 'Решение КС-29 РКИК ООН (Баку, 2024)' },
      },
      {
        value: '2x',
        unit: { uz: 'tezroq isish', en: 'faster warming', ru: 'быстрее мира' },
        label: {
          uz: 'Markaziy Osiyo quruqlik mintaqasida harorat o‘sishining global o‘rtachaga nisbati',
          en: 'Rate of surface warming in Central Asia relative to the global mean',
          ru: 'Темп роста температуры в Центральной Азии относительно среднемирового показателя',
        },
        year: '2023',
        source: { uz: 'IPCC AR6 / Jahon banki CCDR', en: 'IPCC AR6 / World Bank CCDR', ru: 'МГЭИК ДО6 / Всемирный банк' },
      },
    ],
    charts: [
      {
        id: 't11-temp-anomaly',
        type: 'line',
        title: {
          uz: 'Global va Markaziy Osiyo o‘rtacha harorat anomaliyasi dinamikasi (°C, 1850–1900 bazaga nisbatan)',
          en: 'Surface Temperature Anomaly: Global Mean vs. Central Asia (°C above pre-industrial)',
          ru: 'Динамика температурной аномалии: в среднем по миру и в Центральной Азии (°C)',
        },
        subtitle: {
          uz: 'Kontinental arid mintaqada iqlim isishining yuqori sur’ati',
          en: 'Amplified continental warming across the arid Central Asian interior',
          ru: 'Ускоренное потепление во внутриконтинентальной аридной зоне',
        },
        source: { uz: 'WMO / Berkeley Earth / O‘zgidromet', en: 'WMO / Berkeley Earth / Uzhydromet', ru: 'ВМО / Узгидромет' },
        unit: '°C',
        seriesName: { uz: 'Global o‘rtacha (°C)', en: 'Global Mean (°C)', ru: 'В мире (°C)' },
        secondarySeriesName: { uz: 'Markaziy Osiyo (°C)', en: 'Central Asia (°C)', ru: 'Центральная Азия (°C)' },
        data: [
          { name: '1970', value: 0.28, secondaryValue: 0.45 },
          { name: '1985', value: 0.46, secondaryValue: 0.82 },
          { name: '2000', value: 0.68, secondaryValue: 1.25 },
          { name: '2015', value: 1.08, secondaryValue: 1.85 },
          { name: '2023', value: 1.45, secondaryValue: 2.35 },
        ],
      },
      {
        id: 't11-finance-split',
        type: 'bar',
        title: {
          uz: 'Global iqlim moliyalashtirish oqimlarining yo‘nalishlar bo‘yicha taqsimoti (%)',
          en: 'Global Climate Finance Allocation by Policy Pillar (%)',
          ru: 'Распределение мировых потоков климатического финансирования по направлениям (%)',
        },
        subtitle: {
          uz: 'Adaptatsiya (moslashish) loyihalarini ko‘paytirish zarurati',
          en: 'Mitigation dominates capital flows while adaptation remains underfunded',
          ru: 'Дисбаланс между финансированием митигации и проектов адаптации',
        },
        source: { uz: 'Climate Policy Initiative (Global Landscape of Climate Finance)', en: 'Climate Policy Initiative (CPI)', ru: 'Climate Policy Initiative (CPI)' },
        unit: '%',
        seriesName: { uz: 'Ulush (%)', en: 'Share (%)', ru: 'Доля (%)' },
        data: [
          { name: { uz: 'Mitigatsiya (energetika, transport)', en: 'Mitigation (Clean Energy & Transit)', ru: 'Смягчение (ВИЭ, транспорт)' }, value: 90 },
          { name: { uz: 'Adaptatsiya (suv, qishloq xo‘jaligi)', en: 'Adaptation (Water & Resilience)', ru: 'Адаптация (вода, агросектор)' }, value: 7 },
          { name: { uz: 'Qo‘shma (ikkala maqsadli)', en: 'Dual-Benefit Projects', ru: 'Совмещённые проекты' }, value: 3 },
        ],
      },
    ],
    laws: [
      {
        id: 't11-law-1',
        type: 'international',
        title: {
          uz: "BMTning Iqlim o'zgarishi to'g'risidagi doiraviy konvensiyasi (UNFCCC) va Kioto protokoli",
          en: 'UN Framework Convention on Climate Change (UNFCCC) & Kyoto Protocol',
          ru: 'Рамочная конвенция ООН об изменении климата (РКИК) и Киотский протокол',
        },
        codeAndDate: {
          uz: 'UNFCCC — 09.05.1992 (O‘zR 1993-y.); Kioto protokoli — 11.12.1997 (O‘zR 1999-y.)',
          en: 'UNFCCC (1992, Uzbek accession 1993) & Kyoto Protocol (1997, ratified 1999)',
          ru: 'РКИК ООН (1992 г., РУз с 1993 г.) и Киотский протокол (1997 г., РУз с 1999 г.)',
        },
        summary: {
          uz: "Atmosferada issiqxona gazlari konsentratsiyasini xavfsiz darajada barqarorlashtirish va xalqaro iqlim hisobotdorligi tizimini o'rnatdi.",
          en: 'Established universal GHG inventory reporting, annual COP negotiations, and early international carbon market mechanisms.',
          ru: 'Заложили систему глобальной инвентаризации парниковых газов, ежегодных конференций сторон (COP) и углеродных квот.',
        },
        significance: {
          uz: "Har yili o'tkaziladigan BMT Iqlim sammitlarining (COP) huquqiy poydevori.",
          en: 'Serves as the constitutional treaty underlying all UN climate summits.',
          ru: 'Фундаментальный международно-правовой институт глобальной климатической дипломатии.',
        },
      },
      {
        id: 't11-law-2',
        type: 'international',
        title: {
          uz: "Parij kelishuvi (va uni ratifikatsiya qilish to'g'risidagi O'zbekiston Qonuni)",
          en: 'The Paris Agreement (and Ratification Law of the Republic of Uzbekistan)',
          ru: 'Парижское соглашение (и Закон Республики Узбекистан о его ратификации)',
        },
        codeAndDate: {
          uz: 'Parij: 12.12.2015-yil · O‘zbekiston ratifikatsiyasi: 02.10.2018-yil, O‘RQ-491-son',
          en: 'Adopted Dec 12, 2015 · Ratified by Uzbekistan Oct 2, 2018, Law No. O’RQ-491',
          ru: 'Принято 12.12.2015 г. · Ратифицировано РУз 02.10.2018 г., № ЗРУ-491',
        },
        summary: {
          uz: "Global harorat o'sishini 2°C dan past (1,5°C maqsadida) ushlab turish, asr ikkinchi yarmida uglerod neytralligiga (Net Zero) erishish va NDC tizimini belgilaydi.",
          en: 'Binds parties to submit progressively ambitious NDCs, build climate resilience, and align global finance with net-zero pathways.',
          ru: 'Обязывает стороны представлять национальные вклады (ОНУВ), повышать климатическую устойчивость и переориентировать финансовые потоки.',
        },
        significance: {
          uz: "O'zbekistonga Yashil iqlim jamg'armasi (GCF) va xalqaro yashil obligatsiyalar resurslarini jalb etish imkonini berdi.",
          en: 'Opened access for Uzbekistan to Green Climate Fund (GCF) grants and sovereign green bond markets.',
          ru: 'Открыло Узбекистану доступ к ресурсам Зелёного климатического фонда (GCF) и рынку суверенных зелёных облигаций.',
        },
      },
      {
        id: 't11-law-3',
        type: 'presidential',
        title: {
          uz: "O'zbekiston Respublikasi Prezidenti huzurida Iqlim kengashini tashkil etish to'g'risidagi Farmon",
          en: 'Presidential Decree Establishing the Climate Council under the President of Uzbekistan',
          ru: 'Указ об образовании Климатического совета при Президенте Республики Узбекистан',
        },
        codeAndDate: {
          uz: 'PF-106-son Farmon, 23.07.2024-yil',
          en: 'Presidential Decree No. PF-106, July 23, 2024',
          ru: 'Указ Президента № УП-106 от 23.07.2024 г.',
        },
        summary: {
          uz: "Iqlim o'zgarishi oqibatlarini yumshatish va unga moslashish bo'yicha yagona davlat siyosatini muvofiqlashtiruvchi oliy maslahat organini hamda Milliy iqlim markazini tuzdi.",
          en: 'Establishes high-level inter-ministerial climate governance and a National Climate Center to oversee NDC execution and adaptation.',
          ru: 'Учредил высший координационный орган и Национальный климатический центр для реализации митигации и адаптации.',
        },
        significance: {
          uz: "Iqlim xatarlarini budjet, energetika, qishloq va suv xo'jaligi rejalariga bevosita integratsiya qiladi.",
          en: 'Embeds climate risk screening directly into sovereign fiscal and infrastructure planning.',
          ru: 'Интегрирует оценку климатических рисков в макроэкономическое и бюджетное планирование.',
        },
      },
    ],
    facts: [
      {
        uz: "O'zbekiston 2023-yilda London fond birjasida milliy valyutadagi (4,25 trln so'mlik) suveren «yashil obligatsiyalar»ni muvaffaqiyatli joylashtirib, mablag'larni suv tejash, temir yo'l elektrifikatsiyasi va metropoliten rivojiga yo'naltirdi.",
        en: 'In 2023, Uzbekistan issued sovereign green bonds (4.25 trillion UZS) on the London Stock Exchange to finance water-saving irrigation and clean electric rail transit.',
        ru: 'В 2023 году Узбекистан разместил на Лондонской бирже суверенные «зелёные облигации» на 4,25 трлн сумов для финансирования водосбережения и электротранспорта.',
      },
      {
        uz: "Samarqand shahrida 2025-yil aprel oyida birinchi «Markaziy Osiyo — Yevropa Ittifoqi» va Xalqaro Samarqand iqlim forumi o'tkazilib, mintaqaviy «Yashil rivojlanish» konsepsiyasi ilgari surildi.",
        en: 'Samarkand has emerged as Central Asia’s premier climate diplomacy hub, hosting international forums advancing regional green development.',
        ru: 'Самарканд стал ключевой площадкой климатической дипломатии региона, объединяя страны Центральной Азии вокруг зелёной адаптации.',
      },
      {
        uz: "Yevropa Ittifoqining 2026-yildan to'liq ishga tushuvchi CBAM (Transchegaraviy uglerod tartibga solish mexanizmi) po'lat, alyuminiy, sement, o'g'it, vodorod va elektr importida mahsulotning uglerod izi uchun haq to'lashni talab qiladi.",
        en: 'The EU’s Carbon Border Adjustment Mechanism (CBAM) prices embedded carbon in imported steel, aluminum, cement, fertilizers, hydrogen, and electricity.',
        ru: 'Трансграничный углеродный механизм ЕС (CBAM) вводит плату за углеродный след при импорте стали, алюминия, цемента, удобрений и электроэнергии.',
      },
    ],
    caseStudy: {
      title: {
        uz: "O'zbekiston suveren «Yashil obligatsiyalari» va Yashil budjetlashtirish tajribasi",
        en: 'Uzbekistan’s Sovereign Green Bonds and Green Fiscal Tagging',
        ru: 'Суверенные «зелёные облигации» Узбекистана и зелёное бюджетирование',
      },
      location: {
        uz: "O'zbekiston Respublikasi Iqtisodiyot va moliya vazirligi / UNDP",
        en: 'Ministry of Economy and Finance of Uzbekistan & UNDP',
        ru: 'Министерство экономики и финансов РУз совместно с ПРООН',
      },
      challenge: {
        uz: "Iqlim moslashuvi (suv kanallarini modernizatsiya qilish, o'rmonzorlashtirish va jamoat elektr transporti) katta uzoq muddatli moliyaviy resurslarni talab qiladi.",
        en: 'Climate adaptation—lining canals, planting shelterbelts, and electrifying transit—requires massive long-term capital beyond annual tax revenues.',
        ru: 'Климатическая адаптация (модернизация ирригации, лесомелиорация, электротранспорт) требует масштабных долгосрочных инвестиций.',
      },
      solution: {
        uz: "ICMA xalqaro standartlari va mustaqil Second-Party Opinion asosida Davlat yashil obligatsiyalari dasturi ishlab chiqilib, xalqaro kapital jalb etildi.",
        en: 'Uzbekistan adopted an ICMA-aligned Sustainable Sovereign Financing Framework with independent verification to issue dedicated green bonds.',
        ru: 'Разработана суверенная программа устойчивого финансирования по стандартам ICMA с независимой верификацией целевого использования средств.',
      },
      economicOutcome: {
        uz: "Jalbi etilgan trillioblab so'm mablag'lar shaffof monitoring ostida suv tejovchi nasoslar, metro poyezdlari va energiya tejamkor maktab/shifoxonalarga yo'naltirildi.",
        en: 'Proceeds directly funded high-efficiency irrigation pumps, metro rolling stock, and solarized social facilities with transparent impact reporting.',
        ru: 'Привлечённые триллионы сумов прозрачно направлены на энергоэффективные насосные станции, метрополитен и зелёную социальную инфраструктуру.',
      },
    },
    terms: [
      {
        term: { uz: 'Mitigatsiya (yumshatish)', en: 'Climate Mitigation', ru: 'Митигация (смягчение изменений климата)' },
        definition: {
          uz: "Issiqxona gazlari ajratmalarini qisqartirish va uglerod yutuvchi ekotizimlarni kengaytirishga qaratilgan texnologik-iqtisodiy choralar.",
          en: 'Human interventions to reduce greenhouse gas emission sources or enhance natural and technological carbon sinks.',
          ru: 'Комплекс мер по сокращению выбросов парниковых газов и увеличению их поглощения природными или техническими накопителями.',
        },
      },
      {
        term: { uz: 'Adaptatsiya (moslashish)', en: 'Climate Adaptation', ru: 'Адаптация к изменению климата' },
        definition: {
          uz: "Iqlimning amaldagi va kutilayotgan o'zgarishlariga tabiiy hamda xo'jalik tizimlarini moslashtirib, iqtisodiy zararni kamaytirish siyosati.",
          en: 'Adjusting ecological, social, and economic systems to moderate harm or utilize opportunities from actual or expected climate stimuli.',
          ru: 'Приспособление социально-экономических и аграрных систем к фактическим или ожидаемым климатическим изменениям для снижения ущерба.',
        },
      },
      {
        term: { uz: 'NDC (Milliy miqyosda belgilanadigan hissa)', en: 'NDC (Nationally Determined Contribution)', ru: 'ОНУВ (Определяемый на национальном уровне вклад)' },
        definition: {
          uz: "Parij kelishuviga a'zo har bir davlatning milliy iqlim maqsadlari, emissiya qisqartirish va moslashish rejalarini ifodalovchi rasmiy majburiyati.",
          en: 'Each country’s official climate action plan submitted every five years under the Paris Agreement detailing emission and adaptation targets.',
          ru: 'Официальный климатический план каждой страны-участницы Парижского соглашения по снижению выбросов и адаптации.',
        },
      },
      {
        term: { uz: 'CBAM (Transchegaraviy uglerod mexanizmi)', en: 'CBAM (Carbon Border Adjustment Mechanism)', ru: 'ТУР (Трансграничное углеродное регулирование, CBAM)' },
        definition: {
          uz: "Yevropa Ittifoqiga import qilinadigan uglerod sig'imi yuqori tovarlarga (sement, po'lat, o'g'it, alyuminiy) qo'llaniladigan uglerod to'lovi.",
          en: 'EU tariff mechanism pricing embedded carbon emissions in imported carbon-intensive industrial goods to prevent carbon leakage.',
          ru: 'Механизм ЕС по взиманию платы за углеродный след импортируемой углеродоёмкой продукции (металлы, цемент, удобрения).',
        },
      },
    ],
    quiz: [
      {
        id: 'q11-1',
        question: {
          uz: "O'zbekiston Respublikasi Parij iqlim kelishuvini qachon ratifikatsiya qilgan?",
          en: 'In what year did the Republic of Uzbekistan ratify the Paris Climate Agreement (Law No. O’RQ-491)?',
          ru: 'В каком году Республика Узбекистан ратифицировала Парижское соглашение по климату (№ ЗРУ-491)?',
        },
        options: [
          { uz: '2018-yil 2-oktabr', en: 'October 2, 2018', ru: '2 октября 2018 года' },
          { uz: '1991-yil 1-sentabr', en: 'September 1, 1991', ru: '1 сентября 1991 года' },
          { uz: '2001-yil 5-may', en: 'May 5, 2001', ru: '5 мая 2001 года' },
          { uz: 'Ratifikatsiya qilmagan', en: 'Has not ratified it', ru: 'Не ратифицировала' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "O'zbekiston Parij kelishuvini 2017-yilda imzolab, 2018-yil 2-oktabrdagi O'RQ-491-son Qonun bilan ratifikatsiya qilgan.",
          en: 'Uzbekistan ratified the Paris Agreement via Law No. O’RQ-491 on October 2, 2018.',
          ru: 'Узбекистан ратифицировал Парижское соглашение Законом № ЗРУ-491 от 2 октября 2018 года.',
        },
      },
      {
        id: 'q11-2',
        question: {
          uz: "Qurg'oqchilikka chidamli bug'doy navlarini yaratish va kanallarni betonlashtirish iqlim siyosatining qaysi yo'nalishiga kiradi?",
          en: 'Breeding drought-tolerant wheat varieties and lining irrigation canals exemplify which pillar of climate policy?',
          ru: 'К какому направлению климатической политики относятся выведение засухоустойчивых сортов пшеницы и бетонирование каналов?',
        },
        options: [
          { uz: 'Adaptatsiya (iqlim o‘zgarishiga moslashish)', en: 'Climate Adaptation', ru: 'Адаптация к изменению климата' },
          { uz: 'Ozon qatlamini yemirish', en: 'Ozone depletion', ru: 'Разрушение озонового слоя' },
          { uz: 'Valyuta devalvatsiyasi', en: 'Currency devaluation', ru: 'Девальвация валюты' },
          { uz: 'Ko‘mir qazib olishni kengaytirish', en: 'Expanding coal mining', ru: 'Расширение добычи угля' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Suv tanqisligi va issiqqa chidamlilikni oshirish — o'zgarayotgan iqlim sharoitiga moslashish (adaptatsiya) tadbirlaridir.",
          en: 'Strengthening agricultural and water resilience against heat and drought is the core purpose of climate adaptation.',
          ru: 'Повышение устойчивости сельского и водного хозяйства к засухе и жаре — классические меры климатической адаптации.',
        },
      },
      {
        id: 'q11-3',
        question: {
          uz: "Parij kelishuvining asosiy harorat maqsadi qanday belgilangan?",
          en: 'What is the headline global temperature goal of the 2015 Paris Agreement?',
          ru: 'Какова главная температурная цель Парижского соглашения 2015 года?',
        },
        options: [
          { uz: 'Global isishni 2°C dan ancha past, imkon qadar 1,5°C chegarasida ushlab turish', en: 'Hold warming well below 2°C and pursue efforts to limit it to 1.5°C', ru: 'Удержать потепление значительно ниже 2°C, прилагая усилия для ограничения до 1,5°C' },
          { uz: 'Haroratni +6°C ga oshirish', en: 'Raise global temperature by +6°C', ru: 'Повысить температуру на +6°C' },
          { uz: 'Muzlik davrini qaytarish (-10°C)', en: 'Cool Earth by -10°C', ru: 'Охладить планету на -10°C' },
          { uz: 'Harorat ko‘rsatkichi kiritilmagan', en: 'Contains no temperature goal', ru: 'Температурная цель отсутствует' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Parij kelishuvining 2-moddasi global harorat o'sishini sanoatgacha davrga nisbatan 2°C dan ancha past va 1,5°C doirasida cheklashni belgilaydi.",
          en: 'Article 2 of the Paris Agreement commits nations to hold warming well below 2°C while pursuing 1.5°C.',
          ru: 'Статья 2 Парижского соглашения закрепляет порог значительно ниже 2°C с ориентиром на 1,5°C.',
        },
      },
      {
        id: 'q11-4',
        question: {
          uz: "Nikolas Stern ma'ruzasining (Stern Review) asosiy iqtisodiy xulosasi nimadan iborat?",
          en: 'What was the central economic conclusion of the Stern Review on Climate Change?',
          ru: 'В чём состоит главный экономический вывод «Доклада Стерна»?',
        },
        options: [
          { uz: "Iqlimni yumshatish xarajati harakatsizlik keltirib chiqaradigan kelajakdagi zarardan ancha kichik", en: 'The cost of early climate action is far smaller than the economic damages of inaction', ru: 'Издержки своевременного предотвращения потепления намного меньше будущего ущерба от бездействия' },
          { uz: 'Iqlim o‘zgarishi YaIMga umuman ta’sir qilmaydi', en: 'Climate change has zero impact on GDP', ru: 'Изменение климата никак не влияет на ВВП' },
          { uz: 'Qurg‘oqchilik qishloq xo‘jaligi daromadini 5 barobar oshiradi', en: 'Droughts multiply farm profits fivefold', ru: 'Засухи пятикратно увеличивают доходы фермеров' },
          { uz: 'Faqat 2150-yildan keyin chora ko‘rish kerak', en: 'Action should wait until 2150', ru: 'Действовать нужно только после 2150 года' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Stern global YaIMning 1–2% miqdoridagi erta sarmoya kelajakda 5–20% YaIM yo'qotilishining oldini olishini isbotladi.",
          en: 'Stern showed early mitigation (~1–2% of GDP) prevents catastrophic long-run damages (5–20% of GDP).',
          ru: 'Стерн показал, что ранние инвестиции (1–2% ВВП) предотвращают катастрофические потери (5–20% ВВП).',
        },
      },
      {
        id: 'q11-5',
        question: {
          uz: "Yevropa Ittifoqiga eksport qilinadigan o'g'it, sement va metallarning uglerod izini tartibga soluvchi mexanizm nima deb ataladi?",
          en: 'What is the name of the EU mechanism pricing embedded carbon in imported cement, fertilizers, and metals?',
          ru: 'Как называется механизм ЕС по взиманию платы за углеродный след при импорте цемента, удобрений и металлов?',
        },
        options: [
          { uz: 'CBAM (Carbon Border Adjustment Mechanism)', en: 'CBAM (Carbon Border Adjustment Mechanism)', ru: 'CBAM (трансграничное углеродное регулирование)' },
          { uz: 'SWIFT tizimi', en: 'SWIFT messaging network', ru: 'Система SWIFT' },
          { uz: 'UNESCO MAB', en: 'UNESCO MAB', ru: 'ЮНЕСКО МАБ' },
          { uz: 'LIBOR stavkasi', en: 'LIBOR benchmark', ru: 'Ставка LIBOR' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "CBAM «uglerod sizib chiqishi»ning oldini olish uchun import tovarlarga Yevropa ETS uglerod narxiga mos to'lov qo'llaydi.",
          en: 'CBAM equalizes carbon costs between EU domestic producers and foreign industrial imports.',
          ru: 'CBAM выравнивает цену на углерод между производителями внутри ЕС и внешними поставщиками.',
        },
      },
    ],
  },

  {
    id: 12,
    isIndependentStudy: true,
    iconName: 'Wheat',
    title: {
      uz: "Oziq-ovqat xavfsizligi va qishloq xo'jaligini rivojlantirish",
      en: 'Food Security and Sustainable Agricultural Development',
      ru: 'Продовольственная безопасность и устойчивое развитие сельского хозяйства',
    },
    shortDescription: {
      uz: "FAO oziq-ovqat xavfsizligi ustunlari, iqlimga moslashgan aqlli agrobiznes (CSA), aniq dehqonchilik texnologiyalari, GMO bahslari va O'zbekiston agrar siyosati.",
      en: 'FAO food security pillars, Climate-Smart Agriculture (CSA), precision agrotech, GMO bio-safety debates, and Uzbekistan’s 2020–2030 Agrarian Strategy.',
      ru: 'Критерии продовольственной безопасности ФАО, климатически оптимизированное с/х, агротехнологии, дискуссии о ГМО и политика Узбекистана.',
    },
    keywords: {
      uz: ['oziq-ovqat xavfsizligi', 'FAO', 'agrobiznes', 'aniq dehqonchilik', 'GMO', 'organik qishloq xo‘jaligi', 'hosildorlik'],
      en: ['food security', 'FAO', 'agribusiness', 'precision agriculture', 'GMO biosafety', 'organic farming', 'Climate-Smart Agriculture'],
      ru: ['продовольственная безопасность', 'ФАО', 'агробизнес', 'точное земледелие', 'ГМО', 'органическое земледелие'],
    },
    sections: [
      {
        heading: {
          uz: '1. Oziq-ovqat xavfsizligining to‘rt ustuni va global iqlim xatarlari',
          en: '1. The Four Pillars of Food Security and Climate Supply Risks',
          ru: '1. Четыре опоры продовольственной безопасности и климатические риски',
        },
        paragraphs: [
          {
            uz: "BMT Oziq-ovqat va qishloq xo'jaligi tashkiloti (FAO) ta'rifiga ko'ra, oziq-ovqat xavfsizligi to'rtta shart bir vaqtda bajarilganda ta'minlanadi: (1) Jismoniy mavjudlik (yetarli ishlab chiqarish va zaxira); (2) Iqtisodiy erishimlilik (aholi daromadining to'yimli ovqat xarid qilishga yetishi); (3) Xavfsiz va to'laqonli o'zlashtirilishi (ratsion sifati va toza suv); (4) Barqarorlik (iqlim qurg'oqchiligi yoki narx shoklarida uzilib qolmaslik).",
            en: 'According to the UN Food and Agriculture Organization (FAO), food security rests on four simultaneous pillars: (1) Physical Availability (domestic output, stocks, trade); (2) Economic Access (household purchasing power relative to food prices); (3) Nutritional Utilization (dietary quality, food safety, clean water); and (4) Temporal Stability across climate and market shocks.',
            ru: 'По методологии ФАО ООН продовольственная безопасность опирается на четыре критерия: (1) физическая доступность продовольствия; (2) экономическая доступность (покупательная способность доходов населения); (3) пищевая ценность и безопасность рациона; (4) стабильность снабжения при климатических и ценовых шоках.',
          },
          {
            uz: "FAO SOFI (2024) hisobotiga ko'ra, global miqyosda ~733 million kishi surunkali to'yib ovqatlanmaslikdan aziyat chekmoqda, shu bilan birga insoniyat ishlab chiqargan oziq-ovqatning qariyb uchdan bir qismi (~1,05–1,3 mlrd tonna) yig'im-terim, saqlash (sovituvchi omborlar yetishmasligi) va iste'mol jarayonida isrof bo'lmoqda. Oziq-ovqat isrofi global issiqxona gazlarining 8–10 foizini yuzaga keltiradi!",
            en: 'FAO’s SOFI (2024) report estimates ~733 million people face chronic hunger globally, even as roughly one-third (~1.05–1.3 billion tonnes) of all food produced is lost post-harvest or wasted by consumers—accounting for 8–10% of global greenhouse gas emissions.',
            ru: 'По докладу ФАО SOFI (2024), около 733 млн человек в мире сталкиваются с голодом, тогда как почти треть производимого продовольствия (~1,05–1,3 млрд тонн) теряется при хранении, транспортировке и потреблении, формируя 8–10% мировых выбросов парниковых газов.',
          },
        ],
        keyTakeaway: {
          uz: "Agrologistik zanjir va zamonaviy sovitkichli omborlarni (cold chain) rivojlantirish yer va suvni kengaytirmasdan oziq-ovqat taklifini 20–25% ga oshiradi.",
          en: 'Expanding cold-chain agro-logistics boosts net food supply by 20–25% without ploughing a single new hectare or diverting extra river water.',
          ru: 'Развитие агрологистики и холодильных складов (cold chain) увеличивает реальное предложение продовольствия на 20–25% без расширения пашни и водозабора.',
        },
      },
      {
        heading: {
          uz: '2. Agrobiznes innovatsiyalari, aniq dehqonchilik va GMO bahslari',
          en: '2. Agribusiness Innovation, Precision Agrotech, and GMO Economics',
          ru: '2. Инновации в агробизнесе, точное земледелие и проблемы ГМО',
        },
        paragraphs: [
          {
            uz: "XXI asr agrobiznesi «Iqlimga moslashgan aqlli qishloq xo'jaligi» (Climate-Smart Agriculture — CSA) tamoyiliga o'tmoqda: sun'iy yo'ldosh va dron monitoringi, tuproq namligi sensorlari, avtomatlashtirilgan issiqxonalar (gidroponika va aeroponika) maydon birligidan suvni 80–90% kam sarflab bir necha barobar yuqori hosil olish imkonini beradi.",
            en: 'Modern agribusiness embraces Climate-Smart Agriculture (CSA): satellite NDVI crop monitoring, IoT soil-moisture probes, variable-rate fertilizer applicators, and closed-loop hydroponic greenhouses that cut water consumption per kilogram of vegetables by 80–90%.',
            ru: 'Современный агробизнес переходит к концепции «климатически оптимизированного сельского хозяйства» (CSA): спутниковый мониторинг посевов, датчики влажности почвы и гидропонные теплицы снижают расход воды на килограмм овощей на 80–90%.',
          },
          {
            uz: "Genetik modifikatsiyalangan organizmlar (GMO) va yangi genom tahrirlash (CRISPR) texnologiyalari bo'yicha xalqaro iqtisodiy-ekologik munozaralar davom etmoqda. Tarafdorlar GMO navlar zararkunandalarga va qurg'oqchilikka chidamli bo'lib, pestitsid sarfini kamaytirishini ta'kidlasa, tanqidchilar transmilliy urug'chilik kompaniyalari monopoliyasi, yovvoyi mahalliy navlar bilan changlanish (genetik ifloslanish) va biologik xavfsizlik xatarlarini ko'rsatadi; shu sababli Kartaxena bioxavfsizlik protokoli majburiy markirovka va ekspertizani talab etadi.",
            en: 'Genetically Modified Organisms (GMOs) and CRISPR gene-editing spark intense economic and ecological debate. Proponents highlight higher yields, drought tolerance, and lower pesticide sprays, whereas critics warn of seed-patent monopolies, cross-pollination threats to native landraces, and herbicide-resistant superweeds—governed globally by the Cartagena Biosafety Protocol.',
            ru: 'Вокруг ГМО и технологий редактирования генома ведутся острые эколого-экономические дискуссии. Сторонники указывают на засухоустойчивость и снижение расхода пестицидов, тогда как критики подчёркивают монополизацию рынка семян, риск генетического засорения местных сортов и требования Картахенского протокола по биобезопасности.',
          },
        ],
      },
      {
        heading: {
          uz: "3. O'zbekiston qishloq xo'jaligini isloh qilish va oziq-ovqat xavfsizligi siyosati",
          en: '3. Agricultural Reform and Food Security Policy in Uzbekistan',
          ru: '3. Аграрная реформа и политика продовольственной безопасности Узбекистана',
        },
        paragraphs: [
          {
            uz: "O'zbekiston qishloq xo'jaligi mamlakat YaIMining ~23–25 foizini va band aholining katta qismini ta'minlaydigan strategik tarmoqdir. 2020–2030-yillarga mo'ljallangan Qishloq xo'jaligini rivojlantirish strategiyasi (PF-5853) doirasida paxta va g'allaga davlat buyurtmasi bekor qilindi, past rentabelli paxta maydonlari qisqartirilib, o'rniga yuqori daromadli va kam suv talab qiluvchi meva-sabzavot, uzumzor va dukkakli ekinlar joylashtirildi.",
            en: 'Agriculture generates ~23–25% of Uzbekistan’s GDP and anchors rural employment. Under the 2020–2030 Agricultural Development Strategy (PF-5853), Uzbekistan abolished mandatory state cotton and wheat quotas, reallocating low-yield cotton lands toward high-value, water-efficient horticulture, vineyards, pulses, and organic exports.',
            ru: 'Сельское хозяйство формирует около 23–25% ВВП Узбекистана и обеспечивает значительную долю занятости. В рамках Стратегии развития сельского хозяйства на 2020–2030 годы (УП-5853) отменён госзаказ на хлопок и зерно, а малопродуктивные хлопковые поля перепрофилированы под высокодоходное плодоовощеводство и бобовые.',
          },
          {
            uz: "Shuningdek, 2022-yilda qabul qilingan «Organik mahsulotlar to'g'risida»gi Qonun (O'RQ-766) kimyoviy pestitsidlarsiz va GMOsiz yetishtirilgan o'zbek meva-sabzavotlarini «Organic» sertifikati bilan Yevropa, Yaqin Sharq va Osiyo premium bozorlariga yuqori narxda eksport qilish uchun huquqiy asos yaratdi.",
            en: 'Furthermore, enacting the Law "On Organic Products" (O’RQ-766, 2022) established national certification aligned with international standards, unlocking price premiums of 25–40% for chemical-free Uzbek dried fruits, nuts, and fresh produce in European and Asian markets.',
            ru: 'Принятие Закона «Об органической продукции» (№ ЗРУ-766, 2022 г.) создало правовую базу национальной сертификации без пестицидов и ГМО, открыв узбекским производителям фруктов и орехов выход в премиальный экспортный сегмент с наценкой 25–40%.',
          },
        ],
      },
    ],
    kpis: [
      {
        value: '733',
        unit: { uz: 'mln kishi', en: 'mln people', ru: 'млн человек' },
        label: {
          uz: 'Global miqyosda surunkali oziq-ovqat yetishmovchiligiga duch kelgan aholi soni',
          en: 'Global population facing chronic hunger and undernourishment',
          ru: 'Численность населения мира, сталкивающегося с хроническим недоеданием',
        },
        year: '2023',
        source: { uz: 'FAO / WFP / WHO (SOFI 2024)', en: 'FAO SOFI Report 2024', ru: 'Доклад ФАО ООН SOFI (2024)' },
      },
      {
        value: '~30%',
        unit: { uz: 'global hosil', en: 'of global food', ru: 'мирового урожая' },
        label: {
          uz: 'Daladan dasturxongacha bo‘lgan zanjirda yo‘qotiladigan va isrof bo‘ladigan oziq-ovqat',
          en: 'Share of global food production lost in supply chains or wasted at consumption',
          ru: 'Доля мирового продовольствия, теряемая при хранении или выбрасываемая',
        },
        year: '2023',
        source: { uz: 'FAO / UNEP Food Waste Index 2024', en: 'FAO / UNEP Food Waste Index 2024', ru: 'ФАО / ЮНЕП (2024)' },
      },
      {
        value: '~24%',
        unit: { uz: 'YaIM ulushi', en: 'of Uzbekistan GDP', ru: 'доля в ВВП РУз' },
        label: {
          uz: "Qishloq, o'rmon va baliq xo'jaligining O'zbekiston YaIMidagi ulushi",
          en: 'Share of agriculture, forestry, and fisheries in Uzbekistan’s GDP',
          ru: 'Доля сельского, лесного и рыбного хозяйства в ВВП Узбекистана',
        },
        year: '2023',
        source: { uz: "O'zbekiston Statistika agentligi", en: 'Statistics Agency of Uzbekistan', ru: 'Агентство статистики РУз' },
        isApproximate: true, // TODO: tekshiring (Stat.uz yillik tarkibda ~23–25% oralig'ida)
      },
      {
        value: '$2.0+',
        unit: { uz: 'mlrd AQSh $/yil', en: 'bln USD / yr', ru: 'млрд долл./год' },
        label: {
          uz: "O'zbekistondan yillik meva-sabzavot va oziq-ovqat mahsulotlari eksporti hajmi",
          en: 'Annual horticultural and food product exports from Uzbekistan',
          ru: 'Годовой объём экспорта плодоовощной и продовольственной продукции из РУз',
        },
        year: '2024',
        source: { uz: 'Statistika agentligi / Qishloq xo‘jaligi vazirligi', en: 'Statistics Agency / Ministry of Agriculture', ru: 'Агентство статистики РУз' },
      },
    ],
    charts: [
      {
        id: 't12-water-value',
        type: 'bar',
        title: {
          uz: '1 m³ sug‘orish suvi hisobiga yaratiladigan o‘rtacha qo‘shilgan qiymat (shartli indeks)',
          en: 'Relative Economic Value Added per 1 m³ of Irrigation Water by Crop Type (Index)',
          ru: 'Относительная добавленная стоимость на 1 м³ поливной воды по видам культур (индекс)',
        },
        subtitle: {
          uz: 'Ekinlar tarkibini diversifikatsiya qilishning iqtisodiy mantiqi',
          en: 'Economic rationale for shifting from water-heavy staples to drip-irrigated horticulture',
          ru: 'Экономическое обоснование диверсификации посевов в пользу садоводства и теплиц',
        },
        source: { uz: 'Jahon banki va FAO agroiqtisodiy tahlili', en: 'World Bank & FAO Agro-Economic Benchmarks', ru: 'Агроэкономический анализ Всемирного банка и ФАО' },
        unit: 'indeks',
        seriesName: { uz: 'Suv mahsuldorligi indeksi', en: 'Water Value Productivity Index', ru: 'Индекс водоотдачи' },
        data: [
          { name: { uz: 'Sholi (an’anaviy)', en: 'Flooded Paddy Rice', ru: 'Рис (затопление)' }, value: 10 },
          { name: { uz: 'Xom paxta (egatlab)', en: 'Furrow Raw Cotton', ru: 'Хлопок-сырец (борозд.)' }, value: 22 },
          { name: { uz: 'Intensiv bog‘ va uzum', en: 'Drip Orchards & Grapes', ru: 'Интенсивные сады' }, value: 68 },
          { name: { uz: 'Zamonaviy issiqxona', en: 'Hydroponic Greenhouse', ru: 'Гидропонные теплицы' }, value: 145 },
        ],
      },
      {
        id: 't12-food-ghg',
        type: 'bar',
        title: {
          uz: '1 kg oziq-ovqat mahsuloti ishlab chiqarishning o‘rtacha uglerod izi (kg CO₂e / kg)',
          en: 'Average Lifecycle Carbon Footprint per Kilogram of Food Product (kg CO₂e / kg)',
          ru: 'Средний углеродный след производства 1 кг пищевых продуктов (кг CO₂-экв./кг)',
        },
        subtitle: {
          uz: 'Yer o‘zlashtirish, metan ajralishi va logistika hisobga olingan holda',
          en: 'Full supply-chain emissions from farm land-use to retail shelf',
          ru: 'С учётом землепользования, ферментации, кормов и логистики',
        },
        source: { uz: 'Poore & Nemecek (Science) / IPCC', en: 'Poore & Nemecek (Science) / IPCC', ru: 'Poore & Nemecek / МГЭИК' },
        unit: 'kg CO₂e',
        seriesName: { uz: 'Uglerod izi (kg CO₂e)', en: 'Carbon Footprint (kg CO₂e)', ru: 'Углеродный след (кг CO₂-экв.)' },
        data: [
          { name: { uz: 'Qoramol go‘shti', en: 'Beef', ru: 'Говядина' }, value: 60 },
          { name: { uz: 'Pishloq / sut mahsuloti', en: 'Cheese', ru: 'Сыр' }, value: 21 },
          { name: { uz: 'Parranda go‘shti', en: 'Poultry', ru: 'Мясо птицы' }, value: 6.9 },
          { name: { uz: 'Bug‘doy va non', en: 'Wheat & Bread', ru: 'Пшеница и злаки' }, value: 1.4 },
          { name: { uz: 'Dukkaklilar (mosh, no‘xat)', en: 'Pulses & Peas', ru: 'Бобовые (маш, нут)' }, value: 0.9 },
        ],
      },
    ],
    laws: [
      {
        id: 't12-law-1',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Oziq-ovqat xavfsizligi to'g'risida»gi va «Oziq-ovqat mahsulotining sifati va xavfsizligi to'g'risida»gi Qonunlari",
          en: 'Laws of Uzbekistan "On Food Security" & "On Food Quality and Safety"',
          ru: 'Законы Республики Узбекистан «О продовольственной безопасности» и «О качестве и безопасности пищевой продукции»',
        },
        codeAndDate: {
          uz: '483-I-son (30.08.1997) va yangi Oziq-ovqat xavfsizligi qonunchiligi (2024–2025)',
          en: 'No. 483-I (Aug 30, 1997) & Modernized Food Security Statutory Framework',
          ru: '№ 483-I (30.08.1997 г.) и обновлённое законодательство о продбезопасности',
        },
        summary: {
          uz: "Asosiy iste'mol mahsulotlarining minimal zaxirasini shakllantirish, sanitariya-fitosanitariya me'yorlari, GMO tarkibli mahsulotlarni markirovkalash va narx barqarorligini ta'minlashni belgilaydi.",
          en: 'Governs strategic food reserves, sanitary/phytosanitary safety, GMO labeling rules, and vulnerable household access.',
          ru: 'Регулируют формирование стратегических продовольственных резервов, фитосанитарные нормы и маркировку продукции.',
        },
        significance: {
          uz: "Tashqi bozor va iqlim tebranishlarida ichki oziq-ovqat bozorining uzluksizligini himoya qiladi.",
          en: 'Buffers domestic consumers against global grain price shocks and climate harvest shortfalls.',
          ru: 'Защищает внутренний рынок от мировых ценовых скачков и неурожайных засушливых лет.',
        },
      },
      {
        id: 't12-law-2',
        type: 'presidential',
        title: {
          uz: "O'zbekiston Respublikasi qishloq xo'jaligini rivojlantirishning 2020–2030-yillarga mo'ljallangan strategiyasi",
          en: 'Strategy for Agricultural Development of the Republic of Uzbekistan for 2020–2030',
          ru: 'Стратегия развития сельского хозяйства Республики Узбекистан на 2020–2030 годы',
        },
        codeAndDate: {
          uz: 'PF-5853-son Farmon, 23.10.2019-yil',
          en: 'Presidential Decree No. PF-5853, October 23, 2019',
          ru: 'Указ Президента № УП-5853 от 23.10.2019 г.',
        },
        summary: {
          uz: "Davlat xarid kvotalaridan bozor munosabatlariga o'tish, agrobiznes klasterlari, tuproq unumdorligini saqlash va agrar ilm-fanni tijoratlashtirishni belgilaydi.",
          en: 'Transitions Uzbek farming from state procurement orders to market-driven agro-clusters, climate-smart R&D, and export logistics.',
          ru: 'Закрепляет переход от директивного госзаказа к рыночным агрокластерам, агрологистике и наукоёмкому земледелию.',
        },
        significance: {
          uz: "1 gektar yer va 1 m³ suvdan olinadigan eksport daromadini bir necha barobar oshirishga yo'naltirilgan.",
          en: 'Multiplies net income per hectare of irrigated land and per cubic meter of water.',
          ru: 'Кратно повышает экспортную отдачу с каждого гектара пашни и кубометра воды.',
        },
      },
      {
        id: 't12-law-3',
        type: 'uz_law',
        title: {
          uz: "O'zbekiston Respublikasining «Organik mahsulotlar to'g'risida»gi Qonuni va Kartaxena bioxavfsizlik protokoli",
          en: 'Law of Uzbekistan "On Organic Products" & Cartagena Protocol on Biosafety',
          ru: 'Закон РУз «Об органической продукции» и Картахенский протокол по биобезопасности',
        },
        codeAndDate: {
          uz: 'O‘RQ-766-son, 25.04.2022-yil · Kartaxena protokoli (O‘zR 2019-y. qo‘shilgan, O‘RQ-569)',
          en: 'Law No. O’RQ-766 (April 25, 2022) & Cartagena Protocol (acceded 2019, O’RQ-569)',
          ru: '№ ЗРУ-766 от 25.04.2022 г. · Картахенский протокол (РУз с 2019 г., № ЗРУ-569)',
        },
        summary: {
          uz: "Organik qishloq xo'jaligida sintetik agrokimyo va GMO qo'llashni taqiqlaydi hamda tirik o'zgartirilgan organizmlar transchegaraviy harakatini xavfsizlik nazoratiga oladi.",
          en: 'Prohibits synthetic pesticides and GMOs in certified organic production while regulating transboundary living modified organisms.',
          ru: 'Запрещает синтетическую агрохимию и ГМО в органическом секторе и регулирует трансграничное перемещение живых изменённых организмов.',
        },
        significance: {
          uz: "Ekologik toza milliy brendlarni jahon bozoriga olib chiqish va milliy urug'chilik bioxavfsizligini ta'minlaydi.",
          en: 'Protects native biodiversity while positioning Uzbek organic produce in high-margin export markets.',
          ru: 'Защищает национальный генофонд и выводит органическую продукцию страны на высокомаржинальные рынки.',
        },
      },
    ],
    facts: [
      {
        uz: "Niderlandiya maydoni O'zbekistondan 10 barobar kichik bo'lishiga qaramay, yuqori texnologik issiqxonalar, LED yoritish va yopiq suv sikli evaziga qishloq xo'jaligi eksporti qiymati bo'yicha dunyoda AQShdan keyin ikkinchi o'rinda turadi!",
        en: 'Despite having one-tenth of Uzbekistan’s land area, the Netherlands ranks second globally in agricultural export value thanks to closed-loop high-tech greenhouses.',
        ru: 'Несмотря на территорию в 10 раз меньше Узбекистана, Нидерланды занимают второе место в мире по стоимости агроэкспорта за счёт замкнутых высокотехнологичных теплиц.',
      },
      {
        uz: "Mosh, no'xat va loviya kabi dukkakli ekinlar ildizidagi tuganak bakteriyalar havodagi azotni tuproqqa boyitadi — bu esa g'alladan keyin takroriy ekin sifatida mineral o'g'it xarajatini 30% kamaytiradi va O'zbekistonga yuz millionlab dollar eksport keltiradi.",
        en: 'Legumes like mung bean (mosh) and chickpeas fix atmospheric nitrogen naturally—enriching soil after winter wheat while generating major Uzbek export revenues.',
        ru: 'Бобовые культуры (маш, нут) обогащают почву азотом после озимой пшеницы, снижая потребность в удобрениях на 30% и принося высокий экспортный доход.',
      },
      {
        uz: "Agar global oziq-ovqat isrofi alohida davlat bo'lganida edi, u issiqxona gazlari chiqarish hajmi bo'yicha Xitoy va AQShdan keyin dunyoda uchinchi eng yirik davlat bo'lardi (UNEP / FAO).",
        en: 'If global food loss and waste were a country, it would be the world’s third-largest greenhouse gas emitter after China and the United States (FAO/UNEP).',
        ru: 'Если бы мировые пищевые потери и отходы были отдельной страной, она заняла бы третье место в мире по выбросам парниковых газов после Китая и США.',
      },
    ],
    caseStudy: {
      title: {
        uz: "Farg'ona va Samarqandda intensiv bog'dorchilik va sovitkichli agrologistika klasterlari",
        en: 'Intensive Drip Orchards and Cold-Chain Agro-Logistics in Fergana & Samarkand',
        ru: 'Интенсивное садоводство и холодильная агрологистика в Фергане и Самарканде',
      },
      location: {
        uz: "Farg'ona vodiysi va Samarqand viloyati (O'zbekiston)",
        en: 'Fergana Valley & Samarkand Region, Uzbekistan',
        ru: 'Ферганская долина и Самаркандская область, Узбекистан',
      },
      challenge: {
        uz: "Tog'oldi qir-adir yerlarda suv tanqisligi tufayli paxta va bug'doy past hosil berar, yozda pishgan gilos va uzumning 25–30 foizi sovitkich yetishmasligidan nobud bo'lar edi.",
        en: 'Foothill lands yielded poor grain harvests under scarce water, while 25–30% of perishable cherries and table grapes spoiled post-harvest due to lacking cold storage.',
        ru: 'На предгорных землях зерновые давали низкую рентабельность при дефиците воды, а до 25–30% черешни и винограда терялось без современного охлаждения.',
      },
      solution: {
        uz: "Pakana va yarim pakana intensiv bog'lar tomchilatib sug'orishga o'tkazildi, do'ldan himoyalovchi to'rlar va zamonaviy «GlobalG.A.P.» sertifikatli sovitish-qadoqlash markazlari ishga tushirildi.",
        en: 'Dwarf high-density orchards with drip irrigation and anti-hail nets were paired with GlobalG.A.P.-certified pre-cooling and controlled-atmosphere storage hubs.',
        ru: 'Заложены интенсивные капельные сады с противоградовыми сетками и построены логистические центры шокового охлаждения по стандарту GlobalG.A.P.',
      },
      economicOutcome: {
        uz: "Meva nobudgarchiligi 5% dan pastga tushdi, suv sarfi 2 barobar kamaydi va 1 gektardan eksport tushumi an'anaviy dehqonchilikka nisbatan 4–6 barobar oshdi.",
        en: 'Post-harvest spoilage fell below 5%, water use halved, and per-hectare export revenue jumped 4–6x compared to traditional row crops.',
        ru: 'Потери урожая снизились ниже 5%, расход воды сократился вдвое, а экспортная выручка с гектара выросла в 4–6 раз.',
      },
    },
    terms: [
      {
        term: { uz: 'Iqlimga moslashgan aqlli qishloq xo‘jaligi (CSA)', en: 'Climate-Smart Agriculture (CSA)', ru: 'Климатически оптимизированное с/х (CSA)' },
        definition: {
          uz: "Bir vaqtning o'zida hosildorlikni barqaror oshirish, iqlim o'zgarishiga chidamlilikni kuchaytirish va issiqxona gazlarini kamaytirishga qaratilgan agrar tizim.",
          en: 'Integrated farming approach that simultaneously boosts productivity, strengthens climate resilience, and reduces agricultural GHG emissions.',
          ru: 'Подход ФАО, сочетающий устойчивый рост урожайности, адаптацию к климатическим рискам и снижение выбросов парниковых газов.',
        },
      },
      {
        term: { uz: 'Aniq dehqonchilik (Precision Agriculture)', en: 'Precision Agriculture', ru: 'Точное (прецизионное) земледелие' },
        definition: {
          uz: "GPS, sun'iy yo'ldosh tasvirlari, dronlar va sensorlar yordamida dalaning har bir uchastkasiga suv va o'g'itni aniq ehtiyoj bo'yicha berish texnologiyasi.",
          en: 'Data-driven farm management using satellite imagery, drones, and soil sensors to apply water and inputs with sub-meter accuracy.',
          ru: 'Управление посевами с помощью спутников, дронов и датчиков для строго дозированного внесения воды и удобрений на каждый участок поля.',
        },
      },
      {
        term: { uz: 'GMO (Genetik modifikatsiyalangan organizm)', en: 'GMO (Genetically Modified Organism)', ru: 'ГМО (генно-модифицированный организм)' },
        definition: {
          uz: "Genetik muhandislik usullari yordamida genotiplari maqsadli o'zgartirilgan qishloq xo'jaligi ekinlari yoki mikroorganizmlar.",
          en: 'Plant, animal, or microorganism whose genetic material has been altered using recombinant DNA biotechnology.',
          ru: 'Организм, генотип которого был искусственно изменён методами генной инженерии для придания новых хозяйственных свойств.',
        },
      },
      {
        term: { uz: 'Organik qishloq xo‘jaligi', en: 'Organic Agriculture', ru: 'Органическое сельское хозяйство' },
        definition: {
          uz: "Sintetik pestitsidlar, mineral azotli o'g'itlar va GMOdan voz kechib, biologik usullar va tabiiy o'g'itlarga tayanuvchi ekologik toza dehqonchilik.",
          en: 'Certified farming system relying on ecological pest control, crop rotation, and organic compost while prohibiting synthetic agrochemicals and GMOs.',
          ru: 'Сертифицированная система производства продовольствия без синтетических пестицидов, минеральных азотных удобрений и ГМО.',
        },
      },
    ],
    quiz: [
      {
        id: 'q12-1',
        question: {
          uz: "FAO metodologiyasiga ko'ra oziq-ovqat xavfsizligining to'rtta asosiy ustuni qaysilar?",
          en: 'What are the four foundational pillars of food security defined by the UN FAO?',
          ru: 'Каковы четыре базовые опоры продовольственной безопасности по методологии ФАО ООН?',
        },
        options: [
          { uz: 'Mavjudlik, iqtisodiy erishimlilik, to‘laqonli o‘zlashtirish va barqarorlik', en: 'Availability, Access, Utilization, and Stability', ru: 'Физическая и экономическая доступность, качество усвоения и стабильность' },
          { uz: 'Faqat eksport, import, boj va aksiz', en: 'Export, import, tariffs, and excise only', ru: 'Только экспорт, импорт, пошлины и акцизы' },
          { uz: 'Faqat go‘sht, shakar, tuz va yog‘', en: 'Meat, sugar, salt, and oil only', ru: 'Только мясо, сахар, соль и масло' },
          { uz: 'Reklama, kredit, lizing va garov', en: 'Advertising, credit, leasing, and collateral', ru: 'Реклама, кредит, лизинг и залог' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Oziq-ovqat nafaqat bozorda bor bo'lishi, balki aholining xarid qurbiga mos, xavfsiz-to'yimli va iqlim shoklarida uzluksiz bo'lishi shart.",
          en: 'Food security requires sufficient supply, household affordability, safe nutrition, and shock stability.',
          ru: 'Продбезопасность требует одновременно наличия продуктов, покупательной способности граждан, пищевой ценности и устойчивости поставок.',
        },
      },
      {
        id: 'q12-2',
        question: {
          uz: "Dunyo bo'yicha ishlab chiqarilgan oziq-ovqatning taxminan qancha qismi yo'qotiladi yoki isrof bo'ladi (FAO/UNEP)?",
          en: 'Roughly what fraction of global food produced for human consumption is lost or wasted annually (FAO/UNEP)?',
          ru: 'Около какой доли производимого в мире продовольствия ежегодно теряется или выбрасывается (ФАО/ЮНЕП)?',
        },
        options: [
          { uz: 'Taxminan uchdan bir qismi (~30%)', en: 'Roughly one-third (~30%)', ru: 'Около трети (~30%)' },
          { uz: 'Atigi 0,1%', en: 'Only 0.1%', ru: 'Всего 0,1%' },
          { uz: '95%', en: '95%', ru: '95%' },
          { uz: 'Umuman isrof bo‘lmaydi', en: 'Zero waste occurs', ru: 'Потерь не существует' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "FAO ma'lumotlariga ko'ra, global oziq-ovqatning qariyb uchdan bir qismi logistika va iste'mol bosqichida isrof bo'lib, global IIGning 8–10% ini chiqaradi.",
          en: 'Roughly 30% of global food is lost or wasted, squandering land, water, and generating 8–10% of global GHG emissions.',
          ru: 'Около трети продовольствия теряется по цепочке от поля до прилавка и домохозяйств, порождая 8–10% мировых выбросов ПГ.',
        },
      },
      {
        id: 'q12-3',
        question: {
          uz: "Tirik genetik o'zgartirilgan organizmlar (GMO) transchegaraviy harakati xavfsizligini qaysi xalqaro hujjat tartibga soladi?",
          en: 'Which international protocol governs biosafety in the cross-border movement of Living Modified Organisms (GMOs)?',
          ru: 'Какой международный протокол регулирует биобезопасность трансграничного перемещения живых изменённых организмов (ГМО)?',
        },
        options: [
          { uz: 'Kartaxena bioxavfsizlik protokoli', en: 'Cartagena Protocol on Biosafety', ru: 'Картахенский протокол по биобезопасности' },
          { uz: 'Antarktida shartnomasi', en: 'Antarctic Treaty', ru: 'Договор об Антарктике' },
          { uz: 'Shengen bitimi', en: 'Schengen Agreement', ru: 'Шенгенское соглашение' },
          { uz: 'Bazel bank standartlari', en: 'Basel III Banking Accord', ru: 'Базельские банковские стандарты' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Bioxilma-xillik konvensiyasiga ilova qilingan Kartaxena protokoli (O'zbekiston 2019-y. qo'shilgan) GMO bioxavfsizligini tartibga soladi.",
          en: 'The Cartagena Protocol under the UN CBD establishes strict biosafety risk assessments for transboundary GMOs.',
          ru: 'Картахенский протокол к Конвенции о биоразнообразии устанавливает международные процедуры оценки рисков ГМО.',
        },
      },
      {
        id: 'q12-4',
        question: {
          uz: "O'zbekistonda 2022-yil aprelda qabul qilingan O'RQ-766-sonli Qonun qaysi agrar yo'nalishni huquqiy tartibga soldi?",
          en: 'Which high-value agricultural segment was codified by Uzbekistan’s Law No. O’RQ-766 in April 2022?',
          ru: 'Какое перспективное направление агробизнеса урегулировал Закон РУз № ЗРУ-766 от 25 апреля 2022 года?',
        },
        options: [
          { uz: 'Organik mahsulotlar yetishtirish va sertifikatlash', en: 'Organic products cultivation and certification', ru: 'Производство и сертификацию органической продукции' },
          { uz: 'Dengiz kitlarini ovlash', en: 'Deep-sea whaling', ru: 'Морской китобойный промысел' },
          { uz: ' Kriptovalyuta mayningi', en: 'Cryptocurrency mining', ru: 'Майнинг криптовалют' },
          { uz: ' Avtomobil yo‘llari pullik tizimi', en: 'Highway tolling', ru: 'Платные автомагистрали' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "«Organik mahsulotlar to'g'risida»gi O'RQ-766-son Qonun o'zbek meva-sabzavotlarini ekologik toza maqomda eksport qilishga asos yaratdi.",
          en: 'Law No. O’RQ-766 "On Organic Products" aligned Uzbek organic certification with global export markets.',
          ru: 'Закон № ЗРУ-766 «Об органической продукции» закрепил стандарты экологически чистого земледелия для экспорта.',
        },
      },
      {
        id: 'q12-5',
        question: {
          uz: "1 kg mahsulot hisobiga eng yuqori uglerod izi (kg CO₂e) qaysi oziq-ovqat turiga to'g'ri keladi?",
          en: 'Which food product carries the highest lifecycle greenhouse gas footprint per kilogram produced?',
          ru: 'Какой продукт питания имеет наибольший удельный углеродный след (кг CO₂-экв. на 1 кг)?',
        },
        options: [
          { uz: 'Qoramol go‘shti', en: 'Beef', ru: 'Говядина' },
          { uz: 'Mosh va no‘xat (dukkaklilar)', en: 'Lentils and mung beans (pulses)', ru: 'Бобовые (маш, нут)' },
          { uz: 'Kartoshka va sabzi', en: 'Potatoes and carrots', ru: 'Картофель и морковь' },
          { uz: 'Olma', en: 'Apples', ru: 'Яблоки' },
        ],
        correctIndex: 0,
        explanation: {
          uz: "Kavsh qaytaruvchi hayvonlar oshqozonidagi enterik fermentatsiya (metan) va katta yem-yaylov maydoni sababli qoramol go'shtining uglerod izi eng yuqoridir.",
          en: 'Enteric methane fermentation and extensive pasture/feed requirements give beef ~40–60x higher emissions per kg than pulses.',
          ru: 'Из-за кишечной ферментации метана и кормовой базы углеродный след говядины в десятки раз превышает растительные белки.',
        },
      },
    ],
  },
];
