import React, { useState } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export function VolumeControl({ volume, onVolumeChange }: VolumeControlProps) {
  const [previousVolume, setPreviousVolume] = useState(volume);

  const handleVolumeClick = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      onVolumeChange(0);
    } else {
      onVolumeChange(previousVolume);
    }
  };

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={handleVolumeClick}
        className="text-christmas-gold hover:text-christmas-gold-light transition-colors"
      >
        <VolumeIcon size={20} />
      </button>
      <div className="w-24 h-2 group relative cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const position = (e.clientX - rect.left) / rect.width;
          onVolumeChange(Math.min(Math.max(position, 0), 1));
        }}
      >
        {/* Track background */}
        <div className="absolute inset-0 rounded-full bg-white/20 transform group-hover:scale-y-150 transition-transform" />
        
        {/* Volume fill */}
        <div 
          className="absolute h-full rounded-full overflow-hidden transition-all duration-300 group-hover:scale-y-150"
          style={{ width: `${volume * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green" />
        </div>

        {/* Hover indicator */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-christmas-gold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `${volume * 100}%` }}
        />
      </div>
    </div>
  );
}