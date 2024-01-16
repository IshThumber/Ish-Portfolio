import { Button } from "@material-tailwind/react";
// import { ExternalLink } from "lucide-react";
import React from "react";
import "./general.css";
// import Quote from "./Quote";

const HeroMain = () => {
  const handleScroll = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1dCukUpwN8EbVZwBdKMTVNDxm6M-fkbhz/view?usp=sharing",
      "_blank",
      "resume"
    );
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full duration-500 bg-transparent dark:text-wild-sand-300 transition-color">
        <div className="items-center mt-56 text-center">
          <h3 className="mb-2 text-lg font-brandonLight sm:text-2xl">
            Hey, I&apos;m
          </h3>
          <h1 className="font-black transition-transform duration-500 font-penna text-7xl sm:text-7xl md:text-9xl transition-color">
            Ish Thumber
          </h1>
        </div>
        <div className="justify-center w-4/6 text-center">
          <p className="text-sm font-thin duration-500 font-brandonLight sm:text-lg transition-color">
            I&apos;m a Full-Stack Developer who loves crafting awesome web
            experiences with ReactJS, NodeJS, and a dash of DevOps magic. Let's
            code, collaborate, and create something extraordinary together! 🚀
          </p>
        </div>
        <div className="items-center justify-center">
          <div className="flex flex-row items-center justify-between gap-8 p-1 my-3 md:gap-20">
            <Button
              // variant="outlined"
              className="midShadowButton bg-cascade-100 hover:bg-cascade-500 text-blue-gray-800 border-gray-900 border-2 py-5 rounded-full w-[150px] md:w-[180px] dark:border-bunker-50 dark:text-wild-sand-50 dark:bg-cascade-800 dark:hover:bg-cascade-500 dark:hover:text-wild-sand-800"
              onClick={handleScroll}
            >
              Contact me
            </Button>
            <Button
              // variant="outlined"
              className="midShadowButton bg-amber-100 hover:bg-amber-500 text-blue-gray-800 border-gray-900 border-2 py-5 rounded-full w-[150px] md:w-[180px] flex justify-center items-center gap-2 dark:border-bunker-50 dark:text-wild-sand-50 dark:bg-amber-800 dark:hover:bg-amber-200 dark:hover:text-wild-sand-800"
              onClick={openResume}
            >
              Resume
              {/* <ExternalLink size={12} color="rgb(55 71 79)" strokeWidth={3} />   */}
            </Button>
          </div>
        </div>

        {/* <div className="items-center justify-center w-full mt-20 py-7">
          <Quote />
        </div> */}
      </div>
    </>
  );
};

export default HeroMain;
