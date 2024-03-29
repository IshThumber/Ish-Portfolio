import React from "react";
import { education } from "../utils/General";

const Education = () => {
  return (
    <>
      {/* <div className="w-full">
        <Heading name="#Education" />

        <div className="flex flex-col items-center justify-center -mt-5">
          <div className="flex flex-col w-full mb-6 px-9 md:w-4/5">
            {education.map(key => {
              return (
                <div
                  key={key.id}
                  className="items-center justify-start w-full p-5 pl-8 mt-4 font-thin border border-gray-800 bigShadowButton bg-amber-50 text-md md:w-3/4 rounded-3xl font-ikaros"
                >
                  <h1 className="font-semibold text-left font-brandonMedium text-md">
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
      </div> */}

      <div className="relative w-full mt-16 overflow-hidden wrapper text-wild-sand-200 ">
        <div className="w-11/12 mx-auto my-10 font-black tracking-tight text-7xl md:text-8xl md:w-full">Education</div>
        <div className="w-11/12 mx-auto md:w-full">
          <div className="flex flex-col w-full gap-6 font-semibold tracking-wide md:w-4/5 lg:ml-14 font-urbanist text-wild-sand-200/80">
            {education.map(key => (
              <div className="flex flex-col gap-2 text-2xl" key={key.id}>
                <h1 className="text-4xl font-black">{key.degree}</h1>
                <span className="ml-3">{key.name}</span>
                <span className="ml-3">{key.year}</span>
                <span className="ml-3">{key.description}</span>
              </div>
            ))}
          </div>

          {/* <div className="flex flex-col items-center justify-center w-full mb-6 px-9 md:w-4/5">
              {education.map(key => {
                return (
                  <div
                    key={key.id}
                    // className="items-center justify-start w-full p-5 pl-8 mt-4 font-thin border border-gray-800 bigShadowButton bg-amber-50 text-md md:w-3/4 rounded-3xl font-ikaros"
                  >
                    <h1 className="font-semibold text-left font-brandonMedium text-md">
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
            </div> */}
        </div>
      </div >

    </>
  );
};

export default Education;
