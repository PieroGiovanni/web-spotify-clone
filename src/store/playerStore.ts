import { create } from "zustand";
import type { Playlist, Song } from "../types";

interface CurrentMusic {
  playlist: Playlist | null;
  song: Song | null;
  songs: Song[];
}
interface PlayerState {
  isPlaying: boolean;
  currentMusic: CurrentMusic;
  volume: number;
  setVolume: (volume: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentMusic: (currentMusic: CurrentMusic) => void;
}

export const usePlayerStore = create<PlayerState>()((set) => ({
  isPlaying: false,
  currentMusic: {
    playlist: null,
    song: null,
    songs: [],
  },
  volume: 0.5,
  setVolume: (volume: number) => set({ volume }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentMusic: (currentMusic: CurrentMusic) => set({ currentMusic }),
}));
