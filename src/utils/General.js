export const experience = [
  {
    type: "community",
    name: "AWS Community Builder",
    company: "Amazon Web Services",
    year: "Community Recognition",
    description: ["Selected for the DevTools category for my expertise and contributions to the cloud development and DevOps community."],
    startDate: "2022-06-01",
    endDate: "2022-08-31",
  },
  {
    type: "work",
    name: "Cloud Engineer",
    company: "Searce Inc.",
    year: "Current Role",
    description: [
      "Designing and deploying scalable, resilient cloud infrastructure for diverse client applications on AWS.",
      "Integrating comprehensive monitoring with Prometheus and Grafana.",
      "Enhancing security postures with Fortinet firewalls.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-08-31",
  },
  {
    type: "work",
    name: "Frontend Developer",
    company: "Tatvasoft (Internship)",
    year: "Previous Role",
    description: [
      "Developed a book store website using React hooks and the Redux Toolkit.",
      "Implemented features for user login and registration.",
      "Integrated functionality to fetch a public book API for display on the home screen.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-08-31",
  },
  {
    type: "work",
    name: "Web Developer",
    company: "Paropkaaree Foundation (Volunteer)",
    year: "Previous Role",
    description: [
      "Redesigned the NGO website, resulting in a more intuitive user interface.",
      "Successfully integrated a secure payment gateway for seamless online donations.",
      "Utilized Tailwind CSS to enhance the website's visual appeal and user experience.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-08-31",
  },
  {
    type: "work",
    name: "Big Data Analytics Engineer",
    company: "Motorola Solutions (Internship)",
    year: "Previous Role",
    description: [
      "Performed statistical analysis to assess the impact of data on business outcomes.",
      "Wrote Apache Spark queries to extract data from Azure ADLS.",
      "Created a Docker container of Python with PySpark, deployed on Kubernetes with cron jobs for routine deployment.",
    ],
    startDate: "2022-06-01",
    endDate: "2022-08-31",
  },
];

export const skills = [
  { id: 1, title: "PostgreSQL", percent: 70 },
  { id: 2, title: "MongoDB", percent: 60 },
  { id: 3, title: "ExpressJs", percent: 70 },
  { id: 4, title: "ReactJs", percent: 70 },
  { id: 5, title: "NodeJs", percent: 60 },
  { id: 6, title: "Prisma -ORM", percent: 65 },
  { id: 7, title: "HTML5", percent: 80 },
  { id: 8, title: "CSS3", percent: 80 },
  { id: 9, title: "Tailwind CSS", percent: 80 },
  { id: 10, title: "JavaScript", percent: 75 },
  { id: 11, title: "Docker", percent: 60 },
  { id: 12, title: "Kubernetes", percent: 60 },
  { id: 13, title: "Git & GitHub", percent: 70 },
  { id: 14, title: "Linux", percent: 60 },
  { id: 15, title: "Canva", percent: 80 },
  { id: 16, title: "Figma", percent: 80 },
  { id: 17, title: "AWS", percent: 50 },
  { id: 18, title: "Python", percent: 60 },
  { id: 19, title: "C++", percent: 60 },
];

export const projects = [
  {
    year: "2025",
    name: "Observability Accelerator",
    description:
      "An automated monitoring solution designed to instantly deploy a production-grade observability stack. It provisions Prometheus for metrics collection and Grafana for visualization, complete with pre-configured dashboards for cluster health, node metrics, and application performance, significantly reducing Day-2 operational setup time.",
    liveUrl: null,
    githubUrl: "Private",
    tech: ["Prometheus", "Grafana", "Loki", "Tempo", "Helm", "Kubernetes", "Python", "FastAPI", "React", "TypeScript", "AWS EKS", "Vite", "Docker", "Kubernetes", "AWS"],
  },
  {
    year: "2025",
    name: "Kubernetes Accelerator",
    description:
      "A sophisticated platform engineered to automate EKS cluster provisioning. It supports both Single-Cluster and Multi-Cluster deployments with a focus on standardization and speed. The system leverages a decoupled architecture with a Python FastAPI backend for orchestration and a modern React/TypeScript frontend for an intuitive management experience.",
    liveUrl: null,
    githubUrl: "Private",
    tech: ["Python", "FastAPI", "React", "TypeScript", "AWS EKS", "Vite", "Docker", "Kubernetes", "AWS", "Helm", "AWS ECR"],
  },
  {
    year: "2025",
    name: "RAG Flashcards",
    description:
      "RAG Flashcards is an AI-driven flashcard generator. It ingests documents (PDFs), extracts and chunks text, embeds content, and indexes it for retrieval. Users can upload study materials, generate flashcards, and interact with a chatbot for personalized learning. The backend leverages AWS (S3, OpenSearch), Bedrock models, and Claude for advanced retrieval-augmented generation.",
    liveUrl: null,
    githubUrl: "https://github.com/IshThumber/RAG-flashcards",
    tech: ["Python", "FastAPI", "AWS S3", "AWS OpenSearch", "Amazon Bedrock", "Anthropic Claude", "PDF Parsing"],
  },
  {
    year: "2025",
    name: "ContextCraft: Your AI-Powered Blog Companion",
    description:
      "ContextCraft is an AI-powered blog writing assistant that helps writers streamline their content creation process for Medium. It remembers your past writing style, suggests trending and personalized topics, generates high-quality drafts, helps revise for SEO and tone, and reminds you when it’s time to publish — giving you total control and creative focus without the clutter.",
    liveUrl: null,
    githubUrl: "https://github.com/ishthumber/contextcraft",
    tech: ["Python", "FastAPI", "Supabase", "Supabase Auth", "OpenAI API / Nebius AI"],
  },
  {
    year: "2025",
    name: "SmartCover AI: AI-Powered Cover Letter Generator",
    description:
      "SmartCover AI is a production-ready React application that generates personalized cover letters using Gemini AI. Users can upload their resumes, enter job details, and generate polished, exportable cover letters within seconds — with Google Drive integration, advanced AI model options, persistent state, and full client-side privacy.",
    liveUrl: "https://smartcover-xi.vercel.app/",
    githubUrl: "https://github.com/IshThumber/SmartCover",
    tech: ["React", "Vite", "Tailwind CSS", "Gemini AI", "Supabase Auth", "Google Drive API", "jsPDF", "pdfjs-dist", "mammoth.js"],
  },
  {
    year: "2025",
    name: "Seamless DataSync Deployment",
    description:
      "Engineered a Python-based automation tool for AWS DataSync that eliminated 95% of manual configuration. The solution included an intuitive UI for rapid job deployment and optimized data transfers across regions, reducing setup time by 50%  and operational overhead by 30%.",
    liveUrl: null,
    githubUrl: "Private",
    tech: ["Python", "AWS DataSync", "IAM", "Vite.js", "Flask", "Terraform"],
  },
  {
    year: "2024",
    name: "Terraform Cross-Account Pipeline",
    description:
      "Developed a CI/CD pipeline using AWS CodePipeline and Terraform to automate infrastructure provisioning across multiple AWS accounts. This accelerator eliminated 70% of manual effort  and cut deployment time by 50%  by standardizing state management and security checks.",
    liveUrl: "https://ishthumber.medium.com/automating-cross-account-terraform-deployments-with-aws-codepipeline-e8f80e1ee137",
    githubUrl: "Private",
    tech: ["Terraform", "AWS CodePipeline", "CodeBuild", "S3", "DynamoDB"],
  },
  {
    year: "2023",
    name: "CRUDSify",
    description:
      "A powerful data management application that simplifies CRUD operations with an intuitive UI, seamless integration, and email features for efficient data handling. This project showcases full-stack capabilities from database to frontend.",
    liveUrl: "https://crudsify.vercel.app/",
    githubUrl: "https://github.com/IshThumber/CRUDSify",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
  },
  {
    year: "ND",
    name: "Personal Portfolio",
    description:
      "My personal corner of the internet. Designed with a modern aesthetic and built with React and TailwindCSS, this project is a testament to my passion for clean code, responsive design, and great user experience.",
    liveUrl: "https://ishthumber.vercel.app/",
    githubUrl: "https://github.com/IshThumber/Ish-Portfolio",
    tech: ["React.js", "TailwindCSS", "Framer Motion", "GSAP"],
  },
  {
    year: "2022",
    name: "PhD Admission Portal",
    description:
      "A comprehensive web portal for PhD admissions at Charusat University. The system streamlines the application process for students and provides robust management tools for faculty and administrators, handling complex workflows and data securely.",
    liveUrl: "https://charusatphd.vercel.app/",
    githubUrl: "Private",
    tech: ["React.js", "Node.js", "Docker", "AWS", "PostgreSQL", "Prisma"],
  },
  {
    year: "2022",
    name: "NGO Website Redesign",
    description:
      "A complete redesign of an NGO's website to enhance user experience and engagement. The project involved modern UI/UX design principles, responsive layouts, and integration with backend services for dynamic content management.",
    liveUrl: "https://paropkaree.vercel.app/",
    githubUrl: "https://github.com/IshThumber/parpkaree",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React.js"],
  },
];

export const education = [
  {
    id: 1,
    name: "Charotar University of Science and Technology, Changa - Gujarat",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2020 - 2024",
    description: "CGPA: 8.5/10.0",
  },
  // {\n  //   id: 2,\n  //   name: \"IPD School, Ahmedabad - Gujarat\",\n  //   degree: \"Higher Secondary Education\",\n  //   year: \"2019 - 2020\",\n  //   description: \"80% in CBSE\"\n  // }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2026",
    verifyUrl: "https://www.credly.com/badges/b84dc7bd-89a1-4387-abe1-119de88b98a0/public_url",
    description: "Advanced expertise in designing distributed systems and complex solutions on AWS.",
    badge: "/certifications/aws-certified-solutions-architect-professional.png",
  },
  {
    id: 2,
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    verifyUrl: "https://www.credly.com/badges/bf5ab4c9-2fdf-4500-bd27-1a68e4fd5980/public_url",
    description: "Validates expertise in designing distributed systems on AWS.",
    badge: "/certifications/aws-certified-solutions-architect-associate.png",
  },
  {
    id: 3,
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2024",
    verifyUrl: "https://www.credly.com/badges/88ec9590-0458-46a0-a6f9-1ecad0635794/public_url",
    description: "Proficiency in infrastructure as code using Terraform.",
    badge: "/certifications/hashicorp-terraform-associate.png",
  },
  {
    id: 4,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    verifyUrl: "https://www.credly.com/badges/ebf6a2ab-b059-4d37-816e-e57cbec7d8d3/public_url",
    description: "Foundational understanding of AWS Cloud concepts and services.",
    badge: "/certifications/aws-certified-cloud-practitioner.png",
  },
];
