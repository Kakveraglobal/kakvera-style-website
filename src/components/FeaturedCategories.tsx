import React from 'react';
import { Watch, Gem, ShoppingBag, Glasses, Wallet } from 'lucide-react';

interface FeaturedCategoriesProps {
  onNavigate: (page: 'shop') => void;
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onNavigate }) => {
  const categories = [
    {
      name: 'Watches',
      icon: Watch,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Luxury timepieces for every occasion'
    },
    {
      name: 'Jewelry',
      icon: Gem,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegant pieces that make statements'
    },
    {
      name: 'Bags',
      icon: ShoppingBag,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Stylish bags for work and play'
    },
    {
      name: 'Sunglasses',
      icon: Glasses,
      image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Designer eyewear collection'
    },
    {
      name: 'Accessories',
      icon: Wallet,
      image: 'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete your perfect look'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections of premium fashion accessories and lifestyle products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => onNavigate('shop')}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;