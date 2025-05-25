import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="text-yellow-500 text-2xl mb-4">"</div>
        <p className="text-gray-700 italic mb-6 leading-relaxed">{quote}</p>
        <div className="flex items-center">
          <img
            src={imageSrc}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-gray-600 text-sm">
              {title}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;