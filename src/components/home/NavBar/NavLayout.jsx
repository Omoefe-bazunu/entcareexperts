import React from "react";
import Navheader from "./header";
import NavBar from "./NavBar";

const NavLayout = () => {
  return (
    <div>
      <div className="NavBar w-full">
        <Navheader />
        <NavBar />
      </div>
    </div>
  );
};

export default NavLayout;
