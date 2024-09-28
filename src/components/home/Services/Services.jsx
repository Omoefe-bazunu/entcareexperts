import React from "react";
import SectionHeads from "../SectionHeads";
import ServiceBox from "./ServiceBox";
import { useState, useEffect } from "react";
import { storage } from "../../Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Services = () => {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [s4, setS4] = useState("");

  useEffect(() => {
    const fetchS1 = async () => {
      const imageRef = ref(storage, "Images/services/s1.png");
      try {
        const url = await getDownloadURL(imageRef);
        setS1(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    const fetchS2 = async () => {
      const imageRef = ref(storage, "Images/services/s2.png");
      try {
        const url = await getDownloadURL(imageRef);
        setS2(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    const fetchS3 = async () => {
      const imageRef = ref(storage, "Images/services/s3.png");
      try {
        const url = await getDownloadURL(imageRef);
        setS3(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    const fetchS4 = async () => {
      const imageRef = ref(storage, "Images/services/s4.png");
      try {
        const url = await getDownloadURL(imageRef);
        setS4(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchS1();
    fetchS2();
    fetchS3();
    fetchS4();
  }, []);

  return (
    <div className="services w-full bg-secondary2 h-fit py-24" id="services">
      <div className="ServicesWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-16">
        <SectionHeads text={"Our Services"} color={"tet"} />
        <div className="serviceInner w-full grid grid-cols-1 justify-center">
          <div className=" w-full flex flex-row justify-center items-center">
            <ServiceBox
              text={"Ear, Nose & Throat Surgery"}
              bgImage={s1}
              uniqueClass={"s1"}
            />
            <hr className="w-0.5 h-[110%] bg-secondary" />
            <ServiceBox text={"Counselling"} bgImage={s2} uniqueClass={"s2"} />
          </div>
          <hr className="divider w-[80%] h-0.5 mx-auto bg-secondary mb-12" />
          <div className=" w-full flex flex-row justify-center items-center relative">
            <ServiceBox
              text={"Hearing evaluation"}
              bgImage={s3}
              uniqueClass={"s3"}
            />
            <hr className="btm w-0.5 h-[129%] bg-secondary absolute -top-12" />
            <ServiceBox
              text={"Speech Therapy"}
              bgImage={s4}
              uniqueClass={"s4"}
            />
          </div>
        </div>
        <a href="/AppointmentForm">
          <button className="button px-8 font-semibold w-fit py-2 flex justify-center items-center text-white uppercase rounded text-sm bg-primary">
            Make Appointment
          </button>
        </a>
      </div>
    </div>
  );
};

export default Services;
