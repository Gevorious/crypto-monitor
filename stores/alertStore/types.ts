export type Alert = {
  alertMessage: string;
  price: number;
  quantity: number;
  total: number;
  timestamp: number;
};

export type AlertState = {
  cheap: Alert[];
  solid: Alert[];
  big: Alert[];
  addAlert: (type: 'cheap' | 'solid' | 'big', alert: Alert) => void;
  clearOldAlerts: () => void;
};
