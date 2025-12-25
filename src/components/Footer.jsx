import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { FaLocationDot, FaReact } from "react-icons/fa6";
import { PiGithubLogo, PiLinkedinLogo, PiXLogo, PiMediumLogo } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return new Date().toLocaleTimeString("en-GB", options);
  };

  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        icon: <PiGithubLogo size={26} />,
        url: "https://github.com/ishthumber",
        color: "hover:text-white",
      },
      {
        name: "LinkedIn",
        icon: <PiLinkedinLogo size={26} />,
        url: "https://www.linkedin.com/in/ishthumber/",
        color: "hover:text-blue-400",
      },
      {
        name: "X",
        icon: <PiXLogo size={26} />,
        url: "https://x.com/ishthumber",
        color: "hover:text-sky-400",
      },
      {
        name: "Medium",
        icon: <PiMediumLogo size={26} />,
        url: "https://medium.com/@ishthumber",
        color: "hover:text-gray-100",
      },
    ],
    []
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 200 },
    }),
  };

  return (
    <motion.footer
      className="relative w-full max-w-7xl mx-auto pt-20 pb-12 px-4 lg:px-8 text-gray-200 rounded-4xl footer-gradient"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Top Section with Badges */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 md:gap-4 mb-16 relative z-10">
        {/* Availability Badge */}
        <motion.div className="group relative w-full md:w-auto select-none" variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex flex-col p-5 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="text-base font-signature leading-tight font-bold text-gray-100 tracking-wider">Open to Opportunities</p>
            </div>

            <div className="h-px w-full bg-gray-700/50 my-2" />

            <div className="flex justify-between items-center gap-8">
              <motion.p
                className="font-mono text-lg font-bold text-green-300 tracking-widest"
                key={time}
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {time || "--:--"}
              </motion.p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md">
                <FaLocationDot size={10} className="text-purple-400" />
                <span>India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Badge */}
        <motion.div
          className="group relative w-full md:w-auto transform md:translate-y-8 select-none"
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center gap-4 p-4 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl transition-all duration-300">
            <span className="text-base font-signature leading-tight font-medium text-gray-400 tracking-wider">Built with</span>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-3">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <FaReact className="text-cyan-400" size={20} title="React" />
              </motion.div>
              <span className="text-gray-400">&</span>
              <motion.div initial={{ scale: 1 }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <SiTailwindcss className="text-sky-400" size={20} title="Tailwind CSS" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Bottom Section */}
      <motion.div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6" variants={itemVariants}>
        <motion.p className="text-gray-300 text-sm font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          © {new Date().getFullYear()} Ish Thumber. <span className="hidden sm:inline">Crafted with code & cloud.</span>
        </motion.p>

        <div className="flex items-center gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors duration-300 ${link.color}`}
              aria-label={link.name}
              custom={i}
              variants={socialVariants}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
