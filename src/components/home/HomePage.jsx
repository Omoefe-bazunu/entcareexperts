import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs";
import Services from "./Services/Services";
import Locations from "./Locations";
import ContactForm from "../ContactForms/ContactForm";
import WorkingHours from "./WorkingHours";

const HomePage = () => {
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
