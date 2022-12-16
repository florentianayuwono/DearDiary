import { DiaryCard, Error, Loader } from "../../components";
import { diaryGenres } from "../../assets/constants";

const Discover = () => {
  const genreTitle = "Crush";

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-white text-red p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {diaryGenres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {diaryGenres.map((diary, i) => (
          <DiaryCard key={diary.key} diary={diary} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
