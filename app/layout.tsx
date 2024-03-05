import './globals.css';
import { Onest } from 'next/font/google';

const inter = Onest({ subsets: ['latin'] });

export const metadata = {
  title: 'Chitchat',
  description: 'Chat with an AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
