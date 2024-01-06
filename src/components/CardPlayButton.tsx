import { usePlayerStore } from "../store/playerStore";
import { Pause, Play } from "./Player";

interface CardPlayButtonProps {
  id: string;
  size: "small" | "large";
}

export function CardPlayButton({ id, size = "small" }: CardPlayButtonProps) {
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

  const iconClassName = size === "small" ? "size-4" : "size-5";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400"
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
