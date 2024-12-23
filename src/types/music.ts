export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cloudinaryUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  songs: Song[];
}