import React from "react";
import { skills } from "../utils/General";
// import { Progress } from "@material-tailwind/react";
import Heading from "../components/Heading";
import SkillSet from "./../components/SkillSet";

const Skills = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#Skills" />

        <div className="flex flex-col justify-center items-center -mt-5">
          <div className="flex flex-col w-full px-9 md:w-4/5 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 p-3">
              {skills.map((key) => {
                return <SkillSet name={key.title} />;
              })}
            </div>

            {/* {skills.map((key) => {
              return (
                // bg-[#ecfdf5]
                <div className="bigShadowButton border border-gray-800 bg-pink-500 p-4 mt-5 text-md justify-start w-fit items-center rounded-md font-ikaros font-thin">
                  <div className="bg-amber-200 font-brandonMedium text-md text-left font-semibold">
                    <h1 className="mr-1 font-thin font-ikaros text-[#047857]">
                      {key.title}.
                    </h1>
                  </div>
                  <Progress
                      value={key.percent}
                      size="sm"
                      className="bg-[#064e3b]/10"
                      color="teal"
                    /> 
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
