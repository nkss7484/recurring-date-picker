import { addDays, addWeeks, addMonths, addYears, format } from 'date-fns';

export function generateRecurringDates({
  type,
  interval,
  startDate,
  endDate,
}: {
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  startDate: string;
  endDate?: string;
}): string[] {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : addMonths(start, 12);
  const result: string[] = [];
  let current = new Date(start);

  while (current <= end) {
    result.push(format(current, 'yyyy-MM-dd'));
    switch (type) {
      case 'daily':
        current = addDays(current, interval);
        break;
      case 'weekly':
        current = addWeeks(current, interval);
        break;
      case 'monthly':
        current = addMonths(current, interval);
        break;
      case 'yearly':
        current = addYears(current, interval);
        break;
    }
  }

  return result;
}
