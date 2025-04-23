'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function InfoSection() {
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
  
  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-primary">Nパワープラスは微生物群のバランス栄養剤</h3>
          <p className="text-gray-700 leading-relaxed">《安全性》Nパワープラスは、すべて天然原料から作られています。
          土には、もともと多様で有用な微生物群がバランスを保ちながら生存しています。そこへ、外来の微生物を投入するとバランスが崩れ、在来の微生物群がバランスを崩し、その結果、土地を劣化させるという結論に至りました。 そこで発想を転換し、微生物群を増やすための栄養の研究開発に進み、20年以上かけて製品化したのがNパワープラスです。Nパワーの成分はすべて天然原料に由来し、安心安全です。微生物群が活性化し、飛躍的に増えることで、これまでの化学肥料と農薩で劣化してきた土が驚くほど改良できたのです。</p>
        </div>
        <div className="md:w-1/2 h-[300px] relative rounded-lg overflow-hidden">
          <Image
            src="/images/items/n-power.avif"
            alt="Nパワープラス® 製品画像"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="md:w-1/2 order-2 md:order-1 h-[300px] relative rounded-lg overflow-hidden">
          <Image
            src="/images/items/tenkeiriki.avif"
            alt="天恵力プラス 製品画像"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h3 className="text-2xl font-bold mb-4 text-primary">酪農改良資材・動物用飼料 天恵力プラス</h3>
          <p className="text-gray-700 leading-relaxed">飼料の分解吸収率が2倍になるなど、劇的な腸内環境の改善ができ糞尿の削減、コスト削減ができます。天恵力は家畜の腸内環境を改善し、栄養吸収率を向上させることで飼料コストを削減します。乳量・乳質・肉質の向上、良質なたい肥生産、悪臭・害虫減少など多岐にわたる効果が期待できます。また、天恵力使用のたい肥は短期間で土壌改良を可能にし、農業の常識を覆します。</p>
        </div>
      </div>
    </section>
  );
} 