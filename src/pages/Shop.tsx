import React, { useState } from 'react';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';

type Currency = 'NGN' | 'USD' | 'CNY';

interface ShopProps {
  currency: Currency;
}

const Shop: React.FC<ShopProps> = ({ currency }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

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

  const categories = ['All', 'Watches', 'Jewelry', 'Bags', 'Sunglasses', 'Accessories'];

  const products = [
    {
      id: 1,
      name: 'Classic Gold Watch',
      category: 'Watches',
      price: 129,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-time-47856.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: 2,
      name: 'Diamond Stud Earrings',
      category: 'Jewelry',
      price: 89,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviews: 89,
      inStock: true
    },
    {
      id: 3,
      name: 'Designer Leather Bag',
      category: 'Bags',
      price: 159,
      originalPrice: 250,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 203,
      inStock: true
    },
    {
      id: 4,
      name: 'Aviator Sunglasses',
      category: 'Sunglasses',
      price: 79,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviews: 156,
      inStock: false
    },
    {
      id: 5,
      name: 'Silver Chain Necklace',
      category: 'Jewelry',
      price: 45,
      originalPrice: 75,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.5,
      reviews: 67,
      inStock: true
    },
    {
      id: 6,
      name: 'Sport Watch',
      category: 'Watches',
      price: 199,
      originalPrice: 299,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviews: 189,
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-lg text-gray-600">
            Discover our complete collection of premium fashion and lifestyle accessories.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                  }`}
                />
                
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 mb-2 hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div>
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
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      {getCurrencySymbol(currency)}{formatPrice(convertPrice(product.price, currency), currency)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {getCurrencySymbol(currency)}{formatPrice(convertPrice(product.originalPrice, currency), currency)}
                    </span>
                  </div>
                  
                  <button 
                    disabled={!product.inStock}
                    className={`rounded-full p-2 transition-all duration-300 transform hover:scale-105 ${
                      product.inStock 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;