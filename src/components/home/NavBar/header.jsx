import { useState, useEffect } from "react";
import { storage } from "../../Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Navheader = () => {
  const [call, setCall] = useState("");
  const [wh, setWh] = useState("");
  const [x, setX] = useState("");
  const [tik, setTik] = useState("");

  useEffect(() => {
    const fetchCall = async () => {
      const imageRef = ref(storage, "Images/navBar/call.png");
      try {
        const url = await getDownloadURL(imageRef);
        setCall(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    const fetchWh = async () => {
      const imageRef = ref(storage, "Images/navBar/wh.png");
      try {
        const url = await getDownloadURL(imageRef);
        setWh(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    const fetchX = async () => {
      const imageRef = ref(storage, "Images/navBar/x.png");
      try {
        const url = await getDownloadURL(imageRef);
        setX(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    const fetchTik = async () => {
      const imageRef = ref(storage, "Images/navBar/tik.png");
      try {
        const url = await getDownloadURL(imageRef);
        setTik(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchCall();
    fetchWh();
    fetchX();
    fetchTik();
  }, []);

  return (
    <div className=" w-full bg-primary hidden">
      <div className="header py-2 h-fit w-5/6 mx-auto flex flex-row items-center">
        <div className="call w-full flex flex-row justify-start items-center gap-2">
          <img src={call} alt="call-icon" className=" w-4 cursor-pointer" />
          <p className=" text-white text-sm">+234 802 496 4447</p>
        </div>
        <div className="socialLinks w-full flex flex-row justify-end items-center gap-4">
          <a href="https://wa.me/message/YYDGN4UAMJ57K1">
            <img src={wh} alt="whatsApp-icon" className=" w-4 cursor-pointer" />
          </a>
          <a href="https://twitter.com/ENTCAREEXPERTS">
            <img src={x} alt="x-icon" className=" w-4 cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@ent.care.experts?_t=8plT9bZDIJx&_r=1">
            <img src={tik} alt="tiktok-icon" className=" w-4 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navheader;
