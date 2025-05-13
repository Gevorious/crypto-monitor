import { create } from 'zustand';
import { OrderStore, Order } from './types';

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  addOrder: (order: Order) =>
    set((state) => ({
      orders: [order, ...state.orders.slice(0, 499)],
    })),
}));
