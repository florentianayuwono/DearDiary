import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopRead } from "./components";
import {
  WriterDetails,
  TopWriters,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  DiaryDetails,
  Authentication,
  Dashboard,
} from "./pages";

const App = () => {
  const loggedIn = localStorage.getItem("auth");

  const { activeSong } = useAppSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-deepPink to-lightPink">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route
                path="/authentication/:form"
                element={<Authentication />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/top-writers" element={<TopWriters />} />
              <Route path="/top-read" element={<TopRead />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/writers/:id" element={<WriterDetails />} />
              <Route path="/diaries/:diaryid" element={<DiaryDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopRead />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
