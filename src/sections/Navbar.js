import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
function NavList() {
  const contact = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          onClick={contact}
          className="flex items-center hover:text-blue-700 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-700 transition-colors"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-700 transition-colors"
        >
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-700 transition-colors"
        >
          Contact-Me
        </a>
      </Typography>
    </ul>
  );
}

const NavbarSimple = () => {
  return (
    <Navbar className="mx-auto w-screen py-5 font-brandonMedium shadow-none rounded-none bg-transparent border-0">
      <div className="font-brandonMedium flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="flex flex-row items-center gap-2 font-brandonMedium mr-4 py-1.5"
        >
          <img src={profile} alt="logo" className="w-14 md:w-11 aspect-auto" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
      {/* <Collapse open={openNav}>
        <NavList />
      </Collapse> */}
    </Navbar>
  );
};

export default NavbarSimple;
