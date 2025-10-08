import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'contact' | 'wholesale') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay in Style</h3>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for exclusive deals, new arrivals, and style inspiration.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-2xl font-bold text-purple-400 mb-6">Kakvera Style</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for affordable luxury fashion and lifestyle accessories. 
                Global sourcing, local service.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('shop')} className="text-gray-400 hover:text-white transition-colors">
                    Shop
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('wholesale')} className="text-gray-400 hover:text-white transition-colors">
                    Wholesale
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h5 className="text-lg font-semibold mb-6">Categories</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Watches</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Jewelry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bags</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sunglasses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-lg font-semibold mb-6">Contact Us</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">hello@kakverastyle.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">support@kakverastyle.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">+234 816 277 7605</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Kakvera Style. Part of Kakvera Global Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
