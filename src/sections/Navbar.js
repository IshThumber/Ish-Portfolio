import React from "react";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import profile from "../assets/4.png";
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
      <Typography>
        {/* theming button */}
        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
          className="hidden lg:inline-flex h-10"
          // onClick={darkThemeToggle}
        >
          {/* <Icon name="favorite" size="md" /> */}
          Theming
        </Button>
      </Typography>
    </ul>
  );
}

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
          darkThemeToggle
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
