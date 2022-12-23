import { Link } from "react-router-dom";
import { AppDispatch } from "../app/store";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../features/musicPlayer/playerSlice";
import { SongDetails } from "../pages";

export interface SongCard {
  song: Song;
  index: number;
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

const activeSong = "test";

const SongCard = ({ song, index }: SongCard) => (
  <div className="flex flex-col w-[250px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div
        className={`absolute inset-0 justify-center items-center bg-red bg-opacity-50 group-hover:flex ${
          activeSong?.title === song.title
            ? `flex bg-black bg-opacity-70`
            : `flex bg-black bg-opacity-70` //`hidden`
        }`}
      >
        {/* <PlayPause
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        /> */}
        <img alt="song_img" src={song.images?.coverart} />
      </div>
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

export default SongCard;
