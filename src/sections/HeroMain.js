import { Button } from "@material-tailwind/react";
import { ExternalLink } from "lucide-react";
import React from "react";
import "./general.css";

const HeroMain = () => {
  return (
    <>
      <div className="bg-[#fdf4ff] w-full h-screen flex flex-col justify-center items-center -mt-24 sm:m-0">
        <div className="items-center text-center">
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
              className="shadowButton text-blue-gray-800 border-gray-900 border-2 py-3 rounded-md w-[150px]"
            >
              Contact me
            </Button>
            <Button
              variant="outlined"
              className="shadowButton text-blue-gray-800 border-gray-900 border-2 py-3 rounded-md w-[150px] flex justify-center items-center gap-2"
            >
              Resume
              <ExternalLink size={12} color="#1f2937" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;