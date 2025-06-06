import './globals.css';
import { Providers } from './providers';
import { Metadata } from 'next';
import { Figtree } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'VitalPath Research',
  description: 'AI-Driven Health Coaching for Lasting Change',
  icons: {
    icon: '/favicon.ico', // <-- Ensures favicon.ico is used
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}















  