'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-bold hover:text-primary transition-colors duration-300">HOME</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">会社概要</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">商品一覧</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">お知らせ</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">カテゴリー</Link>
          <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">質問集</Link>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-dark focus:outline-none hover:text-primary transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
          
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="font-bold hover:text-primary transition-colors duration-300">HOME</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">会社概要</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">商品一覧</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">お知らせ</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">カテゴリー</Link>
                <Link href="#" className="font-bold hover:text-primary transition-colors duration-300">質問集</Link>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <Link href="#" className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </nav>
  );
} 