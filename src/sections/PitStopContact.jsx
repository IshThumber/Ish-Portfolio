import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CarDoodle,
  SaturnDoodle,
  SparkleDoodle,
  TapeStripDoodle,
  CoffeeMugDoodle,
  CodeBracketsDoodle,
} from "../components/Doodles";
import { StickyNote } from "../components/StickyNote";
import { CloudLightningIcon } from "@phosphor-icons/react";

export const PitStopContact = () => {
  const [copied, setCopied] = useState(false);

  const emailAddress = "ishthumber343@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="pitstop" className="relative pt-20 pb-0 bg-[#FAF8F5] border-t border-[#CBD5E1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Marker ── */}
        <div className="flex items-center gap-3 mb-12">
          <span className="section-marker px-2.5 py-1 rounded bg-[#1E293B] text-[#FAF8F5]">05 / THE PIT STOP</span>
          <span className="font-handwriting text-slate-500 text-base self-end">connect &amp; final reflections</span>
        </div>

        {/* ── Centered Hero Contact Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto journal-card p-10 sm:p-14 text-center relative mb-10"
        >
          {/* Tape top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none">
            <TapeStripDoodle className="w-32 h-6" rotate="0.5deg" />
          </div>

          {/* Coffee mug */}
          <div className="mb-5 inline-block">
            <CoffeeMugDoodle className="w-20 h-20 mx-auto" color="#1E293B" accent="#FEF3C7" />
          </div>

          {/* Headline */}
          <h2 className="section-heading mb-3">Want to build something interesting?</h2>
          <p className="font-handwriting text-2xl text-slate-600 mb-8 leading-snug">
            <span className="inline-block mr-1.5">"</span>My inbox has plenty of parking space.
            <span className="inline-block ml-1">"</span>
          </p>

          {/* Email Copy */}
          <div className="relative inline-block mb-8">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-xl bg-[#1E293B] text-[#FAF8F5] font-mono text-sm font-semibold shadow-lg hover:bg-slate-800 hover:scale-[1.02] transition-all flex items-center gap-3 mx-auto group"
            >
              <span>✉️ {emailAddress}</span>
              <span className="bg-[#FAF8F5] text-[#1E293B] px-2.5 py-1 rounded text-xs font-bold ml-6">
                {copied ? "Copied! ✨" : "Click to Copy"}
              </span>
            </button>

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: -50 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none flex items-center gap-1.5 bg-[#FEF3C7] border border-[#1E293B] text-[#1E293B] px-3 py-1.5 rounded-full shadow-lg font-handwriting text-base z-30 whitespace-nowrap"
                >
                  <SparkleDoodle className="w-5 h-5" />
                  <span>Email copied to clipboard!</span>
                  <SparkleDoodle className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-200">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ish-thumber/", hover: "hover:bg-[#BAE6FD]" },
              { label: "GitHub", href: "https://github.com/IshThumber", hover: "hover:bg-[#BBF7D0]" },
              { label: "Medium", href: "https://ishthumber.medium.com", hover: "hover:bg-[#FDBA9A]" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg bg-white border border-slate-300 text-[#1E293B] ${link.hover} hover:border-[#1E293B] transition-colors font-semibold text-xs font-mono shadow-2xs`}
              >
                {link.label} ↗
              </a>
            ))}
            <a
              href="/Ish_Thumber_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ish_Thumber_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-[#FEF3C7] border border-[#1E293B] text-[#1E293B] hover:bg-[#FDBA9A] transition-colors font-bold text-xs font-mono shadow-2xs"
            >
              📄 Download Resume PDF
            </a>
          </div>
        </motion.div>

        {/* ── Three Supplementary Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Card 1: Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="journal-card p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="system-label">Current Status</span>
              </div>
              <CloudLightningIcon className="w-9 h-7 text-[#3a1c5b]" />
            </div>
            <p className="font-primary font-semibold text-[#1E293B] text-sm leading-snug mb-3">
              Open to senior cloud &amp; platform engineering roles
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              {[
                ["Location", "India 🇮🇳"],
                ["Timezone", "IST (UTC+5:30)"],
                ["Preferred", "Remote / Hybrid"],
                ["Response", "< 24 hours"],
              ].map(([k, v]) => (
                <div key={k} className="bg-[#FAF8F5] rounded px-2.5 py-1.5 border border-slate-200">
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block leading-none mb-0.5">
                    {k}
                  </span>
                  <span className="font-primary font-semibold text-[#1E293B] text-[11px]">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Sticky Field Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-stretch"
          >
            <StickyNote
              color="coral"
              title="Field Note"
              rotate="-1.5deg"
              className="w-full h-full flex flex-col justify-between"
            >
              <p className="leading-relaxed">
                I write about cloud architecture on Medium, build side projects on weekends, and occasionally photograph
                things nobody asked me to.
              </p>
              <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between text-xs font-handwriting opacity-85">
                <span>
                  field notebook <span className="text-[#1E293B]">{`// end log`}</span>
                </span>
              </div>
            </StickyNote>
          </motion.div>

          {/* Card 3: Currently excited about */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="journal-card p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <CodeBracketsDoodle className="w-6 h-5" color="#1E293B" accent="#FDBA9A" />
              <span className="system-label">Currently excited about</span>
            </div>
            <ul className="space-y-2">
              {[
                "AI agents on cloud-native infra",
                "Platform engineering at scale",
                "FinOps & cost-aware architectures",
                "Building things people actually use",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-primary leading-relaxed">
                  <span className="text-[#FDBA9A] font-bold text-base leading-none shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Closing Footer Strip ── */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Car → Saturn animation */}
            <div className="relative flex items-end h-14 w-72 shrink-0">
              <div className="absolute inset-x-0 bottom-0 border-b-2 border-dashed border-slate-300 pointer-events-none" />

              <motion.div
                animate={{ x: [0, 200, 200, 0, 0], scaleX: [1, 1, -1, -1, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.5, 0.95, 1] }}
                className="relative z-10 cursor-pointer group"
                onClick={() => {
                  const el = document.getElementById("car-honk-bubble");
                  if (el) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(-10px)";
                    setTimeout(() => {
                      el.style.opacity = "0";
                      el.style.transform = "translateY(0)";
                    }, 1800);
                  }
                }}
              >
                <div
                  id="car-honk-bubble"
                  className="absolute -top-7 left-0 bg-[#1E293B] text-[#FEF3C7] text-[11px] font-handwriting px-2 py-0.5 rounded-full shadow-md opacity-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-20"
                >
                  beep beep! 🚗✨
                </div>
                <CarDoodle
                  className="w-14 h-10 group-hover:scale-105 transition-transform"
                  color="#1E293B"
                  accent="#FDBA9A"
                />
              </motion.div>

              <motion.div
                whileHover={{ rotate: 180, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute right-0 bottom-1 cursor-pointer"
                title="Hover Saturn!"
              >
                <SaturnDoodle className="w-12 h-10" color="#1E293B" accent="#E9D5FF" />
              </motion.div>
            </div>

            {/* Credits */}
            <p className="text-xs font-mono text-slate-400 text-center sm:text-right">
              © {new Date().getFullYear()} Ish Thumber.{" "}
              <span className="hidden sm:inline">Designed with craft, code, and curiosity.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitStopContact;
