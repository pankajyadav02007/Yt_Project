import React, { useState } from "react";
import YtCard from "./components/YtCard";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  let [inputValue, setInputValue] = useState("");
  // console.log(inputValue);

  // const [video, setVideos] = useState([
  //   {
  //     thumbnail: "",
  //     title: "",
  //     chName: "",
  //     views: "",
  //     chLogo: "",
  //     pubTime: "",
  //   },
  // ]);

  return (
    <>
      <Navbar />
      <h1>{inputValue}</h1>
      <main>
        <section className="grid grid-cols-3 gap-4 p-5">
          <YtCard fName="Anam" lName="Yadav" />
          <YtCard fName="Deepak" lName="Yadav" />
          <YtCard fName="Harsh" lName="Maurya" />
          <YtCard fName="Ashish" lName="Yadav" />
        </section>
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
