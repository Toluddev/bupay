
import React from 'react';

import { Mail, Phone, MapPin, Globe} from 'lucide-react';
import Link from 'next/link';

const Hooter = () => {
  return (
    <footer className="bg-banking-darkBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BuPay</h3>
            <p className="text-sm opacity-80 mb-4">
              Secure, intelligent banking solutions with real-time support when you need it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-banking-lightBlue transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-banking-lightBlue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-banking-lightBlue transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Personal Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Business Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Mobile Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Wealth Management
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  1, Banking Street, Financial District
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm opacity-80">+234123456</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm opacity-80">support@bupay.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            © {new Date().getFullYear()} BuPay. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Hooter;
