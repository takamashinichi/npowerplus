import Navbar from './components/Navbar';
import Header from './components/Header';
import News from './components/News';
import SalesLetter from './components/SalesLetter';
import InfoSection from './components/InfoSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <News />
        <div className="container mx-auto px-4 py-12">
          <SalesLetter />
          
          <hr className="my-10 border-t border-gray-300" />
          
          <InfoSection />
          
          <hr className="my-10 border-t border-gray-300" />
          
          <ProductList />
        </div>
      </main>
      <Footer />
    </>
  );
} 