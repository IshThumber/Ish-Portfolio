import { motion } from "motion/react";
import { FiExternalLink, FiGithub, FiLock } from "react-icons/fi";
import FooterConcept2 from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import { projects } from "../utils/General";
import CustomHeadings from "../components/CustomHeadings";
import { useState } from "react";

// Animation Variants for Staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectItem = ({ project, spanClass = "" }) => {
  const isPrivate = project.githubUrl === "Private";
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col justify-between
        bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 lg:p-8
        border border-gray-700/50 shadow-xl
        hover:border-purple-500/30 hover:shadow-purple-500/10 hover:-translate-y-1
        transition-all duration-300 ${spanClass}`}
    >
      {/* Top Section: Year & Links */}
      <div className="flex justify-between items-start mb-4">
        <span
          className={`text-xs font-bold px-2 py-1 rounded-md tracking-wide
          ${project.year === "ND" ? "bg-purple-500/20 text-purple-300" : "bg-gray-700 text-gray-400"}`}
        >
          {project.year === "ND" ? "FEATURED" : project.year}
        </span>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
              <FiExternalLink size={20} />
            </a>
          )}

          {isPrivate ? (
            <span className="text-gray-500 cursor-not-allowed" title="Private Repository">
              <FiLock size={20} />
            </span>
          ) : (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub Repo">
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">{project.name}</h3>

        <motion.p
          layout
          onHoverStart={() => setExpanded(true)}
          onHoverEnd={() => setExpanded(false)}
          className={`mt-4 text-gray-400 leading-relaxed text-xs md:text-base ${expanded ? "" : "line-clamp-4"}`}
        >
          {project.description}
        </motion.p>
      </div>

      {/* Tech Stack */}
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-700/50 text-hopbush-500 border border-gray-600/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-purple-500/30 selection:text-purple-200">
      <title>Projects | Ish Thumber</title>
      <meta name="description" content="Showcase of cloud engineering and full-stack development projects." />

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
            heading="WORK"
            subHeading="Selected Projects"
            description="A collection of tools, accelerators, and applications designed to solve real-world problems."
            gradientColor="gradient-projects"
          />

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {projects.map((project, index) => {
              // Logic for span classes: Make specific featured items span 2 columns if desired
              // For now, let's make the first item span 2 columns on large screens for visual interest
              const spanClass = index === 0 ? "col-span-2 md:col-span-2 lg:col-span-4" : "col-span-2";

              return <ProjectItem key={index} project={project} spanClass={spanClass} />;
            })}
          </motion.div>
        </main>
      </PageTransition>

      <FooterConcept2 />
    </div>
  );
};

export default Projects;
