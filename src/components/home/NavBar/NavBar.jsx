import { TfiList, TfiClose } from "react-icons/tfi";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Locations", href: "#locations" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="w-full h-16 bg-white shadow-lg fixed top-0 left-0 z-50">
      <div className="h-full w-5/6 max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="/"
          className="text-xl font-extrabold text-gray-800 tracking-tight hover:text-primary transition-colors duration-300"
        >
          ENT Care Experts
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 font-medium text-gray-700">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative px-4 py-2 rounded-lg text-sm uppercase tracking-wide  transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/AppointmentForm"
            className="px-8 py-3 bg-sky-500 hover:bg-sky-700 text-white transition-all duration-300 rounded-full shadow-lg font-semibold uppercase tracking-wide text-sm"
          >
            Make Appointment
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-gray-700">
          {toggle ? (
            <TfiList size={28} onClick={() => setToggle(false)} />
          ) : (
            <TfiClose size={28} onClick={() => setToggle(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 w-3/4 max-w-sm h-screen bg-gray-800 text-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          toggle ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <ul className="flex flex-col gap-6 p-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative text-lg font-medium border-b border-gray-600 pb-3 hover:pl-3 transition-all duration-300"
              onClick={() => setToggle(true)}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
          <a href="/AppointmentForm">
            <button className="w-full mt-6 py-3 bg-sky-500 text-white font-semibold uppercase rounded-lg shadow-md hover:bg-sky-700 hover:shadow-lg transition-all duration-300">
              Make Appointment
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
