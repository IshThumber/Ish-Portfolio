import React, { useState } from "react";
import { motion } from "framer-motion";
import { StickyNote } from "../components/StickyNote";
import { experience as rawExperience, education as rawEducation } from "../utils/General";

export const JourneyOdyssey = () => {
  const [activeStep, setActiveStep] = useState(0);

  const colors = ["coral", "lavender", "mint", "blue", "yellow"];

  return (
    <section id="odyssey" className="relative py-20 md:py-28 bg-[#FAF8F5] border-t border-[#CBD5E1]">
      <img
        src="/doodles/leaf-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-10 right-6 w-20 h-20 opacity-80 rotate-6 pointer-events-none select-none"
      />
      <img
        src="/doodles/lucky-cat-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-1/2 left-6 w-20 h-20 opacity-80 -rotate-3 pointer-events-none select-none"
      />
      <img
        src="/doodles/dino-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-10 right-10 w-20 h-20 opacity-80 rotate-6 pointer-events-none select-none"
      />
      <img
        src="/doodles/compass-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-1/3 right-24 w-20 h-20 opacity-80 -rotate-6 pointer-events-none select-none"
      />
      <img
        src="/doodles/treasure-map-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-1/3 left-16 w-20 h-20 opacity-80 rotate-3 pointer-events-none select-none"
      />
      <img
        src="/doodles/knight-helmet-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-10 left-24 w-20 h-20 opacity-80 -rotate-3 pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#1E293B] text-[#FAF8F5]">
                02 / THE ODYSSEY
              </span>
              <span className="font-handwriting text-slate-500 text-base self-end">
                career trajectory & experience log
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">How I got here.</h2>
          </div>
          <p className="font-handwriting text-slate-600 text-base sm:text-lg max-w-md">
            <span className="inline-block mr-1.5">"</span>Learning → Experimenting → Building → Operating real systems →
            AI + Platform Engineering<span className="inline-block ml-1">"</span>
          </p>
        </div>

        {/* Milestone Navigation Tabs / Route Circuit Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="flex items-center gap-3 min-w-max border-b-2 border-[#CBD5E1] pb-3">
            {rawExperience.map((exp, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative px-4 py-2.5 rounded-xl font-medium text-xs tracking-wide transition-all flex items-center gap-2.5 border ${
                    isActive
                      ? "bg-[#1E293B] text-white border-[#1E293B] shadow-md -translate-y-0.5"
                      : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      isActive ? "bg-[#FDBA9A] text-[#1E293B]" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div className="text-left">
                    <span className="block font-semibold">{exp.name}</span>
                    <span className="block text-[10px] opacity-80">{exp.company}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Card */}
        {rawExperience.map((exp, idx) => {
          if (idx !== activeStep) return null;
          const color = colors[idx % colors.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Main Detail Card */}
              <div className="lg:col-span-8 journal-card p-6 sm:p-8 relative overflow-hidden">
                {/* Period & Role Title */}
                <div className="flex flex-wrap items-end justify-between gap-2 mb-4 pt-2">
                  <div>
                    <span className="font-mono text-xs text-slate-500 font-bold tracking-wider">
                      {exp.year || "Timeline Milestone"}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mt-1">
                      <span className="tracking-tighter">{exp.name}</span>{" "}
                      <span className="text-slate-400 font-handwriting text-md tracking-tight">@ {exp.company}</span>
                    </h3>
                  </div>

                  <span className="journal-badge bg-[#FAF8F5] text-slate-700 font-mono self-end mb-3">
                    ✦ {exp.type === "community" ? "Community Recognition" : "Engineering Role"}
                  </span>
                </div>

                {/* Achievements Bullet List */}
                <div className="mb-6 bg-[#FAF8F5] p-5 rounded-lg border border-slate-200">
                  <h4 className="font-mono text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-3">
                    Impact & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.description.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed font-primary"
                      >
                        <span className="text-[#FDBA9A] font-bold text-base leading-none">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar Sticky Reflection Note & Education Summary */}
              <div className="lg:col-span-4 space-y-4">
                <StickyNote color={color} title="Field Note" rotate="-1deg" className="shadow-md">
                  <span className="inline-block mr-1.5">"</span>
                  {exp.fieldNote ||
                    `${exp.name} at ${exp.company} — continuously pushing limits on infrastructure and developer experience.`}
                  <span className="inline-block ml-1">"</span>
                </StickyNote>

                {/* Education Card */}
                {rawEducation.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl border border-slate-300 bg-white shadow-2xs">
                    <span className="font-mono text-[10px] font-bold text-slate-400 block uppercase">
                      🎓 Education ({edu.year})
                    </span>
                    <h4 className="font-bold text-sm text-[#1E293B] mt-0.5">{edu.degree}</h4>
                    <p className="text-xs text-slate-600 font-handwriting mt-1">{edu.name}</p>
                    <span className="inline-block mt-2 font-mono text-[11px] font-bold text-[#1E293B] bg-[#FEF3C7] px-2 py-0.5 rounded border border-slate-300">
                      {edu.description}
                    </span>
                  </div>
                ))}

                <img
                  src="/doodles/juicebox-doodle.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-16 mx-auto opacity-70 -rotate-6 pointer-events-none select-none"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default JourneyOdyssey;
