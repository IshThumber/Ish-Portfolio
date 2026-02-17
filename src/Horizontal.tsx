import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HobbyPillar = {
  id: string;
  title: string;
  summary: string;
  focus: string[];
  bridge: string;
  color: string;
};

const HOBBY_PILLARS: HobbyPillar[] = [
  {
    id: "technology-infrastructure",
    title: "Technology & Infrastructure",
    summary: "Cloud foundations and distributed reliability are both professional focus and personal craft.",
    focus: ["Cloud architecture across AWS and GCP", "Distributed systems and platform engineering", "System design thinking for resilient operations"],
    bridge: "Core theme: build stable foundations so every product can move faster.",
    color: "bg-blue-500",
  },
  {
    id: "software-products",
    title: "Software Development & Product Building",
    summary: "Software is a creative lab for experimentation, iteration, and practical execution.",
    focus: ["Full-stack development with production intent", "Building SaaS MVPs and internal tools", "AI-powered applications and automation-first workflows"],
    bridge: "Core theme: code is a way to test ideas quickly and ship useful outcomes.",
    color: "bg-green-500",
  },
  {
    id: "cars-performance",
    title: "Cars & Performance Engineering",
    summary: "Porsche GT-level engineering inspires how I think about precision, feedback, and tradeoffs.",
    focus: ["Performance car systems and setup philosophy", "Mechanical precision and engineering discipline", "Applying machine-thinking to software architecture"],
    bridge: "Core theme: performance is designed, measured, and continuously refined.",
    color: "bg-red-500",
  },
  {
    id: "photography",
    title: "Photography",
    summary: "Composition and framing sharpen observation and structural thinking.",
    focus: ["Visual composition and symmetry", "Framing complex scenes with intent", "Using structure to tell cleaner visual stories"],
    bridge: "Core theme: clarity comes from what you choose to emphasize.",
    color: "bg-yellow-500",
  },
  {
    id: "astronomy",
    title: "Astronomy & Space Curiosity",
    summary: "Space encourages systems perspective and long-range thinking about scale.",
    focus: ["Cosmic scale and perspective shifts", "Interest in orbital and physical systems", "Curiosity about how large systems interact"],
    bridge: "Core theme: zooming out improves decisions made at ground level.",
    color: "bg-pink-500",
  },
  {
    id: "learning-exploration",
    title: "Learning & Deep Technical Exploration",
    summary: "Structured learning cycles keep fundamentals sharp and expand technical range.",
    focus: ["Networking and protocol-level fundamentals", "Advanced cloud architecture study", "Cross-domain learning from anatomy to specialization models"],
    bridge: "Core theme: depth compounds into better engineering judgement.",
    color: "bg-fuchsia-500",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    summary: "Automation is treated as a design problem, not only a scripting task.",
    focus: ["AI workflows and intelligent system design", "Automation pipelines with tools like n8n", "Orchestration patterns for repeatable execution"],
    bridge: "Core theme: automate the repeatable so focus stays on higher-value decisions.",
    color: "bg-orange-500",
  },
  {
    id: "design-interaction",
    title: "Design & Interaction Thinking",
    summary: "Interface design is approached with the same systems mindset as engineering.",
    focus: ["Portfolio and product interface design", "Motion and interaction aesthetics", "Clean UI/UX structure with clear hierarchy"],
    bridge: "Core theme: good design makes complex systems feel understandable.",
    color: "bg-teal-500",
  },
  {
    id: "startup-product",
    title: "Startup Building & Product Thinking",
    summary: "Product strategy and MVP execution are active interests, not side notes.",
    focus: ["MVP definition and rapid validation", "Digital product direction and positioning", "Infrastructure-focused SaaS concept exploration"],
    bridge: "Core theme: product thinking keeps engineering tied to real outcomes.",
    color: "bg-indigo-500",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    summary: "Optimization work is centered on measurable efficiency and dependable behavior.",
    focus: ["Latency, scaling, and throughput tuning", "Reliability engineering and operational guardrails", "System efficiency under production constraints"],
    bridge: "Core theme: reliability and speed should improve together, not trade off blindly.",
    color: "bg-purple-500",
  },
];

const Horizontal = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const progressBarRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const progressBar = progressBarRef.current;
      const container = containerRef.current;
      if (!slider || !progressBar || !container) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(progressBar, { scaleX: 1, transformOrigin: "left center" });
        return;
      }

      const getScrollDistance = () => Math.max(0, slider.scrollWidth - window.innerWidth);

      if (getScrollDistance() <= 0) {
        gsap.set(progressBar, { scaleX: 1, transformOrigin: "left center" });
        return;
      }

      gsap.set(slider, { x: 0, force3D: true, willChange: "transform" });
      gsap.set(progressBar, {
        scaleX: 0,
        force3D: true,
        transformOrigin: "left center",
        willChange: "transform",
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container,
          start: "top top",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(slider, {
        x: () => -getScrollDistance(),
      });

      timeline.to(
        progressBar,
        {
          scaleX: 1,
        },
        0,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-neutral-900 text-neutral-100">
      <div ref={sliderRef} className="flex h-screen w-fit items-center px-12 will-change-transform">
        {HOBBY_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className={`${pillar.color} shrink-0 w-[90vw] h-[80vh] mr-8 last:mr-0 p-8 rounded-3xl bg-neutral-800 border border-neutral-700 flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{pillar.title}</h2>
              <p className="text-xl text-neutral-300 mb-6 font-light">{pillar.summary}</p>

              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold">Focus Areas</h3>
                <ul className="space-y-2">
                  {pillar.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span className="text-neutral-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-700">
              <p className="text-sm text-neutral-400 italic">"{pillar.bridge}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar Container */}
      <div className="absolute bottom-10 left-12 right-12 h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div ref={progressBarRef} className="h-full w-full origin-left scale-x-0 bg-linear-to-r from-blue-500 to-purple-500 will-change-transform" />
      </div>

      {/* Scroll indicator/instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-500 text-sm animate-pulse">Scroll Down to Explore</div>
    </div>
  );
};

export default Horizontal;
