import { Outlet } from "react-router-dom";
import NavLayout from "./NavBar/NavLayout";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="overflow-x-hidden w-screen min-h-screen flex flex-col">
      <NavLayout />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
