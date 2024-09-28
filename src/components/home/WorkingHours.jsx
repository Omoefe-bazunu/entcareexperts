import React from "react";
import SectionHeads from "./SectionHeads";

const WorkingHours = () => {
  return (
    <div className="WorkingHrs w-full h-fit py-24" id="workingHours">
      <div className="WorkingHrsWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-8">
        <SectionHeads text={"Working Hours"} color={"primary"} />
        <div className="timing w-full text-tet flex flex-col justify-center items-center gap-2">
          <p className=" text-center w-[30%]">
            Routine visits are by appointment Tuesdays, Wednesday, Friday and
            Weekends
          </p>
          <p className=" text-center w-full">9am - 4pm</p>
        </div>
        <hr className=" w-[80%] h-0.5 mx-auto bg-zinc-200" />
        <div className="timing w-full text-tet flex justify-center items-center">
          <p className=" w-[30%] text-center">
            Emergencies are everyday except Monday, Thursday
          </p>
        </div>
        <a href="/AppointmentForm">
          <button className="button px-8 font-semibold mt-4 w-fit py-2 flex justify-center items-center text-white uppercase rounded text-sm bg-primary">
            Make Appointment
          </button>
        </a>
      </div>
    </div>
  );
};

export default WorkingHours;
