import { usePlayerStore } from "../store/playerStore";
import { Pause, Play } from "./Player";

interface CardPlayButtonProps {
  id: string;
}

export function CardPlayButton({ id }: CardPlayButtonProps) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic.playlist?.id === id;

  const handleClick = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
    const data = await res.json();
    const { playlist, songs } = data;
    setIsPlaying(true);
    setCurrentMusic({ songs, song: songs[0], playlist });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
