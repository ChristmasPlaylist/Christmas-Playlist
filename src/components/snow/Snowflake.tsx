import React from 'react';

interface SnowflakeProps {
  delay: number;
  duration: number;
  size: number;
  left: number;
}

export function Snowflake({ delay, duration, size, left }: SnowflakeProps) {
  return (
    <div
      className="absolute top-0 text-white/80 animate-snowfall pointer-events-none"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      ❄
    </div>
  );
}