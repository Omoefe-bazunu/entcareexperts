import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaAmbulance } from "react-icons/fa";

const WorkingHours = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className="w-full py-24 bg-gradient-to-br from-white to-blue-50"
      id="workingHours"
    >
      <motion.div
        className="max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-8 text-center font-bold text-sky-500 tracking-tight"
        >
          Our Working Hours
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 p-4 rounded-full mb-4"
              >
                <FaCalendarAlt className="text-sky-500 text-3xl" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Routine Appointments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tuesdays, Wednesdays, Fridays, and Weekends
              </p>
              <div className="flex items-center gap-2 mt-3">
                <FaClock className="text-sky-500 text-lg" />
                <p className="text-gray-600 font-medium">9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 p-4 rounded-full mb-4"
              >
                <FaAmbulance className="text-sky-500 text-3xl" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Emergency Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Daily except Mondays and Thursdays
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="text-center mt-12">
          <a href="/AppointmentForm">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-sky-500 hover:bg-sky-700 text-white transition-all duration-300 rounded-full font-semibold uppercase tracking-wide text-sm"
            >
              Book Appointment
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkingHours;
