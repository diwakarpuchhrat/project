import React, { useState } from 'react';
import { Menu, X, User, BookOpen, Newspaper, Play, Image, MessageSquare, Users, FileText, Home, Send } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Start here', icon: Home },
    { id: 'lpacs', label: 'LPACS', icon: BookOpen },
    { id: 'about', label: 'About Lucky Puchhrat', icon: User },
    { id: 'training', label: 'Training Programs', icon: BookOpen },
    { id: 'news', label: 'In the News', icon: Newspaper },
    { id: 'youtube', label: 'YouTube Videos', icon: Play },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'clients', label: 'Our Clients', icon: Users },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const handleMenuClick = (item: any) => {
    setActiveSection(item.id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-80 flex flex-col backdrop-blur-md`}
        style={{ background: 'linear-gradient(135deg, rgba(219,234,254,0.6) 0%, rgba(255,255,255,0.8) 50%, rgba(191,219,254,0.6) 100%)' }}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <h1 className="text-2xl font-bold text-blue-900 dark:text-yellow-300">Lucky Puchhrat</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Founder, Mavericks India Solutions</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-800 ${
                    activeSection === item.id ? 'bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-yellow-300 font-medium' : 'text-gray-700 dark:text-gray-200'
                  } ${item.id === 'home' ? 'border-l-4 border-yellow-400' : ''}`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;