import { OrdersListProps } from '../types';

const alertingRowMap = {
  cheap: 'bg-blue-200 text-blue-900',
  solid: 'bg-amber-200 text-amber-900',
  big: 'bg-rose-200 text-rose-900',
};

const OrdersList = ({ orders }: OrdersListProps) => {
  return (
    <div className="px-2 text-center">
      <div className="flex justify-between border-b border-gray-500 pl-1 pr-2 text-gray-300 font-bold">
        <span className="w-[100px]">Time</span>
        <span className="w-[100px]">Symbol</span>
        <span className="w-[100px]">Price</span>
        <span className="w-[100px]">Volume</span>
        <span className="w-[50px]">Side</span>
      </div>
      <ul className="overflow-y-scroll custom-scrollbar max-h-[75vh]">
        {orders.map((order, i) => (
          <li
            key={`order-${i}`}
            className={`flex justify-between py-1 border-b border-gray-700 ${
              order.alertType
                ? alertingRowMap[order.alertType]
                : order.side === 'Buy'
                  ? 'text-green-400'
                  : 'text-red-400'
            }`}
          >
            <span className="w-[100px]">{order.time}</span>
            <span className="w-[100px]">{order.symbol}</span>
            <span className="w-[100px]">${order.price.toFixed(2)}</span>
            <span className="w-[100px]">{order.volume}</span>
            <span className="w-[50px]">{order.side}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
