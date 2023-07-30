import React from "react";
import "./general.css";
import { experience } from "../utils/General";

const About = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="w-full py-3 pl-3 justify-start items-start">
          <h1 className="font-honeyLight text-4xl sm:text-5xl italic text-opacity-20 text-blue-gray-900">
            #About myself
          </h1>
        </div>

        <div className="flex flex-col mt-3 justify-center items-center">
          <div className="font-avertaStdBold w-4/5 md:w-2/3 md:text-lg flex flex-col justify-center">
            <h1 className="font-brandonMedium -ml-5">Myself:</h1>
            <h1 className="font-avertaStdThin text-md text-left">
              Hello! I'm Ish Thumber, a full-stack developer residing in
              Gujarat, India. 🌍👨‍💻 I have over a year of experience in
              developing web applications using ReactJs and NodeJs. 💻🚀 My
              proficiency in these technologies has been sharpened through
              multiple projects and internships.
            </h1>
          </div>

          <div className="flex flex-col w-full md:w-4/5 pt-12 pl-4 sm:pl-0 text-2xl">
            <h1 className="font-avertaSdBold text-3xl text-left underline">
              Experiences
            </h1>
          </div>
          <div className="flex flex-col w-full px-9 md:w-4/5">
            {experience.map((key) => {
              return (
                <div className="bigShadowButton border border-gray-800 bg-pink-50 p-4 mt-4 text-md justify-start w-full md:w-4/5 items-center rounded-md font-ikaros font-thin">
                  <>
                    <h1 className="font-brandonMedium text-md text-left font-semibold mb-5">
                      <span className="mr-1 font-thin font-ikaros">{key.id}</span> As a {key.title} in {key.company}
                    </h1>
                    {key.description.map((value) => {
                      return <li>{value}</li>;
                    })}
                  </>
                </div>
              );
            })}
            {/* <h1 className="font-brandonMedium text-md text-left text-white bg-blue-400">
                {experience[0].title}
              </h1> */}

            {/* <p>{experience[0].description.map()}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
