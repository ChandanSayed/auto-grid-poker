import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const inter = Nunito_Sans({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Auto Grid Poker',
  description: 'Auto Grid Poker',
  keywords: 'Auto Grid Poker'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} bg-primaryBg text-white overflow-x-hidden`}>{children}</body>
    </html>
  );
}
