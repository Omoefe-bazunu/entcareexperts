import React from "react";
import SectionHeads from "./SectionHeads";
import { storage } from "../Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      const imageRef = ref(storage, "Images/about/about.png");
      try {
        const url = await getDownloadURL(imageRef);
        setAbout(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="About w-full h-fit mb-24" id="about">
      <div className="AboutWrap w-5/6 mx-auto flex flex-col gap-16 mt-24">
        <SectionHeads text={"About Us"} color={"primary"} />
        <div className="aboutInner flex flex-row w-full">
          <div className=" flex justify-center items-center w-full">
            <img src={about} alt="image" className="aboutImg w-72" />
          </div>
          <div className=" flex flex-col w-full gap-8">
            <div className=" flex flex-col gap-2 w-full h-fit">
              <p className=" font-bold text-primary text-sm">Who We Are</p>
              <p className=" text-tet text-sm">
                ENT Care Experts is a leading ENT clinic dedicated to diagnosing
                and treating a wide range of ear, nose, and throat disorders.
                Our experienced team of ENT specialists is equipped with an
                array of modern technology and techniques to ensure accurate
                diagnosis and effective treatment.
              </p>
              <hr className=" w-20 h-0.5 bg-primary" />
            </div>
            <div className=" flex flex-col gap-2 w-full h-fit">
              <p className=" font-bold text-primary text-sm ">
                Vision Statement
              </p>
              <p className=" text-tet text-sm">
                "To be a leader in providing affordable ENT specialist care,
                ensuring every patient has access to world-class treatment
                rooted in global standards and best practices, fostering
                healthier communities with compassionate, innovative, and
                accessible healthcare solutions."
              </p>
              <hr className=" w-20 h-0.5 bg-primary" />
            </div>
            <div className=" flex flex-col gap-2 w-full h-fit">
              <p className=" font-bold text-primary text-sm">Brief History</p>
              <p className=" text-tet text-sm">
                Clinic was founded in Benin city 2022 by Dr Uchefe Atuyota, ENT
                Surgeon and is embedded in several hospitals to afford easy
                access and affordability. We have had over 90% complication free
                procedures done with zero mortality since inception. Everyday
                more and more of our clients return with loved ones with similar
                complaints who are themselves satisfied clients.We continue to
                strive to make cutting edge health care solutions available to
                all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
