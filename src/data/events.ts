export interface CalendarEvent {
  date: string;
  label: string;
  rubric: 'Междучасие' | 'SPECIAL';
}

export const events: CalendarEvent[] = [
  { date: '2026-06-06', label: 'ЕП.14', rubric: 'Междучасие' },
];
