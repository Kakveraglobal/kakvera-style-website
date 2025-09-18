import React from 'react';
import { Globe, Users, Award, Truck, Shield, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '5000+', label: 'Products Sold', icon: Award },
    { number: '99.9%', label: 'Customer Satisfaction', icon: Star }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest pricing, clear communication, and building lasting relationships with our customers.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Making premium fashion accessible worldwide through our Nigeria-China sourcing pipeline.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes strict quality control to ensure you receive only the best.'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'From order to delivery, we ensure a smooth and reliable shopping experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-8 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Kakvera Style</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Your trusted partner in affordable luxury fashion, connecting global style with local service 
            through our innovative Nigeria-China sourcing pipeline.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Kakvera Style was born from a simple vision: to make premium fashion accessible to everyone, 
                  regardless of their location or budget. As part of Kakvera Global Services, we recognized 
                  the gap between high-quality fashion products and affordable pricing in the global market.
                </p>
                <p>
                  Our unique Nigeria-China sourcing pipeline allows us to connect directly with verified 
                  suppliers and manufacturers, cutting out unnecessary middlemen and bringing you authentic, 
                  quality products at unbeatable prices.
                </p>
                <p>
                  Today, we serve customers across Nigeria, Africa, and beyond, offering everything from 
                  luxury watches and jewelry to stylish bags and accessories. Our commitment to quality, 
                  affordability, and customer satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These numbers represent the trust our customers place in us every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize access to premium fashion and lifestyle products by leveraging our global 
                sourcing network, ensuring every customer can express their unique style without breaking the bank. 
                We're committed to building bridges between cultures, suppliers, and customers worldwide.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading platform for affordable luxury fashion globally, recognized for our 
                commitment to quality, transparency, and customer satisfaction. We envision a world where 
                geographic and economic barriers don't limit access to premium fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Behind every great product and service is a dedicated team of professionals who share our 
            passion for fashion, quality, and customer satisfaction.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={`https://images.pexels.com/photos/432059${i}/pexels-photo-432059${i}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt="Team member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Team Member {i}</h4>
                <p className="text-purple-600 font-medium mb-3">Department Head</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to bringing you the best in fashion and customer service.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;