import React, { useEffect, useRef } from "react";
import "./general.css";
import { gsap } from "gsap";
import { Shapes } from "./Shaper";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const HeroMain = () => {
  const compoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
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
          },
        )
    }, compoRef)
    return () => ctx.revert()
  }, [])

  const firstName = "Ish";
  const lastName = "Thumber";

  const renderLetter = (name, key) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`p-[1.5px] name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <>
      <Heading>
        <div className="flex flex-col items-center justify-center w-4/5 max-h-screen gap-8 m-auto xl:flex-row-reverse -z-50">
          <div className="w-full lg:w-2/5 sm:w-10/12">
            <Shapes />
          </div>
          <div className="font-urbanist" data-speed=".2" ref={compoRef}>
            <h1 className="mb-8 font-extrabold leading-none tracking-tighter text-7xl lg:text-[8rem] 2xl:text-[10rem] sm:text-9xl" aria-label={`${firstName}+${lastName}`}>
              <span className="block text-genoa-500/70">{renderLetter(firstName, "first")}</span>
              <span className="block text-genoa-600/70">{renderLetter(lastName, "last")}</span>
            </h1>
          </div>
        </div>
        <Footer />
      </Heading>
    </>
  );
};

export default HeroMain;
