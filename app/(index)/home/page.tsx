'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, CreditCard, PieChart, Shield, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/ui/Navbar';
import Hooter from '@/components/ui/Hooter';
import ChatBot from '@/components/chatbot/page';


const Index = () => {
  const router = useRouter();
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Banking made simple for everyone';
  const typingSpeed = 100; // ms per character
  const typingDelayInitial = 500; // Initial delay before typing starts

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const typeWriter = () => {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeWriter, typingSpeed);
      }
    };

    // Start typing after initial delay
    const initialTimeout = setTimeout(() => {
      typeWriter();
    }, typingDelayInitial);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-banking-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-banking-blue to-banking-darkBlue text-white">
          <div className="container mx-auto px-6 py-16 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight h-16 md:h-auto">
                  <span className="inline-block">{displayText}</span>
                  <span className="animate-pulse ml-0.5 inline-block">|</span>
                </h1>
                <p className="text-lg mb-8 mt-8 opacity-90 animate-fade-in">
                  Secure, intelligent banking solutions with real-time support when you need it.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <Button
                    onClick={() => router.push('/chat-page')}
                    className="bg-white text-banking-blue rounded-[10px] hover:bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Get Support <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={() => router.push('/sign-in')}
                    variant="outline" 
                    className="bg-transparent rounded-[10px] border-white text-white hover:bg-white/10 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Image
                src="/icons/home.png"
                alt="Banking Dashboard Preview"
                width={400} 
                height={40}
                className="w-full max-w-md rounded-[10px] border border-white/20 transition-all duration-300 hover:shadow-xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-banking-darkGray">
              Smart Banking Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Card Management',
                  description: 'View and manage all your cards in one place with advanced security options.',
                  icon: <CreditCard className="h-6 w-6 text-banking-blue" />,
                },
                {
                  title: 'Budget Analytics',
                  description: 'Track spending patterns and manage your budget with intelligent insights.',
                  icon: <PieChart className="h-6 w-6 text-banking-blue" />,
                },
                {
                  title: 'Enhanced Security',
                  description: 'Advanced security features to protect your financial information 24/7.',
                  icon: <Shield className="h-6 w-6 text-banking-blue" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-banking-blue/10 rounded-full flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-banking-darkGray">{feature.title}</h3>
                  <p className="text-banking-gray mb-4">{feature.description}</p>
                  <Button variant="link" className="p-0 text-banking-blue">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chat Support CTA */}
        <section className="bg-gray-50 py-16 px-6 border-y border-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-banking-darkGray">
              Need Assistance? Chat With Us
            </h2>
            <p className="text-banking-gray mb-8 max-w-2xl mx-auto">
              Our intelligent banking assistant is available 24/7 to help you with account questions, 
              transactions, and more - all in real-time.
            </p>
            <Button 
              onClick={() => router.push('/chat-page')}
              className="bg-banking-blue hover:bg-banking-darkBlue text-white rounded-[10px]"
            >
              Start Chat Support <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      
      <Hooter />
      
      {/* Floating Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;