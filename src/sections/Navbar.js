import { Navbar, Typography } from "@material-tailwind/react";
import { Lightbulb, LightbulbOff } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";
import profile from "../assets/4.png";

const NavList = ({ dark, toggleDark }) => {
  const home = () => {
    ScrollLink.scrollToTop();
  };
  const contact = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const about = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const skills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const links = [
    {
      label: "Home",
      onClick: home,
      className:
        "flex items-center hover:text-desert-storm-700 transition-colors dark:text-wild-sand-300 transition-color duration-500"
    },
    {
      label: "About",
      onClick: about,
      className:
        "flex items-center hover:text-desert-storm-700 transition-colors dark:text-wild-sand-300 transition-color duration-500"
    },
    {
      label: "Skills",
      onClick: skills,
      className:
        "flex items-center hover:text-desert-storm-700 transition-colors dark:text-wild-sand-300 transition-color duration-500"
    },
    {
      label: "Contact-Me",
      onClick: contact,
      className:
        "flex items-center hover:text-genoa-700 transition-colors dark:text-wild-sand-300 transition-color duration-500"
    }
  ];

  // console.log(links.map(it => typeof it.label));
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          {link.onClick && (
            <Link onClick={link.onClick} className={link.className}>
              {link.label}
            </Link>
          )}
        </Typography>
      ))}

      <div className="p-2 cursor-pointer" onClick={toggleDark}>
        {dark ? (
          <Lightbulb
            className="dark:text-wild-sand-300 transition-color duration-700"
            size={24}
          />
        ) : (
          <LightbulbOff
            className="dark:text-wild-sand-300 transition-color duration-700"
            size={24}
          />
        )}
      </div>
    </ul>
  );
};

const NavbarSimple = ({ dark, toggleDark }) => {
  return (
    <Navbar className="fixed top-1 m-2 z-10 navWidth bg-desert-storm-900 py-5 font-brandonMedium shadow-none rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-2 border-desert-storm-100 dark:border-wild-sand-700">
      <div className="font-brandonMedium flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="flex flex-row items-center gap-2 font-brandonMedium mr-4 py-1.5"
        >
          <img
            src={profile}
            alt="logo"
            className="w-16 md:w-12 aspect-auto ring-2 ring-offset-4 ring-green-500 ring-offset-inherit rounded-full"
          />
        </Typography>

        <div className="hidden lg:block">
          <NavList toggleDark={toggleDark} dark={dark} />
        </div>
        <div
          className="lg:hidden transition-all duration-300 p-2 rounded-full"
          onClick={toggleDark}
        >
          {dark ? (
            <Lightbulb
              className="dark:text-wild-sand-300 transition-color duration-700"
              size={28}
            />
          ) : (
            <LightbulbOff
              className="dark:text-wild-sand-300 transition-color duration-700"
              size={28}
            />
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarSimple;
