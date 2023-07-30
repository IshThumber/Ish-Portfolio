import React from "react";
import Navbar from "./sections/Navbar";
import HeroMain from "./sections/HeroMain";
// import Quote from "./sections/Quote";
import About from "./sections/About";

const Wrapper = () => {
  return (
    <>
      <div>
        <>
          <Navbar />
        </>
        <HeroMain />
        {/* <Quote /> */}
        <About />
      </div>
    </>
  );
};

export default Wrapper;
