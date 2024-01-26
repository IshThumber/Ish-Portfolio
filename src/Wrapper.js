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
        className="min-h-screen transition-all duration-500"
      >
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        {/* mt-32 md:mt-28 bg-green-200 */}
        <div className="h-36 md:h-32" ></div>
        <div className="max-h-screen bg-transparent">
          <HeroMain />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
