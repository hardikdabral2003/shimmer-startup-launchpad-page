
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the company registration process take?",
    answer: "The typical turnaround time for company registration is 3-5 business days once all required documents are submitted. However, this can vary depending on the complexity of your business structure and the current workload of the registration authorities."
  },
  {
    question: "What documents do I need to provide for company registration?",
    answer: "You'll need to provide identification documents for all directors and shareholders (passport or national ID), proof of address, details of your company structure, proposed company name, and information about share distribution. Our team will guide you through the specific requirements based on your business type."
  },
  {
    question: "Can I register a company if I'm not a resident?",
    answer: "Yes, non-residents can register a company. However, there may be additional requirements or documentation needed. Our team specializes in helping international clients navigate these requirements efficiently."
  },
  {
    question: "What types of company structures do you help register?",
    answer: "We assist with registering various company structures including Private Limited Companies, Public Limited Companies, Limited Liability Partnerships (LLPs), Sole Proprietorships, and more. We can advise on the best structure based on your business goals."
  },
  {
    question: "Are there any ongoing compliance requirements after registration?",
    answer: "Yes, companies have ongoing obligations including annual filings, tax returns, maintaining proper company records, and updating authorities about any significant changes to the company structure. We offer compliance packages to help you manage these requirements."
  },
  {
    question: "What happens if my proposed company name is rejected?",
    answer: "If your proposed name is rejected, we'll immediately notify you and provide guidance on alternative names or modifications that would be acceptable. We'll work with you to find a suitable name that meets regulatory requirements and aligns with your brand vision."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-company-gray">
      <div className="container-tight max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="subheading max-w-3xl mx-auto">
            Find answers to common questions about our company registration services.
          </p>
        </div>

        <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-lg">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-company-blue hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-company-darkgray">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-company-darkgray mb-3">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="text-company-lightblue font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
