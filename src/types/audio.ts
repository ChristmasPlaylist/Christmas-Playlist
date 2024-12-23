import { RefObject } from 'react';
import { Song } from './music';

export interface AudioHookProps {
  audioRef: RefObject<HTMLAudioElement>;
  setProgress: (progress: number) => void;
}

export interface AudioControlsProps {
  audioRef: RefObject<HTMLAudioElement>;
  currentSong: Song | null;
  setCurrentSong: (song: Song | null) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}