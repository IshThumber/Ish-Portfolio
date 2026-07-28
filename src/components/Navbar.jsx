import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ activeSection = "viewfinder" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "viewfinder", label: "01 / VIEWFINDER", href: "#viewfinder" },
    { id: "odyssey", label: "02 / ODYSSEY", href: "#odyssey" },
    { id: "garage", label: "03 / GARAGE & OBS", href: "#garage" },
    { id: "artifacts", label: "04 / ARTIFACTS", href: "#artifacts" },
    { id: "pitstop", label: "05 / PIT STOP", href: "#pitstop" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#CBD5E1] shadow-xs py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Handwritten Title */}
        <a href="#viewfinder" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border-1.5 border-[#1E293B] bg-[#FEF3C7] flex items-center justify-center font-bold text-sm text-[#1E293B] shadow-2xs group-hover:rotate-12 transition-transform">
            IT
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-[#1E293B]">Ish Thumber</span>
            <span className="hidden sm:inline-block font-handwriting text-xs text-slate-500 ml-2">field notebook</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#CBD5E1] rounded-full p-1.5 shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-[12px] font-medium tracking-[0.02em] transition-all duration-200 ${
                  isActive
                    ? "bg-[#1E293B] text-[#FAF8F5] shadow-xs font-semibold"
                    : "text-[#64748B] hover:text-[#1E293B] hover:bg-[#FAF8F5]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs: Resume & Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Ish_Thumber_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Ish_Thumber_Resume.pdf"
            className="px-4 py-1.5 rounded-md border border-[#1E293B] text-xs font-semibold text-[#1E293B] bg-white hover:bg-[#FEF3C7] transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <span>📄 Resume PDF</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md border border-[#CBD5E1] bg-white text-[#1E293B]"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#CBD5E1] px-4 pt-2 pb-6 shadow-md"
          >
            <div className="flex flex-col gap-2 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-[#1E293B] hover:bg-[#FEF3C7]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-200 mt-2 flex gap-3">
                <a
                  href="/Ish_Thumber_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Ish_Thumber_Resume.pdf"
                  className="flex-1 py-2 text-center rounded-md border border-[#1E293B] text-xs font-semibold text-[#1E293B] bg-white"
                >
                  📄 View Resume PDF
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
