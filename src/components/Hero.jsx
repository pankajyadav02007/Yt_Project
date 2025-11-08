import React, { useState } from "react";
import YtCard from "../components/YtCard";

const Hero = () => {
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
      <h1>{inputValue}</h1>
      <main>
        <section className="grid grid-cols-3 gap-4 p-5">
          <YtCard fName="Anam" lName="Yadav" />
          <YtCard fName="Deepak" lName="Yadav" />
          <YtCard fName="Harsh" lName="Maurya" />
          <YtCard fName="Ashish" lName="Yadav" />
        </section>
      </main>
    </>
  );
};

export default Hero;
