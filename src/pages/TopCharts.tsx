import { useAppDispatch, useAppSelector } from "../app/hooks";
import { SongCard, Error, Loader } from "../components";
import { musicGenres } from "../assets/constants";
import { useGetTopChartsQuery } from "../services/shazamCore";
import { Song } from "../components/SongCard";

const TopCharts = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Right away, Your Highness🙇" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Listen to {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-white text-red p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {musicGenres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: Song, i: number) => (
          <SongCard
            key={song.key}
            song={song}
            index={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
