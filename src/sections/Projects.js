import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { LuDot } from "react-icons/lu";
import FooterConcept2 from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import { projects } from "../utils/General";

const ProjectItem = ({ project, spanClass = "", fullWidth = "" }) => {
  let currentYear = new Date().getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-blue-gray-700/40 rounded-2xl p-6 lg:p-8 shadow-lg ${
        project.year === "ND" ? `bg-purple-700/30 ${fullWidth}` : ""
      } ${spanClass} ${
        currentYear - project.year > 1 ? "border-b-2 border-b-purple-300" : ""
      } backdrop-blur-sm hover:shadow-purple-400/20 transform transition-all duration-300`}
    >
      <div className="flex flex-col justify-between w-full h-full">
        {/* Year */}
        {project.year !== "ND" && (
          <p className="text-sm font-semibold text-genoa-300">{project.year}</p>
        )}

        {/* Project name */}
        <h3 className="font-black text-3xl md:text-4xl text-white mt-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-wild-sand-200/80 leading-relaxed text-sm mt-4 text-justify">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 text-sm my-4">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="bg-purple-400/10 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 mt-4 text-sm mx-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-100 hover:text-genoa-300 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.liveUrl &&
            project.githubUrl &&
            project.githubUrl !== "Private" && (
              <span className="text-gray-400">
                <LuDot size={24} />
              </span>
            )}
          {project.githubUrl && project.githubUrl !== "Private" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-100 hover:text-genoa-300 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="min-h-screen transition-all duration-500">
      <Helmet>
        <title>Projects | Ish Thumber Portfolio</title>
        <meta
          name="description"
          content="A showcase of projects by Ish Thumber, Cloud Engineer and Developer."
        />
        <meta property="og:title" content="Projects | Ish Thumber Portfolio" />
        <meta
          property="og:description"
          content="A showcase of projects by Ish Thumber, Cloud Engineer and Developer."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ishthumber.vercel.app/projects"
        />
        <meta property="og:image" content="/profile.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Ish Thumber Portfolio" />
        <meta
          name="twitter:description"
          content="A showcase of projects by Ish Thumber, Cloud Engineer and Developer."
        />
        <meta name="twitter:image" content="/profile.ico" />
      </Helmet>
      <header className="fixed z-50 w-full">
        <Navbar />
      </header>

      <PageTransition>
        <div className="h-36 md:h-32" />
        <section className="relative max-w-7xl md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
          <div className="relative flex flex-col justify-between w-full m-auto gap-14">
            <div className="w-full m-auto mb xl:w-full md:w-11/12 text-center md:text-left line-clamp-none">
              <h1 className="font-black tracking-tight font-urbanist text-[4rem] md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-300 to-genoa-300 inline-block text-transparent bg-clip-text md:w-fit w-full">
                Projects
              </h1>
            </div>

            {/* Bento grid: if odd number of projects, make first card full width on large screens */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => {
                const total = projects.length;
                const isOdd = total % 2 !== 0;
                let fullWidth = "col-span-2";
                let spanClass = "col-span-2";
                if (index === 0) {
                  spanClass = isOdd
                    ? "col-span-2 lg:col-span-4"
                    : "sm:col-span-2 lg:col-span-2";
                }
                return (
                  <ProjectItem
                    key={index}
                    project={{ ...project, index: index + 1 }}
                    spanClass={spanClass}
                    fullWidth={fullWidth}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </PageTransition>
      <footer>
        <FooterConcept2 />
      </footer>
    </main>
  );
};

export default Projects;
