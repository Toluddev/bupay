
import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize the textarea based on content
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = '40px';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative border-t border-gray-100 py-3 px-4 bg-white rounded-b-lg shadow-sm"
    >
      <div className="flex items-end gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-banking-neutral rounded-full h-9 w-9 flex-shrink-0"
          aria-label="Attach file"
          disabled={disabled}
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <div className="relative flex-grow">
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full resize-none max-h-24 pl-3 pr-10 py-2.5 bg-gray-50 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-banking-blue focus:bg-white disabled:opacity-70 transition-all"
            rows={1}
            disabled={disabled}
          />
        </div>
        
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-banking-neutral rounded-full h-9 w-9 flex-shrink-0"
          aria-label="Voice input"
          disabled={disabled}
        >
          <Mic className="h-5 w-5" />
        </Button>
        
        <Button
          type="submit"
          size="icon"
          className={`rounded-full h-10 w-10 bg-banking-blue hover:bg-banking-darkBlue transition-colors ${message.trim() ? 'opacity-100' : 'opacity-80'}`}
          aria-label="Send message"
          disabled={!message.trim() || disabled}
        >
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
