
import React from 'react';
import { 
  Shield, 
  Clock, 
  FileText, 
  Users,
  Award,
  CreditCard
} from 'lucide-react';

const features = [
  {
    icon: <FileText size={40} className="text-company-lightblue" />,
    title: 'Complete Documentation',
    description: 'All necessary legal documents prepared by experts for your company registration.'
  },
  {
    icon: <Clock size={40} className="text-company-lightblue" />,
    title: 'Quick Turnaround',
    description: 'Get your company registered in as little as 3-5 business days.'
  },
  {
    icon: <Shield size={40} className="text-company-lightblue" />,
    title: 'Legal Compliance',
    description: 'Ensure your business meets all regulatory requirements and follows legal guidelines.'
  },
  {
    icon: <Users size={40} className="text-company-lightblue" />,
    title: 'Expert Guidance',
    description: 'Support from experienced professionals throughout the registration process.'
  },
  {
    icon: <Award size={40} className="text-company-lightblue" />,
    title: 'Quality Assurance',
    description: 'Thorough review of all applications to prevent rejections and delays.'
  },
  {
    icon: <CreditCard size={40} className="text-company-lightblue" />,
    title: 'Transparent Pricing',
    description: 'Clear pricing with no hidden fees or surprise charges.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Why Choose Our Services</h2>
          <p className="subheading max-w-3xl mx-auto">
            We make company registration simple, efficient, and hassle-free with our comprehensive services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white border border-gray-100 rounded-xl card-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-company-blue mb-2">{feature.title}</h3>
              <p className="text-company-darkgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
