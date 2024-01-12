import React, { useEffect, useState } from "react";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import HeroMain from "./sections/HeroMain";
import Navbar from "./sections/Navbar";
import Quote from "./sections/Quote";
import Skills from "./sections/Skills";
// import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

const Wrapper = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark);
  }, [dark]);

  const toggleDark = () => {
    setDark(prevDarkMode => !prevDarkMode);
  };
  console.log(dark);
  return (
    <>
      <div
        className={`${
          dark ? "dark" : "light"
        } dark:bg-[#000c1f]  transition-all duration-500`}
      >
        <>
          <Navbar dark={dark} toggleDark={toggleDark} />
        </>
        {/* mt-32 md:mt-28 bg-green-200 */}
        <div className="h-32 md:h-28"></div>
        <HeroMain />
        <Quote />
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
