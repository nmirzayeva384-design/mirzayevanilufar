export type Language = 'uz' | 'en' | 'ru';

export interface LocalizedText {
  uz: string;
  en: string;
  ru: string;
}

export interface LocalizedStringArray {
  uz: string[];
  en: string[];
  ru: string[];
}

export interface TopicSection {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
  keyTakeaway?: LocalizedText;
}

export interface TopicKPI {
  value: string;
  unit: LocalizedText;
  label: LocalizedText;
  year: string;
  source: LocalizedText;
  isApproximate?: boolean;
}

export interface ChartDataPoint {
  name: string | LocalizedText;
  value: number;
  secondaryValue?: number;
}

export interface TopicChart {
  id: string;
  type: 'area' | 'bar' | 'line' | 'pie';
  title: LocalizedText;
  subtitle: LocalizedText;
  source: LocalizedText;
  unit: string;
  seriesName: LocalizedText;
  secondarySeriesName?: LocalizedText;
  data: ChartDataPoint[];
}

export interface LegalDocument {
  id: string;
  type: 'uz_law' | 'presidential' | 'international';
  title: LocalizedText;
  codeAndDate: LocalizedText;
  summary: LocalizedText;
  significance: LocalizedText;
}

export interface CaseStudy {
  title: LocalizedText;
  location: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  economicOutcome: LocalizedText;
}

export interface TopicTerm {
  term: LocalizedText;
  definition: LocalizedText;
}

export interface QuizQuestion {
  id: string;
  topicId?: number;
  question: LocalizedText;
  options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  correctIndex: number;
  explanation: LocalizedText;
}

export interface Topic {
  id: number;
  isIndependentStudy: boolean;
  iconName:
    | 'Compass'
    | 'Scale'
    | 'Layers'
    | 'Gem'
    | 'Sun'
    | 'Orbit'
    | 'Droplets'
    | 'Trees'
    | 'Wind'
    | 'Recycle'
    | 'ThermometerSun'
    | 'Wheat'
    | 'Factory'
    | 'Users'
    | 'Landmark';
  title: LocalizedText;
  shortDescription: LocalizedText;
  keywords: LocalizedStringArray;
  sections: TopicSection[];
  kpis: TopicKPI[];
  charts: TopicChart[];
  laws: LegalDocument[];
  facts: LocalizedText[];
  caseStudy: CaseStudy;
  terms: TopicTerm[];
  quiz: QuizQuestion[];
}

export interface TopicSchedule {
  date: string;
  group: string;
}

export type TopicScheduleMap = Record<number, TopicSchedule>;

export interface GlossaryItem {
  id: string;
  category: 'economics' | 'climate' | 'resources' | 'policy' | 'ecology';
  term: LocalizedText;
  definition: LocalizedText;
  relatedTopicId: number;
}

export interface ReferenceItem {
  id: number;
  citation: LocalizedText;
  type: LocalizedText;
  note?: LocalizedText;
}
