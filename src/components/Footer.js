import React, { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaLinkedin, FaLocationDot, FaMedium, FaReact, FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
    return new Date().toLocaleTimeString('en-GB', options);
  };

  const socialLinks = useMemo(() => [
    { name: 'GitHub', icon: <FaGithub size={22}/>, url: 'https://github.com/ishthumber' },
    { name: 'LinkedIn', icon: <FaLinkedin size={22}/>, url: 'https://www.linkedin.com/in/ishthumber/' },
    { name: 'Medium', icon: <FaMedium size={22}/>, url: 'https://medium.com/@ishthumber' },
    { name: 'Twitter', icon: <FaXTwitter size={22}/>, url: 'https://twitter.com/ishthumber' },
  ], []);

  return (
    <footer className="relative w-full max-w-7xl mx-auto sm:pt-12 pb-8 mt-48 font-gtReg">
      <div className='relative bottom-12 sm:bottom-32 p-2 w-11/12 mx-auto items-center border-t border-blue-gray-800/50 sm:pt-10'>
        <span className='font-black text-wild-sand-100 text-2xl tracking-wider hover:text-purple-400 transition-all duration-500 hover:underline underline-offset-8'>
          Ish Thumber.
        </span>
      </div>

      <div className="sm:absolute w-fit bottom-24 mx-auto sm:right-10 py-3 px-8 rounded-lg shadow-xl transform sm:-rotate-[4deg] transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer bg-blue-gray-800/40 border-blue-gray-700/50 border-2 backdrop-blur-xl shadow-purple-400/10">
        <div className="flex items-center gap-3 mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <p className="text-sm font-semibold text-gray-200">Available for Opportunities</p>
        </div>
        <div className="border-t border-gray-700/50 pt-3 flex justify-between items-center">
          <p className="font-mono text-base font-bold text-genoa-300 tracking-[0.15rem]">{time || '...'}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span><FaLocationDot size={12} /></span>
            <span>Una, Gujarat, India</span>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-0 mx-auto w-fit sm:absolute bottom-44 sm:bottom-28 left-4 sm:left-10 p-4 bg-blue-gray-800/40 border-blue-gray-700/50 border-2 rounded-lg shadow-xl transform sm:rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer backdrop-blur-xl shadow-purple-500/10">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-300">
          Built with
          <FaReact className="text-cyan-400" size={20} /> &
          <SiTailwindcss className="text-[#38bdf8]" size={20} />
        </div>
      </div>

      <div className="w-11/12 mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-wild-sand-400 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-genoa-400 hover:scale-125 transition-all duration-500 text-wild-sand-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
