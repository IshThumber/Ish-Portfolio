import React from "react";
import Navbar from "./sections/Navbar";
import HeroMain from "./sections/HeroMain";
import Quote from "./sections/Quote";
import About from "./sections/About";

const Wrapper = () => {
  return (
    <>
      <div>
        {/* <div className="bg-[#fdf4ff]">
          <Navbar />
        </div>
        <HeroMain />
        <Quote /> */}
        <About />
      </div>
    </>
  );
};

export default Wrapper;
