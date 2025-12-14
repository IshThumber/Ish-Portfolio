import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { PiBriefcaseFill, PiBriefcase } from "react-icons/pi"; // Updated icons

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { experience } from "../utils/General";
import PageTransition from "./../components/PageTransition";
import CustomHeadings from "../components/CustomHeadings";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ExperienceItem = ({ experience, isLast }) => {
  const type = experience.type?.toLowerCase();
  const year = experience.year;

  // Dynamic Styling Logic
  let icon, iconBg, borderColor, titleColor, glowColor;

  if (year === "Current Role") {
    icon = <PiBriefcaseFill size={24} />;
    iconBg = "bg-green-400/20 text-green-300";
    borderColor = "border-green-400/50";
    titleColor = "text-green-300";
    glowColor = "shadow-green-400/20";
  } else if (type === "community") {
    icon = <FaAward size={22} />;
    iconBg = "bg-yellow-400/20 text-yellow-300";
    borderColor = "border-yellow-400/50";
    titleColor = "text-yellow-300";
    glowColor = "shadow-yellow-400/20";
  } else {
    // Previous Roles
    icon = <PiBriefcase size={22} />;
    iconBg = "bg-purple-400/20 text-purple-300";
    borderColor = "border-purple-400/30";
    titleColor = "text-purple-300";
    glowColor = "shadow-purple-400/10";
  }

  return (
    <motion.div variants={itemVariants} className="relative pl-8 md:pl-12 py-2">
      {/* Timeline Line connecting items */}
      {!isLast && <div className="absolute left-[19px] md:left-[23px] top-12 h-full w-0.5 bg-gradient-to-b from-gray-700 via-gray-800 to-transparent" />}

      {/* Timeline Node/Icon */}
      <div
        className={`absolute left-0 md:left-1 top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 backdrop-blur-md z-10 transition-transform duration-300 hover:scale-110 ${iconBg} ${borderColor} shadow-lg ${glowColor}`}
      >
        {icon}
      </div>

      {/* Content Card */}
      <div
        className={`
        relative flex flex-col gap-2 p-6 rounded-2xl
        bg-gray-800/30 backdrop-blur-md border border-gray-700/50
        hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300
        mb-8 shadow-xl
      `}
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${titleColor} opacity-90`}>{experience.year}</span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-100 font-urbanist">{experience.name}</h3>
          </div>
          <span className="text-sm font-medium text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full w-fit border border-gray-700">{experience.company}</span>
        </div>

        {/* Description List */}
        <ul className="mt-2 space-y-2">
          {experience.description.map((point, i) => (
            <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start gap-2">
              <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${year === "Current Role" ? "bg-green-400" : "bg-purple-400/50"}`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-purple-500/30 selection:text-purple-200">
      <title>Timeline | Ish Thumber</title>
      <meta name="description" content="Professional experience and timeline of Ish Thumber, Cloud Engineer and Developer." />

      <Navbar />

      <PageTransition>
        {/* Background Texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="h-24 lg:h-32" />

        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-4">
          {/* Header Section */}
          <CustomHeadings
            heading="Career"
            subHeading="My Journey"
            description="The path I've taken, the communities I've built, and the work I'm proud of."
            gradientColor="gradient-experiences"
          />

          {/* Timeline Container */}
          <motion.div className="relative w-full max-w-6xl mx-auto pl-2 md:pl-4" variants={containerVariants} initial="hidden" animate="visible">
            {/* Main Vertical Guide Line (Background) */}
            <div className="absolute left-[20px] md:left-[24px] top-4 bottom-10 w-[2px] bg-gray-800/50" />

            {experience.map((item, index) => (
              <ExperienceItem key={index} experience={item} index={index} isLast={index === experience.length - 1} />
            ))}
          </motion.div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
