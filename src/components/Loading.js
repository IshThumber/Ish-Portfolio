import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-bunker-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-genoa-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl font-medium text-wild-sand-200">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
