'use client'
import React from 'react';
import Link from "next/link";
import Navbar from '@/components/ui/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Trophy, Send, Phone, Mail, MapPin, ArrowRight, Clock, Shield, CreditCard } from 'lucide-react';
import Hooter from '@/components/ui/Hooter';


const AboutContact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-banking-darkBlue text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-banking-darkBlue to-banking-blue opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About BuPay</h1>
              <p className="text-xl opacity-90 mb-8">Secure, intelligent banking solutions with real-time support when you need it.</p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-banking-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-banking-darkBlue mb-6">Our Mission</h2>
                <p className="text-banking-darkGray mb-6">
                  At BuPay, we're on a mission to transform traditional banking into a seamless, intuitive experience. 
                  Founded in 2015, we've grown from a small startup to a trusted financial technology company serving over 
                  2 million customers worldwide.
                </p>
                <p className="text-banking-darkGray mb-6">
                  We believe that banking should be accessible, secure, and transparent. Our innovative platform combines 
                  cutting-edge technology with personalized service to provide you with the tools you need to manage your 
                  finances effectively.
                </p>
                <div className="flex items-center gap-2 text-banking-blue">
                  <Link href="/chat" className="inline-flex items-center hover:underline">
                    Chat with our support team <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 border-l-4 border-banking-blue hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Building2 className="h-10 w-10 text-banking-blue mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Established 2015</h3>
                      <p className="text-banking-darkGray">Founded with a vision to revolutionize banking services</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 border-l-4 border-banking-green hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Users className="h-10 w-10 text-banking-green mb-4" />
                      <h3 className="text-xl font-semibold mb-2">2M+ Users</h3>
                      <p className="text-banking-darkGray">Trusted by millions of customers worldwide</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 border-l-4 border-banking-red hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Shield className="h-10 w-10 text-banking-red mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
                      <p className="text-banking-darkGray">Advanced encryption and security protocols</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 border-l-4 border-banking-lightBlue hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Trophy className="h-10 w-10 text-banking-lightBlue mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Award-Winning</h3>
                      <p className="text-banking-darkGray">Recognized for innovation in fintech</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-banking-darkBlue mb-4">Our Values</h2>
              <p className="text-banking-darkGray">The principles that guide everything we do at BuPay</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:bg-banking-background transition-colors">
                <div className="bg-banking-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-banking-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-banking-darkGray">We prioritize the security of your financial data with industry-leading protection measures.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-banking-background transition-colors">
                <div className="bg-banking-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-banking-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-banking-darkGray">We believe in clear, honest communication with no hidden fees or unexpected charges.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-banking-background transition-colors">
                <div className="bg-banking-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-banking-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Responsiveness</h3>
                <p className="text-banking-darkGray">We're committed to providing timely support and addressing your concerns promptly.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Us Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-banking-blue/5 to-banking-lightBlue/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-banking-darkBlue mb-4">Contact Us</h2>
              <p className="text-banking-darkGray">Have questions or feedback? We're here to help!</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-banking-blue text-white p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                      <p className="text-banking-darkGray">123 Banking Street, Financial District, City, 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-banking-blue text-white p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                      <p className="text-banking-darkGray">+1 (555) 123-4567</p>
                      <p className="text-sm text-banking-gray">Mon - Fri, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-banking-blue text-white p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                      <p className="text-banking-darkGray">support@bupay.com</p>
                      <p className="text-sm text-banking-gray">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="p-8 shadow-md">
                  <CardContent className="p-0">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please provide details about your inquiry..." 
                          className="min-h-[150px]"
                        />
                      </div>
                      
                      <Button className="w-full md:w-auto">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Hooter />
    </div>
  );
};

export default AboutContact;
