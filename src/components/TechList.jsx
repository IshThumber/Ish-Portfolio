import { motion } from "motion/react";
import {
  SiDocker,
  SiExpress,
  SiGrafana,
  SiHelm,
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
  SiTypescript,
  SiGithubactions,
  SiFlask,
  SiJavascript,
  SiCplusplus,
  SiArgo,
  SiSupabase,
  SiMysql,
  SiOpenai,
  SiLangchain,
  SiCanva,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiN8N,
  SiClaude,
  SiGooglegemini,
  SiTemporal,
  SiThanos,
  SiVectorlogozone,
} from "react-icons/si";
import { FaAws, FaDatabase } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
// import { TbBrandLoki } from "react-icons/tb";
import { BsRobot, BsCloudFill } from "react-icons/bs";
import CustomHeadings from "./CustomHeadings";

const bentoItems = [
  {
    title: "Languages",
    subtitle: "Core Programming",
    size: "medium",
    gradientFrom: "var(--color-gigas-400)",
    gradientTo: "var(--color-kimberly-400)",
    glowColor: "var(--color-gigas-500)",
    items: [
      { name: "Python", icon: <SiPython size={22} /> },
      { name: "TypeScript", icon: <SiTypescript size={22} /> },
      { name: "JavaScript", icon: <SiJavascript size={22} /> },
      { name: "C++", icon: <SiCplusplus size={22} /> },
    ],
  },
  {
    title: "Frontend",
    subtitle: "Building Interfaces",
    size: "medium",
    gradientFrom: "var(--color-hopbush-400)",
    gradientTo: "var(--color-careys-pink-400)",
    glowColor: "var(--color-hopbush-500)",
    items: [
      { name: "HTML", icon: <SiHtml5 size={22} /> },
      { name: "CSS", icon: <SiCss3 size={22} /> },
      { name: "React", icon: <SiReact size={22} /> },
      { name: "Vite.js", icon: <SiVite size={22} /> },
      { name: "Tailwind", icon: <SiTailwindcss size={22} /> },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Server Development",
    size: "medium",
    gradientFrom: "var(--color-wedgewood-400)",
    gradientTo: "var(--color-genoa-400)",
    glowColor: "var(--color-wedgewood-500)",
    items: [
      { name: "FastAPI", icon: <SiFastapi size={22} /> },
      { name: "Flask", icon: <SiFlask size={22} /> },
      { name: "Node.js", icon: <SiNodedotjs size={22} /> },
      { name: "Express", icon: <SiExpress size={22} /> },
    ],
  },
  {
    title: "Design",
    subtitle: "UI/UX",
    size: "small",
    gradientFrom: "var(--color-careys-pink-400)",
    gradientTo: "var(--color-hopbush-400)",
    glowColor: "var(--color-careys-pink-500)",
    items: [
      { name: "Figma", icon: <SiFigma size={20} /> },
      { name: "Canva", icon: <SiCanva size={20} /> },
    ],
  },
  {
    title: "Cloud Platforms",
    subtitle: "Infrastructure at Scale",
    size: "large",
    gradientFrom: "var(--color-genoa-400)",
    gradientTo: "var(--color-wedgewood-400)",
    glowColor: "var(--color-genoa-500)",
    items: [
      { name: "AWS", icon: <FaAws size={26} /> },
      { name: "GCP", icon: <SiGooglecloud size={24} /> },
      { name: "Azure", icon: <VscAzure size={24} /> },
      { name: "Terraform", icon: <SiTerraform size={24} /> },
      { name: "Lambda", icon: <BsCloudFill size={22} /> },
      { name: "EKS", icon: <SiKubernetes size={22} /> },
      { name: "VPC", icon: <SiKubernetes size={22} /> },
      { name: "S3", icon: <SiKubernetes size={22} /> },
    ],
  },
  {
    title: "DevOps",
    subtitle: "CI/CD & Containers",
    size: "medium",
    gradientFrom: "var(--color-kimberly-400)",
    gradientTo: "var(--color-gigas-400)",
    glowColor: "var(--color-kimberly-500)",
    items: [
      { name: "Docker", icon: <SiDocker size={22} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={22} /> },
      { name: "Helm", icon: <SiHelm size={22} /> },
      { name: "GitHub Actions", icon: <SiGithubactions size={22} /> },
      { name: "ArgoCD", icon: <SiArgo size={22} /> },
      { name: "AWS CodePipeline", icon: <FaAws size={22} /> },
      { name: "AWS CodeBuild", icon: <FaAws size={22} /> },
      { name: "AWS CodeDeploy", icon: <FaAws size={22} /> },
    ],
  },
  {
    title: "AI/ML",
    subtitle: "Intelligent Systems",
    size: "medium",
    gradientFrom: "var(--color-careys-pink-400)",
    gradientTo: "var(--color-hopbush-400)",
    glowColor: "var(--color-careys-pink-500)",
    items: [
      { name: "LangChain", icon: <SiLangchain size={22} /> },
      { name: "OpenAI", icon: <SiOpenai size={22} /> },
      { name: "Claude", icon: <SiClaude size={22} /> },
      { name: "Gemini", icon: <SiGooglegemini size={22} /> },
      { name: "RAG", icon: <BsRobot size={22} /> },
      { name: "Bedrock", icon: <FaAws size={22} /> },
      { name: "n8n", icon: <SiN8N size={22} /> },
    ],
  },
  {
    title: "Databases",
    subtitle: "Data Storage",
    size: "small",
    gradientFrom: "var(--color-wedgewood-400)",
    gradientTo: "var(--color-kimberly-400)",
    glowColor: "var(--color-wedgewood-500)",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
      { name: "MongoDB", icon: <SiMongodb size={20} /> },
      { name: "Supabase", icon: <SiSupabase size={20} /> },
      { name: "MySQL", icon: <SiMysql size={20} /> },
      { name: "VectorDB", icon: <SiVectorlogozone size={20} /> },
      { name: "AWS OpenSearch", icon: <FaAws size={20} /> },
    ],
  },
  {
    title: "Monitoring",
    subtitle: "Observability",
    size: "small",
    gradientFrom: "var(--color-hopbush-400)",
    gradientTo: "var(--color-gigas-400)",
    glowColor: "var(--color-hopbush-500)",
    items: [
      { name: "Prometheus", icon: <SiPrometheus size={20} /> },
      { name: "Grafana", icon: <SiGrafana size={20} /> },
      { name: "Loki", icon: <FaDatabase size={18} /> },
      { name: "Tempo", icon: <SiTemporal size={20} /> },
      { name: "Thanos", icon: <SiThanos size={20} /> },
    ],
  },
];

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BentoCard = ({ item }) => {
  // Grid placement based on size
  const gridClasses = {
    large: "md:col-span-2 lg:col-span-2 md:row-span-2",
    medium: "md:col-span-1 lg:col-span-1",
    small: "md:col-span-1 lg:col-span-1",
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl p-5 md:p-6
        bg-gray-800/30 backdrop-blur-xl border border-gray-700/40
        hover:border-gray-600/60 hover:bg-gray-800/50 transition-all duration-500
        ${gridClasses[item.size]}`}
    >
      {/* Gradient Glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
        style={{ backgroundColor: item.glowColor }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 mb-1">{item.subtitle}</p>

        <h3
          className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {item.title}
        </h3>

        <div className={`flex flex-wrap mt-auto ${item.size === "large" ? "gap-3 md:gap-4" : "gap-2 md:gap-3"}`}>
          {item.items.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-1 group/icon"
            >
              <div
                className="p-2 md:p-2.5 rounded-lg bg-gray-900/60 border border-gray-700/40 text-gray-400 
                  group-hover/icon:text-white group-hover/icon:border-gray-600 
                  group-hover/icon:bg-gray-800/80 transition-all duration-300"
              >
                {tech.icon}
              </div>
              <span className="text-[9px] md:text-[10px] text-gray-500 group-hover/icon:text-gray-300 transition-colors text-center max-w-[60px] leading-tight">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TechList = () => (
  <motion.section
    className="relative w-full text-gray-200"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <CustomHeadings
        heading="TECH STACK"
        subHeading="My Toolkit"
        description="The primary technologies I leverage to architect, build, and deploy robust solutions."
        gradientType="about"
      />

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {bentoItems.map((item) => (
          <BentoCard key={item.title} item={item} />
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default TechList;
