'use client'
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';
import { initialMessages, Message, generateBotResponse } from '@/data/chatMessages';
import { cn } from '@/lib/utils';

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle bot responses with typing effect
  const handleBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate typing delay (between 1-2.5 seconds)
    const typingDelay = Math.floor(Math.random() * 1500) + 1000;
    
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage);
      const newBotMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleSendMessage = (content: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Generate bot response
    handleBotResponse(content);
  };

  // Auto-scroll when messages change or typing status changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Show the initial quick actions only when first loading and there's only the intro message
  const showQuickActions = messages.length === 1;

  return (
    <div className={cn("fixed bottom-4 right-4 z-50", className)}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-banking-blue hover:bg-banking-darkBlue shadow-lg flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={cn(
            "flex flex-col bg-gray-50 rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "w-[420px] h-[600px]" : "w-[350px] h-[500px]"
          )}
        >
          {/* Chat Header */}
          <ChatHeader 
            isExpanded={isExpanded} 
            onToggleExpand={toggleExpand} 
            onClose={toggleChat} 
          />
          
          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 chat-container"
          >
            {messages.map((message, index) => (
              <ChatBubble 
                key={message.id}
                message={message}
                isLastMessage={index === messages.length - 1}
              />
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex w-full mb-4 justify-start chat-bubble-animation">
                <div className="flex max-w-[70%] flex-row">
                  <div className="bg-banking-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="chat-typing-indicator p-2">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick actions after intro message */}
            {showQuickActions && <QuickActions onActionClick={handleSendMessage} />}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
