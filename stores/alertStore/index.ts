import { create } from 'zustand';
import { AlertState } from './types';
import { ONE_MINUTE_IN_MS } from '@/app/constants';

export const useAlertStore = create<AlertState>((set, get) => ({
  cheap: [],
  solid: [],
  big: [],
  addAlert: (type, alert) => {
    set((state) => ({
      [type]: [alert, ...state[type]].filter((a) => Date.now() - a.timestamp < ONE_MINUTE_IN_MS),
    }));
  },
  clearOldAlerts: () => {
    const now = Date.now();
    set((state) => ({
      cheap: state.cheap.filter((a) => {
        console.log('CLEAROLDALERTS', now - a.timestamp);
        return now - a.timestamp < ONE_MINUTE_IN_MS;
      }),
      solid: state.solid.filter((a) => now - a.timestamp < ONE_MINUTE_IN_MS),
      big: state.big.filter((a) => now - a.timestamp < ONE_MINUTE_IN_MS),
    }));
  },
}));
