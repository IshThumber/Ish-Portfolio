import { Navbar, Typography } from "@material-tailwind/react";
// import { FiSun, FiMoon } from "react-icons/fi";
import React from "react";
import { Link, NavLink } from "react-router-dom";


const NavList = () => {
  const className = "flex items-center px-4 py-[6px] text-lg transition-colors duration-300 rounded-lg font-gtReg hover:bg-yellow-300 text-wild-sand-300 hover:text-blue-gray-700"
  const ClassName = "flex items-center px-4 py-[0px] text-lg transition-colors duration-300 font-gtReg border-b-4 border-b-yellow-300 text-wild-sand-300"
  const links = [
    {
      label: "About",
      to: "/about",
      className,
      ClassName
    },
    {
      label: "Projects",
      to: "/projects",
      className,
      ClassName
    },
    {
      label: "Contact-Me",
      to: "/contact",
      className,
      ClassName
    }
  ];

  // console.log(links.map(it => typeof it.label));
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
      {links.map((link, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          {link.to && (
            <NavLink to={link.to} className={({ isActive }) =>
              isActive ? link.ClassName : link.className
            }>
              {link.label}
            </NavLink>
          )}
        </Typography>
      ))
      }

      {/* <div className="p-2 cursor-pointer" onClick={toggleDark}>
        {dark ? (
          <FiSun
            className="duration-700 dark:text-wild-sand-300 transition-color"
            size={24}
          />
        ) : (
          <FiMoon
            className="duration-700 dark:text-wild-sand-300 transition-color"
            size={24}
          />
        )}
      </div> */}
    </ul >
  );
};
const NavbarSimple = () => {
  return (
    <Navbar className="w-3/4 px-4 py-3 m-2 mx-auto border-2 shadow-none md:py-2 bg-wild-sand-100/30 font-gtReg rounded-xl md:rounded-2xl backdrop-filter backdrop-blur-md border-desert-storm-100">
      {/* <Navbar className="fixed z-10 py-5 m-2 border-2 shadow-none top-1 navWidth bg-desert-storm-50 font-brandonMedium rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-desert-storm-100 dark:border-wild-sand-700"> */}
      <div className="flex items-center justify-between text-wild-sand-300">
        <Link to="/" >
          <h2 className="text-[22px] py-1 md:m-0 mt-1 align-middle md:text-2xl transition-colors duration-200 rounded-lg md:px-3 md:py-1 font-gtReg hover:bg-purple-500 place-self-center"
          >Ish Thumber</h2>
        </Link>

        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarSimple;
