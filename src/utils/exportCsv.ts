import { Language, Topic, TopicScheduleMap } from '../types';
import { tText } from '../i18n/ui';

export function exportSchedulesToCsv(
  topics: Topic[],
  schedules: TopicScheduleMap,
  lang: Language,
  notAssignedText: string
): void {
  const headers: Record<Language, string[]> = {
    uz: ['Mavzu №', 'Mavzu nomi', "Ta'lim shakli", "O'tiladigan sana", 'Guruh'],
    en: ['Topic #', 'Topic Title', 'Study Mode', 'Lecture Date', 'Group'],
    ru: ['Тема №', 'Название темы', 'Форма обучения', 'Дата занятия', 'Группа'],
  };

  const modeLabels: Record<Language, { regular: string; independent: string }> = {
    uz: { regular: 'Auditoriya mashg‘uloti', independent: "Mustaqil ta'lim *" },
    en: { regular: 'Classroom Lecture', independent: 'Independent Study *' },
    ru: { regular: 'Аудиторное занятие', independent: 'Самостоятельное обучение *' },
  };

  const escapeCsvCell = (val: string): string => {
    const cleaned = val.replace(/"/g, '""');
    return `"${cleaned}"`;
  };

  const rows = topics.map((topic) => {
    const sched = schedules[topic.id];
    const dateVal = sched?.date?.trim() ? sched.date : notAssignedText;
    const groupVal = sched?.group?.trim() ? sched.group : notAssignedText;
    const modeVal = topic.isIndependentStudy
      ? modeLabels[lang].independent
      : modeLabels[lang].regular;

    return [
      String(topic.id),
      escapeCsvCell(tText(topic.title, lang)),
      escapeCsvCell(modeVal),
      escapeCsvCell(dateVal),
      escapeCsvCell(groupVal),
    ].join(',');
  });

  // Include UTF-8 BOM (\uFEFF) so Microsoft Excel renders Cyrillic and Uzbek apostrophes properly
  const csvContent = '\uFEFF' + [headers[lang].join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `EcoEconomics_Schedule_${lang.toUpperCase()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
