import React from "react";

const SkillSet = ({ name }) => {
  return (
    <>
      <div className="col-span-1 shadowButton p-3 border bg-[#ecfdf5] border-blue-gray-700 rounded-md text-md text-left font-semibold">
        <h1 className="font-thin font-ikaros text-[#047857]">{name}</h1>
      </div>
    </>
  );
};

export default SkillSet;
