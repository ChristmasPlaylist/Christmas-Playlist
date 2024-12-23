import { Playlist } from '../types/music';
import { classicChristmas, modernChristmas, christmasJazz } from '../data/musicLibrary';

export const PLAYLISTS: Record<string, Playlist> = {
  classics: {
    id: 'classics',
    name: 'Classic Christmas',
    description: 'Timeless holiday favorites that bring the Christmas spirit',
    songs: classicChristmas
  },
  modern: {
    id: 'modern',
    name: 'Modern Christmas',
    description: 'Contemporary takes on holiday music',
    songs: modernChristmas
  },
  jazz: {
    id: 'jazz',
    name: 'Christmas Jazz',
    description: 'Smooth jazz renditions of Christmas classics',
    songs: christmasJazz
  }
};