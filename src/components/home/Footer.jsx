import React from "react";

const Footer = () => {
  return (
    <div className="Footer w-full bg-tet h-fit py-12">
      <div className="FooterWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-2 text-white">
        <p>ENT Care Experts</p>
        <div className="FooterLinks w-full flex flex-row justify-center items-center gap-x-4 gap-y-2 text-sm ">
          <a href="/" className=" cursor-pointer">
            <p>Home</p>
          </a>
          <a href="#about" className=" cursor-pointer">
            <p>About Us</p>
          </a>
          <a href="#services" className=" cursor-pointer">
            <p>Services</p>
          </a>
          <a href="#locations" className=" cursor-pointer">
            <p>Locations</p>
          </a>
          <a href="#contact" className="contact cursor-pointer">
            <p>Contact Us</p>
          </a>
        </div>
        <p className="admin text-xs text-center text-zinc-200">
          Designed by HIGH-ER ENTERPRISES - raniem57@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
