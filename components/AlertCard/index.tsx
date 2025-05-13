import { AlertCardProps } from './types';

const AlertCard = ({ title, count, children }: AlertCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow-md">
      <h2 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h2>
      <div className="text-sm mb-4">
        <span className="text-gray-400">Count:</span>{' '}
        <span className="text-green-400 font-bold">{count}</span>
      </div>
      {children}
    </div>
  );
};

export default AlertCard;
