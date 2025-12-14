import React from "react";
import { motion } from "framer-motion";

const CustomHeadings = ({ heading, subHeading, description, gradientColor }: { heading: string; subHeading: string; description: string; gradientColor: string }) => {
  return (
    <>
      <section className="mb-12 text-center lg:text-left">
        <motion.h1
          className="font-black font-heading text-6xl md:text-8xl lg:text-9xl tracking-normal text-gray-100 opacity-10 uppercase select-none"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {heading}
        </motion.h1>
        <motion.div className="-mt-12 md:-mt-20 lg:-mt-24 ml-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <span className={`text-4xl md:text-6xl ml-5 font-bold bg-clip-text text-transparent font-signature tracking-wider ${gradientColor}`}>{subHeading}</span>
          <p className="mt-4 text-gray-400 max-w-4xl text-lg text-center lg:text-left">{description}</p>
        </motion.div>
      </section>
    </>
  );
};

export default CustomHeadings;
