import { FiGithub } from "react-icons/fi";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Navbar from "./Navbar";

const ProjectList = () => {
  const projects = [
    {
      year: "2024 - Present",
      name: "Cloud Engineering at Searce",
      image: "",
      description:
        "Designed and deployed scalable, resilient cloud infrastructure for diverse client applications on AWS. My work involved provisioning core services like EC2, VPCs, and Load Balancers , integrating comprehensive monitoring with Prometheus and Grafana , and enhancing security with Fortinet firewalls.",
      liveUrl: null, // No live link for professional experience
      githubUrl: null, // Private
      tech: [
        "AWS",
        "Terraform",
        "Prometheus",
        "Grafana",
        "Amazon EKS",
        "Fortinet"
      ]
    },
    {
      year: "2023",
      name: "Seamless DataSync Deployment",
      image: "",
      description:
        "Engineered a Python-based automation tool for AWS DataSync that eliminated 95% of manual configuration. The solution included an intuitive UI for rapid job deployment and optimized data transfers across regions, reducing setup time by 50%  and operational overhead by 30%.",
      liveUrl: "#", // Add link if available
      githubUrl: "Private",
      tech: ["Python", "AWS DataSync", "IAM", "React.js", "Flask"]
    },
    {
      year: "2022",
      name: "Terraform Cross-Account Pipeline",
      image: "",
      description:
        "Developed a CI/CD pipeline using AWS CodePipeline and Terraform to automate infrastructure provisioning across multiple AWS accounts. This accelerator eliminated 70% of manual effort  and cut deployment time by 50%  by standardizing state management and security checks.",
      liveUrl: null,
      githubUrl: "Private",
      tech: ["Terraform", "AWS CodePipeline", "CodeBuild", "S3", "DynamoDB"]
    },
    {
      year: "2024",
      name: "AI-Powered Chatbot",
      description:
        "A cutting-edge AI chatbot that leverages OpenAI's GPT-3.5 Turbo for natural language understanding and response generation. This project showcases advanced AI integration, real-time data processing, and a user-friendly interface.",
      liveUrl: "https://ai-chatbot-demo.vercel.app/",
      githubUrl: "",
      tech: ["React.js", "Node.js", "OpenAI API", "TailwindCSS"]
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN-izMCSAbWw6WNZ1tu2kLtRvBe38CU6SbA&s"
    },
    {
      year: "2023",
      name: "CRUDSify",
      description:
        "A powerful data management application that simplifies CRUD operations with an intuitive UI, seamless integration, and email features for efficient data handling. This project showcases full-stack capabilities from database to frontend.",
      liveUrl: "https://crudsify.vercel.app/",
      githubUrl: "https://github.com/IshThumber/CRUDSify",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN-izMCSAbWw6WNZ1tu2kLtRvBe38CU6SbA&s"
    },
    {
      year: "2023 - Present",
      name: "Personal Portfolio",
      description:
        "My personal corner of the internet. Designed with a modern aesthetic and built with React and TailwindCSS, this project is a testament to my passion for clean code, responsive design, and great user experience.",
      liveUrl: "#", // Link to the site itself
      githubUrl: "https://github.com/IshThumber/Ish-Portfolio",
      tech: ["React.js", "TailwindCSS", "Framer Motion", "GSAP"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN-izMCSAbWw6WNZ1tu2kLtRvBe38CU6SbA&s"
    },
    {
      year: "2022 - 2023",
      name: "PhD Admission Portal",
      description:
        "A comprehensive web portal for PhD admissions at Charusat University. The system streamlines the application process for students and provides robust management tools for faculty and administrators, handling complex workflows and data securely.",
      liveUrl: "https://charusatphd.vercel.app/",
      githubUrl: "Private",
      tech: ["React.js", "Node.js", "Docker", "AWS", "PostgreSQL"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN-izMCSAbWw6WNZ1tu2kLtRvBe38CU6SbA&s"
    },
    {
      year: "2022",
      name: "NGO Website Redesign",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN-izMCSAbWw6WNZ1tu2kLtRvBe38CU6SbA&s",
      description:
        "A complete redesign of an NGO's website to enhance user experience and engagement. The project involved modern UI/UX design principles, responsive layouts, and integration with backend services for dynamic content management.",
      liveUrl: "https://example-ngo-website.com", // Replace with actual URL
      githubUrl: "",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  return (
    // The main container for all the project sections
    <div className="flex flex-col gap-24 md:gap-32">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Text Content Section */}
          {/* The `order` class is used to alternate the layout. On odd projects, text comes second on medium screens and up. */}
          <div className={`md:w-1/2 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
            <p className="text-sm font-semibold text-genoa-300 mb-2">
              {project.year}
            </p>
            <h3 className="text-3xl font-bold text-wild-sand-100 mb-4">
              {project.name}
            </h3>
            <div className="bg-blue-gray-800/60 border border-blue-gray-700/50 rounded-lg p-6 shadow-lg">
              <p className="text-wild-sand-200/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-wild-sand-100 font-semibold mb-3">
                Built With:
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="bg-purple-400/10 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          {/* The `order` class is used to alternate the layout. On odd projects, image comes first on medium screens and up. */}
          <div className={`md:w-1/2 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
            {/* THIS IS THE SIGNATURE IMAGE EFFECT FROM "ABOUT ME" */}
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-purple-500/40 to-genoa-400/30 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out blur-sm group-hover:blur-md"></div>
              <div className="absolute -inset-2 md:-inset-4 border-4 border-purple-400/50 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-all duration-500 ease-out"></div>
              {/* Main Image - This now acts as the link to the live demo */}
              {project.image ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${project.name}`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-blue-gray-800/80 transition-all duration-500 group-hover:shadow-purple-500/20"
                  />
                </a>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${project.name}`}
                  className="relative w-full h-64 flex items-center justify-center rounded-2xl shadow-2xl border-4 border-blue-gray-800/80 transition-all duration-500 group-hover:shadow-purple-500/20 bg-blue-gray-900/60"
                >
                  <span className="text-wild-sand-200">No image available</span>
                </a>
              )}
              {/* GitHub Link - Positioned over the image for a clean look */}
              {project.githubUrl && project.githubUrl !== "Private" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub Repository`}
                  className="absolute top-4 right-4 text-white bg-blue-gray-900/60 p-2 rounded-full backdrop-blur-sm hover:bg-purple-500/80 transition-all duration-300"
                >
                  <FiGithub size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectWrapper = () => {
  return (
    <>
      <div className="min-h-screen transition-all duration-500">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <PageTransition>
          <div className="h-36 md:h-32"></div>
          <div className="relative w-[97%] md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
            <div className="relative flex flex-col justify-between w-full m-auto gap-14">
              <div className="w-full m-auto mb-10 xl:w-full md:w-11/12 text-center md:text-left">
                <h1 className="font-black tracking-tight font-urbanist text-[5rem] md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-400 to-genoa-300 inline-block text-transparent bg-clip-text md:w-fit w-full">
                  Projects
                  <span className="block h-2 -mt-2 md:mt-4 bg-gradient-to-r from-purple-400 to-genoa-300 w-28 md:w-40 mx-auto md:mx-0 rounded-full" />
                </h1>
              </div>
              <ProjectList />
            </div>
            <Footer />
          </div>
        </PageTransition>
      </div>
    </>
  );
};

export default ProjectWrapper;
