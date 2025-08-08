import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaVenusMars,
  FaMapMarkerAlt,
  FaPhone,
  FaFileMedical,
} from "react-icons/fa";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    address: "",
    number: "",
    complaint: "",
    location: "",
  });

  const navigate = useNavigate();

  const locations = [
    {
      address:
        "Salem Hospital, Salem City, Before Igbudu Market, Warri, Delta State",
      id: "l1",
    },
    {
      address:
        "Maximum Care Hospital, Off Eku Amukpe Road, Sapele, Delta State",
      id: "l2",
    },
    {
      address:
        "Whiteroyal Hospital, 8 Alhaji Momodu Close by T&T Bar off Hospital Road, Jakpa, Warri, Delta State",
      id: "l3",
    },
    {
      address:
        "Bosede Specialist Hospital, 3 Aideyan Crescent, off Akhionbare Road, GRA Benin City, Delta State",
      id: "l4",
    },
    {
      address:
        "Nicholas Brown Clinic, Anointed Way, Peanut Junction Opposite Muoka Foam, Sapele Road, Delta State, Nigeria",
      id: "l5",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to payment page
    navigate("/payment", { state: { formData } });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
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
          className="text-4xl mb-6 text-center font-bold text-sky-500 tracking-tight"
        >
          Book An Appointment
        </motion.h2>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <FaUser className="text-sky-600 text-xl" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-8"
            >
              <div className="relative flex items-center gap-3 w-full sm:w-1/2">
                <FaVenusMars className="text-sky-600 text-xl" />
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div className="relative flex items-center gap-3 w-full sm:w-1/2">
                <FaVenusMars className="text-sky-600 text-xl" />
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500"
                >
                  <option value="" disabled>
                    Select Sex
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-sky-600 text-xl" />
                <input
                  type="email"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <FaPhone className="text-sky-600 text-xl" />
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-start gap-3">
                <FaFileMedical className="text-sky-600 text-xl mt-3" />
                <textarea
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  placeholder="Describe Your Complaint"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-sky-600 text-xl" />
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500"
                >
                  <option value="" disabled>
                    Select Clinic Location
                  </option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.address}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition-all"
              >
                Proceed to Payment
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AppointmentForm;
