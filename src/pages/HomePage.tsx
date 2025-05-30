import React from 'react';
import HeroSection from '../components/sections/home/HeroSection';
import FeaturesSection from '../components/sections/home/FeaturesSection';
import ServicesPreview from '../components/sections/home/ServicesPreview';
import CtaSection from '../components/sections/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <CtaSection />
    </>
  );
};

export default HomePage;