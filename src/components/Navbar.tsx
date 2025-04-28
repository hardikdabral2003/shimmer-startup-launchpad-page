
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50 shadow-sm">
      <div className="container-tight flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-company-blue text-2xl font-bold">CompanyReg</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#features" className="text-company-darkgray hover:text-company-blue transition-colors">Features</a></li>
            <li><a href="#process" className="text-company-darkgray hover:text-company-blue transition-colors">Process</a></li>
            <li><a href="#pricing" className="text-company-darkgray hover:text-company-blue transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="text-company-darkgray hover:text-company-blue transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="text-company-darkgray hover:text-company-blue transition-colors">FAQ</a></li>
          </ul>
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-company-blue focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white absolute top-16 left-0 right-0 shadow-md animate-fade-in">
          <ul className="flex flex-col space-y-4 mb-4">
            <li><a href="#features" className="text-company-darkgray hover:text-company-blue transition-colors">Features</a></li>
            <li><a href="#process" className="text-company-darkgray hover:text-company-blue transition-colors">Process</a></li>
            <li><a href="#pricing" className="text-company-darkgray hover:text-company-blue transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="text-company-darkgray hover:text-company-blue transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="text-company-darkgray hover:text-company-blue transition-colors">FAQ</a></li>
          </ul>
          <Button className="btn-primary w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
