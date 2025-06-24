import React from "react";
import { education } from "../utils/General";

const EducationEntry = ({ entry }) => (
  <div className="flex flex-col gap-2 text-2xl" key={entry.id}>
    <h1 className="text-4xl font-black">{entry.degree}</h1>
    <span className="ml-3">{entry.name}</span>
    <span className="ml-3">{entry.year}</span>
    <span className="ml-3">{entry.description}</span>
  </div>
);

const Education = () => {
  return (
    <div className="relative w-full mt-16 overflow-hidden wrapper text-wild-sand-200">
      <div className="w-11/12 mx-auto my-10 font-black tracking-tight text-7xl md:text-8xl md:w-full">Education</div>
      <div className="w-11/12 mx-auto md:w-full">
        <div className="flex flex-col w-full gap-6 font-semibold tracking-wide md:w-4/5 lg:ml-14 font-urbanist text-wild-sand-200/80">
          {education.map(entry => (
            <EducationEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
