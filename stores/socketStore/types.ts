import { SocketStatus } from '@/utils/types';

export type SocketStore = {
  connectionStatus: SocketStatus | '';
  shouldConnect: boolean;
  refreshSpeed: number;
  connect: () => void;
  disconnect: () => void;
  toggleConnection: () => void;
  setRefreshSpeed: (ms: number) => void;
};
