import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center text-white font-mono px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6 text-gray-400">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-white border border-gray-600 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
