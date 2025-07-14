'use client';
import RefreshSpeedControl from './RefreshSpeedControl';
import OrdersList from './OrdersList';
import StatusIndicator from './StatusIndicator';

const Content = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-black text-white font-mono overflow-hidden">
      <div className="py-4 px-2">
        <h1 className="text-2xl mb-4">Live Binance BTC/USDT Orders</h1>
        <div className="flex justify-between px-2">
          <RefreshSpeedControl />
          <StatusIndicator />
        </div>
        <OrdersList />
      </div>
    </div>
  );
};

export default Content;
