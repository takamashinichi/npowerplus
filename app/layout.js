import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nパワープラス® 公式通販サイト',
  description: 'Nパワープラス®の公式通販サイト。土壌微生物のバランス栄養剤で、安全で効果的な植物の成長をサポート。',
  keywords: 'Nパワープラス,土壌改良,微生物栄養剤,有機農業,自然農法',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 