import React from 'react';
import { Package, Users, Palette, Truck, Shield, Clock } from 'lucide-react';

const Wholesale: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Bulk Buy Orders',
      description: 'Order in bulk and enjoy wholesale pricing on our entire product range. Minimum order quantities apply.',
      features: ['Wholesale pricing tiers', 'Volume discounts', 'Priority inventory access', 'Dedicated account manager']
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Private label our products with your brand. We handle packaging, labeling, and quality control.',
      features: ['Custom packaging design', 'Logo placement', 'Brand guideline compliance', 'Quality assurance']
    },
    {
      icon: Users,
      title: 'Design & Manufacture',
      description: 'Have a unique product idea? We can help bring it to life with our manufacturing partners.',
      features: ['Product development', 'Prototype creation', 'Manufacturing coordination', 'Quality control']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'All our suppliers are verified and quality-checked to ensure consistent product standards.'
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'We handle logistics worldwide with competitive shipping rates and tracking.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick processing times from order to delivery, keeping your business moving.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-8 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Partner with Kakvera Style</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
            Unlock wholesale pricing, custom branding opportunities, and comprehensive design & 
            manufacturing services for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Wholesale Pricing
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for businesses looking to scale their fashion and accessories offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the infrastructure, quality assurance, and global reach you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wholesale Pricing Tiers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The more you order, the more you save. Our tiered pricing structure rewards volume purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small retailers</p>
                <div className="text-4xl font-bold text-purple-600 mb-6">10-15%</div>
                <p className="text-sm text-gray-500 mb-8">Discount off retail prices</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Minimum order: $500
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Standard shipping rates
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Basic product catalog
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Email support
                </li>
              </ul>
              
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full font-semibold transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-purple-600 text-white rounded-2xl p-8 transform scale-105 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="opacity-90 mb-6">Ideal for growing businesses</p>
                <div className="text-4xl font-bold mb-6">20-25%</div>
                <p className="text-sm opacity-75 mb-8">Discount off retail prices</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Minimum order: $2,000
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Reduced shipping rates
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Extended product catalog
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Priority support
                </li>
              </ul>
              
              <button className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 rounded-full font-semibold transition-colors">
                Start Growing
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large-scale operations</p>
                <div className="text-4xl font-bold text-purple-600 mb-6">30%+</div>
                <p className="text-sm text-gray-500 mb-8">Custom discount rates</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Minimum order: $10,000
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Free/discounted shipping
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Full product catalog
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Dedicated account manager
                </li>
              </ul>
              
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our trade team will get back to you within 24 hours with a custom quote.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Select service</option>
                    <option value="bulk">Bulk Buy Orders</option>
                    <option value="custom">Custom Branding</option>
                    <option value="manufacturing">Design & Manufacturing</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Order Value
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Select range</option>
                    <option value="500-2000">$500 - $2,000</option>
                    <option value="2000-10000">$2,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Please describe your project requirements, target quantities, timeline, and any specific product categories you're interested in..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Trade Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;