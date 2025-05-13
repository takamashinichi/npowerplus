'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductList() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.animate-fadeIn').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  const products = [
    {
      id: 1,
      name: '植物用肥料　Nパワープラス®（250ml）12本',
      price: '¥66,000',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/n-power_12set.avif'
    },
    {
      id: 2,
      name: '植物用肥料　Nパワープラス®（250ml）１本＋スプレー（350ml）１個',
      price: '¥6,600',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/n-power_ spray.avif'
    },
    {
      id: 3,
      name: '植物用肥料　Nパワープラス®（250ml）３本',
      price: '¥16,500',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/n-power_3set.avif'
    },
    {
      id: 4,
      name: '植物用肥料　Nパワープラス®（250ml）１本',
      price: '¥5,500',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/n-power_1set.avif'
    },
    {
      id: 5,
      name: '植物用肥料　Nパワープラス®（1L）１本',
      price: '¥16,500',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/n-power_1l.avif'
    },
    {
      id: 6,
      name: '植物用肥料　Nパワープラス®（1L × 6本入り）１箱',
      price: '¥99,000',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/n-power_1l-6.avif'
    },
    {
      id: 7,
      name: '動物用飼料　天恵力プラス®（10L × 1本入り）１箱',
      price: '¥88,000',
      image: 'https://n-powerplus.s3.ap-northeast-1.amazonaws.com/images/items/tenkeiriki_10l.avif'
    }
  ];
  
  return (
    <section className="my-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
      <h2 className="text-3xl font-bold text-center mb-4">ー　商品一覧　ー</h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        地域によって異なる微⽣物群がバランスをとりながら⽣息する中で、その⼟地の微⽣物群を扶養し活性化させることにより、微⽣物群の総合⼒で⼟壌が肥沃になります。その結果、作物の⽣育も良好になります。<br />
        Nパワープラス（NPOWER）®は微生物のエサ。⼭の腐葉⼟と同じような、⾃然に近い環境を畑に作ることが可能となるので、作物が本来の⽣命⼒を発揮しながら力強く育ちます。
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {products.map(product => (
          <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col">
            <div className="h-[200px] sm:h-[240px] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0 flex-grow flex flex-col">
              <h3 className="text-[0.9rem] sm:text-[1.1rem] font-semibold mb-2 min-h-[40px] sm:min-h-[48px] line-clamp-2">
                {product.name}
              </h3>
              <p className="font-bold text-lg sm:text-xl mt-auto">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 