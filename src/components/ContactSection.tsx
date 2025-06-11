import React from 'react';
import { Mail, Phone, MapPin, Calendar, MessageSquare, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Create Impact Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your organization? Get in touch to discuss your 
            speaking engagement or training needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center text-blue-100">
                <Mail className="mr-4 text-blue-300" size={24} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>puchhratlucky@yahoo.com</div>
                </div>
              </div>
              
              <div className="flex items-center text-blue-100">
                <Phone className="mr-4 text-blue-300" size={24} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>(+91) 9810664684</div>
                </div>
              </div>
              
              <div className="flex items-center text-blue-100">
                <MapPin className="mr-4 text-blue-300" size={24} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div>Available Pan India</div>
                </div>
              </div>
              
              <div className="flex items-center text-blue-100">
                <Calendar className="mr-4 text-blue-300" size={24} />
                <div>
                  <div className="font-semibold">Availability</div>
                  <div>Available</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Speaking Topics</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-blue-200 text-sm">• Leadership Excellence</div>
                <div className="text-blue-200 text-sm">• Team Building</div>
                <div className="text-blue-200 text-sm">• Sales Performance</div>
                <div className="text-blue-200 text-sm">• Change Management</div>
                <div className="text-blue-200 text-sm">• Innovation Mindset</div>
                <div className="text-blue-200 text-sm">• Corporate Culture</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl animate-fadeInRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option>Keynote Speaking</option>
                  <option>Training Workshop</option>
                  <option>Corporate Event</option>
                  <option>Conference</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your event and requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center transform hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;