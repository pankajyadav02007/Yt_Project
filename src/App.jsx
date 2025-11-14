import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoDetails from "./pages/VideoDetails";
import SearchResults from "./pages/SearchResults";
import ErrorPage from "./ErrorPage";
import { useState } from "react";
import HomePage from "./pages/Home";

function App() {
  const [isSiderbarOpen, setIsSiderbarOpen] = useState(true);

  function toggleSidebar() {
    setIsSiderbarOpen(!isSiderbarOpen);
  }

  useState(() => {
    function handleSiderbar() {
      if (window.innerWidth < 768) {
        setIsSiderbarOpen(false);
      } else {
        setIsSiderbarOpen(true);
      }
    }

    if (window !== undefined) {
      handleSiderbar();
    }
    window.addEventListener("resize", handleSiderbar);
  }, []);

  return (
    <div>
      <Navbar onMenuBtnClick={toggleSidebar} isSiderbarOpen={isSiderbarOpen} />
      <main className="flex mt-16">
        <div
          className={`transition-all duration-1000 fixed top-16 bottom-0 left-0 ${
            isSiderbarOpen
              ? "min-w-[220px] overflow-auto"
              : "w-0 overflow-hidden"
          }`}
        >
          <Sidebar />
        </div>
        <section
          className={`transition-all duration-1000 min-h-screen w-full  ${
            isSiderbarOpen ? "ml-[220px]" : "ml-0"
          }`}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos/:vid" element={<VideoDetails />} />
            <Route path="/results" element={<SearchResults />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
