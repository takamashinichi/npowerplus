import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-6">
          <Link href="#" className="text-gray-600 hover:text-primary transition-colors">会社概要</Link>
          <Link href="#" className="text-gray-600 hover:text-primary transition-colors">プライバシーポリシー</Link>
          <Link href="#" className="text-gray-600 hover:text-primary transition-colors">お問い合わせ</Link>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 Nパワープラス® All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 