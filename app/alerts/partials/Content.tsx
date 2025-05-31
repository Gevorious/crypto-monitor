'use client';
import { AlertCard } from '@/components';
import AlertTable from './AlertTable';
import { useAlertStore } from '@/stores/alertStore';

const Content = () => {
  const { cheap, solid, big } = useAlertStore();

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-20 px-2 bg-black text-white font-mono">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">Live Crypto Alerts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AlertCard title="Cheap order" count={cheap.length}>
          <AlertTable alerts={cheap} />
        </AlertCard>
        <AlertCard title="Solid order" count={solid.length}>
          <AlertTable alerts={solid} />
        </AlertCard>
        <AlertCard title="Big biznis here" count={big.length}>
          <AlertTable alerts={big} />
        </AlertCard>
      </div>
    </div>
  );
};

export default Content;
