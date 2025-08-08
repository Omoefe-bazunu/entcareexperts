import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs";
import Services from "./Services/Services";
import Locations from "./Locations";
import ContactForm from "../ContactForms/ContactForm";
import WorkingHours from "./WorkingHours";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  return (
    <div className=" w-full h-fit">
      <Banner />
      <AboutUs />
      <Services />
      <Locations />
      <ContactForm />
      <WorkingHours />
    </div>
  );
};

export default HomePage;
