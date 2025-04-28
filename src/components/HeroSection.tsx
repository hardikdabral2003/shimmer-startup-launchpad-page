
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container-tight flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
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
        </div>

        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="heading-md mb-6 text-center">Get Started Today</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-company-darkgray mb-1">
                Company Name
              </label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your proposed company name" 
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-company-darkgray mb-1">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-company-darkgray mb-1">
                Phone
              </label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full"
              />
            </div>
            <Button className="btn-primary w-full mt-4">Check Availability</Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to our Terms & Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
