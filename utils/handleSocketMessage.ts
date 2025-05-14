import { useSocketStore } from '@/stores/socketStore';
import { useOrderStore } from '@/stores/orderStore';
import { Order } from '@/stores/orderStore/types';
import { WebSocketData } from './types';
import { handleAlerts } from './handleAlerts';

let lastUpdateTime = 0;

export function handleSocketMessage(data: WebSocketData) {
  if (data.message.TYPE !== '8') return;

  const now = Date.now();
  const refreshSpeed = useSocketStore.getState().refreshSpeed;
  if (now - lastUpdateTime < refreshSpeed) return;
  lastUpdateTime = now;

  const { P: price, Q: volume, SIDE: side, REPORTEDNS } = data.message;

  const timestamp = REPORTEDNS / 1e6;

  const order: Order = {
    time: new Date(timestamp).toLocaleTimeString(),
    symbol: 'BTC/USDT',
    price,
    volume,
    side: side === 0 ? 'Buy' : 'Sell',
  };

  useOrderStore.getState().addOrder(order);

  if (price && volume) {
    const alertType = handleAlerts(order, timestamp);
    if (alertType) {
      order.alertType = alertType;
    }
  }

  useOrderStore.getState().addOrder(order);
}
