// import { useMemo } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FiMail, FiFileText } from "react-icons/fi"; // Added icons for better UX
import profile from "../assets/profile.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import TechList from "../components/TechList";
import { projects } from "../utils/General";
import CustomHeadings from "../components/CustomHeadings";

// --- Components ---
// 1. Stats Component: specific metrics give instant credibility
const StatItem = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-2xl font-bold text-yellow-300 ">{value}</span>
    <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{label}</span>
  </div>
);

const currentYear = new Date().getFullYear();
const experience = currentYear - 2024;
const projectCount = projects.length - 1;

// 2. Profile Image Component: Isolated for cleaner code
const ProfileImage = () => (
  <figure className="relative xl:w-[40%] flex justify-center items-center group">
    {/* Animated Background Blobs */}
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-green-400/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

    <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80">
      {/* Decorative Border Frame */}
      <div className="absolute inset-0 border-2 border-dashed border-purple-400/30 rounded-2xl transform rotate-6 transition-transform duration-500 group-hover:rotate-12" />
      <div className="absolute inset-0 border-2 border-green-400/30 rounded-2xl transform -rotate-6 transition-transform duration-500 group-hover:-rotate-12" />

      {/* Main Image */}
      <img
        src={profile}
        alt="Ish Thumber"
        className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700/50 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 ease-out"
      />

      {/* Floating Badge (UX enhancement) */}
      <div className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 rounded-xl shadow-xl animate-bounce-slow z-50 cursor-crosshair">
        <span className="text-2xl">🚀</span>
      </div>
    </div>
  </figure>
);

const ProfileSection = () => (
  <motion.article
    className="relative flex flex-col-reverse xl:flex-row justify-between items-center gap-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <section className="flex flex-col w-full gap-8 xl:w-[60%] text-gray-200">
      {/* Header Info */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-4xl">Wait, who is </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-green-400">Ish Thumber?</span>
        </h2>

        <h3 className="flex flex-wrap items-center gap-3 text-lg font-medium text-gray-400">
          <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 text-purple-300">Cloud Engineer</span>
          <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 text-green-300">Full Stack Dev</span>
          <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 text-yellow-300">AWS Community Builder</span>
        </h3>
      </div>

      {/* Bio Text - Improved readability with spacing and max-width */}
      <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-prose">
        <p>
          I'm a builder at heart. My day job involves architecting
          <strong className="text-gray-100 font-semibold"> scalable cloud infrastructure </strong>
          on AWS, but my passion lies in bridging the gap between <span className="text-yellow-300">Dev</span> and <span className="text-purple-300">Ops</span>.
        </p>
        <p>
          Whether I'm writing Terraform modules, orchestrating Kubernetes clusters, or building a React frontend to visualize it all - I thrive on solving complex problems with
          clean, automated solutions.
        </p>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-800/50">
        <StatItem value={`${experience}+`} label="Years Exp." />
        <StatItem value={`${projectCount - 1}+`} label="Projects" />
        <StatItem value="3+" label="Certifications" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link
          to="mailto:ishthumber343@gmail.com"
          className="group relative px-6 py-3.5 rounded-xl bg-purple-500 text-white font-bold overflow-hidden shadow-lg shadow-purple-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-white/20 trangray-y-full group-hover:trangray-y-0 transition-transform duration-300" />
          <span className="relative flex items-center gap-2">
            <FiMail className="text-xl" /> Say Hello
          </span>
        </Link>

        {/* Re-enabled and styled Resume Button */}
        <Link
          to="/resume"
          className="group px-6 py-3.5 rounded-xl bg-gray-800 text-gray-200 font-bold border border-gray-700 hover:border-green-400/50 hover:text-green-300 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <FiFileText className="text-xl" /> View Resume
        </Link>
      </div>
    </section>

    <ProfileImage />
  </motion.article>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-purple-500/30 selection:text-purple-200">
      <title>About | Ish Thumber</title>
      <meta name="description" content="Cloud Engineer & Developer Portfolio" />

      <Navbar />

      <PageTransition>
        {/* Background Grid Pattern for texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="h-24 lg:h-32" /> {/* Spacer */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-4">
          {/* Main Title Section */}
          <CustomHeadings heading="ABOUT" subHeading="My Story" description="A short breif of me and my tools that I use to build." gradientType="about" />

          {/* Profile Card Container - Glassmorphism */}
          <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-4xl p-6 md:p-12 shadow-2xl">
            <ProfileSection />
          </div>

          {/* Tech Stack Section */}
          <section className="mt-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </div>
            <TechList />
          </section>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default AboutPage;
