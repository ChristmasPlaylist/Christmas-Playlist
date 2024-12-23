import { useCallback, useRef } from 'react';
import { Song } from '../types/music';
import { getAudioUrl, preloadAudio } from '../utils/audio';
import { AudioControlsProps } from '../types/audio';

export function useAudioControls({
  audioRef,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying
}: AudioControlsProps) {
  const loadingRef = useRef(false);

  const play = useCallback(async (song: Song) => {
    if (!audioRef.current || loadingRef.current) return;

    try {
      loadingRef.current = true;
      
      // If switching songs or starting new one
      if (!currentSong || currentSong.id !== song.id) {
        const audioUrl = getAudioUrl(song.cloudinaryUrl);
        
        try {
          await preloadAudio(audioUrl);
        } catch (error) {
          console.error('Audio preload failed:', error);
          throw new Error('Unable to load audio');
        }
        
        audioRef.current.src = audioUrl;
        setCurrentSong(song);
      }

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Playback failed:', error);
        throw new Error('Unable to play audio');
      }
    } catch (error) {
      setIsPlaying(false);
      setCurrentSong(null);
      throw error;
    } finally {
      loadingRef.current = false;
    }
  }, [audioRef, currentSong, setCurrentSong, setIsPlaying]);

  const pause = useCallback(() => {
    if (!audioRef.current || loadingRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, [audioRef, setIsPlaying]);

  const togglePlay = useCallback(() => {
    if (!currentSong || loadingRef.current) return;
    if (isPlaying) {
      pause();
    } else {
      play(currentSong).catch(error => {
        console.error('Toggle play failed:', error);
      });
    }
  }, [currentSong, isPlaying, play, pause]);

  return {
    play,
    pause,
    togglePlay
  };
}