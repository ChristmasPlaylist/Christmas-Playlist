import React from 'react';
import { Snowflake } from './Snowflake';

export function SnowEffect() {
  // Generate random snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 8 + Math.random() * 12,
    left: Math.random() * 100
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map(flake => (
        <Snowflake
          key={flake.id}
          delay={flake.delay}
          duration={flake.duration}
          size={flake.size}
          left={flake.left}
        />
      ))}
    </div>
  );
}