export interface Episode {
  id: string;
  label: string;
  order: number;
  title: string;
  description?: string;
}

export const episodes: Episode[] = [
  { id: 'FI1tHW7d3A8', label: '', order: 12, title: 'ПРОБЛЕМИТЕ НА ТИЙНЕЙДЖЪРИТЕ | 32 Подкаст' },
  { id: 'M-ynZ1ijkJE', label: '', order: 11, title: 'С какво се занимаваме извън ученето? | 32 Подкаст' },
  { id: '6VzfCV5J_L0', label: 'ЕП.11', order: 10, title: 'КАК ДА СЪЧЕТАЕМ ФИТНЕС, УЧИЛИЩЕ И РАБОТА | EП. 11 | 32 Подкаст' },
  { id: 'tja7Y8GcqVU', label: 'SPECIAL', order: 9, title: 'ТРЕТИ МАРТ | ИСТОРИЯ ЗА ОСВОБОЖДЕНИЕТО | с г-н Михайлов | 32 Подкаст SPECIAL' },
  { id: 'Q1-H_evkDa4', label: '', order: 8, title: 'ИЗВЪН УЧИЛИЩЕ | 32 Подкаст' },
  { id: 'h5QJqkaIL6s', label: '', order: 7, title: 'ГЛАСЪТ НА 32. СУИЧЕ | Forte Divas | 32 Подкаст' },
  { id: 'HC2CXJ5HHjg', label: 'ЕП.7', order: 6, title: 'ЛОКАЛИТЕ. | ЕП.7 | 32 Подкаст' },
  { id: 'BYpvUWqEWNM', label: '', order: 5, title: 'Преплитането на две култури | Erasmus+ | 32 Подкаст' },
  { id: 'BaYqRiYzN3k', label: 'SPECIAL', order: 4, title: 'Кой знае отговора? | Коледен Quiz | SPECIAL Коледен Епизод' },
  { id: 'M9y3vu4m0JA', label: 'ЕП.3', order: 3, title: '"Междучасие" с Драгомир Маринов - 32 Подкаст | EП.3' },
  { id: 'KuoooDT9_vo', label: 'SPECIAL', order: 2, title: 'ПАТРОННИЯТ ПРАЗНИК НА НАШЕТО УЧИЛИЩЕ | 32 Подкаст SPECIAL' },
  { id: 'LvSwqCOkcvM', label: 'ЕП.1', order: 1, title: '"Междучасие" с Петър Михайлов - 32 Подкаст | EП.1' },
];

export function latestEpisodes(count = 3): Episode[] {
  return [...episodes]
    .sort((a, b) => b.order - a.order)
    .slice(0, count);
}

export function youtubeUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
