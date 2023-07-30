import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-green-50 h-screen w-full">
        <div className="w-full py-3 pl-3 justify-start items-start">
          <h1
            style={{
              fontFamily: "Honey Script Light"
            }}
            className="text-2xl sm:text-5xl italic text-opacity-50 text-blue-gray-900"
          >
            <span className="text-3xl sm:text-6xl text-opacity-50">#A</span>bout myself
          </h1>
        </div>

        <div className="bg- flex flex-col justify-center items-center">
          <h1 className="text-4xl text-black">About Me</h1>
        </div>
      </div>
    </>
  );
};

export default About;
