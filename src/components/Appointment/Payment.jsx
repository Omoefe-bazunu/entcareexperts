import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCreditCard } from "react-icons/fa";
import { storage, dbase } from "../Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const Payment = () => {
  const [s4, setS4] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || null;

  // Redirect if accessed directly
  useEffect(() => {
    if (!formData) {
      navigate("/");
    }
  }, [formData, navigate]);

  const fetchS4 = async () => {
    const imageRef = ref(storage, "Images/payments/entqr.jpg");
    try {
      const url = await getDownloadURL(imageRef);
      setS4(url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchS4();
  }, []);

  const handlePaymentSuccess = async () => {
    try {
      await addDoc(collection(dbase, "appointments"), {
        ...formData,
        paymentStatus: "success",
        paymentId: "TXN-" + Date.now(),
        timestamp: new Date(),
      });
      alert("Payment successful! Appointment booked.");
      navigate("/");
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      alert("Payment recorded but failed to save appointment.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full py-20 bg-gradient-to-br from-white to-gray-50 border-t-2 border-gray-200">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center mb-6 font-bold text-sky-500 tracking-tight"
        >
          Make Payment
        </motion.h2>
        <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center gap-8">
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 leading-relaxed max-w-md">
              Proceed to our secure payment portal to complete your appointment
              payment.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600">
              Appointment Fee:{" "}
              <span className="text-sky-500 font-semibold">NGN 20,000.00</span>
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <a
              href="https://flutterwave.com/pay/abuu9sibmcim"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Simulate payment success after redirect
                setTimeout(() => handlePaymentSuccess(), 5000);
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-700 flex items-center gap-2"
              >
                <FaCreditCard />
                Proceed to Payment
              </motion.button>
            </a>
          </motion.div>
          {s4 && (
            <motion.div variants={itemVariants} className="w-64 h-64">
              <img
                src={s4}
                alt="Payment QR Code"
                className="w-full h-full rounded-lg shadow-md"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;
