import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const Locations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div
      className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20 relative overflow-hidden"
      id="locations"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569336415962-a510987eda20?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 tracking-tight"
        >
          Our Locations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <AnimatePresence>
            {locations.map((location, idx) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20, scale: idx === 0 ? 1 : 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: idx === activeIndex ? 1 : 0.9,
                }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(0)}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === activeIndex ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: idx === activeIndex ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaMapMarkerAlt className="text-primary text-2xl" />
                  </motion.div>
                  <p className="relative text-gray-700 text-lg font-medium z-10">
                    {location.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Locations;
