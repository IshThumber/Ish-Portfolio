import React from "react";
import { Power } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/4.png";
import { Navbar, Typography } from "@material-tailwind/react";
import { ScrollLink } from "react-scroll";

const NavList = () => {
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
        "flex items-center hover:text-desert-storm-700 transition-colors"
    },
    {
      label: "About",
      onClick: about,
      className:
        "flex items-center hover:text-desert-storm-700 transition-colors"
    },
    {
      label: "Skills",
      onClick: skills,
      className:
        "flex items-center hover:text-desert-storm-700 transition-colors"
    },
    {
      label: "Contact-Me",
      href: "/",
      className: "flex items-center hover:text-genoa-700 transition-colors"
    }
  ];

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
          {link.onClick ? (
            <Link onClick={link.onClick} className={link.className}>
              {link.label}
            </Link>
          ) : (
            <a href={link.href} className={link.className}>
              {link.label}
            </a>
          )}
        </Typography>
      ))}
    </ul>
  );
};

const NavbarSimple = () => {
  return (
    <Navbar className="fixed top-1 m-2 z-10 navWidth bg-desert-storm-100 py-5 font-brandonMedium shadow-none rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-2 border-desert-storm-100">
      <div className="font-brandonMedium flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="flex flex-row items-center gap-2 font-brandonMedium mr-4 py-1.5"
        >
          <img src={profile} alt="logo" className="w-16 md:w-12 aspect-auto" />
        </Typography>
        <Typography className="block sm:hidden">
          {/* <Link to="/" onClick={close}> */}
          <Power />
          {/* </Link> */}
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarSimple;
