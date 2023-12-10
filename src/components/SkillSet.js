import React from "react";

const SkillSet = ({ name }) => {
  return (
    <>
      <div className="col-span-1 shadowButton p-3 pl-4 border bg-shamrock-100 border-blue-gray-700 rounded-xl text-md text-left font-semibold">
        <h1 className="font-thin font-ikaros text-shamrock-700">{name}</h1>
      </div>
    </>
  );
};

export default SkillSet;
