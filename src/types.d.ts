export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: Color;
  cover: string;
  artists: string[];
}

export type Color = {
  accent: string;
  dark: string;
};

export type Colors = {
  [key: string]: Color;
};

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export interface ApiResponse {
  playlist: Playlist;
  songs: Song[];
}
