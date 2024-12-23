import { useState, useEffect } from 'react';
import { Song } from '../types/music';
import { getAudioUrl } from '../utils/audio';

export function useAudioDuration(song: Song) {
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const audio = new Audio();
    audio.crossOrigin = 'anonymous';

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.src = getAudioUrl(song.cloudinaryUrl);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.src = '';
    };
  }, [song.cloudinaryUrl]);

  return duration;
}