export const experience = [
  {
    type: "community",
    name: "AWS Community Builder",
    company: "Amazon Web Services",
    year: "Community",
    startDate: "2025",
    endDate: "Present",

    description: [
      "Recognized in the DevTools category for contributing to and sharing knowledge around cloud development, DevOps, and AWS technologies.",
      "Continued exploring cloud-native tooling while sharing practical learnings from building and operating real-world systems.",
    ],

    fieldNote: "The best way to understand something deeply is to build with it, break it, and share what you learned.",
  },

  {
    type: "work",
    name: "Cloud Engineer",
    company: "Searce Inc.",
    year: "Current Role",
    startDate: "2025-03",
    endDate: "Present",

    description: [
      "Working across AWS and GCP to design cloud platforms, migration architectures, networking, observability, security, and infrastructure automation for large-scale client environments.",
      "Built observability solutions with Prometheus, Grafana, Loki, Alertmanager, and Thanos, including monitoring environments spanning 150+ instances.",
      "Designed cloud infrastructure and networking across EKS, EC2, Auto Scaling, Route 53, EFS, Apigee X, Cloud Run, GKE, Private Service Connect, and multi-region architectures.",
      "Contributed to large-scale AWS-to-GCP migration assessments covering 3,000+ containerized services, alongside GenAI prototypes using Amazon Bedrock.",
    ],

    fieldNote:
      "Cloud engineering stopped being about individual services and became a lesson in systems, trade-offs, reliability, and designing for scale.",
  },

  {
    type: "work",
    name: "Web Developer",
    company: "Mayds — IIT Delhi Startup",
    year: "Internship",
    startDate: "2023-05",
    endDate: "2023-07",

    description: [
      "Built and improved web experiences for an early-stage startup, working across frontend development and product requirements.",
      "Translated designs and evolving product ideas into responsive, reusable interfaces while working in a fast-moving startup environment.",
    ],

    fieldNote:
      "This is where I learned that shipping something useful matters more than endlessly polishing something perfect.",
  },

  {
    type: "work",
    name: "Frontend Developer",
    company: "TatvaSoft",
    year: "Internship",
    startDate: "2023",
    endDate: "2023",

    description: [
      "Built a bookstore web application using React, React Hooks, and Redux Toolkit.",
      "Implemented authentication flows and integrated external book APIs to create dynamic browsing experiences.",
      "Focused on reusable components, application state, responsive interfaces, and frontend fundamentals.",
    ],

    fieldNote:
      "My introduction to thinking beyond individual components and understanding how an application fits together.",
  },

  {
    type: "volunteer",
    name: "Web Developer",
    company: "Paropkaaree Foundation",
    year: "Volunteer",
    startDate: "2022",
    endDate: "2023",

    description: [
      "Redesigned the NGO's website to create a simpler and more intuitive experience for visitors.",
      "Integrated an online payment workflow to make digital donations more accessible.",
      "Used Tailwind CSS to build a responsive interface while improving the overall visual experience.",
    ],

    fieldNote: "A small reminder that software doesn't need massive scale to create meaningful impact.",
  },

  {
    type: "work",
    name: "Big Data Analytics Engineer",
    company: "Motorola Solutions",
    year: "Internship",
    startDate: "2022-06",
    endDate: "2022-11",

    description: [
      "Worked with large-scale datasets using Apache Spark and Azure Data Lake Storage to extract and analyze information for business use cases.",
      "Performed statistical analysis to understand how data influenced business outcomes.",
      "Containerized Python and PySpark workloads with Docker and deployed scheduled processing jobs on Kubernetes.",
    ],

    fieldNote:
      "My first real glimpse of data, containers, and distributed systems working together — and probably where the infrastructure curiosity started.",
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
    year: "2026",
    name: "Intellicore Databricks Migrator",
    description:
      "A full-stack migration platform for moving enterprise data workloads from Google BigQuery and Azure Synapse Analytics to Databricks. It guides teams through discovery, assessment, profiling, migration, and reconciliation while automating dependency analysis, complexity scoring, wave planning, and SQL transpilation.",
    impact:
      "Turns a fragmented migration discovery process into a guided, repeatable workflow with automated readiness assessment and migration planning.",
    keyTakeaway:
      "Migration tooling isn't just about moving SQL — the hard part is understanding dependencies, complexity, sequencing, and everything surrounding the workload.",
    liveUrl: null,
    githubUrl: "Private",
    tech: [
      "Databricks",
      "Databricks Lakebridge",
      "Google BigQuery",
      "Azure Synapse Analytics",
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "D3",
      "DuckDB",
      "PyODBC",
      "Azure Identity",
      "GitLab CI/CD",
    ],
  },

  {
    year: "2025",
    name: "Intellicore Observability",
    description:
      "A self-service observability platform for rapidly deploying production-ready monitoring across Kubernetes environments. It combines metrics, logs, traces, dashboards, and long-term observability components behind a guided deployment experience.",
    impact:
      "Reduced Kubernetes monitoring setup from a multi-step manual process to a guided deployment workflow that can establish the core observability stack in under 10 minutes.",
    keyTakeaway:
      "Observability gets interesting when you're monitoring the monitoring — multi-cluster visibility, storage, reliability, and operational simplicity matter as much as dashboards.",
    liveUrl: null,
    githubUrl: "Private",
    tech: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "Thanos",
      "Alertmanager",
      "Kubernetes",
      "AWS EKS",
      "Helm",
      "Docker",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Vite",
    ],
  },

  {
    year: "2025",
    name: "Intellicore Container Orchestration",
    description:
      "A platform for standardizing and automating containerized workload and EKS deployment workflows. It combines infrastructure automation with a guided interface to reduce the repetitive work involved in preparing containerized applications for Kubernetes.",
    impact:
      "Created a reusable workflow around Docker, Terraform, Helm, ECR, and EKS instead of treating each Kubernetes deployment as a one-off implementation.",
    keyTakeaway:
      "The best platform abstractions remove repetitive decisions without hiding the infrastructure engineers still need to understand.",
    liveUrl: null,
    githubUrl: "Private",
    tech: [
      "AWS EKS",
      "Kubernetes",
      "Terraform",
      "Helm",
      "Docker",
      "AWS ECR",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Vite",
    ],
  },

  {
    year: "2025",
    name: "RAG Flashcards",
    description:
      "An AI-powered learning application that turns uploaded PDFs into contextual flashcards and enables document-grounded conversations using a retrieval-augmented generation pipeline.",
    impact:
      "Built the complete RAG lifecycle — document ingestion, chunking, embeddings, vector indexing, retrieval, generation, and conversational interaction — on AWS.",
    keyTakeaway:
      "RAG quality depends on much more than the LLM. Chunking, embeddings, retrieval strategy, vector mappings, and context construction can make or break the experience.",
    liveUrl: null,
    githubUrl: "https://github.com/IshThumber/RAG-flashcards",
    tech: [
      "Python",
      "FastAPI",
      "Amazon S3",
      "Amazon OpenSearch",
      "Amazon Bedrock",
      "Titan Embeddings",
      "Anthropic Claude",
      "RAG",
    ],
  },

  {
    year: "2025",
    name: "ContextCraft",
    subtitle: "AI-Powered Writing Companion",
    description:
      "An AI writing companion designed around the complete content workflow — discovering ideas, understanding a writer's previous content, generating drafts, refining tone and SEO, and helping maintain a consistent publishing rhythm.",
    impact:
      "Explored how contextual memory and personalized generation can make AI writing tools feel less like generic text generators and more like creative collaborators.",
    keyTakeaway:
      "Good AI products aren't just prompts wrapped in a UI — context, memory, workflow design, and user control are what make the intelligence useful.",
    liveUrl: null,
    githubUrl: "https://github.com/ishthumber/contextcraft",
    tech: ["Python", "FastAPI", "Supabase", "Supabase Auth", "OpenAI API", "Nebius AI"],
  },

  {
    year: "2025",
    name: "SmartCover AI",
    subtitle: "AI-Powered Cover Letter Generator",
    description:
      "A resume-aware cover letter generator that combines job context with candidate information to produce personalized, editable, and exportable cover letters through a focused React experience.",
    impact:
      "Built the complete browser-based workflow from resume ingestion and AI generation to authentication, persistence, document export, and Google Drive integration.",
    keyTakeaway:
      "AI should accelerate the blank-page problem without taking control away from the person actually writing.",
    liveUrl: "https://smartcover-xi.vercel.app/",
    githubUrl: "https://github.com/IshThumber/SmartCover",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Gemini AI",
      "Supabase Auth",
      "Google Drive API",
      "jsPDF",
      "pdfjs-dist",
      "mammoth.js",
    ],
  },

  {
    year: "2025",
    name: "Seamless DataSync Deployment",
    description:
      "An automation platform for deploying AWS DataSync jobs through a guided interface, replacing repetitive infrastructure configuration with reusable workflows and infrastructure-as-code.",
    impact:
      "Eliminated approximately 95% of manual configuration, reduced setup time by 50%, and lowered operational overhead by 30%.",
    keyTakeaway:
      "Automation delivers the most value when it removes repetitive operational work while keeping infrastructure predictable and reproducible.",
    liveUrl: null,
    githubUrl: "Private",
    tech: ["Python", "AWS DataSync", "AWS IAM", "Terraform", "Flask", "Vite"],
  },

  {
    year: "2024",
    name: "Terraform Cross-Account Pipeline",
    subtitle: "Cross-Account Provisioning Accelerator",
    description:
      "A CI/CD architecture for securely provisioning Terraform infrastructure across multiple AWS accounts using centralized pipelines, remote state management, and cross-account IAM.",
    impact:
      "Eliminated approximately 70% of manual provisioning effort and reduced deployment time by 50% through standardized infrastructure delivery.",
    keyTakeaway:
      "Infrastructure automation becomes much more interesting across account boundaries — identity, state, blast radius, and trust relationships become first-class design decisions.",
    liveUrl:
      "https://ishthumber.medium.com/automating-cross-account-terraform-deployments-with-aws-codepipeline-e8f80e1ee137",
    githubUrl: "Private",
    tech: ["Terraform", "AWS CodePipeline", "AWS CodeBuild", "AWS IAM", "Amazon S3", "DynamoDB"],
  },

  {
    year: "2023",
    name: "CRUDSify",
    description:
      "A full-stack data management application built around everyday CRUD workflows, combining a responsive interface with backend APIs, persistence, and email functionality.",
    impact:
      "Built an end-to-end application spanning frontend state, REST APIs, backend logic, database operations, and deployment.",
    keyTakeaway:
      "Building both sides of an application made the boundary between frontend and backend feel much less like a boundary.",
    liveUrl: "https://crudsify.vercel.app/",
    githubUrl: "https://github.com/IshThumber/CRUDSify",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },

  {
    year: "2023",
    name: "Personal Portfolio",
    description:
      "My evolving corner of the internet — built to experiment with frontend engineering, interaction design, animation, and how technical work can be communicated with more personality.",
    impact:
      "Became an ongoing playground for experimenting with React, motion, visual storytelling, and personal branding.",
    keyTakeaway: "A portfolio shouldn't only document what I've built — it should feel like something I built.",
    liveUrl: "https://ishthumber.vercel.app/",
    githubUrl: "https://github.com/IshThumber/Ish-Portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
  },

  {
    year: "2022",
    name: "PhD Admission Portal",
    description:
      "A full-stack admissions platform for managing PhD application workflows at CHARUSAT, designed for both applicants and university administrators.",
    impact:
      "Translated a multi-step institutional workflow into a web application spanning authentication, application management, persistent data, and administrative experiences.",
    keyTakeaway:
      "Real applications are mostly workflows, edge cases, permissions, and data consistency hiding behind seemingly simple screens.",
    liveUrl: "https://charusatphd.vercel.app/",
    githubUrl: "Private",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker", "AWS"],
  },

  {
    year: "2022",
    name: "NGO Website Redesign",
    description:
      "A redesign of Paropkaaree Foundation's website focused on making information easier to navigate, improving the visual experience, and supporting online donations.",
    impact:
      "Turned an early web-development project into something used for a real organization with real users and a real-world purpose.",
    keyTakeaway:
      "One of the first projects that taught me software doesn't need massive scale to have a meaningful impact.",
    liveUrl: "https://paropkaree.vercel.app/",
    githubUrl: "https://github.com/IshThumber/parpkaree",
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
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
