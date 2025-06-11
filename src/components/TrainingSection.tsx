import React from 'react';
import { Users, Target, TrendingUp, Lightbulb, Clock, CheckCircle } from 'lucide-react';

const TrainingSection: React.FC = () => {
  const programs = [
    {
      icon: Users,
      title: "Leadership Excellence",
      duration: "2-Day Intensive",
      description: "Transform your leadership style with proven strategies for team motivation and organizational success.",
      features: ["Executive Presence", "Decision Making", "Team Building", "Change Management"],
      color: "blue"
    },
    {
      icon: Target,
      title: "Sales Mastery",
      duration: "3-Day Program",
      description: "Boost your sales performance with advanced techniques for client engagement and deal closure.",
      features: ["Consultative Selling", "Negotiation Skills", "Client Relations", "Revenue Growth"],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      duration: "1-Day Workshop",
      description: "Maximize individual and team performance through goal setting and productivity enhancement.",
      features: ["Goal Setting", "Time Management", "Productivity Hacks", "Performance Metrics"],
      color: "purple"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      duration: "Half-Day Session",
      description: "Foster creativity and innovation within your organization to stay ahead of the competition.",
      features: ["Creative Thinking", "Problem Solving", "Innovation Framework", "Change Adaptation"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
      purple: "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100",
      orange: "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Training Programs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive training solutions designed to elevate your team's performance 
            and drive sustainable organizational growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp border-2 ${getColorClasses(program.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <program.icon className={`mr-4 ${program.color === 'blue' ? 'text-blue-600 dark:text-yellow-300' : program.color === 'green' ? 'text-green-600 dark:text-green-300' : program.color === 'purple' ? 'text-purple-600 dark:text-purple-300' : 'text-orange-600 dark:text-orange-300'}`} size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="text-green-500 dark:text-green-300 mr-3" size={16} />
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-yellow-300 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 dark:bg-yellow-400 rounded-2xl p-8 lg:p-12 text-center text-white dark:text-gray-900">
          <h3 className="text-3xl font-bold mb-4">Custom Training Solutions</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Need something specific? We create tailored training programs that address 
            your unique organizational challenges and goals.
          </p>
          <button className="bg-white dark:bg-gray-900 text-blue-600 dark:text-yellow-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors transform hover:scale-105">
            Discuss Custom Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;