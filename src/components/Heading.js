import React from "react";

const Heading = ({ children }) => {
  return (
    // <div className="w-full py-3 pl-3 justify-start items-start">
    //   <h1 className="font-honeyLight text-4xl sm:text-5xl italic mt-10 text-opacity-20 text-blue-gray-900 dark:text-[#e5e7eb]/30 transition-color duration-500">
    //     {name}
    //   </h1>
    // </div>

    <>
      <div className="flex flex-col w-full min-h-screen bg-gray-800">
        {children}
      </div>
    </>
  );
};

export default Heading;
