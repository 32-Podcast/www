export interface Event {
  date: string;
  label: string;
  rubric: 'Междучасие' | 'SPECIAL';
}

export const events: Event[] = [
  {
    date: '2026-06-06',
    label: 'ЕП.14',
    rubric: 'Междучасие',
  },
];