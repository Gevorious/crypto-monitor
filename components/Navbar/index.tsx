'use client';
import { useSocketStore } from '@/stores/socketStore';
import Link from 'next/link';

const Navbar = () => {
  const { shouldConnect, toggleConnection } = useSocketStore();

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-10 h-16 flex items-center px-6 justify-between border-b border-gray-700">
      <div className="flex space-x-6 items-center">
        <Link
          href="/monitor"
          className="text-blue-400 hover:text-white font-semibold text-lg tracking-wide transition-colors"
        >
          Monitor
        </Link>
        <Link
          href="/alerts"
          className="text-blue-400 hover:text-white font-semibold text-lg tracking-wide transition-colors"
        >
          Alerts
        </Link>
      </div>
      <button
        className={`px-4 py-1.5 rounded font-medium transition-colors 
          ${
            shouldConnect
              ? 'bg-red-600 hover:bg-red-500 text-white'
              : 'bg-green-600 hover:bg-green-500 text-white'
          }`}
        onClick={toggleConnection}
      >
        {shouldConnect ? 'Stop' : 'Start'}
      </button>
    </nav>
  );
};

export default Navbar;
