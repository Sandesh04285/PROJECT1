import React from 'react';
import { Bot, Mail, Mic, BarChart, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'ai-agent',
    icon: Bot,
    title: 'AI Agent',
    description: 'Empower your business with intelligent task automation.',
    features: [
      'Leverage AI-driven decision-making for enhanced productivity.',
      'Integrate seamlessly with your existing workflows.',
      'Automate complex business processes with ease.',
      'Real-time analytics and insights dashboard.',
      'Customizable to adapt to your specific business needs.'
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'email-automation',
    icon: Mail,
    title: 'Email Automation',
    description: 'Automate routine email responses and campaigns.',
    features: [
      'Improve customer engagement with personalized communication.',
      'Reduce manual effort while increasing efficiency.',
      'Smart classification and prioritization of emails.',
      'Automated response generation based on content analysis.',
      'Schedule and manage email campaigns effortlessly.'
    ],
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'voice-assistant',
    icon: Mic,
    title: 'Voice Assistant',
    description: 'Elevate customer interaction through voice-driven automation.',
    features: [
      'Seamlessly handle inquiries, bookings, and support with voice commands.',
      'Enhance accessibility and convenience for users.',
      'Natural language processing for human-like interactions.',
      'Multi-language support for global accessibility.',
      'Voice biometric authentication for enhanced security.'
    ],
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'analytics-dashboard',
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Gain actionable insights with advanced analytics and reporting.',
    features: [
      'Comprehensive visualization of business metrics and KPIs.',
      'AI-powered trend analysis and forecasting.',
      'Custom reports and dashboards tailored to your needs.',
      'Real-time monitoring of critical performance indicators.',
      'Data-driven recommendations for business optimization.'
    ],
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'scheduled-automation',
    icon: Clock,
    title: 'Scheduled Automation',
    description: 'Set it and forget it with powerful scheduled task automation.',
    features: [
      'Schedule complex business processes to run automatically.',
      'Reduce manual intervention and human error.',
      'Intelligent retry mechanisms for failed tasks.',
      'Notification system for important events and completions.',
      'Audit logs for complete transparency and accountability.'
    ],
    image: 'https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'multi-platform-integration',
    icon: Globe,
    title: 'Multi-Platform Integration',
    description: 'Seamlessly connect with all your favorite tools and platforms.',
    features: [
      'Integrate with popular CRM, ERP, and marketing platforms.',
      'Unified data flow across disparate business systems.',
      'No-code integration setup for quick deployment.',
      'Custom API development for specialized systems.',
      'Secure data transfer with enterprise-grade encryption.'
    ],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <section key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={isEven ? 'lg:order-1' : 'lg:order-2'}
                  >
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
                    
                    <button className="mt-8 px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium">
                      Learn More
                    </button>
                  </motion.div>
                  
                  <motion.div
                    className={`lg:order-${isEven ? '2' : '1'}`}
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              </section>
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