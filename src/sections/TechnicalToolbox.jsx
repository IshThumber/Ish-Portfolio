import React from "react";
import { motion } from "framer-motion";
import {
  CloudSunIcon,
  CpuIcon,
  DatabaseIcon,
  SparkleIcon,
  BrowsersIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";
import { certifications as rawCertifications } from "../utils/General";

export const TechnicalToolbox = () => {
  const toolGroups = [
    {
      category: "Cloud & Infrastructure",
      icon: <CloudSunIcon size={24} weight="duotone" className="text-[#1E293B]" />,
      context:
        "Designing secure, scalable cloud environments across AWS and GCP — from networking and identity to multi-account architecture and infrastructure automation.",
      items: ["AWS", "GCP", "Terraform", "IAM", "VPC", "EC2", "S3", "Route 53"],
    },

    {
      category: "Platform & Observability",
      icon: <CpuIcon size={24} weight="duotone" className="text-[#1E293B]" />,
      context:
        "Building Kubernetes platforms, deployment automation, and observability systems designed for repeatability, reliability, and Day-2 operations.",
      items: ["Kubernetes", "EKS", "Docker", "Helm", "Prometheus", "Grafana", "Loki", "Thanos"],
    },

    {
      category: "Backend & Data",
      icon: <DatabaseIcon size={24} weight="duotone" className="text-[#1E293B]" />,
      context:
        "Building APIs, automation services, and data workflows that connect infrastructure, applications, and large-scale data systems.",
      items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "PySpark", "SQL", "REST APIs"],
    },

    {
      category: "AI & GenAI",
      icon: <SparkleIcon size={24} weight="duotone" className="text-[#581C87]" />,
      context:
        "Building LLM-powered applications and RAG pipelines with document ingestion, embeddings, vector retrieval, contextual generation, and cloud AI services.",
      items: [
        "Amazon Bedrock",
        "RAG",
        "Claude",
        "Titan Embeddings",
        "OpenSearch",
        "Gemini",
        "Vector Search",
        "LLM APIs",
      ],
    },

    {
      category: "Frontend & Product Engineering",
      icon: <BrowsersIcon size={24} weight="duotone" className="text-[#1E293B]" />,
      context:
        "Turning complex engineering workflows into approachable interfaces through reusable components, thoughtful interaction design, and modern frontend architecture.",
      items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
    },
  ];

  return (
    <section className="relative py-16 bg-paper-grid border-t border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span
            className="
            font-mono
            text-[11px]
            font-semibold
            tracking-[0.08em]
            px-2.5 py-1
            rounded
            bg-[#1E293B]
            text-[#FAF8F5]
            inline-block
            mb-3
          "
          >
            TECHNICAL TOOLBOX
          </span>

          <h2
            className="
            font-primary
            text-[32px]
            sm:text-[38px]
            lg:text-[42px]
            leading-[1.08]
            font-bold
            tracking-[-0.025em]
            text-[#1E293B]
          "
          >
            What I build with.
          </h2>

          <p
            className="
            font-handwriting
            text-slate-600
            text-xl
            mt-2
          "
          >
            tools earned through building, breaking & debugging things →
          </p>
        </div>

        {/* Capability Grid */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-6
          gap-5
          mb-12
        "
        >
          {toolGroups.map((group, idx) => {
            /*
             * Five cards across a six-column editorial grid.
             * First three occupy 2 columns.
             * Bottom two occupy 3 columns.
             */
            const span = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";

            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.04,
                }}
                className={`
                  ${span}
                  journal-card
                  p-5
                  flex
                  flex-col
                `}
              >
                <div className="flex items-center gap-3 mb-3">
                  {group.icon}

                  <h3
                    className="
                    font-primary
                    font-semibold
                    text-[17px]
                    text-[#1E293B]
                  "
                  >
                    {group.category}
                  </h3>
                </div>

                <p
                  className="
                  font-primary
                  text-sm
                  text-slate-600
                  leading-[1.6]
                  mb-5
                "
                >
                  {group.context}
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-1.5
                  pt-3
                  mt-auto
                  border-t
                  border-slate-200
                "
                >
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        px-2.5
                        py-1
                        rounded-md
                        bg-[#FAF8F5]
                        border
                        border-slate-300
                        text-[#475569]
                        font-mono
                        text-[11px]
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Certifications */}
        <div
          className="
          bg-white/80
          p-5
          sm:p-6
          rounded-xl
          border
          border-slate-300
        "
        >
          <div className="flex items-baseline gap-3 mb-5">
            <h3
              className="
              font-mono
              text-[11px]
              font-semibold
              text-slate-500
              uppercase
              tracking-[0.1em]
            "
            >
              VERIFIED CREDENTIALS
            </h3>

            <span
              className="
              font-handwriting
              text-lg
              text-slate-500
            "
            >
              some paperwork to back it up ↘
            </span>
          </div>

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
          "
          >
            {rawCertifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  p-4
                  rounded-lg
                  bg-[#FAF8F5]
                  border
                  border-slate-200
                  hover:border-slate-400
                  hover:-translate-y-0.5
                  transition-all
                  duration-200
                "
              >
                <span
                  className="
                  font-mono
                  text-[10px]
                  font-medium
                  text-slate-400
                  uppercase
                  tracking-wide
                  block
                  mb-1.5
                "
                >
                  {cert.issuer} · {cert.date}
                </span>

                <h4
                  className="
                  font-primary
                  font-semibold
                  text-sm
                  text-[#1E293B]
                  leading-snug
                "
                >
                  {cert.name}
                </h4>

                <div
                  className="
                  mt-3
                  pt-2
                  border-t
                  border-slate-200
                  flex
                  items-center
                  justify-between
                  font-mono
                  text-[10px]
                  text-slate-500
                  font-medium
                "
                >
                  <span>VERIFY CREDENTIAL</span>

                  <ArrowUpRightIcon
                    size={13}
                    className="
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      transition-transform
                    "
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalToolbox;
