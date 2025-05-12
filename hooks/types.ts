export type Order = {
  id: string;
  time: string;
  symbol: string;
  price: number;
  volume: number;
  side: 'Buy' | 'Sell';
};
