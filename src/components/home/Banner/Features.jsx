import { storage } from "../../Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

const Features = () => {
  const [s1, setS1] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchS1 = async () => {
      const imageRef = ref(storage, "Images/banner/s1.png");
      try {
        const url = await getDownloadURL(imageRef);
        setS1(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchPrice = async () => {
      const imageRef = ref(storage, "Images/banner/price.png");
      try {
        const url = await getDownloadURL(imageRef);
        setPrice(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchS1();
    fetchPrice();
  }, []);

  return (
    <div>
      <div className="FeaturesWrap w-fit flex flex-row justify-center items-center gap-4 px-8 py-4 h-fit bg-secondary2 rounded-xl border-b-4 border-primary">
        <div className=" flex flex-row justify-center items-center gap-2">
          <img src={s1} alt="service-icon" className="serviceIcon w-8" />
          <p className="text-sm">Professional Services</p>
        </div>

        <div className=" flex flex-row justify-center items-center gap-2">
          <img src={price} alt="costs-icon" className="serviceIcon w-8" />
          <p className="text-sm">Affordable costs</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
