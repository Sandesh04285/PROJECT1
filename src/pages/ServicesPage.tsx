import React from 'react';
import { Bot, Mail, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'ai-agent',
    icon: Bot,
    title: 'AI Agent (Chatbot)',
    description: 'Empower your business with intelligent conversational AI.',
    features: [
      'Natural language understanding for human-like conversations',
      'Seamless integration with your website and platforms',
      'Customizable responses based on your business needs',
      '24/7 customer support automation',
      'Multi-language support for global reach'
    ]
  },
  {
    id: 'email-automation',
    icon: Mail,
    title: 'Email Automation',
    description: 'Automate routine email responses and campaigns.',
    features: [
      'Smart email classification and prioritization',
      'Automated response generation based on content',
      'Personalized email campaign management',
      'A/B testing capabilities for optimization',
      'Detailed analytics and performance tracking'
    ]
  },
  {
    id: 'voice-assistant',
    icon: Mic,
    title: 'Voice Assistant',
    description: 'Elevate customer interaction through voice-driven automation.',
    features: [
      'Natural voice recognition and processing',
      'Custom voice commands for specific tasks',
      'Integration with business applications',
      'Voice biometrics for security',
      'Multi-platform compatibility'
    ]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive AI-powered solutions designed to transform your business operations and boost productivity.
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.section 
                key={service.id} 
                id={service.id} 
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex flex-col">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-8 px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium self-start">
                    Learn More
                  </button>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
      
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Supercharge Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is ready to help you implement the perfect AI automation solution for your business needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;