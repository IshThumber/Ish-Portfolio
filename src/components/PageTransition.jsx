import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div initial="initial" animate="in" exit="exit" variants={pageVariants}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
