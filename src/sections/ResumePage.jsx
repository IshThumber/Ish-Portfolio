import { motion } from "motion/react";
import React, { useState } from "react";
import { FiDownload, FiExternalLink, FiEye, FiFileText, FiMaximize2 } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import CustomHeadings from "../components/CustomHeadings";

// OPTION 1: If your PDF is in 'src/assets', import it (Recommended for Vite/Webpack)
import resumePdf from "../assets/Ish_Thumber_Resume.pdf";

// OPTION 2: If your PDF is in the 'public' folder, use the string path
// const resumePdf = "src/assets/IshThumber-Software-Resume.pdf";

const SidebarContent = ({ resumeUrl }) => (
  <>
    {/* Decorative Glow */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-kimberly-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

    <div className="relative z-10 w-full">
      <div className="flex items-center gap-4 mb-6">
        <span className="p-3 rounded-2xl bg-gradient-to-br from-kimberly-500/20 to-kimberly-600/20 text-kimberly-500 border border-kimberly-500/30">
          <FiFileText size={28} />
        </span>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100 font-urbanist tracking-tight">My Resume</h1>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mt-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Updated: 2025</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="hidden sm:inline">PDF</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gray-800/50 hover:bg-gray-700 text-gray-200 border border-gray-600/30 transition-all hover:scale-[1.02] active:scale-95 group/btn w-full"
        >
          <FiExternalLink className="group-hover/btn:rotate-45 transition-transform duration-300" />
          <span className="font-semibold">Open in New Tab</span>
        </a>

        <a
          href={resumeUrl}
          download="Ish_Thumber_Resume.pdf"
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95 w-full"
          style={{
            backgroundImage: "linear-gradient(to right, var(--color-kimberly-600), var(--color-kimberly-700))",
            boxShadow: "0 10px 15px -3px color-mix(in srgb, var(--color-kimberly-500) 25%, transparent)",
          }}
        >
          <FiDownload className="animate-bounce" />
          <span className="font-bold tracking-wide">Download CV</span>
        </a>
      </div>
    </div>
  </>
);

const ViewerContent = ({ resumeUrl, isHovered, isLoading, setIsLoading }) => (
  <>
    {/* Floating Preview Badge */}
    <div
      className={`absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-700 shadow-lg transition-all duration-300 pointer-events-none ${
        isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <p className="text-xs font-medium text-gray-300 flex items-center gap-2">
        <FiEye /> Preview Mode
      </p>
    </div>

    {/* Background Pattern */}
    <div
      className="absolute inset-0 z-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    {/* Loading State */}
    {isLoading && (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kimberly-500"></div>
      </div>
    )}

    {/* The Viewer Frame */}
    <div className="relative w-full h-full min-h-[60vh] md:min-h-[75vh] bg-transparent p-2 md:p-4">
      <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-inner relative">
        <iframe src={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} title="Resume Viewer" className="w-full h-full border-none" onLoad={() => setIsLoading(false)} />
      </div>
    </div>

    {/* Mobile/Fallback Overlay */}
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 bg-gray-900/80 backdrop-blur-md lg:hidden">
      <div className="p-4 rounded-full bg-gray-800 border border-gray-700 mb-4 shadow-xl">
        <FiMaximize2 size={32} className="text-kimberly-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">View Full Resume</h3>
      <p className="text-gray-400 mb-6 max-w-xs mx-auto text-sm">For the best experience, open the PDF in your native viewer.</p>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl bg-kimberly-600 text-white font-bold shadow-lg active:scale-95 transition-transform"
      >
        Open PDF
      </a>
    </div>
  </>
);

const ResumePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 selection:bg-kimberly-500/30 selection:text-kimberly-200 font-gtReg">
      <title>Resume | Ish Thumber</title>
      <meta name="description" content="View and download Ish Thumber's professional resume." />

      <Navbar />

      <PageTransition>
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        ></div>

        <div className="h-24 lg:h-32" />

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-4">
          <CustomHeadings heading="Resume" subHeading="Curriculum Vitae" description="A detailed look at my professional journey and skills." gradientType="resume" />

          <div className="flex flex-col lg:flex-row gap-6 mt-8 h-full min-h-[600px]">
            {/* Sidebar Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-1/3 xl:w-1/4 h-fit flex flex-col gap-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
            >
              <SidebarContent resumeUrl={resumePdf} />
            </motion.div>

            {/* Viewer Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-grow relative w-full lg:w-2/3 xl:w-3/4 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-900/50 group/viewer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ViewerContent resumeUrl={resumePdf} isHovered={isHovered} isLoading={isLoading} setIsLoading={setIsLoading} />
            </motion.div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default ResumePage;
