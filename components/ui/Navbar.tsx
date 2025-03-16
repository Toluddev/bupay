'use client'
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Home, Info, Mail, LogIn, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      } transition-all duration-300 sticky top-0 z-50`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <span className="text-26 font-ibm-plex-serif font-bold text-black-1">
              BuPay
            </span>
          </Link>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center text-banking-darkGray hover:text-banking-blue transition-colors relative group">
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-banking-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about-contact" className="flex items-center text-banking-darkGray hover:text-banking-blue transition-colors relative group">
              <Info className="h-4 w-4 mr-1" />
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-banking-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about-contact" className="flex items-center text-banking-darkGray hover:text-banking-blue transition-colors relative group">
              <Mail className="h-4 w-4 mr-1" />
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-banking-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          {/* Login Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-banking-blue hover:bg-banking-darkBlue text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => router.push("/sign-in")}
            >
              <LogIn className="h-4 w-4 mr-2" />
              <span>Login</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-banking-darkGray hover:text-banking-blue hover:bg-banking-blue/5"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-2 pb-3 border-t border-gray-100">
              <Link 
                href="/" 
                className="flex items-center text-banking-darkGray hover:text-banking-blue transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4 mr-2" />
                <span>Home</span>
              </Link>
              <Link 
                href="/about" 
                className="flex items-center text-banking-darkGray hover:text-banking-blue transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="h-4 w-4 mr-2" />
                <span>About</span>
              </Link>
              <Link 
                href="/about#contact" 
                className="flex items-center text-banking-darkGray hover:text-banking-blue transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>Contact Us</span>
              </Link>
              <Button 
                variant="default" 
                className="bg-banking-blue hover:bg-banking-darkBlue text-white w-full justify-start"
                onClick={() => {
                  setMobileMenuOpen(false); 
                  router.push("/sign-in"); 
                }}
              >
                <LogIn className="h-4 w-4 mr-2" />
                <span>Login</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
