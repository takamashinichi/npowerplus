'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const cloudsRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const backgroundImages = [
    '/images/visual/image_4.jpg',
    '/images/visual/image_13.jpg',
    '/images/visual/image_51.jpg',
    '/images/visual/image_73.jpg'
  ];
  
  useEffect(() => {
    const cloudsContainer = cloudsRef.current;
    
    /*
    if (cloudsContainer) {
      // 雲の生成
      for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud absolute bg-white/90 rounded-[50px] h-[60px] shadow-lg';
        cloud.style.width = '200px';
        cloud.style.top = `${20 + Math.random() * 30}%`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.animationDuration = `${60 + Math.random() * 40}s`;
        cloud.style.opacity = `${0.7 + Math.random() * 0.3}`;
        cloud.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
        
        // 雲の形を作る
        const before = document.createElement('div');
        before.className = 'absolute bg-white/90 rounded-full w-[100px] h-[100px] -top-[50px] left-[25px] shadow-lg';
        
        const after = document.createElement('div');
        after.className = 'absolute bg-white/90 rounded-full w-[80px] h-[80px] -top-[35px] right-[25px] shadow-lg';
        
        cloud.appendChild(before);
        cloud.appendChild(after);
        cloudsContainer.appendChild(cloud);
      }
    }*/
      let current = currentImageIndex;

      const startTransition = () => {
        const next = (current + 1) % backgroundImages.length;
        setIsTransitioning(true);
        setNextImageIndex(next);
    
        setTimeout(() => {
          setCurrentImageIndex(next);
          setIsTransitioning(false);
          current = next; // ←次のループで使うために更新！
        }, 1000);
      };
    
      const interval = setInterval(startTransition, 5000);
    
      return () => clearInterval(interval);
    }, [backgroundImages.length]);

  return (
    <header className="relative">
      <div className="h-[40vh] md:h-[70vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="現在の背景画像"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={backgroundImages[nextImageIndex]}
              alt="次の背景画像"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div id="clouds" ref={cloudsRef} className="absolute inset-0 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
        </div>
        <div className="relative z-10 w-48 h-48 md:w-52 md:h-52 flex items-center justify-center mt-16">
          <Image
            src="/images/n-power-plus.png"
            alt="Nパワープラス"
            fill
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
} 