import { useEffect } from "react";
import SectionHeads from "../home/SectionHeads";
import { useState } from "react";
import { storage } from "../Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Payment = () => {
  const [s4, setS4] = useState("");

  const fetchS4 = async () => {
    const imageRef = ref(storage, "Images/payments/entqr.jpg");
    try {
      const url = await getDownloadURL(imageRef);
      setS4(url);
      console.log(`appo ${url}`);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchS4();
  }, []);

  return (
    <div className="Payment w-full h-fit py-24 border-t-2 border-zinc-200">
      <div className="PaymentWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-16">
        <SectionHeads text={"Payment"} color={"primary"} />
        <div className=" flex flex-col gap-4 w-full justify-center items-center">
          <p className=" w-[50%] text-center text-tet">
            Click the button below to get redirected to the Admin page on
            WhatsApp to make payment for your Appointment.
          </p>
          <p className=" w-[50%] text-center text-tet">
            Appointment Fee:{" "}
            <span className=" text-primary font-medium">NGN20,000.00</span>
          </p>
          <a href="https://flutterwave.com/pay/abuu9sibmcim" target="_blank">
            <button className="button px-4 mt-8 mb-8 font-bold py-2 text-white uppercase rounded text-xs bg-primary">
              PROCEED TO PAYMENT
            </button>
          </a>
          <div className="w-60 h-60">
            <img src={s4} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
