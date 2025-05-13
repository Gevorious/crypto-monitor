import { create } from 'zustand';
import WebSocketManager from '@/utils/websocket';
import { SocketStore } from './types';
import { handleSocketMessage } from '@/utils/handleSocketMessage';

let socket: WebSocketManager | null = null;

const API_KEY = process.env.NEXT_PUBLIC_CRYPTOCOMPARE_API_KEY!;

export const useSocketStore = create<SocketStore>((set, get) => ({
  connectionStatus: '',
  shouldConnect: false,
  refreshSpeed: 500,

  connect: () => {
    if (socket) return;

    socket = new WebSocketManager(API_KEY, handleSocketMessage, (status) =>
      set({ connectionStatus: status }),
    );

    socket.connect();
    set({ shouldConnect: true });
  },

  disconnect: () => {
    socket?.disconnect();
    socket = null;
    set({ shouldConnect: false });
  },

  toggleConnection: () => {
    const { shouldConnect, connect, disconnect } = get();
    shouldConnect ? disconnect() : connect();
  },

  setRefreshSpeed: (ms) => set({ refreshSpeed: ms }),
}));
