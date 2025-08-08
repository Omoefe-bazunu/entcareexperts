import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Locations", href: "#locations" },
    { label: "Contact Us", href: "#contact" },
  ];

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
    <motion.footer
      className="w-full bg-gradient-to-br from-gray-800 to-gray-900 py-16 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            ENT Care Experts
          </h2>
          <p className="text-gray-300 text-sm max-w-xs">
            Providing exceptional ear, nose, and throat care with expertise and
            compassion.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col items-center md:items-start gap-3 text-sm">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex flex-col gap-3 text-sm items-center md:items-start">
            <div className="flex items-center gap-2">
              <FaPhone className="w-5 h-5 text-blue-400" />
              <p>+234 802 496 4447</p>
            </div>
            <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
              <a
                href="https://wa.me/message/YYDGN4UAMJ57K1"
                className="hover:opacity-80 transition-opacity"
              >
                <FaWhatsapp className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://twitter.com/ENTCAREEXPERTS"
                className="hover:opacity-80 transition-opacity"
              >
                <FaTwitter className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://www.tiktok.com/@ent.care.experts?_t=8plT9bZDIJx&_r=1"
                className="hover:opacity-80 transition-opacity"
              >
                <FaTiktok className="w-6 h-6 text-blue-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div
        variants={itemVariants}
        className="mt-12 text-center text-xs text-gray-400"
      >
        <p>Powered by HIGH-ER ENTERPRISES</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
