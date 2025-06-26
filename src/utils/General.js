export const experience = [
  // {
  //   id: 1,
  //   title: "Web Developer",
  //   company: "IIT-Delhi (StartUp) - Leoron World",
  //   description: [
  //     "Contribute to discussions and play an active role in core feature development as a junior developer.",
  //     "Collaborate with the development team to ensure seamless integration of new features and enhancements."
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "Web Developer",
  //   company: "IIT-Delhi (StartUp) - Mayds",
  //   description: [
  //     "Design website layouts to achieve an intuitive user interface.",
  //     "Collaborate with the development team to meet client requirements and deliver high-quality web solutions."
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Web Developer",
  //   company: "Paropkaaree Foundation",
  //   description: [
  //     "Redesign the NGO website, resulting in a more intuitive user interface.",
  //     "Successfully integrate a secure payment gateway, enabling safe and seamless online donations.",
  //     "Utilize the Tailwind CSS Framework to enhance the website's visual appeal and user experience."
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Frontend Developer",
  //   company: "Tatvasoft",
  //   description: [
  //     "Developed a book store website using React hooks and the Redux Toolkit.",
  //     "Implemented features for user login and registration.",
  //     "Integrated functionality to fetch the public API of books for display on the home screen."
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "Big Data Analytics Engineer",
  //   company: "Motorola Solutions",
  //   description: [
  //     "Performed statistical analysis to assess the impact of data on business outcomes",
  //     "Wrote Apache Spark queries to extract data from Azure ADLS and Azure pipelines for analysis",
  //     "Conducted data analysis to support business decision-making.",
  //     "Learned a variety of technologies, including Docker and Kubernetes",
  //     "Created a Docker container of Python with the PySpark library, deployed the Spark script on Kubernetes with a pod and a development environment, and added cron jobs for a routine deployment."
  //   ]
  // }


  {
    type: "community",
    name: "AWS Community Builder",
    company: "Amazon Web Services",
    year: "Community Recognition",
    description: [
      "Selected for the DevTools category for my expertise and contributions to the cloud development and DevOps community.",
    ]
  },
  {
    type: "work",
    name: "Cloud Engineer",
    company: "Searce Inc.",
    year: "Current Role",
    description: [
      "Designing and deploying scalable, resilient cloud infrastructure for diverse client applications on AWS.",
      "Integrating comprehensive monitoring with Prometheus and Grafana.",
      "Enhancing security postures with Fortinet firewalls."
    ]
  },
  {
    type: "work",
    name: "Frontend Developer",
    company: "Tatvasoft (Internship)",
    year: "Previous Role",
    description: [
      "Developed a book store website using React hooks and the Redux Toolkit.",
      "Implemented features for user login and registration.",
      "Integrated functionality to fetch a public book API for display on the home screen."
    ]
  },
  {
    type: "work",
    name: "Web Developer",
    company: "Paropkaaree Foundation (Volunteer)",
    year: "Previous Role",
    description: [
      "Redesigned the NGO website, resulting in a more intuitive user interface.",
      "Successfully integrated a secure payment gateway for seamless online donations.",
      "Utilized Tailwind CSS to enhance the website's visual appeal and user experience."
    ]
  },
  {
    type: "work",
    name: "Big Data Analytics Engineer",
    company: "Motorola Solutions (Internship)",
    year: "Previous Role",
    description: [
      "Performed statistical analysis to assess the impact of data on business outcomes.",
      "Wrote Apache Spark queries to extract data from Azure ADLS.",
      "Created a Docker container of Python with PySpark, deployed on Kubernetes with cron jobs for routine deployment."
    ]
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
  { id: 19, title: "C++", percent: 60 }
];

export const projects = [
  {
    year: "Recent Development - Working ...",
    name: "ContextCraft: Your AI-Powered Blog Companion",
    description: "ContextCraft is an AI-powered blog writing assistant that helps writers streamline their content creation process for Medium. It remembers your past writing style, suggests trending and personalized topics, generates high-quality drafts, helps revise for SEO and tone, and reminds you when it’s time to publish — giving you total control and creative focus without the clutter.",
    liveUrl: null,
    githubUrl: "https://github.com/ishthumber/contextcraft",
    tech: [
      "Python",
      "FastAPI",
      "Supabase",
      "Supabase Auth",
      "OpenAI API / Nebius AI",
    ]
  },
  {
    year: "2025",
    name: "Seamless DataSync Deployment",
    description:
      "Engineered a Python-based automation tool for AWS DataSync that eliminated 95% of manual configuration. The solution included an intuitive UI for rapid job deployment and optimized data transfers across regions, reducing setup time by 50%  and operational overhead by 30%.",
    liveUrl: null,
    githubUrl: "Private",
    tech: ["Python", "AWS DataSync", "IAM", "Vite.js", "Flask", "Terraform"]
  },
  {
    year: "2024",
    name: "Terraform Cross-Account Pipeline",
    description:
      "Developed a CI/CD pipeline using AWS CodePipeline and Terraform to automate infrastructure provisioning across multiple AWS accounts. This accelerator eliminated 70% of manual effort  and cut deployment time by 50%  by standardizing state management and security checks.",
    liveUrl: "https://ishthumber.medium.com/automating-cross-account-terraform-deployments-with-aws-codepipeline-e8f80e1ee137",
    githubUrl: "Private",
    tech: ["Terraform", "AWS CodePipeline", "CodeBuild", "S3", "DynamoDB"]
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
    year: "",
    name: "Personal Portfolio",
    description:
      "My personal corner of the internet. Designed with a modern aesthetic and built with React and TailwindCSS, this project is a testament to my passion for clean code, responsive design, and great user experience.",
    liveUrl: "https://ishthumber.vercel.app/",
    githubUrl: "https://github.com/IshThumber/Ish-Portfolio",
    tech: ["React.js", "TailwindCSS", "Framer Motion", "GSAP"],
  },
  {
    year: "2022 - 2023",
    name: "PhD Admission Portal",
    description:
      "A comprehensive web portal for PhD admissions at Charusat University. The system streamlines the application process for students and provides robust management tools for faculty and administrators, handling complex workflows and data securely.",
    liveUrl: "https://charusatphd.vercel.app/",
    githubUrl: "Private",
    tech: ["React.js", "Node.js", "Docker", "AWS", "PostgreSQL", "Prisma"],
  },
  {
    year: "2022 - 2023",
    name: "NGO Website Redesign",
    description:
      "A complete redesign of an NGO's website to enhance user experience and engagement. The project involved modern UI/UX design principles, responsive layouts, and integration with backend services for dynamic content management.",
    liveUrl: "https://paropkaree.vercel.app/", 
    githubUrl: "https://github.com/IshThumber/parpkaree",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React.js"]
  }
];

export const education = [
  {
    id: 1,
    name: "Charotar University of Science and Technology, Changa - Gujarat",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2020 - 2024",
    description: "CGPA: 8.5/10.0"
  },
  // {
  //   id: 2,
  //   name: "IPD School, Ahmedabad - Gujarat",
  //   degree: "Higher Secondary Education",
  //   year: "2019 - 2020",
  //   description: "80% in CBSE"
  // }
];
