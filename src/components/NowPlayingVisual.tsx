import React from 'react';
import { getCloudinaryVideoUrl } from '../utils/cloudinary';
import { Song } from '../types/music';

interface NowPlayingVisualProps {
  currentSong: Song | null;
  isPlaying: boolean;
}

export default function NowPlayingVisual({ currentSong, isPlaying }: NowPlayingVisualProps) {
  if (!currentSong) return null;

  return (
    <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <video
        key={currentSong.cloudinaryUrl}
        src={getCloudinaryVideoUrl(currentSong.cloudinaryUrl)}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-4">
          <div className={`w-3 h-3 rounded-full bg-green-500 ${isPlaying ? 'animate-pulse' : ''}`} />
          <div>
            <h3 className="text-white text-2xl font-bold">{currentSong.title}</h3>
            <p className="text-gray-300">{currentSong.artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
}