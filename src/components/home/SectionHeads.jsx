import React from "react";

const SectionHeads = ({ text, color }) => {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center w-full ">
      <h2 className={`text-${color} text-center font-medium text-lg`}>
        {text}
      </h2>
      <hr className=" w-8 h-0.5 bg-tet" />
    </div>
  );
};

export default SectionHeads;
