import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GiftBoxProps {
  href: string;
  Icon: LucideIcon;
  color: 'red' | 'green';
}

export function GiftBox({ href, Icon, color }: GiftBoxProps) {
  const bgColor = color === 'red' ? 'bg-christmas-red' : 'bg-christmas-green';
  const glowGradient = color === 'red' 
    ? 'from-christmas-red via-christmas-gold to-christmas-red'
    : 'from-christmas-gold via-christmas-green to-christmas-gold';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      {/* Gift box glow */}
      <div className={`absolute -inset-4 bg-gradient-to-r ${glowGradient} rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500`} />
      
      {/* Gift box */}
      <div className={`relative p-3 rounded-lg ${bgColor} border-2 border-christmas-gold transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        {/* Ribbon cross */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-christmas-gold/30" />
          <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 bg-christmas-gold/30" />
        </div>
        
        <Icon 
          size={28} 
          className="relative z-10 text-white transition-colors duration-300 group-hover:text-christmas-gold" 
        />
      </div>
    </a>
  );
}