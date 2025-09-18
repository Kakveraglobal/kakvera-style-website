import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

type Currency = 'NGN' | 'USD' | 'CNY';

interface FeaturedCollectionsProps {
  currency: Currency;
}

const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ currency }) => {
  const getCurrencySymbol = (curr: Currency) => {
    switch (curr) {
      case 'NGN': return '₦';
      case 'CNY': return '¥';
      default: return '$';
    }
  };

  const convertPrice = (usdPrice: number, curr: Currency) => {
    switch (curr) {
      case 'NGN': return Math.round(usdPrice * 750);
      case 'CNY': return Math.round(usdPrice * 7.2);
      default: return usdPrice;
    }
  };

  const formatPrice = (price: number, curr: Currency) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const products = [
    {
      id: 1,
      name: 'Classic Gold Watch',
      category: 'Watches',
      price: 129,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-time-47856.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 124,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Diamond Stud Earrings',
      category: 'Jewelry',
      price: 89,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 89,
      badge: 'New Arrival'
    },
    {
      id: 3,
      name: 'Designer Leather Bag',
      category: 'Bags',
      price: 159,
      originalPrice: 250,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 203,
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Aviator Sunglasses',
      category: 'Sunglasses',
      price: 79,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 156,
      badge: 'On Sale'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites from our global collection - trending now worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                  product.badge === 'New Arrival' ? 'bg-green-100 text-green-800' :
                  product.badge === 'Best Seller' ? 'bg-purple-100 text-purple-800' :
                  product.badge === 'On Sale' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {product.badge}
                </span>

                {/* Quick actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 mb-2 hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 font-medium">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      {getCurrencySymbol(currency)}{formatPrice(convertPrice(product.price, currency), currency)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {getCurrencySymbol(currency)}{formatPrice(convertPrice(product.originalPrice, currency), currency)}
                    </span>
                  </div>
                  
                  <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-colors duration-300 transform hover:scale-105">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;