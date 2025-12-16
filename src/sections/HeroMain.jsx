import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Shapes } from "./Shaper";
import { Link } from "react-router";
import { FiArrowRight, FiFileText } from "react-icons/fi";

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
      <div className="flex flex-col items-center justify-center max-w-7xl max-h-screen gap-8 m-auto lg:w-4/5 xl:flex-row-reverse lg:mt-24 mb-24">
        <div className="w-full lg:w-2/5 sm:w-10/12">
          <Shapes />
        </div>
        <div className="font-urbanist mx-3 sm:m-0" data-speed=".2" ref={compoRef}>
          <h1 className="mb-8 font-extrabold leading-none tracking-tight text-7xl lg:text-[8rem] 2xl:text-[10rem] sm:text-9xl w-full" aria-label={`${firstName}+${lastName}`}>
            <span className="block text-kimberly-500">{renderLetter(firstName, "first")}</span>
            <span className="block text-kimberly-500">{renderLetter(lastName, "last")}</span>
          </h1>
          {/* <div className="hero-bg"></div> */}
          <p className="hero-tagline text-xl sm:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-signature tracking-wider">
            Cloud-native engineer architecting <span className="text-purple-300 font-semibold">resilient infrastructure</span> & building{" "}
            <span className="text-green-300 font-semibold">elegant applications</span>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/resume"
              className="hero-btn group relative px-6 py-3 rounded-xl bg-gray-800 text-gray-200 font-bold border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex hover:scale-105 items-center gap-2"
            >
              <FiFileText />
              <span>Resume</span>
            </a>

            <a
              href="/contact"
              className="hero-btn group relative px-6 py-3 rounded-xl bg-green-500 border border-gray-700 hover:border-green-400/50 hover:text-green-300 text-gray-200 font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
