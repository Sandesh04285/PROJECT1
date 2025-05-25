import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="bg-gray-50 p-6 flex justify-center items-center">
        <div className="bg-primary/10 p-4 rounded-full">
          <Icon size={40} className="text-primary" />
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-primary text-lg leading-none mt-0.5">•</span>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;