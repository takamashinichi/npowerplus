import Navbar from './components/Navbar';
import Header from './components/Header';
import News from './components/News';
import SalesLetter from './components/SalesLetter';
import InfoSection from './components/InfoSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Header />
      <main className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative">
          <News />
          <div className="container mx-auto px-4 py-4 md:py-16 space-y-4 md:space-y-16">
            <SalesLetter />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <InfoSection />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <ProductList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 