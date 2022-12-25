import { Link } from "react-router-dom";
import { AppDispatch } from "../app/store";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../features/musicPlayer/playerSlice";
import { SongDetails } from "../pages";
import { useAppDispatch } from "../app/hooks";

export interface SongCard {
  song: Song;
  index: number;
  isPlaying: boolean;
  activeSong: Song;
  data: string;
}

export interface Song {
  key: number;
  title: string;
  subtitle: string;
  images?: Images;
  artists?: Artist[];
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Artist {
  alias: string;
  id: string;
  adamid: string;
}

const SongCard = ({ song, index, isPlaying, activeSong, data }: SongCard) => {
  const dispatch = useAppDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-red bg-opacity-30 group-hover:flex ${
            activeSong?.title === song.title
              ? `flex bg-black bg-opacity-70`
              : `hidden`
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
          </div>
          <img alt="song_img" src={song.images?.coverart} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-rose truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-maroon mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
