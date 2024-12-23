import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { musicLibrary } from '../data/musicLibrary';
import TrackList from '../components/TrackList';
import { useAudioContext } from '../contexts/AudioContext';

export default function Search() {
  const [query, setQuery] = useState('');
  const { play, currentSong } = useAudioContext();
  
  const filteredSongs = musicLibrary.filter(song => 
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="h-full bg-gradient-to-b from-christmas-green to-black overflow-y-auto">
      <div className="p-8 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-christmas-gold" />
            <input
              type="text"
              placeholder="Search for songs or artists"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-christmas-green-dark rounded-full text-white placeholder:text-christmas-gold/50 focus:outline-none focus:ring-2 focus:ring-christmas-gold/20"
            />
          </div>

          {query && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-christmas-gold mb-4">Search Results</h2>
              <TrackList 
                songs={filteredSongs} 
                onPlay={play} 
                currentSong={currentSong} 
              />
            </div>
          )}

          {!query && (
            <div>
              <h2 className="text-2xl font-bold text-christmas-gold mb-6">Browse All</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {musicLibrary.map(song => (
                  <div 
                    key={song.id} 
                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => play(song)}
                  >
                    <video
                      src={`https://res.cloudinary.com/di8qwjmch/video/upload/${song.cloudinaryUrl}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-christmas-gold font-semibold">{song.title}</h3>
                      <p className="text-white/70 text-sm">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}