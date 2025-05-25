import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 p-10 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join hundreds of forward-thinking companies already leveraging our AI automation solutions to boost productivity and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact"
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/services"
                className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;