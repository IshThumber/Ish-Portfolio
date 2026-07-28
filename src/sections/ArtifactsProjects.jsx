import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyNote } from "../components/StickyNote";
import { projects as rawProjects } from "../utils/General";
import { KubernetesWheelDoodle, CloudDoodle, ServerRackDoodle, CodeBracketsDoodle } from "../components/Doodles";

// Hand-authored architecture diagrams — only for projects where the real topology
// is worth showing. Keyed by exact project name from General.js.
const architectureDiagrams = {
  "Intellicore Observability": (
    <svg viewBox="0 0 740 260" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* K8s Clusters */}
      <rect
        x="10"
        y="15"
        width="150"
        height="60"
        rx="8"
        stroke="#1E293B"
        strokeWidth="2"
        fill="#BAE6FD"
        fillOpacity="0.5"
      />
      <text x="85" y="38" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        K8s Clusters ×N
      </text>
      <text x="85" y="52" textAnchor="middle" className="font-handwriting text-[9px] fill-slate-600">
        Alloy + Prometheus Agent
      </text>

      {/* Cloud-Native Infra */}
      <rect
        x="10"
        y="90"
        width="150"
        height="60"
        rx="8"
        stroke="#1E293B"
        strokeWidth="2"
        fill="#FDBA9A"
        fillOpacity="0.4"
      />
      <text x="85" y="113" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        Cloud-Native Infra
      </text>
      <text x="85" y="127" textAnchor="middle" className="font-handwriting text-[9px] fill-slate-600">
        Database + VM
      </text>

      <path d="M160 45 L195 68" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M160 120 L195 78" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Push Remote Write */}
      <rect
        x="195"
        y="55"
        width="110"
        height="55"
        rx="8"
        stroke="#1E293B"
        strokeWidth="2.5"
        fill="#E9D5FF"
        fillOpacity="0.5"
      />
      <text x="250" y="78" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        Push Remote
      </text>
      <text x="250" y="92" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        Write
      </text>

      <path d="M305 82 L345 82" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />

      {/* Monitoring Stack */}
      <rect x="345" y="10" width="165" height="150" rx="8" stroke="#1E293B" strokeWidth="2.5" fill="#FAF8F5" />
      <text x="427" y="25" textAnchor="middle" className="font-mono text-[9px] font-bold fill-slate-500">
        MONITORING CLUSTER
      </text>

      <rect
        x="355"
        y="35"
        width="70"
        height="55"
        rx="6"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="#BAE6FD"
        fillOpacity="0.6"
      />
      <text x="390" y="66" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#1E293B]">
        Loki
      </text>

      <rect
        x="430"
        y="35"
        width="70"
        height="55"
        rx="6"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="#FDBA9A"
        fillOpacity="0.5"
      />
      <text x="465" y="66" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#1E293B]">
        Tempo
      </text>

      <rect
        x="355"
        y="100"
        width="70"
        height="55"
        rx="6"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="#E9D5FF"
        fillOpacity="0.6"
      />
      <text x="390" y="131" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#1E293B]">
        Thanos
      </text>

      <rect
        x="430"
        y="100"
        width="70"
        height="55"
        rx="6"
        stroke="#1E293B"
        strokeWidth="1.5"
        fill="#FECACA"
        fillOpacity="0.6"
      />
      <text x="465" y="131" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#1E293B]">
        CloudNative
      </text>

      <path d="M510 60 L545 40" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M510 130 L545 195" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />

      {/* Grafana */}
      <rect x="545" y="15" width="130" height="50" rx="8" stroke="#1E293B" strokeWidth="2" fill="#E2E8F0" />
      <text x="610" y="45" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        Grafana
      </text>

      <path d="M610 65 L610 90" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />

      {/* Alert Manager */}
      <rect
        x="545"
        y="90"
        width="130"
        height="50"
        rx="8"
        stroke="#1E293B"
        strokeWidth="2"
        fill="#FBCFE8"
        fillOpacity="0.5"
      />
      <text x="610" y="120" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        Alert Manager
      </text>

      <path d="M610 140 L610 165" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />

      {/* Notifications */}
      <rect x="545" y="165" width="130" height="50" rx="8" stroke="#1E293B" strokeWidth="2" fill="#FAF8F5" />
      <text x="610" y="188" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#1E293B]">
        SMTP / Slack /
      </text>
      <text x="610" y="202" textAnchor="middle" className="font-mono text-[9px] font-bold fill-[#1E293B]">
        Teams
      </text>

      {/* S3 long-term storage */}
      <rect
        x="345"
        y="195"
        width="165"
        height="45"
        rx="8"
        stroke="#1E293B"
        strokeWidth="2"
        fill="#BBF7D0"
        fillOpacity="0.5"
      />
      <text x="427" y="222" textAnchor="middle" className="font-mono text-[10px] font-bold fill-[#1E293B]">
        S3 — Long-Term Storage
      </text>
    </svg>
  ),
};

// Map projects from General.js to enhanced editorial case study format
const enhanceProjectData = (p, index) => {
  // Determine category
  let category = "cloud";
  const nameLower = p.name.toLowerCase();
  const techString = p.tech.join(" ").toLowerCase();
  if (
    techString.includes("bedrock") ||
    techString.includes("rag") ||
    techString.includes("gemini") ||
    techString.includes("openai") ||
    techString.includes("claude")
  ) {
    category = "ai";
  } else if (nameLower.includes("terraform") || techString.includes("datasync")) {
    category = "cloud";
  } else if (
    techString.includes("kubernetes") ||
    techString.includes("eks") ||
    techString.includes("helm") ||
    techString.includes("prometheus")
  ) {
    category = "platform";
  } else if (
    techString.includes("react") ||
    techString.includes("node") ||
    techString.includes("mongodb") ||
    techString.includes("express")
  ) {
    category = "fullstack";
  }

  // Sticky note color & rotation
  const colors = ["coral", "lavender", "mint", "yellow", "blue"];
  const color = colors[index % colors.length];
  const rotations = ["-1.5deg", "1deg", "-1deg", "1.5deg", "-0.5deg"];
  const rotate = rotations[index % rotations.length];

  return {
    ...p,
    id: p.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    category,
    color,
    rotate,
    architectureDiagram: architectureDiagrams[p.name] || null,
  };
};

export const ArtifactsProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const enhancedProjects = rawProjects.map(enhanceProjectData);

  const categories = [
    { id: "all", label: `ALL ARTIFACTS (${enhancedProjects.length})` },
    { id: "cloud", label: "CLOUD INFRASTRUCTURE" },
    { id: "platform", label: "PLATFORM & K8S" },
    { id: "ai", label: "GENAI & RAG" },
    { id: "fullstack", label: "FULL-STACK APPS" },
  ];

  const filteredProjects =
    selectedCategory === "all" ? enhancedProjects : enhancedProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="artifacts" className="relative py-20 md:py-28 bg-[#FAF8F5] border-t border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="section-marker px-2.5 py-1 rounded bg-[#1E293B] text-[#FAF8F5]">04 / THE ARTIFACTS</span>
              <span className="font-handwriting text-slate-500 text-base self-end">
                the centerpiece // engineering case studies
              </span>
            </div>
            <h2 className="section-heading">Things I've built.</h2>
          </div>

          {/* Category Filter Chips — System Voice (JetBrains Mono) */}
          <div className="flex flex-wrap items-center gap-2 font-mono">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  selectedCategory === cat.id
                    ? "bg-[#1E293B] text-white border-[#1E293B] shadow-xs"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="journal-card p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Year & Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  {project.year && (
                    <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      {project.year}
                    </span>
                  )}
                  {/* Project Title H3 (GT Walsheim, 600-700 weight, 26px-32px) */}
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="project-title">{project.name}</h3>
                    {project.subtitle && (
                      <span className="font-handwriting text-slate-500 text-sm italic">— {project.subtitle}</span>
                    )}
                  </div>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3 text-xs font-semibold font-mono">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-[#1E293B] text-white hover:bg-slate-800 transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>LIVE DEMO</span>
                      <span>↗</span>
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "Private" && project.githubUrl.startsWith("http") && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded border border-[#1E293B] text-[#1E293B] hover:bg-[#FEF3C7] transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>GITHUB</span>
                      <span>↗</span>
                    </a>
                  )}
                  {project.githubUrl === "Private" && (
                    <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-500 font-mono text-[11px]">
                      🔒 ENTERPRISE REPO
                    </span>
                  )}
                </div>
              </div>

              {/* Description Body Copy (GT Walsheim, 16px, line-height 1.65) */}
              <p className="body-text mb-6">{project.description}</p>

              {/* Real Architecture Diagram — only rendered when one exists */}
              {project.architectureDiagram && (
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-slate-300 mb-8">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                    <span className="system-label">ARCHITECTURE</span>
                    <span className="font-handwriting text-xs text-slate-500">actual deployment topology</span>
                  </div>
                  <div className="w-full overflow-x-auto">{project.architectureDiagram}</div>
                </div>
              )}

              {/* Technical Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                {/* Impact (Professional Evidence in GT Walsheim) */}
                <div className="lg:col-span-6">
                  {project.impact && (
                    <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[#22C55E] font-bold text-sm">✦</span>
                        <h4 className="system-label text-[#1E293B]">IMPACT & TECHNICAL OUTCOME</h4>
                      </div>
                      <p className="body-text text-sm text-slate-700 font-primary leading-relaxed">{project.impact}</p>
                    </div>
                  )}
                </div>

                {/* Primary Tech Stack Chips (Show top 6 + N more) */}
                <div className="lg:col-span-6">
                  <h4 className="system-label mb-2">PRIMARY TECH STACK</h4>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tech.slice(0, 6).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-800 tech-chip"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-slate-500 font-mono text-[10px] font-semibold">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Sticky Note Key Takeaway Footer */}
              {project.keyTakeaway && (
                <div className="pt-2 border-t border-slate-200 flex justify-end">
                  <StickyNote color={project.color} title="Key Takeaway" rotate={project.rotate} className="max-w-xl">
                    <span className="inline-block mr-1.5">"</span>
                    {project.keyTakeaway}
                    <span className="inline-block ml-1">"</span>
                  </StickyNote>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtifactsProjects;
