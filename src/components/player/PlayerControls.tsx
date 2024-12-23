import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, BellRing } from 'lucide-react';
import { PlayerButton } from './PlayerButton';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function PlayerControls({ isPlaying, onPlayPause, onNext, onPrevious }: PlayerControlsProps) {
  return (
    <div className="flex items-center gap-6">
      <PlayerButton Icon={Shuffle} size={18} />
      <PlayerButton Icon={SkipBack} size={20} onClick={onPrevious} />
      <PlayerButton 
        Icon={isPlaying ? Pause : Play}
        size={24}
        onClick={onPlayPause}
        variant="primary"
      />
      <PlayerButton Icon={SkipForward} size={20} onClick={onNext} />
      <PlayerButton Icon={Repeat} size={18} />
      <PlayerButton Icon={BellRing} size={18} className="animate-jingle" />
    </div>
  );
}