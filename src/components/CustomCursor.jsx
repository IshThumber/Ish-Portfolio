import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState("default"); // 'default' | 'viewfinder' | 'star' | 'link'
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Determine element under cursor
      const target = e.target;
      if (target) {
        const closestInteractive = target.closest('a, button, [role="button"], input, textarea, .interactive-hover');
        const closestAstro = target.closest(".astro-canvas");

        if (closestAstro) {
          setCursorType("star");
        } else if (closestInteractive) {
          setCursorType("viewfinder");
        } else {
          setCursorType("default");
        }
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#1E293B] mix-blend-multiply"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: cursorType === "viewfinder" ? 0.5 : cursorType === "star" ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Ring / Reticle when hovering over interactive elements */}
      {cursorType === "viewfinder" && (
        <motion.div
          className="fixed top-0 left-0 w-10 h-10 border-1.5 border-[#1E293B] rounded-full border-dashed"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1,
            opacity: 0.8,
            rotate: 45,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        />
      )}

      {/* Star Cursor when over Astronomy canvas */}
      {cursorType === "star" && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 text-[#E9D5FF] flex items-center justify-center font-handwriting text-xs"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: [1, 1.2, 1],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ✦
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;
