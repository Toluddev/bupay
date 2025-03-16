
import ChatBot from '@/components/chatbot/page';
import React from 'react';


const ChatPage = () => {
  return (
    <div className="min-h-screen bg-banking-background flex flex-col">
      <header className="bg-white border-b border-gray-100 py-5 px-6">
        <h1 className="text-2xl font-semibold text-banking-darkGray">Chat Support</h1>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-medium text-banking-darkGray mb-4">Welcome to Bank Support</h2>
            <p className="text-banking-gray mb-6">
              Our virtual assistant is here to help with your banking queries. Try asking about:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-banking-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-banking-blue text-sm font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-banking-darkGray">Account Information</h3>
                  <p className="text-sm text-banking-gray">Balance, transactions, and account details</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-banking-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-banking-blue text-sm font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-banking-darkGray">Transfers & Payments</h3>
                  <p className="text-sm text-banking-gray">Send money, pay bills, manage recipients</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-banking-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-banking-blue text-sm font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-banking-darkGray">Card Services</h3>
                  <p className="text-sm text-banking-gray">Manage cards, report issues, set limits</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-banking-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-banking-blue text-sm font-medium">4</span>
                </div>
                <div>
                  <h3 className="font-medium text-banking-darkGray">Security & Settings</h3>
                  <p className="text-sm text-banking-gray">Password reset, security questions, notifications</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-banking-neutral border-t border-gray-100 pt-5">
              For urgent matters or technical issues, please contact our customer service at <span className="text-banking-blue">1-800-123-4567</span> or email us at <span className="text-banking-blue">support@bankbuddy.com</span>
            </p>
          </div>
        </div>
      </main>
      
      <ChatBot />
    </div>
  );
};

export default ChatPage;
