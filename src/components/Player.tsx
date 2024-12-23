import React, { useCallback, useState } from 'react';
import { PlayerControls } from './player/PlayerControls';
import { ProgressBar } from './player/ProgressBar';
import { VolumeControl } from './player/VolumeControl';
import { useAudioContext } from '../contexts/AudioContext';
import { getCloudinaryVideoUrl } from '../utils/cloudinary';

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
        {/* Now playing */}
        <div className="w-1/4 flex items-center gap-4">
          <div className="w-16 h-16 relative overflow-hidden rounded-lg shadow-lg group">
            <video
              src={getCloudinaryVideoUrl(currentSong.cloudinaryUrl)}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div>
            <div className="text-christmas-gold text-sm font-medium hover:text-christmas-gold-light transition-colors cursor-pointer">
              {currentSong.title}
            </div>
            <div className="text-white/70 text-xs hover:text-white transition-colors cursor-pointer">
              {currentSong.artist}
            </div>
          </div>
        </div>

        {/* Center controls */}
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

        {/* Volume control */}
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