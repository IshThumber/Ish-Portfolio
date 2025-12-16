import { motion } from "motion/react";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiVite,
  SiFastapi,
  SiGit,
  SiTypescript,
  SiThanos,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import CustomHeadings from "./CustomHeadings";

// const techCategories = {
//   "Languages & Frontend": [
//     { name: "CPP", icon: <SiCplusplus size={22} /> },
//     { name: "Python", icon: <SiPython size={22} /> },
//     { name: "JavaScript", icon: <SiJavascript size={22} /> },
//     { name: "React", icon: <SiReact size={22} /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
//   ],
//   "Backend & Databases": [
//     { name: "Node.js", icon: <SiNodedotjs size={22} /> },
//     { name: "Express.js", icon: <SiExpress size={22} /> },
//     { name: "MongoDB", icon: <SiMongodb size={22} /> },
//     { name: "PostgreSQL", icon: <SiPostgresql size={22} /> },
//   ],
//   "Cloud Platforms": [
//     { name: "AWS", icon: <FaAws size={22} /> },
//     { name: "Azure", icon: <VscAzure size={22} /> },
//     { name: "GCP", icon: <SiGooglecloud size={22} /> },
//   ],
//   "DevOps & Infrastructure": [
//     { name: "Terraform", icon: <SiTerraform size={22} /> },
//     { name: "Docker", icon: <SiDocker size={22} /> },
//     { name: "Kubernetes", icon: <SiKubernetes size={22} /> },
//     { name: "Jenkins", icon: <SiJenkins size={22} /> },
//     { name: "GitHub", icon: <SiGithub size={22} /> },
//     { name: "Helm", icon: <SiHelm size={22} /> },
//   ],
//   "Monitoring & Logging": [
//     { name: "Prometheus", icon: <SiPrometheus size={22} /> },
//     { name: "Grafana", icon: <SiGrafana size={22} /> },
//   ],
// };

const technologies = [
  {
    name: "Languages & Frontend",
    techItems: [
      { name: "CPP", icon: <SiCplusplus size={22} /> },
      { name: "Python", icon: <SiPython size={22} /> },
      { name: "JavaScript", icon: <SiJavascript size={22} /> },
      { name: "TypeScript", icon: <SiTypescript size={22} /> },
      { name: "React", icon: <SiReact size={22} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
      { name: "Vite", icon: <SiVite size={22} /> },
    ],
  },
  {
    name: "Backend & Databases",
    techItems: [
      { name: "Node.js", icon: <SiNodedotjs size={22} /> },
      { name: "Express.js", icon: <SiExpress size={22} /> },
      { name: "MongoDB", icon: <SiMongodb size={22} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={22} /> },
      { name: "FastAPI", icon: <SiFastapi size={22} /> },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    techItems: [
      { name: "Terraform", icon: <SiTerraform size={22} /> },
      { name: "Docker", icon: <SiDocker size={22} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={22} /> },
      { name: "Jenkins", icon: <SiJenkins size={22} /> },
      { name: "GitHub", icon: <SiGithub size={22} /> },
      { name: "Git", icon: <SiGit size={22} /> },
      { name: "Helm", icon: <SiHelm size={22} /> },
    ],
  },
  {
    name: "Cloud Platforms",
    techItems: [
      { name: "AWS", icon: <FaAws size={22} /> },
      { name: "Azure", icon: <VscAzure size={22} /> },
      { name: "GCP", icon: <SiGooglecloud size={22} /> },
    ],
  },
  {
    name: "Monitoring & Logging",
    techItems: [
      { name: "Prometheus", icon: <SiPrometheus size={22} /> },
      { name: "Grafana", icon: <SiGrafana size={22} /> },
      { name: "Thanos", icon: <SiThanos size={22} /> },
      { name: "Loki" },
      { name: "Tempo" },
    ],
  },
];

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

const TechItem = ({ tech, spanClass = "" }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col justify-between
        bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 lg:p-8
        border border-gray-700/50 shadow-xl
        hover:border-[#b874a7]/30 hover:shadow-[#b874a7]/10 hover:-translate-y-1
        transition-all duration-300 ${spanClass}`}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-gray-100 group-hover:text-hopbush-300 transition-colors duration-300">{tech.name.trim()}</h3>

      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {tech.techItems.map((tech) => (
            <p key={tech.name.trim()} className="flex items-center gap-2 px-2.5 py-2 text-xs font-medium rounded-md bg-gray-700/50 text-hopbush-500 border border-gray-600/30">
              <span className="text-gray-400">{tech.icon}</span>
              <span className="">{tech.name.trim()}</span>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TechList = () => (
  <motion.section
    className="relative w-full p-1 text-gray-200"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-4">
      <CustomHeadings
        heading="TECH STACK"
        subHeading="My Toolkit"
        description="The primary technologies I leverage to architect, build, and deploy robust solutions."
        gradientColor="gradient-about"
      />
    </div>

    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" animate="visible">
      {technologies.map((tech, index) => {
        const spanClass = index === 0 ? "col-span-2 md:col-span-2 lg:col-span-4" : "col-span-2";

        return <TechItem key={index} tech={tech} spanClass={spanClass} />;
      })}
    </motion.div>
  </motion.section>
);

export default TechList;
