document.addEventListener('DOMContentLoaded', function() {
    // 遅延読み込み用の監視を設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, {
        rootMargin: '50px',
        threshold: 0.1
    });

    // 遅延読み込み対象の要素を監視
    document.querySelectorAll('.lazy-load').forEach(img => {
        observer.observe(img);
    });

    // スクロールアニメーション
    const scrollElements = document.querySelectorAll('.text-section, .product-item');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // 初期表示時にもアニメーションを実行
    handleScrollAnimation();

    // メインビジュアルの山の背景のシミュレーション
    const mainVisual = document.querySelector('.mainVisual');
    if (mainVisual) {
        // 山のような背景色をCSSで設定
        mainVisual.style.background = 'linear-gradient(to bottom, #90caf9 0%, #90caf9 60%, #f5f5f5 100%)';
        
        // 雲のアニメーションを追加
        const clouds = document.createElement('div');
        clouds.className = 'clouds';
        mainVisual.appendChild(clouds);
        
        // 複数の雲を生成
        for (let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            cloud.style.top = `${20 + Math.random() * 30}%`;
            cloud.style.left = `${Math.random() * 100}%`;
            cloud.style.animationDuration = `${60 + Math.random() * 40}s`;
            cloud.style.opacity = `${0.6 + Math.random() * 0.4}`;
            cloud.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
            clouds.appendChild(cloud);
        }
    }
}); 