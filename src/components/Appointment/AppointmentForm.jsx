import React, { useState } from "react";
import SectionHeads from "../home/SectionHeads";
import { Form } from "react-router-dom";

const AppointmentForm = () => {
  return (
    <div className="Appointment w-full h-fit bg-secondary2 py-24 border-t-2 border-zinc-200 ">
      <Form
        method="post"
        action="/AppointmentForm"
        className="AppointmentWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-16 "
        id="appointment"
      >
        <SectionHeads text={"Make Appointment"} color={"primary"} />
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
        <div className=" w-[60%] flex flex-row gap-8">
          <input
            type="text"
            placeholder="Age"
            name="age"
            className="age w-full border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
          />
          <input
            type="text"
            placeholder="Sex"
            name="sex"
            className="sex w-full border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Email address"
          name="address"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="number"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
        <textarea
          type="text"
          placeholder="Type your complaint here"
          name="complaint"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
        <select
          className=" bg-inherit outline-none cursor-pointer text-tet w-[60%] text-center"
          name="location"
        >
          <option value="Select Location" className=" text-xs">
            Clinic locations to visit
          </option>
          <option value="Ogida" className=" text-xs">
            48 Igbinaduwa Street, Off Siluko Road, Ogida junction, Benin City,
            Edo State Nigeria
          </option>
          <option value="GRA" className=" text-xs">
            8, Uzzi street, Opposite Amagba town hall, GRA, Benin City, Edo
            State, Nigeria
          </option>
          <option value="" className=" text-xs">
            Nicholas Brown clinic, Anointed way, Peanut Junction Opposite Muoka
            foam, Sapele road, Delta State, Nigeria
          </option>
          <option value="" className=" text-xs">
            22, Old Benin-Agbor Road , Ogbeson Quarter, Benin City, Edo State,
            Nigeria
          </option>
        </select>
        <button
          type="submit"
          className="button px-16 font-semibold w-fit py-2 flex justify-center items-center text-white uppercase rounded text-sm bg-primary"
        >
          SUBMIT
        </button>
      </Form>
    </div>
  );
};

export default AppointmentForm;
