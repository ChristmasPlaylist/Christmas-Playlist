import React from 'react';
import { Gift, Music } from 'lucide-react';

export function GiftBow() {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
      <div className="relative">
        <Gift 
          size={24} 
          className="text-christmas-red animate-bounce-subtle" 
        />
        <div className="absolute -top-1 -right-1">
          <Music 
            size={16} 
            className="text-christmas-gold animate-jingle" 
          />
        </div>
      </div>
    </div>
  );
}