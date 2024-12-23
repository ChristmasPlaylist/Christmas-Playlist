import React from 'react';

export function ChristmasBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-christmas-green-dark/50 to-black/50" />
      
      {/* Christmas lights effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green opacity-75 animate-twinkle" />
    </div>
  );
}