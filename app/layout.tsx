import '@/public/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import AuthProvider from '@/context/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sheet - APP',
  description: 'Sheet management app for the next generation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <AuthProvider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
