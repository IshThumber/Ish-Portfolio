import React from 'react';
// Using framer-motion for animations. Ensure it's installed: npm install framer-motion
import { motion } from 'framer-motion';
import { FaAward } from "react-icons/fa";
import { PiBriefcase } from "react-icons/pi";

import FooterConcept2 from '../components/Footer';
import Navbar from '../components/Navbar';
import { experience } from '../utils/General';
import PageTransition from './../components/PageTransition';

const ExperienceItem = ({ experience }) => {
  const type = experience.type?.toLowerCase();
  const year = experience.year;
  let icon, iconStyle, yearStyle;
  if (year === 'Current Role') {
    icon = <PiBriefcase size={22} />;
    iconStyle = "text-genoa-400 border-genoa-400";
    yearStyle = "text-genoa-400";
  } else if (type === 'community') {
    icon = <FaAward size={22} />;
    iconStyle = "border-yellow-300 text-yellow-300";
    yearStyle = "text-yellow-300";
  } else if (year === 'Previous Role') {
    icon = <PiBriefcase size={22} />;
    iconStyle = "border-purple-300 text-purple-300";
    yearStyle = "text-purple-400";
  }

  return (
    <motion.div
      className={`relative pl-16 ${iconStyle}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute left-0 flex flex-col items-center h-full">
        <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-gray-800 border-2 ${iconStyle}`}>
          {icon}
        </div>
      </div>

      <div className="pl-8 pb-12 font-gtReg">
        <p className={`text-sm font-semibold mb-1 ${yearStyle}`}>{experience.year}</p>
        <h3 className="text-2xl font-bold font-gtReg text-wild-sand-100">{experience.name}</h3>
        <h4 className="text-lg font-medium text-purple-300/80 mb-4">{experience.company}</h4>
        <ul className="space-y-2 list-disc list-inside text-wild-sand-200/80">
          {experience.description.map((point, index) => (
            <li key={index} className="text-wild-sand-300/90">{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  return (
    <main className="min-h-screen transition-all duration-500">
      <header className='fixed z-50 w-full'>
        <Navbar />
      </header>

      <PageTransition>
        <div className='h-32 md:h-28' />
        <section className="relative w-[97%] md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
          <div className="relative flex flex-col justify-between w-full m-auto gap-14">
            <div className="w-full m-auto mb xl:w-full md:w-11/12 text-center md:text-left">
              <h1 className="font-black tracking-tight font-urbanist text-[5rem] md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-300 to-genoa-300 inline-block text-transparent bg-clip-text md:w-fit w-full">
                Timeline
              </h1>
            </div>
            <div>
              <div className="relative w-11/12 mt-8 mx-auto">
                <div className="absolute left-[23px] top-6 h-full w-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                {experience.map((experience, index) => (
                  <ExperienceItem key={index} experience={experience} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

      <footer>
        <FooterConcept2 />
      </footer>
    </main>
  );
};

export default ExperiencePage;
