import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { PiGithubLogo, PiLink } from "react-icons/pi";
import FooterConcept2 from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import { projects } from "../utils/General";

const ProjectItem = ({ project }) => {
  return (
    <motion.article
      className="w-11/12 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {project.index !== 1 && (
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-16" />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center bg-blue-gray-700/40 backdrop-blur-sm rounded-2xl shadow-lg p-6 lg:p-10 border-2 border-blue-gray-600/30">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold text-genoa-300 mb-2">{project.year}</p>

          <h3 className="font-black text-4xl text-wild-sand-100 mb-4">{project.name}</h3>

          <p className="text-wild-sand-200/80 leading-relaxed max-w-2xl">{project.description}</p>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-lg font-bold text-purple-300 mb-4">Built With</h4>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tech => (
              <span key={tech} className="bg-purple-400/10 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/20">{tech}</span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-300 transition-colors hover:text-genoa-300">
                <PiLink size={22} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "Private" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-300 transition-colors hover:text-genoa-300">
                <PiGithubLogo size={22} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectWrapper = () => {
  return (
    <main className="min-h-screen transition-all duration-500">
      <Helmet>
        <title>Projects | Ish Thumber Portfolio</title>
        <meta name="description" content="A showcase of projects by Ish Thumber, Cloud Engineer and Developer." />
        <meta property="og:title" content="Projects | Ish Thumber Portfolio" />
        <meta property="og:description" content="A showcase of projects by Ish Thumber, Cloud Engineer and Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ishthumber.vercel.app/projects" />
        <meta property="og:image" content="/profile.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Ish Thumber Portfolio" />
        <meta name="twitter:description" content="A showcase of projects by Ish Thumber, Cloud Engineer and Developer." />
        <meta name="twitter:image" content="/profile.ico" />
      </Helmet>
      <header className="fixed z-50 w-full">
        <Navbar />
      </header>
      <PageTransition>
        <div className="h-36 md:h-32" />
        <section className="relative w-[97%] md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
          <div className="relative flex flex-col justify-between w-full m-auto gap-14">
            <div className="w-full m-auto mb xl:w-full md:w-11/12 text-center md:text-left">
              <h1 className="font-black tracking-tight font-urbanist text-[4rem] md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-300 to-genoa-300 inline-block text-transparent bg-clip-text md:w-fit w-full">
                Projects
              </h1>
            </div>
            <div>
              {projects.map((project, index) => (
                <ProjectItem key={project.index} project={{ ...project, index: index + 1 }} />
              ))}
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

export default ProjectWrapper;
