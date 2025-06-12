import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "National Recognition",
      description: "Certified Professional Speaker with global acclaim"
    },
    {
      icon: Users,
      title: "Corporate Excellence",
      description: "Trusted by many companies Pan India"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Delivered keynotes across 12+ States in India"
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "98% client satisfaction rate with measurable outcomes"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Lucky Puchhrat
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A dynamic speaker who transforms organizations through powerful storytelling, 
            practical leadership insights, and actionable strategies for success.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-start">
            <img
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Lucky Puchhrat Portrait"
              className="rounded-2xl shadow-xl w-full max-w-xs mb-6 lg:mb-0 lg:mr-10 float-left"
              style={{ flexShrink: 0 }}
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Name of the speaker: Lucky Puchhrat</h3>
              <p className="mb-2 dark:text-gray-200"><strong>Age:</strong> 47 yrs</p>
              <p className="mb-2 dark:text-gray-200"><strong>Speaking Experience:</strong> 10 yrs as a professional speaker</p>
              <p className="mb-2 dark:text-gray-200"><strong>Speaker's Forte:</strong> Personal Management, Communication Skills, Leadership Skills, Motivation and Sales</p>
              <p className="mb-4 dark:text-gray-200"><strong>Career:</strong> Lucky Puchhrat was born in India in 1976 and was raised in a Brahmin family of traditional Indian values.<br/>
              He holds a Bachelor's degree and a Master's Degree in English Literature, Masters in Business Administration, and Post Graduate Diploma in Software Development. Worked in Delhi University as a Lecturer of English literature; served a Multinational as Manager, Learning and Development, and later as Head Academics and Head Human Resource with a management college.<br/>
              Presently, he is the Founder of <strong>Mavericks India Solution</strong>, a Learning and Development Company.</p>
              <p className="mb-4 dark:text-gray-200">Lucky Puchhrat is a personal management expert and his leadership style is a source of inspiration for individuals and organizations. He influences people to live as leaders while reducing communication gaps and apprehend their untapped potential. He is also a highly in demand speaker and seminar leader. In the world which is over inhabited with do-it-yourself experts, he carved his own way out which made organizations pay attention to his words. Through innovative ideas and ground breaking concepts, Lucky showed how to take on challenges and make superior decisions. Lucky's scholarly interest in self-improvement also led him to a ten year quest through the philosophies of Hindu Mythology, merging it with management and inherited intellect from modern gurus of the west. The quest for self-improvement made him in-demand speaker. He also works as an executive coach for people who aspire to reach extraordinary heights in their career and personal lives. His programs show individuals how to create a successful personal life while becoming a star at work.</p>
              <ul className="list-disc ml-6 mb-4 dark:text-gray-200">
                <li>Lucky Puchhrat brings a <strong>proven record of success</strong> to help make your next learning event 'extraordinary'.</li>
                <li>His proprietary <strong>learning</strong> solutions and cutting-edge curriculum is customized to meet the specific needs of the organizations.</li>
                <li>Regardless of size or scope his proven methods create real results that can take people and organizations to all-new level of production, innovation and success.</li>
                <li>He offers a wide range of integrated training and coaching services that incorporates the latest technology.</li>
                <li>This allows him to configure "bundle" of services to fit the training needs and technology capabilities over the long term.</li>
                <li>His programs deliver <strong>sustained results, impact and measurable return on organization's training investment.</strong></li>
              </ul>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Public Speaking Experience:</h4>
              <ul className="list-decimal ml-6 mb-4 dark:text-gray-200">
                <li>100+ sales trainings at PAN India locations for corporate.</li>
                <li>300+ seminars in various public schools in Delhi NCR.</li>
                <li>100+ motivational lectures on topics related to life skills.</li>
                <li>Empaneled Speaker for <strong>The Hindustan Times</strong> and conducted seminars for Teachers, Students and Parents.</li>
                <li>Imparted guest lectures for various management colleges in India such as HIET Himachal Pradesh, BRCM Bhiwani, IAMR Ghaziabad, Shkshapeth College of Management and technology to name a few.</li>
              </ul>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">USPs of his program – the participants can</h4>
              <ul className="list-decimal ml-6 dark:text-gray-200">
                <li>Develop unshakable confidence</li>
                <li>Take their career to the next level.</li>
                <li>Build stronger relationships</li>
                <li>Take 100% control over their decision making.</li>
                <li>Release negativity from their life</li>
                <li>Eradicate and replacing old habits that are no longer serving them.</li>
                <li>Step outside their comfort zone and embrace new challenges.</li>
                <li>Develop a life, career plan that's aligned with their passion and purpose.</li>
                <li>Maintain focus and systematically achieve their goals.</li>
                <li>Create healthier work/life balance and spend more time doing what they love.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-blue-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <achievement.icon className="text-blue-600 dark:text-yellow-300 mx-auto mb-4" size={40} />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;