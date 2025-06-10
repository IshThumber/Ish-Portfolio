import React from "react";

const SkillSet = ({ name, percent }) => {
  const level = Math.round(percent / 20); // 1-5 dots
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold">{name}</span>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < level ? "text-shamrock-400" : "text-gray-400"}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
