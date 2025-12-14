// import React, { useEffect, useMemo, useState } from "react";
// import { FaGithub, FaLinkedin, FaLocationDot, FaMedium, FaReact, FaXTwitter } from "react-icons/fa6";
// import { SiTailwindcss } from "react-icons/si";

// const Footer = () => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(formatTime());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = () => {
//     const options = {
//       timeZone: "Asia/Kolkata",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     };
//     return new Date().toLocaleTimeString("en-GB", options);
//   };

//   const socialLinks = useMemo(
//     () => [
//       {
//         name: "GitHub",
//         icon: <FaGithub size={22} />,
//         url: "https://github.com/ishthumber",
//       },
//       {
//         name: "LinkedIn",
//         icon: <FaLinkedin size={22} />,
//         url: "https://www.linkedin.com/in/ishthumber/",
//       },
//       {
//         name: "Medium",
//         icon: <FaMedium size={22} />,
//         url: "https://medium.com/@ishthumber",
//       },
//       {
//         name: "Twitter",
//         icon: <FaXTwitter size={22} />,
//         url: "https://twitter.com/ishthumber",
//       },
//     ],
//     []
//   );

//   return (
//     <footer className="relative w-full max-w-7xl mx-auto sm:pt-12 pb-8 mt-48 font-gtReg">
//       <div className="relative bottom-12 sm:bottom-32 p-2 w-11/12 mx-auto items-center border-t border-wedgewood-800/50 sm:pt-10">
//         {/* <span className="font-black text-gray-100 text-2xl tracking-wider hover:text-purple-400 transition-all duration-500 hover:underline underline-offset-8">
//           Ish Thumber.
//         </span> */}
//       </div>

//       <div className="sm:absolute w-fit bottom-24 mx-auto sm:right-10 py-3 px-8 rounded-lg shadow-xl transform sm:-rotate-[4deg] transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer bg-wedgewood-800/40 border-wedgewood-700/50 border-2 backdrop-blur-xl shadow-[#e6b1a8]/10">
//         <div className="flex items-center gap-3 mb-3">
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//           </span>
//           <p className="text-sm font-semibold text-[#DF9C90]">Available for Opportunities</p>
//         </div>
//         <div className="border-t border-gray-700/50 pt-3 flex justify-between items-center">
//           <p className="font-mono text-base font-bold text-green-300 tracking-[0.15rem]">{time || "..."}</p>
//           <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 my-auto py-1">
//             <span>
//               <FaLocationDot size={12} />
//             </span>
//             <span>Una, Gujarat, India</span>
//           </div>
//         </div>
//       </div>

//       <div className="mt-3 sm:mt-0 mx-auto w-fit sm:absolute bottom-44 sm:bottom-28 left-4 sm:left-10 p-4 bg-wedgewood-800/40 border-wedgewood-700/50 border-2 rounded-lg shadow-xl transform sm:rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer backdrop-blur-xl shadow-purple-500/10">
//         <div className="flex items-center gap-3 text-sm font-semibold text-gray-300">
//           Built with
//           <FaReact className="text-cyan-400" size={20} /> &
//           <SiTailwindcss className="text-[#38bdf8]" size={20} />
//         </div>
//       </div>

//       <div className="w-11/12 mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//         <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
//         <div className="flex gap-5">
//           {socialLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-400 hover:scale-125 transition-all duration-500 text-gray-300"
//             >
//               {link.icon}
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useMemo, useState } from "react";
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

  return (
    <footer className="relative w-full max-w-7xl mx-auto pt-20 pb-12 px-4 lg:px-8 text-gray-200 rounded-4xl footer-gradient">
      {/* Top Section with Badges */}

      <div className="flex flex-col md:flex-row justify-between items-end gap-10 md:gap-4 mb-16 relative z-10">
        {/* Availability Badge */}
        <div className="group relative w-full md:w-auto select-none">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex flex-col p-5 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="text-base font-signature font-bold text-gray-100 tracking-wider">Open to Opportunities</p>
            </div>

            <div className="h-px w-full bg-gray-700/50 my-2" />

            <div className="flex justify-between items-center gap-8">
              <p className="font-mono text-lg font-bold text-green-300 tracking-widest">{time || "--:--"}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md">
                <FaLocationDot size={10} className="text-purple-400" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="group relative w-full md:w-auto transform md:translate-y-8 select-none">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center gap-4 p-4 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:-translate-y-1 transition-transform duration-300">
            <span className="text-base font-signature font-medium text-gray-400 tracking-wider">Built with</span>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-3">
              <FaReact className="text-cyan-400 animate-spin-slow" size={20} title="React" />
              <span className="text-gray-400 animate-spin-slow">&</span>
              <SiTailwindcss className="text-sky-400 animate-spin-slow" size={20} title="Tailwind CSS" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8" />

      {/* Bottom Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <p className="text-gray-300 text-sm font-medium">
          © {new Date().getFullYear()} Ish Thumber. <span className="hidden sm:inline">Crafted with code & cloud.</span>
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
              aria-label={link.name}
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
