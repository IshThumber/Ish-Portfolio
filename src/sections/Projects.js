import React from "react";
import Heading from "./../components/Heading";

const Projects = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#Projects" />

        <div className="flex flex-col justify-center items-center -mt-5">
          <div className="flex flex-col w-full px-9 md:w-4/5 mb-6">
            <div className="bigShadowButton border border-gray-800 bg-light-blue-50 p-5 pl-8 mt-4 text-md justify-start w-full md:w-3/4 items-center rounded-3xl font-brandonMedium font-thin">
              {/* <h1 className="font-brandonMedium text-md text-left font-semibold mb-5">
                <span className="mr-1 font-thin font-ikaros text-pink-400">
                  1.
                </span>{" "}
                {`This website`}
              </h1> */}
              <h2 className="font-semibold">
                Open Source Projects
                <br />
                Coming Soon!
                <br />
              </h2>
              Connect me
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
