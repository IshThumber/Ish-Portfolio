import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-amber-400 h-screen w-full mt-5">
        <div className="bg-red-300 w-full py-3 pl-3 justify-start items-start">
          <h1
            style={{
              fontFamily: "Honey Script Light"
            }}
            className="text-2xl sm:text-5xl italic"
          >
            <span className="text-3xl sm:text-6xl">#A</span>bout myself
          </h1>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white">About Me</h1>
        </div>
      </div>
    </>
  );
};

export default About;
