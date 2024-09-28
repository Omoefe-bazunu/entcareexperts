import React from "react";
import { useState } from "react";
import SectionHeads from "../home/SectionHeads";
import { Form } from "react-router-dom";

const ContactForm = () => {
  const [value, setValue] = useState("");

  return (
    <div className="Contact w-full h-fit bg-secondary2 py-24 ">
      <Form
        method="post"
        action="/"
        className="ContactWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-16"
        id="contact"
      >
        <SectionHeads text={"Contact Us"} color={"tet"} />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
        <input
          type="text"
          placeholder="Email/Phone Number"
          name="contact"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
        <input
          placeholder="Type your message here"
          name="message"
          className=" w-[60%] border-b-2 border-zinc-200 pb-2 bg-secondary2 text-center outline-none"
        />
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

export default ContactForm;
