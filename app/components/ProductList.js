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
      image: '/images/items/n-power_12set.avif'
    },
    {
      id: 2,
      name: '植物用肥料　Nパワープラス®（250ml）１本＋スプレー（350ml）１個',
      price: '¥6,600',
      image: '/images/items/n-power_ spray.avif'
    },
    {
      id: 3,
      name: '植物用肥料　Nパワープラス®（250ml）３本',
      price: '¥16,500',
      image: '/images/items/n-power_3set.avif'
    },
    {
      id: 4,
      name: '植物用肥料　Nパワープラス®（250ml）１本',
      price: '¥5,500',
      image: '/images/items/n-power_1set.avif'
    }
  ];
  
  return (
    <section className="my-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
      <h2 className="text-3xl font-bold text-center mb-4">ー　商品一覧　ー</h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        地域によって異なる微⽣物群がバランスをとりながら⽣息する中で、その⼟地の微⽣物群を扶養し活性化させることにより、微⽣物群の総合⼒で⼟壌が肥沃になります。その結果、作物の⽣育も良好になります。<br />
        Nパワープラス（NPOWER）®は微生物のエサ。⼭の腐葉⼟と同じような、⾃然に近い環境を畑に作ることが可能となるので、作物が本来の⽣命⼒を発揮しながら力強く育ちます。
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="h-[280px] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 h-[50px] overflow-hidden">
                {product.name}
              </h3>
              <p className="font-bold text-xl">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 