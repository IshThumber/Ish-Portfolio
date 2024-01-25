// import React, { useEffect, useState } from "react";
import HeroMain from "./sections/HeroMain";
import Navbar from "./sections/Navbar";


const Wrapper = () => {
  // const [dark, setDark] = useState(false);
  // useEffect(() => {
  //   const isDarkMode = localStorage.getItem("darkMode") === "true";
  //   setDark(isDarkMode);
  // }, []);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", dark);
  //   localStorage.setItem("dark", dark);
  // }, [dark]);

  // const toggleDark = () => {
  //   setDark(prevDarkMode => !prevDarkMode);
  // };
  // console.log(dark);
  return (
    <>
      <div
        className="transition-all duration-500 min-h-screen"
      >
        <div className="fixed w-full">
          <Navbar />
        </div>
        {/* mt-32 md:mt-28 bg-green-200 */}
        <div className="h-36 md:h-32" ></div>
        <div className="max-h-screen -z-50 bg-transparent">
          <HeroMain />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
