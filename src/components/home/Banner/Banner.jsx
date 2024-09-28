import React from "react";
import Features from "./features";
import { storage } from "../../Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

const Banner = () => {
  const [bg, setBg] = useState("");
  const [banner, setBanner] = useState("");

  useEffect(() => {
    const fetchBg = async () => {
      const imageRef = ref(storage, "Images/banner/bg.png");
      try {
        const url = await getDownloadURL(imageRef);
        setBg(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchBanner = async () => {
      const imageRef = ref(storage, "Images/banner/banner.png");
      try {
        const url = await getDownloadURL(imageRef);
        setBanner(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchBg();
    fetchBanner();
  }, []);

  return (
    <div
      className="Banner w-full h-[350px] bg-cover bg-center bg-no-repeat py-8 flex flex-col items-center relative"
      id="banner"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bannerWrap w-5/6 mx-auto flex flex-row justify-center items-center">
        <div className="texts w-full flex flex-col justify-start gap-2 text-tet">
          <p className="mainText text-3xl font-semibold">
            {" "}
            BOOK AN APPOINTMENT
          </p>
          <p className="subText text-xl w-72">
            and get professional attention for your health needs
          </p>
          <a href="/AppointmentForm">
            <button className="button px-8 font-semibold mt-4 w-fit py-2 flex justify-center items-center text-white uppercase rounded text-sm bg-primary">
              Make Appointment
            </button>
          </a>
        </div>
        <div className="bannerImg w-full flex justify-center items-center">
          <img src={banner} alt=" bannerImage" className=" w-64" />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Banner;
