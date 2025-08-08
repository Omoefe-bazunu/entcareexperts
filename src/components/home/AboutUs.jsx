import { useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaBullseye } from "react-icons/fa";

const aboutData = [
  {
    id: 1,
    icon: <FaUsers size={22} />,
    title: "Who We Are",
    text: "We are a dedicated ENT clinical team delivering modern, compassionate care. Our specialists combine decades of experience with high standards and patient-first practices to diagnose and treat ear, nose and throat conditions with precision and empathy.",
  },
  {
    id: 2,
    icon: <FaHandshake size={22} />,
    title: "Vision Statement",
    text: "To be the trusted leader in affordable ENT care — providing world-class treatment rooted in best practices and innovation, so more people can access high quality healthcare.",
  },
  {
    id: 3,
    icon: <FaBullseye size={22} />,
    title: "Brief History",
    text: "Founded in Benin City in 2022 by Dr. Uchefe Atuyota, ENT Surgeon, the clinic partners with local hospitals to increase reach and affordability. We pride ourselves on excellent outcomes and a growing community of satisfied patients.",
  },
];

export default function AboutWithFeaturedImage() {
  const [activeId, setActiveId] = useState(1); // Who We Are active by default
  const featuredImage = "/images/about/doctor.png"; // replace this file in public/

  return (
    <section id="about" className="w-full pb-16 pt-24 bg-white">
      <div className="w-5/6 max-w-6xl mx-auto">
        {/* Section heading (optional) */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold w-full text-center mb-10 text-sky-500 tracking-tight"
        >
          About Us
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Featured Image */}
          <motion.div
            className="w-full lg:w-5/12 flex justify-center"
            animate={{ scale: activeId === 1 ? 1.02 : 1 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{ width: "100%", maxWidth: 420, height: 520 }}
            >
              {/* Change object-fit shape by swapping rounded-2xl -> rounded-full for circle */}
              <img
                src={featuredImage}
                alt="Doctor portrait"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
              {/* subtle decorative overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.12) 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Cards */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 gap-4">
            {aboutData.map((item) => {
              const isActive = activeId === item.id;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  aria-pressed={isActive}
                  // Animate scale for active/inactive
                  animate={{ scale: isActive ? 1.02 : 0.99 }}
                  transition={{ duration: 0.35 }}
                  className={`relative text-left rounded-2xl p-6 cursor-pointer overflow-hidden border ${
                    isActive
                      ? "bg-white border-primary shadow-xl"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-2 ${
                          isActive ? "text-sky-500" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* paragraph: animates maxHeight to reveal/hide */}
                      <motion.div
                        initial={false}
                        animate={{
                          maxHeight: isActive ? 400 : 48,
                          opacity: isActive ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.4 }}
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <p
                          className={`text-sm text-gray-700`}
                          style={{ lineHeight: "1.6rem" }}
                        >
                          {item.text}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* subtle border accent when active */}
                  {isActive && (
                    <motion.div
                      layoutId="accent"
                      style={{
                        position: "absolute",
                        right: -20,
                        top: -20,
                        width: 160,
                        height: 160,
                        borderRadius: 24,
                        background: "rgba(59,130,246,0.04)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* small inline styles to keep truncation smooth on older browsers */}
      <style>{`
        /* Ensure the card text transition feels natural on collapse */
        .line-clamp-faux {
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
}
