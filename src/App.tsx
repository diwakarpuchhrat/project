import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TrainingSection from './components/TrainingSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import { ExternalLink, Play, X, Moon, Sun } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null);
  const [selectedNewsImage, setSelectedNewsImage] = useState<null | { image: string; title: string; subtext: string }>(null);
  const clientImages = [
    {
      image: '/public/our-clients/Slide1.JPG',
      title: 'Client 1',
      subtext: 'A leading multinational corporation that partnered for leadership transformation.'
    },
    {
      image: '/public/our-clients/Slide1 (1).JPG',
      title: 'Client 2',
      subtext: 'A renowned educational institution recognized for academic excellence.'
    },
    {
      image: '/public/our-clients/Slide1 (2).JPG',
      title: 'Client 3',
      subtext: 'A fast-growing tech startup that scaled with our training solutions.'
    },
    {
      image: '/public/our-clients/Slide1 (3).JPG',
      title: 'Client 4',
      subtext: 'A government agency that improved communication and teamwork.'
    },
    {
      image: '/public/our-clients/Slide1 (4).JPG',
      title: 'Client 5',
      subtext: 'A healthcare provider that enhanced patient care through leadership.'
    },
    {
      image: '/public/our-clients/Slide1 (5).JPG',
      title: 'Client 6',
      subtext: 'A financial services firm that achieved record growth.'
    },
    {
      image: '/public/our-clients/Slide1 (6).JPG',
      title: 'Client 7',
      subtext: 'A manufacturing company that optimized operations with our programs.'
    },
    {
      image: '/public/our-clients/Slide1 (7).JPG',
      title: 'Client 8',
      subtext: 'A non-profit organization that expanded its social impact.'
    },
    {
      image: '/public/our-clients/Slide1 (8).JPG',
      title: 'Client 9',
      subtext: 'A logistics company that improved efficiency and morale.'
    },
    {
      image: '/public/our-clients/Slide1 (9).JPG',
      title: 'Client 10',
      subtext: 'A retail chain that boosted customer satisfaction.'
    },
    {
      image: '/public/our-clients/Slide1 (10).JPG',
      title: 'Client 11',
      subtext: 'A consulting firm that delivered better results for its clients.'
    },
    {
      image: '/public/our-clients/Slide1 (11).JPG',
      title: 'Client 12',
      subtext: 'A public sector unit that fostered innovation and leadership.'
    },
  ];
  const [selectedClient, setSelectedClient] = useState<null | { image: string; title: string; subtext: string }>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Add dark mode class to html element
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Move newsImages array to the top-level of App so it can be used in the switch without a block
  const newsImages = [
    {
      image: '/public/in-the-news/Slide2.JPG',
      title: 'Workshop on Interpersonal Skills',
      subtext: 'Lucky Puchhrat was featured in a leading industry magazine for his innovative approach to leadership and communication.'
    },
    {
      image: '/public/in-the-news/Slide3.JPG',
      title: 'Teacher\'s Bootcamp spurs excellence',
      subtext: 'Awarded for outstanding leadership training and motivational speaking at a national conference.'
    },
    {
      image: '/public/in-the-news/Slide4.JPG',
      title: 'Meet organised on protecting children from sexual offences',
      subtext: 'Keynote address at the Corporate Leadership Summit, inspiring professionals to achieve excellence.'
    },
    {
      image: '/public/in-the-news/Slide5.JPG',
      title: 'Masterclass Series for Personality Development',
      subtext: 'Presented breakthrough strategies for business growth at the Global Business Conference.'
    },
    {
      image: '/public/in-the-news/Slide7.JPG',
      title: 'Learning the art of putting forth a perspective',
      subtext: 'Panelist at the Innovation & Strategy Summit, sharing insights on future-ready organizations.'
    }
  ];

  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        />
        
        {/* Modal Content */}
        <div className="relative z-50 max-w-4xl w-full mx-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NewsImageModal = () => {
    if (!selectedNewsImage) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedNewsImage(null)} />
        <div className="relative z-50 max-w-2xl w-full mx-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedNewsImage.image}
                alt={selectedNewsImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedNewsImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedNewsImage.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{selectedNewsImage.subtext}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ClientModal = () => {
    if (!selectedClient) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedClient(null)} />
        <div className="relative z-50 max-w-2xl w-full mx-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedClient.image}
                alt={selectedClient.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedClient.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{selectedClient.subtext}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HeroSection setActiveSection={setActiveSection} />
        );
      case 'about':
        return <AboutSection />;
      case 'training':
        return <TrainingSection />;
      case 'testimonials':
        return <TestimonialsSection />;
      case 'gallery':
        return <GallerySection />;
      case 'lpacs':
        return (
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Lucky Puchhrat Academy of Communication Skills</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
                  Empowering individuals with exceptional communication skills through comprehensive training and personalized development programs.
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      To transform individuals into confident and effective communicators who can excel in any professional or personal setting. We believe that strong communication skills are the foundation of success in today's interconnected world.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span>Develop clear and impactful communication</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span>Build confidence in public speaking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span>Enhance interpersonal skills</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      To be the leading academy for communication skills development, recognized for producing exceptional communicators who make a positive impact in their communities and organizations.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span>Create a global network of skilled communicators</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span>Foster innovation in communication training</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span>Promote excellence in professional communication</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div 
                    className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage({
                      src: "/public/lpac-photos/Screenshot 2025-06-12 004352.png",
                      title: "Professional Communication",
                      description: "Master the art of effective business communication with our comprehensive training program. Learn to express your ideas clearly, engage your audience, and achieve your communication goals."
                    })}
                  >
                    <img
                      src="/public/lpac-photos/Screenshot 2025-06-12 004352.png"
                      alt="Communication Training"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">Professional Communication</h3>
                        <p className="text-white/90 text-sm mt-1">Master the art of effective business communication</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage({
                      src: "/public/lpac-photos/Screenshot 2025-06-12 004425.png",
                      title: "Public Speaking",
                      description: "Develop confidence and expertise in public speaking. Our program helps you overcome stage fright, structure compelling presentations, and deliver impactful speeches that resonate with your audience."
                    })}
                  >
                    <img
                      src="/public/lpac-photos/Screenshot 2025-06-12 004425.png"
                      alt="Public Speaking"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">Public Speaking</h3>
                        <p className="text-white/90 text-sm mt-1">Develop confidence in addressing any audience</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage({
                      src: "/public/lpac-photos/Screenshot 2025-06-12 004450.png",
                      title: "Interpersonal Skills",
                      description: "Enhance your ability to connect with others through effective interpersonal communication. Learn to build strong relationships, resolve conflicts, and create positive interactions in both personal and professional settings."
                    })}
                  >
                    <img
                      src="/public/lpac-photos/Screenshot 2025-06-12 004450.png"
                      alt="Interpersonal Skills"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">Interpersonal Skills</h3>
                        <p className="text-white/90 text-sm mt-1">Enhance your ability to connect with others</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Start Your Journey Today</h3>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Join our comprehensive communication skills program and transform your ability to connect, influence, and lead.
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            <ImageModal />
          </section>
        );
      case 'news':
        return (
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">In the News</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsImages.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedNewsImage(item)}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Lucky Puchhrat discusses the future of leadership in the digital age...</p>
                    </div>
                  </div>
                ))}
              </div>
              <NewsImageModal />
            </div>
          </section>
        );
      case 'youtube':
        // Real video data from screenshot, now with unique URLs
        const youtubeVideos = [
          {
            thumbnail: '/public/youtube-thumbnails/yt1.jpg',
            title: 'एक छोटा शब्द, बड़ी पर्सनैलिटी!',
            duration: '4:10',
            url: 'https://youtu.be/CmMCB_t2vkI?si=wkI7ACPe3sBIauOM',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt2.jpg',
            title: 'PS 54 2024 से सीखे गए सबक',
            duration: '20:00',
            url: 'https://www.youtube.com/watch?v=ygpwq_XdWkA',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt3.jpg',
            title: 'My Interaction with the students',
            duration: '4:30',
            url: 'https://www.youtube.com/watch?v=Q-ZB5q7ncCY&t=6s',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt4.jpg',
            title: 'How to achieve abundance and prosperity?',
            duration: '31:58',
            url: 'https://www.youtube.com/watch?v=w6zmKPd182s',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt5.jpg',
            title: 'Boost your sales by 30% with 03 essential questions.mp4',
            duration: '12:21',
            url: 'https://www.youtube.com/watch?v=pBhzpoSh5bw',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt6.jpg',
            title: 'How to achieve clarity in everything ?',
            duration: '24:40',
            url: 'https://www.youtube.com/watch?v=gOPiV5zW8oc',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt7.jpg',
            title: 'अच्छे लोगों के ही साथ बुरा क्यों होता है!',
            duration: '21:01',
            url: 'https://www.youtube.com/watch?v=FwK5GLkJf5g',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt8.jpg',
            title: 'Power Statement 48 The Power of Proactivity',
            duration: '13:38',
            url: 'https://www.youtube.com/watch?v=jYJH4cIOgQw&pp=0gcJCckJAYcqIYzv',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt9.jpg',
            title: 'कोशिश करने वालों की कभी हार नहीं होती!',
            duration: '9:46',
            url: 'https://www.youtube.com/watch?v=xFfXcAindPg',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt10.jpg',
            title: 'Power Statement – 46',
            duration: '13:29',
            url: 'https://www.youtube.com/watch?v=xFfXcAindPg',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt11.jpg',
            title: 'Right is right even if no one is doing it...',
            duration: '9:55',
            url: 'https://www.youtube.com/watch?v=6n_WJXfiy3k',
          },
          {
            thumbnail: '/public/youtube-thumbnails/yt12.jpg',
            title: "POWER STATEMENT -44: There's always an opportunity in CHAOS.",
            duration: '7:29',
            url: 'https://www.youtube.com/watch?v=4OnCYtvc4vk',
          },
        ];
        return (
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">YouTube Videos</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtubeVideos.map((video, index) => (
                  <a
                    key={index}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group block"
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      case 'clients':
        return (
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Clients</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                {clientImages.map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg flex items-center justify-center h-24 hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedClient(client)}
                  >
                    <img src={client.image} alt={client.title} className="max-h-20 object-contain" />
                  </div>
                ))}
              </div>
              <ClientModal />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Industry Leaders</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">From Fortune 500 companies to emerging startups, organizations worldwide trust Lucky Puchhrat to deliver transformational leadership insights and drive measurable results.</p>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <section className="py-20 bg-gradient-to-br from-blue-100/60 via-white/80 to-blue-200/60 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 min-h-[80vh] flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mx-4 animate-fadeInUp">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Let's Create Impact Together</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Ready to transform your organization? Get in touch to discuss your speaking engagement or training needs.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center text-blue-700 dark:text-yellow-300">
                      <svg className="mr-4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div>lucky@lpacs.com</div>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-700 dark:text-yellow-300">
                      <svg className="mr-4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div>+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-700 dark:text-yellow-300">
                      <svg className="mr-4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div>Available Worldwide</div>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-700 dark:text-yellow-300">
                      <svg className="mr-4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      <div>
                        <div className="font-semibold">Availability</div>
                        <div>Booking 2024 & 2025</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-600 dark:bg-yellow-400 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white dark:text-gray-900 mb-4">Speaking Topics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-blue-100 dark:text-gray-900 text-sm">• Leadership Excellence</div>
                      <div className="text-blue-100 dark:text-gray-900 text-sm">• Team Building</div>
                      <div className="text-blue-100 dark:text-gray-900 text-sm">• Sales Performance</div>
                      <div className="text-blue-100 dark:text-gray-900 text-sm">• Change Management</div>
                      <div className="text-blue-100 dark:text-gray-900 text-sm">• Innovation Mindset</div>
                      <div className="text-blue-100 dark:text-gray-900 text-sm">• Corporate Culture</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-fadeInRight">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
                    </div>
                    <div>
                      <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" required />
                    </div>
                    <div>
                      <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">Message</label>
                      <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" rows={5} placeholder="How can we help you?" required />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg font-bold bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-300 transition-colors text-lg mt-2">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col`}>
      <div className="flex-1 flex" style={{ minHeight: '100vh' }}>
        {/* Gradient background for the whole site */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-100/60 via-white/80 to-blue-200/60 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80" />
        {/* Dark mode toggle button */}
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      {/* Main Content */}
      <div className="flex-1 lg:ml-80">
        <main className="min-h-screen">
          {renderSection()}
        </main>
      </div>
      </div>
      {/* Trademark slip/footer */}
      <footer className="w-full text-center py-3 text-xs text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-900/70 border-t border-gray-200 dark:border-gray-800 backdrop-blur-md">
        &copy; {new Date().getFullYear()} Lucky Puchhrat&reg;. All rights reserved.
      </footer>
    </div>
  );
}

export default App;