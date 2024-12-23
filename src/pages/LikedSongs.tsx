import React from 'react';
import { musicLibrary } from '../data/musicLibrary';
import TrackList from '../components/TrackList';
import { Heart } from 'lucide-react';

export default function LikedSongs() {
  // Simulate liked songs with first 5 songs from library
  const likedSongs = musicLibrary.slice(0, 5);

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-400 rounded-lg flex items-center justify-center">
          <Heart className="w-8 h-8 text-white" fill="white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Liked Songs</h1>
          <p className="text-gray-300">{likedSongs.length} songs</p>
        </div>
      </div>

      <TrackList 
        songs={likedSongs} 
        onPlay={() => {}} 
        currentSong={null} 
      />
    </div>
  );
}