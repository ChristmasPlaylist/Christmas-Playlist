import { useState, useRef, useCallback, useEffect } from 'react';
import { Song } from '../types/music';
import { useAudioEvents } from './useAudioEvents';
import { useAudioControls } from './useAudioControls';

interface UseAudioPlayerProps {
  onError?: (message: string) => void;
  onDurationChange?: (duration: number) => void;
}

export function useAudioPlayer({ onError, onDurationChange }: UseAudioPlayerProps = {}) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleError = useCallback((message: string) => {
    onError?.(message);
    setIsPlaying(false);
  }, [onError]);

  const { handleTimeUpdate, handleLoadedMetadata, handleDurationChange } = useAudioEvents({
    audioRef,
    setProgress
  });

  const { play, pause, togglePlay } = useAudioControls({
    audioRef,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    onError: handleError
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleDurationUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      onDurationChange?.(customEvent.detail);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('durationchange', handleDurationUpdate);
    
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('durationchange', handleDurationUpdate);
    };
  }, [handleTimeUpdate, handleLoadedMetadata, handleDurationChange, onDurationChange]);

  return {
    audioRef,
    currentSong,
    isPlaying,
    progress,
    play,
    pause,
    togglePlay,
    updateProgress: setProgress
  };
}