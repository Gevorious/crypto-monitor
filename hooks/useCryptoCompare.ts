import WebSocketManager from '@/utils/websocket';
import { useEffect, useRef, useState } from 'react';
import { Order } from './types';
import { SocketStatus } from '@/utils/types';
import { useSocketStore } from '@/stores/socketStore';

const useCryptoCompare = (apiKey: string) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [refreshSpeed, setRefreshSpeed] = useState(500);
  const [connectionStatus, setConnectionStatus] = useState<SocketStatus | ''>('');

  const { shouldConnect } = useSocketStore();
  const socketRef = useRef<WebSocketManager | null>(null);

  const lastUpdateTimeRef = useRef(0);

  useEffect(() => {
    if (shouldConnect) {
      socketRef.current = new WebSocketManager(
        apiKey,
        (data) => {
          if (data.message.TYPE === '8') {
            const now = Date.now();
            if (now - lastUpdateTimeRef.current < refreshSpeed) return;
            lastUpdateTimeRef.current = now;

            const { CCSEQ: ccseq, P: price, Q: volume, SIDE: side, REPORTEDNS } = data.message;

            const order: Order = {
              id: `${ccseq}-${REPORTEDNS}`,
              time: new Date(REPORTEDNS / 1e6).toLocaleTimeString(),
              symbol: 'BTC/USDT',
              price,
              volume,
              side: side === 0 ? 'Buy' : 'Sell',
            };

            setOrders((prev) => [order, ...prev.slice(0, 499)]);
          }
        },
        setConnectionStatus,
      );
      socketRef.current?.connect();
    } else {
      socketRef.current?.disconnect();
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [refreshSpeed, shouldConnect]);

  return {
    orders,
    refreshSpeed,
    setRefreshSpeed,
    connectionStatus,
    isLoading: connectionStatus === 'connecting',
  };
};

export default useCryptoCompare;
