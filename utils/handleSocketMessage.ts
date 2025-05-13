import { useAlertStore } from '@/stores/alertStore';
import { useSocketStore } from '@/stores/socketStore';
import { useOrderStore } from '@/stores/orderStore';
import { Order } from '@/stores/orderStore/types';

let lastUpdateTime = 0;

export function handleSocketMessage(data: any) {
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
    const total = price * volume;
    const addAlert = useAlertStore.getState().addAlert;

    if (price < 50_000) {
      order.alertType = 'cheap';
      addAlert('cheap', {
        alertMessage: 'Cheap order',
        price,
        quantity: volume,
        total,
        timestamp,
      });
    }

    if (volume > 10) {
      order.alertType = 'solid';
      addAlert('solid', {
        alertMessage: 'Solid order',
        price,
        quantity: volume,
        total,
        timestamp,
      });
    }

    if (total > 1_000_000) {
      order.alertType = 'big';
      addAlert('big', {
        alertMessage: 'Big biznis here',
        price,
        quantity: volume,
        total,
        timestamp,
      });
    }
  }

  useOrderStore.getState().addOrder(order);
}
