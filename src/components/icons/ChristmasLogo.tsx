import React from 'react';
import { Gift, Music, Star } from 'lucide-react';

export function ChristmasLogo() {
  return (
    <div className="relative flex items-center">
      {/* Animated stars */}
      <Star className="absolute -top-2 -left-1 w-4 h-4 text-christmas-gold animate-twinkle" />
      <Star className="absolute -bottom-1 -right-2 w-3 h-3 text-christmas-gold animate-twinkle delay-300" />
      
      {/* Main logo with jingle animation */}
      <div className="relative animate-jingle">
        <Gift className="w-8 h-8 text-christmas-red" />
        <Music className="absolute -top-1 -right-1 w-4 h-4 text-christmas-gold" />
      </div>
    </div>
  );
}