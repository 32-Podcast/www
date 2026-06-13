export interface Episode {
  id: string;
  order: number;
  rubric: 'Междучасие' | 'SPECIAL';
  title: string;
  date: string;
}

export const episodes: Episode[] = [
  { id: 'LvSwqCOkcvM', order: 1, rubric: 'Междучасие', title: '"Междучасие" с Петър Михайлов', date: '2025-10-17' },
  { id: 'KuoooDT9_vo', order: 2, rubric: 'SPECIAL', title: 'Патронният празник на нашето училище', date: '2025-10-25' },
  { id: 'M9y3vu4m0JA', order: 3, rubric: 'Междучасие', title: '"Междучасие" с Драгомир Маринов', date: '2025-12-19' },
  { id: 'BaYqRiYzN3k', order: 4, rubric: 'SPECIAL', title: 'Кой знае отговора? | Коледен Quiz', date: '2025-12-28' },
  { id: 'BYpvUWqEWNM', order: 5, rubric: 'Междучасие', title: 'Преплитането на две култури | Erasmus+', date: '2026-01-12' },
  { id: 'h5QJqkaIL6s', order: 6, rubric: 'Междучасие', title: 'Гласът на 32. СУИЧЕ | Forte Divas', date: '2026-02-16' },
  { id: 'HC2CXJ5HHjg', order: 7, rubric: 'Междучасие', title: 'Локалите', date: '2026-01-26' },
  { id: 'Q1-H_evkDa4', order: 8, rubric: 'Междучасие', title: 'Извън училище', date: '2026-02-24' },
  { id: 'tja7Y8GcqVU', order: 9, rubric: 'SPECIAL', title: 'Трети март | История за освобождението', date: '2026-03-03' },
  { id: '6VzfCV5J_L0', order: 10, rubric: 'Междучасие', title: 'Как да съчетаем фитнес, училище и работа', date: '2026-01-26' },
  { id: 'M-ynZ1ijkJE', order: 11, rubric: 'Междучасие', title: 'С какво се занимаваме извън ученето?', date: '2026-03-06' },
  { id: 'FI1tHW7d3A8', order: 12, rubric: 'Междучасие', title: 'Проблемите на тийнейджърите', date: '2026-05-29' },
  { id: '5jDmPg-gVBo', order: 14, rubric: 'Междучасие', title: 'Нов училищен STEM център & Втори интердисциплинарен турнир „Деца на науката"', date: '2026-06-06' },
];

export function latestEpisodes(count = 3): Episode[] {
  return [...episodes]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function episodeLabel(order: number): string {
  return `ЕП.${order}`;
}

const BG_MONTHS = [
  'януари', 'февруари', 'март', 'април', 'май', 'юни',
  'юли', 'август', 'септември', 'октомври', 'ноември', 'декември',
];

const BG_MONTHS_SHORT = [
  'яну', 'фев', 'мар', 'апр', 'май', 'юни',
  'юли', 'авг', 'сеп', 'окт', 'ное', 'дек',
];

export function formatDate(iso: string, style: 'long' | 'short' = 'long'): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  const months = style === 'short' ? BG_MONTHS_SHORT : BG_MONTHS;
  return `${d} ${months[m - 1]} ${y}`;
}

export function youtubeUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
