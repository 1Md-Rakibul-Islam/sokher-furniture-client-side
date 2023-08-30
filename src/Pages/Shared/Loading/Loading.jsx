import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col w-full rounded-md shadow-md h-34 animate-pulse">
      <div className="h-36 rounded-t bg-gray-400"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
        <div className="w-3/4 h-3 rounded bg-gray-400"></div>
        <div className="w-full h-3 rounded bg-gray-400"></div>
        <div className="w-full h-3 rounded bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Loading;
