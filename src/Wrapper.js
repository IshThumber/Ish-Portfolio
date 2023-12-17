import React from "react";
import Navbar from "./sections/Navbar";
import HeroMain from "./sections/HeroMain";
// import Quote from "./sections/Quote";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
// import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

const Wrapper = () => {
  return (
    <>
      <div>
        <>
          <Navbar />
        </>
        <HeroMain />
        {/* <Quote /> */}
        <div id="about">
          <About />
        </div>
        <Education />
        <Projects />
        <Experiences />
        <div id="skills">
          <Skills />
        </div>
        {/* <div id="contact-us"> */}
        {/* <Contact /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Wrapper;
