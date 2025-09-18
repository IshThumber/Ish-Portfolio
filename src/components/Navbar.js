import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { LuMenu, LuX } from "react-icons/lu";
const MenuIcon = () => <LuMenu size={24} />;
const CloseIcon = () => <LuX size={24} />;

const NavItem = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="relative">
      <NavLink
        to={to}
        onClick={onClick}
        className="relative block px-5 py-2 text-md text-gray-300 transition-colors duration-500 rounded-2xl hover:text-white"
        aria-current={isActive ? "page" : undefined}
      >
        {/* The "magnetic" pill that animates behind the active link */}
        {isActive && (
          <div
            className="absolute inset-0 bg-purple-400/10 rounded-xl shadow-inner shadow-purple-500/10"
            layoutId="active-nav-pill"
            initial={false}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a shadow to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  useEffect(() => setIsOpen(false), [location]);

  const links = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Bento Grid", to: "/bento-grid" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full p-4">
        <nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`relative w-full max-w-5xl px-4 py-3 mx-auto border-2 border-blue-gray-700/50 rounded-2xl bg-blue-gray-800/40 backdrop-blur-xl shadow-l transition-shadow duration-300 ${
            isScrolled ? "shadow-purple-500/10" : ""
          }`}
          aria-label="Main Navigation"
        >
          <div className="flex items-center justify-between text-wild-sand-300">
            <Link
              to="/"
              className="text-2xl font-bold transition-colors text-gray-200 hover:text-yellow-300"
              aria-label="Home"
            >
              Ish Thumber
            </Link>

            <ul className="hidden lg:flex justify-center items-center gap-3 p-1 bg-blue-gray-900/50 rounded-2xl border border-blue-gray-700">
              {links.map(link => (
                <NavItem key={link.to} to={link.to}>
                  {link.label}
                </NavItem>
              ))}
            </ul>

            <div className="hidden lg:block">
              <a
                href="/contact"
                className="px-5 py-4 rounded-xl bg-purple-400 hover:bg-gradient-to-r from-purple-400 to-purple-700 hover:text-wild-sand-100 text-wild-sand-100 font-bold transition-all duration-300"
                aria-label="Contact"
              >
                Get in Touch
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 rounded-md hover:bg-purple-400/20"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 p-4 lg:hidden"
            aria-label="Mobile Menu"
          >
            <div className="relative flex flex-col items-center w-full h-full pt-24 pb-12 bg-blue-gray-900/95 border border-blue-gray-700/50 rounded-2xl shadow-2xl backdrop-blur-xl">
              <ul className="flex flex-col items-center gap-8">
                {links.map(link => (
                  <NavItem key={link.to} to={link.to}>
                    <span className="text-3xl font-semibold">{link.label}</span>
                  </NavItem>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-gradient-to-r hover:text-wild-sand-100 from-purple-500 to-purple-700 text-wild-sand-100 font-bold transition-all duration-300"
                  aria-label="Contact"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
