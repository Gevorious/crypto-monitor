import { Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Crypto Streamer',
  description: 'Monitor and alert on crypto prices',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="pt-16 mx-auto bg-black min-h-[100vh]">{children}</main>
      </body>
    </html>
  );
}
