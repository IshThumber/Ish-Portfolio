import React from "react";
import Heading from "../components/Heading";
import { experience } from "../utils/General";
import "./general.css";

const Experiences = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#Experiences" />

        <div className="flex flex-col justify-center items-center -mt-5">
          <div className="flex flex-col w-full px-9 md:w-4/5 mb-6">
            {experience.map(key => {
              return (
                <div
                  key={key.id}
                  className="bigShadowButton border border-gray-800 bg-pink-50 p-4 mt-4 text-md justify-start w-full md:w-3/4 items-center rounded-md font-ikaros font-thin"
                >
                  <>
                    <h1 className="font-brandonMedium text-md text-left font-semibold mb-5">
                      <span className="mr-1 font-thin font-ikaros text-pink-400">
                        {key.id}.
                      </span>{" "}
                      {key.title} Intern in {key.company}
                    </h1>
                    {/* {key.description.map((value) => {
                      return <li>{value}</li>;
                    })} */}
                  </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
