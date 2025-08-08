import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbase } from "../Firebase";

// Import Toastify components and styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const colRef = collection(dbase, "messages");
      await addDoc(colRef, {
        info: formData.contact,
        message: formData.message,
        name: formData.name,
        createdAt: serverTimestamp(),
      });
      setFormData({ name: "", contact: "", message: "" });
      toast.success("Message sent successfully!");
      setLoading(false);

      // Delay navigation a bit so user can see toast
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-500 py-20 px-4 bg-[url('/images/contact/bg.jpg')] bg-cover bg-center bg-opacity-30"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/contact/bg.jpg')`,
      }}
      id="contact"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-white text-center w-full tracking-tight"
        >
          Get in Touch
        </motion.h2>
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-700 placeholder-gray-400"
                required
                disabled={loading}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email or Phone Number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-700 placeholder-gray-400"
                required
                disabled={loading}
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                required
                disabled={loading}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`px-10 py-4 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-sky-700"
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
