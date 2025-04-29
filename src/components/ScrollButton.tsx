
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const formSection = document.getElementById('registration-form');
    
    const handleScroll = () => {
      if (formSection) {
        const formRect = formSection.getBoundingClientRect();
        const isFormVisible = 
          formRect.top < window.innerHeight && 
          formRect.bottom > 0;
        
        setShowButton(!isFormVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <AnimatePresence>
      {showButton && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button 
            onClick={scrollToForm}
            className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full p-4 shadow-lg"
          >
            <span className="sr-only">Get in touch</span>
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
