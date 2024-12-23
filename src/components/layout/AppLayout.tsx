import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';
import { ChristmasBackground } from '../ui/ChristmasBackground';
import { useAudioContext } from '../../contexts/AudioContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { audioRef } = useAudioContext();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-christmas-green to-black text-white overflow-hidden relative">
      <ChristmasBackground />
      <audio 
        ref={audioRef}
        preload="metadata"
        crossOrigin="anonymous"
        playsInline
        webkit-playsinline="true"
        onLoadedMetadata={(e) => {
          const audio = e.currentTarget;
          if (audio.duration && !isNaN(audio.duration)) {
            audio.dispatchEvent(new CustomEvent('durationchange', { detail: audio.duration }));
          }
        }}
      />
      <div className="flex-1 flex overflow-hidden relative z-10">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
      <Player />
    </div>
  );
}