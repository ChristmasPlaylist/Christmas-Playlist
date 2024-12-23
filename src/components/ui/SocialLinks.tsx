import React from 'react';
import { Github, Twitter, Music, Gift } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-christmas-green-dark/50 to-black/30 backdrop-blur-sm">
      {/* Decorative ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      
      {/* Gift bow decoration */}
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
      
      <div className="relative flex justify-center gap-8 mt-2">
        {/* Twitter/X Gift Box */}
        <a
          href="https://x.com/SQUIDCOINX"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* Gift box glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Gift box */}
          <div className="relative p-3 rounded-lg bg-christmas-red border-2 border-christmas-gold transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            {/* Ribbon cross */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-christmas-gold/30" />
              <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 bg-christmas-gold/30" />
            </div>
            
            <Twitter 
              size={28} 
              className="relative z-10 text-white transition-colors duration-300 group-hover:text-christmas-gold" 
            />
          </div>
        </a>

        {/* GitHub Gift Box */}
        <a
          href="https://github.com/ChristmasPlaylist/Christmas-Playlist"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* Gift box glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-christmas-gold via-christmas-green to-christmas-gold rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Gift box */}
          <div className="relative p-3 rounded-lg bg-christmas-green border-2 border-christmas-gold transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
            {/* Ribbon cross */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-christmas-gold/30" />
              <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 bg-christmas-gold/30" />
            </div>
            
            <Github 
              size={28} 
              className="relative z-10 text-white transition-colors duration-300 group-hover:text-christmas-gold" 
            />
          </div>
        </a>
      </div>
    </div>
  );
}