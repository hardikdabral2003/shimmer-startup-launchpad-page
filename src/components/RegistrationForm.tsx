
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <section id="registration-form" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-tight">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-10 p-10 bg-white">
            <div>
              <h2 className="text-7xl font-bold tracking-tight text-company-blue mb-6">
                Let's get<br />in touch
              </h2>
              <p className="text-xl text-company-darkgray mb-6">
                Don't be afraid to say hello with us!
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-gray-500 mb-2">Phone</h3>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 text-company-lightblue" />
                  <a href="tel:+123456789" className="text-company-blue text-lg hover:text-company-lightblue transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-gray-500 mb-2">Email</h3>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 text-company-lightblue" />
                  <a href="mailto:contact@companyregistration.com" className="text-company-blue text-lg hover:text-company-lightblue transition-colors">
                    contact@companyregistration.com
                  </a>
                </div>
              </div>
              
              <div className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-gray-500 mb-2">Office</h3>
                <div className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 text-company-lightblue" />
                  <div>
                    <p className="text-company-blue text-lg">
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
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-company-blue bg-gradient-to-br from-company-blue to-blue-800 text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full opacity-10 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full opacity-10 -ml-32 -mb-32"></div>
            
            <h3 className="text-2xl font-semibold mb-8 relative z-10">Contact Us</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="text-sm text-gray-300 mb-1 block">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 group-hover:border-blue-300 transition-colors"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="text-sm text-gray-300 mb-1 block">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 group-hover:border-blue-300 transition-colors"
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="text-sm text-gray-300 mb-1 block">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 group-hover:border-blue-300 transition-colors"
                  />
                </div>
                <div className="group">
                  <label htmlFor="subject" className="text-sm text-gray-300 mb-1 block">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0 group-hover:border-blue-300 transition-colors"
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="message" className="text-sm text-gray-300 mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 resize-none text-white placeholder:text-gray-400 focus-visible:ring-0 group-hover:border-blue-300 transition-colors"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send to us
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
