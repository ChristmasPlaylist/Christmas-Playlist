import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from '../MainContent';
import Search from '../../pages/Search';
import Library from '../../pages/Library';
import LikedSongs from '../../pages/LikedSongs';
import CreatePlaylist from '../../pages/CreatePlaylist';
import Playlist from '../../pages/Playlist';
import Docs from '../../pages/Docs';
import { useAudioContext } from '../../contexts/AudioContext';

export function AppRoutes() {
  const { play, currentSong, isPlaying } = useAudioContext();

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <MainContent 
            onPlay={play} 
            currentSong={currentSong} 
            isPlaying={isPlaying}
          />
        } 
      />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      <Route path="/liked-songs" element={<LikedSongs />} />
      <Route path="/create-playlist" element={<CreatePlaylist />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}