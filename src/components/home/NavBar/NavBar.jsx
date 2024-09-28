import React from "react";
import { TfiList } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className=" w-full h-16 relative">
      <div className="h-full w-5/6 mx-auto flex flex-row">
        <div className=" w-fit h-full flex flex-row justify-start items-center">
          <a href="/">
            <p className=" text-md font-semibold text-tet text-nowrap cursor-pointer">
              ENT Care Experts
            </p>
          </a>
        </div>
        <div className=" w-full h-full flex flex-row justify-end items-center">
          <ul className="NavLinks h-full w-full flex flex-row justify-end items-center text-tet font-semibold">
            <a
              href="/"
              className="  px-4 h-full flex justify-center items-center hover:bg-tet hover:text-white"
            >
              <p>Home</p>
            </a>
            <a
              href="#about"
              className="  px-4 h-full flex justify-center items-center hover:bg-tet hover:text-white"
            >
              <p>About Us</p>
            </a>
            <a
              href="#services"
              className="  px-4 h-full flex justify-center items-center hover:bg-tet hover:text-white"
            >
              <p>Services</p>
            </a>
            <a
              href="#locations"
              className="  px-4 h-full flex justify-center items-center hover:bg-tet hover:text-white"
            >
              <p>Locations</p>
            </a>
            <a
              href="#contact"
              className="  px-4 h-full flex justify-center items-center hover:bg-tet hover:text-white"
            >
              <p>Contact Us</p>
            </a>
            <a
              href="/AppointmentForm"
              className=" button px-4 ml-2 py-2 flex justify-center items-center text-white uppercase rounded text-xs bg-primary"
            >
              <p>Make Appointment</p>
            </a>
          </ul>
        </div>
        <div className="MenuIcon  text-tet cursor-pointer hidden justify-center relative">
          {toggle ? (
            <TfiList size={40} onClick={() => setToggle(false)} />
          ) : (
            <TfiClose size={40} onClick={() => setToggle(true)} />
          )}
        </div>
      </div>
      {!toggle && (
        <div className="Bar flex flex-col bg-primary scale-up-tr w-full h-fit pt-10 pb-18 pl-4 absolute right-0 top-16 z-10">
          <ul className="menu-link flex flex-col justify-end gap-3">
            <a
              href="/"
              className=" mr-8 text-white border-b-2 border-secondary2 pb-1"
            >
              Home
            </a>
            <a
              href="#about"
              className=" mr-8 text-white border-b-2 border-secondary2 pb-1"
            >
              About Us
            </a>
            <a
              href="#services"
              className=" mr-8 text-white border-b-2 border-secondary2 pb-1"
            >
              Services
            </a>
            <a
              href="#locations"
              className=" mr-8 text-white border-b-2 border-secondary2 pb-1"
            >
              Locations
            </a>
            <a
              href="#contact"
              className=" mr-8 text-white border-b-2 border-secondary2 pb-1"
            >
              Contact
            </a>
            <a href="/AppointmentForm">
              <button className="button px-4 mt-2 mb-8 font-bold py-2 text-primary uppercase rounded text-xs bg-white">
                MAKE APPOINTMENT
              </button>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
