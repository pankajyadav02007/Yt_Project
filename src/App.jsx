import { Route, Routes } from "react-router";
import Signup from "./pages/Signup";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <Hero />
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
