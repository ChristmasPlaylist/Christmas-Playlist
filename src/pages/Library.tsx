import React from 'react';
import { PLAYLISTS } from '../config/playlists';
import { Play } from 'lucide-react';
import { useAudioContext } from '../contexts/AudioContext';

export default function Library() {
  const { play } = useAudioContext();

  return (
    <div className="h-full bg-gradient-to-b from-christmas-green to-black overflow-y-auto">
      <div className="p-8 pb-32">
        <h1 className="text-4xl font-bold text-christmas-gold mb-8">Your Library</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(PLAYLISTS).map(playlist => (
            <div key={playlist.id} className="bg-christmas-green-dark rounded-lg p-4 hover:bg-christmas-green transition-colors">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {playlist.songs.slice(0, 4).map(song => (
                  <div key={song.id} className="aspect-square relative rounded overflow-hidden">
                    <video
                      src={`https://res.cloudinary.com/di8qwjmch/video/upload/${song.cloudinaryUrl}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-christmas-gold font-semibold text-lg mb-1">{playlist.name}</h3>
              <p className="text-white/70 text-sm">
                {playlist.songs.length} songs • {Math.round(playlist.songs.reduce((acc, song) => acc + song.duration, 0) / 60)} mins
              </p>
              <button 
                onClick={() => play(playlist.songs[0])}
                className="mt-4 bg-christmas-red hover:bg-christmas-red-dark text-white rounded-full p-3 transition-colors"
              >
                <Play size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}