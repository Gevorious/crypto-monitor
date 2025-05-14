import {
  BIG_ORDER_TOTAL_AMOUNT_MIN,
  CHEAP_ORDER_PRICE_MAX,
  SOLID_ORDER_VOL_MIN,
} from '@/constants';
import { useAlertStore } from '@/stores/alertStore';
import { AlertTypes, Order } from '@/stores/orderStore/types';

export const handleAlerts = ({ price, volume }: Order, timestamp: number) => {
  const total = price * volume;
  const addAlert = useAlertStore.getState().addAlert;

  let alertType: AlertTypes | undefined;

  if (price < CHEAP_ORDER_PRICE_MAX) {
    alertType = 'cheap';
    addAlert('cheap', {
      alertMessage: 'Cheap order',
      price,
      quantity: volume,
      total,
      timestamp,
    });
  }

  if (volume > SOLID_ORDER_VOL_MIN) {
    alertType = 'solid';
    addAlert('solid', {
      alertMessage: 'Solid order',
      price,
      quantity: volume,
      total,
      timestamp,
    });
  }

  if (total > BIG_ORDER_TOTAL_AMOUNT_MIN) {
    alertType = 'big';
    addAlert('big', {
      alertMessage: 'Big biznis here',
      price,
      quantity: volume,
      total,
      timestamp,
    });
  }

  return alertType;
};
