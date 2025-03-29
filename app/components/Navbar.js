'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="font-bold hover:text-primary transition-colors">HOME</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors">会社概要</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors">商品一覧</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors">お知らせ</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors">カテゴリー</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors">質問集</Link>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-dark focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
          
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="font-bold hover:text-primary transition-colors">HOME</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors">会社概要</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors">商品一覧</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors">お知らせ</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors">カテゴリー</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors">質問集</Link>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="#" className="bg-dark text-white px-4 py-2 rounded font-bold hover:bg-opacity-80 transition-colors">
            LOGIN
          </Link>
          <Link href="#" className="bg-dark text-white w-10 h-10 flex items-center justify-center rounded">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </nav>
  );
} 