import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 z-0" />
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Business with AI Automation
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI Agent, Email Automation, Voice Assistant – Powering Smart Solutions for the modern business landscape
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="inline-block px-8 py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium">
                Get Started Now
              </Link>
              <Link to="/contact" className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md transition-colors font-medium">
                Book a Demo
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Automation Dashboard" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-5 -right-5 bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">+</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">AI Productivity</p>
                  <p className="text-xs text-green-600">↑ 83% Increase</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 animate-float2">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">↓</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Manual Work</p>
                  <p className="text-xs text-purple-600">↓ 67% Reduction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;