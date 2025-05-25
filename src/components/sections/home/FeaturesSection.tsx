import React from 'react';
import { BrainCircuit, Sparkles, Zap, Clock, Server, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BrainCircuit,
    title: 'Advanced AI Technology',
    description: 'Cutting-edge machine learning algorithms that adapt to your business needs.'
  },
  {
    icon: Sparkles,
    title: 'Intuitive Interface',
    description: 'User-friendly dashboards and controls designed for ease of use.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance to handle tasks in milliseconds, not minutes.'
  },
  {
    icon: Clock,
    title: '24/7 Automation',
    description: 'Always-on systems that work around the clock without interruption.'
  },
  {
    icon: Server,
    title: 'Easy Integration',
    description: 'Seamlessly connects with your existing business tools and workflows.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to protect your data.'
  }
];

const FeaturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered tools combine powerful technology with ease of use to transform how you operate.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;