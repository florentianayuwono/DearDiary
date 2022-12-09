import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Recent, Searchbar, Sidebar } from "./components";
import { Discover, Diary, Search } from "./pages";
// import './App.css';

function App() {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-lightPink to-mediumPink">
        <Searchbar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </BrowserRouter>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <Recent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
