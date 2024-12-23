import React from 'react';
import { useParams } from 'react-router-dom';
import { PLAYLISTS } from '../config/playlists';
import TrackList from '../components/TrackList';
import { Play } from 'lucide-react';
import { useAudioContext } from '../contexts/AudioContext';

export default function Playlist() {
  const { id } = useParams();
  const { play, currentSong } = useAudioContext();
  const playlist = id ? PLAYLISTS[id] : null;

  if (!playlist) {
    return (
      <div className="h-full bg-gradient-to-b from-christmas-green to-black overflow-y-auto p-8">
        <h1 className="text-4xl font-bold text-christmas-gold">Playlist not found</h1>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-christmas-green to-black overflow-y-auto">
      <div className="p-8 pb-32">
        <div className="flex items-end gap-6 mb-8">
          <div className="grid grid-cols-2 gap-1 w-48 h-48 bg-christmas-green-dark rounded-lg overflow-hidden">
            {playlist.songs.slice(0, 4).map(song => (
              <div key={song.id} className="aspect-square relative">
                <video
                  src={`https://res.cloudinary.com/di8qwjmch/video/upload/${song.cloudinaryUrl}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm text-christmas-gold uppercase mb-2">Playlist</p>
            <h1 className="text-5xl font-bold text-white mb-4">{playlist.name}</h1>
            <p className="text-white/70">{playlist.description}</p>
            <button 
              onClick={() => playlist.songs[0] && play(playlist.songs[0])}
              className="mt-6 bg-christmas-red hover:bg-christmas-red-dark text-white rounded-full p-4 flex items-center justify-center transition-all transform hover:scale-105"
            >
              <Play size={24} />
            </button>
          </div>
        </div>

        <TrackList 
          songs={playlist.songs} 
          onPlay={play} 
          currentSong={currentSong} 
        />
      </div>
    </div>
  );
}