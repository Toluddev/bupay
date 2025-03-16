
import React from 'react';
import { X, Maximize2, Minimize2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  isExpanded, 
  onToggleExpand, 
  onClose 
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-banking-blue text-white rounded-t-lg">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-banking-blue" />
        </div>
        <div>
          <h3 className="font-medium">Bank Support</h3>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
            <span className="text-xs opacity-90">Online</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600 h-8 w-8"
          onClick={onToggleExpand}
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600 h-8 w-8"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
