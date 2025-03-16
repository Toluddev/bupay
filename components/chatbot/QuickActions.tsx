
import React from 'react';
import { quickActions } from '@/data/chatMessages';
import { cn } from '@/lib/utils';

interface QuickActionsProps {
  onActionClick: (message: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  return (
    <div className="my-4 mx-1 space-y-2 animate-fade-in">
      <p className="text-xs text-banking-neutral font-medium px-2 mb-2">SUGGESTED ACTIONS</p>
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionClick(action.message)}
            className={cn(
              "px-3 py-2 bg-white border border-gray-200 rounded-xl",
              "text-sm text-banking-darkGray font-medium",
              "hover:border-banking-blue hover:bg-blue-50",
              "transition-all duration-200 ease-in-out",
              "focus:outline-none focus:ring-2 focus:ring-banking-blue focus:ring-opacity-30"
            )}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
