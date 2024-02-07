import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
const Footer = () => {
  const defaultClass = "block px-4 py-1 duration-500 rounded-lg hover:bg-purple-400 hover:text-wild-sand-950 transition-color"
  const linkClass = "block px-4 py-1 duration-500 border-b-4 border-b-purple-400 transition-color"

  return (
    <div className="relative flex max-w-full max-h-full p-1 mt-20 font-semibold transition-all duration-500 font-gtReg text-wild-sand-200/60">
      <div className="flex flex-col items-center justify-around w-8/12 gap-5 p-3 m-auto bg-transparent md:gap-8 lg:flex-row rounded-xl ">
        <div className="flex flex-col items-center gap-0 lg:flex-row md:gap-2 ">
          <NavLink to="/">
            <span className="block text-lg transition-all duration-500 rounded-lg hover:underline hover:decoration-yellow-200 underline-offset-4 decoration-2">Ish Thumber</span>
          </NavLink>
          <span className="hidden text-5xl font-thin lg:block font-brandonLight">/</span>
          <span className="block text-xs">©2024 </span>
        </div>
        <div className="flex flex-row items-center gap-1 text-md">
          <NavLink to="/about" className={({ isActive }) => isActive ? linkClass : defaultClass}>
            <span>About</span>
          </NavLink>
          <span className="block text-5xl font-thin font-brandonLight">/</span>
          <NavLink to="/projects" className={({ isActive }) => isActive ? linkClass : defaultClass}>
            <span>Projects</span>
          </NavLink>
          <span className="block text-5xl font-thin font-brandonLight">/</span>
          <NavLink to="/contact" className={({ isActive }) => isActive ? linkClass : defaultClass}>
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link to="https://github.com/ishthumber" target="_blank" rel="noopener noreferrer">
            <span className="items-center justify-center block p-2 text-lg duration-500 rounded-full bg-blue-gray-400 hover:bg-cyan-700 hover:text-wild-sand-950 transition-color hover:scale-125"><FiGithub /></span>
          </Link>
          <Link to="https://www.linkedin.com/in/ishthumber/>" target="_blank" rel="noopener noreferrer">
            <span className="items-center justify-center block p-2 text-lg duration-500 rounded-full bg-blue-gray-400 hover:bg-cyan-700 hover:text-wild-sand-950 transition-color hover:scale-125"><FiLinkedin /></span>
          </Link>
          <Link to="https://twitter.com/ishthumber" target="_blank" rel="noopener noreferrer">
            <span className="items-center justify-center block p-2 text-lg duration-500 rounded-full bg-blue-gray-400 hover:bg-cyan-700 hover:text-wild-sand-950 transition-color hover:scale-125"><FiTwitter /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer