import React from "react";
import Navheader from "./header";
import NavBar from "./NavBar";

const NavLayout = () => {
  return (
    <div className="">
      <div className="NavBar w-full h-fit">
        <Navheader />
        <NavBar />
      </div>
    </div>
  );
};

export default NavLayout;
