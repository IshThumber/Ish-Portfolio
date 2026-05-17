import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const MenuIcon = () => <FiMenu size={24} />;
const CloseIcon = () => <FiX size={24} />;

const NavItem = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="relative z-10">
      <NavLink
        to={to}
        onClick={onClick}
        className={`relative block px-4 py-2 text-sm font-accent tracking-wide transition-colors duration-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-400
          ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
      >
        {/* Active Pill Animation */}
        {isActive && (
          <motion.div
            layoutId="active-nav-pill"
            className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/5 shadow-inner"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const links = [
    { label: "About", to: "/about-me" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Certifications", to: "/certifications" },
    { label: "Resume", to: "/resume" },
  ];

  // Map route to section border color
  const getBorderTint = () => {
    const path = location.pathname;
    if (path.includes("about")) return "border-about-500/30";
    if (path.includes("projects")) return "border-projects-500/30";
    if (path.includes("experience")) return "border-experience-500/30";
    if (path.includes("contact")) return "border-contact-500/30";
    if (path.includes("certifications")) return "border-certifications-500/30";
    if (path.includes("resume")) return "border-hero-500/30";
    return "border-hero-500/30"; // default
  };

  return (
    <>
      <header className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${isScrolled ? "py-4" : "py-6"}`}>
        <nav className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              mass: 0.8,
            }}
            className={`
               relative flex items-center justify-between px-5 py-3
               rounded-2xl transition-[background-color,border-color,box-shadow] duration-500 ease-out
               ${isScrolled ? `glass-surface border-b-2 ${getBorderTint()}` : "bg-transparent border border-transparent"}
             `}
          >
            {/* Logo */}
            <Link
              to="/"
              className="font-primary text-3xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-400 rounded"
            >
              Ish<span className="text-about-400">.</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 bg-transparent p-1 rounded-2xl">
              {links.map((link) => (
                <NavItem key={link.to} to={link.to}>
                  {link.label}
                </NavItem>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-about-400 to-about-600 text-white text-sm font-accent tracking-wide shadow-lg shadow-about-500/20 hover:shadow-about-500/40 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-about-400"
              >
                <span>Get in Touch</span>
                <FiArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-400"
                aria-label="Toggle Menu"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </motion.div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-50 glass-heavy md:hidden">
            {/* Close Button Inside Overlay for ease */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-12 h-12 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-400"
                aria-label="Close Menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex flex-col h-full px-6 pt-32 pb-12">
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                        text-4xl font-black font-heading tracking-tighter transition-colors min-h-[48px] flex items-center
                        ${isActive ? "gradient-text gradient-hero" : "text-gray-400 hover:text-white"}
                      `}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.08,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      {link.label}
                    </motion.div>
                  </NavLink>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full h-14 bg-white text-gray-900 font-bold rounded-xl active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-400"
                >
                  Let's Work Together <FiArrowUpRight />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
