import React from "react";
import Heading from "./../components/Heading";
import Navbar from "./Navbar";
import { education } from "../utils/General";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";


const Projects = () => {
  return (
    <>
      <Heading>
        <div className="relative w-full p-1 m-0 font-gtReg text-wild-sand-200">
          <div className="relative flex flex-col justify-between w-full m-auto gap-14 xl:w-3/4 md:w-11/12">
            <div className="w-11/12 font-black tracking-tight font-urbanist place-self-center md:place-self-start text-7xl md:text-8xl md:w-3/4 ">
              Projects
            </div>

            <ProjectList />

          </div>
        </div>


        <Footer />
      </Heading>
    </>
  )
}

const ProjectWrapper = () => {
  return (
    <>
      <div className="min-h-screen transition-all duration-500 bg-transparent">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <div className="h-36 md:h-32"></div>
        <div className="max-h-screen bg-transparent wrapper">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default ProjectWrapper;
