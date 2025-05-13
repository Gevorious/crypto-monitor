'use client';
import RefreshSpeedControl from './RefreshSpeedControl';
import OrdersList from './OrdersList';
import { useSocketStore } from '@/stores/socketStore';
import { useOrderStore } from '@/stores/orderStore';

const statusColorMap = {
  connected: { color: 'text-green-400', icon: '🟢' },
  connecting: { color: 'text-yellow-400', icon: '🟡' },
  closed: { color: 'text-gray-400', icon: '⚪' },
  error: { color: 'text-red-400', icon: '🔴' },
  default: { color: 'text-white-400', icon: '' },
};

const Content = () => {
  const { connectionStatus, refreshSpeed, setRefreshSpeed } = useSocketStore();
  const { orders } = useOrderStore();

  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-black text-white font-mono overflow-hidden">
      <div className="p-4">
        <h1 className="text-2xl mb-4">Live Binance BTC/USDT Orders</h1>
        <div className="flex justify-between">
          <RefreshSpeedControl refreshSpeed={refreshSpeed} setRefreshSpeed={setRefreshSpeed} />
          <span className={statusColorMap[connectionStatus || 'default'].color}>
            {connectionStatus}
            <span className="ml-1">{statusColorMap[connectionStatus || 'default'].icon}</span>
          </span>
        </div>
        <OrdersList orders={orders} />
      </div>
    </div>
  );
};

export default Content;
