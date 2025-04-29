
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const RegistrationForm = () => {
  return (
    <section id="registration-form" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container-tight"
      >
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Start Your Registration Process</h2>
          <p className="subheading max-w-3xl mx-auto">
            Fill out the form below to begin your company registration journey with us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Email Address
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
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-company-darkgray mb-1">
                  Business Location
                </label>
                <Input 
                  id="location" 
                  type="text" 
                  placeholder="City where you'll register" 
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-company-darkgray mb-1">
                Additional Requirements (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Any specific requirements or questions?"
              />
            </div>
            <Button className="btn-primary w-full">Submit Registration Request</Button>
            <p className="text-xs text-center text-gray-500 mt-2">
              By submitting, you agree to our Terms & Privacy Policy
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default RegistrationForm;
