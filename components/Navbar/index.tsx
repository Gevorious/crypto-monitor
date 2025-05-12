'use client';
import { useSocketStore } from '@/stores/socketStore';
import Link from 'next/link';

const Navbar = () => {
  const { shouldConnect, toggleConnection } = useSocketStore();
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 h-16 flex items-center px-6 justify-between">
      <div className="flex space-x-6 items-center">
        <Link href="/monitor" className="hover:underline font-medium">
          Monitor
        </Link>
        <Link href="/alerts" className="hover:underline font-medium">
          Alerts
        </Link>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
        onClick={toggleConnection}
      >
        {shouldConnect ? 'Stop' : 'Start'}{' '}
      </button>
    </nav>
  );
};

export default Navbar;
