import { OrdersListProps } from '../types';

const OrdersList = ({ orders, loading }: OrdersListProps) => {
  return (
    <div className="max-h-[75vh] overflow-y-auto px-2 custom-scrollbar">
      <ul>
        <li className="flex justify-between py-1 border-b border-gray-500 text-gray-300 font-bold">
          <span className="w-[100px]">Time</span>
          <span className="w-[100px]">Symbol</span>
          <span className="w-[100px]">Price</span>
          <span className="w-[100px]">Volume</span>
          <span className="w-[60px]">Side</span>
        </li>
        {orders.map((order) => (
          <li
            key={order.id}
            className={`flex justify-between py-1 border-b border-gray-700 ${
              order.side === 'Buy' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            <span className="w-[100px]">{order.time}</span>
            <span className="w-[100px]">{order.symbol}</span>
            <span className="w-[100px]">${order.price.toFixed(2)}</span>
            <span className="w-[100px]">{order.volume}</span>
            <span className="w-[60px]">{order.side}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
