import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PlayerButtonProps {
  Icon: LucideIcon;
  size?: number;
  variant?: 'default' | 'primary';
  onClick?: () => void;
  className?: string;
}

export function PlayerButton({ 
  Icon, 
  size = 24, 
  variant = 'default',
  onClick,
  className = ''
}: PlayerButtonProps) {
  if (variant === 'primary') {
    return (
      <button 
        className="bg-christmas-red hover:bg-christmas-red-dark rounded-full p-3 transition transform hover:scale-110 group shadow-lg hover:shadow-christmas-red/50"
        onClick={onClick}
      >
        <Icon 
          size={size} 
          className="text-white group-hover:text-christmas-gold" 
        />
      </button>
    );
  }

  return (
    <button 
      className={`text-christmas-gold/70 hover:text-christmas-gold transition transform hover:scale-110 ${className}`}
      onClick={onClick}
    >
      <Icon size={size} />
    </button>
  );
}