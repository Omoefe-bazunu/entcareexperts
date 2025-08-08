import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const services = [
    {
      text: "Ear, Nose & Throat Surgery",
      bgImage: "/images/services/s1.jpg",
      uniqueClass: "s1",
    },
    {
      text: "Counselling",
      bgImage: "/images/services/s2.jpg",
      uniqueClass: "s2",
    },
    {
      text: "Hearing Evaluation",
      bgImage: "/images/services/s3.jpg",
      uniqueClass: "s3",
    },
    {
      text: "Speech Therapy",
      bgImage: "/images/services/s4.jpg",
      uniqueClass: "s4",
    },
  ];

  return (
    <div
      className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-20"
      id="services"
    >
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-sky-500 tracking-tight"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <AnimatePresence>
            {services.map((service, idx) => (
              <motion.div
                key={service.uniqueClass}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group"
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <motion.div
                  className="absolute bottom-0 p-6 w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.text}
                  </h3>
                  <motion.a
                    href={`#${service.uniqueClass}`}
                    className=" hidden px-4 py-2 text-sm font-medium text-primary bg-white rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.a
          href="/AppointmentForm"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 mt-2 py-3 bg-sky-500 hover:bg-sky-700 text-white transition-all duration-300 rounded-full shadow-lg font-semibold uppercase tracking-wide text-sm"
        >
          Make Appointment
        </motion.a>
      </div>
    </div>
  );
};

export default Services;
