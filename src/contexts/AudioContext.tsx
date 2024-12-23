import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { Song } from '../types/music';
import { ErrorToast } from '../components/ui/ErrorToast';

interface AudioContextType {
  audioRef: React.RefObject<HTMLAudioElement>;
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  play: (song: Song) => Promise<void>;
  togglePlay: () => void;
  updateProgress: (progress: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const errorTimeoutRef = useRef<number>();
  
  const audioPlayer = useAudioPlayer({
    onError: (message) => {
      setError(message);
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
      errorTimeoutRef.current = window.setTimeout(() => {
        setError(null);
      }, 5000);
    },
    onDurationChange: (newDuration) => {
      setDuration(newDuration);
    }
  });

  return (
    <AudioContext.Provider value={{ ...audioPlayer, duration }}>
      {error && <ErrorToast message={error} />}
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioContext() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioContext must be used within an AudioProvider');
  }
  return context;
}