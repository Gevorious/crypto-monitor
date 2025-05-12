import Link from 'next/link';

const Home = () => {
  return (
    <main className="h-screen w-full bg-black flex flex-col justify-center items-center text-white font-mono px-4">
      <h1 className="text-4xl font-bold mb-4">Crypto Stream Monitor</h1>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Real-time BTC/USDT order feed using CryptoCompare WebSocket API. Navigate to the monitor to
        view live trading data.
      </p>
      <Link
        href="/monitor"
        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-white border border-gray-600 transition-colors"
      >
        Go to Monitor
      </Link>
    </main>
  );
};

export default Home;
