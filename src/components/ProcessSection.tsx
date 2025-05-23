
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Submit Your Details',
    description: 'Fill out our simple online form with your business information and requirements.'
  },
  {
    number: '02',
    title: 'Name Availability Check',
    description: 'We\'ll check if your proposed company name is available and compliant with regulations.'
  },
  {
    number: '03',
    title: 'Document Preparation',
    description: 'Our experts prepare all necessary legal documents tailored to your company needs.'
  },
  {
    number: '04',
    title: 'Submission to Authorities',
    description: 'We submit your application to the relevant government bodies and handle all communications.'
  },
  {
    number: '05',
    title: 'Registration Complete',
    description: 'Receive your company registration certificate and start your business operations.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-company-gray">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our Simple 5-Step Process</h2>
          <p className="subheading max-w-3xl mx-auto">
            From application to incorporation, we handle everything with transparency and efficiency.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 md:space-y-0 relative"
        >
          {/* Desktop vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-company-lightblue bg-opacity-30"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="md:flex items-center"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl card-shadow"
                >
                  <h3 className="text-xl font-bold text-company-blue mb-2">{step.title}</h3>
                  <p className="text-company-darkgray">{step.description}</p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hidden md:flex justify-center items-center relative z-10 w-0 md:w-0 mx-auto"
              >
                <div className="w-10 h-10 rounded-full bg-company-lightblue text-white flex items-center justify-center font-bold">
                  {step.number.split('')[1]}
                </div>
              </motion.div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="md:hidden mt-2 mb-6 flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-company-lightblue text-white flex items-center justify-center font-bold mr-4"
                  >
                    {step.number.split('')[1]}
                  </motion.div>
                  <span className="text-xl font-bold text-company-blue">Step {step.number}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="hidden md:block text-3xl font-bold text-company-blue opacity-80"
                >
                  Step {step.number}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
