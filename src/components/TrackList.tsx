import React from 'react';
import { Song } from '../types/music';
import { Clock } from 'lucide-react';
import { formatTime } from '../utils/formatTime';
import { getCloudinaryVideoUrl } from '../utils/cloudinary';
import { useAudioDuration } from '../hooks/useAudioDuration';

interface TrackItemProps {
  song: Song;
  index: number;
  isPlaying: boolean;
  onPlay: (song: Song) => void;
}

function TrackItem({ song, index, isPlaying, onPlay }: TrackItemProps) {
  const duration = useAudioDuration(song);

  return (
    <tr 
      className={`hover:bg-christmas-green-dark group cursor-pointer
        ${isPlaying ? 'text-christmas-gold' : ''}`}
      onClick={() => onPlay(song)}
    >
      <td className="py-4">{index + 1}</td>
      <td className="py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 relative overflow-hidden rounded">
            <video
              src={getCloudinaryVideoUrl(song.cloudinaryUrl)}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
            />
          </div>
          <div>
            <div className={isPlaying ? 'text-christmas-gold' : 'text-white'}>
              {song.title}
            </div>
            <div className="text-sm text-white/70">{song.artist}</div>
          </div>
        </div>
      </td>
      <td className="py-4">{song.artist}</td>
      <td className="py-4">{formatTime(duration || song.duration)}</td>
    </tr>
  );
}

interface TrackListProps {
  songs: Song[];
  onPlay: (song: Song) => void;
  currentSong: Song | null;
}

export default function TrackList({ songs, onPlay, currentSong }: TrackListProps) {
  return (
    <table className="w-full text-gray-300 text-sm">
      <thead>
        <tr className="border-b border-christmas-green-light text-christmas-gold/70">
          <th className="w-12 text-left pb-4">#</th>
          <th className="text-left pb-4">Title</th>
          <th className="text-left pb-4">Artist</th>
          <th className="w-12 pb-4"><Clock size={16} /></th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <TrackItem
            key={song.id}
            song={song}
            index={index}
            isPlaying={currentSong?.id === song.id}
            onPlay={onPlay}
          />
        ))}
      </tbody>
    </table>
  );
}