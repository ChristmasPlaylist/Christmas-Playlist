import { useCallback } from 'react';
import { AudioHookProps } from '../types/audio';

export function useAudioEvents({ audioRef, setProgress }: AudioHookProps) {
  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    setProgress(currentTime);
  }, [audioRef, setProgress]);

  const handleLoadedMetadata = useCallback(() => {
    if (!audioRef.current) return;
    setProgress(0);
  }, [audioRef, setProgress]);

  const handleDurationChange = useCallback(() => {
    if (!audioRef.current) return;
    const duration = audioRef.current.duration;
    if (duration && !isNaN(duration)) {
      audioRef.current.dispatchEvent(new CustomEvent('durationchange', { detail: duration }));
    }
  }, [audioRef]);

  return {
    handleTimeUpdate,
    handleLoadedMetadata,
    handleDurationChange
  };
}