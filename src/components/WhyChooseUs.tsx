import React from 'react';
import { Shield, Globe, Truck, Star, Clock, DollarSign } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Direct Nigeria ↔ China pipeline ensuring authentic, quality products from verified suppliers worldwide.',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Affordable Luxury',
      description: 'Premium fashion at unbeatable prices. Quality meets affordability in every piece we curate.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Buyer Protection',
      description: 'Secure payments, verified suppliers, and comprehensive buyer protection for peace of mind.',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      title: 'Quality Checked',
      description: 'Every product undergoes rigorous quality control to meet our high standards before reaching you.',
      color: 'text-yellow-600'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Express delivery to Nigeria, Africa, and worldwide. Track your order from our warehouse to your door.',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via WhatsApp, email, and phone. We\'re here when you need us.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Kakvera Style?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're more than just a fashion retailer. We're your trusted partner in global style, 
            offering unparalleled service and quality that sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${feature.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}>
                  <IconComponent className={`h-7 w-7 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Partner with Kakvera Style</h3>
          <p className="text-xl mb-8 opacity-90">
            Ready for bulk orders or custom branding? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Bulk Buy & Custom Orders
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Trade Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;