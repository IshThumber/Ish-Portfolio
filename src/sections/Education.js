import React from "react";
import Heading from "../components/Heading";
import { education } from "../utils/General";

const Education = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#Education" />

        <div className="flex flex-col justify-center items-center -mt-5">
          <div className="flex flex-col w-full px-9 md:w-4/5 mb-6">
            {education.map(key => {
              return (
                <div
                  key={key.id}
                  className="bigShadowButton border border-gray-800 bg-amber-50 p-5 pl-8 mt-4 text-md justify-start w-full md:w-3/4 items-center rounded-3xl font-ikaros font-thin"
                >
                  <h1 className="font-brandonMedium text-md text-left font-semibold">
                    {key.degree}
                    <br />
                    <span className="mr-4 font-thin">{key.name}</span>
                    <br />
                    <span className="mr-4 font-thin">{key.year}</span>
                    <br />
                    <span className="mr-4 font-thin">{key.description}</span>
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
