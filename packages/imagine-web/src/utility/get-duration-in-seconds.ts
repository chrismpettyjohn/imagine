import DayJS from 'dayjs';

export function getDurationInSeconds(start: string, end: string): number {
  return DayJS(end).diff(DayJS(start), 'second');
}
