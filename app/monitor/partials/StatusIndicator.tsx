import { useSocketStore } from '@/stores/socketStore';

const statusColorMap = {
  connected: { color: 'text-green-400', icon: '🟢' },
  connecting: { color: 'text-yellow-400', icon: '🟡' },
  closed: { color: 'text-gray-400', icon: '⚪' },
  error: { color: 'text-red-400', icon: '🔴' },
  default: { color: 'text-white-400', icon: '' },
};

const StatusIndicator = () => {
  const { connectionStatus } = useSocketStore();

  return (
    <div className={statusColorMap[connectionStatus || 'default'].color}>
      <span className="hidden md:inline-block">{connectionStatus}</span>
      <span className="ml-1">{statusColorMap[connectionStatus || 'default'].icon}</span>
    </div>
  );
};

export default StatusIndicator;
