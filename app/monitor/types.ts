import { Order } from '@/hooks/types';

export type RefreshSpeedControlProps = {
  refreshSpeed: number;
  setRefreshSpeed: (speed: number) => void;
};

export type OrdersListProps = {
  orders: Order[];
  loading?: boolean;
};
