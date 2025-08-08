import { MdMedicalServices } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <MdMedicalServices className="text-sky-500 text-2xl" />,
      text: "Professional Services",
    },
    {
      icon: <FaMoneyBillWave className="text-sky-500 text-2xl" />,
      text: "Affordable Costs",
    },
  ];

  return (
    <div className="absolute -bottom-10 transform -translate-x-1/2 z-20 heartbeat">
      <div className="flex gap-4 px-8 py-5 bg-secondary2 rounded-xl border-b-4 border-primary shadow-lg animate-fadeIn">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-inner">
              {feature.icon}
            </div>
            <p className="text-sm font-medium text-sky-500">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Heartbeat Animation */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .heartbeat {
          animation: heartbeat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Features;
