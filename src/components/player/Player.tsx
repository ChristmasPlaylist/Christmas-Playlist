import React, { useCallback, useState } from 'react';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { useAudioContext } from '../../contexts/AudioContext';

export default function Player() {
  const { currentSong, isPlaying, progress, togglePlay } = useAudioContext();
  const [volume, setVolume] = useState(0.7);
  
  const handlePlayPause = useCallback(async () => {
    try {
      await togglePlay();
    } catch (error) {
      console.error('Playback control failed:', error);
    }
  }, [togglePlay]);

  if (!currentSong) return null;

  return (
    <div className="bg-christmas-green border-t border-christmas-green-light h-24 px-4 relative">
      {/* Christmas lights decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green animate-shimmer" />
      
      <div className="flex items-center justify-between h-full">
        <NowPlaying song={currentSong} />

        <div className="flex flex-col items-center w-2/4">
          <PlayerControls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={() => {}}
            onPrevious={() => {}}
          />
          <div className="w-full mt-2">
            <ProgressBar
              currentSong={currentSong}
              progress={progress}
              onSeek={() => {}}
            />
          </div>
        </div>

        <div className="w-1/4 flex items-center justify-end">
          <VolumeControl
            volume={volume}
            onVolumeChange={setVolume}
          />
        </div>
      </div>
    </div>
  );
}