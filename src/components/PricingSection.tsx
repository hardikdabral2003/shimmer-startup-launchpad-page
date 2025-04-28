
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    description: 'Best for small startups',
    price: '$299',
    features: [
      'Company name search',
      'Certificate of incorporation',
      'Standard memorandum & articles',
      'Digital copies of documents',
      'Business registration number',
      'Basic compliance guidance'
    ],
    notIncluded: [
      'Director service address',
      'Company secretary',
      'Physical document copies',
      'Tax registration assistance',
      'Priority processing'
    ],
    isPopular: false,
    buttonText: 'Choose Basic'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies',
    price: '$499',
    features: [
      'Company name search',
      'Certificate of incorporation',
      'Standard memorandum & articles',
      'Digital copies of documents',
      'Business registration number',
      'Basic compliance guidance',
      'Director service address',
      'Company secretary',
      'Physical document copies'
    ],
    notIncluded: [
      'Tax registration assistance',
      'Priority processing'
    ],
    isPopular: true,
    buttonText: 'Choose Professional'
  },
  {
    name: 'Ultimate',
    description: 'Complete package for businesses',
    price: '$799',
    features: [
      'Company name search',
      'Certificate of incorporation',
      'Standard memorandum & articles',
      'Digital copies of documents',
      'Business registration number',
      'Basic compliance guidance',
      'Director service address',
      'Company secretary',
      'Physical document copies',
      'Tax registration assistance',
      'Priority processing'
    ],
    notIncluded: [],
    isPopular: false,
    buttonText: 'Choose Ultimate'
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Transparent Pricing Plans</h2>
          <p className="subheading max-w-3xl mx-auto">
            Choose the package that best suits your business needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.isPopular 
                  ? 'border-2 border-company-lightblue relative scale-105 shadow-xl z-10' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-company-lightblue text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-company-blue mb-2">{plan.name}</h3>
                <p className="text-company-darkgray mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-company-blue">{plan.price}</span>
                  <span className="text-company-darkgray"> / one-time</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-company-darkgray">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start opacity-50">
                      <X className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-company-darkgray line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`w-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-company-darkgray mb-4">Need a custom solution for your business?</p>
          <Button variant="outline" className="btn-secondary">Contact Us for Custom Quote</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
