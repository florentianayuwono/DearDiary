import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Song } from "./SongCard";

export interface PlayPause {
  song: Song;
  isPlaying: boolean;
  activeSong: Song;
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}: PlayPause) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
