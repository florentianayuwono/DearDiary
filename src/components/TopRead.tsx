import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../features/musicPlayer/playerSlice";
import { useGetTopChartsQuery } from "../services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";
import { Song } from "./SongCard";

interface TopChartCard {
  song: Song;
  index: number;
}

const TopChartCard = ({ song, index }: TopChartCard) => (
  <div className="w-full flex flex-row items-center hover:bg-red py-2 p-4 rounded-lg cursor-pointer mb-2">
    {song.title}
  </div>
);

const TopRead = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Most Read</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song: Song, index: number) => (
            <TopChartCard key={song.key} song={song} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRead;
