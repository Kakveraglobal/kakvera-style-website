import React, { useState } from 'react';
import { ShoppingBag, User, Search, Menu, X, Globe } from 'lucide-react';

type Page = 'home' | 'shop' | 'about' | 'contact' | 'wholesale';
type Currency = 'NGN' | 'USD' | 'CNY';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, currency, onCurrencyChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' }
  ];

  const currentCurrencyData = currencies.find(c => c.code === currency) || currencies[0];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-purple-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span>Free shipping on orders over $50 worldwide | WhatsApp: +234 XXX XXX XXXX</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
            >
              Kakvera Style
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`font-medium transition-colors ${
                currentPage === 'shop' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => onNavigate('wholesale')}
              className={`font-medium transition-colors ${
                currentPage === 'wholesale' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Wholesale
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`font-medium transition-colors ${
                currentPage === 'about' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`font-medium transition-colors ${
                currentPage === 'contact' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{currency}</span>
              </button>
              
              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-10">
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        onCurrencyChange(curr.code as Currency);
                        setCurrencyDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {curr.symbol} {curr.code} - {curr.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Search className="h-5 w-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-600"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium transition-colors ${
                  currentPage === 'home' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('shop');
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium transition-colors ${
                  currentPage === 'shop' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => {
                  onNavigate('wholesale');
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium transition-colors ${
                  currentPage === 'wholesale' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Wholesale
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium transition-colors ${
                  currentPage === 'about' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;