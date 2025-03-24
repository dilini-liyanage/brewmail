import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';

import './globals.css';
import Footer from '@/components/public/Footer';
import Header from '@/components/public/Header';

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Brewmail',
  description: 'Created by Sampath',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
