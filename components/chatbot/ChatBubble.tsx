
import React from 'react';
import { Message } from '@/data/chatMessages';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: Message;
  isLastMessage: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isLastMessage }) => {
  const isBot = message.sender === 'bot';
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit'
  });

  // Format message content to handle newlines
  const formattedContent = message.content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < message.content.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div 
      className={cn(
        "chat-bubble-animation flex w-full mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
      style={{
        animationDelay: `${isLastMessage ? '0.1s' : '0s'}`
      }}
    >
      <div className={cn(
        "flex max-w-[80%] md:max-w-[70%]",
        isBot ? "flex-row" : "flex-row-reverse"
      )}>
        <div className={cn(
          "flex items-start justify-center w-8 h-8 rounded-full mt-1",
          isBot ? "bg-banking-blue text-white mr-2" : "bg-banking-gray text-white ml-2"
        )}>
          {isBot ? (
            <Bot className="w-4 h-4 mt-2" />
          ) : (
            <User className="w-4 h-4 mt-2" />
          )}
        </div>
        
        <div className="flex flex-col">
          <div className={cn(
            "px-4 py-3 rounded-2xl",
            isBot 
              ? "bg-white border border-gray-100 text-banking-darkGray rounded-tl-none" 
              : "bg-banking-blue text-white rounded-tr-none"
          )}>
            <p className="text-sm">{formattedContent}</p>
          </div>
          <span className={cn(
            "text-xs mt-1 text-banking-neutral",
            isBot ? "text-left" : "text-right"
          )}>
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
