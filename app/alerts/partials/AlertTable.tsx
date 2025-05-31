import { AlertTableProps } from '../types';

const AlertTable = ({ alerts }: AlertTableProps) => {
  return (
    <table className="w-full text-sm border-separate border-spacing-y-1">
      <thead>
        <tr className="text-gray-400 text-left">
          <th>Alert</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert, i) => (
          <tr key={`alert -${i}`} className="bg-gray-800 rounded">
            <td className="pr-1 border-e">{alert.alertMessage}</td>
            <td className="px-1 border-e">${alert.price.toLocaleString()}</td>
            <td className="px-1 border-e">{alert.quantity}</td>
            <td className="pl-1">${alert.total.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlertTable;
