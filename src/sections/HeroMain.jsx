import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Shapes } from "./Shaper";

const HeroMain = () => {
  const compoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          // ease: "back.out(2)",
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          stagger: { each: 0.1, from: "random" },
        }
      );
    }, compoRef);
    return () => ctx.revert();
  }, []);

  const firstName = "Ish";
  const lastName = "Thumber";

  const renderLetter = (name, key) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span key={index} className={`p-[1.5px] name-animation name-animation-${key}-index inline-block opacity-0`}>
        {letter}
      </span>
    ));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-7xl max-h-screen gap-8 m-auto lg:w-4/5 xl:flex-row-reverse lg:mt-24">
        <div className="w-full lg:w-2/5 sm:w-10/12">
          <Shapes />
        </div>
        <div className="font-urbanist mx-3 sm:m-0" data-speed=".2" ref={compoRef}>
          <h1 className="mb-8 font-extrabold leading-none tracking-tight text-7xl lg:text-[8rem] 2xl:text-[10rem] sm:text-9xl w-full" aria-label={`${firstName}+${lastName}`}>
            <span className="block text-green-500/70">{renderLetter(firstName, "first")}</span>
            <span className="block text-green-600/70">{renderLetter(lastName, "last")}</span>
          </h1>
          {/* <div className="hero-bg"></div> */}
          <p className="text-2xl md:text-3xl text-shamrock-400 mb-6">Cloud-native engineer building resilient infra & elegant apps.</p>
          <div className="flex gap-4 mt-4">
            <a href="/resume/Ish_Thumber_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 rounded-xl bg-purple-400 hover:bg-gradient-to-r from-purple-400 to-purple-700 text-black font-bold transition-all duration-300">
                View Resume
              </button>
            </a>
            <a href="contact">
              <button className="px-5 py-2 rounded-xl bg-green-400 hover:bg-gradient-to-r from-green-400 to-green-700 text-black font-bold transition-all duration-300">
                Let’s Talk
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
