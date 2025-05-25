import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_hmtl818',
        'template_heqz9pl',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_message: formData.user_message,
          to_email: 'autoscalee@gmail.com'
        },
        'bE0YB6JHwwmJtl0wq'
      );

      setSubmitted(true);
      setFormData({ user_name: '', user_email: '', user_message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'autoscalee@gmail.com',
      description: 'Our friendly team is here to help.'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9028474128 +918432728103 +91 8308869862',
      description: 'Mon-Fri from 8am to 5pm.'
    },
    {
      icon: MapPin,
      title: 'Remote',
      details: 'India',
      description: 'Contact Us By Submitting Your Query.'
    }
  ];

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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or ready to transform your business? We're here to help.
            </motion.p>
          </div>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-10">
                We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.details}</p>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4">
                        {error}
                      </div>
                    )}
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="user_message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="user_message"
                        name="user_message"
                        value={formData.user_message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-4 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How quickly can I implement your AI solutions?',
                answer: 'Most clients are up and running within 2-4 weeks, depending on the complexity of the integration and specific requirements. Our team works closely with you to ensure a smooth implementation process.'
              },
              {
                question: 'Do I need technical expertise to use your services?',
                answer: 'No technical expertise is required. Our solutions are designed with user-friendly interfaces that anyone can navigate. We also provide comprehensive onboarding and training to ensure your team is comfortable with the tools.'
              },
              {
                question: 'How secure is my data with your AI solutions?',
                answer: 'Security is our top priority. We use industry-standard encryption, secure data storage, and strict access controls. All data processing complies with relevant regulations like GDPR and CCPA.'
              },
              {
                question: 'Can your solutions integrate with our existing systems?',
                answer: 'Yes, our solutions are designed to integrate seamlessly with most common business tools and platforms. We offer custom API development for specialized systems to ensure compatibility across your entire tech stack.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;