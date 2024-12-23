import React from 'react';
import { Song } from '../../types/music';
import { getCloudinaryVideoUrl } from '../../utils/cloudinary';

interface NowPlayingProps {
  song: Song;
}

export function NowPlaying({ song }: NowPlayingProps) {
  return (
    <div className="w-1/4 flex items-center gap-4">
      <div className="w-16 h-16 relative overflow-hidden rounded-lg shadow-lg group">
        <video
          src={getCloudinaryVideoUrl(song.cloudinaryUrl)}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform"
          muted
          loop
          autoPlay
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div>
        <div className="text-christmas-gold text-sm font-medium hover:text-christmas-gold-light transition-colors cursor-pointer">
          {song.title}
        </div>
        <div className="text-white/70 text-xs hover:text-white transition-colors cursor-pointer">
          {song.artist}
        </div>
      </div>
    </div>
  );
}