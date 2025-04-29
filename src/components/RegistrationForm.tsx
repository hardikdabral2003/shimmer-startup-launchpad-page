
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <section id="registration-form" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container-tight">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-7xl font-bold tracking-tight text-company-blue mb-6">
                Let's get<br />in touch
              </h2>
              <p className="text-xl text-company-darkgray mb-6">
                Don't be afraid to say hello with us!
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-500 mb-2">Phone</h3>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 text-company-lightblue" />
                  <a href="tel:+123456789" className="text-company-blue text-lg hover:text-company-lightblue transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-gray-500 mb-2">Email</h3>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 text-company-lightblue" />
                  <a href="mailto:contact@companyregistration.com" className="text-company-blue text-lg hover:text-company-lightblue transition-colors">
                    contact@companyregistration.com
                  </a>
                </div>
              </div>
              
              <div>
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
          <div className="bg-company-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Name" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Email" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Phone" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Subject" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-400 focus-visible:ring-0"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">
                  Tell us about your requirements
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your interested in"
                  className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 resize-none text-white placeholder:text-gray-400 focus-visible:ring-0"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-3 text-lg"
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
