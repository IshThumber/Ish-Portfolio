import React from "react";

const Heading = ({ name }) => {
  return (
    <div className="w-full py-3 pl-3 justify-start items-start">
      <h1 className="font-honeyLight text-4xl sm:text-5xl italic mt-10 text-opacity-20 text-blue-gray-900">
        {name}
      </h1>
    </div>
  );
};

export default Heading;
