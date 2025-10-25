import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [activeSection, setActiveSection] = useState('home');

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What services does Krishna WebWorks offer?",
      answer: "We offer comprehensive web development services including custom web applications, mobile app development (iOS and Android), backend development, UI/UX design, DevOps solutions, and ongoing maintenance and support."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and requirements. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the project planning phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive support and maintenance packages. Our support includes bug fixes, security updates, performance monitoring, and feature enhancements. We have different support tiers to match your needs."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Vue.js, Node.js, Laravel, Python, PHP, MySQL, MongoDB, AWS, Docker, and many more. We stay updated with the latest technologies to provide cutting-edge solutions."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain regular communication through scheduled meetings, progress reports, and direct communication channels. We use project management tools to keep you updated on progress and milestones."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing depends on project scope, complexity, and requirements. We offer fixed-price projects for well-defined scopes and hourly rates for ongoing work. We provide detailed quotes after understanding your requirements."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients worldwide. We have experience working across different time zones and can accommodate various communication preferences and project requirements."
    },
    {
      question: "What happens if I need changes during development?",
      answer: "We understand that requirements can evolve. We have a structured change management process that evaluates the impact of changes on timeline and budget, ensuring transparency throughout the process."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can help you with hosting setup, domain registration, and server configuration. We work with reliable hosting providers and can recommend the best options for your specific needs."
    },
    {
      question: "What makes Krishna WebWorks different?",
      answer: "We combine technical expertise with business understanding. Our team focuses on delivering solutions that not only meet technical requirements but also drive business growth. We provide ongoing support and maintain long-term relationships with our clients."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business grow.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openItems[index] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openItems[index] && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help. Get in touch with us for personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@krishnawebworks.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
