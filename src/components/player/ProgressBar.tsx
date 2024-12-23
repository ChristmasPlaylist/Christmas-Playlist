import React, { useState } from 'react';
import { formatTime } from '../../utils/formatTime';
import { getCloudinaryVideoUrl } from '../../utils/cloudinary';
import { Song } from '../../types/music';
import { useAudioContext } from '../../contexts/AudioContext';

interface ProgressBarProps {
  currentSong: Song;
  progress: number;
  onSeek: (time: number) => void;
}

export function ProgressBar({ currentSong, progress, onSeek }: ProgressBarProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [previewPosition, setPreviewPosition] = useState(0);
  const { duration } = useAudioContext();
  
  // Use actual audio duration, fallback to song metadata duration if not available
  const actualDuration = duration || currentSong.duration;
  const progressPercentage = (progress / actualDuration) * 100;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setPreviewPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    onSeek(position * actualDuration);
  };

  return (
    <div className="w-full flex items-center gap-2">
      <span className="text-xs text-christmas-gold w-12 text-right">
        {formatTime(progress)}
      </span>
      <div 
        className="flex-1 h-2 group relative cursor-pointer"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* Track background */}
        <div className="absolute inset-0 rounded-full bg-white/20 transform group-hover:scale-y-150 transition-transform" />
        
        {/* Progress fill */}
        <div 
          className="absolute h-full rounded-full overflow-hidden transition-all duration-300 group-hover:scale-y-150"
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green animate-shimmer" />
        </div>

        {/* Hover indicator */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-christmas-gold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `${progressPercentage}%` }}
        />
        
        {/* Preview popup */}
        {showPreview && (
          <div 
            className="absolute -top-32 transform -translate-x-1/2 w-48 rounded-lg overflow-hidden shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-christmas-green-dark"
            style={{ left: `${previewPosition}%` }}
          >
            <video
              src={getCloudinaryVideoUrl(currentSong.cloudinaryUrl)}
              className="w-full aspect-video object-cover"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="text-christmas-gold text-xs font-medium">{currentSong.title}</div>
              <div className="text-white/70 text-xs">
                {formatTime(previewPosition * actualDuration / 100)}
              </div>
            </div>
          </div>
        )}
      </div>
      <span className="text-xs text-christmas-gold w-12">
        {formatTime(actualDuration)}
      </span>
    </div>
  );
}