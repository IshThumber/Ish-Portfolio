import React from "react";
import "./general.css";
// import { experience } from "../utils/General";
import Heading from "../components/Heading";
// import { Progress } from "@material-tailwind/react";

const About = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#About myself" />

        <div className="flex flex-col mt-3 justify-center items-center relative">
          <div className="font-avertaStdBold w-4/5 md:w-2/3 md:text-lg flex flex-col justify-center">
            <h1 className="font-brandonMedium font-semibold -ml-5">Myself:</h1>
            <h1 className="font-brandonMedium text-md text-left">
              Hello! I'm Ish Thumber, a full-stack developer residing in
              Gujarat, India. 🌍👨‍💻 I have over a year of experience in
              developing web applications using ReactJs and NodeJs. 💻🚀 My
              proficiency in these technologies has been sharpened through
              multiple projects and internships.
            </h1>
          </div>

          {/* <div className="flex flex-col w-full md:w-4/5 pt-12 pl-4 sm:pl-0 text-2xl relative">
            <h1 className="font-avertaSdBold text-3xl text-left underline">
              Experiences
            </h1>
          </div>

          <div className="flex flex-col w-full px-9 md:w-4/5 mb-6">
            {experience.map((key) => {
              return (
                <div className="bigShadowButton border border-gray-800 bg-pink-50 p-4 mt-4 text-md justify-start w-full md:w-3/4 items-center rounded-md font-ikaros font-thin">
                  <>
                    <h1 className="font-brandonMedium text-md text-left font-semibold mb-5">
                      <span className="mr-1 font-thin font-ikaros text-pink-400">
                        {key.id}.
                      </span>{" "}
                      {key.title} Intern in {key.company}
                    </h1>
                    {/* {key.description.map((value) => {
                      return <li>{value}</li>;
                    })} 
                  </>
                </div>
              );
            })}
          </div> */}

          {/* <div className="flex flex-col w-full md:w-4/5 pt-12 pl-4 sm:pl-0 text-2xl">
            <h1 className="font-avertaSdBold text-3xl text-left underline">
              Skills
            </h1>
          </div>

          <div className="flex flex-col w-full px-9 md:w-4/5 mb-6">
            {skills.map((key) => {
              return (
                <div className="bigShadowButton border border-gray-800 bg-[#ecfdf5] p-4 py-3 mt-5 text-md justify-start w-full md:w-3/4 items-center rounded-md font-ikaros font-thin">
                  <h1 className="font-brandonMedium text-md text-left font-semibold mb-3">
                    <span className="mr-1 font-thin font-ikaros text-[#047857]">
                      {key.title}.
                    </span>
                  </h1>
                  <>
                    <Progress
                      value={key.percent}
                      size="sm"
                      className="bg-[#064e3b]/10"
                      color="teal"
                    />
                  </>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
