import React from 'react';
import { User, BookOpen, Newspaper, Play, Image, MessageSquare, Users, FileText, Send } from 'lucide-react';

const sections = [
  {
    id: 'about',
    label: 'About Lucky Puchhrat',
    icon: User,
    desc: 'Discover Lucky\'s journey, expertise, and vision for leadership.'
  },
  {
    id: 'training',
    label: 'Training Programs',
    icon: BookOpen,
    desc: 'Explore our transformative training programs for teams and leaders.'
  },
  {
    id: 'news',
    label: 'In the News',
    icon: Newspaper,
    desc: 'See how Lucky is making headlines and impacting the industry.'
  },
  {
    id: 'youtube',
    label: 'YouTube Videos',
    icon: Play,
    desc: 'Watch inspiring talks and practical tips on our YouTube channel.'
  },
  {
    id: 'gallery',
    label: 'Gallery',
    icon: Image,
    desc: 'Browse moments from events, workshops, and keynotes.'
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    icon: MessageSquare,
    desc: 'Hear from those who have experienced transformation.'
  },
  {
    id: 'clients',
    label: 'Our Clients',
    icon: Users,
    desc: 'See the organizations and leaders we\'ve partnered with.'
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Send,
    desc: 'Ready to connect? Reach out for bookings or questions.'
  },
];

const HeroSection: React.FC<{ setActiveSection?: (id: string) => void }> = ({ setActiveSection }) => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-blue-100/60 via-white/80 to-blue-200/60 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80">
      {/* Blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 dark:bg-yellow-400/20 rounded-full filter blur-3xl animate-float z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/30 dark:bg-blue-400/20 rounded-full filter blur-3xl animate-float2 z-0" />
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg animate-fadeInUp">
          Welcome to <span className="text-blue-600 dark:text-yellow-300">Lucky Puchhrat</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 animate-fadeInUp delay-100">
          Transforming organizations and lives through leadership, communication, and inspiration.
        </p>
        <button
          className="px-8 py-4 rounded-xl font-bold bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-300 transition-colors text-lg animate-fadeInUp delay-200"
          onClick={() => setActiveSection && setActiveSection('contact')}
        >
          Get in Touch
        </button>
      </div>
      {/* Animated cards for each section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6 py-12 animate-fadeInUp delay-300">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => setActiveSection && setActiveSection(section.id)}
            className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group focus:outline-none"
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            <span className="mb-4 rounded-full bg-blue-100 dark:bg-yellow-300/20 p-4 shadow group-hover:bg-blue-200 dark:group-hover:bg-yellow-400/40 transition-colors">
              <section.icon size={36} className="text-blue-600 dark:text-yellow-300" />
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              {section.label}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-center text-base">
              {section.desc}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;