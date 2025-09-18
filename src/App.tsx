import React, { useState } from 'react';
import { ShoppingBag, User, Search, Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedCollections from './components/FeaturedCollections';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Wholesale from './pages/Wholesale';

type Page = 'home' | 'shop' | 'about' | 'contact' | 'wholesale';
type Currency = 'NGN' | 'USD' | 'CNY';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currency, setCurrency] = useState<Currency>('USD');

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop currency={currency} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'wholesale':
        return <Wholesale />;
      default:
        return (
          <div>
            <Hero onNavigate={setCurrentPage} />
            <FeaturedCategories onNavigate={setCurrentPage} />
            <FeaturedCollections currency={currency} />
            <WhyChooseUs />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        currency={currency}
        onCurrencyChange={setCurrency}
      />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;