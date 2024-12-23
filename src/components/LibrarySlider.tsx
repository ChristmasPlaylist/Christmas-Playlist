import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Song } from '../types/music';
import { getCloudinaryVideoUrl } from '../utils/cloudinary';

interface LibrarySliderProps {
  songs: Song[];
  onPlay: (song: Song) => void;
  currentSong: Song | null;
}

export default function LibrarySlider({ songs, onPlay, currentSong }: LibrarySliderProps) {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {songs.map((song) => (
          <div
            key={song.id}
            className="relative flex-shrink-0 w-60 aspect-square rounded-lg overflow-hidden cursor-pointer group/item"
            onClick={() => onPlay(song)}
          >
            <video
              src={getCloudinaryVideoUrl(song.cloudinaryUrl)}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform group-hover/item:scale-105"
              muted
              loop
              playsInline
              onMouseEnter={(e) => {
                // Only play video preview if this isn't the current playing song
                if (currentSong?.id !== song.id) {
                  e.currentTarget.play().catch(() => {});
                }
              }}
              onMouseLeave={(e) => {
                if (currentSong?.id !== song.id) {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-christmas-gold font-semibold">{song.title}</h3>
              <p className="text-white/70 text-sm">{song.artist}</p>
            </div>
            {currentSong?.id === song.id && (
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 rounded-full bg-christmas-gold animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="text-christmas-gold" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="text-christmas-gold" />
      </button>
    </div>
  );
}