import React from "react";
import { Outlet } from "react-router-dom";
import NavLayout from "./NavBar/NavLayout";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="overflow-x-hidden w-screen h-screen flex flex-col">
      <NavLayout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
