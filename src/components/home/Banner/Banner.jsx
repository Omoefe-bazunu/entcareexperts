import { useState, useEffect } from "react";
import Features from "./features";

const Banner = () => {
  const backgrounds = [
    "/images/banner/bg1.png",
    "/images/banner/bg2.png",
    "/images/banner/bg3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div
      className="Banner relative w-full mt-16 min-h-[380px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center pb-20"
      id="banner"
    >
      {/* Background Images */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000`}
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-5/6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-10">
        {/* Text Section */}
        <div className="texts flex flex-col justify-center items-center md:items-start md:justify-start gap-4 text-white animate-slideUp">
          <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold leading-tight drop-shadow-lg">
            Book Your <span className="text-yellow-300">Appointment</span>{" "}
            <br /> Today
          </h1>
          <p className="text-lg text-center md:text-left md:text-xl max-w-sm leading-relaxed opacity-90">
            Get professional, personalized care for your health needs — because
            your wellbeing can’t wait.
          </p>
          <a href="/AppointmentForm">
            <button className="px-8 mt-2 py-3 bg-sky-500 hover:bg-sky-700 text-white transition-all duration-300 rounded-full shadow-lg font-semibold uppercase tracking-wide text-sm">
              Make Appointment
            </button>
          </a>
        </div>

        {/* Main Banner Image */}
        <div className="flex justify-center items-center animate-fadeIn">
          <img
            src="/images/banner/bg1.png"
            alt="Healthcare Professional"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </div>
  );
};

export default Banner;
