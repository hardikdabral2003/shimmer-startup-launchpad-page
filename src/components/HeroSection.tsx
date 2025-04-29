
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container-tight flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
        >
          <h1 className="heading-xl mb-6">
            Register Your Company <span className="text-company-lightblue">Quickly & Easily</span>
          </h1>
          <p className="subheading mb-8">
            Start your business journey today with our streamlined company registration process. Expert support at every step.
          </p>
          <div className="mb-8 space-y-3">
            {[
              'Complete online process',
              'Fast turnaround time',
              'Dedicated support team',
              'Secure & compliant'
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Check className="text-company-teal mr-2" size={20} />
                <span className="text-company-darkgray">{item}</span>
              </div>
            ))}
          </div>
          <Button onClick={scrollToForm} className="btn-primary">Get Started Now</Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Private Limited Company Registration" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-company-lightblue text-white px-6 py-3 rounded-lg shadow-lg">
              <span className="font-bold">Private Limited</span>
              <span className="block text-sm">Company Registration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
