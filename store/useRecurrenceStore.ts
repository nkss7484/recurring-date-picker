import { create } from 'zustand';

type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceState {
  recurrenceType: RecurrenceType;
  interval: number; // every X days/weeks/etc.
  weekdays: string[]; // ['monday', 'friday']
  startDate: string; // YYYY-MM-DD
  endDate?: string;
  setRecurrenceType: (type: RecurrenceType) => void;
  setInterval: (val: number) => void;
  setWeekdays: (days: string[]) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: 'daily',
  interval: 1,
  weekdays: [],
  startDate: '',
  endDate: '',
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (val) => set({ interval: val }),
  setWeekdays: (days) => set({ weekdays: days }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
