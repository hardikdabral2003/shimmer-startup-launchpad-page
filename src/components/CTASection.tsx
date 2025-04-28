
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-company-teal to-company-lightblue text-white">
      <div className="container-tight text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of successful entrepreneurs who've used our services to turn their business ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-company-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-md text-lg">
            Register Now
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md text-lg">
            <span>Schedule Consultation</span>
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
