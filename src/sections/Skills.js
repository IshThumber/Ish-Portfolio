import React from "react";
import { skills } from "../utils/General";
// import { Progress } from "@material-tailwind/react
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
              {skills.map(key => (
                <SkillSet key={key.id} name={key.title} percent={key.percent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
