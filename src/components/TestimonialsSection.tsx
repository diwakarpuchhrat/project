import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Lucky's keynote transformed our leadership approach. The practical strategies and engaging delivery made it one of our most impactful corporate events.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "VP Sales, GlobalTech",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The sales training program exceeded all expectations. Our team's performance improved by 35% within just three months of implementation.",
      rating: 5
    },
    {
      name: "Amanda Rodriguez",
      position: "HR Director, InnovateInc",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Exceptional speaker who knows how to connect with diverse audiences. Lucky's leadership insights are both practical and transformative.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from organizations that have experienced transformation through 
            our speaking engagements and training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-blue-600 dark:text-yellow-300 mb-4" size={32} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Our Satisfied Clients</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Ready to transform your organization?</p>
          <button className="bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-yellow-300 transition-colors transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;