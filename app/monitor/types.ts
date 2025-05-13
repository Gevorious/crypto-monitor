import { Order } from '@/stores/orderStore/types';

export type RefreshSpeedControlProps = {
  refreshSpeed: number;
  setRefreshSpeed: (speed: number) => void;
};

export type OrdersListProps = {
  orders: Order[];
};
