import React, { memo, useMemo, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import profilePic from "../assets/Profile.png";
import { motion } from "framer-motion";
import {
  PiGithubLogoBold,
  PiXLogoBold,
  PiLinkedinLogoBold,
  PiMediumLogoBold
} from "react-icons/pi";
import {
  LuBoxes,
  LuBrain,
  LuChartColumn,
  LuComputer,
  LuShipWheel,
  LuWebhook
} from "react-icons/lu";

import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import SEOHead from "../components/SEOHead";
import { projects } from "../utils/General";

// Lazy load Footer for better initial load performance
const Footer = lazy(() => import("../components/Footer"));

// Memoized Card component for better performance
const Card = memo(({ children, className = "", role = "region" }) => (
  <div
    className={`relative rounded-3xl h-full ${className}`}
    role={role}
    aria-label="Content card"
  >
    {children}
  </div>
));
Card.displayName = "Card";
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  role: PropTypes.string
};

// Memoized StatCard component with proper accessibility
const StatCard = memo(
  ({ value, label, sub, color, textColor, labelTextColor }) => (
    <Card
      className={`flex items-center justify-center text-center p-3 h-full font-urbanist ${color}`}
      role="article"
    >
      <div>
        <h3
          className={`text-6xl font-bold ${textColor} tracking-tight font-urbanist`}
          aria-label={`${value} ${label}`}
        >
          {value}
        </h3>
        <p
          className={`mt-2 font-medium text-2xl font-urbanist ${labelTextColor}`}
        >
          {label}
        </p>
        {sub && (
          <p
            className="mt-1 text-sm leading-snug text-wild-sand-200 mx-auto font-gtReg"
            aria-label={`Details: ${sub}`}
          >
            {sub}
          </p>
        )}
      </div>
    </Card>
  )
);
StatCard.displayName = "StatCard";
StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sub: PropTypes.string,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  labelTextColor: PropTypes.string.isRequired
};

const Bento = () => {
  // Memoize social links data to prevent recreation on every render
  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        href: "https://github.com/IshThumber",
        icon: <PiGithubLogoBold size={28} />,
        label: "Visit my GitHub profile"
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/ishthumber",
        icon: <PiLinkedinLogoBold size={28} />,
        label: "Connect with me on LinkedIn"
      },
      {
        name: "X",
        href: "https://x.com/IshThumber",
        icon: <PiXLogoBold size={28} />,
        label: "Follow me on X (Twitter)"
      },
      {
        name: "Medium",
        href: "https://medium.com/@ishthumber",
        icon: <PiMediumLogoBold size={28} />,
        label: "Read my articles on Medium"
      }
    ],
    []
  );

  // Memoize skills data
  const skills = useMemo(
    () => [
      {
        title: "Generative AI",
        sub: "LLMs, LangChain, OpenAI, RAG",
        icon: <LuBrain size={28} />
      },
      {
        title: "Cloud Architecture",
        sub: "AWS, GCP, Terraform",
        icon: <LuBoxes size={28} />
      },
      {
        title: "Full-Stack Dev",
        sub: "React.js, Node.js, Next.js",
        icon: <LuWebhook size={28} />
      },
      {
        title: "Logging & Monitoring",
        sub: "Prometheus, Grafana, AWS CloudWatch",
        icon: <LuChartColumn size={28} />
      },
      {
        title: "DevOps",
        sub: "CI/CD, Kubernetes, Docker, Helm",
        icon: <LuShipWheel size={28} />
      },
      {
        title: "CS Core",
        sub: "DSA, DBMS, Operating System, Networking, Systems Design",
        icon: <LuComputer size={28} />
      }
    ],
    []
  );

  // Memoize calculated project count
  const projectCount = useMemo(() => projects.length - 1, []);

  return (
    <main className="min-h-screen transition-all duration-500" role="main">
      <SEOHead />

      <header className="fixed z-50 w-full" role="banner">
        <Navbar />
      </header>

      <PageTransition>
        <div className="h-36 md:h-32" />
        <motion.section
          className="relative max-w-7xl md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          role="main"
          aria-label="Portfolio showcase"
        >
          <div className="relative flex flex-col justify-between w-full m-auto gap-14">
            <div className="h-fit">
              <div className="grid gap-2 lg:gap-4 lg:grid-cols-12 md:grid-cols-1 lg:grid-rows-auto items-start w-full auto-cols-auto grid-rows-auto">
                {/* Profile Section */}
                <motion.section
                  className="lg:col-span-4 lg:h-full bg-[#e5bcc1] text-4xl rounded-3xl w-full col-span-8"
                  aria-label="Personal profile section"
                  initial={{
                    opacity: 0,
                    x: -30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                >
                  <div className="h-full flex flex-col md:flex-row lg:flex-col items-center justify-start p-4 gap-6 md:gap-2 lg:gap-6">
                    <motion.div
                      className="h-1/3"
                      whileHover={{
                        scale: 1.05
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <img
                        src={profilePic}
                        alt="Ish Thumber - AWS Community Builder and DevTools specialist"
                        className="h-64 w-64 object-cover rounded-3xl shadow-2xl border-4 border-blue-gray-800/80 transition-all duration-500 aspect-square hover:shadow-3xl"
                        loading="eager"
                        fetchpriority="high"
                        width="256"
                        height="256"
                      />
                    </motion.div>
                    <motion.div
                      className="text-center align-middle items-center mx-auto md:h-2/3 lg:space-y-10"
                      initial={{
                        opacity: 0,
                        y: 20
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4
                      }}
                    >
                      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 text-[#683342]">
                        Ish Thumber
                      </h1>

                      <p className="mt-1 font-medium text-[#793849]/80 text-center text-2xl md:text-3xl font-urbanist underline decoration-dotted underline-offset-4">
                        AWS Community Builder - DevTools
                      </p>
                      <p className="mt-6 mx-auto text-sm md:text-base leading-relaxed text-[#2f323c] max-w-xs text-justify">
                        As an AWS Community Builder, I work across AWS —
                        designing cloud architectures and automating
                        infrastructure with tools like Terraform and Kubernetes.
                        I also build full-stack applications using React, Vite,
                        Node.js, and Python, bridging cloud and code to deliver
                        end-to-end solutions.
                      </p>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Content Grid */}
                <motion.section
                  className="col-span-8 grid gap-3 grid-cols-1 md:grid-cols-2 auto-rows-auto self-stretch text-7xl pl-0 lg:pl-2"
                  aria-label="Portfolio content sections"
                  initial={{
                    opacity: 0,
                    x: 30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3
                  }}
                >
                  {/* Social Links */}
                  <motion.nav
                    className="col-span-1 md:col-span-2 flex items-center"
                    aria-label="Social media links"
                    transition={{
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <Card className="w-full h-full flex items-center justify-center text-white font-bold text-3xl space-x-2 md:space-x-3 py-7 bg-[#c1cec8]">
                      {socialLinks.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.label}
                          className="group relative inline-flex items-center justify-center rounded-2xl bg-[#81968f] hover:bg-light-blue-900 transition-colors duration-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          whileTap={{
                            scale: 0.95
                          }}
                          whileHover={{
                            scale: 1.05
                          }}
                          initial={{
                            opacity: 0,
                            y: 20
                          }}
                          animate={{
                            opacity: 1,
                            y: 0
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.5 + index * 0.1
                          }}
                        >
                          <span className="group-hover:text-bunker-300 transition-colors p-3 md:p-4 text-[#2c3532]">
                            {item.icon}
                          </span>
                        </motion.a>
                      ))}
                    </Card>
                  </motion.nav>

                  {/* Statistics */}
                  <motion.article
                    className="col-span-1"
                    initial={{
                      opacity: 0,
                      y: 30
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6
                    }}
                  >
                    <StatCard
                      color="bg-[#6ba1c5]"
                      textColor="text-[#263f54]"
                      labelTextColor="text-[#294a63]"
                      value={`${projectCount}+`}
                      label="project_nums.size()"
                      sub="Gen AI, Web Dev, Cloud Infra"
                    />
                  </motion.article>
                  <motion.article
                    className="col-span-1"
                    initial={{
                      opacity: 0,
                      y: 30
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7
                    }}
                  >
                    <StatCard
                      color="bg-[#cd99c1]"
                      textColor="text-[#633854]"
                      labelTextColor="text-[#753f63]"
                      value="3+"
                      label="certificates.size()"
                      sub="AWS Community Builder, AWS Solutions Architect, Terraform Associate"
                    />
                  </motion.article>

                  {/* Call to Action */}
                  <motion.section
                    className="col-span-1 md:col-span-2"
                    aria-label="Contact section"
                    initial={{
                      opacity: 0,
                      y: 30
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8
                    }}
                  >
                    <Card className="col-span-2 md:p-8 py-3 flex flex-col justify-center bg-[#ba98e8]">
                      <div className="flex md:flex-row gap-6 items-center justify-between flex-col text-center px-2 md:px-0">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 font-urbanist text-[#512e75]">
                            Interested in Working Together?
                          </h2>
                          <p className="text-sm md:text-base font-gtReg">
                            Let's build scalable, resilient systems and modern
                            apps.
                          </p>
                        </div>
                        <div className="text-xl">
                          <motion.button
                            type="button"
                            className="rounded-xl bg-[#512e75] text-wild-sand-200 font-medium px-6 py-4 hover:bg-light-blue-900 transition-colors text-lg md:text-xl font-urbanist duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label="Contact me to discuss collaboration"
                            whileHover={{
                              scale: 1.05
                            }}
                            whileTap={{
                              scale: 0.95
                            }}
                          >
                            Contact Me
                          </motion.button>
                        </div>
                      </div>
                    </Card>
                  </motion.section>

                  {/* Skills Section */}
                  <motion.section
                    className="col-span-1 md:col-span-2 row-span-3 text-2xl"
                    aria-label="Technical skills"
                    initial={{
                      opacity: 0,
                      y: 40
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.9
                    }}
                  >
                    <Card className="col-span-2 p-4 md:p-8 bg-[#a7b9d2] text-light-blue-800">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-6 text-center font-urbanist text-[#2d394d]">
                        Core Skill Set
                      </h2>
                      <div
                        className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        role="list"
                      >
                        {skills.map(({ title, sub, icon }, index) => (
                          <motion.article
                            key={title}
                            className="relative rounded-3xl bg-[#5777a0] p-4 md:p-5 flex flex-col items-center text-center hover:bg-[#793849]/90 hover:transition-colors transition duration-500 text-[#1e2633] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                            role="listitem"
                            tabIndex="0"
                            aria-label={`Skill: ${title}. ${sub}`}
                            initial={{
                              opacity: 0,
                              y: 20
                            }}
                            animate={{
                              opacity: 1,
                              y: 0
                            }}
                            transition={{
                              duration: 0.6,
                              delay: 1.0 + index * 0.1
                            }}
                          >
                            <div
                              className="text-2xl md:text-3xl mb-3 select-none"
                              aria-hidden="true"
                            >
                              {icon}
                            </div>
                            <h3 className="font-semibold tracking-wide text-wild-sand-200 text-base md:text-lg font-urbanist">
                              {title}
                            </h3>
                            <p className="mt-1 text-xs md:text-sm text-wild-sand-300">
                              {sub}
                            </p>
                          </motion.article>
                        ))}
                      </div>
                    </Card>
                  </motion.section>
                </motion.section>
              </div>
            </div>
          </div>
        </motion.section>
      </PageTransition>

      <footer role="contentinfo">
        <Suspense
          fallback={
            <div
              className="flex justify-center items-center py-8"
              role="status"
              aria-label="Loading footer"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-wild-sand-200"></div>
            </div>
          }
        >
          <Footer />
        </Suspense>
      </footer>
    </main>
  );
};

export default Bento;
