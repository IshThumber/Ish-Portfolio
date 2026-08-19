import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  CameraDoodle,
  CarDoodle,
  SaturnDoodle,
  CodeBracketsDoodle,
  CoffeeMugDoodle,
  HandArrowDoodle,
  TapeStripDoodle,
  UnderlineDoodle,
  ShipHelmDoodle,
} from "../components/Doodles";

export const HeroViewfinder = () => {
  const deskFrameRef = useRef(null);

  return (
    <section id="viewfinder" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-paper-grid">
      <img
        src="/doodles/juicebox2-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-10 left-6 w-20 h-20 opacity-80 -rotate-6 pointer-events-none select-none"
      />
      <img
        src="/doodles/binoculars-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-24 right-10 w-20 h-20 opacity-80 rotate-6 pointer-events-none select-none"
      />
      <img
        src="/doodles/camera2-doodle.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-24 right-16 w-20 h-20 opacity-80 -rotate-3 pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* System Voice Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="section-marker px-2.5 py-1 rounded bg-[#1E293B] text-[#FAF8F5]">01 / THE VIEWFINDER</span>
          <span className="font-handwriting text-slate-500 text-base self-end">field journal overview & identity</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Personal Story & Value Proposition */}
          <div className="lg:col-span-7 z-10">
            {/* Narrative Voice Greeting */}
            <div className="inline-block relative mb-4">
              <h2 className="text-xl sm:text-2xl font-medium text-[#475569] tracking-tight">Hi, I'm Ish.👋</h2>
            </div>

            {/* Narrative Voice Hero Main Title (H1: Weight 700, clamp 38px-54px) */}
            <div className="max-w-[760px]">
              <h1 className="hero-title mb-6">
                I build systems that live somewhere between{" "}
                <span className="relative inline-block text-[#1E293B]">
                  cloud infrastructure
                  <UnderlineDoodle className="absolute -bottom-2.5 left-0 w-full h-4 sm:h-5 text-[#FDBA9A]" />
                </span>
                , software, and{" "}
                <span className="relative inline-block text-[#581C87] bg-[#E9D5FF]/50 px-2 py-0.5 rounded">AI</span>.
              </h1>
            </div>

            {/* Personal Voice Handwritten Annotation (Preserved 20px-24px contrast) */}
            <div className="relative mt-5 mb-10 pl-4 border-l-2 border-[#CBD5E1]">
              <p className="font-handwriting text-xl sm:text-2xl text-slate-700 leading-snug">
                <span className="inline-block mr-1.5">"</span>and occasionally point cameras at things I find
                interesting, tinker with cars, and stare up at the night sky. ↗
                <span className="inline-block ml-1">"</span>
              </p>
            </div>

            {/* System Voice Core Capability Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-10 tech-chip text-slate-700">
              <span className="journal-badge bg-white">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> AWS & Cloud Infrastructure
              </span>
              <span className="journal-badge bg-white">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" /> Kubernetes & Platform Engineering
              </span>
              <span className="journal-badge bg-white">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" /> GenAI & RAG Applications
              </span>
              <span className="journal-badge bg-white">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" /> Full-Stack Engineering
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#artifacts"
                className="px-6 py-3.5 rounded-lg bg-[#1E293B] text-[#FAF8F5] font-semibold text-sm shadow-md hover:bg-slate-800 hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#odyssey"
                className="px-6 py-3.5 rounded-lg border-1 border-[#1e293b38] bg-white text-[#1E293B] font-semibold text-sm hover:bg-[#FEF3C7] transition-colors shadow-2xs"
              >
                About My Journey
              </a>
            </div>
          </div>

          {/* Right Column: Hand-drawn Interactive Desk Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Desk Frame Container */}
            <div
              ref={deskFrameRef}
              className="relative w-full max-w-lg aspect-square bg-white border-2 border-[#1E293B] rounded-2xl p-6 shadow-lg flex flex-col justify-between"
            >
              {/* System Voice Micro-Metadata Markings */}
              <div className="absolute top-3 left-3 text-slate-400 font-mono text-[10px]">[ 00:24:18 ]</div>
              <div className="absolute top-3 right-3 text-slate-400 font-mono text-[10px]">
                REC <span className="text-red-500">●</span>
              </div>
              <div className="absolute bottom-3 left-3 text-slate-400 font-mono text-[10px]">ISO 400</div>
              <div className="absolute bottom-3 right-3 text-slate-400 font-mono text-[10px]">F/2.8</div>

              {/* Tape Strip top decorative */}
              <div className="absolute -top-3 left-1/3 pointer-events-none translate-x-1/5 z-20">
                <TapeStripDoodle className="w-24 h-6" rotate="-3deg" />
              </div>

              {/* Personal Voice Draggable Note Hint */}
              <div className="absolute top-8 right-6 z-20 pointer-events-none flex items-center gap-1">
                <span className="font-handwriting text-slate-600 text-sm bg-[#FEF3C7] px-2 py-0.5 rounded border border-[#CBD5E1] shadow-2xs rotate-2">
                  yes, you can move these!
                </span>
                <HandArrowDoodle className="w-8 h-4 text-slate-600" />
              </div>

              {/* Center Personal Identity Composition */}
              <div className="relative w-full h-full flex flex-col items-center justify-center pt-4">
                {/* Profile Photo Avatar Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-[#1E293B] overflow-hidden shadow-md mb-4 bg-[#BAE6FD]/30 p-1">
                  <img src="/profile.png" alt="Ish Thumber" className="w-full h-full object-cover rounded-full" />
                </div>

                <p className="font-handwriting text-slate-800 text-lg font-bold text-center max-w-xs leading-tight">
                  <span className="inline-block mr-1.5">"</span>Building high-availability cloud platforms by day,
                  stargazing & capturing frames by night.<span className="inline-block ml-1">"</span>
                </p>

                {/* Floating Interactive Draggable Elements */}

                {/* 1. Camera Doodle */}
                <motion.div
                  drag
                  dragConstraints={deskFrameRef}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 left-4 w-20 h-20 p-2 flex flex-col items-center justify-center bg-[#BAE6FD]/60 border border-[#1E293B] rounded-xl shadow-md cursor-grab active:cursor-grabbing z-10"
                >
                  <CameraDoodle className="w-9 h-9" color="#1E293B" accent="#BAE6FD" />
                  <span className="font-handwriting text-[10px] text-slate-800 block text-center mt-1">
                    Photography
                  </span>
                </motion.div>

                {/* 2. Saturn Planet Doodle */}
                <motion.div
                  drag
                  dragConstraints={deskFrameRef}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-4 w-20 h-20 p-2 flex flex-col items-center justify-center bg-[#E9D5FF]/60 border border-[#1E293B] rounded-xl shadow-md cursor-grab active:cursor-grabbing z-10"
                >
                  <SaturnDoodle className="w-9 h-9" color="#1E293B" accent="#E9D5FF" />
                  <span className="font-handwriting text-[10px] text-slate-800 block text-center mt-1">Astronomy</span>
                </motion.div>

                {/* 3. Car / Automotive Doodle */}
                <motion.div
                  drag
                  dragConstraints={deskFrameRef}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.1, rotate: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 w-20 h-20 p-2 flex flex-col items-center justify-center bg-[#FDBA9A]/60 border border-[#1E293B] rounded-xl shadow-md cursor-grab active:cursor-grabbing z-10"
                >
                  <CarDoodle className="w-11 h-8" color="#1E293B" accent="#FDBA9A" />
                  <span className="font-handwriting text-[10px] text-slate-800 block text-center mt-1">Automotive</span>
                </motion.div>

                {/* 4. Code Brackets Doodle Badge */}
                <motion.div
                  drag
                  dragConstraints={deskFrameRef}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-1/2 left-4 -translate-y-1/2 w-20 h-20 p-2 flex flex-col items-center justify-center bg-[#FEF3C7] border border-[#1E293B] rounded-xl shadow-md cursor-grab active:cursor-grabbing z-20"
                >
                  <CodeBracketsDoodle className="w-9 h-9" color="#1E293B" accent="#FDBA9A" />
                  <span className="font-handwriting text-[10px] text-slate-800 block text-center mt-1">Code</span>
                </motion.div>

                {/* 5. Ship's Helm Doodle Badge */}
                <motion.div
                  drag
                  dragConstraints={deskFrameRef}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.1, rotate: 7 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-4 left-1/3 w-20 h-20 p-2 flex flex-col items-center justify-center bg-[#FDBA9A]/80 border border-[#1E293B] rounded-xl shadow-md cursor-grab active:cursor-grabbing z-20"
                >
                  <ShipHelmDoodle className="w-9 h-9" color="#1E293B" />
                  <span className="font-handwriting text-[10px] text-slate-800 block text-center"> K8s & Cloud</span>
                </motion.div>

                {/* 6. Coffee Mug Doodle Badge */}
                <motion.div
                  drag
                  dragConstraints={deskFrameRef}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-1/2 right-4 -translate-y-1/2 w-20 h-20 p-2 flex flex-col items-center justify-center bg-[#BAE6FD]/40 border border-[#1E293B] rounded-xl shadow-md cursor-grab active:cursor-grabbing z-20"
                >
                  <CoffeeMugDoodle className="w-9 h-9" color="#1E293B" accent="#FEF3C7" />
                  <span className="font-handwriting text-[10px] text-slate-800 block text-center">Coffee</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroViewfinder;
