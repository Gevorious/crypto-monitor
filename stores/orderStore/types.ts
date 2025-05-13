export type Order = {
  time: string;
  symbol: string;
  price: number;
  volume: number;
  side: 'Buy' | 'Sell';
  alertType?: 'cheap' | 'solid' | 'big';
};

export type OrderStore = {
  orders: Order[];
  addOrder: (order: Order) => void;
};
