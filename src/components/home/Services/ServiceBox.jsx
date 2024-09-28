import React from "react";

const ServiceBox = ({ text, bgImage, uniqueClass }) => {
  return (
    <div
      className={`ServiceBox ${uniqueClass} w-44 h-32 relative bg-secondary rounded-tl-3xl py-8 px-4 rounded-br-3xl my-8 mx-12 flex flex-col gap-8 justify-center items-center`}
    >
      <div className="anim rounded-full bg-white w-24 h-24 absolute -top-12 ">
        <img src={bgImage} className="w-full" />
      </div>
      <p className=" text-xs text-zinc-600 text-center mt-8 font-bold ">
        {text}
      </p>
    </div>
  );
};

export default ServiceBox;
