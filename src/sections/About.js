import React, { useRef } from "react";
import "./general.css";
import Navbar from "./Navbar";
import Footer from './../components/Footer';
import Heading from "../components/Heading";
import profile from "../assets/Profile.png"
import { Link } from "react-router-dom";
import TechList from "../components/TechList";
import { FiArrowUpRight } from "react-icons/fi";
import Education from './Education';

const About = () => {
  const component = useRef(null);

  return (
    <>
      <Heading>
        <div className="relative w-full p-1 m-0 font-gtReg text-wild-sand-200 -z-50">
          <div className="relative flex flex-col-reverse justify-between w-full m-auto gap-14 xl:w-3/4 md:w-11/12 md:flex-row">
            <div className="flex flex-col justify-center w-11/12 gap-12 mx-auto md:m-0 md:w-3/5 flex-wrapborder-2">
              <span className="font-black tracking-tight underline font-urbanist text-8xl md:text-9xl place-self-center md:place-self-start decoration-1 underline-offset-8">
                About Ish
              </span>
              <div className="flex flex-col justify-center gap-10 text-xl">
                <p>
                  Hello, I'm Ish Thumber, a creative web developer from Una, Gujarat, India.
                </p>
                <p>
                  I blend artistic flair with technical skill, specializing in front-end development to create visually stunning and functional web experiences. Whether redesigning NGO websites or streamlining PhD admissions, I'm passionate about pushing the boundaries of what's possible in the digital world.
                </p>
                <p>
                  When I'm not coding, you'll find me experimenting with digital art and exploring the latest in web animation.
                </p>
                <p>
                  Join me on this journey of innovation!
                </p>

                <div className="flex flex-col gap-4 text-base font-bold md:flex-row md:gap-9">
                  <Link to="mailto:ishthumber343@gmail.com">
                    <button className="px-4 py-2 text-black transition-colors duration-300 bg-purple-400 rounded-lg hover:bg-purple-500 border-3 w-fit">
                      <span className=" after:content-['👋🏻']">Say Hello</span>
                    </button>
                  </Link>

                  <Link to="https://ishthumber.notion.site/ishthumber/Ish-Thumber-66ae5352f54b4e5695d285fca4644542">
                    <button className="items-center px-4 py-2 text-black transition-colors duration-300 bg-purple-400 rounded-lg hover:bg-purple-500 border-3 w-fit">
                      <div className="flex flex-row items-center gap-1">
                        <span className="">Web Resume</span>
                        <span className=""><FiArrowUpRight /></span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative inline-block rounded-md md:place-self-start place-self-center before:block before:absolute before:-inset-6 before:-skew-y-6 before:outline-yellow-200 before:bg-blue-gray-300 before:skew-x-6 before:rounded-3xl">
              <img src={profile} alt="ish" className="relative h-60 rounded-xl" />
            </div>
          </div>
        </div>

        <div className="w-full mx-auto tracking-tight font-urbanist -z-50" ref={component}>
          <TechList component={component} />
        </div>

        {/* <div className="w-full mx-auto tracking-tight md:w-3/4 font-urbanist">
          <Education />
        </div> */}
        <Footer />
      </Heading>
    </>
  )
}

const AboutWrapper = () => {
  return (
    <>
      <div className="min-h-screen transition-all duration-500 bg-transparent">
        <div className="fixed w-full">
          <Navbar />
        </div>
        <div className="h-36 md:h-32"></div>
        <div className="max-h-screen wrapper -z-50 bg-transparent">
          <About />
        </div>
      </div>
    </>
  );
};

export default AboutWrapper;
