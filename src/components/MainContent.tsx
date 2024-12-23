import React from 'react';
import { Play } from 'lucide-react';
import TrackList from './TrackList';
import LibrarySlider from './LibrarySlider';
import NowPlayingVisual from './NowPlayingVisual';
import { musicLibrary } from '../data/musicLibrary';
import { Song } from '../types/music';
import { formatTime } from '../utils/formatTime';
import { SITE_CONFIG } from '../config/site';

interface MainContentProps {
  onPlay: (song: Song) => void;
  currentSong: Song | null;
  isPlaying: boolean;
}

export default function MainContent({ onPlay, currentSong, isPlaying }: MainContentProps) {
  const totalDuration = musicLibrary.reduce((acc, song) => acc + song.duration, 0);

  const handlePlayAll = () => {
    if (musicLibrary.length > 0) {
      onPlay(musicLibrary[0]);
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-christmas-green to-black scroll-area">
      <div className="p-8 pb-32">
        <header className="mb-8 flex items-end gap-6">
          <div className="w-56 h-56 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 bg-christmas-green-dark">
            <img
              src="https://images.unsplash.com/photo-1543589077-47d81606c1bf"
              alt="Christmas Playlist Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm text-christmas-gold uppercase mb-2">Playlist</p>
            <h1 className="text-6xl font-bold text-white mb-4">{SITE_CONFIG.name}</h1>
            <p className="text-gray-300">
              Your festive music collection • {musicLibrary.length} songs, {formatTime(totalDuration)}
            </p>
            <button
              onClick={handlePlayAll}
              className="mt-6 bg-christmas-red hover:bg-christmas-red-dark text-white font-semibold rounded-full p-4 flex items-center justify-center transition-all transform hover:scale-105 w-14 h-14"
            >
              <Play size={24} />
            </button>
          </div>
        </header>

        <NowPlayingVisual currentSong={currentSong} isPlaying={isPlaying} />
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-christmas-gold mb-6">Featured Holiday Music</h2>
          <LibrarySlider songs={musicLibrary} onPlay={onPlay} currentSong={currentSong} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-christmas-gold mb-6">Christmas Collection</h2>
          <TrackList songs={musicLibrary} onPlay={onPlay} currentSong={currentSong} />
        </section>
      </div>
    </div>
  );
}