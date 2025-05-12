import { create } from 'zustand';
import { SocketStore } from './types';

export const useSocketStore = create<SocketStore>((set) => ({
  shouldConnect: true,
  setShouldConnect: (value) => set({ shouldConnect: value }),
  toggleConnection: () => set((state) => ({ shouldConnect: !state.shouldConnect })),
}));
