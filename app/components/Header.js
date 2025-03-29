'use client';

import { useEffect, useRef } from 'react';

export default function Header() {
  const cloudsRef = useRef(null);
  
  useEffect(() => {
    const cloudsContainer = cloudsRef.current;
    
    if (cloudsContainer) {
      // 雲の生成
      for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud absolute bg-white/80 rounded-[50px] h-[60px]';
        cloud.style.width = '200px';
        cloud.style.top = `${20 + Math.random() * 30}%`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.animationDuration = `${60 + Math.random() * 40}s`;
        cloud.style.opacity = `${0.6 + Math.random() * 0.4}`;
        cloud.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
        
        // 雲の形を作る
        const before = document.createElement('div');
        before.className = 'absolute bg-white/80 rounded-full w-[100px] h-[100px] -top-[50px] left-[25px]';
        
        const after = document.createElement('div');
        after.className = 'absolute bg-white/80 rounded-full w-[80px] h-[80px] -top-[35px] right-[25px]';
        
        cloud.appendChild(before);
        cloud.appendChild(after);
        cloudsContainer.appendChild(cloud);
      }
    }
  }, []);
  
  return (
    <header className="relative pt-16">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-48 md:w-52 md:h-52">
        <div className="w-full h-full bg-primary rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden">
          <div className="flex items-center justify-center h-[70%] w-full">
            <span className="text-5xl mb-2">🌱</span>
          </div>
          <div className="bg-secondary w-full h-[30%] flex flex-col items-center justify-center">
            <span className="font-bold text-2xl leading-tight text-center">Nパワー</span>
            <span className="font-bold text-2xl leading-tight text-center">プラス</span>
          </div>
        </div>
      </div>
      
      <div className="h-[60vh] md:h-[70vh] bg-blue-200 relative flex items-center justify-center overflow-hidden">
        <div id="clouds" ref={cloudsRef} className="absolute inset-0 z-0"></div>
      </div>
    </header>
  );
} 