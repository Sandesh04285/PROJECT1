import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../../ui/TestimonialCard';

const testimonials = [
  {
    quote: "Implementing AIutomize's email automation system has saved our team countless hours and improved our response times dramatically. Our customers have noticed the difference.",
    name: "Sarah Johnson",
    title: "VP of Operations",
    company: "TechCorp",
    imageSrc: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The AI agent has revolutionized how we handle customer support. It's like having an extra team member who never sleeps and always knows the right answer.",
    name: "Michael Chen",
    title: "Customer Success Manager",
    company: "GlobalServe",
    imageSrc: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "We've seen a 40% increase in productivity since integrating AIutomize's voice assistant technology. The accuracy and natural interaction is miles ahead of the competition.",
    name: "Emily Rodriguez",
    title: "Director of Innovation",
    company: "FutureTech",
    imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear from businesses that have transformed their operations with our AI automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                imageSrc={testimonial.imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;