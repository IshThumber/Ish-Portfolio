import { Button } from "@material-tailwind/react";
import { ExternalLink } from "lucide-react";
import React from "react";
import "./general.css";
import Quote from "./Quote";

const HeroMain = () => {
  return (
    <>
      <div className="bg-lime-50 w-full h- flex flex-col justify-center items-center ">
        <div className="items-center text-center mt-56">
          <h3 className="font-brandonLight text-lg sm:text-2xl">
            Hey I&apos;m
          </h3>
          <h1 className="font-avertaStdBold font-black text-6xl sm:text-7xl md:text-9xl transition-transform">
            Ish Thumber
          </h1>
        </div>
        <div className="justify-center text-center w-4/6">
          <p className="font-brandonLight text-sm sm:text-lg font-thin">
            I&apos;m a Full-Stack Developer who loves crafting awesome web
            experiences with ReactJS, NodeJS, and a dash of DevOps magic. Let's
            code, collaborate, and create something extraordinary together! 🚀
          </p>
        </div>
        <div className="items-center justify-center">
          <div className=" my-3 p-1 flex flex-row justify-between items-center gap-8">
            <Button
              variant="outlined"
              className="shadowButton bg-green-100 text-blue-gray-800 border-gray-900 border-2 py-3 rounded-md w-[150px]"
            >
              Contact me
            </Button>
            <Button
              variant="outlined"
              className="shadowButton bg-green-100 text-blue-gray-800 border-gray-900 border-2 py-3 rounded-md w-[150px] flex justify-center items-center gap-2"
            >
              Resume
              <ExternalLink size={12} color="#1f2937" />
            </Button>
          </div>
        </div>
        <div className="w-full items-center justify-center mt-20 py-7">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default HeroMain;
