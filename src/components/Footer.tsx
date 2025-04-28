
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-company-blue text-white">
      <div className="container-tight py-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">CompanyReg</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for fast, reliable company registration services and corporate compliance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-company-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-company-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-company-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-company-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Company Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Secretarial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Business Avenue, Suite 500<br />Corporate District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@companyreg.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">&copy; 2025 CompanyReg. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
