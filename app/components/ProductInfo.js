'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductInfo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/visual/image_6.jpg',
    '/images/visual/image_8.jpg',
    '/images/visual/image_11.jpg',
    '/images/visual/image_24.jpg',
    '/images/visual/image_28.jpg',
    '/images/visual/image_56.jpg'
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* 注意書きセクション */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ご利用上の注意</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-bold text-lg mb-2">＜類似商品・模倣品にご注意ください＞</h3>
                  <p className="mb-2">
                    最近、YouTubeやネットショップを中心に、Nパワープラス®（NPOWER）、天恵力プラス®の類似品・模倣品が流通していることが確認されております。Nパワープラス®（NPOWER）、天恵力プラス®はこれら類似品・模倣品は弊社商品と形状・仕様などにおいて似ているものの、弊社が肥料販売業許可・卸責任を持った商品ではございません。
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">＜飲用商品ではございません＞</h3>
                  <p className="mb-2">
                    Nパワープラス®（NPOWER）、天恵力プラス®は肥料・土壌改良材であり、飲用した人の健康へ効果効能は一切ありません。Nパワープラス®・天恵力プラス®を飲用された場合の効果・効能、健康被害に関して、当社では一切の責任を負いかねます。
                  </p>
                </div>

                <p>
                  誤って類似品・模倣品をご購入されることのないよう、お買い求めの際は、弊社、弊社正規販売店からご購入いただきますようお願い申し上げます。
                </p>
              </div>
            </div>
          </div>

          {/* FAQとサポートボタン */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link href="/faq" className="block w-1/2 hover:opacity-80 transition-opacity">
              <Image
                src="/images/visual/faq-button.avif"
                alt="FAQ"
                width={800}
                height={200}
                className="w-full h-auto"
              />
            </Link>
            <Link href="/support" className="block w-1/2 hover:opacity-80 transition-opacity">
              <Image
                src="/images/visual/support-button.avif"
                alt="サポート"
                width={800}
                height={200}
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* 区切り線 */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12"></div>
          
          {/* 画像ギャラリー */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`商品画像 ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* ナビゲーションボタン */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="前の画像"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="次の画像"
              >
                →
              </button>

              {/* サムネイル */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`画像 ${index + 1} に移動`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 