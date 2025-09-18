import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We're here to help! Reach out to us with any questions, concerns, or feedback. 
            Our luxury concierge team is ready to assist you with your fashion needs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-1">info@luxevibe.com</p>
                    <p className="text-gray-600">vip@luxevibe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">New York, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-500">EST (Eastern Standard Time)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Shipping & Delivery</h4>
                  <p className="text-sm text-gray-600">Learn about our shipping timelines and policies</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Returns & Exchanges</h4>
                  <p className="text-sm text-gray-600">Easy returns within 30 days</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Payment Options</h4>
                  <p className="text-sm text-gray-600">Multiple payment methods accepted</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Wholesale Inquiries</h4>
                  <p className="text-sm text-gray-600">Bulk orders and custom branding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors">
                    <option value="">Select inquiry type</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="wholesale">Wholesale/Bulk Orders</option>
                    <option value="custom">Custom Branding</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 text-purple-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    I would like to receive updates about new products, promotions, and company news.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;