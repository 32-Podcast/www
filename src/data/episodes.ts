export interface Episode {
  id: string;
  order: number;
  rubric: 'Междучасие' | 'SPECIAL';
  title: string;
  date: string;
}

export const episodes: Episode[] = [
  { id: 'LvSwqCOkcvM', order: 1, rubric: 'Междучасие', title: '"Междучасие" с Петър Михайлов', date: '2024-09-15' },
  { id: 'KuoooDT9_vo', order: 2, rubric: 'SPECIAL', title: 'Патронният празник на нашето училище', date: '2024-10-25' },
  { id: 'M9y3vu4m0JA', order: 3, rubric: 'Междучасие', title: '"Междучасие" с Драгомир Маринов', date: '2024-11-20' },
  { id: 'BaYqRiYzN3k', order: 4, rubric: 'SPECIAL', title: 'Кой знае отговора? | Коледен Quiz', date: '2024-12-18' },
  { id: 'BYpvUWqEWNM', order: 5, rubric: 'Междучасие', title: 'Преплитането на две култури | Erasmus+', date: '2025-01-22' },
  { id: 'h5QJqkaIL6s', order: 6, rubric: 'Междучасие', title: 'Гласът на 32. СУИЧЕ | Forte Divas', date: '2025-02-19' },
  { id: 'HC2CXJ5HHjg', order: 7, rubric: 'Междучасие', title: 'Локалите', date: '2025-03-19' },
  { id: 'Q1-H_evkDa4', order: 8, rubric: 'Междучасие', title: 'Извън училище', date: '2025-04-23' },
  { id: 'tja7Y8GcqVU', order: 9, rubric: 'SPECIAL', title: 'Трети март | История за освобождението', date: '2025-05-08' },
  { id: '6VzfCV5J_L0', order: 10, rubric: 'Междучасие', title: 'Как да съчетаем фитнес, училище и работа', date: '2025-10-15' },
  { id: 'M-ynZ1ijkJE', order: 11, rubric: 'Междучасие', title: 'С какво се занимаваме извън ученето?', date: '2025-11-12' },
  { id: 'FI1tHW7d3A8', order: 12, rubric: 'Междучасие', title: 'Проблемите на тийнейджърите', date: '2025-12-10' },
];

export function latestEpisodes(count = 3): Episode[] {
  return [...episodes]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function episodeLabel(order: number): string {
  return `ЕП.${order}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('bg-BG', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function youtubeUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
