import React from "react";
import { TapeStripDoodle } from "./Doodles";

export const StickyNote = ({
  children,
  color = "yellow", // 'yellow' | 'coral' | 'lavender' | 'mint' | 'blue'
  rotate = "-1.5deg",
  title = "Key Takeaway",
  className = "",
}) => {
  const bgColors = {
    yellow: "bg-[#FEF3C7] text-[#78350F] border-[#FDE68A]",
    coral: "bg-[#FDBA9A]/60 text-[#7C2D12] border-[#FDBA9A]",
    lavender: "bg-[#E9D5FF]/70 text-[#581C87] border-[#DDD6FE]",
    mint: "bg-[#BBF7D0]/70 text-[#14532D] border-[#86EFAC]",
    blue: "bg-[#BAE6FD]/70 text-[#0C4A6E] border-[#7DD3FC]",
  };

  const selectedStyle = bgColors[color] || bgColors.yellow;

  return (
    <div
      className={`relative p-5 rounded-lg border shadow-sm ${selectedStyle} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      {/* Tape strip at top center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none">
        <TapeStripDoodle className="w-20 h-5" rotate="1deg" />
      </div>

      {title && (
        <div className="font-handwriting text-lg font-bold mb-1 tracking-wide opacity-90 border-b border-current/20 pb-1">
          📌 {title}
        </div>
      )}

      <div className="font-handwriting text-base leading-relaxed">{children}</div>
    </div>
  );
};

export default StickyNote;
