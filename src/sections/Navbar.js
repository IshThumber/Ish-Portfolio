import React from "react";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import profile from "../assets/4.png";
import { Link } from "react-router-dom";
import { Power } from "lucide-react";

function NavList() {
  const contact = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const close = () => {
    // close the site when clicked
    window.close();
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
          className="flex items-center hover:text-desert-storm-700 transition-colors "
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
          className="flex items-center hover:text-desert-storm-700 transition-colors"
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
          className="flex items-center hover:text-desert-storm-700 transition-colors"
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
          className="flex items-center hover:text-genoa-700 transition-colors"
        >
          Contact-Me
        </a>
      </Typography>
      <Typography>
        <Link to="/" onClick={close}>
          <Power />
        </Link>
      </Typography>
    </ul>
  );
}

const NavbarSimple = () => {
  const close = () => {
    // close the site when clicked
    window.close();
  };
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
          <Link to="/" onClick={close}>
            <Power />
          </Link>
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
