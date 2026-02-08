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
        className={`relative block px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-xl
          ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
      >
        {/* Active Pill Animation */}
        {isActive && (
          <motion.div
            layoutId="active-nav-pill"
            className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm border border-white/5 shadow-inner"
            transition={{ type: "tween", duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => setIsOpen(false), [location]);

  const links = [
    { label: "About", to: "/about-me" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Certifications", to: "/certifications" },
    // { label: "Bento Grid", to: "/bento-grid" },
    { label: "Resume", to: "/resume" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${isScrolled ? "py-4" : "py-6"}`}>
        <nav className="mx-auto max-w-6xl px-4 md:px-6">
          {/* <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} */}
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
               ${isScrolled ? "bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-purple-900/10" : "bg-transparent border border-transparent"}
             `}
          >
            {/* Logo */}
            <Link to="/" className="font-urbanist text-3xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
              Ish<span className="text-gigas-400">.</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 bg-gray-800/40 p-1 rounded-2xl border border-gray-700/30 backdrop-blur-md">
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
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <FiArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors" aria-label="Toggle Menu">
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </motion.div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-900/90 md:hidden"
          >
            <div className="flex flex-col h-full px-6 pt-28 pb-10">
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                        text-4xl font-black font-urbanist tracking-tighter transition-colors
                        ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-genoa-300" : "text-gray-400"}
                      `}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.1,
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
                <a href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-gray-900 font-bold rounded-xl active:scale-95 transition-transform">
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
