import { useSocketStore } from '@/stores/socketStore';

const RefreshSpeedControl = () => {
  const { refreshSpeed, setRefreshSpeed } = useSocketStore();
  return (
    <div className="mb-4">
      <label htmlFor="speed" className="mr-2">
        Refresh speed:
      </label>
      <select
        id="speed"
        value={refreshSpeed}
        onChange={(e) => setRefreshSpeed(Number(e.target.value))}
        className="bg-gray-800 text-white p-1 rounded"
      >
        <option value={100}>Fast (100ms)</option>
        <option value={500}>Normal (500ms)</option>
        <option value={1000}>Slow (1s)</option>
        <option value={2000}>Very Slow (2s)</option>
      </select>
    </div>
  );
};

export default RefreshSpeedControl;
