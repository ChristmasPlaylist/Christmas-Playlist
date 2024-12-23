import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { GiftBox } from './GiftBox';
import { GiftBow } from './GiftBow';

export function SocialLinks() {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-christmas-green-dark/50 to-black/30 backdrop-blur-sm">
      {/* Decorative ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-red animate-shimmer" />
      
      <GiftBow />
      
      <div className="relative flex justify-center gap-8 mt-2">
        <GiftBox
          href="https://x.com/ChristmasLofi"
          Icon={Twitter}
          color="red"
        />
        <GiftBox
          href="https://github.com/ChristmasPlaylist/Christmas-Playlist"
          Icon={Github}
          color="green"
        />
      </div>
    </div>
  );
}