
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <section id="registration-form" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container-tight max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="p-12 lg:p-16 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h1 className="text-8xl font-bold tracking-tighter text-company-blue leading-none mb-6">
                  Let's get<br />in touch
                </h1>
                <p className="text-xl text-company-darkgray mt-10">
                  Don't be afraid to say hello with us!
                </p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mt-16 space-y-10"
              >
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Phone</h3>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-company-blue" />
                    <a href="tel:+123456789" className="text-company-blue hover:text-company-lightblue transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Email</h3>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-company-blue" />
                    <a href="mailto:contact@companyregistration.com" className="text-company-blue hover:text-company-lightblue transition-colors">
                      contact@companyregistration.com
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Office</h3>
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 mt-1 text-company-blue" />
                    <div>
                      <p className="text-company-blue">
                        123 Business Avenue, Suite 200<br />
                        New York, NY 10001
                      </p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-company-lightblue hover:underline inline-flex items-center mt-2"
                      >
                        See on Google Map
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-gray-500 mt-20"
              >
                <p>Great! We're excited to hear from you and let's start something special together. Call us for any inquiry.</p>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-black text-white p-12 lg:p-16">
            <h3 className="text-2xl font-semibold mb-10">Contact</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Input 
                    placeholder="Name" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 hover:border-gray-300 transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Email" 
                    type="email"
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 hover:border-gray-300 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Input 
                    placeholder="Phone" 
                    type="tel"
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 hover:border-gray-300 transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 hover:border-gray-300 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell us about your interested in"
                  rows={4}
                  className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 resize-none text-white placeholder:text-gray-400 focus-visible:ring-0 hover:border-gray-300 transition-colors"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-6 rounded-none text-lg transition-all duration-300"
              >
                Send to us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
