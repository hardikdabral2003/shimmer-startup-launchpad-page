
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';
import ScrollButton from '@/components/ScrollButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <RegistrationForm />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Index;
