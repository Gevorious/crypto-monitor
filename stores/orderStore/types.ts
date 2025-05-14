export type AlertTypes = 'cheap' | 'solid' | 'big';

export type Order = {
  time: string;
  symbol: string;
  price: number;
  volume: number;
  side: 'Buy' | 'Sell';
  alertType?: AlertTypes;
};

export type OrderStore = {
  orders: Order[];
  addOrder: (order: Order) => void;
};
