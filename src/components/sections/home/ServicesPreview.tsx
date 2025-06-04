import React, { useState } from 'react';
import { Bot, Mail, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../../ui/ServiceCard';

const services = [
  {
    title: 'AI Agent',
    description: 'Empower your business with intelligent task automation.',
    icon: Bot,
    shortFeatures: [
      'AI-driven decision-making',
      'Seamless workflow integration'
    ],
    fullFeatures: [
      'Leverage AI-driven decision-making for enhanced productivity',
      'Integrate seamlessly with your existing workflows',
      'Automate complex business processes with ease',
      'Natural language understanding for human-like conversations',
      'Customizable responses based on your business needs',
      '24/7 customer support automation'
    ]
  },
  {
    title: 'Email Automation',
    description: 'Automate routine email responses and campaigns.',
    icon: Mail,
    shortFeatures: [
      'Smart email classification',
      'Automated responses'
    ],
    fullFeatures: [
      'Improve customer engagement with personalized communication',
      'Reduce manual effort while increasing efficiency',
      'Smart classification and prioritization of emails',
      'Automated response generation based on content',
      'Personalized email campaign management',
      'Detailed analytics and performance tracking'
    ]
  },
  {
    title: 'Voice Assistant',
    description: 'Elevate customer interaction through voice-driven automation.',
    icon: Mic,
    shortFeatures: [
      'Natural voice processing',
      'Multi-platform support'
    ],
    fullFeatures: [
      'Seamlessly handle inquiries, bookings, and support with voice commands',
      'Enhance accessibility and convenience for users',
      'Natural language processing for human-like interactions',
      'Custom voice commands for specific tasks',
      'Voice biometrics for security',
      'Multi-platform compatibility'
    ]
  }
];

const ServicesPreview: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600">
            From intelligent automation to advanced voice recognition, our suite of services is designed to transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gray-50 p-6 flex justify-center items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <service.icon size={40} className="text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {(expandedService === service.title ? service.fullFeatures : service.shortFeatures).map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-primary text-lg leading-none mt-0.5">•</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => toggleService(service.title)}
                  className="w-full py-2.5 px-4 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium"
                >
                  {expandedService === service.title ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center text-primary hover:text-primary-600 font-medium"
          >
            View all services
            <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;