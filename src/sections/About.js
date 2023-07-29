import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-amber-400 h-screen w-full mt-5">
        <div className="bg-red-300 w-1/4 py-7 pl-3 absolute justify-start items-start">
          <h1 style={{
            fontFamily: "The Scientist",
          }} className="text-5xl">/ About myself</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white">About Me</h1>
        </div>
      </div>
    </>
  );
};

export default About;
