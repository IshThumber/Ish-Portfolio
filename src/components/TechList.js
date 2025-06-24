import { motion } from 'framer-motion';
import {
  SiAmazonaws,
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
  SiMicrosoftazure,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform
} from "react-icons/si";

const techCategories = {
  "Languages & Frontend": [
    { name: "CPP", icon: <SiCplusplus size={22} />, isPillar: true },
    { name: "Python", icon: <SiPython size={22} />, isPillar: true },
    { name: "JavaScript", icon: <SiJavascript size={22} /> },
    { name: "React", icon: <SiReact size={22} />, isPillar: true },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> }
  ],
  "Backend & Databases": [
    { name: "Node.js", icon: <SiNodedotjs size={22} />, isPillar: true },
    { name: "Express.js", icon: <SiExpress size={22} /> },
    { name: "MongoDB", icon: <SiMongodb size={22} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={22} /> }
  ],
  "Cloud Platforms": [
    { name: "AWS", icon: <SiAmazonaws size={22} />, isPillar: true },
    { name: "Azure", icon: <SiMicrosoftazure size={22} /> },
    { name: "GCP", icon: <SiGooglecloud size={22} /> }
  ],
  "DevOps & Infrastructure": [
    { name: "Terraform", icon: <SiTerraform size={22} />, isPillar: true },
    { name: "Docker", icon: <SiDocker size={22} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={22} />, isPillar: true },
    { name: "Jenkins", icon: <SiJenkins size={22} /> },
    { name: "GitHub", icon: <SiGithub size={22} /> },
    { name: "Helm", icon: <SiHelm size={22} /> }
  ],
  "Monitoring & Logging": [
    { name: "Prometheus", icon: <SiPrometheus size={22} /> },
    { name: "Grafana", icon: <SiGrafana size={22} /> }
  ]
};

const TechPill = ({ name, icon, isPillar }) => (
  <div
    className={`flex items-center gap-3 bg-blue-gray-800/70 rounded-lg px-4 py-2 
              transition-all duration-300 cursor-pointer 
              hover:bg-blue-gray-800/90 hover:shadow-lg 
              hover:-translate-y-0.5 
              ${isPillar
        ? "border border-yellow-400/50 hover:border-yellow-400 hover:shadow-yellow-500/10"
        : "border border-blue-gray-700/50 hover:border-genoa-400/80 hover:shadow-genoa-500/10"
      }`}
  >
    <div className={`${isPillar ? "text-yellow-300" : "text-genoa-300"}`}>
      {icon}
    </div>
    <span className="font-medium text-wild-sand-200">{name}</span>
  </div>
);

const TechList = () => (
  <motion.section
    className="relative w-full p-1 font-gtReg text-wild-sand-200" initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}>
    <div className="relative flex flex-col items-center justify-between w-full m-auto gap-20 xl:w-11/12">
      <header className="text-center">
        <h2 className="font-black tracking-tight font-urbanist text-6xl inline-block xl:w-fit w-full">
          My Toolkit
        </h2>
        <p className="text-wild-sand-200/70 text-lg mt-3">
          The primary technologies I leverage to architect, build, and deploy
          robust solutions.
        </p>
      </header>

      <div className="w-full flex flex-col gap-12 mb-10">
        {Object.entries(techCategories).map(([category, techs]) => (
          <article key={category} className="flex flex-col md:flex-row md:items-center gap-6">
            <h3 className="md:w-1/4 text-2xl font-semibold text-wild-sand-300 sticky top-24 font-gtReg">
              {category}
            </h3>

            <div className="flex-1 flex flex-wrap gap-4">
              {techs.map(tech => (
                <TechPill
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  isPillar={tech.isPillar}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default TechList;
