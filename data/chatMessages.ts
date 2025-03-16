
export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  }
  
  interface QuickAction {
    id: string;
    label: string;
    message: string;
  }
  
  export const initialMessages: Message[] = [
    {
      id: '1',
      content: "Hello! I'm your banking assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ];
  
  export const quickActions: QuickAction[] = [
    {
      id: 'balance',
      label: 'Check Balance',
      message: 'What is my current account balance?',
    },
    {
      id: 'transaction',
      label: 'Recent Transactions',
      message: 'Show me my recent transactions',
    },
    {
      id: 'transfer',
      label: 'Make a Transfer',
      message: 'I want to transfer money',
    },
    {
      id: 'support',
      label: 'Contact Support',
      message: 'Connect me with customer support',
    },
  ];
  
  export const botResponses: Record<string, string> = {
    'balance': "Your current total balance is $2,698.12. Your Chase Bank account has $2,588.12 and your other account has $110.00.",
    'transaction': "Here are your recent transactions:\n- Spotify: -$15.00 (Processing)\n- Alexa Doe: +$88.00 (Success)\n- Figma: -$18.99 (Processing)",
    'transfer': "To make a transfer, please specify the recipient, amount, and which account you'd like to transfer from. Would you like me to guide you through this process?",
    'support': "I'll connect you with a customer support agent. Our representatives are available 24/7. Would you prefer a call back, live chat, or email support?",
    'default': "I'm here to help with your banking needs. You can ask me about your account balance, recent transactions, making transfers, or any other banking questions you might have."
  };
  
  export const generateBotResponse = (message: string): string => {
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('balance')) {
      return botResponses.balance;
    } else if (lowercaseMessage.includes('transaction')) {
      return botResponses.transaction;
    } else if (lowercaseMessage.includes('transfer')) {
      return botResponses.transfer;
    } else if (lowercaseMessage.includes('support') || lowercaseMessage.includes('help')) {
      return botResponses.support;
    } else if (lowercaseMessage.includes('security') || lowercaseMessage.includes('password')) {
      return "Your security is our top priority. You can update your password or security settings from the Account Security section. Would you like me to guide you there?";
    } else if (lowercaseMessage.includes('card') || lowercaseMessage.includes('credit')) {
      return "I can help you with your card inquiries. You can check your card details, report a lost card, or request a new one. What specifically do you need assistance with?";
    } else if (lowercaseMessage.includes('loan') || lowercaseMessage.includes('mortgage')) {
      return "We offer various loan products including personal loans, mortgages, and auto loans. Would you like to check your existing loans or explore new loan options?";
    } else if (lowercaseMessage.includes('fee') || lowercaseMessage.includes('charge')) {
      return "Your account has no monthly maintenance fees. For other services like wire transfers or overdraft protection, fees may apply. Would you like to see our fee schedule?";
    } else if (lowercaseMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else if (lowercaseMessage.includes('bye') || lowercaseMessage.includes('goodbye')) {
      return "Thank you for chatting with us today. Have a great day! If you need any further assistance, feel free to reach out.";
    } else {
      return botResponses.default;
    }
  };
  