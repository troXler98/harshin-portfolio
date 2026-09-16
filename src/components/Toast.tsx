import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-foreground text-background text-xs font-medium shadow-xl">
        <Check className="size-3.5 text-emerald-400" />
        <span>{message}</span>
      </div>
    </div>
  );
};
