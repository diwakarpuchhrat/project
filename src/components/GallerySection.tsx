import React, { useState } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';

const photos = [
  {
    url: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.23.56_89176f50.jpg",
    title: "Stress Management Workshop",
    subtext: "For Educators."
  },
  {
    url: "/gallery-photos/award.jpg",
    title: "Chief Guest at one of the Schools",
    subtext: "Recognition for outstanding leadership and contribution."
  },
  {
    url: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.22.00_300a36d2.jpg",
    title: "Parents' Workshop",
    subtext: "Interactive workshop engaging parents in skill development."
  },
  {
    url: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.20.01_fee2e055.jpg",
    title: "Teachers' Workshop",
    subtext: "Comprehensive training session for Teachers."
  },
  {
    url: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.27.06_a8da01e8.jpg",
    title: "Teachers' Workshop",
    subtext: "Comprehensive training session for Teachers."
  },
  {
    url: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.27.05_0ca8cd0a.jpg",
    title: "Penning Autographs",
    subtext: ""
  },
  {
    url: "/gallery-photos/1.jpg",
    title: "Teachers' Workshop",
    subtext: "Comprehensive training session for Teachers."
  },
  {
    url: "/gallery-photos/2.jpg",
    title: "Parents' Workshop",
    subtext: "Comprehensive training session for Parents and Students."
  },
  {
    url: "/gallery-photos/3.jpg",
    title: "Chief guest at one of the Schools",
    subtext: "Recognition for outstanding leadership and contribution."
  },
  {
    url: "/gallery-photos/4.jpg",
    title: "Teachers' Workshop ",
    subtext: "On the topic adapting to individual Learning Styles."
  },
  {
    url: "/gallery-photos/5.jpg",
    title: "Teachers' Workshop ",
    subtext: "Comprehensive training session for Teachers."
  },
  {
    url: "/gallery-photos/6.jpg",
    title: "Students' Workshop ",
    subtext: "Interactive training session for Teachers."
  }
];

const videos = [
  {
    thumbnail: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.22.00_300a36d2.jpg",
    title: "Score Smart, Stress Less",
    duration: "1:03",
    url: "/gallery-videos/WhatsApp Video 2025-06-12 at 04.22.00_e557d62a.mp4"
  },
  {
    thumbnail: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.23.56_89176f50.jpg",
    title: "Communication Psychology for Educators",
    duration: "1:03",
    url: "/gallery-videos/WhatsApp Video 2025-06-12 at 04.23.58_39849ace.mp4"
  },
  {
    thumbnail: "/gallery-photos/WhatsApp Image 2025-06-12 at 04.27.06_a8da01e8.jpg",
    title: "Responsible use of Mobile Phones for Students",
    duration: "0:59",
    url: "/gallery-videos/WhatsApp Video 2025-06-12 at 04.27.08_ce7b6c5b.mp4"
  }
];

const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof photos[0]>(null);
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null);

  const PhotoModal = () => {
    if (!selectedPhoto) return null;
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPhoto(null)} />
        <div className="relative z-50 max-w-2xl w-full mx-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedPhoto.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{selectedPhoto.subtext}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const VideoModal = () => {
    if (!selectedVideo) return null;
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedVideo(null)} />
        <div className="relative z-50 max-w-4xl w-full mx-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <video
                src={selectedVideo.url}
                controls
                className="w-full h-auto max-h-[70vh]"
                autoPlay
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Gallery & Media
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore moments from speaking engagements, training sessions, and events 
            that showcase the impact of transformational leadership.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'photos'
                  ? 'bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-300'
              }`}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'videos'
                  ? 'bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-300'
              }`}
            >
              Video Gallery
            </button>
          </div>
        </div>
        {activeTab === 'photos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp bg-white dark:bg-gray-800 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <Play className="text-white bg-blue-600 dark:bg-yellow-400 rounded-full p-3 hover:bg-blue-700 dark:hover:bg-yellow-300 transition-colors" size={48} />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
        <PhotoModal />
        <VideoModal />
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to See More?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Subscribe to our YouTube channel for the latest content</p>
          <a
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300 transition-colors transform hover:scale-105 flex items-center mx-auto w-fit"
            href="https://www.youtube.com/@mavericksindiasolution959"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play size={20} className="mr-2" />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;